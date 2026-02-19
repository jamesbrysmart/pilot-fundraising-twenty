# Application Form Working Doc

Status: Working
Owner: Product / Engineering
Last updated: 2026-02-19

## Purpose
This document aligns the team on:
- what the application form is (and is not) in this pilot funnel,
- what data we collect and why,
- how submissions are captured for short-term pilot operations,
- how we keep capture reliable without overbuilding.

This is an alignment doc, not a UI spec. The form UI can evolve as long as intent and capture remain consistent.

## Role In The Funnel
- Landing page is the decision surface.
- Application form is the qualification and fit signal capture surface.
- We optimize for qualified applications, not raw volume.

## Current Implementation Snapshot (Code Reality)
As of 2026-02-19:
- The active experience is the application sheet/panel on `/`.
- Submissions from the application sheet are captured server-side via `POST /api/apply` (NDJSON by default, or Google Sheets when configured).

Primary form implementation:
- `src/components/application/ApplicationSheetProvider.tsx`

Other notes:
- Keep the experience as a single-page app: the application surface lives on `/` as an in-page sheet/panel.

## Form Data (Baseline Fields)
Current fields in the application sheet:
- `name` (required)
- `email` (required, email input type)
- `organization` (required)
- `currentCrm` (optional)
- `goals` (required, free text)

Guidance:
- Prefer fields that improve review quality and reduce low-fit submissions without sounding exclusionary.
- Avoid collecting data we won't actually use in review.

## UX Intent (Non-Prescriptive)
- Low friction: "five fields, 3-5 minutes" baseline posture.
- Clear expectations: "reviewed on a rolling basis", "follow up within a few days" (confirm actual SLA).
- Graceful failure: if submission capture fails, we should show a clear retry path and preserve entered data.
- Accessibility basics: labels, required indicators, keyboard navigation.

## Submission Semantics
Definition: a submission is "captured" only when it has been written to the chosen system of record (not when the UI shows success).

Guideline:
- UI shows success only after we receive `2xx` from the capture endpoint.
- On failure:
  - show an error toast/message,
  - do not clear the form,
  - allow retry.

## Capturing Applications (Short-Term Data)
We want:
- lightweight capture (short-term pilot ops),
- minimal operational burden,
- no sensitive credentials shipped to the browser,
- enough spam protection to avoid poisoning the inbox.

### Option A: Google Form Link / Embed
How it works:
- Send users to a Google Form (new tab) or embed on the page.

Pros:
- Fastest to ship.
- Built-in response capture to Sheets.

Cons:
- UI/brand mismatch; limited control.
- Harder to keep the "panel" UX.
- Can reduce completion if it feels like "leaving the site".

When to choose:
- We need to be live in hours and accept UX compromise temporarily.

### Option B: Site Form UI + Serverless Function -> Google Sheets
How it works:
- Keep current React form UI.
- Browser `POST`s to `/api/apply`.
- Server-side code (Vercel Function) appends to Google Sheets using a Google service account.

Pros:
- Keeps our intended UX.
- No Google credentials in the browser.
- Lightweight ops (no server to run).
- Easy to change destination later (Airtable, DB, email, CRM).

Cons:
- Requires small backend code and Google service account setup.
- Needs basic spam mitigation (CAPTCHA or similar) since it's a public endpoint.

When to choose:
- UI matters and we want a reliable, low-ops capture path.

### Option C: Site Form UI -> n8n Webhook -> Email/Sheets
How it works:
- Browser `POST`s to an n8n webhook.
- n8n sends email and/or writes to Sheets.

Pros:
- Fast iteration on workflows.
- Non-code changes possible after initial setup.

Cons:
- Self-hosting n8n is real ops overhead for this pilot.
- Hosted n8n reduces ops but adds another vendor surface.

When to choose:
- We strongly value workflow iteration and are okay with the operational footprint.

### Option D: Form Backend Vendor (Formspree/Basin/Getform) -> Email
How it works:
- Browser `POST`s to a vendor endpoint.
- Vendor emails submissions and stores them in a dashboard.

Pros:
- Fast and minimal code.
- No Google setup required.

Cons:
- Another vendor; may store PII.
- Less control over long-term portability.

When to choose:
- "Email is enough" and we want near-zero engineering time.

## Data Model (Minimal)
Regardless of capture option, we should store (or email) these fields:
- `submittedAt` (server time)
- `name`, `email`, `organization`, `currentCrm`, `goals`
- `pageUrl` (where submit happened)
- `userAgent` (optional; can help with debugging/spam)
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` (optional; if present)

## Privacy / Retention (Pilot-Appropriate)
- Keep retention short by default (example: delete after pilot selection + a short buffer).
- Do not collect unnecessary sensitive fields.
- Avoid storing full request bodies in long-lived logs (especially on success).

## Open Questions (To Confirm Before Shipping Capture)
- Confirmation: response expectation/SLA language (copy currently says "within a few days").
- Who receives the submissions (single inbox vs small group)?
- Do we need a "copy to applicant" email now, or only internal notification?
- Expected volume and spam tolerance (do we need CAPTCHA on day 1?).
- Any compliance constraints (PII handling expectations)?

## Deploy Notes (Option B)
Google Sheets mode:
- Set `CAPTURE_MODE=google_sheets` and the `GOOGLE_*` env vars on Vercel.
- Share the destination sheet with the service account email (`GOOGLE_SERVICE_ACCOUNT_EMAIL`) so it has edit access.
