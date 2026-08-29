/**
 * Loryfy HTML SEO Injector
 * Injects crawlable meta tags, canonicals, hreflangs, Open Graph tags,
 * and JSON-LD structured data directly into the HTML document.
 */

import { Language, PageRoute } from "../types";
import {
  getPageSeoData,
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebSiteSchema,
  generateItemListSchema,
  generateArticleSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  toAbsoluteUrl,
  PageSeoResult,
} from "./seo";
import { storiesData } from "../data/storiesData";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function injectSeoIntoHtml(
  html: string,
  lang: Language,
  page: PageRoute,
  slug?: string
): string {
  const seoData: PageSeoResult = getPageSeoData(lang, page, slug);
  const dir = lang === "ar" ? "rtl" : "ltr";

  // 1. Update <html lang="..." dir="...">
  let result = html.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${dir}">`);

  // 2. Remove any pre-existing dynamic meta tags from head template to avoid duplicates
  result = result
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']robots["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']alternate["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']preload["'][^>]*as=["']image["'][^>]*>/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, "");

  // 3. Build replacement SEO tags for <head>
  const headTags: string[] = [];

  // Hero image preload hint (language-aware, high priority)
  const heroImageSrc = lang === "ar" ? "/images/home-screen-AR.webp" : "/images/home-screen.webp";
  const heroImageUrl = toAbsoluteUrl(heroImageSrc);
  headTags.push(`<link rel="preload" as="image" href="${escapeHtml(heroImageUrl)}" fetchpriority="high" />`);

  headTags.push(`<title>${escapeHtml(seoData.title)}</title>`);
  headTags.push(`<meta name="description" content="${escapeHtml(seoData.metaDescription)}" />`);

  if (seoData.isNoIndex) {
    headTags.push(`<meta name="robots" content="noindex, nofollow" />`);
  } else {
    headTags.push(`<meta name="robots" content="index, follow" />`);

    if (seoData.canonicalUrl) {
      headTags.push(`<link rel="canonical" href="${escapeHtml(seoData.canonicalUrl)}" />`);
    }

    if (seoData.hreflang) {
      headTags.push(
        `<link rel="alternate" hreflang="en" href="${escapeHtml(seoData.hreflang.en)}" />`
      );
      headTags.push(
        `<link rel="alternate" hreflang="ar" href="${escapeHtml(seoData.hreflang.ar)}" />`
      );
      headTags.push(
        `<link rel="alternate" hreflang="x-default" href="${escapeHtml(seoData.hreflang.xDefault)}" />`
      );
    }

    // Open Graph Tags
    const currentLocale = lang === "ar" ? "ar_AE" : "en_US";
    const alternateLocale = lang === "ar" ? "en_US" : "ar_AE";

    headTags.push(`<meta property="og:site_name" content="Loryfy" />`);
    headTags.push(`<meta property="og:title" content="${escapeHtml(seoData.og.title)}" />`);
    headTags.push(`<meta property="og:description" content="${escapeHtml(seoData.og.description)}" />`);
    headTags.push(`<meta property="og:url" content="${escapeHtml(seoData.og.url)}" />`);
    headTags.push(`<meta property="og:image" content="${escapeHtml(toAbsoluteUrl(seoData.og.image))}" />`);
    headTags.push(`<meta property="og:image:width" content="1200" />`);
    headTags.push(`<meta property="og:image:height" content="630" />`);
    headTags.push(`<meta property="og:image:alt" content="${escapeHtml(seoData.og.title)}" />`);
    headTags.push(`<meta property="og:type" content="${escapeHtml(seoData.og.type)}" />`);
    headTags.push(`<meta property="og:locale" content="${currentLocale}" />`);
    headTags.push(`<meta property="og:locale:alternate" content="${alternateLocale}" />`);

    // Twitter Card Tags
    headTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
    headTags.push(`<meta name="twitter:title" content="${escapeHtml(seoData.og.title)}" />`);
    headTags.push(`<meta name="twitter:description" content="${escapeHtml(seoData.og.description)}" />`);
    headTags.push(`<meta name="twitter:image" content="${escapeHtml(toAbsoluteUrl(seoData.og.image))}" />`);

    // Structured JSON-LD Data
    const orgSchema = generateOrganizationSchema();
    headTags.push(
      `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`
    );

    const webSiteSchema = generateWebSiteSchema();
    headTags.push(
      `<script type="application/ld+json">${JSON.stringify(webSiteSchema)}</script>`
    );

    const appSchema = generateSoftwareApplicationSchema();
    headTags.push(
      `<script type="application/ld+json">${JSON.stringify(appSchema)}</script>`
    );

    // Article Schema (Only on story-detail pages)
    if (page === "story-detail" && slug) {
      const story = storiesData[lang]?.[slug];
      if (story) {
        const articleSchema = generateArticleSchema(story, lang, seoData.canonicalUrl);
        headTags.push(
          `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`
        );
      }
    }

    // Visible FAQs Schema (Strictly on pages with rendered FAQ components)
    if (seoData.faqs && seoData.faqs.length > 0) {
      const faqSchema = generateFaqSchema(seoData.faqs);
      if (faqSchema) {
        headTags.push(
          `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`
        );
      }
    }

    // Breadcrumbs Schema
    if (seoData.breadcrumbs && seoData.breadcrumbs.length > 0) {
      const breadcrumbSchema = generateBreadcrumbSchema(seoData.breadcrumbs);
      headTags.push(
        `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`
      );
    }

    // ItemList Schema (Only on dedicated SEO category pages)
    if (seoData.itemList && seoData.itemList.length > 0) {
      const itemListSchema = generateItemListSchema(seoData.itemList);
      headTags.push(
        `<script type="application/ld+json">${JSON.stringify(itemListSchema)}</script>`
      );
    }
  }

  // Insert headTags right after <head>
  const headInsert = "\n    " + headTags.join("\n    ") + "\n";
  result = result.replace(/<head>/i, `<head>${headInsert}`);

  return result;
}
