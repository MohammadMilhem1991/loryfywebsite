/**
 * Loryfy Structured Data & Meta Tags Manager
 * Injects Organization, SoftwareApplication, FAQs (only when visible), and Breadcrumbs JSON-LD.
 * Enforces correct listing slugs, canonical URLs, hreflang, Open Graph tags, and Twitter/X Card tags.
 */

import React, { useEffect } from "react";
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
} from "../utils/seo";
import { storiesData } from "../data/storiesData";

interface SeoStructuredDataProps {
  currentLang: Language;
  currentPage: PageRoute;
  selectedOpportunitySlug?: string;
}

export const SeoStructuredData: React.FC<SeoStructuredDataProps> = ({
  currentLang,
  currentPage,
  selectedOpportunitySlug,
}) => {
  const seoData = getPageSeoData(currentLang, currentPage, selectedOpportunitySlug);

  useEffect(() => {
    // 1. Language & Direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    // 2. Title
    document.title = seoData.title;

    // 3. Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement("meta");
      metaDescriptionTag.setAttribute("name", "description");
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute("content", seoData.metaDescription);

    // 4. Robots Tag (Strict noindex for 404 / not-found)
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", seoData.isNoIndex ? "noindex, nofollow" : "index, follow");

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (seoData.isNoIndex || !seoData.canonicalUrl) {
      if (canonicalTag) {
        canonicalTag.remove();
      }
    } else {
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", seoData.canonicalUrl);
    }

    // 6. Reciprocal Hreflang Tags
    const updateHreflang = (lang: string, href: string | undefined) => {
      let tag = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (seoData.isNoIndex || !href) {
        if (tag) tag.remove();
        return;
      }
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", "alternate");
        tag.setAttribute("hreflang", lang);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    };

    updateHreflang("en", seoData.hreflang?.en);
    updateHreflang("ar", seoData.hreflang?.ar);
    updateHreflang("x-default", seoData.hreflang?.xDefault);

    // 7. Open Graph & Twitter / X Card Tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (!seoData.isNoIndex) {
      const currentLocale = currentLang === "ar" ? "ar_AE" : "en_US";
      const alternateLocale = currentLang === "ar" ? "en_US" : "ar_AE";

      setMetaTag("property", "og:site_name", "Loryfy");
      setMetaTag("property", "og:title", seoData.og.title);
      setMetaTag("property", "og:description", seoData.og.description);
      setMetaTag("property", "og:url", seoData.og.url);
      setMetaTag("property", "og:image", seoData.og.image);
      setMetaTag("property", "og:image:width", "1200");
      setMetaTag("property", "og:image:height", "630");
      setMetaTag("property", "og:image:alt", seoData.og.title);
      setMetaTag("property", "og:type", seoData.og.type);
      setMetaTag("property", "og:locale", currentLocale);
      setMetaTag("property", "og:locale:alternate", alternateLocale);

      // Twitter / X Card Tags
      setMetaTag("name", "twitter:card", "summary_large_image");
      setMetaTag("name", "twitter:title", seoData.og.title);
      setMetaTag("name", "twitter:description", seoData.og.description);
      setMetaTag("name", "twitter:image", seoData.og.image);
    } else {
      const socialTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');
      socialTags.forEach((tag) => tag.remove());
    }
  }, [currentLang, currentPage, selectedOpportunitySlug, seoData]);

  if (seoData.isNoIndex) {
    return null;
  }

  // Structured schemas
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  const appSchema = generateSoftwareApplicationSchema();
  const story =
    currentPage === "story-detail" && selectedOpportunitySlug
      ? storiesData[currentLang]?.[selectedOpportunitySlug]
      : null;
  const articleSchema = story
    ? generateArticleSchema(story, currentLang, seoData.canonicalUrl)
    : null;
  const faqSchema = seoData.faqs ? generateFaqSchema(seoData.faqs) : null;
  const breadcrumbSchema =
    seoData.breadcrumbs.length > 0 ? generateBreadcrumbSchema(seoData.breadcrumbs) : null;
  const itemListSchema =
    seoData.itemList && seoData.itemList.length > 0 ? generateItemListSchema(seoData.itemList) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {/* Strict condition: FAQPage schema is ONLY rendered if visible FAQs exist on this specific page */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
    </>
  );
};
