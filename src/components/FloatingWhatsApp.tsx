/**
 * Loryfy Floating WhatsApp Support Action
 * Quick direct access to official WhatsApp chat with +971 54 142 0855
 */

import React, { useState } from "react";
import { Language } from "../types";
import { loryfyConfig } from "../config/loryfyConfig";
import { trackEvent } from "../utils/analytics";
import { WhatsAppIcon } from "./OfficialStoreIcons";
import { X, MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const isRtl = currentLang === "ar";

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { source: "floating_button" });
  };

  return (
    <div
      id="floating-whatsapp-widget"
      className={`fixed bottom-17 sm:bottom-6 z-50 flex items-center gap-3 ${
        isRtl ? "left-3.5 sm:left-6 flex-row-reverse" : "right-3.5 sm:right-6"
      }`}
    >
      {/* Optional Hover / Focus Pill */}
      {isTooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-lg border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <span>{currentLang === "en" ? "Chat with Loryfy" : "تواصل معنا عبر واتساب"}</span>
        </div>
      )}

      {/* Main Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={loryfyConfig.whatsapp.chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        aria-label={currentLang === "en" ? "Chat on WhatsApp" : "تواصل عبر واتساب"}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/45 transition-all hover:scale-108 active:scale-95 group cursor-pointer"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
};
