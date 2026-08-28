/**
 * Loryfy Dedicated SEO / Landing Page Template (Sections 50-56)
 * Renders high-quality, product-oriented landing pages for search and AI discovery.
 */

import React, { useMemo, useState, useRef, useEffect } from "react";
import { Language, PageRoute, SeoPageData } from "../types";
import { seoPagesData } from "../data/seoPagesData";
import { storiesData, storySlugs } from "../data/storiesData";
import { trackEvent } from "../utils/analytics";
import { translations } from "../data/translations";
import { HowItWorksInteractive } from "./HowItWorksInteractive";
import { FaqSection, FaqItemData } from "./FaqSection";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  ChevronRight,
  BookOpen,
  Sparkles,
  ChevronDown,
  Building2,
  Lightbulb,
  FileText,
  UserPlus,
  Users,
} from "lucide-react";
import { FadeInUp } from "./ScrollAnimations";
import { CreateAdCarousel } from "./CreateAdCarousel";

interface SeoPageTemplateProps {
  currentLang: Language;
  slug: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const SeoPageTemplate: React.FC<SeoPageTemplateProps> = ({
  currentLang,
  slug,
  onNavigate,
}) => {
  const pageData: SeoPageData | undefined =
    seoPagesData[currentLang]?.[slug] || storiesData[currentLang]?.[slug];
  const isStory = storySlugs.includes(slug) || !!storiesData[currentLang]?.[slug];
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronBreadcrumb = isRtl ? ArrowLeft : ChevronRight;

  const combinedFaqs: FaqItemData[] = useMemo(() => {
    if (!pageData) return [];
    const sectionFaqs: FaqItemData[] = pageData.sections.map((sec, idx) => ({
      id: `sec-${idx}`,
      question: sec.heading,
      answer: sec.content,
      bulletPoints: sec.bulletPoints,
      highlightBox: sec.highlightBox,
    }));
    const standardFaqs: FaqItemData[] = pageData.faqItems.map((faq, idx) => ({
      id: `faq-${idx}`,
      question: faq.question,
      answer: faq.answer,
    }));
    return [...sectionFaqs, ...standardFaqs];
  }, [pageData]);

  const relevantStories = useMemo(() => {
    if (isStory) return [];
    return storySlugs
      .map((sSlug) => {
        const d = storiesData[currentLang]?.[sSlug] || storiesData.en[sSlug];
        return { slug: sSlug, title: d?.h1 || sSlug, subtitle: d?.subtitle || d?.intro || "" };
      })
      .filter((item) => {
        if (slug.includes("running") || slug.includes("business-for-sale") || slug.includes("acquire")) {
          return item.slug.includes("running") || item.slug.includes("acquire") || item.slug.includes("exit");
        }
        if (slug.includes("startup") || slug.includes("idea")) {
          return item.slug.includes("startup") || item.slug.includes("cofounder");
        }
        if (slug.includes("license")) {
          return item.slug.includes("license");
        }
        return item.slug.includes("partner") || item.slug.includes("investor") || item.slug.includes("savings");
      })
      .slice(0, 3);
  }, [slug, isStory, currentLang]);

  const isOwnersGroup = [
    "list-running-business",
    "post-startup-idea",
    "list-trade-license",
    "find-business-partner-uae",
    "free-business-listing-uae",
  ].includes(slug);

  if (!pageData) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-[#101828]">Page not found</h2>
        <button
          onClick={() => onNavigate("home")}
          className="mt-4 px-6 py-2 bg-[#0F58D5] text-white rounded-lg font-semibold"
        >
          Return Home
        </button>
      </div>
    );
  }

  const handleDownloadClick = () => {
    trackEvent("seo_page_download_click", { page_slug: slug });
    onNavigate("download");
  };

  return (
    <article id={`seo-page-${slug}`} className="bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF] min-h-screen pt-2.5 pb-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap text-xs sm:text-sm text-[#475467] items-center gap-2">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#0F58D5] transition-colors cursor-pointer"
          >
            {t.footer.home}
          </button>
          <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-300 shrink-0 rtl:rotate-180" />
          {isStory ? (
            <button
              onClick={() => onNavigate("stories", slug)}
              className="hover:text-[#0F58D5] hover:underline transition-colors cursor-pointer font-medium"
            >
              {currentLang === "en" ? "Stories" : "نماذج"}
            </button>
          ) : (
            <button
              id="breadcrumb-category-hub-btn"
              type="button"
              onClick={() => {
                const targetHub = isOwnersGroup ? "for-owners" : "discover";
                onNavigate(targetHub as PageRoute);
              }}
              className="hover:text-[#0F58D5] hover:underline transition-colors cursor-pointer font-medium"
            >
              {isOwnersGroup ? t.nav.forOwners : t.nav.discover}
            </button>
          )}
          <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-300 shrink-0 rtl:rotate-180" />
          <span className="font-semibold text-[#101828] truncate">{pageData.h1}</span>
        </nav>

        {/* Hero Section of Landing Page */}
        <FadeInUp>
          <header className="bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/60 p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#0F58D5]/15 shadow-sm relative overflow-hidden">
            {/* Subtle dot overlay */}
            <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#17B3CD]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#0F58D5]/10 rounded-full blur-2xl pointer-events-none" />

            <div className={`relative z-10 ${isStory ? "max-w-4xl" : "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"}`}>
              {/* Text Column */}
              <div className={`${isStory ? "space-y-4 sm:space-y-6 text-start" : "lg:col-span-7 space-y-4 sm:space-y-6 text-start"}`}>
                <h1
                  id="seo-page-h1"
                  className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight"
                >
                  {pageData.h1}
                </h1>

                <h2 className="text-lg sm:text-xl font-bold text-[#0F58D5] mt-3 leading-snug">
                  {pageData.subtitle}
                </h2>

                <p className="text-sm sm:text-base text-[#475467] leading-relaxed mt-4 max-w-3xl">
                  {pageData.intro}
                </p>

                <div className="pt-2 sm:pt-4">
                  <button
                    onClick={handleDownloadClick}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-md shadow-[#0F58D5]/20 hover:shadow-lg hover:shadow-[#17B3CD]/30 transition-all cursor-pointer text-sm sm:text-base active:scale-98"
                  >
                    <Download className="w-5 h-5" />
                    <span>{pageData.ctaText}</span>
                  </button>
                </div>
              </div>

              {/* Scrolling App Screens Carousel Column (Only for Category/Landing pages, hidden for Stories) */}
              {!isStory && (
                <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
                  <CreateAdCarousel currentLang={currentLang} pageSlug={slug} />
                </div>
              )}
            </div>
          </header>
        </FadeInUp>

        {/* Duplicate "From discovery to conversation" section for relevant landing pages */}
        {(slug === "find-partners-investors" || slug === "find-business-partner-uae") && (
          <FadeInUp className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs my-6">
            <HowItWorksInteractive
              currentLang={currentLang}
              onNavigate={onNavigate}
              hideSeekersTab={slug === "find-partners-investors"}
              hideOwnersTab={slug === "find-business-partner-uae"}
              customHeading={
                slug === "find-partners-investors"
                  ? (currentLang === "en"
                      ? "How to Find Partners & Investors"
                      : "كيف تجد شركاء ومستثمرين لمشروعك")
                  : (currentLang === "en"
                      ? "How to Find Business Partnership Opportunities in UAE"
                      : "كيف تجد فرص الشراكة التجارية في الإمارات")
              }
              customSubheading={
                slug === "find-partners-investors"
                  ? (currentLang === "en"
                      ? "A simple step-by-step pathway to list your running business, startup idea, or trade license and connect with potential partners and investors."
                      : "خطوات بسيطة وواضحة لعرض مشروعك القائم أو فكرتك الناشئة أو رخصتك التجارية والتواصل مع الشركاء والمستثمرين المحتملين.")
                  : (currentLang === "en"
                      ? "A step-by-step pathway to explore running businesses, startup ideas, and trade licenses seeking partners or investors across Dubai, Abu Dhabi, and the UAE."
                      : "خطوات بسيطة لاستكشاف المشاريع القائمة وأفكار المشاريع والرخص التجارية التي تبحث عن شركاء أو مستثمرين في دبي وأبوظبي وكافة إمارات الدولة.")
              }
            />
          </FadeInUp>
        )}

        {/* Relevant Stories Content By Default for Category Pages */}
        {!isStory && relevantStories.length > 0 && (
          <FadeInUp className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0F58D5]" />
                <h3 className="text-lg sm:text-xl font-extrabold text-[#101828]">
                  {currentLang === "en" ? "Relevant Real-World Business Stories" : "قصص وتجارب واقعية ذات صلة"}
                </h3>
              </div>
              <button
                onClick={() => onNavigate("stories")}
                className="text-xs sm:text-sm font-bold text-[#0F58D5] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{currentLang === "en" ? "View all stories" : "عرض كل القصص"}</span>
                <ArrowIcon className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantStories.map((story) => (
                <div
                  key={story.slug}
                  onClick={() => onNavigate("story-detail", story.slug)}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#17B3CD]/50 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0F58D5]/10 text-[11px] font-bold text-[#0F58D5]">
                      <Sparkles className="w-3 h-3 text-[#17B3CD]" />
                      <span>{currentLang === "en" ? "Story" : "قصة"}</span>
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#101828] group-hover:text-[#0F58D5] transition-colors leading-snug">
                      {story.title}
                    </h4>
                    <p className="text-xs text-[#475467] line-clamp-2 leading-relaxed">
                      {story.subtitle}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F58D5]">
                    <span>{currentLang === "en" ? "Read story" : "اقرأ القصة"}</span>
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        )}

        {/* Unified Frequently Asked Questions Accordion */}
        <main className="space-y-8">
          <FaqSection
            currentLang={currentLang}
            customFaqs={combinedFaqs}
            title={currentLang === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة حول هذا الموضوع"}
            className="py-4 relative overflow-hidden"
          />

          {/* Bottom Conversion Banner */}
          <FadeInUp>
            <section className="bg-gradient-to-r from-[#0F58D5] to-[#17B3CD] rounded-3xl p-8 sm:p-10 text-white text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {currentLang === "en"
                  ? "Start Connecting on Loryfy Today"
                  : "ابدأ بناء شراكاتك عبر لوريفاي اليوم"}
              </h3>
              <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
                {currentLang === "en"
                  ? "Discover running businesses, startup ideas, and verified partners across the UAE."
                  : "استكشف مشاريع قائمة وأفكار ناشئة وتواصل مع شركاء ومستثمرين في الإمارات."}
              </p>
              <div className="pt-2">
                <button
                  onClick={handleDownloadClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#0F58D5] hover:bg-[#128ca2] transition-all shadow-md shadow-[#0F58D5]/20 hover:shadow-lg hover:shadow-[#17B3CD]/30 cursor-pointer active:scale-98"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.nav.downloadApp}</span>
                </button>
              </div>
            </section>
          </FadeInUp>

        </main>
      </div>
    </article>
  );
};
