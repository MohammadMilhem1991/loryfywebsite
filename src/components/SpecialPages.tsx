/**
 * Loryfy Special Pages & Views
 * About, How It Works, Contact, Download, Public Listing, Terms, Privacy, 404, Sitemap, Robots, LLMS
 */

import React, { useState, useMemo, useEffect } from "react";
import { Language, PageRoute, PublicOpportunity } from "../types";
import { translations } from "../data/translations";
import { loryfyConfig } from "../config/loryfyConfig";
import { sampleOpportunities } from "../data/sampleOpportunities";
import { storySlugs, storiesData } from "../data/storiesData";
import { trackEvent, handleAppStoreClick } from "../utils/analytics";
import { getLocalizedImage } from "../utils/imageMap";
import {
  AppleStoreIcon,
  GooglePlayIcon,
  TikTokIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
  LinkedInIcon,
} from "./OfficialStoreIcons";
import { QrDownloadModal, QrDownloadButton } from "./QrDownloadModal";
import { FadeInUp, FadeInSlide, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import {
  Download,
  Mail,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Search,
  MessageSquare,
  Sparkles,
  Share2,
  FileText,
  Lock,
  Globe,
  Building2,
  QrCode,
  Compass,
  Scale,
  Shield,
  EyeOff,
  Database,
  UserCheck,
  Server,
  Clock,
  ChevronRight,
  AlertCircle,
  Key,
  FileCheck,
  HelpCircle,
  ExternalLink,
  BookOpen,
} from "lucide-react";

interface SpecialPageProps {
  currentLang: Language;
  onNavigate: (page: PageRoute, slug?: string) => void;
  selectedOpportunitySlug?: string;
  isWebView?: boolean;
}

// 1. ABOUT PAGE (Section 57)
export const AboutPage: React.FC<SpecialPageProps> = ({ currentLang, onNavigate, isWebView = false }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      id="about-page"
      className={
        isWebView
          ? "bg-white min-h-screen py-2 px-2"
          : "bg-gradient-to-b from-[#F5F9FF] via-white to-white min-h-screen pt-4 pb-16 sm:py-16"
      }
    >
      <div
        className={
          isWebView
            ? "max-w-7xl mx-auto space-y-6"
            : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16"
        }
      >
        
        {/* Hero Header */}
        <FadeInUp>
          <div
            className={
              isWebView
                ? "bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-3xs text-center space-y-4 relative overflow-hidden"
                : "bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/60 p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#0F58D5]/15 shadow-2xs text-center space-y-6 relative overflow-hidden"
            }
          >
            {!isWebView && (
              <>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#17B3CD]/10 rounded-full blur-lg pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#0F58D5]/10 rounded-full blur-lg pointer-events-none" />
              </>
            )}

            <div className="relative z-10 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <h1 className="text-xl sm:text-2.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
                {currentLang === "en"
                  ? "Making Business Connections Easier to Discover"
                  : "نربط أصحاب المشاريع بالشركاء والمستثمرين"}
              </h1>

              <p className="text-xs sm:text-sm text-[#475467] leading-relaxed pt-1 max-w-3xl mx-auto">
                {t.whatIsLoryfy.description}
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* 3 Core Pillars: Discover, Connect, Opportunity */}
        {!isWebView && (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StaggerItem className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-3xs text-start space-y-3 flex flex-col justify-between" type="tumble" index={0}>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20 flex items-center justify-center font-black text-sm shrink-0">
                    1
                  </div>
                  <h3 className="text-base font-extrabold text-[#101828]">
                    {currentLang === "en" ? "Discover" : "اكتشف"}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {currentLang === "en"
                    ? "Discover running businesses, startup ideas, and commercial trade license opportunities in one structured platform."
                    : "اكتشف المشاريع القائمة، وأفكار المشاريع، وفرص الرخص التجارية في منصة واحدة منظمة."}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-3xs text-start space-y-3 flex flex-col justify-between" type="tumble" index={1}>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#17B3CD]/15 text-[#0F58D5] border border-[#17B3CD]/30 flex items-center justify-center font-black text-sm shrink-0">
                    2
                  </div>
                  <h3 className="text-base font-extrabold text-[#101828]">
                    {currentLang === "en" ? "Connect" : "تواصل"}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {currentLang === "en"
                    ? "Start direct conversations with business owners, funding partners, and operating specialists through instant in-app chat."
                    : "ابدأ محادثات مباشرة مع أصحاب المشاريع والشركاء الماليين والتنفيذيين عبر المحادثة المباشرة في التطبيق."}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-3xs text-start space-y-3 flex flex-col justify-between" type="tumble" index={2}>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20 flex items-center justify-center font-black text-sm shrink-0">
                    3
                  </div>
                  <h3 className="text-base font-extrabold text-[#101828]">
                    {currentLang === "en" ? "Opportunity" : "فرصة"}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {currentLang === "en"
                    ? "Unlock new commercial ventures, expand existing businesses, or find the ideal partner to bring business concepts to life."
                    : "انطلق نحو شراكات تجارية جديدة، وسّع نطاق عملك، أو اعثر على الشريك المناسب لتحويل الأفكار إلى واقع."}
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        )}

        {/* UAE & Regional Focus */}
        <FadeInUp>
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-3xs space-y-3 text-start">
            <h3 className="text-lg font-extrabold text-[#101828]">
              {currentLang === "en" ? "Our Geographic Focus" : "نطاق التركيز الجغرافي"}
            </h3>
            <p className="text-xs sm:text-sm text-[#475467] leading-relaxed max-w-3xl">
              {t.whyLoryfy.uaeFocused.description}
            </p>
          </div>
        </FadeInUp>

        {/* Action CTA */}
        {!isWebView && (
          <FadeInUp className="text-center pt-2">
            <button
              onClick={() => onNavigate("download")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-md shadow-[#0F58D5]/20 hover:shadow-lg hover:shadow-[#17B3CD]/30 transition-all text-base cursor-pointer active:scale-98"
            >
              <Download className="w-5 h-5" />
              <span>{t.nav.downloadApp}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </FadeInUp>
        )}
      </div>
    </div>
  );
};

// 2. CONTACT PAGE (Section 59)
export const ContactPage: React.FC<SpecialPageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError(currentLang === "en" 
        ? "Name, email, and message are mandatory fields." 
        : "الاسم والبريد الإلكتروني والرسالة هي حقول إلزامية.");
      setSubmitting(false);
      return;
    }

    if (formData.message.trim().length < 15) {
      setSubmitError(currentLang === "en"
        ? `Message must be at least 15 characters (currently ${formData.message.trim().length} characters).`
        : `يجب أن تحتوي الرسالة على 15 حرفاً على الأقل (حالياً ${formData.message.trim().length} حرفاً).`);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const specificError = errorData.details || errorData.error;
        throw new Error(specificError || (currentLang === "en" ? "Failed to send message. Please try again." : "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."));
      }

      trackEvent("contact_click", { method: "contact_form", name: formData.name, email: formData.email });
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(currentLang === "en"
        ? "This is currently not working for an unexpected reason. We are redirecting you to contact us through WhatsApp..."
        : "هذا لا يعمل حالياً لسبب غير متوقع. جاري توجيهك للتواصل معنا عبر واتساب...");
      
      // Auto-redirect to WhatsApp
      setTimeout(() => {
        window.open(loryfyConfig.whatsapp.chatUrl, "_blank", "noopener,noreferrer");
      }, 1800);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="bg-gradient-to-b from-[#F5F9FF] via-white to-white min-h-screen pt-4 pb-16 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Header */}
        <FadeInUp>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
              {t.nav.contact}
            </h1>
            <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
              {currentLang === "en"
                ? "Have a question or feedback? We are always here to assist."
                : "لديك استفسار أو اقتراح؟ فريقنا جاهز للتواصل ومساعدتك."}
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Official Contact Info Card (5 cols) */}
          <FadeInUp className="lg:col-span-5 flex flex-col h-full">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/40 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-8 text-start h-full">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] leading-tight">
                {currentLang === "en" ? "Official Contact Channels" : "قنوات التواصل الرسمية"}
              </h3>

              <div className="space-y-4">
                {/* WhatsApp Direct Chat Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#475467]">
                        {currentLang === "en" ? "Official WhatsApp Support" : "دعم واتساب المباشر"}
                      </div>
                      <div
                        dir="ltr"
                        className="font-extrabold text-sm text-[#101828] [direction:ltr] [unicode-bidi:isolate] inline-block text-left"
                      >
                        <bdi dir="ltr">{loryfyConfig.whatsapp.phoneNumber}</bdi>
                      </div>
                    </div>
                  </div>

                  <a
                    id="contact-page-whatsapp-cta"
                    href={loryfyConfig.whatsapp.chatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("contact_click", { method: "whatsapp_contact_page" })}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{currentLang === "en" ? "Start WhatsApp Chat" : "محادثة مباشرة عبر واتساب"}</span>
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/60 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#475467]">
                      {currentLang === "en" ? "Official Email" : "البريد الإلكتروني الرسمي"}
                    </div>
                    <a
                      href={`mailto:${loryfyConfig.email}`}
                      dir="ltr"
                      className="font-bold text-sm text-[#0F58D5] hover:text-[#17B3CD] transition-colors [direction:ltr] [unicode-bidi:isolate] inline-block font-sans"
                      onClick={() => trackEvent("contact_click", { method: "contact_page_email" })}
                    >
                      <bdi dir="ltr">{loryfyConfig.email}</bdi>
                    </a>
                  </div>
                </div>

                {/* Platform */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/60 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#17B3CD]/15 text-[#0F58D5] flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#475467]">
                      {currentLang === "en" ? "Platform" : "المنصة"}
                    </div>
                    <div className="font-bold text-sm text-[#101828]">
                      {currentLang === "en" ? "Loryfy Mobile App (iOS & Android)" : "تطبيق لوريفاي للهاتف (iOS و Android)"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="text-xs font-extrabold text-[#101828] uppercase tracking-wider mb-3">
                  {currentLang === "en" ? "Official Social Media" : "حسابات التواصل الرسمية"}
                </div>
                <div className="flex items-center gap-3">
                  {/* TikTok */}
                  {loryfyConfig.socialLinks.tiktok && (
                    <a
                      id="contact-social-tiktok"
                      href={loryfyConfig.socialLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("social_click", { network: "tiktok", location: "contact_page" })}
                      aria-label="TikTok"
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-slate-200/80 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-2xs cursor-pointer"
                    >
                      <TikTokIcon className="w-5 h-5 shrink-0" />
                    </a>
                  )}

                  {/* Facebook */}
                  {loryfyConfig.socialLinks.facebook && (
                    <a
                      id="contact-social-facebook"
                      href={loryfyConfig.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("social_click", { network: "facebook", location: "contact_page" })}
                      aria-label="Facebook"
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-slate-200/80 text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200 shadow-2xs cursor-pointer"
                    >
                      <FacebookIcon className="w-5 h-5 shrink-0" />
                    </a>
                  )}

                  {/* Instagram */}
                  {loryfyConfig.socialLinks.instagram && (
                    <a
                      id="contact-social-instagram"
                      href={loryfyConfig.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("social_click", { network: "instagram", location: "contact_page" })}
                      aria-label="Instagram"
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-slate-200/80 text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] hover:text-white hover:border-transparent transition-all duration-200 shadow-2xs cursor-pointer"
                    >
                      <InstagramIcon className="w-5 h-5 shrink-0" />
                    </a>
                  )}

                  {/* YouTube */}
                  {loryfyConfig.socialLinks.youtube && (
                    <a
                      id="contact-social-youtube"
                      href={loryfyConfig.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("social_click", { network: "youtube", location: "contact_page" })}
                      aria-label="YouTube"
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-slate-200/80 text-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-200 shadow-2xs cursor-pointer"
                    >
                      <YouTubeIcon className="w-5 h-5 shrink-0" />
                    </a>
                  )}

                  {/* LinkedIn */}
                  <a
                    id="contact-social-linkedin"
                    href={loryfyConfig.socialLinks.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!loryfyConfig.socialLinks.linkedin) {
                        e.preventDefault();
                      }
                      trackEvent("social_click", { network: "linkedin", location: "contact_page" });
                    }}
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-slate-200/80 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-200 shadow-2xs cursor-pointer"
                  >
                    <LinkedInIcon className="w-5 h-5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#475467] leading-relaxed">
              {currentLang === "en"
                ? "For listing inquiries and partner conversations, please use the in-app chat directly with listing owners."
                : "للاستفسار عن الإعلانات والتواصل مع الشركاء، يرجى استخدام المحادثة المباشرة داخل التطبيق."}
            </div>
          </div>
        </FadeInUp>

        {/* Contact Message Form (7 cols) */}
        <FadeInUp className="lg:col-span-7 flex flex-col h-full">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-full">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#101828]">
                  {currentLang === "en" ? "Message Received" : "تم استلام رسالتك"}
                </h4>
                <p className="text-sm text-[#475467] max-w-md mx-auto leading-relaxed">
                  {currentLang === "en"
                    ? "Thank you for reaching out. Our support team will review and reply via email shortly."
                    : "شكرًا لتواصلك معنا. سيقوم فريق الدعم بمراجعة رسالتك والرد عبر البريد الإلكتروني قريبًا."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-start">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] mb-2 leading-tight">
                  {currentLang === "en" ? "Send Us a Message" : "أرسل لنا رسالة"}
                </h3>

                 <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1.5">
                    {currentLang === "en" ? "Your Name" : "الاسم"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onInvalid={(e) => {
                      const target = e.target as HTMLInputElement;
                      if (currentLang === "ar") {
                        target.setCustomValidity("يرجى ملء هذا الحقل.");
                      } else {
                        target.setCustomValidity("");
                      }
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.setCustomValidity("");
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0F58D5] focus:ring-2 focus:ring-[#0F58D5]/15 focus:outline-hidden font-medium transition-all"
                    placeholder={currentLang === "en" ? "Your Full Name" : "الاسم الكامل"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1.5">
                    {currentLang === "en" ? "Email Address" : "البريد الإلكتروني"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onInvalid={(e) => {
                      const target = e.target as HTMLInputElement;
                      if (currentLang === "ar") {
                        if (target.validity.valueMissing) {
                          target.setCustomValidity("يرجى ملء هذا الحقل.");
                        } else if (target.validity.typeMismatch) {
                          target.setCustomValidity("يرجى إدخال عنوان بريد إلكتروني صحيح.");
                        }
                      } else {
                        target.setCustomValidity("");
                      }
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.setCustomValidity("");
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0F58D5] focus:ring-2 focus:ring-[#0F58D5]/15 focus:outline-hidden font-medium transition-all"
                    placeholder={currentLang === "en" ? "name@example.com" : "name@example.com"}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1.5">
                    {currentLang === "en" ? "Mobile Number (Optional)" : "رقم الهاتف (اختياري)"}
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      const val = e.target.value
                        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
                        .replace(/[^0-9+]/g, "");
                      setFormData({ ...formData, mobile: val });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0F58D5] focus:ring-2 focus:ring-[#0F58D5]/15 focus:outline-hidden font-medium transition-all"
                    placeholder={currentLang === "en" ? "+971 50 000 0000" : "+971 50 000 0000"}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1.5">
                    {currentLang === "en" ? "Message / Inquiry" : "الرسالة / الاستفسار"}
                  </label>
                  <textarea
                    rows={5}
                    required
                    minLength={15}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onInvalid={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      if (currentLang === "ar") {
                        if (target.validity.valueMissing) {
                          target.setCustomValidity("يرجى ملء هذا الحقل.");
                        } else if (target.validity.tooShort) {
                          target.setCustomValidity(`يجب أن تحتوي الرسالة على 15 حرفاً على الأقل (حالياً ${formData.message.trim().length} حرفاً).`);
                        }
                      } else {
                        target.setCustomValidity("");
                      }
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.setCustomValidity("");
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-[#0F58D5]/15 focus:outline-hidden font-medium resize-none transition-all ${
                      formData.message.trim().length > 0 && formData.message.trim().length < 15
                        ? "border-amber-300 focus:border-amber-500 focus:ring-amber-500/15"
                        : "border-slate-200 focus:border-[#0F58D5]"
                    }`}
                    placeholder={currentLang === "en" ? "How can we help you? (Minimum 15 characters)" : "كيف يمكننا مساعدتك؟ (15 حرفاً على الأقل)"}
                  />
                </div>

                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
                    <p className="text-xs text-red-600 font-semibold leading-relaxed">
                      {submitError}
                    </p>
                    <a
                      href={loryfyConfig.whatsapp.chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4.5 h-4.5" />
                      <span>{currentLang === "en" ? "Contact on WhatsApp" : "تواصل عبر واتساب"}</span>
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-md shadow-[#0F58D5]/20 hover:shadow-lg transition-all cursor-pointer active:scale-98 ${
                    submitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {currentLang === "en" ? "Sending..." : "جاري الإرسال..."}
                    </span>
                  ) : (
                    currentLang === "en" ? "Send Message" : "إرسال الرسالة"
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeInUp>
      </div>
    </div>
  </div>
);
};

// 3. DOWNLOAD PAGE (Section 60)
export const DownloadPage: React.FC<SpecialPageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div
      id="download-campaign-page"
      className="bg-gradient-to-b from-[#F5F8FF] via-white to-white min-h-[calc(100vh-80px)] pt-4 pb-10 sm:py-16 flex items-center"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Download Information & Standard Store Buttons */}
          <FadeInUp className="lg:col-span-7 space-y-6 text-start">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
                {currentLang === "en" ? "Download Loryfy" : "حمّل لوريفاي"}
              </h1>
              <p className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-xl">
                {currentLang === "en"
                  ? "Discover running businesses, explore business ideas, and connect with potential partners and investors directly through the Loryfy app."
                  : "اكتشف المشاريع القائمة وأفكار المشاريع، وتواصل مع الشركاء والمستثمرين المحتملين مباشرة عبر تطبيق لوريفاي."}
              </p>
            </div>

            {/* Standard Download Store Badges / Buttons */}
            <div className="pt-2 space-y-3">
              <div className="text-xs font-bold text-[#101828] uppercase tracking-wider">
                {currentLang === "en" ? "Available on" : "متوفر على"}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Standard Apple App Store Button */}
                <button
                  id="download-apple-store-btn"
                  onClick={() => handleAppStoreClick("ios")}
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-slate-800 group active:scale-98"
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
                </button>

                {/* Standard Google Play Store Button */}
                <button
                  id="download-google-play-btn"
                  onClick={() => handleAppStoreClick("android")}
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-slate-800 group active:scale-98"
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
                </button>

                {/* Download via QR Code Button */}
                <QrDownloadButton
                  currentLang={currentLang}
                  variant="dark"
                  onClick={() => setIsQrModalOpen(true)}
                />
              </div>
            </div>
          </FadeInUp>

          {/* QR Code Modal Popup */}
          <QrDownloadModal
            isOpen={isQrModalOpen}
            onClose={() => setIsQrModalOpen(false)}
            currentLang={currentLang}
          />

          {/* Right Column: Mobile App Showcase */}
          <FadeInUp className="lg:col-span-5 flex justify-center items-center relative mt-2 sm:mt-0 py-1 sm:py-0">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 max-w-[240px] mx-auto bg-gradient-to-tr from-[#0F58D5]/20 to-[#17B3CD]/25 rounded-full blur-xl -z-10 pointer-events-none" />

            {/* Scaled down container matching HeroSection design */}
            <div className="relative z-10 w-full max-w-[190px] sm:max-w-[240px] lg:max-w-[255px] flex justify-center">
              <img
                src={getLocalizedImage(loryfyConfig.assets.mobileAppScreen, currentLang)}
                alt="Loryfy Mobile App Interface"
                width={255}
                height={510}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(15,88,213,0.22)] transition-transform duration-300 hover:scale-[1.01] aspect-[1/2]"
              />
            </div>
          </FadeInUp>

        </div>
      </div>
    </div>
  );
};

// 4. PUBLIC OPPORTUNITY DETAIL VIEW (Section 61-62)
export const OpportunityDetailPage: React.FC<SpecialPageProps> = ({
  currentLang,
  selectedOpportunitySlug,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const opportunity =
    sampleOpportunities.find((o) => o.slug === selectedOpportunitySlug) ||
    sampleOpportunities[0];

  return (
    <div id="public-opportunity-page" className="bg-gradient-to-b from-[#F5F9FF] via-white to-white min-h-screen pt-4 pb-16 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 text-start">
        {/* Back Link */}
        <button
          onClick={() => onNavigate("running-businesses-uae")}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F58D5] hover:text-[#17B3CD] transition-colors cursor-pointer"
        >
          <ArrowIcon className="w-4 h-4 rotate-180 rtl:rotate-0" />
          <span>{currentLang === "en" ? "Back to Opportunities" : "العودة إلى الفرص"}</span>
        </button>

        {/* Opportunity Card */}
        <FadeInUp>
          <div className="bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/40 p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-2xs space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/60 pb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F58D5]/10 border border-[#0F58D5]/20 text-xs sm:text-sm font-bold text-[#0F58D5] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#17B3CD]" />
                <span>{currentLang === "en" ? opportunity.categoryLabelEn : opportunity.categoryLabelAr}</span>
              </span>
              <span className="text-xs text-[#475467] font-medium">
                {currentLang === "en" ? `Updated: ${opportunity.updatedDate}` : `تم التحديث: ${opportunity.updatedDate}`}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
              {currentLang === "en" ? opportunity.titleEn : opportunity.titleAr}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-slate-200/60 shadow-2xs text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="text-[#475467] font-semibold">{currentLang === "en" ? "Location" : "الموقع"}</div>
                <div className="font-extrabold text-[#101828]">{currentLang === "en" ? opportunity.locationEn : opportunity.locationAr}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#475467] font-semibold">{currentLang === "en" ? "Opportunity Type" : "نوع الفرصة"}</div>
                <div className="font-extrabold text-[#101828]">{currentLang === "en" ? opportunity.opportunityTypeEn : opportunity.opportunityTypeAr}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#475467] font-semibold">{currentLang === "en" ? "Industry" : "القطاع"}</div>
                <div className="font-extrabold text-[#101828]">{currentLang === "en" ? opportunity.industryEn : opportunity.industryAr}</div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-extrabold text-[#101828]">
                {currentLang === "en" ? "Public Overview" : "نظرة عامة على الفرصة"}
              </h3>
              <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-medium">
                {currentLang === "en" ? opportunity.descriptionEn : opportunity.descriptionAr}
              </p>
            </div>

            {/* App Direct Action Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F58D5] via-[#0F58D5] to-[#17B3CD] text-white space-y-5 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 border border-white/20">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-lg sm:text-xl text-white">
                    {currentLang === "en" ? "Connect with the Owner" : "تواصل مباشرة مع صاحب الفرصة"}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    {currentLang === "en"
                      ? "Full business documentation, financials, and direct chat are available inside Loryfy."
                      : "المستندات الكاملة والبيانات والمحادثة المباشرة متوفرة عبر تطبيق لوريفاي."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate("download")}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-black text-sm text-[#0F58D5] bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-lg active:scale-98"
              >
                <Download className="w-4 h-4 text-[#0F58D5]" />
                <span>{currentLang === "en" ? "View Full Opportunity on Loryfy" : "استعراض الفرصة كاملة عبر لوريفاي"}</span>
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

// 5. TERMS & CONDITIONS
export const TermsPage: React.FC<SpecialPageProps> = ({ currentLang, onNavigate, isWebView = false }) => {
  const isRtl = currentLang === "ar";
  const ChevronBreadcrumb = isRtl ? ArrowLeft : ChevronRight;

  const termsEn = [
    {
      title: "Acceptance and Eligibility",
      bullets: [
        "By creating an account, accessing, or using Loryfy, users confirm that they have read, understood, and agreed to these Terms & Conditions and the Privacy Policy.",
        "Users must be at least 18 years old to create an account or use Loryfy.",
        "Users acting on behalf of a company, business, or legal entity confirm that they have the legal authority to represent and bind that entity."
      ]
    },
    {
      title: "User Accounts",
      bullets: [
        "Users must provide accurate, complete, and current account information.",
        "Users are responsible for maintaining the confidentiality and security of their account credentials and all activities conducted through their accounts.",
        "Users must immediately notify Loryfy of any unauthorized account access or suspected security incident.",
        "Loryfy may request additional information or documents to verify an account or listing."
      ]
    },
    {
      title: "Loryfy's Role",
      bullets: [
        "Loryfy is a technology marketplace and connection platform that allows users to publish listings, browse opportunities, and communicate with listing owners and interested users.",
        "Users may use Loryfy to discover existing businesses, business ideas, trade licenses, potential partners, investors, and other business opportunities.",
        "Loryfy's role is limited to providing the platform and communication tools that connect interested parties.",
        "Loryfy is not a buyer, seller, investor, partner, broker, agent, representative, financial adviser, investment adviser, consultant, guarantor, escrow provider, or party to any agreement or transaction between users."
      ]
    },
    {
      title: "No Investment or Professional Advice",
      bullets: [
        "Listings, information, content, communications, and opportunities available through Loryfy are provided by users and do not constitute investment, financial, legal, tax, commercial, or other professional advice from Loryfy.",
        "Loryfy does not recommend or endorse any business, investment, partnership, user, listing, or opportunity.",
        "Users are solely responsible for evaluating opportunities and making their own independent decisions.",
        "Users should obtain independent legal, financial, tax, or other professional advice where appropriate before making any commitment or entering into any agreement."
      ]
    },
    {
      title: "No Investment Solicitation or Fundraising by Loryfy",
      bullets: [
        "Loryfy does not itself solicit, arrange, execute, manage, recommend, or receive investments or funding on behalf of users.",
        "Users independently create listings, discover opportunities, communicate, negotiate, and decide whether to enter into any business, partnership, investment, or other arrangement.",
        "Loryfy does not collect, hold, transfer, safeguard, or manage investment funds or other money exchanged between users."
      ]
    },
    {
      title: "Listings and User Content",
      bullets: [
        "Users are solely responsible for all listings, information, descriptions, documents, images, messages, and other content they upload, publish, or communicate through Loryfy.",
        "All user content must be accurate, current, lawful, and not misleading or fraudulent.",
        "Users must have the necessary rights and authorization to publish any information, images, documents, trademarks, or other content they submit.",
        "Users must not publish content that violates intellectual-property rights, privacy rights, confidentiality obligations, applicable laws, or other third-party rights.",
        "Loryfy does not guarantee the ownership, legality, authenticity, accuracy, value, profitability, financial condition, licensing status, quality, or suitability of any user, listing, business, business idea, trade license, partner, investor, document, statement, or claim.",
        "Loryfy may review, reject, modify, hide, suspend, or remove listings or content where reasonably necessary for platform operation, safety, compliance, or enforcement of these Terms."
      ]
    },
    {
      title: "Verification",
      bullets: [
        "Loryfy may provide identity, business, or listing verification services.",
        "Where available, users may optionally provide identity documents, business documents, or other supporting information for verification purposes.",
        "Verification documents submitted privately for verification are not displayed publicly to other users unless the user separately chooses to publish information through a listing or profile.",
        "A Verified badge only indicates that certain information or documents were reviewed as part of Loryfy's verification process.",
        "A Verified badge does not constitute an endorsement or guarantee of a user's identity, reliability, ownership, authority, business legitimacy, financial condition, profitability, document authenticity, or transaction safety.",
        "Users remain responsible for conducting their own checks and due diligence."
      ]
    },
    {
      title: "Chat and Communication",
      bullets: [
        "The in-app chat is provided as a communication channel between interested users.",
        "Users are solely responsible for messages, information, documents, negotiations, offers, and agreements exchanged through the chat.",
        "Users must not use Loryfy or its chat for harassment, threats, abuse, spam, fraud, scams, phishing, impersonation, illegal activities, or malicious links or files.",
        "Users should not share passwords, one-time passwords, banking credentials, payment-card details, or other highly sensitive financial information through listings or chat.",
        "Users should exercise appropriate caution before sharing confidential business information or personal documents with another user.",
        "Loryfy is not responsible for information voluntarily shared between users or for communications and interactions occurring outside the platform, including phone calls, emails, WhatsApp, social media, video calls, or physical meetings."
      ]
    },
    {
      title: "Transactions Between Users",
      bullets: [
        "All negotiations, investments, partnerships, sales, purchases, transfers, payments, agreements, and transactions between users are conducted independently and directly between those users.",
        "Any agreement between a listing owner and another party is solely the responsibility of those parties.",
        "Loryfy is not a party to agreements or transactions between users.",
        "Loryfy does not receive, hold, transfer, safeguard, or act as an escrow provider for funds exchanged between users.",
        "Loryfy does not guarantee the performance, reliability, financial capability, intentions, or conduct of any user.",
        "Loryfy does not guarantee funding, investment, partnership, responses, leads, offers, profits, sales, purchases, or successful transactions.",
        "Any dispute arising from an agreement or transaction between users is between the relevant users, subject to applicable law."
      ]
    },
    {
      title: "User Due Diligence",
      bullets: [
        "Users are solely responsible for conducting appropriate due diligence before entering into any business, investment, partnership, purchase, sale, transfer, or other arrangement.",
        "Users should independently verify identities, businesses, trade licenses, ownership, authority, documents, financial information, claims, counterparties, and any other information relevant to their decision.",
        "Users are responsible for their own legal, financial, commercial, operational, tax, regulatory, and technical assessments.",
        "Users should obtain independent professional advice where appropriate before entering into an agreement or transferring money."
      ]
    },
    {
      title: "Payments for Loryfy Services",
      bullets: [
        "Payments made through Loryfy are only for services provided directly by Loryfy, including listing fees, subscriptions, packages, premium features, promotions, and other platform services.",
        "Payments may be securely processed through Stripe and may support bank cards, Apple Pay, Google Pay, and other payment methods made available from time to time.",
        "Loryfy does not directly store complete payment-card numbers or card-security codes where payment information is handled by the payment provider.",
        "Users must not use Loryfy's payment system to transfer, receive, hold, invest, or exchange money with another user.",
        "Any payment, investment, deposit, transfer, or exchange of funds between users occurs outside Loryfy and at the users' own responsibility and risk."
      ]
    },
    {
      title: "Subscriptions and Renewal",
      bullets: [
        "Loryfy may offer premium packages or subscription-based services that provide access to additional features.",
        "Applicable prices, subscription periods, and relevant conditions will be displayed before purchase.",
        "Where a subscription automatically renews, the applicable renewal terms will be communicated before purchase.",
        "Users may cancel future renewal through the subscription-management method made available for the applicable subscription.",
        "Cancellation of future renewal does not automatically entitle a user to a refund for a period already purchased or paid for, except where required by applicable law."
      ]
    },
    {
      title: "Refunds and Fees",
      bullets: [
        "Payments made to Loryfy are generally non-refundable, except where otherwise required by applicable law.",
        "A refund may be considered if a paid listing cannot be published due to a confirmed technical issue caused directly by Loryfy.",
        "Users are responsible for reviewing applicable prices and fees before making a payment.",
        "Loryfy may introduce, change, increase, reduce, suspend, or discontinue fees, packages, subscriptions, promotions, features, or services.",
        "Changes affecting an existing paid subscription will be handled in accordance with the applicable subscription terms and applicable law."
      ]
    },
    {
      title: "Prohibited Activities",
      bullets: [
        "Users must not publish fake, fraudulent, illegal, deceptive, or misleading listings or information.",
        "Users must not misrepresent their identity, authority, business, ownership, qualifications, financial position, or intentions.",
        "Fraud, scams, phishing, impersonation, spam, harassment, threats, and illegal activities are prohibited.",
        "Users must not infringe copyrights, trademarks, privacy rights, confidentiality obligations, intellectual-property rights, or other third-party rights.",
        "Users must not scrape, copy, extract, harvest, or systematically collect platform data without authorization.",
        "Users must not use bots, unauthorized automated systems, reverse engineering, hacking, malware, security circumvention, or unauthorized access methods.",
        "Users must not interfere with the operation or security of Loryfy or misuse any platform service or feature.",
        "Users must not use Loryfy for any activity prohibited by applicable law."
      ]
    },
    {
      title: "Reporting and Platform Safety",
      bullets: [
        "Users may report suspicious, fraudulent, misleading, inappropriate, or prohibited users, listings, messages, or content through available reporting or support channels.",
        "Loryfy may review reported activity and take reasonable action where appropriate.",
        "Such action may include requesting additional information, restricting functionality, removing content, suspending an account, or permanently terminating access.",
        "Loryfy's review or moderation of content does not constitute a guarantee that users, listings, or opportunities are legitimate, accurate, or safe."
      ]
    },
    {
      title: "Suspension and Termination",
      bullets: [
        "Loryfy may suspend, restrict, or permanently terminate accounts that violate these Terms, applicable laws, or platform policies.",
        "Loryfy may take action against accounts that publish misleading or prohibited content, misuse the platform, create security or fraud risks, or fail to provide information reasonably required for verification or compliance.",
        "Loryfy may remove listings or content without prior notice where reasonably necessary to protect users, the platform, legal rights, or comply with applicable law.",
        "Users remain responsible for obligations or liabilities arising from activities conducted before suspension or termination."
      ]
    },
    {
      title: "Platform Availability",
      bullets: [
        "Loryfy does not guarantee that the platform will always be available, uninterrupted, secure, or error-free.",
        "Loryfy may update, modify, suspend, discontinue, or remove features or services where reasonably necessary.",
        "Loryfy is not responsible for interruptions caused by maintenance, technical problems, internet or telecommunications failures, third-party providers, cyber incidents, force majeure events, or circumstances outside its reasonable control."
      ]
    },
    {
      title: "Disclaimer and Limitation of Liability",
      bullets: [
        "To the maximum extent permitted by applicable law, Loryfy is not responsible for inaccurate, misleading, fraudulent, unlawful, or incomplete listings or information provided by users.",
        "Loryfy is not responsible for the identity, conduct, reliability, actions, omissions, representations, or financial capability of users.",
        "Loryfy is not responsible for failed, unsuccessful, fraudulent, or disputed transactions, investments, partnerships, negotiations, or agreements between users.",
        "Loryfy does not guarantee any investment return, business result, profit, funding, partnership, sale, purchase, lead, opportunity, or other outcome.",
        "To the maximum extent permitted by applicable law, Loryfy will not be liable for indirect, incidental, special, consequential, opportunity, profit, business, data, financial, commercial, or reputational losses arising from user interactions or use of the platform.",
        "To the maximum extent permitted by applicable law, Loryfy's total liability for a claim relating to a paid Loryfy service will not exceed the amount paid by the user to Loryfy for the specific service giving rise to that claim.",
        "Nothing in these Terms excludes or limits any liability or right that cannot legally be excluded or limited under applicable law."
      ]
    },
    {
      title: "Indemnification",
      bullets: [
        "To the extent permitted by applicable law, users agree to indemnify and hold harmless Loryfy, its owners, directors, employees, affiliates, partners, and service providers from claims, liabilities, damages, losses, penalties, costs, or reasonable legal expenses arising from the user's misuse of the platform.",
        "This includes claims arising from user listings, content, communications, agreements, transactions, violations of these Terms, violations of applicable law, fraud, misconduct, or infringement of another party's rights."
      ]
    },
    {
      title: "Account and Data Deletion",
      bullets: [
        "Users may delete their account through the account-deletion functionality provided within the app.",
        "Account deletion may result in loss of access to the account, listings, and associated platform features.",
        "Certain information may be retained where required or permitted by applicable law, necessary for fraud prevention, security, dispute handling, enforcement of legal rights, or other legitimate purposes described in the Privacy Policy.",
        "Personal data will otherwise be handled in accordance with Loryfy's Privacy Policy and applicable data-protection requirements."
      ]
    },
    {
      title: "Changes to These Terms",
      bullets: [
        "Loryfy may update these Terms & Conditions from time to time.",
        "Updated Terms may be published within the app or communicated through another appropriate channel.",
        "Where required, users may be asked to review and accept materially updated Terms before continuing to use relevant services.",
        "Continued use of Loryfy following an update will be subject to applicable law and the updated Terms."
      ]
    },
    {
      title: "General Provisions",
      bullets: [
        "Failure by Loryfy to enforce a provision of these Terms does not constitute a waiver of its right to enforce that provision later.",
        "If any provision is found invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
        "If these Terms are provided in multiple languages and there is an inconsistency between versions, the English version will prevail to the extent permitted by applicable law."
      ]
    },
    {
      title: "Legal Status and Compliance",
      bullets: [
        "Loryfy is operated by a licensed business entity in the United Arab Emirates.",
        "Loryfy operates subject to the applicable laws and regulations of the United Arab Emirates.",
        "Nothing in these Terms permits a user to use Loryfy for an activity that requires a license, authorization, approval, or regulatory permission that the user does not possess."
      ]
    },
    {
      title: "Governing Law and Jurisdiction",
      bullets: [
        "These Terms & Conditions are governed by the applicable laws of the United Arab Emirates.",
        "Any dispute relating to these Terms or the use of Loryfy will be subject to the jurisdiction of the competent courts of the United Arab Emirates, subject to any mandatory legal requirements that apply."
      ]
    },
    {
      title: "Contact Us",
      bullets: [
        "For questions regarding these Terms & Conditions, users may contact Loryfy at info@loryfy.com."
      ]
    }
  ];

  const termsAr = [
    {
      title: "القبول والأهلية في لوريفاي (Loryfy)",
      bullets: [
        "بإنشاء حساب أو الدخول إلى لوريفاي أو استخدامه، يقر المستخدم بأنه قرأ هذه الشروط والأحكام وسياسة الخصوصية وفهمها ووافق عليها.",
        "يجب ألا يقل عمر المستخدم عن 18 عامًا لإنشاء حساب أو استخدام لوريفاي.",
        "إذا كان المستخدم يتصرف نيابةً عن شركة أو منشأة أو كيان قانوني، فإنه يقر بأن لديه الصلاحية القانونية اللازمة لتمثيل ذلك الكيان وإلزامه."
      ]
    },
    {
      title: "حسابات المستخدمين",
      bullets: [
        "يجب على المستخدمين تقديم معلومات صحيحة وكاملة ومحدثة عند إنشاء الحساب واستخدامه.",
        "يتحمل المستخدم مسؤولية الحفاظ على سرية وأمان بيانات الدخول إلى حسابه، وكذلك مسؤولية جميع الأنشطة التي تتم من خلال حسابه.",
        "يجب على المستخدم إبلاغ لوريفاي فورًا في حال اكتشاف أي دخول غير مصرح به إلى حسابه أو الاشتباه في أي حادث أمني.",
        "يحق للوريفاي طلب معلومات أو مستندات إضافية للتحقق من الحساب أو الإعلان."
      ]
    },
    {
      title: "دور لوريفاي (Loryfy)",
      bullets: [
        "لوريفاي منصة تقنية وسوق إلكتروني للتواصل، تتيح للمستخدمين نشر الإعلانات وتصفح الفرص والتواصل مع أصحاب الإعلانات والمستخدمين المهتمين.",
        "يمكن للمستخدمين استخدام لوريفاي لاكتشاف مشاريع قائمة وأفكار مشاريع ورخص تجارية وشركاء محتملين ومستثمرين وغيرها من فرص الأعمال.",
        "يقتصر دور لوريفاي على توفير المنصة وأدوات التواصل التي تساعد الأطراف المهتمة على التواصل فيما بينها.",
        "لوريفاي ليس مشتريًا أو بائعًا أو مستثمرًا أو شريكًا أو وسيطًا أو وكيلًا أو ممثلًا أو مستشارًا ماليًا أو استثماريًا أو تجاريًا أو ضامنًا أو مقدمًا لخدمات الضمان المالي، ولا يُعد طرفًا في أي اتفاق أو معاملة تتم بين المستخدمين."
      ]
    },
    {
      title: "عدم تقديم استشارات استثمارية أو مهنية",
      bullets: [
        "الإعلانات والمعلومات والمحتوى والمراسلات والفرص المتاحة عبر لوريفاي يقدمها المستخدمون، ولا تشكل استشارة أو توصية استثمارية أو مالية أو قانونية أو ضريبية أو تجارية أو مهنية من لوريفاي.",
        "لا يوصي لوريفاي بأي مشروع أو استثمار أو شراكة أو مستخدم أو إعلان أو فرصة، ولا يُعد عرض أي منها على المنصة تأييدًا لها.",
        "يتحمل المستخدم وحده مسؤولية تقييم الفرص واتخاذ قراراته بصورة مستقلة.",
        "ينبغي للمستخدم الحصول على استشارة قانونية أو مالية أو ضريبية أو مهنية مستقلة عند الحاجة قبل تقديم أي التزام أو الدخول في أي اتفاق."
      ]
    },
    {
      title: "عدم جمع الاستثمارات أو التمويل من قبل لوريفاي (Loryfy)",
      bullets: [
        "لا يقوم لوريفاي بنفسه بطلب أو ترتيب أو تنفيذ أو إدارة أو التوصية باستثمارات أو تمويل، ولا يستلم الأموال الاستثمارية نيابةً عن المستخدمين.",
        "يقوم المستخدمون بصورة مستقلة بإنشاء الإعلانات واكتشاف الفرص والتواصل والتفاوض واتخاذ القرار بشأن الدخول في أي مشروع أو شراكة أو استثمار أو اتفاق آخر.",
        "لا يقوم لوريفاي بجمع أو الاحتفاظ أو تحويل أو حماية أو إدارة أموال الاستثمارات أو أي أموال يتم تبادلها بين المستخدمين."
      ]
    },
    {
      title: "الإعلانات ومحتوى المستخدم",
      bullets: [
        "يتحمل المستخدم وحده مسؤولية جميع الإعلانات والمعلومات والأوصاف والمستندات والصور والرسائل وأي محتوى آخر يقوم برفعه أو نشره أو مشاركته عبر لوريفاي.",
        "يجب أن يكون جميع المحتوى المقدم من المستخدم صحيحًا ومحدثًا وقانونيًا وغير مضلل أو احتيالي.",
        "يجب أن يمتلك المستخدم الحقوق والصلاحيات اللازمة لنشر أي معلومات أو صور أو مستندات أو علامات تجارية أو أي محتوى آخر يقدمه.",
        "يُحظر نشر أي محتوى ينتهك حقوق الملكية الفكرية أو الخصوصية أو التزامات السرية أو القوانين المعمول بها أو حقوق أي طرف آخر.",
        "لا يضمن لوريفاي ملكية أو قانونية أو أصالة أو دقة أو قيمة أو ربحية أو وضع مالي أو حالة الترخيص أو جودة أو ملاءمة أي مستخدم أو إعلان أو مشروع أو فكرة مشروع أو رخصة تجارية أو شريك أو مستثمر أو مستند أو بيان أو ادعاء.",
        "يحق للوريفاي مراجعة الإعلانات أو المحتوى أو رفضه أو تعديله أو إخفاؤه أو تعليقه أو إزالته عندما يكون ذلك ضروريًا بشكل معقول لتشغيل المنصة أو السلامة أو الامتثال أو تطبيق هذه الشروط."
      ]
    },
    {
      title: "التحقق",
      bullets: [
        "قد يوفر لوريفاي خدمات للتحقق من الهوية أو المشروع أو الإعلان.",
        "حيثما تتوفر هذه الخدمة، يمكن للمستخدمين تقديم مستندات الهوية أو مستندات الأعمال أو غيرها من المعلومات الداعمة بشكل اختياري لأغراض التحقق.",
        "المستندات التي يتم تقديمها بشكل خاص لأغراض التحقق لا يتم عرضها علنًا للمستخدمين الآخرين، ما لم يقرر المستخدم بشكل منفصل نشر معلومات منها ضمن إعلانه أو ملفه الشخصي.",
        "تشير علامة \"موثّق\" فقط إلى أنه تمت مراجعة معلومات أو مستندات معينة كجزء من إجراءات التحقق لدى لوريفاي.",
        "لا تمثل علامة \"موثّق\" تأييدًا أو ضمانًا لهوية المستخدم أو موثوقيته أو ملكيته أو صلاحياته أو قانونية مشروعه أو وضعه المالي أو ربحيته أو أصالة مستنداته أو سلامة أي معاملة معه.",
        "يبقى المستخدم مسؤولًا عن إجراء عمليات التحقق والعناية الواجبة الخاصة به."
      ]
    },
    {
      title: "المحادثات والتواصل",
      bullets: [
        "توفّر المحادثة داخل التطبيق كوسيلة للتواصل بين المستخدمين المهتمين.",
        "يتحمل المستخدمون وحدهم مسؤولية الرسائل والمعلومات والمستندات والمفاوضات والعروض والاتفاقات التي يتم تبادلها من خلال المحادثة.",
        "يُحظر استخدام لوريفاي أو المحادثة للمضايقة أو التهديد أو الإساءة أو الرسائل المزعجة أو الاحتيال أو التصيد الإلكتروني أو انتحال الشخصية أو الأنشطة غير القانونية أو إرسال روابط أو ملفات ضارة.",
        "ينبغي للمستخدمين عدم مشاركة كلمات المرور أو رموز التحقق لمرة واحدة أو بيانات الدخول المصرفية أو تفاصيل بطاقات الدفع أو غيرها من المعلومات المالية شديدة الحساسية من خلال الإعلانات أو المحادثة.",
        "ينبغي للمستخدم توخي الحذر المناسب قبل مشاركة معلومات تجارية سرية أو مستندات شخصية مع مستخدم آخر.",
        "لا يتحمل لوريفاي مسؤولية المعلومات التي يشاركها المستخدمون طوعًا فيما بينهم، أو الاتصالات والتفاعلات التي تتم خارج المنصة، بما في ذلك المكالمات الهاتفية أو البريد الإلكتروني أو واتساب أو وسائل التواصل الاجتماعي أو مكالمات الفيديو أو اللقاءات الشخصية."
      ]
    },
    {
      title: "المعاملات بين المستخدمين",
      bullets: [
        "تتم جميع المفاوضات والاستثمارات والشراكات وعمليات البيع والشراء والتحويلات والمدفوعات والاتفاقات والمعاملات بين المستخدمين بصورة مستقلة ومباشرة بين الأطراف المعنية.",
        "يكون أي اتفاق بين صاحب الإعلان وأي طرف آخر مسؤولية تلك الأطراف وحدها.",
        "لوريفاي ليس طرفًا في أي اتفاق أو معاملة تتم بين المستخدمين.",
        "لا يقوم لوريفاي باستلام أو الاحتفاظ أو تحويل أو حماية الأموال المتبادلة بين المستخدمين، ولا يعمل كجهة ضمان مالي لهذه الأموال.",
        "لا يضمن لوريفاي أداء أي مستخدم أو موثوقيته أو قدرته المالية أو نواياه أو سلوكه.",
        "لا يضمن لوريفاي الحصول على تمويل أو استثمار أو شراكة أو ردود أو عملاء محتملين أو عروض أو أرباح أو عمليات بيع أو شراء أو نجاح أي معاملة.",
        "أي نزاع ينشأ عن اتفاق أو معاملة بين المستخدمين يكون بين الأطراف المعنية، وفقًا للقوانين المعمول بها."
      ]
    },
    {
      title: "العناية الواجبة من قبل المستخدم",
      bullets: [
        "يتحمل المستخدم وحده مسؤولية إجراء العناية الواجبة والتحقق المناسب قبل الدخول في أي مشروع أو استثمار أو شراكة أو شراء أو بيع أو تحويل أو أي اتفاق آخر.",
        "ينبغي للمستخدم التحقق بشكل مستقل من الهوية والمشاريع والرخص التجارية والملكية والصلاحيات والمستندات والمعلومات المالية والادعاءات والأطراف المقابلة وأي معلومات أخرى ذات صلة بقراره.",
        "يتحمل المستخدم مسؤولية تقييم الجوانب القانونية والمالية والتجارية والتشغيلية والضريبية والتنظيمية والتقنية المتعلقة بقراراته.",
        "ينبغي للمستخدم الحصول على استشارة مهنية مستقلة عند الحاجة قبل الدخول في أي اتفاق أو تحويل أي أموال."
      ]
    },
    {
      title: "المدفوعات مقابل خدمات لوريفاي (Loryfy)",
      bullets: [
        "المدفوعات التي تتم من خلال لوريفاي مخصصة فقط للخدمات التي يقدمها لوريفاي مباشرة، بما في ذلك رسوم نشر الإعلانات والاشتراكات والباقات والمزايا المميزة والترويج وغيرها من خدمات المنصة.",
        "قد تتم معالجة المدفوعات بشكل آمن عبر Stripe، وقد تشمل طرق الدفع المدعومة البطاقات البنكية وApple Pay وGoogle Pay وغيرها من وسائل الدفع التي قد تتوفر من وقت لآخر.",
        "لا يقوم لوريفاي بتخزين أرقام بطاقات الدفع الكاملة أو رموز الأمان الخاصة بالبطاقات عندما تتم معالجة بيانات الدفع بواسطة مزود خدمة الدفع.",
        "لا يجوز استخدام نظام الدفع الخاص بلوريفاي لتحويل أو استلام أو الاحتفاظ أو استثمار أو تبادل الأموال مع مستخدم آخر.",
        "أي دفعة أو استثمار أو إيداع أو تحويل أو تبادل للأموال بين المستخدمين يتم خارج لوريفاي وعلى مسؤولية ومخاطر المستخدمين أنفسهم."
      ]
    },
    {
      title: "الاشتراكات والتجديد",
      bullets: [
        "قد يوفر لوريفاي باقات مميزة أو خدمات قائمة على الاشتراك تمنح المستخدم إمكانية الوصول إلى مزايا إضافية.",
        "يتم عرض الأسعار وفترات الاشتراك والشروط ذات الصلة قبل إتمام عملية الشراء.",
        "إذا كان الاشتراك يتجدد تلقائيًا، يتم توضيح شروط التجديد المعمول بها للمستخدم قبل الشراء.",
        "يمكن للمستخدم إلغاء التجديد المستقبلي من خلال وسيلة إدارة الاشتراك المتاحة للاشتراك المعني.",
        "لا يمنح إلغاء التجديد المستقبلي المستخدم تلقائيًا الحق في استرداد المبلغ المدفوع عن فترة تم شراؤها أو دفع قيمتها بالفعل، إلا إذا كان القانون المعمول به يتطلب خلاف ذلك."
      ]
    },
    {
      title: "الرسوم واسترداد المدفوعات",
      bullets: [
        "المدفوعات التي تتم إلى لوريفاي غير قابلة للاسترداد بشكل عام، إلا إذا كان القانون المعمول به يتطلب خلاف ذلك.",
        "يمكن النظر في استرداد المبلغ إذا تعذر نشر إعلان مدفوع بسبب مشكلة تقنية مؤكدة ناتجة مباشرة عن لوريفاي.",
        "يتحمل المستخدم مسؤولية مراجعة الأسعار والرسوم المطبقة قبل إجراء أي عملية دفع.",
        "يحق للوريفاي تقديم أو تغيير أو زيادة أو تخفيض أو تعليق أو إيقاف الرسوم أو الباقات أو الاشتراكات أو العروض الترويجية أو المزايا أو الخدمات.",
        "تتم معالجة أي تغييرات تؤثر على اشتراك مدفوع قائم وفقًا لشروط الاشتراك المعمول بها والقوانين المطبقة."
      ]
    },
    {
      title: "الأنشطة المحظورة",
      bullets: [
        "يُحظر نشر إعلانات أو معلومات مزيفة أو احتيالية أو غير قانونية أو خادعة أو مضللة.",
        "يُحظر تقديم معلومات مضللة عن الهوية أو الصلاحيات أو المشروع أو الملكية أو المؤهلات أو الوضع المالي أو النوايا.",
        "يُحظر الاحتيال والنصب والتصيد الإلكتروني وانتحال الشخصية والرسائل المزعجة والمضايقة والتهديد والأنشطة غير القانونية.",
        "يُحظر انتهاك حقوق النشر أو العلامات التجارية أو الخصوصية أو التزامات السرية أو حقوق الملكية الفكرية أو حقوق أي طرف آخر.",
        "يُحظر استخراج أو نسخ أو جمع بيانات المنصة بشكل منهجي دون تصريح.",
        "يُحظر استخدام الروبوتات أو الأنظمة الآلية غير المصرح بها أو الهندسة العكسية أو الاختراق أو البرمجيات الضارة أو تجاوز إجراءات الأمان أو أي وسيلة دخول غير مصرح بها.",
        "يُحظر التدخل في تشغيل أو أمان لوريفاي أو إساءة استخدام أي خدمة أو ميزة في المنصة.",
        "يُحظر استخدام لوريفاي في أي نشاط مخالف للقوانين المعمول بها."
      ]
    },
    {
      title: "الإبلاغ وسلامة المنصة",
      bullets: [
        "يمكن للمستخدمين الإبلاغ عن المستخدمين أو الإعلانات أو الرسائل أو المحتوى المشتبه به أو الاحتيالي أو المضلل أو غير المناسب أو المحظور من خلال وسائل الإبلاغ أو الدعم المتاحة.",
        "يحق للوريفاي مراجعة الأنشطة التي يتم الإبلاغ عنها واتخاذ الإجراءات المناسبة عند الحاجة.",
        "قد تشمل هذه الإجراءات طلب معلومات إضافية أو تقييد بعض الوظائف أو إزالة المحتوى أو تعليق الحساب أو إنهاء الوصول إلى المنصة بشكل دائم.",
        "لا تعني مراجعة لوريفاي أو إشرافه على المحتوى ضمان أن المستخدمين أو الإعلانات أو الفرص مشروعة أو دقيقة أو آمنة."
      ]
    },
    {
      title: "تعليق الحساب وإنهاؤه",
      bullets: [
        "يحق للوريفاي تعليق أو تقييد أو إنهاء أي حساب بشكل دائم إذا خالف هذه الشروط أو القوانين المعمول بها أو سياسات المنصة.",
        "يحق للوريفاي اتخاذ إجراءات ضد الحسابات التي تنشر محتوى مضللًا أو محظورًا، أو تسيء استخدام المنصة، أو تشكل مخاطر أمنية أو احتيالية، أو لا تقدم المعلومات المطلوبة بشكل معقول لأغراض التحقق أو الامتثال.",
        "يحق للوريفاي إزالة الإعلانات أو المحتوى دون إشعار مسبق عندما يكون ذلك ضروريًا بشكل معقول لحماية المستخدمين أو المنصة أو الحقوق القانونية أو للامتثال للقانون.",
        "يبقى المستخدم مسؤولًا عن أي التزامات أو مسؤوليات نشأت عن أنشطته قبل تعليق الحساب أو إنهائه."
      ]
    },
    {
      title: "توفر المنصة",
      bullets: [
        "لا يضمن لوريفاي أن تكون المنصة متاحة دائمًا أو دون انقطاع أو خالية من الأخطاء أو المخاطر الأمنية.",
        "يحق للوريفاي تحديث أو تعديل أو تعليق أو إيقاف أو إزالة أي ميزة أو خدمة عند الحاجة بشكل معقول.",
        "لا يتحمل لوريفاي مسؤولية الانقطاعات الناتجة عن الصيانة أو المشكلات التقنية أو أعطال الإنترنت أو الاتصالات أو مزودي الخدمات الخارجيين أو الحوادث السيبرانية أو القوة القاهرة أو الظروف الخارجة عن سيطرته المعقولة."
      ]
    },
    {
      title: "إخلاء المسؤولية وتحديدها",
      bullets: [
        "إلى أقصى حد يسمح به القانون المعمول به، لا يتحمل لوريفاي مسؤولية الإعلانات أو المعلومات غير الدقيقة أو المضللة أو الاحتيالية أو غير القانونية أو غير المكتملة التي يقدمها المستخدمون.",
        "لا يتحمل لوريفاي مسؤولية هوية المستخدمين أو سلوكهم أو موثوقيتهم أو أفعالهم أو امتناعهم عن التصرف أو ادعاءاتهم أو قدراتهم المالية.",
        "لا يتحمل لوريفاي مسؤولية المعاملات أو الاستثمارات أو الشراكات أو المفاوضات أو الاتفاقات الفاشلة أو غير الناجحة أو الاحتيالية أو المتنازع عليها بين المستخدمين.",
        "لا يضمن لوريفاي أي عائد استثماري أو نتيجة تجارية أو ربح أو تمويل أو شراكة أو بيع أو شراء أو فرصة أو أي نتيجة أخرى.",
        "إلى أقصى حد يسمح به القانون المعمول به، لا يتحمل لوريفاي مسؤولية الخسائر غير المباشرة أو العرضية أو الخاصة أو التبعية أو خسارة الفرص أو الأرباح أو الأعمال أو البيانات أو الخسائر المالية أو التجارية أو المتعلقة بالسمعة الناتجة عن استخدام المنصة أو التفاعل بين المستخدمين.",
        "إلى أقصى حد يسمح به القانون المعمول به، لا تتجاوز المسؤولية الإجمالية للوريفاي عن أي مطالبة تتعلق بخدمة مدفوعة المبلغ الذي دفعه المستخدم للوريفاي مقابل الخدمة المحددة التي نشأت عنها المطالبة.",
        "لا يستبعد أي نص في هذه الشروط أو يحد من أي مسؤولية أو حق لا يجوز قانونًا استبعاده أو تقييده."
      ]
    },
    {
      title: "التعويض",
      bullets: [
        "بالقدر الذي يسمح به القانون المعمول به، يوافق المستخدم على تعويض لوريفاي ومالكيه ومديريه وموظفيه والشركات التابعة له وشركائه ومزودي خدماته عن المطالبات أو المسؤوليات أو الأضرار أو الخسائر أو الغرامات أو التكاليف أو المصاريف القانونية المعقولة الناتجة عن إساءة المستخدم لاستخدام المنصة.",
        "يشمل ذلك المطالبات الناتجة عن إعلانات المستخدم أو محتواه أو مراسلاته أو اتفاقاته أو معاملاته أو مخالفته لهذه الشروط أو للقانون المعمول به أو ارتكابه للاحتيال أو سوء السلوك أو انتهاكه لحقوق طرف آخر."
      ]
    },
    {
      title: "حذف الحساب والبيانات",
      bullets: [
        "يمكن للمستخدم حذف حسابه من خلال خاصية حذف الحساب المتاحة داخل التطبيق.",
        "قد يؤدي حذف الحساب إلى فقدان إمكانية الوصول إلى الحساب والإعلانات والمزايا المرتبطة به.",
        "قد يتم الاحتفاظ ببعض المعلومات عندما يكون ذلك مطلوبًا أو مسموحًا به بموجب القانون، أو ضروريًا لمنع الاحتيال أو لأغراض الأمان أو معالجة النزاعات أو حماية الحقوق القانونية أو للأغراض المشروعة الأخرى الموضحة في سياسة الخصوصية.",
        "تُعالجة البيانات الشخصية الأخرى وفقًا لسياسة الخصوصية الخاصة بلوريفاي ومتطلبات حماية البيانات المعمول بها."
      ]
    },
    {
      title: "التغييرات على الشروط والأحكام",
      bullets: [
        "يحق للوريفاي تحديث هذه الشروط والأحكام من وقت لآخر.",
        "قد يتم نشر الشروط المحدثة داخل التطبيق أو إبلاغ المستخدمين بها من خلال وسيلة مناسبة أخرى.",
        "عند الحاجة، قد يُطلب من المستخدم مراجعة التغييرات الجوهرية والموافقة عليها قبل الاستمرار في استخدام الخدمات ذات الصلة.",
        "يخضع استمرار استخدام لوريفاي بعد تحديث الشروط للقوانين المعمول بها والشروط المحدثة."
      ]
    },
    {
      title: "أحكام عامة",
      bullets: [
        "عدم قيام لوريفاي بتطبيق أي بند من هذه الشروط في وقت معين لا يعني تنازله عن حقه في تطبيقه لاحقًا.",
        "إذا تبين أن أي بند غير صالح أو غير قابل للتنفيذ، تبقى الأحكام الأخرى سارية بالقدر الذي يسمح به القانون.",
        "إذا توفرت هذه الشروط بأكثر من لغة ووجد تعارض بين النسخ، تكون النسخة الإنجليزية هي المرجع بالقدر الذي يسمح به القانون المعمول به."
      ]
    },
    {
      title: "الوضع القانوني والامتثال للوريفاي (Loryfy)",
      bullets: [
        "يتم تشغيل لوريفاي من خلال كيان تجاري مرخص في دولة الإمارات العربية المتحدة.",
        "يعمل لوريفاي وفقًا للقوانين واللوائح المعمول بها في دولة الإمارات العربية المتحدة.",
        "لا يسمح أي نص في هذه الشروط للمستخدم باستخدام لوريفاي لممارسة نشاط يتطلب ترخيصًا أو تصريحًا أو موافقة تنظيمية لا يمتلكها المستخدم."
      ]
    },
    {
      title: "القانون الحاكم والاختصاص القضائي",
      bullets: [
        "تخضع هذه الشروط والأحكام للقوانين المعمول بها في دولة الإمارات العربية المتحدة.",
        "تخضع أي منازعة تتعلق بهذه الشروط أو باستخدام لوريفاي لاختصاص المحاكم المختصة في دولة الإمارات العربية المتحدة، مع مراعاة أي متطلبات قانونية إلزامية واجبة التطبيق."
      ]
    },
    {
      title: "تواصل معنا",
      bullets: [
        "للاستفسارات المتعلقة بهذه الشروط والأحكام، يمكن للمستخدم التواصل مع لوريفاي عبر البريد الإلكتروني info@loryfy.com."
      ]
    }
  ];

  const currentTerms = isRtl ? termsAr : termsEn;

  return (
    <div
      id="terms-page"
      className={
        isWebView
          ? "bg-white min-h-screen py-2 px-2"
          : "bg-[#F8FAFC] min-h-screen py-8 sm:py-12"
      }
    >
      <div
        className={
          isWebView
            ? "max-w-4xl mx-auto space-y-4 text-start"
            : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-start"
        }
      >
        {/* Simple Breadcrumb */}
        {!isWebView && (
          <nav aria-label="Breadcrumb" className="hidden sm:flex text-xs sm:text-sm text-[#475467] items-center gap-2">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-[#0F58D5] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Home" : "الرئيسية"}
            </button>
            <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#101828]">
              {currentLang === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
            </span>
          </nav>
        )}

        {/* Standard White Document Container */}
        <FadeInUp>
          <article
            className={
              isWebView
                ? "bg-white p-2 sm:p-4 space-y-6"
                : "bg-white rounded-2xl border border-slate-200 shadow-2xs p-6 sm:p-10 lg:p-12 space-y-8"
            }
          >
            
            {/* Header */}
            <header className="border-b border-slate-100 pb-4 space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-[#101828]">
                {currentLang === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
              </h1>
              <p className="text-[11px] sm:text-xs text-[#64748B]">
                {currentLang === "en" ? "Last updated: 2026 • UAE Jurisdiction" : "آخر تحديث: 2026 • دولة الإمارات العربية المتحدة"}
              </p>
            </header>

            {/* Sections */}
            <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
              {currentTerms.map((sec, idx) => (
                <section key={idx} className="space-y-2">
                  <h2 className="text-sm sm:text-base font-bold text-[#101828]">
                    {idx + 1}. {sec.title}
                  </h2>
                  <ul className="space-y-1.5 pl-4 sm:pl-6 list-disc marker:text-[#0F58D5]">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Footer Back Link */}
            {!isWebView && (
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate("home")}
                  className="text-xs sm:text-sm font-semibold text-[#0F58D5] hover:underline cursor-pointer"
                >
                  {currentLang === "en" ? "← Back to Home" : "← العودة إلى الرئيسية"}
                </button>
                <button
                  onClick={() => onNavigate("privacy")}
                  className="text-xs sm:text-sm text-[#64748B] hover:text-[#0F58D5] hover:underline cursor-pointer"
                >
                  {currentLang === "en" ? "View Privacy Policy →" : "سياسة الخصوصية ←"}
                </button>
              </div>
            )}

          </article>
        </FadeInUp>
      </div>
    </div>
  );
};

// 6. PRIVACY POLICY
export const PrivacyPage: React.FC<SpecialPageProps> = ({ currentLang, onNavigate, isWebView = false }) => {
  const isRtl = currentLang === "ar";
  const ChevronBreadcrumb = isRtl ? ArrowLeft : ChevronRight;

  const privacyEn = [
    {
      title: "Loryfy Privacy Policy",
      bullets: [
        "This Privacy Policy explains how Loryfy collects, uses, processes, shares, retains, and protects users' personal data and information when they use the app and its services.",
        "By using Loryfy and accepting this Privacy Policy, users acknowledge that they have read and understood it.",
        "Personal data is handled in accordance with the applicable laws and regulations of the United Arab Emirates."
      ]
    },
    {
      title: "Information We Collect",
      bullets: [
        "Loryfy may collect information provided by users when creating an account or using the app, including name, username, country, and phone number.",
        "Loryfy may collect an email address if the user chooses to add one to their account.",
        "Information may also include a profile picture if the user chooses to add one.",
        "Loryfy collects information and content provided by users when creating listings or using the app's services."
      ]
    },
    {
      title: "Listings and Content",
      bullets: [
        "Loryfy collects and processes information users add to their listings, including listing descriptions, images, information relating to the business or opportunity, and other content provided by the user.",
        "Users understand that information they choose to publish in a listing or public profile may be visible to other users of the app.",
        "Users should avoid publishing personal or confidential information that they do not wish to make available to others."
      ]
    },
    {
      title: "Verification Documents",
      bullets: [
        "Loryfy may allow users to optionally provide documents for verification purposes, such as identity documents, business documents, or other supporting documents.",
        "These documents may be used for verification, security, prevention of platform misuse, and other legitimate purposes related to providing the service.",
        "Documents submitted privately for verification are not displayed publicly to other users unless the user separately chooses to publish information from them.",
        "Access to verification documents is limited to parties or service providers that require access to provide the relevant service or for legitimate legal or security purposes, as necessary."
      ]
    },
    {
      title: "Chats and Communication",
      bullets: [
        "Loryfy processes and stores messages and content exchanged through the in-app chat service to the extent necessary to provide the chat service and operate the platform.",
        "Chats may be processed where necessary for security, fraud and abuse prevention, investigation of reports, enforcement of Loryfy's Terms & Conditions, or compliance with legal requirements.",
        "Users are responsible for personal or business information they voluntarily choose to share with other users.",
        "Users should not share passwords, verification codes, bank card details, or other highly sensitive financial information through the chat."
      ]
    },
    {
      title: "How We Use Information",
      bullets: [
        "Loryfy uses information to create and manage user accounts, operate the app, and provide its services.",
        "Information is used to publish and manage listings and enable users to discover opportunities and communicate with each other.",
        "Information may be used to verify accounts or listings when verification services are used.",
        "Information may be used to provide user support, respond to inquiries, and resolve issues.",
        "Data may be used to protect users and the platform and to detect, investigate, and prevent fraud, misuse, or prohibited activities.",
        "Information may be used to improve the app's performance, services, and user experience.",
        "Information may be processed where necessary to comply with applicable legal and regulatory obligations."
      ]
    },
    {
      title: "Preferences and App Usage",
      bullets: [
        "Loryfy may collect information about how users interact with the app, such as listings they view or interact with, searches, clicks, and features used.",
        "Loryfy may use this information, together with preferences selected by users, to understand their interests and improve their experience within the app.",
        "This information may be used to personalize content, recommendations, and notifications that may be more relevant to users' interests, subject to available settings, choices, and applicable laws."
      ]
    },
    {
      title: "Payments",
      bullets: [
        "Payments for Loryfy services are processed through payment service providers such as Stripe and may support bank cards, Apple Pay, Google Pay, and other available payment methods.",
        "When payment services are used, information necessary to complete the transaction may be shared with the payment service provider.",
        "Loryfy does not store complete payment card numbers or card security codes where such data is processed by the payment service provider.",
        "Loryfy may retain transaction-related information, such as the payment amount, service purchased, transaction status, and transaction reference, where necessary for payment administration, records, and support."
      ]
    },
    {
      title: "Notifications and Communications",
      bullets: [
        "Loryfy may send notifications relating to accounts, listings, chats, payments, subscriptions, security, or services used by the user.",
        "Loryfy may send verification codes and other communications necessary to operate and secure user accounts.",
        "If a user adds an email address to their account, Loryfy may use it to send receipts, notifications, or service-related communications.",
        "Personalized notifications or content may be sent based on users' preferences, interests, and interactions with the app, subject to available choices and applicable laws."
      ]
    },
    {
      title: "Sharing of Information",
      bullets: [
        "Loryfy does not sell users' personal data.",
        "Data may be shared, to the extent necessary, with service providers that assist in operating the app, such as hosting, payment, verification, communication, notification, analytics, support, and technical service providers.",
        "Information may be shared where required by law or in response to a lawful request from a competent authority.",
        "Information may be shared where necessary to protect Loryfy's or users' rights or to investigate fraud, misuse, or security risks, in accordance with applicable law.",
        "Service providers are required to handle information in accordance with the contractual and legal requirements applicable to them."
      ]
    },
    {
      title: "Technical and Usage Data",
      bullets: [
        "Loryfy may collect certain technical information when the app is used, such as device type, operating system, IP address, device or app identifiers, usage data, error logs, and similar technical information, depending on what is actually collected through the app or its service providers.",
        "This information may be used to operate the app, improve performance, resolve errors, protect the platform, and prevent fraud or misuse."
      ]
    },
    {
      title: "Data Security",
      bullets: [
        "Loryfy takes reasonable and appropriate technical and organizational measures to protect personal data against unauthorized access, use, alteration, disclosure, or loss.",
        "No electronic method of storing or transmitting data can be guaranteed to be completely secure, and therefore complete protection against all security risks cannot be guaranteed.",
        "Users are also responsible for protecting their accounts and login credentials and for not sharing them with others."
      ]
    },
    {
      title: "Data Retention",
      bullets: [
        "Loryfy retains personal data for as long as necessary to provide its services, operate user accounts, and fulfill the purposes described in this Privacy Policy.",
        "Certain information may be retained for longer where required or permitted by law or for accounting, fraud prevention, security, dispute resolution, or enforcement of legal rights and obligations.",
        "When data is no longer required, it may be deleted or anonymized in accordance with applicable legal requirements and procedures."
      ]
    },
    {
      title: "Account and Data Deletion",
      bullets: [
        "Users may request deletion of their account through the account deletion functionality available within the app.",
        "Account deletion will result in the removal or deletion of associated data in accordance with Loryfy's data retention practices and applicable legal requirements.",
        "Loryfy may retain certain information after account deletion where retention is required or permitted by law or is necessary for security, fraud prevention, dispute resolution, or protection of legal rights.",
        "Account deletion may not delete information that a user has already shared with other users outside Loryfy's control."
      ]
    },
    {
      title: "User Rights",
      bullets: [
        "Users may update and correct certain account information through the options available within the app.",
        "Users may request access to, correction of, or deletion of their personal data or exercise other rights available to them under applicable law.",
        "Loryfy may need to verify a user's identity before processing certain requests relating to personal data.",
        "Users may contact Loryfy regarding privacy-related requests at info@loryfy.com."
      ]
    },
    {
      title: "Users Under 18",
      bullets: [
        "Loryfy is intended for users who are 18 years of age or older.",
        "Individuals under the age of 18 are not permitted to create an account or use Loryfy's services.",
        "If Loryfy becomes aware that personal data relating to an individual below the permitted age has been collected in violation of this policy, appropriate steps may be taken to delete or otherwise handle such data in accordance with applicable law."
      ]
    },
    {
      title: "Data Processing and Transfers",
      bullets: [
        "Some data may be processed or stored by Loryfy or its service providers inside or outside the United Arab Emirates, depending on the locations of the technical infrastructure and service providers used.",
        "Where personal data is transferred across borders, Loryfy takes measures required under applicable data protection laws to ensure an appropriate level of protection."
      ]
    },
    {
      title: "Loryfy Legal Status and Compliance",
      bullets: [
        "Loryfy is operated by a licensed business entity in the United Arab Emirates.",
        "Personal data is processed in accordance with the applicable laws and regulations of the United Arab Emirates, including data protection and privacy requirements applicable to Loryfy."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      bullets: [
        "Loryfy may update this Privacy Policy from time to time to reflect changes in its services, practices, or legal and regulatory requirements.",
        "The updated Privacy Policy may be published within the app or communicated to users through another appropriate channel.",
        "Where changes are material or user consent is required by law, users may be asked to review and accept the updated Privacy Policy."
      ]
    },
    {
      title: "Contact Us",
      bullets: [
        "For questions or requests relating to privacy or personal data, users may contact Loryfy at info@loryfy.com."
      ]
    }
  ];

  const privacyAr = [
    {
      title: "سياسة خصوصية لوريفاي (Loryfy)",
      bullets: [
        "توضح سياسة الخصوصية هذه كيفية جمع لوريفاي للبيانات الشخصية والمعلومات المتعلقة بالمستخدمين واستخدامها ومعالجتها ومشاركتها والاحتفاظ بها وحمايتها عند استخدام التطبيق وخدماته.",
        "باستخدام لوريفاي والموافقة على سياسة الخصوصية هذه، يقر المستخدم بأنه قرأها وفهمها.",
        "يتم التعامل مع البيانات الشخصية وفقًا للقوانين واللوائح المعمول بها في دولة الإمارات العربية المتحدة."
      ]
    },
    {
      title: "المعلومات التي نجمعها",
      bullets: [
        "قد يجمع لوريفاي المعلومات التي يقدمها المستخدم عند إنشاء الحساب أو استخدام التطبيق، بما في ذلك الاسم واسم المستخدم والدولة ورقم الهاتف.",
        "قد يجمع لوريفاي عنوان البريد الإلكتروني إذا اختار المستخدم إضافته إلى حسابه.",
        "قد تشمل المعلومات أيضًا صورة الملف الشخصي إذا اختار المستخدم إضافتها.",
        "يجمع لوريفاي المعلومات والمحتوى الذي يقدمه المستخدم عند إنشاء الإعلانات أو استخدام خدمات التطبيق."
      ]
    },
    {
      title: "الإعلانات والمحتوى",
      bullets: [
        "يتم جمع ومعالجة المعلومات التي يضيفها المستخدم إلى إعلاناته، بما في ذلك وصف الإعلان والصور والمعلومات المتعلقة بالمشروع أو الفرصة وأي محتوى آخر يقدمه المستخدم.",
        "يدرك المستخدم أن المعلومات التي يختار نشرها ضمن إعلان أو ملف شخصي عام قد تكون ظاهرة للمستخدمين الآخرين في التطبيق.",
        "ينبغي للمستخدم تجنب نشر بيانات شخصية أو سرية لا يرغب في إتاحتها للآخرين."
      ]
    },
    {
      title: "مستندات التحقق",
      bullets: [
        "قد يتيح لوريفاي للمستخدم بشكل اختياري تقديم مستندات للتحقق، مثل مستندات الهوية أو مستندات الأعمال أو غيرها من المستندات الداعمة.",
        "تستخدم هذه المستندات لأغراض التحقق والأمان ومنع إساءة استخدام المنصة وغيرها من الأغراض المشروعة المرتبطة بتقديم الخدمة.",
        "المستندات المقدمة بشكل خاص للتحقق لا يتم عرضها علنًا للمستخدمين الآخرين، ما لم يختَر المستخدم بشكل منفصل نشر معلومات منها.",
        "يقتصر الوصول إلى مستندات التحقق على الجهات أو مزودي الخدمات الذين يحتاجون إليها لتقديم الخدمة أو لأغراض قانونية أو أمنية مشروعة، حسب الحاجة."
      ]
    },
    {
      title: "المحادثات والتواصل",
      bullets: [
        "يقوم لوريفاي بمعالجة وتخزين الرسائل والمحتوى الذي يتم تبادله من خلال خدمة المحادثة داخل التطبيق بالقدر اللازم لتوفير خدمة المحادثة وتشغيل المنصة.",
        "قد تتم معالجة المحادثات عند الحاجة لأغراض الأمان أو منع الاحتيال وإساءة الاستخدام أو التحقيق في البلاغات أو تطبيق شروط وأحكام لوريفاي أو الامتثال للمتطلبات القانونية.",
        "يتحمل المستخدم مسؤولية المعلومات الشخصية أو التجارية التي يختار مشاركتها طوعًا مع مستخدمين آخرين.",
        "لا ينبغي مشاركة كلمات المرور أو رموز التحقق أو بيانات البطاقات البنكية أو المعلومات المالية شديدة الحساسية عبر المحادثة."
      ]
    },
    {
      title: "كيفية استخدام المعلومات",
      bullets: [
        "يستخدم لوريفاي البيانات لإنشاء حسابات المستخدمين وإدارتها وتشغيل التطبيق وتقديم خدماته.",
        "تستخدم المعلومات لنشر الإعلانات وإدارتها وتمكين المستخدمين من اكتشاف الفرص والتواصل فيما بينهم.",
        "قد تستخدم المعلومات للتحقق من الحسابات أو الإعلانات عند استخدام خدمات التحقق.",
        "قد تستخدم المعلومات لتقديم الدعم للمستخدمين والرد على الاستفسارات ومعالجة المشكلات.",
        "قد تستخدم البيانات لحماية المستخدمين والمنصة، والكشف عن الاحتيال أو إساءة الاستخدام أو الأنشطة المخالفة، والتحقيق فيها ومنعها.",
        "قد تستخدم المعلومات لتحسين أداء التطبيق وخدماته وتجربة المستخدم.",
        "قد تتم معالجة المعلومات عندما يكون ذلك ضروريًا للامتثال للالتزامات القانونية والتنظيمية المعمول بها."
      ]
    },
    {
      title: "التفضيلات واستخدام التطبيق",
      bullets: [
        "قد يجمع لوريفاي معلومات حول كيفية تفاعل المستخدم مع التطبيق، مثل الإعلانات التي يشاهدها أو يتفاعل معها وعمليات البحث والنقرات والميزات المستخدمة.",
        "قد يستخدم لوريفاي هذه المعلومات، إلى جانب التفضيلات التي يحددها المستخدم، لفهم اهتماماته وتحسين تجربته داخل التطبيق.",
        "قد تستخدم هذه المعلومات لتخصيص المحتوى والاقتراحات والإشعارات التي قد تكون أكثر صلة باهتمامات المستخدم، وفقًا للإعدادات والخيارات المتاحة له والقوانين المعمول بها."
      ]
    },
    {
      title: "المدفوعات",
      bullets: [
        "تتم معالجة المدفوعات الخاصة بخدمات لوريفاي من خلال مزودي خدمات دفع، مثل Stripe، وقد تشمل وسائل الدفع المدعومة البطاقات البنكية وApple Pay وGoogle Pay.",
        "عند استخدام خدمات الدفع، قد تتم مشاركة المعلومات اللازمة لإتمام المعاملة مع مزود خدمة الدفع.",
        "لا يقوم لوريفاي بتخزين أرقام بطاقات الدفع الكاملة أو رموز الأمان الخاصة بالبطاقات عندما تتم معالجة هذه البيانات بواسطة مزود خدمة الدفع.",
        "قد يحتفظ لوريفاي بالمعلومات المتعلقة بالمعاملة، مثل قيمة الدفع والخدمة المدفوعة وحالة العملية والرقم المرجعي للمعاملة، عند الحاجة لإدارة المدفوعات والسجلات والدعم."
      ]
    },
    {
      title: "الإشعارات والتواصل مع المستخدم",
      bullets: [
        "قد يرسل لوريفاي إشعارات مرتبطة بالحساب أو الإعلانات أو المحادثات أو المدفوعات أو الاشتراكات أو الأمان أو الخدمات التي يستخدمها المستخدم.",
        "قد يرسل لوريفاي رموز التحقق والرسائل الضرورية لتشغيل الحساب وتأمينه.",
        "إذا أضاف المستخدم عنوان بريد إلكتروني إلى حسابه، فقد يستخدم لوريفاي هذا العنوان لإرسال الإيصالات أو الإشعارات أو المراسلات المتعلقة بالخدمات.",
        "قد يتم إرسال إشعارات أو محتوى مخصص استنادًا إلى تفضيلات المستخدم واهتماماته وتفاعله مع التطبيق، وفقًا للخيارات المتاحة والقوانين المعمول بها."
      ]
    },
    {
      title: "مشاركة المعلومات",
      bullets: [
        "لا يقوم لوريفاي ببيع البيانات الشخصية للمستخدمين.",
        "قد تتم مشاركة البيانات بالقدر الضروري مع مزودي الخدمات الذين يساعدون في تشغيل التطبيق، مثل خدمات الاستضافة والدفع والتحقق والاتصالات والإشعارات والتحليلات والدعم والخدمات التقنية.",
        "قد تتم مشاركة المعلومات عندما يكون ذلك مطلوبًا بموجب القانون أو استجابةً لطلب قانوني صادر عن جهة مختصة.",
        "قد تتم مشاركة المعلومات عند الضرورة لحماية حقوق لوريفاي أو المستخدمين، أو للتحقيق في الاحتيال أو إساءة الاستخدام أو المخاطر الأمنية، وذلك وفقًا للقانون المعمول به.",
        "يطلب من مزودي الخدمات التعامل مع المعلومات وفقًا للمتطلبات التعاقدية والقانونية المطبقة عليهم."
      ]
    },
    {
      title: "البيانات التقنية وبيانات الاستخدام",
      bullets: [
        "قد يجمع لوريفاي بعض المعلومات التقنية عند استخدام التطبيق، مثل نوع الجهاز ونظام التشغيل وعنوان IP ومعرّفات الجهاز أو التطبيق وبيانات الاستخدام وسجلات الأخطاء والمعلومات التقنية المشابهة، بحسب ما يتم جمعه فعليًا من خلال التطبيق أو مزودي الخدمات.",
        "قد تستخدم هذه المعلومات لتشغيل التطبيق وتحسين الأداء ومعالجة الأخطاء وحماية المنصة ومنع الاحتيال وإساءة الاستخدام."
      ]
    },
    {
      title: "حماية البيانات",
      bullets: [
        "يتخذ لوريفاي إجراءات تقنية وتنظيمية معقولة ومناسبة لحماية البيانات الشخصية من الوصول أو الاستخدام أو التعديل أو الإفصاح أو الفقد غير المصرح به.",
        "لا توجد وسيلة إلكترونية لتخزين أو نقل البيانات يمكن ضمان أمانها بشكل مطلق، ولذلك لا يمكن ضمان الحماية الكاملة من جميع المخاطر الأمنية.",
        "يتحمل المستخدم أيضًا مسؤولية حماية حسابه وبيانات الدخول الخاصة به وعدم مشاركتها مع الآخرين."
      ]
    },
    {
      title: "الاحتفاظ بالبيانات",
      bullets: [
        "يحتفظ لوريفاي بالبيانات الشخصية طالما كان ذلك ضروريًا لتقديم الخدمات وتشغيل الحساب وتحقيق الأغراض الموضحة في سياسة الخصوصية هذه.",
        "قد يتم الاحتفاظ ببعض المعلومات لمدة أطول عندما يكون ذلك مطلوبًا أو مسموحًا به قانونًا، أو لأغراض المحاسبة أو منع الاحتيال أو الأمان أو معالجة النزاعات أو تنفيذ الحقوق والالتزامات القانونية.",
        "عندما لا تعود البيانات مطلوبة، يتم حذفها أو إخفاء هويتها وفقًا للمتطلبات القانونية والإجراءات المعمول بها."
      ]
    },
    {
      title: "حذف الحساب والبيانات",
      bullets: [
        "يمكن للمستخدم طلب حذف حسابه من خلال خاصية حذف الحساب المتاحة داخل التطبيق.",
        "يؤدي حذف الحساب إلى إزالة أو حذف البيانات المرتبطة به وفقًا لسياسة الاحتفاظ بالبيانات والمتطلبات القانونية المعمول بها.",
        "قد يحتفظ لوريفاي ببعض المعلومات بعد حذف الحساب إذا كان الاحتفاظ بها مطلوبًا أو مسموحًا به بموجب القانون، أو ضروريًا للأمان أو منع الاحتيال أو معالجة النزاعات أو حماية الحقوق القانونية.",
        "قد لا يؤدي حذف الحساب إلى حذف المعلومات التي قام المستخدم بمشاركتها بالفعل مع مستخدمين آخرين خارج نطاق سيطرة لوريفاي."
      ]
    },
    {
      title: "حقوق المستخدم",
      bullets: [
        "يمكن للمستخدم تحديث بعض معلومات حسابه وتصحيحها من خلال الخيارات المتاحة داخل التطبيق.",
        "يمكن للمستخدم طلب الوصول إلى بياناته الشخصية أو تصحيحها أو حذفها أو ممارسة أي حقوق أخرى يمنحها له القانون المعمول به.",
        "قد يحتاج لوريفاي إلى التحقق من هوية المستخدم قبل تنفيذ بعض الطلبات المتعلقة بالبيانات الشخصية.",
        "يمكن للمستخدم التواصل مع لوريفاي بخصوص طلبات الخصوصية عبر info@loryfy.com."
      ]
    },
    {
      title: "المستخدمون دون سن 18 عامًا",
      bullets: [
        "لوريفاي مخصص للمستخدمين الذين تبلغ أعمارهم 18 عامًا أو أكثر.",
        "لا يُسمح لمن هم دون 18 عامًا بإنشاء حساب أو استخدام خدمات لوريفاي.",
        "إذا علم لوريفاي بأنه تم جمع بيانات شخصية لشخص دون السن المسموح به بالمخالفة لهذه السياسة، فيجوز اتخاذ الإجراءات المناسبة لحذفها أو التعامل معها وفقًا للقانون المعمول به."
      ]
    },
    {
      title: "معالجة ونقل البيانات",
      bullets: [
        "قد تتم معالجة أو تخزين بعض البيانات بواسطة لوريفاي أو مزودي خدماته داخل دولة الإمارات العربية المتحدة أو خارجها بحسب مواقع البنية التقنية ومزودي الخدمات المستخدمة.",
        "عند نقل البيانات الشخصية عبر الحدود، يتخذ لوريفاي الإجراءات المطلوبة بموجب قوانين حماية البيانات المعمول بها لضمان وجود مستوى مناسب من الحماية."
      ]
    },
    {
      title: "الوضع القانوني والامتثال للوريفاي (Loryfy)",
      bullets: [
        "يتم تشغيل لوريفاي من خلال كيان تجاري مرخص في دولة الإمارات العربية المتحدة.",
        "تتم معالجة البيانات الشخصية وفقًا للقوانين واللوائح المعمول بها في دولة الإمارات العربية المتحدة، بما في ذلك متطلبات حماية البيانات والخصوصية المطبقة على لوريفاي."
      ]
    },
    {
      title: "التغييرات على سياسة الخصوصية",
      bullets: [
        "يحق للوريفاي تحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في الخدمات أو الممارسات أو المتطلبات القانونية والتنظيمية.",
        "قد يتم نشر السياسة المحدثة داخل التطبيق أو إبلاغ المستخدمين بها من خلال وسيلة مناسبة أخرى.",
        "عندما تكون التغييرات جوهرية أو تتطلب موافقة المستخدم وفقًا للقانون، قد يُطلب من المستخدم مراجعة السياسة المحدثة والموافقة عليها."
      ]
    },
    {
      title: "تواصل معنا",
      bullets: [
        "للاستفسارات أو الطلبات المتعلقة بالخصوصية والبيانات الشخصية، يمكن للمستخدم التواصل مع لوريفاي عبر البريد الإلكتروني info@loryfy.com."
      ]
    }
  ];

  const currentPrivacy = isRtl ? privacyAr : privacyEn;

  return (
    <div
      id="privacy-page"
      className={
        isWebView
          ? "bg-white min-h-screen py-2 px-2"
          : "bg-[#F8FAFC] min-h-screen py-8 sm:py-12"
      }
    >
      <div
        className={
          isWebView
            ? "max-w-4xl mx-auto space-y-4 text-start"
            : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-start"
        }
      >
        {/* Simple Breadcrumb */}
        {!isWebView && (
          <nav aria-label="Breadcrumb" className="hidden sm:flex text-xs sm:text-sm text-[#475467] items-center gap-2">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-[#0F58D5] transition-colors cursor-pointer"
            >
              {currentLang === "en" ? "Home" : "الرئيسية"}
            </button>
            <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#101828]">
              {currentLang === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
            </span>
          </nav>
        )}

        {/* Standard White Document Container */}
        <FadeInUp>
          <article
            className={
              isWebView
                ? "bg-white p-2 sm:p-4 space-y-6"
                : "bg-white rounded-2xl border border-slate-200 shadow-2xs p-6 sm:p-10 lg:p-12 space-y-8"
            }
          >
            
            {/* Header */}
            <header className="border-b border-slate-100 pb-4 space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-[#101828]">
                {currentLang === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
              </h1>
              <p className="text-[11px] sm:text-xs text-[#64748B]">
                {currentLang === "en" ? "Last updated: 2026 • UAE Federal Data Protection (PDPL) Compliant" : "آخر تحديث: 2026 • متوافق مع معايير حماية البيانات في الإمارات"}
              </p>
            </header>

            {/* Sections */}
            <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
              {currentPrivacy.map((sec, idx) => (
                <section key={idx} className="space-y-2">
                  <h2 className="text-sm sm:text-base font-bold text-[#101828]">
                    {idx > 0 ? `${idx}. ` : ""}{sec.title}
                  </h2>
                  <ul className="space-y-1.5 pl-4 sm:pl-6 list-disc marker:text-[#0F58D5]">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Footer Back Link */}
            {!isWebView && (
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate("home")}
                  className="text-xs sm:text-sm font-semibold text-[#0F58D5] hover:underline cursor-pointer"
                >
                  {currentLang === "en" ? "← Back to Home" : "← العودة إلى الرئيسية"}
                </button>
                <button
                  onClick={() => onNavigate("terms")}
                  className="text-xs sm:text-sm text-[#64748B] hover:text-[#0F58D5] hover:underline cursor-pointer"
                >
                  {currentLang === "en" ? "View Terms & Conditions →" : "الشروط والأحكام ←"}
                </button>
              </div>
            )}

          </article>
        </FadeInUp>
      </div>
    </div>
  );
};

// 7. CUSTOM 404 PAGE (Section 96)
export const NotFoundPage: React.FC<SpecialPageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <div id="custom-404-page" className="bg-gradient-to-b from-[#F5F9FF] via-white to-white min-h-[75vh] flex items-center justify-center py-16">
      <FadeInUp className="max-w-md mx-auto px-6 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#0F58D5]/10 text-[#0F58D5] border border-[#0F58D5]/20 flex items-center justify-center mx-auto shadow-2xs">
          <Compass className="w-10 h-10 text-[#17B3CD]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-[#101828] tracking-tight">
            {t.notFound.title}
          </h1>
          <p className="text-base text-[#475467] leading-relaxed">
            {t.notFound.subtitle}
          </p>
        </div>

        <button
          onClick={() => onNavigate("home")}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-[#0F58D5] hover:bg-[#128ca2] shadow-md shadow-[#0F58D5]/20 hover:shadow-lg transition-all cursor-pointer text-sm active:scale-98"
        >
          <span>{t.notFound.cta}</span>
        </button>
      </FadeInUp>
    </div>
  );
};

// 8. SITEMAP & TECHNICAL SEO INDEX (Section 72)
export const SitemapPage: React.FC<SpecialPageProps> = ({ currentLang, onNavigate }) => {
  const sections = [
    {
      categoryEn: "For Partners & Investors",
      categoryAr: "للشركاء والمستثمرين",
      pages: [
        { titleEn: "Home", titleAr: "الرئيسية", route: "home" as PageRoute, path: "" },
        { titleEn: "Explore Running Businesses", titleAr: "استكشف المشاريع القائمة", route: "running-businesses-uae" as PageRoute, path: "running-businesses-uae" },
        { titleEn: "Explore Startup Ideas", titleAr: "استكشف أفكار المشاريع", route: "startup-opportunities-uae" as PageRoute, path: "startup-opportunities-uae" },
        { titleEn: "Explore Trade Licenses", titleAr: "استكشف الرخص التجارية", route: "trade-license-opportunities-uae" as PageRoute, path: "trade-license-opportunities-uae" },
        { titleEn: "Find Partnership Opportunities", titleAr: "ابحث عن فرص الشراكة", route: "business-partnership-opportunities-uae" as PageRoute, path: "business-partnership-opportunities-uae" },
        { titleEn: "Businesses for Sale in UAE", titleAr: "مشاريع قائمة للبيع في الإمارات", route: "businesses-for-sale-uae" as PageRoute, path: "businesses-for-sale-uae" },
        { titleEn: "Find a Business Partner in UAE", titleAr: "ابحث عن شريك لمشروعك في الإمارات", route: "find-business-partner-uae" as PageRoute, path: "find-business-partner-uae" },
        { titleEn: "Free Business Listing in UAE", titleAr: "إدراج الأعمال مجانًا في الإمارات", route: "free-business-listing-uae" as PageRoute, path: "free-business-listing-uae" },
      ],
    },
    {
      categoryEn: "For Owners & Founders",
      categoryAr: "لأصحاب المشاريع والأفكار",
      pages: [
        { titleEn: "List a Running Business", titleAr: "اعرض مشروعًا قائمًا", route: "list-running-business" as PageRoute, path: "list-running-business" },
        { titleEn: "List Your Business Idea", titleAr: "اعرض فكرة مشروعك", route: "post-startup-idea" as PageRoute, path: "post-startup-idea" },
        { titleEn: "List a Trade License", titleAr: "اعرض رخصة تجارية", route: "list-trade-license" as PageRoute, path: "list-trade-license" },
        { titleEn: "Find Partners & Investors", titleAr: "ابحث عن شركاء ومستثمرين", route: "find-partners-investors" as PageRoute, path: "find-partners-investors" },
      ],
    },
    {
      categoryEn: "Company & Information",
      categoryAr: "عن لوريفاي والمعلومات",
      pages: [
        { titleEn: "About Loryfy", titleAr: "عن لوريفاي", route: "about" as PageRoute, path: "about" },
        { titleEn: "How It Works", titleAr: "كيف يعمل لوريفاي", route: "how-it-works" as PageRoute, path: "how-it-works" },
        { titleEn: "Frequently Asked Questions", titleAr: "الأسئلة الشائعة", route: "faq" as PageRoute, path: "faq" },
        { titleEn: "Contact Us", titleAr: "تواصل معنا", route: "contact" as PageRoute, path: "contact" },
        { titleEn: "Download App", titleAr: "تحميل التطبيق", route: "download" as PageRoute, path: "download" },
      ],
    },
    {
      categoryEn: "Real Examples of Using Loryfy",
      categoryAr: "أمثلة واقعية لاستخدام لوريفاي",
      pages: [
        {
          titleEn: "Real Examples Index",
          titleAr: "فهرس الأمثلة الواقعية",
          route: "real-examples-of-using-loryfy" as PageRoute,
          path: "real-examples-of-using-loryfy",
        },
        ...storySlugs.map((slug) => ({
          titleEn: storiesData.en[slug]?.h1 || slug,
          titleAr: storiesData.ar[slug]?.h1 || slug,
          route: "story-detail" as PageRoute,
          slug,
          path: `real-examples-of-using-loryfy/${slug}`,
        })),
      ],
    },
    {
      categoryEn: "Legal & Privacy",
      categoryAr: "الشروط والخصوصية",
      pages: [
        { titleEn: "Terms of Service", titleAr: "شروط الخدمة", route: "terms" as PageRoute, path: "terms" },
        { titleEn: "Privacy Policy", titleAr: "سياسة الخصوصية", route: "privacy" as PageRoute, path: "privacy" },
      ],
    },
    {
      categoryEn: "Mobile App Webviews (Direct In-App Links)",
      categoryAr: "واجهات تطبيق الهاتف (روابط مباشرة للتطبيق)",
      pages: [
        { titleEn: "About Loryfy (In-App)", titleAr: "عن لوريفاي (داخل التطبيق)", route: "app-about" as PageRoute, path: "app/about" },
        { titleEn: "Privacy Policy (In-App)", titleAr: "سياسة الخصوصية (داخل التطبيق)", route: "app-privacy" as PageRoute, path: "app/privacy" },
        { titleEn: "Terms & Conditions (In-App)", titleAr: "الشروط والأحكام (داخل التطبيق)", route: "app-terms" as PageRoute, path: "app/terms" },
      ],
    },
  ];

  return (
    <div id="sitemap-page" className="bg-gradient-to-b from-[#F5F9FF] via-white to-white min-h-screen pt-4 pb-16 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-start">
        
        {/* Header */}
        <FadeInUp>
          <div className="bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/60 p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#0F58D5]/15 shadow-2xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F58D5]/10 border border-[#0F58D5]/20 text-xs font-bold text-[#0F58D5]">
              <Globe className="w-3.5 h-3.5 text-[#17B3CD]" />
              <span>{currentLang === "en" ? "Sitemap Index" : "خريطة الموقع"}</span>
            </div>
            <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
              {currentLang === "en" ? "HTML Sitemap & Index" : "خريطة الموقع والفهرس"}
            </h1>
            <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
              {currentLang === "en"
                ? "Complete crawlable index of official public pages on Loryfy.com."
                : "فهرس كامل لكافة الصفحات العامة والروابط على موقع لوريفاي."}
            </p>
          </div>
        </FadeInUp>

        {/* Categorized Sections */}
        <div className="space-y-10">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#101828] border-b border-slate-200/80 pb-2">
                {currentLang === "en" ? section.categoryEn : section.categoryAr}
              </h2>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.pages.map((p, pIdx) => {
                  const fullUrl = p.path === "" 
                    ? `https://loryfy.com/${currentLang}` 
                    : `https://loryfy.com/${currentLang}/${p.path}`;
                  return (
                    <StaggerItem key={pIdx}>
                      <button
                        onClick={() => onNavigate(p.route, (p as any).slug)}
                        className="w-full p-5 rounded-2xl bg-white border border-slate-200/70 hover:border-[#17B3CD]/50 hover:bg-[#F5F8FF]/80 text-start transition-all cursor-pointer shadow-2xs hover:shadow-xs group space-y-1.5"
                      >
                        <div className="font-extrabold text-sm text-[#101828] group-hover:text-[#0F58D5] transition-colors">
                          {currentLang === "en" ? p.titleEn : p.titleAr}
                        </div>
                        <div className="text-xs text-slate-400 font-mono truncate">{fullUrl}</div>
                      </button>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 8.5 STORIES INDEX & REAL-WORLD SCENARIOS DIRECTORY
export const StoriesIndexPage: React.FC<SpecialPageProps> = ({
  currentLang,
  onNavigate,
  selectedOpportunitySlug,
}) => {
  const isEn = currentLang === "en";
  const [searchQuery, setSearchQuery] = useState("");
  const ArrowIcon = currentLang === "ar" ? ArrowLeft : ArrowRight;

  const getStoryCategory = (slugOrCategory?: string): string => {
    if (!slugOrCategory) return "all";
    if (["partner", "startup", "company", "running", "license", "all"].includes(slugOrCategory)) {
      return slugOrCategory;
    }
    if (
      slugOrCategory === "startup-founder-find-cofounder-funding-uae" ||
      slugOrCategory === "technical-cofounder-join-startup-uae" ||
      slugOrCategory === "validate-business-idea-partner-uae" ||
      slugOrCategory.includes("startup") ||
      slugOrCategory.includes("cofounder") ||
      slugOrCategory.includes("validate")
    ) {
      return "startup";
    }
    if (
      slugOrCategory === "trade-license-for-sale-transfer-uae" ||
      slugOrCategory.includes("license")
    ) {
      return "license";
    }
    if (
      slugOrCategory === "sell-running-business-owner-exit-uae" ||
      slugOrCategory === "buy-running-business-uae" ||
      slugOrCategory === "investor-company-acquire-back-business-uae" ||
      slugOrCategory.includes("running") ||
      slugOrCategory.includes("acquire") ||
      slugOrCategory.includes("exit")
    ) {
      return "running";
    }
    if (slugOrCategory.startsWith("company-")) {
      return "company";
    }
    return "partner";
  };

  const initialCategory = useMemo(() => {
    return getStoryCategory(selectedOpportunitySlug);
  }, [selectedOpportunitySlug]);

  const [selectedFilter, setSelectedFilter] = useState<string>(initialCategory);

  useEffect(() => {
    if (selectedOpportunitySlug) {
      const cat = getStoryCategory(selectedOpportunitySlug);
      setSelectedFilter(cat);
    }
  }, [selectedOpportunitySlug]);

  const storiesList = useMemo(() => {
    return storySlugs.map((slug) => {
      const enData = storiesData.en[slug];
      const arData = storiesData.ar[slug];
      const data = storiesData[currentLang]?.[slug] || enData;
      const category = getStoryCategory(slug);

      // Aggregate all searchable text across languages, sections, and FAQs for instant search
      const sectionsTextEn = enData?.sections?.map(s => `${s.heading} ${s.content} ${(s.bulletPoints || []).join(" ")}`).join(" ") || "";
      const sectionsTextAr = arData?.sections?.map(s => `${s.heading} ${s.content} ${(s.bulletPoints || []).join(" ")}`).join(" ") || "";
      const faqTextEn = enData?.faqItems?.map(f => `${f.question} ${f.answer}`).join(" ") || "";
      const faqTextAr = arData?.faqItems?.map(f => `${f.question} ${f.answer}`).join(" ") || "";

      const fullSearchIndex = [
        slug,
        category,
        enData?.h1,
        enData?.title,
        enData?.subtitle,
        enData?.intro,
        arData?.h1,
        arData?.title,
        arData?.subtitle,
        arData?.intro,
        sectionsTextEn,
        sectionsTextAr,
        faqTextEn,
        faqTextAr,
      ].filter(Boolean).join(" ").toLowerCase();

      return {
        slug,
        title: data?.h1 || slug,
        subtitle: data?.subtitle || "",
        intro: data?.intro || "",
        category,
        fullSearchIndex,
      };
    });
  }, [currentLang]);

  // Compute live counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: storiesList.length };
    storiesList.forEach((story) => {
      counts[story.category] = (counts[story.category] || 0) + 1;
    });
    return counts;
  }, [storiesList]);

  const filterOptions = useMemo(() => [
    { id: "all", labelEn: `Examples (${categoryCounts.all || 19})`, labelAr: `أمثلة (${categoryCounts.all || 19})` },
    { id: "partner", labelEn: `Partnership & Funding (${categoryCounts.partner || 6})`, labelAr: `الشراكة والتمويل (${categoryCounts.partner || 6})` },
    { id: "startup", labelEn: `Startups & Co-founders (${categoryCounts.startup || 3})`, labelAr: `المشاريع الناشئة (${categoryCounts.startup || 3})` },
    { id: "company", labelEn: `Corporate & Expansion (${categoryCounts.company || 4})`, labelAr: `الشركات والتوسع (${categoryCounts.company || 4})` },
    { id: "running", labelEn: `Buy / Sell Running Business (${categoryCounts.running || 3})`, labelAr: `بيع وشراء المشاريع (${categoryCounts.running || 3})` },
    { id: "license", labelEn: `Trade Licenses (${categoryCounts.license || 3})`, labelAr: `الرخص التجارية (${categoryCounts.license || 3})` },
  ], [categoryCounts]);

  const filteredStories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return storiesList.filter((item) => {
      const matchesCategory = selectedFilter === "all" || item.category === selectedFilter;
      if (!q) return matchesCategory;

      const matchesSearch = item.fullSearchIndex.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [storiesList, selectedFilter, searchQuery]);

  return (
    <div id="stories-index-page" className="bg-gradient-to-b from-[#F5F9FF] via-white to-white min-h-screen pt-4 pb-16 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-start">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#475467]">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#17B3CD] transition-colors cursor-pointer"
          >
            {isEn ? "Home" : "الرئيسية"}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 rtl:rotate-180" />
          <span className="font-semibold text-[#101828]">
            {isEn ? "Real Examples of Using Loryfy" : "أمثلة واقعية لاستخدام لوريفاي"}
          </span>
        </nav>

        {/* Hero Header */}
        <FadeInUp>
          <div className="bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FDFA]/60 p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#0F58D5]/15 shadow-2xs space-y-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#17B3CD]/10 rounded-full blur-lg pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#0F58D5]/10 rounded-full blur-lg pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F58D5]/10 border border-[#0F58D5]/20 text-xs font-bold text-[#0F58D5]">
                <BookOpen className="w-3.5 h-3.5 text-[#17B3CD]" />
                <span>{isEn ? "Real Examples of Using Loryfy" : "أمثلة واقعية لاستخدام لوريفاي"}</span>
              </div>
              <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight">
                {isEn
                  ? "Real-World Business Examples in the UAE"
                  : "أمثلة واقعية لفرص الأعمال والشراكات في الإمارات"}
              </h1>
              <p className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-3xl">
                {isEn
                  ? "Discover how salaried professionals, entrepreneurs, retiring executives, small business owners, and corporate founders use Loryfy to find funding partners, buy or sell running businesses, post startup ideas, and transfer trade licenses across Dubai, Abu Dhabi, and the UAE."
                  : "تعرف على كيفية استفادة الموظفين ورواد الأعمال وأصحاب المشاريع والمتقاعدين والشركات من لوريفاي للعثور على شركاء تمويل، أو شراء وبيع المشاريع القائمة، أو عرض أفكار المشاريع، أو نقل الرخص التجارية في الإمارات."}
              </p>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="relative z-10 flex flex-col gap-4 border-t border-slate-200/60 pt-5">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isEn ? "Search examples by keyword, role, industry, or goal..." : "ابحث في الأمثلة بالكلمات المفتاحية، الدور، أو المجال..."}
                    className="w-full pl-10 pr-10 rtl:pl-10 rtl:pr-10 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#0F58D5] focus:ring-2 focus:ring-[#0F58D5]/15 shadow-xs transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#101828] text-sm font-bold cursor-pointer bg-slate-100 hover:bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                      title={isEn ? "Clear search" : "مسح البحث"}
                    >
                      ×
                    </button>
                  )}
                </div>

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-[#0F58D5] text-xs font-bold transition-all whitespace-nowrap cursor-pointer hover:border-slate-300 shadow-2xs"
                  >
                    {isEn ? "Clear" : "مسح"}
                  </button>
                )}
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedFilter(opt.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedFilter === opt.id
                        ? "bg-[#0F58D5] text-white shadow-sm ring-2 ring-[#0F58D5]/20"
                        : "bg-white border border-slate-200/90 text-slate-700 hover:border-[#17B3CD] hover:text-[#0F58D5] hover:bg-slate-50 shadow-2xs"
                    }`}
                  >
                    {isEn ? opt.labelEn : opt.labelAr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Stories Grid Section */}
        <div id="stories-grid-section" className="space-y-6">
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#475467] font-semibold border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#101828]">
                {isEn
                  ? `Showing ${filteredStories.length} of ${storiesList.length} examples`
                  : `عرض ${filteredStories.length} من أصل ${storiesList.length} مثالاً`}
              </span>
              {selectedFilter !== "all" && (
                <span className="px-2 py-0.5 rounded-md bg-[#0F58D5]/10 text-[#0F58D5] text-[11px] font-bold">
                  {filterOptions.find(f => f.id === selectedFilter)?.[isEn ? "labelEn" : "labelAr"]}
                </span>
              )}
            </div>

            {(searchQuery || selectedFilter !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="text-xs text-[#0F58D5] hover:underline font-bold cursor-pointer"
              >
                {isEn ? "Reset all filters" : "إعادة ضبط الفلاتر"}
              </button>
            )}
          </div>

          {filteredStories.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F58D5] flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-bold text-[#101828]">
                  {isEn ? "No matching examples found" : "لم يتم العثور على أمثلة مطابقة"}
                </p>
                <p className="text-xs sm:text-sm text-[#475467] max-w-md mx-auto">
                  {isEn
                    ? `No examples matched "${searchQuery}" in the selected filter.`
                    : `لم تتطابق أي أمثلة مع "${searchQuery}" في الفلتر المحدد.`}
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="px-4 py-2 rounded-xl bg-[#0F58D5] text-white text-xs font-bold hover:bg-[#0c47ae] transition-colors cursor-pointer"
              >
                {isEn ? "Show All Examples" : "عرض كافة الأمثلة"}
              </button>
            </div>
          ) : (
            <StaggerContainer
              id="stories-grid-container"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredStories.map((story, idx) => (
                <StaggerItem key={story.slug} type="tumble" index={idx}>
                  <div
                    id={`story-card-${story.slug}`}
                    onClick={() => onNavigate("story-detail", story.slug)}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#17B3CD]/60 transition-all duration-200 flex flex-col justify-between group space-y-5 cursor-pointer transform hover:-translate-y-0.5 h-full"
                  >
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F5F8FF] border border-[#0F58D5]/15 text-[11px] font-bold text-[#0F58D5]">
                        <Sparkles className="w-3 h-3 text-[#17B3CD]" />
                        <span>
                          {story.category === "partner"
                            ? isEn ? "Partnership & Funding" : "شراكة وتمويل"
                            : story.category === "startup"
                            ? isEn ? "Startup Co-Founder" : "شريك مؤسس"
                            : story.category === "company"
                            ? isEn ? "Corporate Expansion" : "توسع الشركات"
                            : story.category === "running"
                            ? isEn ? "Running Business" : "مشروع قائم"
                            : isEn ? "Trade License" : "رخصة تجارية"}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#0F58D5] transition-colors leading-snug">
                        {story.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed line-clamp-3">
                        {story.subtitle || story.intro}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F58D5] group-hover:text-[#128ca2] transition-colors">
                        <span>{isEn ? "Read example" : "اعرف المزيد"}</span>
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>

        {/* Bottom CTA */}
        <FadeInUp>
          <div className="bg-gradient-to-r from-[#0F58D5] to-[#17B3CD] rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {isEn
                ? "Find Your Next Business Opportunity on Loryfy"
                : "ابحث عن فرصتك التجارية التالية عبر لوريفاي"}
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
              {isEn
                ? "Download the Loryfy app to explore active running businesses, startup ideas, and trade licenses, and chat directly with verified owners across the UAE."
                : "حمّل تطبيق لوريفاي لاستكشاف المشاريع القائمة وأفكار المشاريع والرخص التجارية والتواصل المباشر مع أصحابها في الإمارات."}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate("download")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0F58D5] bg-white hover:bg-slate-50 transition-all shadow-md cursor-pointer active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>{isEn ? "Download the App" : "تحميل التطبيق"}</span>
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

// 9. ROBOTS.TXT & LLMS.TXT VIEWER (Section 73 & 79)
export const TechnicalTextModal: React.FC<{ type: "robots" | "llms"; onClose: () => void }> = ({
  type,
  onClose,
}) => {
  const robotsContent = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://loryfy.com/sitemap.xml`;

  const llmsContent = `# Loryfy (https://loryfy.com)
> Mobile platform for discovering running businesses, startup ideas, trade licenses, and connecting with business partners and investors across the UAE.

## Key Discovery Endpoints:
- English Homepage: https://loryfy.com/en/
- Arabic Homepage: https://loryfy.com/ar/
- Explore Running Businesses: https://loryfy.com/en/running-businesses-uae
- Explore Startup Ideas: https://loryfy.com/en/startup-opportunities-uae
- Explore Trade Licenses: https://loryfy.com/en/trade-license-opportunities-uae
- Find Partnership Opportunities: https://loryfy.com/en/business-partnership-opportunities-uae
- Businesses for Sale in UAE: https://loryfy.com/en/businesses-for-sale-uae
- Find a Business Partner in UAE: https://loryfy.com/en/find-business-partner-uae
- Free Business Listing in UAE: https://loryfy.com/en/free-business-listing-uae

## For Owners & Founders:
- List a Running Business: https://loryfy.com/en/list-running-business
- List Your Business Idea: https://loryfy.com/en/post-startup-idea
- List a Trade License: https://loryfy.com/en/list-trade-license
- Find Partners & Investors: https://loryfy.com/en/find-partners-investors

## Information & Legal:
- Real Examples of Using Loryfy: https://loryfy.com/en/real-examples-of-using-loryfy
- About Loryfy: https://loryfy.com/en/about
- How It Works: https://loryfy.com/en/how-it-works
- FAQ: https://loryfy.com/en/faq
- Terms of Service: https://loryfy.com/en/terms
- Privacy Policy: https://loryfy.com/en/privacy
- Download App: https://loryfy.com/en/download
- Contact Us: https://loryfy.com/en/contact
- Official Email: info@loryfy.com`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl text-start">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="font-bold text-base text-[#101828]">
            {type === "robots" ? "robots.txt preview" : "llms.txt (AI Search) preview"}
          </h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#101828] cursor-pointer"
          >
            Close
          </button>
        </div>

        <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 text-xs font-mono overflow-x-auto whitespace-pre leading-relaxed">
          {type === "robots" ? robotsContent : llmsContent}
        </pre>
      </div>
    </div>
  );
};
