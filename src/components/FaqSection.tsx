/**
 * Loryfy FAQ Section (Sections 33-46)
 * All approved questions/answers with accessible accordion and crawler-friendly markup.
 * Uses SEO page FAQ style (single column rounded cards) and shows top 3 questions with show more/less.
 */

import React, { useState, useMemo, useEffect } from "react";
import { Language } from "../types";
import { translations } from "../data/translations";
import { trackEvent } from "../utils/analytics";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { FadeInUp } from "./ScrollAnimations";
import { motion } from "motion/react";

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
  bulletPoints?: string[];
  highlightBox?: string;
}

interface FaqSectionProps {
  currentLang: Language;
  customFaqs?: FaqItemData[];
  title?: string;
  sectionId?: string;
  className?: string;
}

function renderFormattedContent(text: string): React.ReactNode {
  if (!text.includes("[") || !text.includes("](") || !text.includes(")")) {
    return text;
  }
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const url = match[2];
    parts.push(
      <a
        key={match.index}
        href={url}
        className="text-[#0F58D5] hover:text-[#17B3CD] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
      >
        {linkText}
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  currentLang,
  customFaqs,
  title,
  sectionId = "faq-section",
  className = "py-5 sm:py-7 bg-gradient-to-b from-white via-[#F8FAFC] to-white relative overflow-hidden",
}) => {
  const t = translations[currentLang];
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setOpenIds([]);
    setShowAll(false);
  }, [customFaqs]);

  const toggleFaq = (id: string, question: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
      trackEvent("faq_expand", { faq_id: id, question });
    }
  };

  // Use the main 13 FAQs directly or provided customFaqs
  const combinedFaqs = useMemo(() => {
    if (customFaqs) return customFaqs;
    return t.faqs.map(faq => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
      bulletPoints: undefined as string[] | undefined,
      highlightBox: undefined as string | undefined,
    }));
  }, [t.faqs, customFaqs]);

  const actualDisplayedFaqs = showAll ? combinedFaqs : combinedFaqs.slice(0, 3);

  return (
    <section id={sectionId} className={className}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0F58D5]/3 blur-xl pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInUp className="text-center mb-8 sm:mb-10">
          <h2
            id="faq-main-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight"
          >
            {title || (currentLang === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة")}
          </h2>
        </FadeInUp>

        {/* Single Column Accordion Cards (SEO FAQ Style) */}
        <div className="space-y-3">
          {actualDisplayedFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                initial={idx < 3 ? { opacity: 0, y: 15, scale: 0.99 } : { opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  idx < 3
                    ? {
                        duration: 0.38,
                        ease: [0.16, 1, 0.3, 1],
                        delay: idx * 0.06,
                      }
                    : { duration: 0 }
                }
                whileTap={{ scale: 0.995 }}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-[#17B3CD]/30 shadow-xs" : "border-slate-100 hover:border-[#17B3CD]/40 shadow-2xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id, faq.question)}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 min-h-[52px] text-start cursor-pointer font-bold text-xs sm:text-sm text-[#101828] hover:text-[#17B3CD] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isOpen ? "rotate-180 text-[#0F58D5]" : "text-[#475467]"
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`px-3.5 sm:px-4 pb-4 space-y-3.5 border-t ${
                    isOpen ? "block border-slate-100/60" : "hidden"
                  }`}
                >
                  <div className="text-xs sm:text-sm text-[#475467] leading-relaxed pt-4 font-normal space-y-2.5">
                    {faq.answer.split("\n\n").map((paragraph, pIdx) => (
                      <p key={pIdx}>{renderFormattedContent(paragraph)}</p>
                    ))}
                  </div>

                  {faq.bulletPoints && (
                    <div className="pt-2 space-y-2.5">
                      {faq.bulletPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#475467] font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#17B3CD] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{renderFormattedContent(point)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {combinedFaqs.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#17B3CD]/30 text-xs sm:text-sm font-semibold text-[#0F58D5] hover:text-[#17B3CD] shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer"
            >
              <span>
                {showAll
                  ? currentLang === "en" ? "Show Less" : "عرض أقل"
                  : currentLang === "en" ? "Show More" : "عرض المزيد"}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

