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

  // All image URLs are local and optimized, located in /public/images/
  assets: {
    // Official Loryfy Logo / Wordmark
    logoUrl: "/images/logo-small-size-for-website.webp",
    // Official Loryfy Icon / Symbol (White Letter O)
    iconUrl: "/images/Logo-O-Letter-White-Color.webp",
    // Official App Screenshot in WebP
    mobileAppScreen: "/images/home-screen.webp",
    // Official Quick Signup Screen
    signupScreen: "/images/singup.webp",
    // Open Graph Social Share Images (1200x630)
    ogImage: "/images/home-screen.webp", // English OG (1200x630)
    ogImageAr: "/images/home-screen-AR.webp", // Arabic OG (1200x630)
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

  // Analytics & Tracking (Configurable GA4 Property ID)
  ga4Id: "G-XXXXXXXXXX",
  analytics: {
    gaId: "G-XXXXXXXXXX",
  },
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
