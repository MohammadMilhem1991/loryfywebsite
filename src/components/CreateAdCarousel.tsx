/**
 * Loryfy Create Ad & Listing Mobile App Showcase Carousel
 * Displays scrolling mobile app screens for "Create Ad - Sell" and "Create Ad - Find Partner".
 * Uses the exact continuous infinite-scrolling carousel design, center alignment, and smooth animations.
 */

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Language } from "../types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getLocalizedImage } from "../utils/imageMap";

export interface CarouselScreenItem {
  id: number;
  title: string;
  titleAr: string;
  src: string;
}

export const DEFAULT_CREATE_AD_SCREENS: CarouselScreenItem[] = [
  {
    id: 1,
    title: "Create Listing - Find Partner",
    titleAr: "إنشاء إعلان - البحث عن شريك أو مستثمر",
    src: "/images/Create-ad-Find-partner.webp",
  },
  {
    id: 2,
    title: "Create Listing - Sell",
    titleAr: "إنشاء إعلان - بيع مشروع أو رخصة",
    src: "/images/Create-ad-sell.webp",
  },
  {
    id: 3,
    title: "App Screen 1",
    titleAr: "شاشة التطبيق 1",
    src: "/images/1.webp",
  },
  {
    id: 4,
    title: "App Screen 2",
    titleAr: "شاشة التطبيق 2",
    src: "/images/2.webp",
  },
  {
    id: 5,
    title: "App Screen 4",
    titleAr: "شاشة التطبيق 4",
    src: "/images/3.webp",
  },
  {
    id: 6,
    title: "App Screen 5",
    titleAr: "شاشة التطبيق 5",
    src: "/images/5.webp",
  },
];

export const FIND_BUSINESS_PARTNER_SCREENS: CarouselScreenItem[] = [
  {
    id: 1,
    title: "Explore Opportunities",
    titleAr: "استكشف الفرص",
    src: "/images/e1.webp",
  },
  {
    id: 2,
    title: "Partner Listings",
    titleAr: "إعلانات الشركاء",
    src: "/images/e2.webp",
  },
  {
    id: 3,
    title: "Listing Details",
    titleAr: "تفاصيل الإعلان",
    src: "/images/e3.webp",
  },
  {
    id: 4,
    title: "Filter & Search",
    titleAr: "تصفية وبحث",
    src: "/images/e4.webp",
  },
  {
    id: 5,
    title: "Chat & Connect",
    titleAr: "المحادثة والتواصل",
    src: "/images/e5.webp",
  },
  {
    id: 6,
    title: "Business Network",
    titleAr: "شبكة الأعمال",
    src: "/images/e6.webp",
  },
];

export const CREATE_AD_SCREENS = DEFAULT_CREATE_AD_SCREENS;

interface CreateAdCarouselProps {
  currentLang: Language;
  className?: string;
  screens?: CarouselScreenItem[];
  pageSlug?: string;
}

export const CreateAdCarousel: React.FC<CreateAdCarouselProps> = ({
  currentLang,
  className = "",
  screens,
  pageSlug,
}) => {
  const isRtl = currentLang === "ar";

  // Select active screens based on pageSlug or custom screens prop
  const activeScreens = React.useMemo(() => {
    if (screens && screens.length > 0) return screens;
    if (pageSlug === "find-business-partner-uae") {
      return FIND_BUSINESS_PARTNER_SCREENS;
    }
    return DEFAULT_CREATE_AD_SCREENS;
  }, [screens, pageSlug]);

  const baseCount = activeScreens.length;
  const initialIndex = baseCount * 3;

  // Extended screens repeated 6 times for smooth infinite looping
  const extendedScreens = React.useMemo(() => {
    return [
      ...activeScreens,
      ...activeScreens,
      ...activeScreens,
      ...activeScreens,
      ...activeScreens,
      ...activeScreens,
    ];
  }, [activeScreens]);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(380);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);

  // Reset current index when activeScreens change
  useEffect(() => {
    setCurrentIndex(activeScreens.length * 3);
    hasStartedRef.current = false;
  }, [activeScreens]);

  // Measure container width with ResizeObserver for fluid responsiveness
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

  const itemWidth = containerWidth < 360 ? 220 : containerWidth < 440 ? 260 : 295;
  const gap = containerWidth < 400 ? 14 : 18;
  const step = itemWidth + gap;

  // Center alignment: align active slide in the middle with equal side peeks
  const centerOffset = containerWidth > 0 ? (containerWidth - itemWidth) / 2 : 40;

  // Translation calculation: Always use LTR translation style to scroll visually from right to left
  const translationValue = centerOffset - currentIndex * step;

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Silently reset index when looping far ahead or behind
  const handleTransitionEnd = () => {
    if (currentIndex >= baseCount * 4) {
      setIsTransitioning(false);
      const normalizedIndex = currentIndex - baseCount * 2;
      setCurrentIndex(normalizedIndex);
      if (trackRef.current) {
        void trackRef.current.offsetHeight;
      }
    } else if (currentIndex < baseCount * 2) {
      setIsTransitioning(false);
      const normalizedIndex = currentIndex + baseCount * 2;
      setCurrentIndex(normalizedIndex);
      if (trackRef.current) {
        void trackRef.current.offsetHeight;
      }
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Smooth Auto-scrolling: Starts after precisely ~1.4s, and advances every 3.0s smoothly
  useEffect(() => {
    if (isHovered) return;

    const delayMs = hasStartedRef.current ? 3000 : 1400;

    const timer = setTimeout(() => {
      hasStartedRef.current = true;
      handleNext();
    }, delayMs);

    return () => clearTimeout(timer);
  }, [isHovered, currentIndex, handleNext]);

  const activeDotIndex = ((currentIndex % baseCount) + baseCount) % baseCount;

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
    <div
      ref={containerRef}
      className={`relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] h-[480px] sm:h-[530px] overflow-hidden flex flex-col justify-between select-none group/carousel touch-pan-y cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      dir="ltr"
      id="create-ad-carousel-container"
    >
      {/* Subtle Gradient Fades on Left & Right Edges for smooth edge blending */}
      <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-transparent via-white/20 to-transparent pointer-events-none z-20" />

      {/* Navigation Arrows for Desktop */}
      <button
        onClick={() => {
          handlePrev();
        }}
        className="absolute left-2 top-[46%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#0F58D5] flex items-center justify-center border border-slate-200/70 shadow-xs z-30 cursor-pointer hover:scale-105 active:scale-95 transition-all hidden sm:flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F58D5]"
        aria-label={isRtl ? "الشاشة السابقة" : "Previous screen"}
      >
        <ChevronLeft className="w-4.5 h-4.5" />
      </button>

      <button
        onClick={() => {
          handleNext();
        }}
        className="absolute right-2 top-[46%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#0F58D5] flex items-center justify-center border border-slate-200/70 shadow-xs z-30 cursor-pointer hover:scale-105 active:scale-95 transition-all hidden sm:flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F58D5]"
        aria-label={isRtl ? "الشاشة التالية" : "Next screen"}
      >
        <ChevronRight className="w-4.5 h-4.5" />
      </button>

      {/* Infinite Carousel Track */}
      <div className="relative w-full h-[440px] sm:h-[485px] flex items-center overflow-hidden pointer-events-none select-none">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${translationValue}px)`,
            transition: isTransitioning
              ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
            gap: `${gap}px`,
          }}
          className="flex items-center shrink-0 will-change-transform pointer-events-none select-none"
        >
          {extendedScreens.map((img, idx) => {
            const isCentered = idx === currentIndex;
            return (
              <div
                key={`${img.id}-${idx}`}
                style={{ width: `${itemWidth}px` }}
                className={`shrink-0 flex items-center justify-center select-none pointer-events-none transition-opacity duration-300 ${
                  isCentered
                    ? "opacity-100 scale-100 filter drop-shadow-[0_12px_32px_rgba(15,88,213,0.18)] z-10"
                    : "opacity-55 scale-[0.93]"
                }`}
              >
                <img
                  src={getLocalizedImage(img.src, currentLang)}
                  alt={isRtl ? img.titleAr : img.title}
                  width={220}
                  height={440}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[430px] sm:max-h-[480px] object-contain select-none pointer-events-none aspect-[1/2]"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots with Accessible 44px Touch Targets and GPU Transform Animations */}
      <div className="flex items-center justify-center gap-0 pt-1 pb-1 z-20">
        {activeScreens.map((_, dotIdx) => {
          const isActive = dotIdx === activeDotIndex;
          return (
            <button
              key={`dot-${dotIdx}`}
              onClick={() => {
                setIsTransitioning(true);
                const diff = dotIdx - activeDotIndex;
                setCurrentIndex((prev) => prev + diff);
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              aria-current={isActive ? "true" : undefined}
              className="w-10 h-11 sm:w-11 sm:h-11 flex items-center justify-center cursor-pointer p-0 bg-transparent border-0 group/dot focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F58D5]/60 rounded-full"
            >
              <span
                style={{
                  transform: isActive ? "scaleX(3)" : "scaleX(1)",
                  transformOrigin: "center center",
                  willChange: "transform",
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 transform-gpu ${
                  isActive ? "bg-[#0F58D5]" : "bg-slate-300 group-hover/dot:bg-slate-400"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
