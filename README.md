# Fundraising for Twenty website

The public product site at https://www.fundraisingfortwenty.com/. Astro generates
the homepage as complete HTML at build time. A small site script controls the
Details panel and workflow navigation; the enquiry and contact form runtime is
loaded only when a visitor opens a form panel.

## Local workflow

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm run check:html
```

The homepage is `src/pages/index.astro`. Shared metadata is in
`src/layouts/SiteLayout.astro`; `src/pages/robots.txt.ts` points to Astro's
generated sitemap. The 404 page is `src/pages/404.astro`. The build uses the
Vercel static adapter and has no SPA fallback.

Static visual components are rendered from their existing TSX source during the
Astro build. They send HTML and CSS to visitors, with no React hydration.
The form panels retain React because their current multi-step form and Radix
dialog behaviour require client interaction. They are split into an on-demand
JavaScript chunk.

## API and deployment

The existing Vercel functions at `/api/apply` and `/api/contact` keep their
JSON contracts. Enquiry capture uses Google Sheets in production
(`CAPTURE_MODE=google_sheets` and the `GOOGLE_*` variables); local NDJSON
capture is not durable on serverless hosting. Contact delivery uses Resend.
See `.env.example` for variables.

Vercel builds with `npm run build`. Deployments should be checked for complete
raw HTML, a one-URL sitemap, robots.txt, static assets, real 404 status, and
working form submissions before promoting to production.
