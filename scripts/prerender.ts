/**
 * Loryfy Static Pre-rendering Generator
 * For every public route: renders the full page BODY with React (renderToString)
 * and injects SEO head tags (title, meta, canonical, hreflang, OG, JSON-LD).
 * Output: dist/<lang>/<route>/index.html — crawlable without JavaScript.
 */

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { getAllPublicRoutes } from "../src/utils/routes";
import { injectSeoIntoHtml } from "../src/utils/htmlInjector";

const ROOT_EMPTY = '<div id="root"></div>';

async function prerender() {
  const distDir = path.join(process.cwd(), "dist");
  const viteIndexPath = path.join(distDir, "index.html");
  const templatePath = path.join(distDir, "_template.html");
  const ssrEntryPath = path.join(process.cwd(), "dist-ssr", "entry-server.js");

  if (!fs.existsSync(viteIndexPath)) {
    console.error("[Prerender Error] dist/index.html not found. Run 'vite build' first.");
    process.exit(1);
  }
  if (!fs.existsSync(ssrEntryPath)) {
    console.error("[Prerender Error] dist-ssr/entry-server.js not found. Run 'vite build --ssr src/entry-server.tsx --outDir dist-ssr' first.");
    process.exit(1);
  }

  // Keep a pristine copy of the Vite template (empty #root) for the server's 404/fallback responses.
  // dist/index.html gets overwritten below with the prerendered English home page.
  const templateHtml = fs.readFileSync(viteIndexPath, "utf-8");
  if (!templateHtml.includes(ROOT_EMPTY)) {
    console.error('[Prerender Error] dist/index.html does not contain an empty <div id="root"></div>.');
    process.exit(1);
  }
  fs.writeFileSync(templatePath, templateHtml, "utf-8");

  // Keep dist/sitemap.xml in sync with the freshly generated public/sitemap.xml
  const publicSitemap = path.join(process.cwd(), "public", "sitemap.xml");
  if (fs.existsSync(publicSitemap)) {
    fs.copyFileSync(publicSitemap, path.join(distDir, "sitemap.xml"));
  }

  const { render } = (await import(pathToFileURL(ssrEntryPath).href)) as {
    render: (urlPath: string) => string;
  };

  const buildPage = (lang: "en" | "ar", page: any, slug: string | undefined, urlPath: string) => {
    const withHead = injectSeoIntoHtml(templateHtml, lang, page, slug);
    const bodyHtml = render(urlPath);
    if (!bodyHtml || bodyHtml.length < 200) {
      throw new Error(`SSR produced empty body for ${urlPath}`);
    }
    return withHead.replace(ROOT_EMPTY, `<div id="root">${bodyHtml}</div>`);
  };

  const write = (dir: string, html: string) => {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
  };

  const routes = getAllPublicRoutes();
  console.log(`[Prerender] Rendering full HTML (head + body) for ${routes.length} public routes...`);

  let count = 0;
  const failures: string[] = [];

  for (const route of routes) {
    let html: string;
    try {
      html = buildPage(route.lang, route.page, route.slug, route.urlPath);
    } catch (err: any) {
      failures.push(`${route.urlPath} → ${err?.message || err}`);
      continue;
    }

    let relDir = "";
    if (route.page === "home") {
      relDir = "";
    } else if (route.page === "opportunity-detail" && route.slug) {
      relDir = path.join("opportunity", route.slug);
    } else if (route.page === "story-detail" && route.slug) {
      relDir = path.join("real-examples-of-using-loryfy", route.slug);
    } else if (route.page === "seo-page" && route.slug) {
      relDir = route.slug;
    } else if (route.page === "app-about") {
      relDir = path.join("app", "about");
    } else if (route.page === "app-privacy") {
      relDir = path.join("app", "privacy");
    } else if (route.page === "app-terms") {
      relDir = path.join("app", "terms");
    } else {
      relDir = route.page;
    }

    write(path.join(distDir, route.lang, relDir), html);
    count++;

    // Legacy alias for app webviews: /<lang>/app-about → same page as /<lang>/app/about
    if (route.page.startsWith("app-")) {
      write(path.join(distDir, route.lang, route.page), html);
    }

    // Non-prefixed English fallbacks (e.g. /about, /faq) — preserves previous behaviour
    if (route.lang === "en" && relDir) {
      write(path.join(distDir, relDir), html);
    }

    // Root "/" serves the English home page
    if (route.lang === "en" && route.page === "home") {
      fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
    }
  }

  // Explicit 404 page (rendered body, noindex head)
  const notFoundHead = injectSeoIntoHtml(templateHtml, "en", "not-found");
  const notFoundBody = render("/en/this-page-does-not-exist");
  fs.writeFileSync(
    path.join(distDir, "404.html"),
    notFoundHead.replace(ROOT_EMPTY, `<div id="root">${notFoundBody}</div>`),
    "utf-8"
  );

  if (failures.length) {
    console.error(`[Prerender Error] ${failures.length} route(s) failed:\n  ` + failures.join("\n  "));
    process.exit(1);
  }

  console.log(`[Prerender] Successfully generated ${count} fully rendered pages + 404.html`);
}

prerender();
