import React, { useRef } from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { Building2, Lightbulb, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeInUp } from "./ScrollAnimations";
import { motion, useInView } from "motion/react";

interface DiscoverOpportunitiesSectionProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const DiscoverOpportunitiesSection: React.FC<DiscoverOpportunitiesSectionProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const firstBoxRef = useRef<HTMLDivElement>(null);
  const isFirstVisible = useInView(firstBoxRef, { once: true, amount: 0.1 });
  const isRestVisible = useInView(firstBoxRef, { once: true, amount: 0.4 });

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
    trackEvent("navigate_page", { category_title: title, route, action_source: "discover_opportunities_card" });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate(route);
  };

  return (
    <section
      id="discover-opportunities-section"
      className="py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFE] to-[#FFFFFF] relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Light dot matrix overlay */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Atmospheric ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#17B3CD]/5 blur-xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0F58D5]/4 blur-xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInUp className="text-start max-w-4xl mb-10 sm:mb-12">
          <h2
            id="discover-opportunities-heading"
            className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight lg:whitespace-nowrap"
          >
            {currentLang === "en" ? "For Those Interested in Investing & Business Partnerships" : "للمهتمين بالاستثمار والشراكة في المشاريع"}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#0F58D5] mt-3 leading-snug">
            {currentLang === "en"
              ? "Looking for a running business, startup, or business idea to join as a partner or invest in?"
              : "تبحث عن مشروع قائم أو مشروع ناشئ أو فكرة مشروع لتنضم إليه كشريك أو تستثمر فيه؟"}
          </h3>

          <p className="text-sm sm:text-base text-[#475467] leading-relaxed mt-4 max-w-3.5xl">
            {currentLang === "en"
              ? "You may be an employee or professional with capital but limited time, an experienced retiree, an individual investor, an investment company, or someone looking to contribute funding, management, operations, or strategic expertise. Loryfy helps you explore opportunities where you can participate in the way that suits you."
              : "قد تكون موظفًا أو مهنيًا لديك رأس مال ووقتك محدود، أو متقاعدًا صاحب خبرة، أو مستثمرًا فرديًا، أو جهة استثمارية، أو شخصًا يرغب في المساهمة بالتمويل أو الإدارة أو التشغيل أو الخبرة الاستراتيجية. يساعدك لوريفاي على اكتشاف فرص يمكنك المشاركة فيها بالطريقة التي تناسبك."}
          </p>
        </FadeInUp>

        {/* 3 Main Segment Cards Grid - Strict Order: Running Businesses, Startup Ideas, Trade Licenses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 pt-2">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isFirst = idx === 0;

            return (
              <motion.div
                key={cat.id}
                ref={isFirst ? firstBoxRef : undefined}
                className="h-full"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={
                  isFirst
                    ? (isFirstVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 })
                    : (isRestVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 })
                }
                transition={{
                  duration: 0.48,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isFirst ? 0 : (idx - 1) * 0.1,
                }}
                whileTap={{ scale: 0.985 }}
              >
                <div
                  id={`discover-category-card-${cat.id}`}
                  className="group relative bg-white hover:bg-[#F5F8FF]/20 rounded-2xl py-4 px-6 border border-slate-200/80 hover:border-[#17B3CD]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accentColor} flex items-center justify-center shadow-2xs shrink-0 transition-transform group-hover:scale-105`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors">
                          {cat.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100/70 text-[#667085] border border-slate-200/50 transition-colors group-hover:bg-[#17B3CD]/5 group-hover:text-[#17B3CD] group-hover:border-[#17B3CD]/10 shrink-0">
                        {cat.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCardClick(cat.route, cat.title)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] pt-2.5 border-t border-slate-200/80 group-hover:border-[#17B3CD]/25 transition-all cursor-pointer text-start w-full"
                  >
                    <span>{cat.cta}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
