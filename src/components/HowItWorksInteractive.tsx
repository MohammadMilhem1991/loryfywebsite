/**
 * Loryfy How It Works Interactive Section (Section 22-28)
 * Detailed breakdown for Business/Idea/License Owners and Opportunity Seekers.
 */

import React, { useState } from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { Building2, Lightbulb, FileText, Search, PlusCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCardBox } from "./ScrollAnimations";
import { motion } from "motion/react";

interface HowItWorksInteractiveProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
  hideSeekersTab?: boolean;
  hideOwnersTab?: boolean;
  customHeading?: string;
  customSubheading?: string;
  isWebView?: boolean;
}

export const HowItWorksInteractive: React.FC<HowItWorksInteractiveProps> = ({
  currentLang,
  onNavigate,
  hideSeekersTab = false,
  hideOwnersTab = false,
  customHeading,
  customSubheading,
  isWebView = false,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<"owners" | "seekers">(
    hideOwnersTab ? "seekers" : "owners"
  );
  const [ownerSubCategory, setOwnerSubCategory] = useState<"running" | "startup" | "license">("running");
  const [runningObjective, setRunningObjective] = useState<"partner" | "sell">("partner");

  return (
    <section
      id="how-it-works-section"
      className={
        isWebView
          ? "py-2 bg-white relative overflow-hidden"
          : "py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F6FAFF] to-[#FFFFFF] relative overflow-hidden"
      }
    >
      {/* Background ambient lighting - only visible in normal web view */}
      {!isWebView && (
        <>
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#0F58D5]/5 blur-xl pointer-events-none rounded-full" />
          <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#17B3CD]/5 blur-xl pointer-events-none rounded-full" />
          <div className="absolute inset-0 bg-dot-pattern-light opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
        </>
      )}

      <div className={isWebView ? "relative max-w-7xl mx-auto px-1" : "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        
        {/* Section Header */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight"
          >
            {customHeading || t.howItWorks.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475467] leading-relaxed max-w-2xl mx-auto">
            {customSubheading || t.howItWorks.subheading}
          </p>
        </FadeInUp>

        {/* Primary Role Switcher (Owners vs Seekers) - Hidden when hideSeekersTab or hideOwnersTab is true */}
        {!hideSeekersTab && !hideOwnersTab && (
          <div className="flex justify-center mb-6">
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveTab("owners");
                  trackEvent("how_it_works_click", { role_tab: "owners" });
                }}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  activeTab === "owners"
                    ? "bg-[#0F58D5] text-white shadow-xs"
                    : "text-[#475467] hover:text-[#17B3CD]"
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                <span>{t.howItWorks.ownersFlowTitle}</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("seekers");
                  trackEvent("how_it_works_click", { role_tab: "seekers" });
                }}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  activeTab === "seekers"
                    ? "bg-[#0F58D5] text-white shadow-xs"
                    : "text-[#475467] hover:text-[#17B3CD]"
                }`}
              >
                <Search className="w-4 h-4" />
                <span>{t.userJourneys.journeyB.title}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 1: For Owners */}
        {activeTab === "owners" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            {/* Category selection pill tabs */}
            <div className="flex flex-wrap gap-3 mb-6 pb-5 border-b border-slate-100">
              <button
                onClick={() => setOwnerSubCategory("running")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer shadow-3xs ${
                  ownerSubCategory === "running"
                    ? "bg-[#0F58D5]/15 text-[#0F58D5] border border-[#0F58D5]/25"
                    : "bg-slate-50 text-[#475467] hover:bg-[#17B3CD]/5 hover:text-[#17B3CD] hover:border-[#17B3CD]/20 border border-transparent"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>
                  {currentLang === "en" ? "Running Business in the UAE" : "مشروع قائم في الإمارات"}
                </span>
              </button>

              <button
                onClick={() => setOwnerSubCategory("startup")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer shadow-3xs ${
                  ownerSubCategory === "startup"
                    ? "bg-[#17B3CD]/15 text-[#0F58D5] border border-[#17B3CD]/35"
                    : "bg-slate-50 text-[#475467] hover:bg-[#17B3CD]/5 hover:text-[#17B3CD] hover:border-[#17B3CD]/20 border border-transparent"
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>
                  {currentLang === "en" ? "Startup Idea for the UAE" : "فكرة مشروع للإمارات"}
                </span>
              </button>

              <button
                onClick={() => setOwnerSubCategory("license")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer shadow-3xs ${
                  ownerSubCategory === "license"
                    ? "bg-[#0F58D5]/15 text-[#0F58D5] border border-[#0F58D5]/25"
                    : "bg-slate-50 text-[#475467] hover:bg-[#17B3CD]/5 hover:text-[#17B3CD] hover:border-[#17B3CD]/20 border border-transparent"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>
                  {currentLang === "en" ? "UAE Trade License" : "رخصة تجارية إماراتية"}
                </span>
              </button>
            </div>

            {/* SubCategory 1: Running Business (Partner vs Sell) */}
            {ownerSubCategory === "running" && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                      {t.howItWorks.runningBusinessHeading}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475467] mt-1">
                      {currentLang === "en"
                        ? "Choose your listing goal and specify relevant operational details."
                        : "حدد هدفك من الإعلان وأدخل التفاصيل التشغيلية للمشروع."}
                    </p>
                  </div>

                  {/* Objective toggle: Partner vs Sell */}
                  <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                    <button
                      onClick={() => setRunningObjective("partner")}
                      className={`px-4.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        runningObjective === "partner"
                          ? "bg-white text-[#0F58D5] shadow-2xs"
                          : "text-[#475467] hover:text-[#17B3CD]"
                      }`}
                    >
                      {currentLang === "en" ? "Potential Partner or Investor" : "شريك أو مستثمر محتمل"}
                    </button>
                    <button
                      onClick={() => setRunningObjective("sell")}
                      className={`px-4.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        runningObjective === "sell"
                          ? "bg-white text-[#0F58D5] shadow-2xs"
                          : "text-[#475467] hover:text-[#17B3CD]"
                      }`}
                    >
                      {currentLang === "en" ? "Sell Business" : "بيع المشروع"}
                    </button>
                  </div>
                </div>

                {/* Steps Visual Grid */}
                <StaggerContainer
                  key={`running-${runningObjective}`}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                  staggerDelay={0.15}
                >
                  {/* Step 1 */}
                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={0}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          1
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {t.howItWorks.runningBusinessStep1}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Select the Running Business category to indicate your company is already operational."
                          : "اختر فئة مشروع قائم لتوضيح أن مشروعك يعمل ونشط حاليًا."}
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Step 2 */}
                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={1}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          2
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {runningObjective === "partner"
                            ? (currentLang === "en" ? "Objective: Find Partner(s) / Investor(s)" : "الهدف: البحث عن شريك / مستثمر")
                            : (currentLang === "en" ? "Objective: Sell Business" : "الهدف: بيع المشروع")}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {runningObjective === "partner"
                          ? (currentLang === "en"
                              ? "Specify how many partners or investors you need, the partnership type, and key business details."
                              : "حدد عدد الشركاء أو المستثمرين المطلوبين، ونوع الشراكة، وأهم معلومات مشروعك.")
                          : t.howItWorks.runningBusinessSellOption}
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Step 3 */}
                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#17B3CD]/40 transition-all shadow-2xs" type="tumble" index={2}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#17B3CD] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          3
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "Publish & Connect" : "انشر وابدأ التواصل"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Your listing becomes discoverable immediately. Interested partners can chat directly with you."
                          : "يظهر إعلانك فورًا للباحثين عن الفرص لبدء المحادثة والتواصل معك."}
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            )}

            {/* SubCategory 2: Startup Idea */}
            {ownerSubCategory === "startup" && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                    {t.howItWorks.startupIdeaHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mt-1">
                    {t.howItWorks.startupIdeaFlow}
                  </p>
                </div>

                <StaggerContainer
                  key="startup-grid"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2"
                  staggerDelay={0.15}
                >
                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={0}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          1
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "Describe Concept" : "صِف فكرة مشروعك"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Outline the problem, target audience, and business model."
                          : "وضّح المشكلة والجمهور المستهدف ونموذج العمل."}
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={1}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          2
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "Specify Partner Requirements" : "حدد متطلبات الشراكة"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Indicate whether you need funding, strategic guidance, or operating execution."
                          : "حدد إن كنت تبحث عن تمويل، توجيه استراتيجي، أو إدارة تنفيذية."}
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#17B3CD]/40 transition-all shadow-2xs" type="tumble" index={2}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#17B3CD] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          3
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "Publish to Investors" : "انشر للمستثمرين"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Connect with co-founders and early-stage supporters."
                          : "تواصل مع مؤسسين مشاركين ومستثمرين في مراحل التأسيس الأولى."}
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            )}

            {/* SubCategory 3: Trade License */}
            {ownerSubCategory === "license" && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                    {t.howItWorks.tradeLicenseHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mt-1">
                    {t.howItWorks.tradeLicenseFlow}
                  </p>
                </div>

                <StaggerContainer
                  key="license-grid"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2"
                  staggerDelay={0.15}
                >
                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={0}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          1
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "License Details" : "تفاصيل الرخصة"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Specify jurisdiction (Mainland/Free Zone), approved activities, and status."
                          : "حدد الجهة (Mainland / Free Zone) والأنشطة التجارية وحالة الرخصة."}
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={1}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          2
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "Visas & Premises" : "التأشيرات والمقر"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Indicate available visa quota, office or premises status, tenancy or premises details, and asking price."
                          : "حدد عدد التأشيرات المتاحة، وحالة المكتب أو المقر، وتفاصيل الإيجار أو المقر، والسعر المطلوب."}
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#17B3CD]/40 transition-all shadow-2xs" type="tumble" index={2}>
                    <div>
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#17B3CD] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                          3
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                          {currentLang === "en" ? "Connect with Buyers" : "تواصل مع المشترين"}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {currentLang === "en"
                          ? "Receive inquiries and chat directly with interested buyers."
                          : "استقبل الاستفسارات وابدأ المحادثة المباشرة مع المشترين الجادين."}
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: For Opportunity Seekers (Section 28) */}
        {activeTab === "seekers" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101828] mb-1">
                {t.howItWorks.seekersHeading}
              </h3>
              <p className="text-xs sm:text-sm text-[#475467] max-w-3xl leading-relaxed">
                {t.howItWorks.seekersDescription}
              </p>
            </div>

            {/* 4 Step Process Grid */}
            <StaggerContainer
              key="seekers-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              staggerDelay={0.15}
            >
              <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={0}>
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                      1
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                      {currentLang === "en" ? "Explore Categories" : "استكشف الفئات"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {currentLang === "en"
                      ? "Browse running businesses, startup ideas, and trade licenses across the UAE."
                      : "تصفح المشاريع القائمة، أفكار المشاريع، والرخص التجارية في الإمارات."}
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={1}>
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                      2
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                      {currentLang === "en" ? "Filter by Interests" : "صفِّ حسب اهتماماتك"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {currentLang === "en"
                      ? "Filter by partnership type (Funding, Strategic, Operating) or purchase options."
                      : "فلترة دقيقة حسب نوع الشراكة المطلوبة أو خيارات الشراء والتملك."}
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#0F58D5]/30 transition-all shadow-2xs" type="tumble" index={2}>
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0F58D5] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                      3
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                      {currentLang === "en" ? "Open Listing Details" : "افتح تفاصيل الإعلان"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {currentLang === "en"
                      ? "Review operational status, terms, requirements, and owner notes."
                      : "استعرض وضع المشروع والمتطلبات والشروط والبيانات المقدمة من المالك."}
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="p-5 rounded-xl bg-[#F5F8FF] border border-slate-100 flex flex-col justify-between h-full hover:border-[#17B3CD]/40 transition-all shadow-2xs" type="tumble" index={3}>
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#17B3CD] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                      4
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-[#101828]">
                      {currentLang === "en" ? "Chat Directly" : "تواصل بمحادثة مباشرة"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {currentLang === "en"
                      ? "Initiate a direct chat with the owner to discuss details, terms, and next steps."
                      : "ابدأ محادثة مباشرة مع المالك لمناقشة التفاصيل والشروط والخطوات التالية."}
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        )}

      </div>
    </section>
  );
};
