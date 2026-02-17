import crypto from "node:crypto";
import fs from "node:fs/promises";
import { URLSearchParams } from "node:url";

type JsonRecord = Record<string, unknown>;

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

function base64UrlEncode(input: string | Buffer): string {
  const buffer = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+/g, "");
}

function parsePrivateKey(raw: string): string {
  // Vercel env vars often store newlines as "\n".
  return raw.replace(/\\n/g, "\n");
}

async function readJsonBody(req: any): Promise<JsonRecord> {
  if (req?.body && typeof req.body === "object") {
    return req.body as JsonRecord;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
  }
  const text = Buffer.concat(chunks).toString("utf8").trim();
  if (!text) return {};
  return JSON.parse(text) as JsonRecord;
}

function json(res: any, status: number, payload: JsonRecord) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function isDebugEnabled(): boolean {
  const raw = getEnv("APPLY_DEBUG")?.toLowerCase();
  return raw === "1" || raw === "true" || raw === "yes";
}

function safeErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string") return error;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

function pickString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateEmail(value: string): boolean {
  // Intentionally lightweight. This is not a full RFC parser.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function appendToNdjson(path: string, record: JsonRecord) {
  await fs.appendFile(path, `${JSON.stringify(record)}\n`, "utf8");
}

async function getGoogleAccessToken(params: {
  serviceAccountEmail: string;
  privateKey: string;
}): Promise<string> {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const header = base64UrlEncode(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claimSet = base64UrlEncode(
    JSON.stringify({
      iss: params.serviceAccountEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: nowSeconds,
      exp: nowSeconds + 60 * 60,
    }),
  );
  const unsignedToken = `${header}.${claimSet}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = base64UrlEncode(
    signer.sign(parsePrivateKey(params.privateKey)),
  );
  const assertion = `${unsignedToken}.${signature}`;

  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  }).toString();

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google token exchange failed: ${response.status} ${text}`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Google token exchange failed: missing access_token");
  }
  return data.access_token;
}

async function appendToGoogleSheet(params: {
  sheetId: string;
  tabName: string;
  accessToken: string;
  row: Array<string | number | boolean | null>;
}) {
  const range = `${params.tabName}!A1`;
  const endpoint = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${params.sheetId}/values/${encodeURIComponent(range)}:append`,
  );
  endpoint.searchParams.set("valueInputOption", "USER_ENTERED");
  endpoint.searchParams.set("insertDataOption", "INSERT_ROWS");

  const response = await fetch(endpoint.toString(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      range,
      majorDimension: "ROWS",
      values: [params.row],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Sheets append failed: ${response.status} ${text}`);
  }
}

export default async function handler(req: any, res: any) {
  // Minimal CORS for local/proxy scenarios. Same-origin requests won't need this.
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    json(res, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const body = await readJsonBody(req);

    // Honeypot: if present, pretend success but don't store.
    const honeypot = pickString(body.website ?? body.companyWebsite ?? body.hp);
    if (honeypot) {
      json(res, 200, { ok: true });
      return;
    }

    const name = pickString(body.name);
    const email = pickString(body.email);
    const organization = pickString(body.organization);
    const currentCrm = pickString(body.currentCrm);
    const goals = pickString(body.goals);

    if (!name || !email || !organization || !goals) {
      json(res, 400, { ok: false, error: "Missing required fields" });
      return;
    }
    if (!validateEmail(email)) {
      json(res, 400, { ok: false, error: "Invalid email" });
      return;
    }

    const submittedAt = new Date().toISOString();
    const pageUrl = pickString(body.pageUrl);
    const userAgent = pickString(req.headers?.["user-agent"]);
    const utm = (typeof body.utm === "object" && body.utm ? body.utm : {}) as JsonRecord;

    const record: JsonRecord = {
      submittedAt,
      name,
      email,
      organization,
      currentCrm,
      goals,
      pageUrl,
      utm,
      userAgent,
    };

    const captureMode = (getEnv("CAPTURE_MODE") ?? "ndjson").toLowerCase();
    const requestId = crypto.randomUUID?.() ?? crypto.randomBytes(16).toString("hex");

    if (captureMode === "google_sheets") {
      const sheetId = getEnv("GOOGLE_SHEET_ID");
      const tabName = getEnv("GOOGLE_SHEET_TAB") ?? "Applications";
      const serviceAccountEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
      const privateKey = getEnv("GOOGLE_PRIVATE_KEY");

      if (!sheetId || !serviceAccountEmail || !privateKey) {
        console.error("[apply]", {
          requestId,
          error: "Google Sheets capture not configured",
          missing: {
            GOOGLE_SHEET_ID: !sheetId,
            GOOGLE_SERVICE_ACCOUNT_EMAIL: !serviceAccountEmail,
            GOOGLE_PRIVATE_KEY: !privateKey,
          },
        });
        json(res, 500, {
          ok: false,
          error:
            "Google Sheets capture not configured (missing GOOGLE_* env vars)",
          requestId,
        });
        return;
      }

      console.log("[apply]", {
        requestId,
        captureMode,
        sheetId,
        tabName,
        serviceAccountEmail,
      });

      const accessToken = await getGoogleAccessToken({
        serviceAccountEmail,
        privateKey,
      });

      await appendToGoogleSheet({
        sheetId,
        tabName,
        accessToken,
        row: [
          submittedAt,
          name,
          email,
          organization,
          currentCrm,
          goals,
          pageUrl,
          userAgent,
          JSON.stringify(utm),
        ],
      });

      json(res, 200, { ok: true, requestId });
      return;
    }

    const defaultPath = "/tmp/fundraising-pilot-applications.ndjson";
    const submissionsPath = getEnv("SUBMISSIONS_PATH") ?? defaultPath;
    await appendToNdjson(submissionsPath, record);
    json(res, 200, { ok: true });
  } catch (error: any) {
    const requestId = crypto.randomUUID?.() ?? crypto.randomBytes(16).toString("hex");
    const message = safeErrorMessage(error);
    console.error("[apply]", { requestId, error: message, stack: error?.stack });

    // Avoid returning internals in detail by default. If APPLY_DEBUG=1, return the message.
    json(res, 500, {
      ok: false,
      error: isDebugEnabled() ? message : "Submission failed",
      requestId,
    });
  }
}
