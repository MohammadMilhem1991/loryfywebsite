import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import {
  Building2,
  Lightbulb,
  FileText,
  UserPlus,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Users,
} from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

interface CategoryHubPageProps {
  type: "for-owners" | "discover";
  currentLang: Language;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const CategoryHubPage: React.FC<CategoryHubPageProps> = ({
  type,
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronBreadcrumb = isRtl ? ArrowLeft : ChevronRight;

  const isOwners = type === "for-owners";

  const cards = isOwners
    ? [
        {
          id: "card-list-running-business",
          route: "list-running-business" as PageRoute,
          icon: Building2,
          iconBg: "bg-[#0F58D5]/10 text-[#0F58D5]",
          title: currentLang === "en" ? "List a Running Business" : "اعرض مشروعاً قائماً",
          desc:
            currentLang === "en"
              ? "Find partners or investors, or offer your running business for sale"
              : "ابحث عن شركاء أو مستثمرين، أو اعرض مشروعك القائم للبيع",
          ctaText: currentLang === "en" ? "List Business" : "اعرض مشروعك",
        },
        {
          id: "card-post-startup-idea",
          route: "post-startup-idea" as PageRoute,
          icon: Lightbulb,
          iconBg: "bg-[#17B3CD]/15 text-[#17B3CD]",
          title: currentLang === "en" ? "List Your Business Idea" : "اعرض فكرة مشروعك",
          desc:
            currentLang === "en"
              ? "Share your business idea and connect with potential co-founders, investors, or experienced operators."
              : "شارك فكرة مشروعك وتواصل مع شركاء مؤسسين، مستثمرين، أو خبراء تشغيليين.",
          ctaText: currentLang === "en" ? "List Your Idea" : "اعرض فكرتك",
        },
        {
          id: "card-list-trade-license",
          route: "list-trade-license" as PageRoute,
          icon: FileText,
          iconBg: "bg-[#0F58D5]/10 text-[#0F58D5]",
          title: currentLang === "en" ? "List a Trade License" : "اعرض رخصة تجارية",
          desc:
            currentLang === "en"
              ? "Offer your trade license for sale and connect with interested users"
              : "اعرض رخصتك التجارية للبيع وتواصل مع المستخدمين المهتمين",
          ctaText: currentLang === "en" ? "List License" : "اعرض رخصتك",
        },
        {
          id: "card-find-business-partner",
          route: "find-business-partner-uae" as PageRoute,
          icon: UserPlus,
          iconBg: "bg-[#17B3CD]/15 text-[#17B3CD]",
          title: currentLang === "en" ? "Find Business Partner in UAE" : "ابحث عن شريك تجاري في الإمارات",
          desc:
            currentLang === "en"
              ? "Discover partners, investors, or options to buy/sell business"
              : "اكتشف شركاء، مستثمرين، أو خيارات شراء وبيع المشاريع",
          ctaText: currentLang === "en" ? "Find Partners" : "اعثر على شريك",
        },
      ]
    : [
        {
          id: "card-running-businesses",
          route: "running-businesses-uae" as PageRoute,
          icon: Building2,
          iconBg: "bg-[#0F58D5]/10 text-[#0F58D5]",
          title: currentLang === "en" ? "Explore Running Businesses" : "استكشف المشاريع القائمة",
          desc:
            currentLang === "en"
              ? "Running businesses seeking partners, investors, or buyers"
              : "مشاريع قائمة تبحث عن شركاء أو مستثمرين أو مشترين",
          ctaText: currentLang === "en" ? "Explore Businesses" : "تصفح المشاريع",
        },
        {
          id: "card-startup-opportunities",
          route: "startup-opportunities-uae" as PageRoute,
          icon: Lightbulb,
          iconBg: "bg-[#17B3CD]/15 text-[#17B3CD]",
          title: currentLang === "en" ? "Explore Startup Ideas" : "استكشف أفكار المشاريع",
          desc:
            currentLang === "en"
              ? "Business and startup ideas seeking partners or investors"
              : "أفكار مشاريع وشركات ناشئة تبحث عن شركاء أو مستثمرين",
          ctaText: currentLang === "en" ? "Explore Ideas" : "تصفح الأفكار",
        },
        {
          id: "card-trade-license-opportunities",
          route: "trade-license-opportunities-uae" as PageRoute,
          icon: FileText,
          iconBg: "bg-[#0F58D5]/10 text-[#0F58D5]",
          title: currentLang === "en" ? "Explore Trade Licenses" : "استكشف الرخص التجارية",
          desc:
            currentLang === "en"
              ? "Trade licenses available for sale"
              : "رخص تجارية معروضة للبيع والتنازل",
          ctaText: currentLang === "en" ? "Explore Licenses" : "تصفح الرخص",
        },
        {
          id: "card-find-partners-investors",
          route: "find-partners-investors" as PageRoute,
          icon: Users,
          iconBg: "bg-[#17B3CD]/15 text-[#17B3CD]",
          title: currentLang === "en" ? "Find Partners & Investors" : "ابحث عن شركاء ومستثمرين",
          desc:
            currentLang === "en"
              ? "Explore funding, strategic, and operating partner opportunities"
              : "اكتشف فرص تمويلية واستراتيجية وتشغيلية مع شركاء ومستثمرين",
          ctaText: currentLang === "en" ? "Find Partners" : "استكشف الفرص",
        },
      ];

  const handleCardClick = (route: PageRoute, label: string) => {
    trackEvent("navigate_page", { target_route: route, label, action_source: `${type}_hub_card` });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate(route);
  };

  return (
    <div
      id={`${type}-hub-page`}
      className="bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF] min-h-screen pt-4 pb-16 sm:py-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#475467]">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#0F58D5] transition-colors cursor-pointer"
          >
            {t.footer.home}
          </button>
          <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-300 shrink-0 rtl:rotate-180" />
          <span className="font-semibold text-[#101828]">
            {isOwners ? t.nav.forOwners : t.nav.discover}
          </span>
        </nav>

        {/* Section Header */}
        <FadeInUp className="text-start max-w-4xl">
          <h1
            id={`${type}-hub-heading`}
            className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight"
          >
            {isOwners
              ? currentLang === "en"
                ? "For Owners & Founders"
                : "لأصحاب المشاريع والأفكار"
              : currentLang === "en"
              ? "For Partners & Investors"
              : "للشركاء والمستثمرين"}
          </h1>

          <h2 className="text-lg sm:text-xl font-bold text-[#0F58D5] mt-2 leading-snug">
            {isOwners
              ? currentLang === "en"
                ? "Have a running business, startup idea, or trade license in the UAE?"
                : "لديك مشروع قائم أو فكرة ناشئة أو رخصة تجارية في الإمارات؟"
              : currentLang === "en"
              ? "Looking to partner with, buy, or invest in UAE businesses?"
              : "تبحث عن شراكة أو استثمار أو شراء مشاريع في الإمارات؟"}
          </h2>

          <p className="text-sm sm:text-base text-[#475467] leading-relaxed mt-3 max-w-3xl">
            {isOwners
              ? currentLang === "en"
                ? "Whether you run an established company or have a new business idea, select an option below to connect with partners, investors, or buyers."
                : "سواء كنت تدير مشروعاً قائماً أو لديك فكرة مشروع جديد، اختر إحدى الخيارات أدناه للتواصل مع الشريك أو المستثمر أو المشتري المناسب."
              : currentLang === "en"
              ? "Explore running businesses, startup ideas, trade licenses, and investment opportunities in the UAE."
              : "استكشف المشاريع القائمة، وأفكار الشركات الناشئة، والرخص التجارية، وفرص الاستثمار والشراكة في الإمارات."}
          </p>
        </FadeInUp>

        {/* 4 Cards Grid - Matches ForOwnersSection design */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" staggerDelay={0.09}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.id} className="h-full">
                <div
                  id={card.id}
                  className="bg-[#F5F8FF]/70 hover:bg-white border border-[#0F58D5]/15 hover:border-[#17B3CD]/40 py-4 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div
                        className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCardClick(card.route, card.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] pt-2.5 border-t border-slate-200/80 group-hover:border-[#17B3CD]/20 transition-all cursor-pointer text-start w-full"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
};
