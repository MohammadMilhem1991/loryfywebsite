/**
 * Loryfy SEO & JSON-LD Structured Data Utilities
 * Complete metadata resolution, listing-specific SEO, and strict visible-FAQ schema isolation.
 */

import { loryfyConfig } from "../config/loryfyConfig";
import { Language, PageRoute, FaqItem, SeoPageData } from "../types";
import { translations } from "../data/translations";
import { seoPagesData } from "../data/seoPagesData";
import { sampleOpportunities } from "../data/sampleOpportunities";
import { storiesData, storySlugs } from "../data/storiesData";
import { emiratePagesData } from "../data/emiratePagesData";

export function toAbsoluteUrl(url: string): string {
  if (!url) return url;
  if (url.startsWith("/")) {
    return `${loryfyConfig.siteUrl}${url}`;
  }
  return url;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: loryfyConfig.brandNameEn,
    legalName: loryfyConfig.legalName,
    url: loryfyConfig.siteUrl,
    email: loryfyConfig.email,
    logo: toAbsoluteUrl(loryfyConfig.assets.logoUrl),
    image: toAbsoluteUrl(loryfyConfig.assets.ogImage),
    description:
      "Loryfy is a mobile platform for discovering running businesses, startup ideas, and business partnership opportunities in the UAE.",
    sameAs: Object.values(loryfyConfig.socialLinks).filter(Boolean),
  };
}

export function generateSoftwareApplicationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: loryfyConfig.brandNameEn,
    operatingSystem: "iOS, Android",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
    },
    url: loryfyConfig.siteUrl,
    description:
      "Discover running businesses, startup ideas, trade licenses, and connect with business partners and investors in the UAE.",
  };

  // Only include official download links if configured
  if (loryfyConfig.appStoreUrl && loryfyConfig.appStoreUrl.trim() !== "") {
    schema.downloadUrl = loryfyConfig.appStoreUrl;
  }
  if (loryfyConfig.googlePlayUrl && loryfyConfig.googlePlayUrl.trim() !== "") {
    schema.installUrl = loryfyConfig.googlePlayUrl;
  }

  return schema;
}

export function generateFaqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: loryfyConfig.brandNameEn,
    url: loryfyConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://loryfy.com/en/sitemap?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en", "ar"],
  };
}

export function generateItemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function generateArticleSchema(story: SeoPageData, lang: Language, url: string) {
  const rawOgImage = lang === "ar" ? loryfyConfig.assets.ogImageAr : loryfyConfig.assets.ogImage;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.h1,
    description: story.metaDescription,
    image: [toAbsoluteUrl(rawOgImage)],
    inLanguage: lang,
    author: {
      "@type": "Organization",
      name: loryfyConfig.brandNameEn,
      url: loryfyConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: loryfyConfig.brandNameEn,
      url: loryfyConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl(loryfyConfig.assets.logoUrl),
      },
    },
    mainEntityOfPage: url,
  };
}

export interface PageSeoResult {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  hreflang: {
    en: string;
    ar: string;
    xDefault: string;
  } | null;
  og: {
    title: string;
    description: string;
    url: string;
    image: string;
    type: string;
  };
  isNoIndex: boolean;
  faqs: FaqItem[] | null;
  breadcrumbs: { name: string; url: string }[];
  itemList?: { name: string; url: string }[] | null;
}

/**
 * Returns listing-specific SEO metadata for an approved public opportunity.
 */
export function getOpportunitySeoData(slug: string, lang: Language): PageSeoResult | null {
  const opp = sampleOpportunities.find((o) => o.slug === slug);
  if (!opp) return null;

  const isEn = lang === "en";
  const rawOgImage = lang === "ar" ? loryfyConfig.assets.ogImageAr : loryfyConfig.assets.ogImage;
  const ogImageUrl = toAbsoluteUrl(rawOgImage);

  let title = "";
  let metaDescription = "";

  if (opp.category === "running-business") {
    title = isEn
      ? `${opp.industryEn.split("/")[0].trim()} Business Opportunity in ${opp.locationEn.split(",")[0].trim()} | Loryfy`
      : `فرصة استثمار وشراكة في مشروع ${opp.industryAr.split("/")[0].trim()} في ${opp.locationAr.split("،")[0].trim()} | لوريفاي`;
    metaDescription = isEn
      ? `Explore a ${opp.industryEn.split("/")[0].toLowerCase().trim()} business in ${opp.locationEn} seeking a ${opp.opportunityTypeEn.toLowerCase()} on Loryfy.`
      : `استكشف فرصة مشروع قائم في قطاع ${opp.industryAr} في ${opp.locationAr} يبحث عن ${opp.opportunityTypeAr} عبر لوريفاي.`;
  } else if (opp.category === "startup-idea") {
    title = isEn
      ? `${opp.industryEn.split("&")[0].trim()} Startup Opportunity in UAE | Loryfy`
      : `فكرة مشروع ناشئ في قطاع ${opp.industryAr.split("و")[0].trim()} في الإمارات | لوريفاي`;
    metaDescription = isEn
      ? `Discover a ${opp.industryEn.toLowerCase()} startup idea seeking an ${opp.opportunityTypeEn.toLowerCase()} in the UAE on Loryfy.`
      : `اكتشف فكرة مشروع ناشئ في ${opp.locationAr} تبحث عن ${opp.opportunityTypeAr} عبر تطبيق لوريفاي.`;
  } else if (opp.category === "trade-license") {
    title = isEn
      ? `Trade License Opportunity in ${opp.locationEn.split(",")[0].trim()} | Loryfy`
      : `فرصة رخصة تجارية في ${opp.locationAr.split("،")[0].trim()} | لوريفاي`;
    metaDescription = isEn
      ? `Explore a commercial trade license opportunity in ${opp.locationEn} available on Loryfy.`
      : `استكشف فرصة رخصة تجارية معروضة في ${opp.locationAr} عبر منصة لوريفاي.`;
  } else {
    title = isEn ? `${opp.titleEn} | Loryfy` : `${opp.titleAr} | لوريفاي`;
    metaDescription = isEn ? opp.descriptionEn : opp.descriptionAr;
  }

  const canonicalUrl = `${loryfyConfig.siteUrl}/${lang}/opportunity/${opp.slug}`;
  const enUrl = `${loryfyConfig.siteUrl}/en/opportunity/${opp.slug}`;
  const arUrl = `${loryfyConfig.siteUrl}/ar/opportunity/${opp.slug}`;

  let categorySlug = "running-businesses-uae";
  let categoryLabel = isEn ? "Opportunities" : "الفرص";

  if (opp.category === "running-business") {
    categorySlug = "running-businesses-uae";
    categoryLabel = isEn ? "Running Businesses" : "مشاريع قائمة";
  } else if (opp.category === "startup-idea") {
    categorySlug = "startup-opportunities-uae";
    categoryLabel = isEn ? "Startup Opportunities" : "أفكار ومشاريع ناشئة";
  } else if (opp.category === "trade-license") {
    categorySlug = "trade-license-opportunities-uae";
    categoryLabel = isEn ? "Trade License Opportunities" : "فرص الرخص التجارية";
  }

  return {
    title,
    metaDescription,
    canonicalUrl,
    hreflang: {
      en: enUrl,
      ar: arUrl,
      xDefault: enUrl,
    },
    og: {
      title,
      description: metaDescription,
      url: canonicalUrl,
      image: ogImageUrl,
      type: "article",
    },
    isNoIndex: false,
    faqs: null, // Listing details do not have an accordion FAQ section
    breadcrumbs: [
      { name: isEn ? "Home" : "الرئيسية", url: `${loryfyConfig.siteUrl}/${lang}/` },
      { name: categoryLabel, url: `${loryfyConfig.siteUrl}/${lang}/${categorySlug}` },
      { name: isEn ? opp.titleEn : opp.titleAr, url: canonicalUrl },
    ],
  };
}

/**
 * Returns comprehensive SEO data for any public route.
 */
export function getPageSeoData(lang: Language, page: PageRoute, slug?: string): PageSeoResult {
  const isEn = lang === "en";
  const t = translations[lang];
  const rawOgImage = lang === "ar" ? loryfyConfig.assets.ogImageAr : loryfyConfig.assets.ogImage;
  const ogImageUrl = toAbsoluteUrl(rawOgImage);

  // 1. Handle 404 / Not Found
  if (page === "not-found") {
    return {
      title: isEn ? "Page Not Found | 404 | Loryfy" : "الصفحة غير موجودة | 404 | لوريفاي",
      metaDescription: isEn
        ? "The page you are looking for does not exist on Loryfy."
        : "الصفحة التي تبحث عنها غير متوفرة في لوريفاي.",
      canonicalUrl: "",
      hreflang: null,
      og: {
        title: isEn ? "Page Not Found | Loryfy" : "الصفحة غير موجودة | لوريفاي",
        description: isEn ? "Page not found" : "الصفحة غير موجودة",
        url: `${loryfyConfig.siteUrl}/${lang}/not-found`,
        image: ogImageUrl,
        type: "website",
      },
      isNoIndex: true,
      faqs: null,
      breadcrumbs: [],
    };
  }

  // 2. Handle Public Opportunity Detail
  if (page === "opportunity-detail" && slug) {
    const oppResult = getOpportunitySeoData(slug, lang);
    if (oppResult) return oppResult;
  }

  // 2.5 Handle Story Detail
  if (page === "story-detail" && slug) {
    const story = storiesData[lang]?.[slug];
    if (story) {
      const canonicalUrl = `${loryfyConfig.siteUrl}/${lang}/real-examples-of-using-loryfy/${slug}`;
      const enUrl = `${loryfyConfig.siteUrl}/en/real-examples-of-using-loryfy/${slug}`;
      const arUrl = `${loryfyConfig.siteUrl}/ar/real-examples-of-using-loryfy/${slug}`;

      const faqs: FaqItem[] = story.faqItems.map((faq, idx) => ({
        id: `story-faq-${idx}`,
        question: faq.question,
        answer: faq.answer,
        category: "stories",
      }));

      return {
        title: story.title,
        metaDescription: story.metaDescription,
        canonicalUrl,
        hreflang: { en: enUrl, ar: arUrl, xDefault: enUrl },
        og: {
          title: story.title,
          description: story.metaDescription,
          url: canonicalUrl,
          image: ogImageUrl,
          type: "article",
        },
        isNoIndex: false,
        faqs: faqs.length > 0 ? faqs : null,
        breadcrumbs: [
          { name: isEn ? "Home" : "الرئيسية", url: `${loryfyConfig.siteUrl}/${lang}/` },
          { name: isEn ? "Real Examples of Using Loryfy" : "أمثلة واقعية لاستخدام لوريفاي", url: `${loryfyConfig.siteUrl}/${lang}/real-examples-of-using-loryfy` },
          { name: story.h1, url: canonicalUrl },
        ],
      };
    }
  }

  // 3. Handle Homepage
  if (page === "home") {
    const title = isEn
      ? "Loryfy | Running Businesses, Business Ideas & Partnership Opportunities"
      : "لوريفاي | مشاريع قائمة وأفكار مشاريع وفرص شراكة";
    const metaDescription = isEn
      ? "Discover running businesses operating in the UAE, trade licenses, and startup ideas. Connect directly with owners, partners, and investors on Loryfy."
      : "اكتشف مشاريع قائمة تعمل في الإمارات، ورخص تجارية صادرة في الإمارات، وأفكار مشاريع موجهة للإمارات. تواصل مع الملاك والشركاء والمستثمرين.";
    const canonicalUrl = `${loryfyConfig.siteUrl}/${lang}/`;
    const enUrl = `${loryfyConfig.siteUrl}/en/`;
    const arUrl = `${loryfyConfig.siteUrl}/ar/`;

    return {
      title,
      metaDescription,
      canonicalUrl,
      hreflang: { en: enUrl, ar: arUrl, xDefault: enUrl },
      og: {
        title,
        description: metaDescription,
        url: canonicalUrl,
        image: ogImageUrl,
        type: "website",
      },
      isNoIndex: false,
      faqs: t.faqs, // Homepage has visible FaqSection
      breadcrumbs: [{ name: isEn ? "Home" : "الرئيسية", url: canonicalUrl }],
    };
  }

function getParentCategoryForEmirateSlug(slug: string, lang: Language): { name: string; url: string } {
  const isEn = lang === "en";
  if (slug.startsWith("businesses-for-sale") || slug.includes("business-for-sale") || slug.includes("businesses-for-sale")) {
    const parentSlug = "businesses-for-sale-uae";
    const name = seoPagesData[lang]?.[parentSlug]?.h1 || (isEn ? "Businesses for Sale" : "مشاريع للبيع");
    return { name, url: `${loryfyConfig.siteUrl}/${lang}/${parentSlug}` };
  }
  if (slug.startsWith("running-businesses") || slug.includes("running-business")) {
    const parentSlug = "running-businesses-uae";
    const name = seoPagesData[lang]?.[parentSlug]?.h1 || (isEn ? "Running Businesses" : "مشاريع قائمة");
    return { name, url: `${loryfyConfig.siteUrl}/${lang}/${parentSlug}` };
  }
  if (slug.startsWith("startup") || slug.includes("startup")) {
    const parentSlug = "startup-opportunities-uae";
    const name = seoPagesData[lang]?.[parentSlug]?.h1 || (isEn ? "Startup Opportunities" : "أفكار ومشاريع ناشئة");
    return { name, url: `${loryfyConfig.siteUrl}/${lang}/${parentSlug}` };
  }
  if (slug.startsWith("trade-license") || slug.includes("trade-license") || slug.includes("license")) {
    const parentSlug = "trade-license-opportunities-uae";
    const name = seoPagesData[lang]?.[parentSlug]?.h1 || (isEn ? "Trade Licenses" : "الرخص التجارية");
    return { name, url: `${loryfyConfig.siteUrl}/${lang}/${parentSlug}` };
  }
  if (slug.startsWith("find-business-partner") || slug.includes("business-partner")) {
    const parentSlug = "find-business-partner-uae";
    const name = seoPagesData[lang]?.[parentSlug]?.h1 || (isEn ? "Find Business Partner" : "إيجاد شريك تجاري");
    return { name, url: `${loryfyConfig.siteUrl}/${lang}/${parentSlug}` };
  }
  if (slug.startsWith("business-partnership") || slug.includes("partnership")) {
    const parentSlug = "business-partnership-opportunities-uae";
    const name = seoPagesData[lang]?.[parentSlug]?.h1 || (isEn ? "Partnership Opportunities" : "فرص الشراكة");
    return { name, url: `${loryfyConfig.siteUrl}/${lang}/${parentSlug}` };
  }
  return {
    name: isEn ? "Discover" : "استكشف الفرص",
    url: `${loryfyConfig.siteUrl}/${lang}/discover`,
  };
}

  // 4. Handle Dedicated SEO Pages from seoPagesData
  const activeSlug = slug || (page !== "seo-page" ? page : undefined);
  if (activeSlug && (seoPagesData[lang]?.[activeSlug] || seoPagesData[lang]?.[page])) {
    const targetSlug = seoPagesData[lang]?.[activeSlug] ? activeSlug : page;
    const pageData = seoPagesData[lang][targetSlug];
    const canonicalUrl = `${loryfyConfig.siteUrl}/${lang}/${targetSlug}`;
    const enUrl = `${loryfyConfig.siteUrl}/en/${targetSlug}`;
    const arUrl = `${loryfyConfig.siteUrl}/ar/${targetSlug}`;

    // Extract visible FAQs from the SEO page
    const pageFaqs: FaqItem[] = (pageData.faqItems || []).map((f, i) => ({
      id: `${targetSlug}-faq-${i}`,
      question: f.question,
      answer: f.answer,
    }));

    // Build the item list from that page's section headings
    const itemList = (pageData.sections || []).map((sec, idx) => ({
      name: sec.heading,
      url: `${canonicalUrl}#sec-${idx}`,
    }));

    return {
      title: pageData.title,
      metaDescription: pageData.metaDescription,
      canonicalUrl,
      hreflang: { en: enUrl, ar: arUrl, xDefault: enUrl },
      og: {
        title: pageData.title,
        description: pageData.metaDescription,
        url: canonicalUrl,
        image: ogImageUrl,
        type: "website",
      },
      isNoIndex: false,
      faqs: pageFaqs.length > 0 ? pageFaqs : t.faqs,
      breadcrumbs: [
        { name: isEn ? "Home" : "الرئيسية", url: `${loryfyConfig.siteUrl}/${lang}/` },
        { name: pageData.h1, url: canonicalUrl },
      ],
      itemList: itemList.length > 0 ? itemList : null,
    };
  }

  // 4.5 Handle Category × Emirate SEO Pages from emiratePagesData
  if (activeSlug && (emiratePagesData[lang]?.[activeSlug] || (page !== "seo-page" && emiratePagesData[lang]?.[page]))) {
    const targetSlug = emiratePagesData[lang]?.[activeSlug] ? activeSlug : page;
    const pageData = emiratePagesData[lang][targetSlug];
    const canonicalUrl = `${loryfyConfig.siteUrl}/${lang}/${targetSlug}`;
    const enUrl = `${loryfyConfig.siteUrl}/en/${targetSlug}`;
    const arUrl = `${loryfyConfig.siteUrl}/ar/${targetSlug}`;

    // Extract visible FAQs from the emirate SEO page
    const pageFaqs: FaqItem[] = (pageData.faqItems || []).map((f, i) => ({
      id: `${targetSlug}-faq-${i}`,
      question: f.question,
      answer: f.answer,
    }));

    const parentCategory = getParentCategoryForEmirateSlug(targetSlug, lang);

    return {
      title: pageData.title,
      metaDescription: pageData.metaDescription,
      canonicalUrl,
      hreflang: { en: enUrl, ar: arUrl, xDefault: enUrl },
      og: {
        title: pageData.title,
        description: pageData.metaDescription,
        url: canonicalUrl,
        image: ogImageUrl,
        type: "website",
      },
      isNoIndex: false,
      faqs: pageFaqs.length > 0 ? pageFaqs : t.faqs,
      breadcrumbs: [
        { name: isEn ? "Home" : "الرئيسية", url: `${loryfyConfig.siteUrl}/${lang}/` },
        parentCategory,
        { name: pageData.h1, url: canonicalUrl },
      ],
      itemList: null,
    };
  }

  // 5. Handle Other Core Routes
  let title = "";
  let metaDescription = "";
  let faqs: FaqItem[] | null = null;

  if (page === "about") {
    title = isEn ? "About Loryfy | Discover, Connect, Opportunity" : "عن لوريفاي | اكتشف، تواصل، فرصة";
    metaDescription = isEn
      ? "Loryfy is the UAE mobile platform connecting running businesses, startup ideas, and trade licenses with partners, investors, and buyers."
      : "لوريفاي هي المنصة الرائدة في الإمارات لربط المشاريع القائمة وأفكار المشاريع والرخص التجارية بالشركاء والمستثمرين والمشترين.";
    faqs = null; // No FAQs on About page
  } else if (page === "how-it-works") {
    title = isEn ? "How Loryfy Works | Discovery to Conversation" : "كيف يعمل لوريفاي | من الاكتشاف إلى المحادثة";
    metaDescription = isEn
      ? "Learn how Loryfy connects business owners, investors, and partners across the UAE from listing creation to direct in-app chat."
      : "تعرّف على كيفية ربط لوريفاي بين أصحاب المشاريع والمستثمرين والشركاء في الإمارات من إنشاء الإعلان إلى المحادثة المباشرة.";
    faqs = null; // No FAQs on How It Works page
  } else if (page === "faq") {
    title = isEn ? "FAQ | Frequently Asked Questions | Loryfy" : "الأسئلة الشائعة | لوريفاي";
    metaDescription = isEn
      ? "Frequently asked questions about discovering businesses, finding partners, posting startup ideas, and listing trade licenses on Loryfy."
      : "إجابات عن الأسئلة الشائعة حول اكتشاف المشاريع، والعثور على شركاء، ونشر أفكار المشاريع، وعرض الرخص التجارية عبر لوريفاي.";
    faqs = t.faqs; // FAQ page visibly renders t.faqs
  } else if (page === "contact") {
    title = isEn ? "Contact Loryfy | Official Inquiries" : "اتصل بنا | لوريفاي";
    metaDescription = isEn
      ? "Get in touch with the official Loryfy team for inquiries, support, and corporate partnerships across the UAE."
      : "تواصل مع فريق لوريفاي الرسمي للاستفسارات والدعم والشراكات المؤسسية في كافة إمارات الدولة.";
    faqs = null;
  } else if (page === "download") {
    title = isEn ? "Download Loryfy App | iOS & Android" : "تحميل تطبيق لوريفاي | iOS و Android";
    metaDescription = isEn
      ? "Download the Loryfy app for iOS and Android. Discover running businesses, startup ideas, trade licenses, and chat with owners in the UAE."
      : "حمّل تطبيق لوريفاي لأجهزة iOS و Android. اكتشف مشاريع قائمة وأفكار مشاريع ورخص تجارية وتواصل مباشرة مع أصحابها.";
    faqs = null;
  } else if (page === "terms") {
    title = isEn ? "Terms & Conditions | Loryfy" : "الشروط والأحكام | لوريفاي";
    metaDescription = isEn
      ? "Official terms and conditions for using the Loryfy business discovery platform in the United Arab Emirates."
      : "الشروط والأحكام الرسمية لاستخدام منصة وتطبيق لوريفاي لفرص الأعمال في دولة الإمارات العربية المتحدة.";
    faqs = null;
  } else if (page === "privacy") {
    title = isEn ? "Privacy Policy | Loryfy" : "سياسة الخصوصية | لوريفاي";
    metaDescription = isEn
      ? "Official privacy policy and personal data protection practices for Loryfy users in the UAE."
      : "سياسة الخصوصية الرسمية ومعايير حماية البيانات الشخصية لمستخدمي تطبيق ومنصة لوريفاي.";
    faqs = null;
  } else if (page === "stories" || page === "real-examples-of-using-loryfy") {
    title = isEn
      ? "Real Examples of Using Loryfy | Case Studies & Opportunities"
      : "أمثلة واقعية لاستخدام لوريفاي | قصص وتجارب حقيقية";
    metaDescription = isEn
      ? "Explore real-world examples and stories on partnering, investing, buying, and selling businesses or trade licenses in the UAE on Loryfy."
      : "استكشف أمثلة وتجارب واقعية للشراكة والاستثمار والبيع والشراء في المشاريع القائمة والرخص التجارية في الإمارات عبر لوريفاي.";
    faqs = null;
  } else if (page === "sitemap") {
    title = isEn ? "HTML Sitemap | Loryfy" : "خريطة الموقع | لوريفاي";
    metaDescription = isEn
      ? "Complete directory of all public pages, categories, and business opportunity discovery sections on Loryfy."
      : "دليل شامل لكافة الصفحات والأقسام وفرص الأعمال المتاحة عبر موقع وتطبيق لوريفاي.";
    faqs = null;
  } else if (page === "for-owners" || page === "discover") {
    title = isEn
      ? "Loryfy | Running Businesses, Business Ideas & Partnership Opportunities"
      : "لوريفاي | مشاريع قائمة وأفكار مشاريع وفرص شراكة";
    metaDescription = isEn
      ? "Discover running businesses operating in the UAE, trade licenses, and startup ideas. Connect directly with owners, partners, and investors on Loryfy."
      : "اكتشف مشاريع قائمة تعمل في الإمارات، ورخص تجارية صادرة في الإمارات، وأفكار مشاريع موجهة للإمارات. تواصل مع الملاك والشركاء والمستثمرين.";
    faqs = t.faqs;
  } else {
    // Default fallback
    title = isEn ? "Loryfy | UAE Business Discovery" : "لوريفاي | فرص الأعمال في الإمارات";
    metaDescription = isEn
      ? "Discover running businesses, startup ideas, and trade licenses in the UAE."
      : "اكتشف مشاريع قائمة وأفكار مشاريع ورخص تجارية في الإمارات.";
    faqs = null;
  }

  const canonicalPagePath = (page === "stories" || page === "real-examples-of-using-loryfy")
    ? "real-examples-of-using-loryfy"
    : page;

  const canonicalUrl = `${loryfyConfig.siteUrl}/${lang}/${canonicalPagePath}`;
  const enUrl = `${loryfyConfig.siteUrl}/en/${canonicalPagePath}`;
  const arUrl = `${loryfyConfig.siteUrl}/ar/${canonicalPagePath}`;

  let itemList: { name: string; url: string }[] | null = null;
  if (page === "stories" || page === "real-examples-of-using-loryfy") {
    itemList = storySlugs.map((slug) => ({
      name: storiesData[lang]?.[slug]?.h1 || slug,
      url: `${loryfyConfig.siteUrl}/${lang}/real-examples-of-using-loryfy/${slug}`,
    }));
  }

  return {
    title,
    metaDescription,
    canonicalUrl,
    hreflang: { en: enUrl, ar: arUrl, xDefault: enUrl },
    og: {
      title,
      description: metaDescription,
      url: canonicalUrl,
      image: ogImageUrl,
      type: "website",
    },
    isNoIndex: false,
    faqs,
    breadcrumbs: [
      { name: isEn ? "Home" : "الرئيسية", url: `${loryfyConfig.siteUrl}/${lang}/` },
      {
        name: (page === "stories" || page === "real-examples-of-using-loryfy")
          ? (isEn ? "Real Examples of Using Loryfy" : "أمثلة واقعية لاستخدام لوريفاي")
          : title.split("|")[0].trim(),
        url: canonicalUrl,
      },
    ],
    itemList,
  };
}
