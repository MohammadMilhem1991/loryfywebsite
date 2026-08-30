import React from "react";
import { motion, useReducedMotion } from "motion/react";

// In-memory set tracking pages that have already animated during this SPA session.
// Being in-memory (not in sessionStorage), refreshing or reloading the page resets this Set.
const visitedPages = new Set<string>();

/**
 * Checks if a specific page/route key has already played its entry/scroll animations in this SPA session.
 */
export const hasPageAnimatedInSession = (pageKey: string): boolean => {
  if (!pageKey) return false;
  return visitedPages.has(pageKey);
};

/**
 * Marks a specific page/route key as having played its animations for the duration of the current SPA session.
 */
export const markPageAnimatedInSession = (pageKey: string): void => {
  if (!pageKey) return;
  visitedPages.add(pageKey);
};

/**
 * Clears all in-memory animation history (resets animations).
 */
export const clearSessionAnimations = (): void => {
  visitedPages.clear();
};

interface PageAnimationContextValue {
  isAlreadyAnimated: boolean;
  pageKey: string;
}

const PageAnimationContext = React.createContext<PageAnimationContextValue>({
  isAlreadyAnimated: false,
  pageKey: "",
});

export const usePageAnimation = () => React.useContext(PageAnimationContext);

interface PageAnimationProviderProps {
  pageKey: string;
  children: React.ReactNode;
}

export const PageAnimationProvider: React.FC<PageAnimationProviderProps> = ({
  pageKey,
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [alreadyAnimated] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return hasPageAnimatedInSession(pageKey);
  });

  React.useEffect(() => {
    if (typeof window === "undefined" || alreadyAnimated) return;
    // Mark as animated only after the animation has had time to start/run
    const timer = setTimeout(() => {
      markPageAnimatedInSession(pageKey);
    }, 600);
    return () => clearTimeout(timer);
  }, [pageKey, alreadyAnimated]);

  const disableAnimation = shouldReduceMotion || alreadyAnimated;

  return (
    <PageAnimationContext.Provider value={{ isAlreadyAnimated: disableAnimation, pageKey }}>
      {children}
    </PageAnimationContext.Provider>
  );
};

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  id?: string;
  amount?: number;
}

/**
 * FadeInUp: Lightweight GPU-accelerated scroll reveal (fade + subtle upward movement).
 * Runs once per element on first visit, immediately renders in final visible state on return visits.
 */
export const FadeInUp: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.36,
  id,
  amount = 0.01,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInSlideProps extends ScrollAnimationProps {
  direction?: "left" | "right";
  isRtl?: boolean;
}

/**
 * FadeInSlide: Lightweight visual element reveal.
 * Runs once per element on first visit, immediately renders in final visible state on return visits.
 */
export const FadeInSlide: React.FC<FadeInSlideProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.36,
  id,
  amount = 0.01,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  id?: string;
  amount?: number;
}

/**
 * StaggerContainer: Uses a single container-level IntersectionObserver to sequence
 * child items smoothly one after another without taxing the browser.
 * Renders cleanly in final state without delay when page has already animated.
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.15,
  id,
  amount = 0.05,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      id={id}
      className={className}
      style={{ perspective: 1200 }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: number;
  type?: "slide" | "tumble" | "pop";
}

/**
 * StaggerItem: Individual card/step item inside StaggerContainer.
 * Uses CSS transforms directly via variants for instant, silky 60fps presentation in sequence.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  id,
  index = 0,
  type = "slide",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  const tiltZ = index % 3 === 0 ? -3.5 : index % 3 === 1 ? 0 : 3.5;

  const itemVariants = type === "tumble"
    ? {
        hidden: {
          opacity: 0,
          y: 36,
          scale: 0.88,
          rotateX: -18,
          rotateZ: tiltZ,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateZ: 0,
          transition: {
            type: "spring" as const,
            stiffness: 280,
            damping: 19,
            mass: 0.85,
          },
        },
      }
    : type === "pop"
    ? {
        hidden: {
          opacity: 0,
          scale: 0.75,
          y: 12,
        },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring" as const,
            stiffness: 380,
            damping: 20,
            mass: 0.8,
          },
        },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.42,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div
      id={id}
      className={className}
      variants={itemVariants}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedCardBox: Standalone lightweight card box.
 */
export const AnimatedCardBox: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.35,
  id,
  amount = 0.01,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface PageTransitionProps {
  pageKey: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTransition: Smooth, instant entrance per page.
 * Uses in-memory Set to ensure animations play only once per SPA session, and reset on page refresh.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  pageKey,
  children,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const [alreadyAnimated] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return hasPageAnimatedInSession(pageKey);
  });

  React.useEffect(() => {
    if (typeof window === "undefined" || alreadyAnimated) return;
    // Mark as animated after the page animation has started/completed
    const timer = setTimeout(() => {
      markPageAnimatedInSession(pageKey);
    }, 600);
    return () => clearTimeout(timer);
  }, [pageKey, alreadyAnimated]);

  const disableAnimation = shouldReduceMotion || alreadyAnimated;

  return (
    <PageAnimationContext.Provider value={{ isAlreadyAnimated: disableAnimation, pageKey }}>
      {disableAnimation ? (
        <div className={className}>{children}</div>
      ) : (
        <motion.div
          key={`page-entry-${pageKey}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          onAnimationComplete={() => {
            markPageAnimatedInSession(pageKey);
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </PageAnimationContext.Provider>
  );
};
