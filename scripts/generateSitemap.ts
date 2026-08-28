/**
 * Loryfy Sitemap XML Generator
 */

import fs from "fs";
import path from "path";
import { loryfyConfig } from "../src/config/loryfyConfig";
import { sampleOpportunities } from "../src/data/sampleOpportunities";
import { storySlugs } from "../src/data/storiesData";
import { VALID_PAGE_ROUTES } from "../src/utils/routes";

function buildSitemapXml(): string {
  const pages = VALID_PAGE_ROUTES.filter((p) => p !== "home");
  const opportunities = sampleOpportunities;
  const buildDate = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- ========================================== -->
  <!-- 1. HOMEPAGE                                -->
  <!-- ========================================== -->
  <url>
    <loc>${loryfyConfig.siteUrl}/en/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${loryfyConfig.siteUrl}/ar/</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/" />
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- ========================================== -->
  <!-- 2. CORE PUBLIC & CATEGORY DISCOVERY PAGES   -->
  <!-- ========================================== -->`;

  for (const page of pages) {
    let priority = "0.8";
    let changefreq = "weekly";

    if (page === "terms" || page === "privacy" || page === "sitemap") {
      priority = "0.3";
      changefreq = "yearly";
    } else if (
      page === "how-it-works" ||
      page === "about" ||
      page === "faq" ||
      page === "download" ||
      page === "contact"
    ) {
      priority = "0.6";
      changefreq = "monthly";
    } else {
      // Category / SEO landing pages (and future emirate & article pages)
      priority = "0.8";
      changefreq = "weekly";
    }

    xml += `
  <url>
    <loc>${loryfyConfig.siteUrl}/en/${page}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/${page}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/${page}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/${page}" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  <url>
    <loc>${loryfyConfig.siteUrl}/ar/${page}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/${page}" />
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/${page}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/${page}" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  xml += `

  <!-- ========================================== -->
  <!-- 3. PUBLIC INDIVIDUAL LISTINGS              -->
  <!-- ========================================== -->`;

  for (const opp of opportunities) {
    xml += `
  <url>
    <loc>${loryfyConfig.siteUrl}/en/opportunity/${opp.slug}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/opportunity/${opp.slug}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/opportunity/${opp.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/opportunity/${opp.slug}" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${loryfyConfig.siteUrl}/ar/opportunity/${opp.slug}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/opportunity/${opp.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/opportunity/${opp.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/opportunity/${opp.slug}" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  xml += `

  <!-- ========================================== -->
  <!-- 4. STORIES & REAL-WORLD SCENARIOS          -->
  <!-- ========================================== -->`;

  for (const slug of storySlugs) {
    xml += `
  <url>
    <loc>${loryfyConfig.siteUrl}/en/stories/${slug}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/stories/${slug}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/stories/${slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/stories/${slug}" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${loryfyConfig.siteUrl}/ar/stories/${slug}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${loryfyConfig.siteUrl}/ar/stories/${slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${loryfyConfig.siteUrl}/en/stories/${slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loryfyConfig.siteUrl}/en/stories/${slug}" />
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  xml += `

</urlset>
`;

  return xml;
}

const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(sitemapPath, buildSitemapXml(), "utf-8");
console.log("[Sitemap Generator] public/sitemap.xml generated successfully!");
