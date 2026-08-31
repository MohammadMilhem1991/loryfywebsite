/**
 * Loryfy Partner Profiles Section ("Who can you connect with on Loryfy?")
 * Explains real-life potential partners:
 * 1. Professionals with Capital
 * 2. Experienced Executives or Retirees
 * 3. Individual Investors
 * 4. Companies
 * Seamlessly integrated supporting message & CTA in English and Arabic.
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { WalletCards, Award, UserCheck, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

interface PartnerTypesProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const PartnerTypes: React.FC<PartnerTypesProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const partnerCards = [
    {
      id: "professionals-with-capital",
      title: t.partnerTypes.professionalsWithCapital.title,
      description: t.partnerTypes.professionalsWithCapital.description,
      icon: WalletCards,
      iconBg: "bg-[#0F58D5]/10 text-[#0F58D5] border-[#0F58D5]/20",
    },
    {
      id: "experienced-executives",
      title: t.partnerTypes.experiencedExecutives.title,
      description: t.partnerTypes.experiencedExecutives.description,
      icon: Award,
      iconBg: "bg-[#17B3CD]/15 text-[#0F58D5] border-[#17B3CD]/30",
    },
    {
      id: "individual-investors",
      title: t.partnerTypes.individualInvestors.title,
      description: t.partnerTypes.individualInvestors.description,
      icon: UserCheck,
      iconBg: "bg-[#0F58D5]/10 text-[#0F58D5] border-[#0F58D5]/20",
    },
    {
      id: "companies",
      title: t.partnerTypes.companies.title,
      description: t.partnerTypes.companies.description,
      icon: Building2,
      iconBg: "bg-[#17B3CD]/15 text-[#0F58D5] border-[#17B3CD]/30",
    },
  ];

  const handlePartnerExplore = () => {
    trackEvent("find_partner_click", { section: "partner_types_cta" });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate("find-business-partner-uae");
  };

  return (
    <section id="partner-types-section" className="py-6 sm:py-8 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Introduction */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          <h2
            id="partner-types-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight"
          >
            {t.partnerTypes.sectionHeading}
          </h2>
          <div className="mt-2.5 w-12 h-1 bg-gradient-to-r from-[#0F58D5] to-[#17B3CD] mx-auto rounded-full" />
          
          <p className="mt-3.5 text-xs sm:text-sm text-[#475467] leading-relaxed max-w-2xl mx-auto">
            {t.partnerTypes.introduction}
          </p>
        </FadeInUp>

        {/* 4 Balanced Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8 items-stretch" staggerDelay={0.09}>
          {partnerCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.id}
                id={`partner-card-${item.id}`}
                className="bg-[#F5F8FF]/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-[#0F58D5]/15 hover:border-[#17B3CD]/40 shadow-xs hover:shadow-[0_10px_25px_rgba(23,179,205,0.12)] transition-all duration-300 flex flex-col justify-start group"
                type="tumble"
                index={idx}
              >
                <div className="flex items-start gap-3 mb-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg} shadow-2xs group-hover:scale-105 transition-transform mt-0.5`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#101828] leading-snug min-h-[40px] flex items-center">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475467] leading-relaxed flex-1">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Supporting Message & Integrated CTA Section */}
        <FadeInUp>
          <div className="bg-[#F5F8FF] rounded-2xl p-5 sm:p-6 border border-[#0F58D5]/15 shadow-2xs text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-[#101828] font-medium leading-relaxed mb-3.5">
              {t.partnerTypes.supportingMessage}
            </p>
            <div>
              <button
                id="partner-types-cta-btn"
                onClick={handlePartnerExplore}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] transition-colors cursor-pointer group"
              >
                <span>{t.partnerTypes.cta}</span>
                <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
};
