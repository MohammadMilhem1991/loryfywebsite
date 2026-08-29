/**
 * Loryfy Communication Section (Section 29)
 * Highlights direct in-app messaging and flexible conversation options.
 */

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Language, PageRoute } from "../types";
import { translations } from "../data/translations";
import { getLocalizedImage } from "../utils/imageMap";
import { MessageSquare, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInUp, FadeInSlide, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import { motion } from "motion/react";

interface CommunicationSectionProps {
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
}

const CHAT_IMAGES = [
  {
    id: 1,
    title: "Company Partner",
    src: "/images/chat-1.webp",
  },
  {
    id: 2,
    title: "Restaurant Partner",
    src: "/images/chat-2.webp",
  },
  {
    id: 3,
    title: "Salon Partner v2",
    src: "/images/chat-3.webp",
  },
  {
    id: 4,
    title: "Salon Partner Local Guys v2",
    src: "/images/chat-4.webp",
  },
];

// 5 sets (20 slides total) for completely seamless forward and backward continuous looping
const EXTENDED_IMAGES = [
  ...CHAT_IMAGES,
  ...CHAT_IMAGES,
  ...CHAT_IMAGES,
  ...CHAT_IMAGES,
  ...CHAT_IMAGES,
];
const BASE_COUNT = CHAT_IMAGES.length; // 4
const INITIAL_INDEX = BASE_COUNT * 2; // Index 8 (middle set, image 1)

export const CommunicationSection: React.FC<CommunicationSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === "ar";
  
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(380);
  const [currentIndex, setCurrentIndex] = useState<number>(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Measure container width with ResizeObserver for pinpoint responsiveness
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const itemWidth = containerWidth < 380 ? 240 : containerWidth < 460 ? 285 : 320;
  const gap = containerWidth < 400 ? 14 : 18;
  const step = itemWidth + gap;

  // Center alignment: align active slide in the middle with equal side peeks
  const centerOffset = containerWidth > 0 ? (containerWidth - itemWidth) / 2 : 50;
  
  // Translation calculation: Always use LTR style to visually scroll from right to left
  const translationValue = centerOffset - currentIndex * step;

  // Advance forward continuously (1 -> 2 -> 3 -> 4 -> 1 [as 5] -> 2 [as 6] ...)
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Step backward continuously
  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // When transition animation ends, silently reposition index if we went far ahead or behind
  const handleTransitionEnd = () => {
    if (currentIndex >= BASE_COUNT * 3) {
      // Reached the 4th/5th set -> silently reset to the 2nd/3rd set without animating
      setIsTransitioning(false);
      const normalizedIndex = currentIndex - BASE_COUNT * 2;
      setCurrentIndex(normalizedIndex);
      if (trackRef.current) {
        void trackRef.current.offsetHeight; // force reflow
      }
    } else if (currentIndex < BASE_COUNT) {
      // Moved back to 1st set -> silently reset forward
      setIsTransitioning(false);
      const normalizedIndex = currentIndex + BASE_COUNT * 2;
      setCurrentIndex(normalizedIndex);
      if (trackRef.current) {
        void trackRef.current.offsetHeight; // force reflow
      }
    }
  };

  // Re-enable smooth transition after silent DOM reflow
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Continuous auto-scrolling (pauses on hover so user can inspect)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3600);

    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  // Dot calculation normalized to 0..3
  const activeDotIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;

  // Touch swipe support for mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false);
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    // Trigger swipe if horizontal displacement exceeds threshold and dominates vertical scrolling
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < -35) {
        handleNext();
      } else if (deltaX > 35) {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <section id="communication-section" className="py-6 sm:py-8 bg-gradient-to-b from-[#FFFFFF] via-[#F9FBFF] to-[#FFFFFF] relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F5F8FF]/80 via-white to-[#F0FDFA]/50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#0F58D5]/10 shadow-xs relative overflow-hidden">
          {/* Micro dot matrix inside card */}
          <div className="absolute inset-0 bg-dot-pattern-light opacity-60 pointer-events-none" />

          {/* Subtle ambient brand glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0F58D5]/10 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#17B3CD]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Text Column */}
            <FadeInUp className="lg:col-span-6 space-y-4 text-start">
              <h2
                id="communication-heading"
                className="text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#101828] leading-tight tracking-tight"
              >
                {t.communication.heading}
              </h2>

              <p
                id="communication-description"
                className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-xl"
              >
                {t.communication.description}
              </p>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <StaggerItem className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#0F58D5]/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#0F58D5]/10 text-[#0F58D5] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#101828]">
                      {currentLang === "en" ? "Instant In-App Chat" : "محادثة فورية داخل التطبيق"}
                    </div>
                    <div className="text-xs sm:text-sm text-[#475467] mt-1 leading-relaxed">
                      {currentLang === "en"
                        ? "Discuss partnership details directly"
                        : "ناقش تفاصيل الشراكة ومتطلبات العمل مباشرة"}
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#17B3CD]/40 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#17B3CD]/15 text-[#0F58D5] flex items-center justify-center shrink-0 mt-0.5">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#101828]">
                      {currentLang === "en" ? "Flexible Communication" : "مرونة في التواصل"}
                    </div>
                    <div className="text-xs sm:text-sm text-[#475467] mt-1 leading-relaxed">
                      {currentLang === "en"
                        ? "Exchange contacts and talk freely"
                        : "تبادل جهات الاتصال ومتابعة المحادثات بحرية"}
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </FadeInUp>

            {/* Visual Chat Card Representation */}
            <FadeInSlide direction="right" isRtl={isRtl} className="lg:col-span-6 flex flex-col items-center justify-center w-full">
              {/* Carousel Outer Container - Seamlessly embedded into the main section without outer border or background */}
              <motion.div 
                ref={containerRef}
                className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] h-[535px] sm:h-[575px] overflow-hidden flex flex-col justify-between select-none group/carousel touch-pan-y cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                dir="ltr"
                initial={{ opacity: 0, x: isRtl ? -60 : 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.1 }}
              >
                {/* Subtle Gradient Fades on Left & Right Edges for smooth edge blending */}
                <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />
                <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-transparent via-white/20 to-transparent pointer-events-none z-20" />

                {/* Navigation Arrows for Desktop */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#0F58D5] flex items-center justify-center border border-slate-200/60 shadow-xs z-30 cursor-pointer hover:scale-105 active:scale-95 transition-all hidden sm:flex"
                  aria-label={isRtl ? "الصورة السابقة" : "Previous image"}
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#0F58D5] flex items-center justify-center border border-slate-200/60 shadow-xs z-30 cursor-pointer hover:scale-105 active:scale-95 transition-all hidden sm:flex"
                  aria-label={isRtl ? "الصورة التالية" : "Next image"}
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>

                {/* Infinite Animated Carousel Track (Non-draggable, Click/Hold cannot move it) */}
                <div className="relative w-full h-[505px] sm:h-[545px] flex items-center overflow-hidden pointer-events-none select-none">
                  <div
                    ref={trackRef}
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                      transform: `translateX(${translationValue}px)`,
                      transition: isTransitioning
                        ? "transform 650ms cubic-bezier(0.25, 1, 0.5, 1)"
                        : "none",
                      gap: `${gap}px`,
                    }}
                    className="flex items-center shrink-0 will-change-transform pointer-events-none select-none"
                  >
                    {EXTENDED_IMAGES.map((img, idx) => {
                      const isCentered = idx === currentIndex;
                      return (
                        <div
                          key={`${img.id}-${idx}`}
                          style={{ width: `${itemWidth}px` }}
                          className={`shrink-0 flex items-center justify-center transition-all duration-500 select-none pointer-events-none ${
                            isCentered
                              ? "opacity-100 scale-100 filter drop-shadow-[0_12px_35px_rgba(23,179,205,0.22)] z-10"
                              : "opacity-55 scale-[0.92] filter blur-[0.2px]"
                          }`}
                        >
                          <img
                            src={getLocalizedImage(img.src, currentLang)}
                            alt={img.title}
                            className="w-full h-auto max-h-[500px] sm:max-h-[540px] object-contain select-none pointer-events-none"
                            referrerPolicy="no-referrer"
                            draggable={false}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>



                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-1 pb-1 z-20">
                  {CHAT_IMAGES.map((_, dotIdx) => (
                    <button
                      key={`chat-dot-${dotIdx}`}
                      onClick={() => {
                        setIsTransitioning(true);
                        const diff = dotIdx - activeDotIndex;
                        setCurrentIndex((prev) => prev + diff);
                      }}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        dotIdx === activeDotIndex
                          ? "w-6 h-2 bg-[#0F58D5]"
                          : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

              </motion.div>
            </FadeInSlide>

          </div>
        </div>
      </div>
    </section>
  );
};

