import { Language } from "../types";

const EN_TO_AR_MAP: Record<string, string> = {
  // Local paths localization (highly preferred & fast)
  "/images/home-screen.webp": "/images/home-screen-AR.webp",
  "/images/singup.webp": "/images/singup-AR.webp",
  "/images/chat-1.webp": "/images/chat-1-AR.webp",
  "/images/chat-2.webp": "/images/chat-2-AR.webp",
  "/images/chat-3.webp": "/images/chat-3-AR.webp",
  "/images/chat-4.webp": "/images/chat-4-AR.webp",
  "/images/Create-ad-sell.webp": "/images/Create-ad-sell-AR.webp",
  "/images/Create-ad-Find-partner.webp": "/images/Create-ad-Find-partner-AR.webp",
  "/images/1.webp": "/images/1-AR.webp",
  "/images/2.webp": "/images/2-AR.webp",
  "/images/3.webp": "/images/3-AR.webp",
  "/images/5.webp": "/images/5-AR.webp",
  "/images/e1.webp": "/images/e1-AR.webp",
  "/images/e2.webp": "/images/e2-AR.webp",
  "/images/e3.webp": "/images/e3-AR.webp",
  "/images/e4.webp": "/images/e4-AR.webp",
  "/images/e5.webp": "/images/e5-AR.webp",
  "/images/e6.webp": "/images/e6-AR.webp"
};

export function getLocalizedImage(src: string, currentLang: Language): string {
  if (currentLang === "ar") {
    return EN_TO_AR_MAP[src] || src;
  }
  return src;
}
