/**
 * Loryfy Simple Registration Section (Section 21)
 * Highlights frictionless signup with Name + Mobile Number only.
 */

import React from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { loryfyConfig } from "../config/loryfyConfig";
import { trackEvent } from "../utils/analytics";
import { getLocalizedImage } from "../utils/imageMap";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeInUp, FadeInSlide, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import { motion } from "motion/react";

interface RegistrationBannerProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const RegistrationBanner: React.FC<RegistrationBannerProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="registration-section" className="py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFF] to-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0F58D5]/5 via-[#17B3CD]/5 to-[#F5F8FF] rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#0F58D5]/15 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Text & Bullets */}
            <FadeInUp className="lg:col-span-6 space-y-4 text-start">
              <h2
                id="registration-heading"
                className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight"
              >
                {t.registration.heading}
              </h2>

              <p
                id="registration-description"
                className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-xl"
              >
                {t.registration.description}
              </p>

              <StaggerContainer className="pt-2 space-y-2.5 text-sm sm:text-base text-[#101828] font-medium">
                <StaggerItem className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F58D5] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.registration.bullets.simple}</span>
                </StaggerItem>
                <StaggerItem className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F58D5] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.registration.bullets.instant}</span>
                </StaggerItem>
                <StaggerItem className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F58D5] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.registration.bullets.noHassle}</span>
                </StaggerItem>
              </StaggerContainer>

              <div className="pt-3">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    trackEvent("hero_download_click", { section: "registration_section_cta" });
                    onNavigate("download");
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-white bg-[#0F58D5] hover:bg-[#0d4ec0] transition-all text-sm sm:text-base cursor-pointer shadow-xs"
                >
                  <span>{currentLang === "en" ? "Download Loryfy App" : "تحميل تطبيق لوريفاي"}</span>
                  <ArrowIcon className="w-4.5 h-4.5" />
                </motion.button>
              </div>
            </FadeInUp>

            {/* Actual Mobile App Signup Frame Image */}
            <div className="lg:col-span-6 flex items-center justify-center w-full">
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] flex items-center justify-center py-1">
                {/* Atmospheric Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F58D5]/12 via-[#17B3CD]/12 to-transparent blur-lg rounded-full pointer-events-none" />
                
                {/* Framed Mobile App Signup Showcase */}
                <div className="relative z-10 w-full flex items-center justify-center transition-all duration-300 filter drop-shadow-[0_12px_35px_rgba(23,179,205,0.22)]">
                  <img
                    src={getLocalizedImage(loryfyConfig.assets.signupScreen, currentLang)}
                    alt={currentLang === "en" ? "Loryfy Quick Signup Mobile App" : "شاشة تسجيل الحساب السريع في تطبيق لوريفاي"}
                    width={320}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[500px] sm:max-h-[540px] object-contain select-none aspect-[1/2]"
                    referrerPolicy="no-referrer"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
