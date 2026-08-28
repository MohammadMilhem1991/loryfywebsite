/**
 * Loryfy Why Loryfy Section (Section 31)
 * 4 Core Value Pillars including approved UAE & International text.
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { Target, Zap, Smile, MapPin, Sparkles } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

interface WhyLoryfyProps {
  currentLang: Language;
  onNavigate?: (page: PageRoute) => void;
}

export const WhyLoryfy: React.FC<WhyLoryfyProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const pillars = [
    {
      id: "focused-discovery",
      title: t.whyLoryfy.focusedDiscovery.title,
      description: t.whyLoryfy.focusedDiscovery.description,
      icon: Target,
      color: "text-[#0F58D5] bg-[#0F58D5]/10 border border-[#0F58D5]/20",
    },
    {
      id: "direct-connection",
      title: t.whyLoryfy.directConnection.title,
      description: t.whyLoryfy.directConnection.description,
      icon: Zap,
      color: "text-[#0F58D5] bg-[#17B3CD]/15 border border-[#17B3CD]/30",
    },
    {
      id: "simple-experience",
      title: t.whyLoryfy.simpleExperience.title,
      description: t.whyLoryfy.simpleExperience.description,
      icon: Smile,
      color: "text-[#0F58D5] bg-[#0F58D5]/10 border border-[#0F58D5]/20",
    },
    {
      id: "uae-focused",
      title: t.whyLoryfy.uaeFocused.title,
      description: t.whyLoryfy.uaeFocused.description,
      icon: MapPin,
      color: "text-[#0F58D5] bg-[#17B3CD]/15 border border-[#17B3CD]/30",
    },
  ];

  return (
    <section id="why-loryfy-section" className="py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFF] to-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Platform Overview Banner (What is Loryfy) */}
        <FadeInUp className="text-center max-w-4xl mx-auto mb-8 bg-white/80 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-[#0F58D5]/15 shadow-2xs">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0F58D5]/10 border border-[#0F58D5]/20 text-sm font-bold text-[#0F58D5] mb-2.5 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#17B3CD]" />
            <span>{t.whatIsLoryfy.badge}</span>
          </div>

          <h2
            id="what-is-loryfy-heading"
            className="text-lg sm:text-xl font-extrabold text-[#101828] mb-2"
          >
            {t.whatIsLoryfy.heading}
          </h2>

          <p
            id="what-is-loryfy-body-text"
            className="text-xs sm:text-sm text-[#101828] font-medium leading-relaxed max-w-3xl mx-auto mb-4"
          >
            {t.whatIsLoryfy.description}
          </p>

          {/* Semantic fast tags for AI & crawlers */}
          {onNavigate && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto">
              <button
                onClick={() => onNavigate("running-businesses-uae")}
                className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
              >
                {currentLang === "en" ? "Running Businesses" : "مشاريع قائمة"}
              </button>
              <button
                onClick={() => onNavigate("startup-opportunities-uae")}
                className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
              >
                {currentLang === "en" ? "Startup Ideas" : "أفكار مشاريع"}
              </button>
              <button
                onClick={() => onNavigate("find-business-partner-uae")}
                className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
              >
                {currentLang === "en" ? "Business Partners (UAE)" : "شركاء أعمال في الإمارات"}
              </button>
              <button
                onClick={() => onNavigate("trade-license-opportunities-uae")}
                className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
              >
                {currentLang === "en" ? "Trade Licenses" : "رخص تجارية"}
              </button>
              <button
                onClick={() => onNavigate("businesses-for-sale-uae")}
                className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#475467] hover:text-[#17B3CD] hover:border-[#17B3CD] transition-colors cursor-pointer"
              >
                {currentLang === "en" ? "Businesses for Sale" : "مشاريع للبيع"}
              </button>
            </div>
          )}
        </FadeInUp>

        {/* Section Heading: Why Loryfy */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-6">
          <h3
            id="why-loryfy-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight"
          >
            {t.whyLoryfy.heading}
          </h3>
          <div className="mt-2 w-10 h-1 bg-gradient-to-r from-[#0F58D5] to-[#17B3CD] mx-auto rounded-full" />
        </FadeInUp>

        {/* 4 Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4" staggerDelay={0.2}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.id}
                id={`why-card-${item.id}`}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-[#17B3CD]/40 hover:shadow-[0_8px_20px_rgba(23,179,205,0.06)] transition-all flex flex-col justify-between"
                index={idx}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#101828]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#475467] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
