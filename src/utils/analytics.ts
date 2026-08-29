/**
 * Analytics and UTM Attribution tracking for Loryfy
 * Handles GA4 event dispatching & marketing campaign attribution.
 */

import { AnalyticsEventName } from "../types";
import { loryfyConfig } from "../config/loryfyConfig";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

// Extract and preserve UTM & AI referral attribution
export function getUtmParameters(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref"];
  const result: Record<string, string> = {};

  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) result[key] = val;
  });

  // Detect AI and search engine referrers
  if (typeof document !== "undefined" && document.referrer) {
    result.referrer = document.referrer;
    const refLower = document.referrer.toLowerCase();
    if (refLower.includes("chatgpt.com") || refLower.includes("openai.com")) {
      result.ai_source = "chatgpt";
    } else if (refLower.includes("perplexity.ai")) {
      result.ai_source = "perplexity";
    } else if (refLower.includes("claude.ai") || refLower.includes("anthropic.com")) {
      result.ai_source = "claude";
    } else if (refLower.includes("bing.com")) {
      result.search_engine = "bing";
    } else if (refLower.includes("google.")) {
      result.search_engine = "google";
    }
  }

  return result;
}

// Track GA4 events
export function trackEvent(eventName: AnalyticsEventName, params?: Record<string, unknown>) {
  const gaId = loryfyConfig.analytics?.gaId || loryfyConfig.ga4Id;
  // If GA4 is not configured with a valid ID, do not dispatch to gtag
  if (!gaId || gaId.trim() === "") {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Loryfy Analytics Event (GA4 not configured)]: ${eventName}`, params);
    }
    return;
  }

  const utm = getUtmParameters();
  const eventPayload = {
    ...utm,
    ...params,
    timestamp: new Date().toISOString(),
  };

  // If gtag is present and GA4 ID is configured
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventPayload);
  }

  // Developer mode feedback
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Loryfy Analytics Event: ${eventName}]`, eventPayload);
  }
}

// App Store download dispatcher
export function handleAppStoreClick(platform: "ios" | "android" | "smart") {
  trackEvent(platform === "ios" ? "app_store_click" : "google_play_click", { platform });
  
  if (platform === "ios") {
    if (loryfyConfig.appStoreUrl) {
      window.open(loryfyConfig.appStoreUrl, "_blank", "noopener,noreferrer");
    } else {
      // Fallback: navigate to download section / page smoothly
      window.location.href = "/download";
    }
  } else if (platform === "android") {
    if (loryfyConfig.googlePlayUrl) {
      window.open(loryfyConfig.googlePlayUrl, "_blank", "noopener,noreferrer");
    } else {
      // Fallback: navigate to download section / page smoothly
      window.location.href = "/download";
    }
  } else {
    // Smart auto-detect
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
    if (/iPad|iPhone|iPod/.test(userAgent) && loryfyConfig.appStoreUrl) {
      window.open(loryfyConfig.appStoreUrl, "_blank", "noopener,noreferrer");
    } else if (/Android/.test(userAgent) && loryfyConfig.googlePlayUrl) {
      window.open(loryfyConfig.googlePlayUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = "/download";
    }
  }
}
