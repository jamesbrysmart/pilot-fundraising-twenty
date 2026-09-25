import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const home = readFileSync("dist/index.html", "utf8");
const notFound = readFileSync("dist/404.html", "utf8");
const robots = readFileSync("dist/robots.txt", "utf8");
const sitemap = readFileSync("dist/sitemap-0.xml", "utf8");
const site = JSON.parse(readFileSync("src/config/site.json", "utf8"));
const homeUrl = new URL("/", site.origin).href;
const sitemapUrl = new URL("/sitemap-index.xml", site.origin).href;

assert.match(home, /<h1\b[^>]*>\s*A new fundraising/i);
assert.match(home, /<main\b/);
assert.ok(home.includes(`<link rel="canonical" href="${homeUrl}"`));
assert.match(home, /<script type="application\/ld\+json"/);
assert.match(home, /<a href="#workflow-donor-360"/);
assert.match(home, /<details name="faq"/);
assert.match(home, /data-details-content="costs-scope"/);
assert.doesNotMatch(home, /id="root"/);

for (const anchor of [
  "workflow-donor-360",
  "workflow-gift-intake",
  "workflow-recurring",
  "workflow-pipeline",
  "workflow-dashboard",
]) {
  assert.match(home, new RegExp(`<article id="${anchor}"`));
}
assert.equal((home.match(/<h1\b/g) ?? []).length, 1);
assert.equal((home.match(/<details name="faq"/g) ?? []).length, 9);
assert.match(notFound, /<meta name="robots" content="noindex, nofollow"/);
assert.ok(robots.includes(`Sitemap: ${sitemapUrl}`));
assert.ok(sitemap.includes(`<loc>${homeUrl}</loc>`));
assert.equal((sitemap.match(/<url>/g) ?? []).length, 1);

console.log("Static HTML, metadata, content, sitemap, robots, and 404 checks passed.");
