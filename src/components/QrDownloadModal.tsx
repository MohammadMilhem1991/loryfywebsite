import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Language } from "../types";
import { loryfyConfig } from "../config/loryfyConfig";
import { trackEvent } from "../utils/analytics";
import { QrCode, X } from "lucide-react";

interface QrDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  qrValue?: string;
}

export const QrDownloadModal: React.FC<QrDownloadModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  qrValue = loryfyConfig.downloadQrUrl || "https://loryfy.com/download",
}) => {
  const isRtl = currentLang === "ar";
  const [qrSvg, setQrSvg] = useState<string>("");

  useEffect(() => {
    if (!isOpen) return;

    // Generate high quality QR code SVG
    QRCode.toString(
      qrValue,
      {
        type: "svg",
        errorCorrectionLevel: "H",
        margin: 1,
        color: {
          dark: "#0F58D5",
          light: "#FFFFFF",
        },
      },
      (err, svgString) => {
        if (!err && svgString) {
          setQrSvg(svgString);
        }
      }
    );

    // Track modal open
    trackEvent("qr_scan_click", { action: "modal_opened" });

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, qrValue, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      dir={isRtl ? "rtl" : "ltr"}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 overflow-hidden text-slate-900 transition-all scale-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Decorative Background Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#0F58D5]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#17B3CD]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label={currentLang === "en" ? "Close" : "إغلاق"}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/15">
            <QrCode className="w-3.5 h-3.5" />
            <span>{currentLang === "en" ? "Scan to Download" : "امسح لتحميل التطبيق"}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#101828] tracking-tight">
            {currentLang === "en"
              ? "Download Loryfy App"
              : "تحميل تطبيق لوريفاي"}
          </h3>

          <p className="text-xs sm:text-sm text-[#475467] leading-relaxed max-w-xs mx-auto">
            {currentLang === "en"
              ? "Point your smartphone camera at the QR code below to download the app directly to your phone."
              : "وجّه كاميرا هاتفك الذكي نحو رمز QR أدناه لتحميل التطبيق مباشرة على هاتفك."}
          </p>
        </div>

        {/* QR Code Presentation Box */}
        <div className="flex flex-col items-center justify-center my-4">
          <div className="relative p-4 bg-gradient-to-b from-slate-50 to-white rounded-2xl border-2 border-slate-100 shadow-inner group">
            {/* Corner Scan Guides */}
            <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#0F58D5] rounded-tl-sm pointer-events-none" />
            <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#0F58D5] rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#0F58D5] rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#0F58D5] rounded-br-sm pointer-events-none" />

            {/* Generated QR Code */}
            {qrSvg ? (
              <div
                className="w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
            ) : (
              <div className="w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center bg-slate-50 text-slate-400">
                <QrCode className="w-12 h-12 animate-pulse text-[#0F58D5]" />
              </div>
            )}

            {/* Center Loryfy App Icon Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-blue-100 flex items-center justify-center pointer-events-none">
              <span className="text-[#0F58D5] font-black text-sm">L</span>
            </div>
          </div>

          <div className="mt-3.5 flex items-center gap-2 text-xs text-[#475467] font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {currentLang === "en"
                ? "Opens App Store (iOS) & Google Play (Android)"
                : "متوافق مع App Store و Google Play"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QrDownloadButtonProps {
  currentLang: Language;
  variant?: "dark" | "glass" | "outline" | "white";
  className?: string;
  onClick?: () => void;
}

export const QrDownloadButton: React.FC<QrDownloadButtonProps> = ({
  currentLang,
  variant = "dark",
  className = "",
  onClick,
}) => {
  let variantStyles = "";
  if (variant === "dark") {
    variantStyles = "bg-black hover:bg-slate-900 text-white border border-slate-800 shadow-md hover:shadow-lg";
  } else if (variant === "glass") {
    variantStyles = "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md shadow-md";
  } else if (variant === "white") {
    variantStyles = "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-md";
  } else {
    variantStyles = "bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300";
  }

  return (
    <button
      id="qr-code-download-trigger-btn"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl transition-all duration-200 cursor-pointer group active:scale-98 ${variantStyles} ${className}`}
      title={currentLang === "en" ? "Download via QR Code" : "تحميل عبر رمز QR"}
    >
      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        <QrCode className="w-5 h-5 text-white" />
      </div>
      <div className="text-start">
        <div className="text-[10px] text-slate-300 uppercase tracking-tight leading-none">
          {currentLang === "en" ? "Scan with Phone" : "امسح بالهاتف"}
        </div>
        <div className="text-sm sm:text-base font-bold tracking-tight leading-tight mt-0.5 whitespace-nowrap">
          {currentLang === "en" ? "Download via QR" : "التحميل برمز QR"}
        </div>
      </div>
    </button>
  );
};
