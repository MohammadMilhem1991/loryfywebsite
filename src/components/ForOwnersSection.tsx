import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { Building2, Lightbulb, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

interface ForOwnersSectionProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const ForOwnersSection: React.FC<ForOwnersSectionProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleCtaClick = (route: PageRoute, label: string) => {
    trackEvent("navigate_page", { target_route: route, label, action_source: "for_owners_cta" });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate(route);
  };

  return (
    <section id="for-owners-section" className="py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFF] to-[#FFFFFF] relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      {/* Soft background aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#0F58D5]/4 blur-xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#17B3CD]/4 blur-xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInUp className="text-start max-w-4xl mb-10 sm:mb-12">
          <h2
            id="for-owners-heading"
            className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight"
          >
            {currentLang === "en" ? "For Business & Startup Owners" : "لأصحاب المشاريع والشركات الناشئة"}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#0F58D5] mt-3 leading-snug">
            {currentLang === "en"
              ? "Have a running business or a business idea and looking for partners or investors?"
              : "لديك مشروع قائم أو فكرة مشروع وتبحث عن شركاء أو مستثمرين؟"}
          </h3>

          <p className="text-sm sm:text-base text-[#475467] leading-relaxed mt-4 max-w-3xl">
            {currentLang === "en"
              ? "Whether you run a company, cafeteria, grocery, salon, garage, supermarket, or a larger business—or you have a startup idea—Loryfy helps you look for the right partner, investor, or buyer based on what you need."
              : "سواء كنت تدير شركة أو كافتيريا أو بقالة أو صالونًا أو ورشة سيارات أو سوبرماركت أو مشروعًا أكبر، أو لديك فكرة مشروع ناشئ، يساعدك لوريفاي في البحث عن الشريك أو المستثمر أو المشتري المناسب حسب احتياج مشروعك."}
          </p>
        </FadeInUp>

        {/* 3 Interactive Cards for Owners' Objectives */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.2}>
          {/* Card 1: List a Running Business */}
          <StaggerItem className="h-full" index={0}>
            <div className="bg-[#F5F8FF]/70 hover:bg-white border border-[#0F58D5]/15 hover:border-[#17B3CD]/40 py-4 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors">
                    {currentLang === "en" ? "List a Running Business" : "اعرض مشروعًا قائمًا"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-4">
                  {currentLang === "en"
                    ? "Find partners or investors to expand your business, or offer your running business for sale to serious buyers."
                    : "ابحث عن شركاء أو مستثمرين لتوسيع عملك، أو اعرض مشروعك القائم للبيع مباشرة لمشترين جادين."}
                </p>
              </div>
              <button
                onClick={() => handleCtaClick("list-running-business", "List Running Business")}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] pt-2.5 border-t border-slate-200/80 group-hover:border-[#17B3CD]/20 transition-all cursor-pointer text-start w-full"
              >
                <span>{currentLang === "en" ? "List Business" : "اعرض مشروعك"}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </StaggerItem>

          {/* Card 2: List your Startup Idea */}
          <StaggerItem className="h-full" index={1}>
            <div className="bg-[#F5F8FF]/70 hover:bg-white border border-[#0F58D5]/15 hover:border-[#17B3CD]/40 py-4 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#17B3CD]/15 text-[#17B3CD] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors">
                    {currentLang === "en" ? "List Your Business Idea" : "اعرض فكرة مشروعك"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-4">
                  {currentLang === "en"
                    ? "Share your business blueprint or startup idea and connect with co-founders, investors, or experienced operators."
                    : "اعرض فكرة مشروعك أو مخطط عملك وتواصل مع شركاء مؤسسين، مستثمرين، أو خبراء تشغيليين."}
                </p>
              </div>
              <button
                onClick={() => handleCtaClick("post-startup-idea", "List Startup Idea")}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] pt-2.5 border-t border-slate-200/80 group-hover:border-[#17B3CD]/20 transition-all cursor-pointer text-start w-full"
              >
                <span>{currentLang === "en" ? "List Your Idea" : "اعرض فكرتك"}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </StaggerItem>

          {/* Card 3: List a Trade License */}
          <StaggerItem className="h-full" index={2}>
            <div className="bg-[#F5F8FF]/70 hover:bg-white border border-[#0F58D5]/15 hover:border-[#17B3CD]/40 py-4 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors">
                    {currentLang === "en" ? "List a Trade License" : "اعرض رخصة تجارية"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-4">
                  {currentLang === "en"
                    ? "Offer your commercial mainland or freezone trade license for sale and connect directly with interested users."
                    : "اعرض رخصتك التجارية (داخل الدولة أو منطقة حرة) للبيع والتنازل وتواصل مباشرة مع المشترين والمهتمين."}
                </p>
              </div>
              <button
                onClick={() => handleCtaClick("list-trade-license", "List Trade License")}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] pt-2.5 border-t border-slate-200/80 group-hover:border-[#17B3CD]/20 transition-all cursor-pointer text-start w-full"
              >
                <span>{currentLang === "en" ? "List License" : "اعرض رخصتك"}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
};
