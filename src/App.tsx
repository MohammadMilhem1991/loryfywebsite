/**
 * Loryfy Official Production Website
 * Bilingual (EN / AR RTL), SEO Optimized, Conversion-First Mobile App Discovery.
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Language, PageRoute } from "./types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { ForOwnersSection } from "./components/ForOwnersSection";
import { DiscoverOpportunitiesSection } from "./components/DiscoverOpportunitiesSection";
import { RegistrationBanner } from "./components/RegistrationBanner";
import { HowItWorksInteractive } from "./components/HowItWorksInteractive";
import { CommunicationSection } from "./components/CommunicationSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CategoryHubPage } from "./components/CategoryHubPage";
import { SeoPageTemplate } from "./components/SeoPageTemplate";
import {
  AboutPage,
  ContactPage,
  DownloadPage,
  OpportunityDetailPage,
  TermsPage,
  PrivacyPage,
  NotFoundPage,
  SitemapPage,
  StoriesIndexPage,
  TechnicalTextModal,
} from "./components/SpecialPages";
import { SeoStructuredData } from "./components/SeoStructuredData";
import { PageTransition } from "./components/ScrollAnimations";
import { resolveRoute } from "./utils/routes";

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [currentPage, setCurrentPage] = useState<PageRoute>("home");
  const [selectedOpportunitySlug, setSelectedOpportunitySlug] = useState<string | undefined>();
  const [technicalModal, setTechnicalModal] = useState<"robots" | "llms" | null>(null);

  // Initialize language and path based on URL pathname
  useEffect(() => {
    const resolved = resolveRoute(window.location.pathname);
    setCurrentLang(resolved.lang);
    if (resolved.slug) {
      setSelectedOpportunitySlug(resolved.slug);
    }
    setCurrentPage(resolved.page);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const popResolved = resolveRoute(window.location.pathname);
      setCurrentLang(popResolved.lang);
      if (popResolved.slug) {
        setSelectedOpportunitySlug(popResolved.slug);
      }
      setCurrentPage(popResolved.page);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Global scroll-to-top whenever the page or selected opportunity slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentPage, selectedOpportunitySlug]);

  const handleLanguageChange = (newLang: Language) => {
    setCurrentLang(newLang);
    // Update browser history URL
    const slugPart =
      currentPage === "home"
        ? ""
        : currentPage === "opportunity-detail" && selectedOpportunitySlug
        ? `/opportunity/${selectedOpportunitySlug}`
        : currentPage === "story-detail" && selectedOpportunitySlug
        ? `/real-examples-of-using-loryfy/${selectedOpportunitySlug}`
        : (currentPage === "stories" || currentPage === "real-examples-of-using-loryfy")
        ? `/real-examples-of-using-loryfy`
        : currentPage === "seo-page" && selectedOpportunitySlug
        ? `/${selectedOpportunitySlug}`
        : `/${currentPage}`;
    window.history.pushState({}, "", `/${newLang}${slugPart}`);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const handleNavigate = (page: PageRoute, slug?: string) => {
    if (page === "robots") {
      setTechnicalModal("robots");
      return;
    }
    if (page === "llms") {
      setTechnicalModal("llms");
      return;
    }

    if (slug) {
      setSelectedOpportunitySlug(slug);
    }
    setCurrentPage(page);

    // Ensure immediate reset to top of screen
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Update browser URL
    const pageUrl =
      page === "home"
        ? `/${currentLang}`
        : page === "opportunity-detail" && slug
        ? `/${currentLang}/opportunity/${slug}`
        : page === "story-detail" && slug
        ? `/${currentLang}/real-examples-of-using-loryfy/${slug}`
        : (page === "stories" || page === "real-examples-of-using-loryfy")
        ? `/${currentLang}/real-examples-of-using-loryfy`
        : page === "seo-page" && slug
        ? `/${currentLang}/${slug}`
        : `/${currentLang}/${page}`;
    window.history.pushState({}, "", pageUrl);
  };

  return (
    <div
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      lang={currentLang}
      className="min-h-screen bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF] text-[#101828] flex flex-col justify-between font-sans selection:bg-[#0F58D5]/15 selection:text-[#0F58D5]"
    >
      {/* SEO Schema and Head Metadata Injection */}
      <SeoStructuredData
        currentLang={currentLang}
        currentPage={currentPage}
        selectedOpportunitySlug={selectedOpportunitySlug}
      />

      {/* Sticky Main Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Routing & Body Content */}
      <main id="main-content" className="flex-1">
        {/* HOMEPAGE */}
        {currentPage === "home" && (
          <PageTransition key="home" pageKey="home">
            {/* 1. Hero Section */}
            <HeroSection currentLang={currentLang} onNavigate={handleNavigate} />

            {/* 2. For Owners Section */}
            <ForOwnersSection currentLang={currentLang} onNavigate={handleNavigate} />

            {/* 3. Discover Opportunities Section */}
            <DiscoverOpportunitiesSection currentLang={currentLang} onNavigate={handleNavigate} />

            {/* 4. How Loryfy Works Section */}
            <HowItWorksInteractive currentLang={currentLang} onNavigate={handleNavigate} />

            {/* 5. In-App Direct Chat */}
            <CommunicationSection currentLang={currentLang} onNavigate={handleNavigate} />

            {/* 6. Accordion FAQ (6 questions by default, expandable) */}
            <FaqSection currentLang={currentLang} />

            {/* 7. Final Download CTA Banner */}
            <FinalCtaSection currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* FOR OWNERS & DISCOVER DEDICATED HUB CARD PAGES */}
        {(currentPage === "for-owners" || currentPage === "discover") && (
          <PageTransition key={currentPage} pageKey={currentPage}>
            <CategoryHubPage
              type={currentPage}
              currentLang={currentLang}
              onNavigate={handleNavigate}
            />
          </PageTransition>
        )}

        {/* DEDICATED SEO PAGES & OWNER PAGES */}
        {(currentPage === "seo-page" ||
          currentPage === "find-business-partner-uae" ||
          currentPage === "free-business-listing-uae" ||
          currentPage === "running-businesses-uae" ||
          currentPage === "businesses-for-sale-uae" ||
          currentPage === "startup-opportunities-uae" ||
          currentPage === "business-partnership-opportunities-uae" ||
          currentPage === "trade-license-opportunities-uae" ||
          currentPage === "list-running-business" ||
          currentPage === "post-startup-idea" ||
          currentPage === "list-trade-license" ||
          currentPage === "find-partners-investors") && (
          <PageTransition
            key={currentPage === "seo-page" && selectedOpportunitySlug ? `seo-${selectedOpportunitySlug}` : currentPage}
            pageKey={currentPage === "seo-page" && selectedOpportunitySlug ? `seo-${selectedOpportunitySlug}` : currentPage}
          >
            <SeoPageTemplate
              key={`${currentPage === "seo-page" && selectedOpportunitySlug ? selectedOpportunitySlug : currentPage}-${currentLang}`}
              currentLang={currentLang}
              slug={currentPage === "seo-page" && selectedOpportunitySlug ? selectedOpportunitySlug : currentPage}
              onNavigate={handleNavigate}
            />
          </PageTransition>
        )}

        {/* ABOUT PAGE */}
        {currentPage === "about" && (
          <PageTransition key="about" pageKey="about">
            <AboutPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* HOW IT WORKS PAGE */}
        {currentPage === "how-it-works" && (
          <PageTransition key="how-it-works" pageKey="how-it-works" className="pt-3 pb-8 sm:py-8 bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF] min-h-screen">
            <HowItWorksInteractive currentLang={currentLang} onNavigate={handleNavigate} />
            <RegistrationBanner currentLang={currentLang} onNavigate={handleNavigate} />
            <CommunicationSection currentLang={currentLang} onNavigate={handleNavigate} />
            <FinalCtaSection currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* FAQ PAGE */}
        {currentPage === "faq" && (
          <PageTransition key="faq" pageKey="faq" className="pt-3 pb-8 sm:py-8 bg-gradient-to-b from-[#F5F9FF] via-[#F8FAFF] to-[#FFFFFF] min-h-screen">
            <FaqSection currentLang={currentLang} />
            <FinalCtaSection currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* CONTACT PAGE */}
        {currentPage === "contact" && (
          <PageTransition key="contact" pageKey="contact">
            <ContactPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* DOWNLOAD PAGE */}
        {currentPage === "download" && (
          <PageTransition key="download" pageKey="download">
            <DownloadPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* PUBLIC OPPORTUNITY DETAIL */}
        {currentPage === "opportunity-detail" && (
          <PageTransition key={`opportunity-${selectedOpportunitySlug || "detail"}`} pageKey={`opportunity-${selectedOpportunitySlug || "detail"}`}>
            <OpportunityDetailPage
              currentLang={currentLang}
              selectedOpportunitySlug={selectedOpportunitySlug}
              onNavigate={handleNavigate}
            />
          </PageTransition>
        )}

        {/* STORY DETAIL PAGES */}
        {currentPage === "story-detail" && selectedOpportunitySlug && (
          <PageTransition key={`story-${selectedOpportunitySlug}`} pageKey={`story-${selectedOpportunitySlug}`}>
            <SeoPageTemplate
              key={`story-${selectedOpportunitySlug}-${currentLang}`}
              currentLang={currentLang}
              slug={selectedOpportunitySlug}
              onNavigate={handleNavigate}
            />
          </PageTransition>
        )}

        {/* STORIES / REAL EXAMPLES INDEX HUB */}
        {(currentPage === "stories" || currentPage === "real-examples-of-using-loryfy") && (
          <PageTransition key="real-examples" pageKey="real-examples">
            <StoriesIndexPage
              currentLang={currentLang}
              onNavigate={handleNavigate}
              selectedOpportunitySlug={selectedOpportunitySlug}
            />
          </PageTransition>
        )}

        {/* TERMS PAGE */}
        {currentPage === "terms" && (
          <PageTransition key="terms" pageKey="terms">
            <TermsPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* PRIVACY PAGE */}
        {currentPage === "privacy" && (
          <PageTransition key="privacy" pageKey="privacy">
            <PrivacyPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* SITEMAP */}
        {currentPage === "sitemap" && (
          <PageTransition key="sitemap" pageKey="sitemap">
            <SitemapPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {/* NOT FOUND */}
        {currentPage === "not-found" && (
          <PageTransition key="not-found" pageKey="not-found">
            <NotFoundPage currentLang={currentLang} onNavigate={handleNavigate} />
          </PageTransition>
        )}
      </main>

      {/* Global Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />

      {/* Floating WhatsApp Support Action */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Mobile Sticky CTA on Scroll */}
      <MobileStickyCTA
        currentLang={currentLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Technical Text Modal (robots.txt / llms.txt preview) */}
      {technicalModal && (
        <TechnicalTextModal
          type={technicalModal}
          onClose={() => setTechnicalModal(null)}
        />
      )}
    </div>
  );
}
