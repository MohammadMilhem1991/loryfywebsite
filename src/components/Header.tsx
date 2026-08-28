/**
 * Loryfy Main Header & Navigation
 * Responsive, Sticky, Bilingual with RTL support and dual-side marketplace menus (Discover & For Owners)
 */

import React, { useState, useEffect, useRef } from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { loryfyConfig } from "../config/loryfyConfig";
import { trackEvent } from "../utils/analytics";
import {
  Globe,
  Home,
  HelpCircle,
  PhoneCall,
  Menu,
  X,
  Download,
  ChevronDown,
  Building2,
  Lightbulb,
  FileText,
  Users,
  UserPlus,
} from "lucide-react";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoverDropdownOpen, setDiscoverDropdownOpen] = useState(false);
  const [ownersDropdownOpen, setOwnersDropdownOpen] = useState(false);

  // Mobile Accordion state
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);
  const [mobileOwnersOpen, setMobileOwnersOpen] = useState(false);

  // Dropdown Refs for reliable click-outside detection and hover timers
  const ownersDropdownRef = useRef<HTMLDivElement>(null);
  const discoverDropdownRef = useRef<HTMLDivElement>(null);
  const ownersTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const discoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const t = translations[currentLang];
  const isRtl = currentLang === "ar";

  // Clear hover timeouts on unmount
  useEffect(() => {
    return () => {
      if (ownersTimeoutRef.current) clearTimeout(ownersTimeoutRef.current);
      if (discoverTimeoutRef.current) clearTimeout(discoverTimeoutRef.current);
    };
  }, []);

  const handleOwnersMouseEnter = () => {
    if (ownersTimeoutRef.current) {
      clearTimeout(ownersTimeoutRef.current);
      ownersTimeoutRef.current = null;
    }
    setOwnersDropdownOpen(true);
    setDiscoverDropdownOpen(false);
  };

  const handleOwnersMouseLeave = () => {
    if (ownersTimeoutRef.current) clearTimeout(ownersTimeoutRef.current);
    ownersTimeoutRef.current = setTimeout(() => {
      setOwnersDropdownOpen(false);
    }, 180);
  };

  const handleDiscoverMouseEnter = () => {
    if (discoverTimeoutRef.current) {
      clearTimeout(discoverTimeoutRef.current);
      discoverTimeoutRef.current = null;
    }
    setDiscoverDropdownOpen(true);
    setOwnersDropdownOpen(false);
  };

  const handleDiscoverMouseLeave = () => {
    if (discoverTimeoutRef.current) clearTimeout(discoverTimeoutRef.current);
    discoverTimeoutRef.current = setTimeout(() => {
      setDiscoverDropdownOpen(false);
    }, 180);
  };

  // Handle outside click & Escape key to close open desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        ownersDropdownRef.current &&
        !ownersDropdownRef.current.contains(target)
      ) {
        setOwnersDropdownOpen(false);
      }
      if (
        discoverDropdownRef.current &&
        !discoverDropdownRef.current.contains(target)
      ) {
        setDiscoverDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOwnersDropdownOpen(false);
        setDiscoverDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page: PageRoute) => {
    if (ownersTimeoutRef.current) clearTimeout(ownersTimeoutRef.current);
    if (discoverTimeoutRef.current) clearTimeout(discoverTimeoutRef.current);
    trackEvent("navigate_page", { target_page: page, from_page: currentPage });
    setMobileMenuOpen(false);
    setDiscoverDropdownOpen(false);
    setOwnersDropdownOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onNavigate(page);
  };

  const handleLangToggle = () => {
    const nextLang: Language = currentLang === "en" ? "ar" : "en";
    trackEvent("language_switch", { from_lang: currentLang, to_lang: nextLang });
    onLanguageChange(nextLang);
  };

  const handleDownloadClick = () => {
    trackEvent("hero_download_click", { source: "header_button" });
    onNavigate("download");
  };

  const isDiscoverActive = [
    "running-businesses-uae",
    "businesses-for-sale-uae",
    "startup-opportunities-uae",
    "trade-license-opportunities-uae",
    "find-partners-investors",
    "business-partnership-opportunities-uae",
    "discover",
  ].includes(currentPage);

  const isOwnersActive = [
    "list-running-business",
    "post-startup-idea",
    "list-trade-license",
    "find-business-partner-uae",
    "free-business-listing-uae",
    "for-owners",
  ].includes(currentPage);

  // Exclusive top navbar category highlight: when a dropdown is explicitly opened, only that dropdown gets highlighted; otherwise highlight the category matching currentPage
  const isOwnersHighlighted = ownersDropdownOpen || (isOwnersActive && !discoverDropdownOpen);
  const isDiscoverHighlighted = discoverDropdownOpen || (isDiscoverActive && !ownersDropdownOpen);
  const isHowItWorksHighlighted = currentPage === "how-it-works" && !ownersDropdownOpen && !discoverDropdownOpen;
  const isContactHighlighted = currentPage === "contact" && !ownersDropdownOpen && !discoverDropdownOpen;

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 border-none outline-none ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(15,88,213,0.06)] py-1.5 md:py-1.5"
          : "bg-white/90 backdrop-blur-xs py-2 md:py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group text-start focus:outline-hidden"
            aria-label="Loryfy Home"
          >
            <img
              src={loryfyConfig.assets.logoUrl}
              alt="Loryfy"
              className="h-7 md:h-8.5 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {/* 1. For Owners Dropdown */}
            <div
              ref={ownersDropdownRef}
              className="relative"
              onMouseEnter={handleOwnersMouseEnter}
              onMouseLeave={handleOwnersMouseLeave}
            >
              <div className="flex items-center">
                <button
                  id="nav-for-owners-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    if (ownersTimeoutRef.current) clearTimeout(ownersTimeoutRef.current);
                    setOwnersDropdownOpen((prev) => !prev);
                    setDiscoverDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none ${
                    isOwnersHighlighted
                      ? "text-[#0F58D5] bg-[#0F58D5]/8 font-semibold"
                      : "text-[#475467] hover:text-[#17B3CD] hover:bg-slate-50"
                  }`}
                  aria-expanded={ownersDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>{t.nav.forOwners}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      ownersDropdownOpen ? "rotate-180 text-[#0F58D5]" : "group-hover:text-[#17B3CD]"
                    }`}
                  />
                </button>
              </div>

              {/* For Owners Dropdown Menu */}
              {ownersDropdownOpen && (
                <div
                  className={`absolute top-full pt-1.5 w-80 z-50 transition-all ${
                    isRtl ? "right-0" : "left-0"
                  }`}
                >
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 before:absolute before:-top-3 before:inset-x-0 before:h-3 before:content-['']">
                    {/* 1. List a Running Business */}
                    <button
                      id="owners-item-list-business"
                      onClick={() => handleNavClick("list-running-business")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "list-running-business"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/20 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#101828] group-hover:text-[#17B3CD]">
                          {currentLang === "en" ? "List a Running Business" : "اعرض مشروعًا قائمًا"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Find partners or investors, or offer your running business for sale"
                            : "ابحث عن شركاء أو مستثمرين، أو اعرض مشروعك القائم للبيع"}
                        </div>
                      </div>
                    </button>

                    {/* 2. Post a Startup / Business Idea */}
                    <button
                      id="owners-item-post-idea"
                      onClick={() => handleNavClick("post-startup-idea")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "post-startup-idea"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/20 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#17B3CD]/10 text-[#17B3CD] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#101828] group-hover:text-[#17B3CD]">
                          {currentLang === "en" ? "List Your Business Idea" : "اعرض فكرة مشروعك"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Share your business idea and connect with potential co-founders, investors, or experienced operators."
                            : "اعرض فكرة مشروعك وابحث عن شركاء مؤسسين أو مستثمرين أو خبراء تنفيذيين."}
                        </div>
                      </div>
                    </button>

                    {/* 3. List a Trade License */}
                    <button
                      id="owners-item-list-license"
                      onClick={() => handleNavClick("list-trade-license")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "list-trade-license"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/20 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#101828] group-hover:text-[#17B3CD]">
                          {currentLang === "en" ? "List a Trade License" : "اعرض رخصة تجارية"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Offer your trade license for sale and connect with interested users"
                            : "اعرض رخصتك التجارية للبيع وتواصل مع المستخدمين المهتمين"}
                        </div>
                      </div>
                    </button>

                    <div className="my-1.5 border-t border-slate-100" />

                    {/* 4. Find Business Partner in UAE */}
                    <button
                      id="owners-item-find-partner-page"
                      onClick={() => handleNavClick("find-business-partner-uae")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "find-business-partner-uae"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/30 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F58D5] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <UserPlus className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F58D5]">
                          {currentLang === "en" ? "Find Business Partner in UAE" : "ابحث عن شريك تجاري في الإمارات"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Discover partners, investors, or options to buy/sell business"
                            : "اكتشف شركاء، مستثمرين، أو خيارات شراء وبيع المشاريع"}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Discover Dropdown */}
            <div
              ref={discoverDropdownRef}
              className="relative"
              onMouseEnter={handleDiscoverMouseEnter}
              onMouseLeave={handleDiscoverMouseLeave}
            >
              <div className="flex items-center">
                <button
                  id="nav-discover-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    if (discoverTimeoutRef.current) clearTimeout(discoverTimeoutRef.current);
                    setDiscoverDropdownOpen((prev) => !prev);
                    setOwnersDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none ${
                    isDiscoverHighlighted
                      ? "text-[#0F58D5] bg-[#0F58D5]/8 font-semibold"
                      : "text-[#475467] hover:text-[#17B3CD] hover:bg-slate-50"
                  }`}
                  aria-expanded={discoverDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>{t.nav.discover}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      discoverDropdownOpen ? "rotate-180 text-[#0F58D5]" : "group-hover:text-[#17B3CD]"
                    }`}
                  />
                </button>
              </div>

              {/* Discover Dropdown Menu */}
              {discoverDropdownOpen && (
                <div
                  className={`absolute top-full pt-1.5 w-80 z-50 transition-all ${
                    isRtl ? "right-0" : "left-0"
                  }`}
                >
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 before:absolute before:-top-3 before:inset-x-0 before:h-3 before:content-['']">
                    {/* Running Businesses */}
                    <button
                      id="discover-item-running-businesses"
                      onClick={() => handleNavClick("running-businesses-uae")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "running-businesses-uae"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/20 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#101828] group-hover:text-[#17B3CD]">
                          {currentLang === "en" ? "Explore Running Businesses" : "استكشف المشاريع القائمة"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Running businesses seeking partners, investors, or buyers"
                            : "مشاريع قائمة تبحث عن شركاء أو مستثمرين أو مشترين"}
                        </div>
                      </div>
                    </button>

                    {/* Startup Ideas */}
                    <button
                      id="discover-item-startup-ideas"
                      onClick={() => handleNavClick("startup-opportunities-uae")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "startup-opportunities-uae"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/20 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#17B3CD]/10 text-[#17B3CD] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#101828] group-hover:text-[#17B3CD]">
                          {currentLang === "en" ? "Explore Startup Ideas" : "استكشف أفكار المشاريع"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Business and startup ideas seeking partners or investors"
                            : "أفكار مشاريع وشركات ناشئة تبحث عن شركاء أو مستثمرين"}
                        </div>
                      </div>
                    </button>

                    {/* Trade Licenses */}
                    <button
                      id="discover-item-trade-licenses"
                      onClick={() => handleNavClick("trade-license-opportunities-uae")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "trade-license-opportunities-uae"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/20 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#17B3CD] group-hover:text-white transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#101828] group-hover:text-[#17B3CD]">
                          {currentLang === "en" ? "Explore Trade Licenses" : "استكشف الرخص التجارية"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Trade licenses available for sale"
                            : "رخص تجارية معروضة للبيع والتنازل"}
                        </div>
                      </div>
                    </button>

                    <div className="my-1.5 border-t border-slate-100" />

                    {/* Find Partners & Investors */}
                    <button
                      id="discover-item-find-investors-page"
                      onClick={() => handleNavClick("find-partners-investors")}
                      className={`w-full text-start p-2.5 rounded-xl transition-colors group cursor-pointer flex items-start gap-3 ${
                        currentPage === "find-partners-investors"
                          ? "bg-[#F5F8FF] border border-[#0F58D5]/30 font-semibold"
                          : "hover:bg-[#F5F8FF]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F58D5] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F58D5]">
                          {currentLang === "en" ? "Find Partners & Investors" : "ابحث عن شركاء ومستثمرين"}
                        </div>
                        <div className="text-xs text-[#475467] mt-0.5 leading-snug">
                          {currentLang === "en"
                            ? "Explore funding, strategic, and operating partner opportunities"
                            : "اكتشف فرص تمويلية واستراتيجية وتشغيلية مع شركاء ومستثمرين"}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. How it works */}
            <button
              id="nav-how-it-works-btn"
              onClick={() => handleNavClick("how-it-works")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                isHowItWorksHighlighted
                  ? "text-[#0F58D5] bg-[#0F58D5]/8 font-semibold"
                  : "text-[#475467] hover:text-[#17B3CD] hover:bg-slate-50"
              }`}
            >
              {t.nav.howItWorks}
            </button>



            {/* 5. Contact Us */}
            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick("contact")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                isContactHighlighted
                  ? "text-[#0F58D5] bg-[#0F58D5]/8 font-semibold"
                  : "text-[#475467] hover:text-[#17B3CD] hover:bg-slate-50"
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Action Area (Language Selector + CTA Button) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              id="header-lang-switch-btn"
              onClick={handleLangToggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-sm font-semibold text-[#101828] hover:border-[#17B3CD] hover:text-[#17B3CD] transition-colors cursor-pointer bg-white shadow-2xs"
              title={currentLang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            >
              <Globe className="w-4 h-4 text-[#475467]" />
              <span>{t.nav.switchLangLabel}</span>
            </button>

            {/* Primary Download App Button */}
            <button
              id="header-download-cta"
              onClick={handleDownloadClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#0F58D5] hover:bg-[#128ca2] transition-all shadow-md shadow-[#0F58D5]/20 hover:shadow-lg hover:shadow-[#17B3CD]/30 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadApp}</span>
            </button>
          </div>

          {/* Mobile Menu & Lang button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-lang-toggle-btn"
              onClick={handleLangToggle}
              className="h-7 min-w-[56px] px-2.5 rounded-lg text-xs font-bold border border-slate-200 text-[#101828] bg-white shadow-2xs flex items-center justify-center hover:border-[#17B3CD] transition-colors active:scale-95 cursor-pointer"
            >
              {t.nav.switchLangLabel}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-7 w-7 rounded-lg text-[#101828] hover:bg-slate-100 flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (with expandable accordion for For Owners & Discover Opportunities) */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="max-w-[340px] mx-auto space-y-2">
            <div className="space-y-1.5">
              {/* Home Navigation Item */}
              <button
                id="mobile-nav-home-btn"
                onClick={() => handleNavClick("home")}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors mb-2 cursor-pointer ${
                  currentPage === "home"
                    ? "text-[#0F58D5] bg-[#0F58D5]/8"
                    : "text-[#101828] hover:bg-slate-50 border border-slate-100"
                }`}
              >
                <Home className="w-4.5 h-4.5 text-[#0F58D5] shrink-0" />
                <span>{t.nav.home}</span>
              </button>

              {/* Accordion 1: For Owners */}
              <div className="rounded-xl border border-slate-100 overflow-hidden mb-2">
                <div
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-start font-semibold text-sm transition-colors ${
                    isOwnersActive
                      ? "text-[#0F58D5] bg-[#0F58D5]/5"
                      : "text-[#101828] hover:bg-slate-50"
                  }`}
                >
                  <button
                    id="mobile-nav-owners-main-btn"
                    onClick={() => handleNavClick("find-business-partner-uae")}
                    className="flex items-center gap-2 flex-1 text-start cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#17B3CD]" />
                    <span>{t.nav.forOwners}</span>
                    <span className="text-[11px] font-normal text-[#475467]">
                      ({currentLang === "en" ? "Publish Listings" : "نشر وإعلان"})
                    </span>
                  </button>
                  <button
                    id="mobile-accordion-owners-btn"
                    onClick={() => setMobileOwnersOpen(!mobileOwnersOpen)}
                    className="p-1 cursor-pointer"
                    aria-label="Toggle For Owners menu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        mobileOwnersOpen ? "rotate-180 text-[#0F58D5]" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileOwnersOpen && (
                  <div className="bg-[#F5F8FF]/50 p-2 space-y-1 border-t border-slate-100">
                    <button
                      onClick={() => handleNavClick("list-running-business")}
                      className="w-full text-start p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="font-semibold text-xs text-[#101828]">
                        {currentLang === "en" ? "List a Running Business" : "اعرض مشروعًا قائمًا"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Find partners or investors, or offer your running business for sale"
                          : "ابحث عن شركاء أو مستثمرين، أو اعرض مشروعك القائم للبيع"}
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("post-startup-idea")}
                      className="w-full text-start p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="font-semibold text-xs text-[#101828]">
                        {currentLang === "en" ? "List Your Business Idea" : "اعرض فكرة مشروعك"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Share your business idea and connect with potential co-founders, investors, or experienced operators."
                          : "اعرض فكرة مشروعك وابحث عن شركاء مؤسسين أو مستثمرين أو خبراء تنفيذيين."}
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("list-trade-license")}
                      className="w-full text-start p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="font-semibold text-xs text-[#101828]">
                        {currentLang === "en" ? "List a Trade License" : "اعرض رخصة تجارية"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Offer your trade license for sale and connect with interested users"
                          : "اعرض رخصتك التجارية للبيع وتواصل مع المستخدمين المهتمين"}
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("find-business-partner-uae")}
                      className={`w-full text-start p-2 rounded-lg transition-colors ${
                        currentPage === "find-business-partner-uae"
                          ? "bg-white border border-[#0F58D5]/30 shadow-xs font-semibold"
                          : "hover:bg-white"
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#0F58D5]">
                        {currentLang === "en" ? "Find Business Partner in UAE" : "ابحث عن شريك تجاري في الإمارات"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Discover partners, investors, or options to buy/sell business"
                          : "اكتشف شركاء، مستثمرين، أو خيارات شراء وبيع المشاريع"}
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 2: Discover Opportunities */}
              <div className="rounded-xl border border-slate-100 overflow-hidden mb-2">
                <div
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-start font-semibold text-sm transition-colors ${
                    isDiscoverActive
                      ? "text-[#0F58D5] bg-[#0F58D5]/5"
                      : "text-[#101828] hover:bg-slate-50"
                  }`}
                >
                  <button
                    id="mobile-nav-discover-main-btn"
                    onClick={() => handleNavClick("find-partners-investors")}
                    className="flex items-center gap-2 flex-1 text-start cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0F58D5]" />
                    <span>{t.nav.discover}</span>
                    <span className="text-[11px] font-normal text-[#475467]">
                      ({currentLang === "en" ? "Opportunities" : "الفرص المتاحة"})
                    </span>
                  </button>
                  <button
                    id="mobile-accordion-discover-btn"
                    onClick={() => setMobileDiscoverOpen(!mobileDiscoverOpen)}
                    className="p-1 cursor-pointer"
                    aria-label="Toggle Discover menu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        mobileDiscoverOpen ? "rotate-180 text-[#0F58D5]" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileDiscoverOpen && (
                  <div className="bg-[#F5F8FF]/50 p-2 space-y-1 border-t border-slate-100">
                    <button
                      onClick={() => handleNavClick("running-businesses-uae")}
                      className="w-full text-start p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="font-semibold text-xs text-[#101828]">
                        {currentLang === "en" ? "Explore Running Businesses" : "استكشف المشاريع القائمة"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Running businesses seeking partners, investors, or buyers"
                          : "مشاريع قائمة تبحث عن شركاء أو مستثمرين أو مشترين"}
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("startup-opportunities-uae")}
                      className="w-full text-start p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="font-semibold text-xs text-[#101828]">
                        {currentLang === "en" ? "Explore Startup Ideas" : "استكشف أفكار المشاريع"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Business and startup ideas seeking partners or investors"
                          : "أفكار مشاريع وشركات ناشئة تبحث عن شركاء أو مستثمرين"}
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("trade-license-opportunities-uae")}
                      className="w-full text-start p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="font-semibold text-xs text-[#101828]">
                        {currentLang === "en" ? "Explore Trade Licenses" : "استكشف الرخص التجارية"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Trade licenses available for sale"
                          : "رخص تجارية معروضة للبيع"}
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("find-business-partner-uae")}
                      className={`w-full text-start p-2 rounded-lg transition-colors ${
                        currentPage === "find-business-partner-uae"
                          ? "bg-white border border-[#0F58D5]/30 shadow-xs font-semibold"
                          : "hover:bg-white"
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#0F58D5]">
                        {currentLang === "en" ? "Find Partnership Opportunities" : "ابحث عن فرص الشراكة"}
                      </div>
                      <div className="text-[11px] text-[#475467] mt-0.5">
                        {currentLang === "en"
                          ? "Discover funding, strategic, and operating partnership opportunities"
                          : "اكتشف فرص شراكة تمويلية واستراتيجية وتشغيلية"}
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* How It Works */}
              <button
                id="mobile-nav-how-it-works-btn"
                onClick={() => handleNavClick("how-it-works")}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors mb-2 cursor-pointer ${
                  currentPage === "how-it-works"
                    ? "text-[#0F58D5] bg-[#0F58D5]/8"
                    : "text-[#101828] hover:bg-slate-50 border border-slate-100"
                }`}
              >
                <HelpCircle className="w-4.5 h-4.5 text-[#0F58D5] shrink-0" />
                <span>{t.nav.howItWorks}</span>
              </button>

              {/* Contact Us */}
              <button
                id="mobile-nav-contact-btn"
                onClick={() => handleNavClick("contact")}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors mb-2 cursor-pointer ${
                  currentPage === "contact"
                    ? "text-[#0F58D5] bg-[#0F58D5]/8"
                    : "text-[#101828] hover:bg-slate-50 border border-slate-100"
                }`}
              >
                <PhoneCall className="w-4.5 h-4.5 text-[#0F58D5] shrink-0" />
                <span>{t.nav.contact}</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                id="mobile-header-download-cta"
                onClick={handleDownloadClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-[#0F58D5] shadow-md shadow-[#0F58D5]/25 active:scale-98"
              >
                <Download className="w-5 h-5" />
                <span>{t.nav.downloadApp}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

