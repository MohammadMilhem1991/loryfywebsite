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
  ShieldCheck,
  CheckCircle2,
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
          iconColor: "bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20",
          tag: currentLang === "en" ? "Operational Business" : "مشروع قائم",
          tagColor: "bg-blue-50 text-[#0F58D5] border-blue-100",
          title: currentLang === "en" ? "List a Running Business" : "اعرض مشروعًا قائمًا",
          subtitle:
            currentLang === "en"
              ? "For established companies, cafes, clinics, retail shops, or service firms"
              : "للشركات والمطاعم والمتاجر والعيادات والمؤسسات القائمة",
          desc:
            currentLang === "en"
              ? "Find financial or active operating partners to expand your business, raise growth capital, or offer your running business for sale to serious buyers."
              : "ابحث عن شركاء ماليين أو تشغيليين لتوسيع مشروعك القائم، أو اجذب رأس مال للتوسع، أو اعرض مشروعك للبيع لمستثمرين ومشترين جادين.",
          ctaText: currentLang === "en" ? "Explore & List Business" : "عرض وإضافة مشروع قائم",
          highlights:
            currentLang === "en"
              ? ["Direct In-App Communication", "Verified UAE Reach", "Confidential Details Option"]
              : ["محادثة مباشرة وفورية", "وصول واسع في الإمارات", "خيارات خصوصية متقدمة"],
        },
        {
          id: "card-post-startup-idea",
          route: "post-startup-idea" as PageRoute,
          icon: Lightbulb,
          iconColor: "bg-[#17B3CD]/15 text-[#17B3CD] border border-[#17B3CD]/30",
          tag: currentLang === "en" ? "New Venture" : "فكرة ناشئة",
          tagColor: "bg-cyan-50 text-[#128ca2] border-cyan-100",
          title: currentLang === "en" ? "List Your Business Idea" : "اعرض فكرة مشروعك",
          subtitle:
            currentLang === "en"
              ? "For founders, inventors, innovators, and early-stage concepts"
              : "للمؤسسين والمبتكرين وأصحاب الأفكار والمشاريع في بدايتها",
          desc:
            currentLang === "en"
              ? "Share your business blueprint or startup idea and connect with technical co-founders, angel investors, or experienced business operators ready to partner."
              : "اعرض فكرة مشروعك ومخطط العمل وتواصل مع شركاء مؤسسين تقنيين، مستثمرين ملائكيين، أو خبراء تشغيليين مستعدين للشراكة.",
          ctaText: currentLang === "en" ? "Explore & Post Idea" : "عرض وإضافة فكرة مشروع",
          highlights:
            currentLang === "en"
              ? ["Find Co-Founders & Talent", "Connect with Seed Capital", "Structured Concept Pitch"]
              : ["ابحث عن مؤسس مشارك", "تواصل مع مستثمرين مبكرين", "عرض منظم لفكرتك"],
        },
        {
          id: "card-list-trade-license",
          route: "list-trade-license" as PageRoute,
          icon: FileText,
          iconColor: "bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20",
          tag: currentLang === "en" ? "Commercial Asset" : "رخصة تجارية",
          tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
          title: currentLang === "en" ? "List a Trade License" : "اعرض رخصة تجارية",
          subtitle:
            currentLang === "en"
              ? "For existing mainland, free zone, or offshore commercial licenses"
              : "للرخص التجارية داخل الدولة أو في المناطق الحرة المعروضة للتنازل",
          desc:
            currentLang === "en"
              ? "Offer your active commercial trade license for transfer or sale. Connect directly with entrepreneurs and companies looking for ready licenses with established activities."
              : "اعرض رخصتك التجارية الجاهزة للبيع أو التنازل، وتواصل مباشرة مع رواد الأعمال والشركات الراغبة في بدء النشاط فوراً دون انتظار تأسيس جديد.",
          ctaText: currentLang === "en" ? "Explore & List License" : "عرض وإضافة رخصة تجارية",
          highlights:
            currentLang === "en"
              ? ["Fast Transfer Opportunity", "Mainland & Free Zones", "Save Licensing Setup Time"]
              : ["فرصة تنازل سريعة", "تراخيص محلية وحرة", "توفير وقت وتكاليف التأسيس"],
        },
        {
          id: "card-find-business-partner",
          route: "find-business-partner-uae" as PageRoute,
          icon: UserPlus,
          iconColor: "bg-[#0F58D5] text-white border border-[#0F58D5]",
          tag: currentLang === "en" ? "Partnership Hub" : "مركز الشراكات",
          tagColor: "bg-blue-100 text-[#0F58D5] border-blue-200",
          title: currentLang === "en" ? "Find Business Partner in UAE" : "ابحث عن شريك تجاري في الإمارات",
          subtitle:
            currentLang === "en"
              ? "Comprehensive directory to find strategic, operating, and investing partners"
              : "دليل شامل للبحث عن شركاء استراتيجيين وتشغيليين وممولين",
          desc:
            currentLang === "en"
              ? "Discover active partnership opportunities across all Emirates. Connect with serious individuals and business entities looking to collaborate, co-invest, or buy/sell businesses."
              : "اكتشف فرص الشراكة النشطة في جميع إمارات الدولة، وتواصل مع أفراد وجهات جادة تبحث عن التعاون أو الاستثمار المشترك أو شراء وبيع المشاريع.",
          ctaText: currentLang === "en" ? "Explore All Partners" : "استكشف كافة الشركاء",
          highlights:
            currentLang === "en"
              ? ["UAE-Wide Network", "All Business Sectors", "Direct Verified Matchmaking"]
              : ["شبكة على مستوى الإمارات", "مختلف القطاعات التجارية", "تواصل مباشر وموثوق"],
        },
      ]
    : [
        {
          id: "card-running-businesses",
          route: "running-businesses-uae" as PageRoute,
          icon: Building2,
          iconColor: "bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20",
          tag: currentLang === "en" ? "Operational" : "قائم ونشط",
          tagColor: "bg-blue-50 text-[#0F58D5] border-blue-100",
          title: currentLang === "en" ? "Explore Running Businesses" : "استكشف المشاريع القائمة",
          subtitle:
            currentLang === "en"
              ? "Operating businesses seeking equity partners, silent investors, or buyers"
              : "مشاريع قائمة وناجحة تبحث عن شركاء حصص أو مستثمرين صامتين أو مشترين",
          desc:
            currentLang === "en"
              ? "Discover profitable restaurants, retail stores, tech companies, service agencies, and industrial facilities in the UAE seeking strategic capital or active partners."
              : "استكشف مطاعم ومتاجر وشركات تقنية وخدمية وصناعية في الإمارات تبحث عن رأس مال استراتيجي أو شريك تشغيلي.",
          ctaText: currentLang === "en" ? "View Running Businesses" : "تصفح المشاريع القائمة",
          highlights:
            currentLang === "en"
              ? ["Historical Performance Data", "Existing Customer Base", "Immediate Cashflow Potential"]
              : ["سجل تشغيلي وبيانات قائمة", "قاعدة عملاء حالية", "إمكانية تدفق نقدي فوري"],
        },
        {
          id: "card-startup-opportunities",
          route: "startup-opportunities-uae" as PageRoute,
          icon: Lightbulb,
          iconColor: "bg-[#17B3CD]/15 text-[#17B3CD] border border-[#17B3CD]/30",
          tag: currentLang === "en" ? "Early Stage" : "مرحلة الفكرة",
          tagColor: "bg-cyan-50 text-[#128ca2] border-cyan-100",
          title: currentLang === "en" ? "Explore Startup Ideas" : "استكشف أفكار المشاريع",
          subtitle:
            currentLang === "en"
              ? "High-potential startups and innovative business blueprints"
              : "مشاريع واعدة وأفكار مبتكرة جاهزة للإطلاق والشراكة",
          desc:
            currentLang === "en"
              ? "Explore new ventures in fintech, e-commerce, AI, healthtech, and services seeking seed capital, technical leadership, or industry mentors in the UAE."
              : "استكشف مشاريع جديدة في التقنية المالية والتجارة الإلكترونية والذكاء الاصطناعي والخدمات تبحث عن تمويل أولي أو شركاء تقنيين أو خبراء قطاع.",
          ctaText: currentLang === "en" ? "View Startup Ideas" : "تصفح أفكار المشاريع",
          highlights:
            currentLang === "en"
              ? ["High Growth Potential", "Ground-Floor Entry", "Co-Founder Equity Terms"]
              : ["فرص نمو متسارعة", "دخول في المراحل التأسيسية", "حصص مؤسسين وشراكات"],
        },
        {
          id: "card-trade-license-opportunities",
          route: "trade-license-opportunities-uae" as PageRoute,
          icon: FileText,
          iconColor: "bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20",
          tag: currentLang === "en" ? "Commercial" : "تراخيص تجارية",
          tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
          title: currentLang === "en" ? "Explore Trade Licenses" : "استكشف الرخص التجارية",
          subtitle:
            currentLang === "en"
              ? "Available commercial licenses ready for immediate takeover"
              : "رخص تجارية جاهزة للتنازل وبدء العمل الفوري",
          desc:
            currentLang === "en"
              ? "Browse verified trade licenses across Dubai, Abu Dhabi, Sharjah, and other Emirates with active bank accounts, existing quotas, or specific commercial activities."
              : "تصفح رخص تجارية موثقة في دبي وأبوظبي والشارقة وبقية الإمارات مع حسابات بنكية جاهزة أو أنشطة تجارية متخصصة.",
          ctaText: currentLang === "en" ? "View Trade Licenses" : "تصفح الرخص التجارية",
          highlights:
            currentLang === "en"
              ? ["Save Setup Waiting Times", "Established Quotas & History", "Ready For Immediate Trading"]
              : ["توفير فترات الانتظار والتأسيس", "سجل واعتمادات قائمة", "جاهزية فورية لممارسة النشاط"],
        },
        {
          id: "card-find-partners-investors",
          route: "find-partners-investors" as PageRoute,
          icon: Users,
          iconColor: "bg-[#0F58D5] text-white border border-[#0F58D5]",
          tag: currentLang === "en" ? "Investor Network" : "شبكة المستثمرين",
          tagColor: "bg-blue-100 text-[#0F58D5] border-blue-200",
          title: currentLang === "en" ? "Find Partners & Investors" : "ابحث عن شركاء ومستثمرين",
          subtitle:
            currentLang === "en"
              ? "Match with angel investors, silent partners, and capital funds"
              : "توافق مع مستثمرين ملائكيين وشركاء ماليين وصناديق استثمارية",
          desc:
            currentLang === "en"
              ? "Connect with professionals, retirees, funds, and individual investors seeking high-yield business partnerships, equity stakes, or passive business investments."
              : "تواصل مع أصحاب رؤوس الأموال والمهنيين والمستثمرين الأفراد الباحثين عن فرص استثمارية وشراكات تجارية ذات عوائد مجزية.",
          ctaText: currentLang === "en" ? "View Investor Opportunities" : "تصفح فرص المستثمرين",
          highlights:
            currentLang === "en"
              ? ["Funding & Silent Partnering", "Strategic Advisory Support", "Custom Investment Tickets"]
              : ["تمويل وشراكة صامتة", "استشارات ودعم استراتيجي", "خيارات استثمارية مرنة"],
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
      className="bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF] min-h-screen pt-4 pb-16 sm:py-16"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
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

        {/* Hero Banner */}
        <FadeInUp>
          <div className="bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/70 p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#0F58D5]/15 shadow-2xs text-start space-y-4 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#17B3CD]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#0F58D5]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                {isOwners
                  ? currentLang === "en"
                    ? "Owners & Founders Portal"
                    : "بوابة أصحاب المشاريع والأفكار"
                  : currentLang === "en"
                  ? "Opportunities & Discovery Portal"
                  : "بوابة استكشاف الفرص والاستثمار"}
              </span>

              <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
                {isOwners
                  ? currentLang === "en"
                    ? "For Owners & Founders in the UAE"
                    : "لأصحاب المشاريع والشركات الناشئة في الإمارات"
                  : currentLang === "en"
                  ? "Discover Business & Investment Opportunities in the UAE"
                  : "استكشف فرص الأعمال والشراكات والاستثمار في الإمارات"}
              </h1>

              <p className="text-sm sm:text-base text-[#475467] leading-relaxed pt-1 max-w-3xl">
                {isOwners
                  ? currentLang === "en"
                    ? "Whether you operate a running business, have a new venture blueprint, hold a trade license, or look for strategic co-founders, choose your objective below to find the ideal partner or buyer."
                    : "سواء كنت تدير مشروعاً قائماً، أو تملك فكرة مشروع ناشئ، أو ترغب في التنازل عن رخصة تجارية، أو تبحث عن شريك استراتيجي، اختر وجهتك أدناه للوصول إلى الشريك أو المشتري المناسب."
                  : currentLang === "en"
                  ? "Explore vetted running businesses, early-stage startups, ready trade licenses, and private equity / partnership opportunities structured across Dubai, Abu Dhabi, and all UAE Emirates."
                  : "استكشف مشاريع قائمة، وشركات ناشئة، ورخص تجارية، وفرص شراكة وتمويل في دبي وأبوظبي وكافة إمارات الدولة."}
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* 4 Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.id} index={idx} className="h-full">
                <div
                  id={card.id}
                  onClick={() => handleCardClick(card.route, card.title)}
                  className="bg-white hover:bg-[#F5F8FF]/30 border border-slate-200/90 hover:border-[#0F58D5]/40 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Header Row: Icon + Tag */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${card.iconColor}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${card.tagColor}`}
                      >
                        {card.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#101828] group-hover:text-[#0F58D5] transition-colors">
                        {card.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-[#0F58D5] mt-1">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#475467] leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Feature Highlights */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {card.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#17B3CD] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 mt-4 border-t border-slate-100/90 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#0F58D5] group-hover:text-[#17B3CD] transition-colors flex items-center gap-2">
                      <span>{card.ctaText}</span>
                      <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5" />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0F58D5]/8 text-[#0F58D5] flex items-center justify-center group-hover:bg-[#0F58D5] group-hover:text-white transition-all">
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
};
