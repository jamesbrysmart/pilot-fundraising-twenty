import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import site from "./src/config/site.json";

export default defineConfig({
  site: site.origin,
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()],
  adapter: vercel(),
});
