/**
 * Loryfy - Central Application Configuration
 * Official assets, URLs, and metadata
 */

export const loryfyConfig = {
  siteUrl: "https://loryfy.com",
  brandNameEn: "Loryfy",
  brandNameAr: "لوريفاي",
  legalName: "Loryfy Portal",
  email: "info@loryfy.com",

  // All image URLs are external and centralized here.
  // To change the image host later, update ONLY these URLs.
  assets: {
    // Official Loryfy Logo / Wordmark
    logoUrl: "https://i.postimg.cc/0NPCyVSX/logo-small-size-for-website.webp",
    // Official Loryfy Icon / Symbol (White Letter O)
    iconUrl: "https://i.postimg.cc/pTJV0jKx/Logo-O-Letter-White-Color.png",
    // Official App Screenshot in 4K
    mobileAppScreen: "https://i.postimg.cc/9FnmNCwp/Mobile-home-screen-4K.png",
    // Official Quick Signup Screen
    signupScreen: "https://i.postimg.cc/ZRNSVkhP/Mobile-app-signup-(4k)-v2.png",
    // Open Graph Social Share Image
    // ogImage (old 4K PNG fallback): https://i.postimg.cc/9FnmNCwp/Mobile-home-screen-4K.png
    // TODO: replace with an optimized 1200x630 (<200KB) version.
    ogImage: "https://i.postimg.cc/9FnmNCwp/Mobile-home-screen-4K.png",
  },

  // App Store & Play Store Configuration (Official links to be provided upon app store release)
  appStoreUrl: "", // official App Store link will be configured upon release
  googlePlayUrl: "", // official Google Play link will be configured upon release
  downloadQrUrl: "https://loryfy.com/download", // configurable QR target URL
  iosAppId: "",
  androidPackage: "",

  // Official WhatsApp Contact
  whatsapp: {
    phoneNumber: "+971 54 142 0855",
    rawNumber: "971541420855",
    chatUrl: "https://wa.me/971541420855",
    labelEn: "Chat on WhatsApp",
    labelAr: "تواصل عبر واتساب",
  },

  // Official Social Media Links
  socialLinks: {
    tiktok: "https://www.tiktok.com/@loryfyapp",
    facebook: "https://www.facebook.com/profile.php?id=61591097371267",
    instagram: "https://www.instagram.com/loryfyapp/",
    youtube: "https://www.youtube.com/@loryfy",
    linkedin: "", // kept empty as requested
    x: "",
  },

  // Analytics & Tracking (Configurable GA4 ID, left blank until official production measurement ID is provided)
  ga4Id: "",
};

/**
 * Commercial Configuration
 * Centrally manages all "Free" offering status to ensure claims remain 100% accurate.
 * If any offer changes, updating this config will automatically update UI, metadata, and structured data.
 */
export const commercialConfig = {
  freeRegistration: true,
  freeAppDownload: true,
  freeListingEnabled: true,
  freeListingEndDate: "",
  freeSearchAndExplore: true,
};
