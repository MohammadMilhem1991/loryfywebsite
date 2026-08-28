/**
 * Loryfy Final Download CTA Section (Section 47)
 * Premium gradient background, bold conversion messaging, official store buttons.
 */

import React, { useState } from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { trackEvent, handleAppStoreClick } from "../utils/analytics";
import { Smartphone } from "lucide-react";
import { AppleStoreIcon, GooglePlayIcon } from "./OfficialStoreIcons";
import { QrDownloadModal, QrDownloadButton } from "./QrDownloadModal";
import { FadeInUp } from "./ScrollAnimations";
import { motion } from "motion/react";

interface FinalCtaSectionProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <section id="final-download-cta-section" className="py-6 sm:py-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0F58D5] via-[#0E52C7] to-[#17B3CD] rounded-3xl p-6 sm:p-9 lg:p-10 text-white text-center relative overflow-hidden shadow-xl">
          {/* Subtle white dot pattern overlay */}
          <div className="absolute inset-0 bg-dot-pattern-white opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

          {/* Glowing lighting spheres */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#17B3CD]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <FadeInUp className="relative z-10 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 text-sm font-bold text-white backdrop-blur-md border border-white/20 shadow-2xs">
              <Smartphone className="w-4 h-4 text-[#17B3CD]" />
              <span>{currentLang === "en" ? "Available on iOS & Android" : "متاح لنظامي iOS و Android"}</span>
            </div>

            <h2
              id="final-cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight"
            >
              {t.finalCta.heading}
            </h2>

            <p
              id="final-cta-subheading"
              className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl mx-auto"
            >
              {t.finalCta.subheading}
            </p>

            {/* App Store & QR Download Buttons */}
            <div className="pt-3 flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto flex-wrap">
                {/* Standard Apple App Store Button */}
                <motion.button
                  id="final-cta-apple-store-btn"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAppStoreClick("ios")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-slate-800 group"
                >
                  <AppleStoreIcon className="w-7 h-7 text-white fill-current shrink-0 group-hover:scale-105 transition-transform" />
                  <div className="text-start">
                    <div className="text-[10px] text-slate-300 uppercase tracking-tight leading-none">
                      Download on the
                    </div>
                    <div className="text-base font-bold tracking-tight leading-tight mt-0.5">
                      App Store
                    </div>
                  </div>
                </motion.button>

                {/* Standard Google Play Store Button */}
                <motion.button
                  id="final-cta-google-play-btn"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAppStoreClick("android")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-slate-800 group"
                >
                  <GooglePlayIcon className="w-7 h-7 shrink-0 group-hover:scale-105 transition-transform" />
                  <div className="text-start">
                    <div className="text-[10px] text-slate-300 uppercase tracking-tight leading-none">
                      GET IT ON
                    </div>
                    <div className="text-base font-bold tracking-tight leading-tight mt-0.5">
                      Google Play
                    </div>
                  </div>
                </motion.button>

                {/* Download via QR Code Button */}
                <QrDownloadButton
                  currentLang={currentLang}
                  variant="dark"
                  className="w-full sm:w-auto"
                  onClick={() => setIsQrModalOpen(true)}
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* QR Code Modal Popup */}
      <QrDownloadModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        currentLang={currentLang}
      />
    </section>
  );
};
