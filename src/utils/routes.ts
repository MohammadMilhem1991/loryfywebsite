/**
 * Loryfy Canonical Routing Engine & Public URLs Registry
 */

import { Language, PageRoute } from "../types";
import { sampleOpportunities } from "../data/sampleOpportunities";
import { storySlugs, storiesData } from "../data/storiesData";
import { emiratePageSlugs, emiratePagesData } from "../data/emiratePagesData";

export const VALID_PAGE_ROUTES: PageRoute[] = [
  "home",
  "find-business-partner-uae",
  "free-business-listing-uae",
  "running-businesses-uae",
  "businesses-for-sale-uae",
  "startup-opportunities-uae",
  "business-partnership-opportunities-uae",
  "trade-license-opportunities-uae",
  "list-running-business",
  "post-startup-idea",
  "list-trade-license",
  "find-partners-investors",
  "for-owners",
  "discover",
  "about",
  "how-it-works",
  "faq",
  "contact",
  "download",
  "terms",
  "privacy",
  "stories",
  "sitemap",
];

export interface ResolvedRoute {
  isValid: boolean;
  lang: Language;
  page: PageRoute;
  slug?: string;
  statusCode: number;
}

/**
 * Resolves any incoming pathname into a structured route with exact 404 validation.
 */
export function resolveRoute(rawPath: string): ResolvedRoute {
  const cleanPath = rawPath.split("?")[0].split("#")[0].trim().toLowerCase();

  // Root paths
  if (cleanPath === "" || cleanPath === "/") {
    return { isValid: true, lang: "en", page: "home", statusCode: 200 };
  }

  // Pure language root paths
  if (cleanPath === "/en" || cleanPath === "/en/") {
    return { isValid: true, lang: "en", page: "home", statusCode: 200 };
  }
  if (cleanPath === "/ar" || cleanPath === "/ar/") {
    return { isValid: true, lang: "ar", page: "home", statusCode: 200 };
  }

  // Check language prefix
  let lang: Language = "en";
  let pathWithoutLang = cleanPath;

  if (cleanPath.startsWith("/ar/") || cleanPath === "/ar") {
    lang = "ar";
    pathWithoutLang = cleanPath.slice(3); // removes '/ar'
  } else if (cleanPath.startsWith("/en/") || cleanPath === "/en") {
    lang = "en";
    pathWithoutLang = cleanPath.slice(3); // removes '/en'
  }

  // Normalize leading slash
  if (!pathWithoutLang.startsWith("/")) {
    pathWithoutLang = "/" + pathWithoutLang;
  }
  // Trim trailing slash for matching
  const segment = pathWithoutLang.replace(/^\/+|\/+$/g, "");

  if (segment === "") {
    return { isValid: true, lang, page: "home", statusCode: 200 };
  }

  // Check if it's an opportunity detail route: opportunity/:slug
  if (segment.startsWith("opportunity/")) {
    const slug = segment.replace("opportunity/", "").trim();
    const exists = sampleOpportunities.some((opp) => opp.slug === slug);
    if (exists) {
      return {
        isValid: true,
        lang,
        page: "opportunity-detail",
        slug,
        statusCode: 200,
      };
    } else {
      return {
        isValid: false,
        lang,
        page: "not-found",
        statusCode: 404,
      };
    }
  }

  // Check if it's a story detail route: stories/:slug
  if (segment.startsWith("stories/")) {
    const slug = segment.replace("stories/", "").trim();
    const exists = storySlugs.includes(slug) || !!storiesData[lang]?.[slug];
    if (exists) {
      return {
        isValid: true,
        lang,
        page: "story-detail",
        slug,
        statusCode: 200,
      };
    } else {
      return {
        isValid: false,
        lang,
        page: "not-found",
        statusCode: 404,
      };
    }
  }

  // Check if it's a category × emirate SEO page
  if (emiratePageSlugs.includes(segment) || !!emiratePagesData[lang]?.[segment]) {
    return {
      isValid: true,
      lang,
      page: "seo-page",
      slug: segment,
      statusCode: 200,
    };
  }

  // Check if segment is in valid page routes
  if (VALID_PAGE_ROUTES.includes(segment as PageRoute)) {
    return {
      isValid: true,
      lang,
      page: segment as PageRoute,
      statusCode: 200,
    };
  }

  // Route does not match any valid public page
  return {
    isValid: false,
    lang,
    page: "not-found",
    statusCode: 404,
  };
}

/**
 * Returns all crawlable public routes across all supported languages for sitemaps and prerendering.
 */
export function getAllPublicRoutes(): {
  lang: Language;
  page: PageRoute;
  slug?: string;
  urlPath: string;
}[] {
  const routes: {
    lang: Language;
    page: PageRoute;
    slug?: string;
    urlPath: string;
  }[] = [];

  const languages: Language[] = ["en", "ar"];

  for (const lang of languages) {
    // 1. Home
    routes.push({
      lang,
      page: "home",
      urlPath: `/${lang}/`,
    });

    // 2. Standard Pages
    for (const page of VALID_PAGE_ROUTES) {
      if (page === "home") continue;
      routes.push({
        lang,
        page,
        urlPath: `/${lang}/${page}`,
      });
    }

    // 3. Individual Public Opportunity Pages
    for (const opp of sampleOpportunities) {
      routes.push({
        lang,
        page: "opportunity-detail",
        slug: opp.slug,
        urlPath: `/${lang}/opportunity/${opp.slug}`,
      });
    }

    // 4. Stories & Scenarios Pages
    for (const slug of storySlugs) {
      routes.push({
        lang,
        page: "story-detail",
        slug,
        urlPath: `/${lang}/stories/${slug}`,
      });
    }

    // 5. Category × Emirate SEO Landing Pages
    for (const slug of emiratePageSlugs) {
      routes.push({
        lang,
        page: "seo-page",
        slug,
        urlPath: `/${lang}/${slug}`,
      });
    }
  }

  return routes;
}
