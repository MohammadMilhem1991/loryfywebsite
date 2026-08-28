/**
 * Loryfy Main Category Cards (Section 15-17)
 * Running Businesses, Startup Ideas, Trade Licenses
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { Building2, Lightbulb, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

interface CategoryCardsProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    {
      id: "running-businesses",
      title: t.categories.runningBusinesses.title,
      description: t.categories.runningBusinesses.description,
      cta: t.categories.runningBusinesses.cta,
      route: "running-businesses-uae" as PageRoute,
      icon: Building2,
      accentColor: "from-[#0F58D5]/10 to-[#0F58D5]/5 text-[#0F58D5]",
      badge: currentLang === "en" ? "Operational" : "قائم ونشط",
    },
    {
      id: "startup-ideas",
      title: t.categories.startupIdeas.title,
      description: t.categories.startupIdeas.description,
      cta: t.categories.startupIdeas.cta,
      route: "startup-opportunities-uae" as PageRoute,
      icon: Lightbulb,
      accentColor: "from-[#17B3CD]/15 to-[#17B3CD]/5 text-[#17B3CD]",
      badge: currentLang === "en" ? "Early Stage" : "مرحلة الفكرة",
    },
    {
      id: "trade-licenses",
      title: t.categories.tradeLicenses.title,
      description: t.categories.tradeLicenses.description,
      cta: t.categories.tradeLicenses.cta,
      route: "trade-license-opportunities-uae" as PageRoute,
      icon: FileText,
      accentColor: "from-[#0F58D5]/15 to-[#17B3CD]/10 text-[#0F58D5]",
      badge: currentLang === "en" ? "Commercial" : "تراخيص تجارية",
    },
  ];

  const handleCardClick = (route: PageRoute, title: string) => {
    trackEvent("category_click", { category_title: title, route });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate(route);
  };

  return (
    <section id="categories-section" className="py-5 sm:py-7 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2
            id="categories-main-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight"
          >
            {t.categories.sectionHeading}
          </h2>
          <div className="mt-2 w-10 h-1 bg-gradient-to-r from-[#0F58D5] to-[#17B3CD] mx-auto rounded-full" />
        </FadeInUp>

        {/* 3 Main Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.2}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <StaggerItem
                key={cat.id}
                id={`category-card-${cat.id}`}
                className="group relative bg-[#F5F8FF]/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-[#0F58D5]/15 hover:border-[#17B3CD]/40 shadow-xs hover:shadow-[0_10px_25px_rgba(23,179,205,0.12)] transition-all duration-300 flex flex-col justify-between"
                index={idx}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accentColor} flex items-center justify-center shadow-2xs shrink-0 transition-transform group-hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-white text-[#475467] border border-slate-200 shadow-2xs transition-all group-hover:bg-[#17B3CD]/5 group-hover:text-[#17B3CD] group-hover:border-[#17B3CD]/15 shrink-0">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <button
                  onClick={() => handleCardClick(cat.route, cat.title)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] pt-2.5 border-t border-slate-200/80 group-hover:border-[#17B3CD]/25 transition-all cursor-pointer text-start"
                >
                  <span>{cat.cta}</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
