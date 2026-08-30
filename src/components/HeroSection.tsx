/**
 * Loryfy Hero Section
 * 55% text / 45% real app screenshot on desktop, text-first on mobile
 * Floating category chips, subtle glow, bilingual copy
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { loryfyConfig } from "../config/loryfyConfig";
import { trackEvent } from "../utils/analytics";
import { getLocalizedImage } from "../utils/imageMap";
import { Download, ArrowRight, ArrowLeft, Building2, Lightbulb, Handshake, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { usePageAnimation } from "./ScrollAnimations";

interface HeroSectionProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  const disableAnimations = shouldReduceMotion || isAlreadyAnimated;

  const handleDownloadClick = () => {
    trackEvent("hero_download_click", { section: "hero_primary_cta" });
    onNavigate("download");
  };

  const handleHowItWorksClick = () => {
    trackEvent("how_it_works_click", { section: "hero_secondary_cta" });
    onNavigate("how-it-works");
  };

  const handleCategoryBadgeClick = (categoryPage: PageRoute) => {
    trackEvent("category_click", { badge_clicked: categoryPage });
    onNavigate(categoryPage);
  };

  const textAnimationProps = disableAnimations
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      };

  const phoneAnimationProps = disableAnimations
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
      };

  const getBadgeAnimationProps = (delay: number) => {
    if (disableAnimations) {
      return {
        initial: false as const,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.32, delay, ease: "easeOut" },
    };
  };

  return (
    <section
      id="hero-section"
      className={`relative overflow-hidden ${
        isRtl ? "pt-6 pb-8 sm:pt-8 lg:py-10" : "pt-6 pb-2 sm:pt-8 sm:pb-2.5 lg:pt-8 lg:pb-2"
      } bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF]`}
    >
      {/* 1. Micro-Dot Pattern Overlay: Subtle masked dot grid layer at 30% opacity */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* 2. Atmospheric Glow Orbs: Primary Blue Top-Left & Energizing Cyan Top-Right */}
      <div className="absolute -top-16 left-0 sm:left-1/4 -translate-x-1/4 sm:-translate-x-1/2 w-[500px] sm:w-[600px] h-[400px] bg-gradient-to-br from-[#0F58D5]/14 via-[#0F58D5]/6 to-transparent blur-xl pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 sm:-right-10 w-[500px] sm:w-[600px] h-[450px] bg-gradient-to-bl from-[#17B3CD]/18 via-[#17B3CD]/8 to-transparent blur-xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[120px] bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Left / Main Text Column (~55% on desktop: 7 cols) */}
          <motion.div
            id="hero-text-column"
            className="lg:col-span-7 space-y-3 sm:space-y-4 text-start pt-2 sm:pt-4 lg:pt-0"
            {...textAnimationProps}
          >
            {/* Subtle discovery pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-[#0F58D5]/20 shadow-2xs text-sm font-bold text-[#0F58D5]">
              <Sparkles className="w-4 h-4 text-[#17B3CD]" />
              <span>{t.hero.secondaryMessage}</span>
            </div>

            {/* Official H1 */}
            <h1
              id="hero-main-h1"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101828] leading-[1.2] tracking-tight"
            >
              <span>{t.hero.h1Prefix}</span>
              <span className="bg-gradient-to-r from-[#0F58D5] to-[#17B3CD] bg-clip-text text-transparent inline-block">
                {t.hero.h1Gradient}
              </span>
            </h1>

            {/* Official Description */}
            <p
              id="hero-main-description"
              className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-2xl"
            >
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id="hero-primary-download-btn"
                onClick={handleDownloadClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-md shadow-[#0F58D5]/25 hover:shadow-lg hover:shadow-[#17B3CD]/30 transition-all cursor-pointer text-sm active:scale-98"
              >
                <Download className="w-4.5 h-4.5" />
                <span>{t.hero.primaryCta}</span>
              </button>

              <button
                id="hero-secondary-how-it-works-btn"
                onClick={handleHowItWorksClick}
                className="flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-semibold text-[#101828] bg-white border border-slate-200 hover:border-[#17B3CD] hover:text-[#17B3CD] hover:bg-slate-50 transition-all cursor-pointer text-sm shadow-2xs"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Key feature highlights */}
            <div className="pt-3 hidden sm:flex flex-wrap items-center gap-y-3 gap-x-7 sm:gap-x-8 lg:gap-x-9 text-xs sm:text-[13.5px] lg:text-sm text-[#475467] font-medium leading-relaxed">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#17B3CD] shrink-0" />
                <span>{t.hero.highlights.item1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#17B3CD] shrink-0" />
                <span>{t.hero.highlights.item2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#17B3CD] shrink-0" />
                <span>{t.hero.highlights.item3}</span>
              </div>
            </div>
          </motion.div>

          {/* Right / Phone Screenshot Column (~45% on desktop: 5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-0 sm:mt-6 lg:mt-0 bg-transparent"
            {...phoneAnimationProps}
          >
            {/* Ambient Device Spotlight Halo - Pure radial glow with no rectangular boundary */}
            <div className="absolute inset-0 max-w-[320px] max-h-[500px] mx-auto my-auto ambient-device-halo blur-2xl rounded-full pointer-events-none bg-transparent" />

            {/* Main Phone visual container */}
            <div className={`relative z-10 w-full max-w-[210px] sm:max-w-[290px] lg:max-w-[310px] flex justify-center py-0 bg-transparent ${isRtl ? 'translate-y-2 sm:translate-y-1 lg:translate-y-0' : '-translate-y-1.5 sm:-translate-y-3 lg:-translate-y-5'}`}>
              <img
                src={getLocalizedImage(loryfyConfig.assets.mobileAppScreen, currentLang)}
                alt="Loryfy Mobile App Screen"
                width={310}
                height={620}
                className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(15,88,213,0.26)] aspect-[310/620] bg-transparent border-0 outline-none select-none"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />

              {/* 1. Running Businesses: Upper-left of the phone */}
              <motion.button
                id="hero-floating-running-businesses"
                onClick={() => handleCategoryBadgeClick("running-businesses-uae")}
                {...getBadgeAnimationProps(0.1)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`absolute ${isRtl ? 'top-[13%] xl:top-[14%] left-[-9px]' : 'top-[6.5%] xl:top-[7%] left-[-5px]'} ${isRtl ? '-translate-x-[48%] xl:-translate-x-[63%] 2xl:-translate-x-[78%]' : '-translate-x-[53%] xl:-translate-x-[73%] 2xl:-translate-x-[85%]'} z-20 hidden xl:flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white/95 rounded-2xl shadow-xs hover:shadow-md border border-slate-200/90 text-xs font-bold text-[#101828] hover:bg-white hover:border-[#17B3CD]/40 transition-all duration-200 cursor-pointer group whitespace-nowrap`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#0F58D5] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                   <Building2 className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-[#101828] font-bold group-hover:text-[#17B3CD] transition-colors text-xs">
                    {t.hero.floatingBadges.runningBusinesses}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium">
                    {currentLang === "en" ? "Explore & Invest" : "اكتشف واستثمر"}
                  </span>
                </div>
              </motion.button>

              {/* 2. Startup Ideas: Upper-right of the phone */}
              <motion.button
                id="hero-floating-startup-ideas"
                onClick={() => handleCategoryBadgeClick("startup-opportunities-uae")}
                {...getBadgeAnimationProps(0.2)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`absolute ${isRtl ? 'top-[14%] xl:top-[15%]' : 'top-[18%] xl:top-[17%]'} right-0 ${isRtl ? 'translate-x-[47%] xl:translate-x-[62%] 2xl:translate-x-[77%]' : 'translate-x-[45%] xl:translate-x-[65%] 2xl:translate-x-[85%]'} z-20 hidden xl:flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white/95 rounded-2xl shadow-xs hover:shadow-md border border-slate-200/90 text-xs font-bold text-[#101828] hover:bg-white hover:border-[#17B3CD]/40 transition-all duration-200 cursor-pointer group whitespace-nowrap`}
                dir="ltr"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#17B3CD] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                   <Lightbulb className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-[#101828] font-bold group-hover:text-[#17B3CD] transition-colors text-xs">
                    {t.hero.floatingBadges.startupIdeas}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium">
                    {currentLang === "en" ? "New Ventures" : "مشاريع ناشئة"}
                  </span>
                </div>
              </motion.button>

              {/* 3. Partnership Opportunities: Left / lower side of the phone */}
              <motion.button
                id="hero-floating-partnership-opportunities"
                onClick={() => handleCategoryBadgeClick("business-partnership-opportunities-uae")}
                {...getBadgeAnimationProps(0.3)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`absolute ${isRtl ? 'top-[66%] xl:top-[68%]' : 'top-[64%] xl:top-[66%]'} left-[-9px] ${isRtl ? '-translate-x-[48%] xl:-translate-x-[63%] 2xl:-translate-x-[78%]' : '-translate-x-[53%] xl:-translate-x-[73%] 2xl:-translate-x-[85%]'} z-20 hidden xl:flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white/95 rounded-2xl shadow-xs hover:shadow-md border border-slate-200/90 text-xs font-bold text-[#101828] hover:bg-white hover:border-[#17B3CD]/40 transition-all duration-200 cursor-pointer group whitespace-nowrap`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#17B3CD] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                  <Handshake className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-[#101828] font-bold group-hover:text-[#17B3CD] transition-colors text-xs">
                    {t.hero.floatingBadges.partnershipOpportunities}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium">
                    {currentLang === "en" ? "Founders & Co-owners" : "شركاء ومؤسسون"}
                  </span>
                </div>
              </motion.button>

              {/* 4. Trade Licenses: Lower-right side of the phone */}
              <motion.button
                id="hero-floating-trade-licenses"
                onClick={() => handleCategoryBadgeClick("trade-license-opportunities-uae")}
                {...getBadgeAnimationProps(0.4)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`absolute ${isRtl ? 'top-[66%] xl:top-[68%]' : 'top-[69%] xl:top-[71%]'} right-0 ${isRtl ? 'translate-x-[47%] xl:translate-x-[62%] 2xl:translate-x-[77%]' : 'translate-x-[45%] xl:translate-x-[65%] 2xl:translate-x-[85%]'} z-20 hidden xl:flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white/95 rounded-2xl shadow-xs hover:shadow-md border border-slate-200/90 text-xs font-bold text-[#101828] hover:bg-white hover:border-[#17B3CD]/40 transition-all duration-200 cursor-pointer group whitespace-nowrap`}
                dir="ltr"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#0F58D5] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-[#101828] font-bold group-hover:text-[#17B3CD] transition-colors text-xs">
                    {t.hero.floatingBadges.tradeLicenses}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium">
                    {currentLang === "en" ? "Ready Transfer" : "جاهزة للتنازل"}
                  </span>
                </div>
              </motion.button>
            </div>

            {/* Clean 2x2 Grid below the Phone on Mobile, Tablet & Mid-screens (< xl) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:hidden mt-3 sm:mt-4 w-full max-w-md px-1">
              {/* 1. Running Businesses */}
              <motion.button
                id="hero-mobile-running-businesses"
                onClick={() => handleCategoryBadgeClick("running-businesses-uae")}
                {...getBadgeAnimationProps(0.1)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs hover:shadow-md hover:bg-white hover:border-[#17B3CD]/40 text-start transition-all duration-200 cursor-pointer group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#0F58D5] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 text-start">
                  <span className="block text-xs font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors truncate">
                    {t.hero.floatingBadges.runningBusinesses}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium truncate">
                    {currentLang === "en" ? "Explore & Invest" : "اكتشف واستثمر"}
                  </span>
                </div>
              </motion.button>

              {/* 2. Startup Ideas */}
              <motion.button
                id="hero-mobile-startup-ideas"
                onClick={() => handleCategoryBadgeClick("startup-opportunities-uae")}
                {...getBadgeAnimationProps(0.2)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs hover:shadow-md hover:bg-white hover:border-[#17B3CD]/40 text-start transition-all duration-200 cursor-pointer group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#17B3CD] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                  <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 text-start">
                  <span className="block text-xs font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors truncate">
                    {t.hero.floatingBadges.startupIdeas}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium truncate">
                    {currentLang === "en" ? "New Ventures" : "مشاريع ناشئة"}
                  </span>
                </div>
              </motion.button>

              {/* 3. Partnership Opportunities */}
              <motion.button
                id="hero-mobile-partnership-opportunities"
                onClick={() => handleCategoryBadgeClick("business-partnership-opportunities-uae")}
                {...getBadgeAnimationProps(0.3)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs hover:shadow-md hover:bg-white hover:border-[#17B3CD]/40 text-start transition-all duration-200 cursor-pointer group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#17B3CD] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                  <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 text-start">
                  <span className="block text-xs font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors truncate">
                    {t.hero.floatingBadges.partnershipOpportunities}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium truncate">
                    {currentLang === "en" ? "Founders & Co-owners" : "شركاء ومؤسسون"}
                  </span>
                </div>
              </motion.button>

              {/* 4. Trade Licenses */}
              <motion.button
                id="hero-mobile-trade-licenses"
                onClick={() => handleCategoryBadgeClick("trade-license-opportunities-uae")}
                {...getBadgeAnimationProps(0.4)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs hover:shadow-md hover:bg-white hover:border-[#17B3CD]/40 text-start transition-all duration-200 cursor-pointer group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#0F58D5] text-white flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform shrink-0">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 text-start">
                  <span className="block text-xs font-bold text-[#101828] group-hover:text-[#17B3CD] transition-colors truncate">
                    {t.hero.floatingBadges.tradeLicenses}
                  </span>
                  <span className="block text-[10px] text-[#475467] font-medium truncate">
                    {currentLang === "en" ? "Ready Transfer" : "جاهزة للتنازل"}
                  </span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
