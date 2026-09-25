import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import path from "node:path";

export default defineConfig({
  site: "https://www.fundraisingfortwenty.com",
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()],
  adapter: vercel(),
  vite: {
    resolve: { alias: { "@": path.resolve("./src") } },
  },
});
