type JsonRecord = Record<string, unknown>;
type RequestLike = AsyncIterable<unknown> & {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};
type ResponseLike = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
};

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

async function readJsonBody(req: RequestLike): Promise<JsonRecord> {
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

function json(res: ResponseLike, status: number, payload: JsonRecord) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function pickString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitizeForText(input: string): string {
  return input.replace(/\r/g, "").trim();
}

export default async function handler(req: RequestLike, res: ResponseLike) {
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

    const honeypot = pickString(body.website ?? body.companyWebsite ?? body.hp);
    if (honeypot) {
      json(res, 200, { ok: true });
      return;
    }

    const name = pickString(body.name);
    const email = pickString(body.email);
    const message = pickString(body.message);
    const source = pickString(body.source) || "unknown";
    const pageUrl = pickString(body.pageUrl);
    const submittedAt = new Date().toISOString();

    if (!name || !email || !message) {
      json(res, 400, { ok: false, error: "Missing required fields" });
      return;
    }
    if (!validateEmail(email)) {
      json(res, 400, { ok: false, error: "Invalid email" });
      return;
    }

    const resendApiKey = getEnv("RESEND_API_KEY");
    const fromEmail = getEnv("CONTACT_FROM_EMAIL");
    const toEmail = getEnv("CONTACT_TO_EMAIL");
    const subjectPrefix = getEnv("CONTACT_SUBJECT_PREFIX") ?? "[Contact]";

    if (!resendApiKey || !fromEmail || !toEmail) {
      json(res, 500, {
        ok: false,
        error:
          "Contact email not configured (set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL).",
      });
      return;
    }

    const emailText = [
      `${subjectPrefix} New message`,
      "",
      `Name: ${sanitizeForText(name)}`,
      `Email: ${sanitizeForText(email)}`,
      `Source: ${sanitizeForText(source)}`,
      `Page URL: ${sanitizeForText(pageUrl) || "(not provided)"}`,
      `Submitted At: ${submittedAt}`,
      "",
      "Message:",
      sanitizeForText(message),
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `${subjectPrefix} ${name}`,
        text: emailText,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      json(res, 502, {
        ok: false,
        error: `Email send failed: ${response.status} ${errorBody}`,
      });
      return;
    }

    json(res, 200, { ok: true });
  } catch {
    json(res, 500, { ok: false, error: "Server error" });
  }
}
