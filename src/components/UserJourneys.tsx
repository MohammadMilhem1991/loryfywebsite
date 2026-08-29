/**
 * Loryfy Two Main User Journeys (Section 18)
 * Split Section: "I Have a Business/Idea" vs "I'm Looking for a Business Opportunity"
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { PlusCircle, Search, ArrowRight, ArrowLeft, Users, Briefcase } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

interface UserJourneysProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const UserJourneys: React.FC<UserJourneysProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleListingClick = () => {
    trackEvent("find_partner_click", { journey: "create_listing_owners" });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate("find-partners-investors");
  };

  const handleExploreClick = () => {
    trackEvent("category_click", { journey: "start_exploring" });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate("find-business-partner-uae");
  };

  return (
    <section id="user-journeys-section" className="py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F6FAFF] to-[#FFFFFF] relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch" staggerDelay={0.09}>
          
          {/* User Journey A: I Have a Business or Idea */}
          <StaggerItem
            id="journey-card-a"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0F58D5]/15 shadow-xs hover:shadow-[0_12px_28px_rgba(15,88,213,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient accent top bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0F58D5]" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F58D5] bg-[#0F58D5]/5 px-3.5 py-1.5 rounded-full border border-[#0F58D5]/15 shrink-0">
                  {t.userJourneys.journeyA.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#101828] mb-2 leading-snug">
                {t.userJourneys.journeyA.title}
              </h3>

              <p className="text-sm text-[#475467] leading-relaxed mb-4">
                {t.userJourneys.journeyA.description}
              </p>

              {t.userJourneys.journeyA.businessTypes && (
                <p className="text-xs font-semibold text-[#0F58D5] bg-[#0F58D5]/5 border border-[#0F58D5]/10 rounded-xl px-3.5 py-2.5 mb-6 leading-relaxed">
                  {t.userJourneys.journeyA.businessTypes}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-start">
              <button
                id="journey-a-cta-btn"
                onClick={handleListingClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-md shadow-[#0F58D5]/20 hover:shadow-lg hover:shadow-[#17B3CD]/30 transition-all cursor-pointer text-sm active:scale-98"
              >
                <PlusCircle className="w-4 h-4" />
                <span>{t.userJourneys.journeyA.cta}</span>
              </button>
            </div>
          </StaggerItem>

          {/* User Journey B: I'm Looking for a Business Opportunity */}
          <StaggerItem
            id="journey-card-b"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#17B3CD]/25 shadow-xs hover:shadow-[0_12px_28px_rgba(23,179,205,0.14)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient accent top bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#17B3CD]" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#17B3CD]/15 text-[#0F58D5] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17B3CD] bg-[#17B3CD]/10 px-3.5 py-1.5 rounded-full border border-[#17B3CD]/20 shrink-0">
                  {t.userJourneys.journeyB.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#101828] mb-2 leading-snug">
                {t.userJourneys.journeyB.title}
              </h3>

              <p className="text-sm text-[#475467] leading-relaxed mb-6">
                {t.userJourneys.journeyB.description}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-start">
              <button
                id="journey-b-cta-btn"
                onClick={handleExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#101828] bg-slate-50 hover:bg-slate-100 border border-slate-200/80 shadow-2xs hover:border-[#17B3CD]/35 hover:text-[#17B3CD] transition-all cursor-pointer text-sm"
              >
                <Search className="w-4 h-4 text-[#17B3CD]" />
                <span>{t.userJourneys.journeyB.cta}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-[#475467]" />
              </button>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
};
