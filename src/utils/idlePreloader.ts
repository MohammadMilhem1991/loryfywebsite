import { Language } from "../types";

// Keep track of already preloaded images to avoid duplicate requests
const preloadedUrls = new Set<string>();

function preloadSingleImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || preloadedUrls.has(url)) {
      resolve();
      return;
    }
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      preloadedUrls.add(url);
      resolve();
    };
    img.onerror = () => {
      resolve(); // Fail silently without blocking
    };
    img.src = url;
  });
}

function runWhenIdle(callback: () => void, timeout = 2500) {
  if (typeof window === "undefined") return;
  if ("requestIdleCallback" in window) {
    (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
      callback,
      { timeout }
    );
  } else {
    setTimeout(callback, Math.min(timeout, 2000));
  }
}

/**
 * Initiates low-priority background loading of important lower-homepage
 * and light subpage assets only after above-the-fold hero rendering is complete.
 * Strictly respects active language (only EN on English pages, only AR on Arabic pages).
 */
export function scheduleIdleImagePreloads(lang: Language) {
  if (typeof window === "undefined") return;

  const startPreloading = () => {
    // Phase 1: Lower homepage carousel primary slides (language-specific)
    const lowerHomepageImages =
      lang === "ar"
        ? ["/images/Create-ad-Find-partner-AR.webp", "/images/chat-1-AR.webp"]
        : ["/images/Create-ad-Find-partner.webp", "/images/chat-1.webp"];

    // Phase 2: Light subpage key preview assets (language-specific)
    const subpageImages =
      lang === "ar"
        ? ["/images/singup-AR.webp"]
        : ["/images/singup.webp"];

    runWhenIdle(async () => {
      for (const src of lowerHomepageImages) {
        await preloadSingleImage(src);
      }

      // Schedule phase 2 in a subsequent idle slice
      runWhenIdle(async () => {
        for (const src of subpageImages) {
          await preloadSingleImage(src);
        }
      }, 3500);
    }, 2000);
  };

  if (document.readyState === "complete") {
    startPreloading();
  } else {
    window.addEventListener("load", startPreloading, { once: true });
  }
}
