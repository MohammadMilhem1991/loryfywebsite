/**
 * Loryfy Main Footer Component
 * Strict compliance: Official logo, info@loryfy.com, official disclaimer, no fake addresses.
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { loryfyConfig } from "../config/loryfyConfig";
import { trackEvent } from "../utils/analytics";
import { storiesData, storySlugs } from "../data/storiesData";
import { Mail } from "lucide-react";
import {
  TikTokIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
  LinkedInIcon,
} from "./OfficialStoreIcons";

interface FooterProps {
  currentLang: Language;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const handleLinkClick = (page: PageRoute, label: string, slug?: string) => {
    trackEvent("navigate_page", { target_page: page, link_label: label });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate(page, slug);
  };

  const handleSocialClick = (network: string, url: string) => {
    trackEvent("social_click", { network, url });
  };

  return (
    <footer id="main-footer" className="bg-[#101828] text-white pt-12 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-8 border-b border-slate-800">
          {/* Col 1: Brand, Direct WhatsApp & Official Channels (2 cols on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLinkClick("home", "Footer Logo")}
              className="inline-block text-start cursor-pointer focus:outline-hidden"
              aria-label="Loryfy"
            >
              <img
                src={loryfyConfig.assets.logoUrl}
                alt="Loryfy"
                width={120}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </button>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            {/* Official Contact Email & WhatsApp */}
            <div className="pt-2 space-y-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                {t.footer.contactTitle}
              </div>
              
              <div className="flex flex-col gap-2">
                {/* Official WhatsApp Chat Link */}
                <a
                  id="footer-whatsapp-btn"
                  href={loryfyConfig.whatsapp.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick("whatsapp", loryfyConfig.whatsapp.chatUrl)}
                  className="inline-flex items-center gap-2.5 text-sm text-[#25D366] hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <span
                    dir="ltr"
                    className="font-semibold [direction:ltr] [unicode-bidi:isolate] inline-block font-sans"
                  >
                    <bdi dir="ltr">{loryfyConfig.whatsapp.phoneNumber}</bdi>
                  </span>
                  <span className="text-xs text-slate-400 font-normal">
                    ({currentLang === "en" ? "WhatsApp Chat" : "واتساب"})
                  </span>
                </a>

                {/* Email Link */}
                <a
                  id="footer-email-btn"
                  href={`mailto:${loryfyConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-[#17B3CD] hover:text-white transition-colors group"
                  onClick={() => trackEvent("contact_click", { method: "footer_email" })}
                >
                  <div className="w-6 h-6 rounded-md bg-[#17B3CD]/20 text-[#17B3CD] flex items-center justify-center group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span dir="ltr" className="[direction:ltr] [unicode-bidi:isolate] inline-block font-sans">
                    <bdi dir="ltr">{loryfyConfig.email}</bdi>
                  </span>
                </a>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                {currentLang === "en" ? "Follow Loryfy" : "تابعنا على"}
              </div>
              <div className="flex items-center gap-2.5">
                {/* TikTok */}
                {loryfyConfig.socialLinks.tiktok && (
                  <a
                    id="social-link-tiktok"
                    href={loryfyConfig.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick("tiktok", loryfyConfig.socialLinks.tiktok)}
                    aria-label="TikTok"
                    className="w-9 h-9 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-black border border-slate-700/80 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                )}

                {/* Facebook */}
                {loryfyConfig.socialLinks.facebook && (
                  <a
                    id="social-link-facebook"
                    href={loryfyConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick("facebook", loryfyConfig.socialLinks.facebook)}
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-[#1877F2] border border-slate-700/80 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                )}

                {/* Instagram */}
                {loryfyConfig.socialLinks.instagram && (
                  <a
                    id="social-link-instagram"
                    href={loryfyConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick("instagram", loryfyConfig.socialLinks.instagram)}
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-[#E4405F] border border-slate-700/80 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}

                {/* YouTube */}
                {loryfyConfig.socialLinks.youtube && (
                  <a
                    id="social-link-youtube"
                    href={loryfyConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick("youtube", loryfyConfig.socialLinks.youtube)}
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-[#FF0000] border border-slate-700/80 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                  </a>
                )}

                {/* LinkedIn */}
                <a
                  id="social-link-linkedin"
                  href={loryfyConfig.socialLinks.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!loryfyConfig.socialLinks.linkedin) {
                      e.preventDefault();
                    }
                    handleSocialClick("linkedin", loryfyConfig.socialLinks.linkedin);
                  }}
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-[#0A66C2] border border-slate-700/80 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.linksTitle}
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleLinkClick("home", "Footer Home")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("how-it-works", "Footer How It Works")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("about", "Footer About")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.about}
                </button>
              </li>
              <li>
                <a
                  href={`/${currentLang}/real-examples-of-using-loryfy`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("real-examples-of-using-loryfy", "Footer Real Examples of Using Loryfy");
                  }}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer text-start block"
                >
                  {currentLang === "en" ? "Real Examples of Using Loryfy" : "أمثلة واقعية لاستخدام لوريفاي"}
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("faq", "Footer FAQ")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.faq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("contact", "Footer Contact")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("download", "Footer Download")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.nav.downloadApp}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Opportunities */}
          <div className="space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.categoriesTitle}
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href={`/${currentLang}/for-owners`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("for-owners", "Footer For Owners & Founders");
                  }}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer text-start block"
                >
                  {t.nav.forOwners}
                </a>
              </li>
              <li>
                <a
                  href={`/${currentLang}/discover`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("discover", "Footer For Partners & Investors");
                  }}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer text-start block"
                >
                  {t.nav.discover}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Technical Architecture */}
          <div className="space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.legalTitle}
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleLinkClick("terms", "Footer Terms")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("privacy", "Footer Privacy")}
                  className="hover:text-[#17B3CD] transition-colors cursor-pointer"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => handleLinkClick("sitemap", "Footer Sitemap")}
                  className="hover:text-[#17B3CD] text-xs text-slate-400 transition-colors cursor-pointer"
                >
                  {currentLang === "en" ? "HTML Sitemap & Index" : "خريطة الموقع والفهرس"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("robots", "Footer Robots.txt")}
                  className="hover:text-[#17B3CD] text-xs text-slate-400 transition-colors cursor-pointer"
                >
                  robots.txt
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("llms", "Footer LLMs.txt")}
                  className="hover:text-[#17B3CD] text-xs text-slate-400 transition-colors cursor-pointer"
                >
                  llms.txt (AI Crawlers)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{t.footer.copyright}</p>
          <div>
            <button
              onClick={() => handleLinkClick("download", "Footer Bottom Download")}
              className="text-[#17B3CD] hover:underline"
            >
              {currentLang === "en" ? "Get the Loryfy App" : "احصل على تطبيق لوريفاي"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
