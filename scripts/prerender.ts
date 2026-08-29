/**
 * Loryfy Static Pre-rendering Generator
 * Builds static, crawlable HTML files with complete pre-rendered SEO metadata,
 * Open Graph tags, canonical links, hreflang, and JSON-LD schemas for all public routes.
 */

import fs from "fs";
import path from "path";
import { getAllPublicRoutes } from "../src/utils/routes";
import { injectSeoIntoHtml } from "../src/utils/htmlInjector";

function prerender() {
  const distDir = path.join(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error("[Prerender Error] dist/index.html not found. Run 'vite build' first.");
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, "utf-8");
  const routes = getAllPublicRoutes();

  console.log(`[Prerender] Generating crawlable static HTML for ${routes.length} public routes...`);

  let count = 0;

  for (const route of routes) {
    const html = injectSeoIntoHtml(templateHtml, route.lang, route.page, route.slug);

    let targetDir = "";
    if (route.page === "home") {
      targetDir = path.join(distDir, route.lang);
    } else if (route.page === "opportunity-detail" && route.slug) {
      targetDir = path.join(distDir, route.lang, "opportunity", route.slug);
    } else if (route.page === "story-detail" && route.slug) {
      targetDir = path.join(distDir, route.lang, "stories", route.slug);
    } else if (route.page === "seo-page" && route.slug) {
      targetDir = path.join(distDir, route.lang, route.slug);
    } else {
      targetDir = path.join(distDir, route.lang, route.page);
    }

    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
    count++;

    // For non-prefixed fallback convenience (e.g. /about or /download)
    if (route.lang === "en") {
      let fallbackDir = "";
      if (route.page === "home") {
        fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
      } else if (route.page === "opportunity-detail" && route.slug) {
        fallbackDir = path.join(distDir, "opportunity", route.slug);
        fs.mkdirSync(fallbackDir, { recursive: true });
        fs.writeFileSync(path.join(fallbackDir, "index.html"), html, "utf-8");
      } else if (route.page === "story-detail" && route.slug) {
        fallbackDir = path.join(distDir, "stories", route.slug);
        fs.mkdirSync(fallbackDir, { recursive: true });
        fs.writeFileSync(path.join(fallbackDir, "index.html"), html, "utf-8");
      } else if (route.page === "seo-page" && route.slug) {
        fallbackDir = path.join(distDir, route.slug);
        fs.mkdirSync(fallbackDir, { recursive: true });
        fs.writeFileSync(path.join(fallbackDir, "index.html"), html, "utf-8");
      } else {
        fallbackDir = path.join(distDir, route.page);
        fs.mkdirSync(fallbackDir, { recursive: true });
        fs.writeFileSync(path.join(fallbackDir, "index.html"), html, "utf-8");
      }
    }
  }

  // Generate explicit 404 static HTML
  const notFoundHtml = injectSeoIntoHtml(templateHtml, "en", "not-found");
  fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf-8");

  console.log(`[Prerender] Successfully generated ${count} localized static HTML pages + 404.html!`);
}

prerender();
