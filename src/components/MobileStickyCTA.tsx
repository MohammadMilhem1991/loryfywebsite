/**
 * Loryfy Mobile Sticky CTA (Section 97)
 * Appears when visitor scrolls beyond the hero, hides when final CTA is in view.
 */

import React, { useState, useEffect } from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { Download } from "lucide-react";

interface MobileStickyCTAProps {
  currentLang: Language;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  currentLang,
  currentPage,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = 250;

      // Keep it visible as long as user has scrolled down and is not already on download page
      if (scrollY > heroHeight && currentPage !== "download") {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  if (!visible || currentPage === "download") return null;

  return (
    <div
      id="mobile-sticky-cta-bar"
      className="sm:hidden fixed bottom-2 inset-x-3 z-40 animate-in slide-in-from-bottom duration-300"
    >
      <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-slate-200/80 flex items-center justify-between gap-3">
        <div className="text-start px-2">
          <div className="font-extrabold text-xs text-[#101828]">
            {t.brandName}
          </div>
          <div className="text-[10px] text-[#475467] truncate max-w-[140px]">
            {currentLang === "en" ? "Find partners & opportunities" : "اعثر على شركاء وفرص"}
          </div>
        </div>

        <button
          onClick={() => {
            trackEvent("hero_download_click", { source: "mobile_sticky_bar" });
            onNavigate("download");
          }}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-sm active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{t.nav.downloadApp}</span>
        </button>
      </div>
    </div>
  );
};
