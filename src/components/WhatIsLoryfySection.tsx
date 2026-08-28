/**
 * Loryfy What is Loryfy Section (Section 32)
 * Semantic, crawlable section for humans, Google, and AI discovery engines.
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { Bot, Sparkles, Building2, Lightbulb, FileText, Handshake } from "lucide-react";
import { FadeInUp } from "./ScrollAnimations";

interface WhatIsLoryfySectionProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const WhatIsLoryfySection: React.FC<WhatIsLoryfySectionProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];

  return (
    <section id="what-is-loryfy-section" className="py-5 sm:py-7 bg-[#F5F8FF]/60 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#0F58D5]/20 text-sm font-bold text-[#0F58D5] mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#17B3CD]" />
            <span>{t.whatIsLoryfy.badge}</span>
          </div>

          <h2
            id="what-is-loryfy-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#101828] mb-3"
          >
            {t.whatIsLoryfy.heading}
          </h2>

          <p
            id="what-is-loryfy-body-text"
            className="text-sm sm:text-base text-[#101828] font-medium leading-relaxed max-w-3xl mx-auto mb-5"
          >
            {t.whatIsLoryfy.description}
          </p>

          {/* Semantic fast tags for AI & crawlers */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            <button
              onClick={() => onNavigate("running-businesses-uae")}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Running Businesses" : "مشاريع قائمة"}
            </button>
            <button
              onClick={() => onNavigate("startup-opportunities-uae")}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Startup Ideas" : "أفكار مشاريع"}
            </button>
            <button
              onClick={() => onNavigate("find-business-partner-uae")}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Business Partners (UAE)" : "شركاء أعمال في الإمارات"}
            </button>
            <button
              onClick={() => onNavigate("trade-license-opportunities-uae")}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Trade Licenses" : "رخص تجارية"}
            </button>
            <button
              onClick={() => onNavigate("businesses-for-sale-uae")}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Businesses for Sale" : "مشاريع للبيع"}
            </button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
