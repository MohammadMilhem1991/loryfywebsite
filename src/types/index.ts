/**
 * Loryfy Types and Interfaces
 */

export type Language = "en" | "ar";

export type PageRoute =
  | "home"
  | "for-owners"
  | "discover"
  | "find-business-partner-uae"
  | "running-businesses-uae"
  | "businesses-for-sale-uae"
  | "startup-opportunities-uae"
  | "business-partnership-opportunities-uae"
  | "trade-license-opportunities-uae"
  | "list-running-business"
  | "post-startup-idea"
  | "list-trade-license"
  | "find-partners-investors"
  | "free-business-listing-uae"
  | "about"
  | "how-it-works"
  | "faq"
  | "contact"
  | "download"
  | "terms"
  | "privacy"
  | "opportunity-detail"
  | "story-detail"
  | "stories"
  | "sitemap"
  | "robots"
  | "llms"
  | "not-found";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CategoryCard {
  id: "running-businesses" | "startup-ideas" | "trade-licenses";
  title: string;
  description: string;
  ctaText: string;
  iconName: string;
  route: PageRoute;
}

export interface PartnerTypeItem {
  id: "professionals-with-capital" | "experienced-executives" | "individual-investors" | "companies";
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  subOptions?: string[];
}

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
    highlightBox?: string;
  }[];
  faqItems: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
}

export interface PublicOpportunity {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  category: "running-business" | "startup-idea" | "trade-license";
  categoryLabelEn: string;
  categoryLabelAr: string;
  opportunityTypeEn: string; // e.g. "Funding & Strategic Partner" or "For Sale"
  opportunityTypeAr: string;
  locationEn: string;
  locationAr: string;
  industryEn: string;
  industryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  partnersRequired?: number;
  partnershipTypeEn?: string;
  partnershipTypeAr?: string;
  askingPrice?: string;
  expectedRevenueNoteEn?: string;
  expectedRevenueNoteAr?: string;
  updatedDate: string;
  tagsEn: string[];
  tagsAr: string[];
}

export type AnalyticsEventName =
  | "hero_download_click"
  | "app_store_click"
  | "google_play_click"
  | "qr_scan_click"
  | "qr_copy_link"
  | "language_switch"
  | "how_it_works_click"
  | "category_click"
  | "find_partner_click"
  | "faq_expand"
  | "contact_click"
  | "whatsapp_click"
  | "social_click"
  | "seo_page_download_click"
  | "opportunity_view"
  | "view_in_app_click"
  | "navigate_page";
