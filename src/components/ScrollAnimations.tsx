import React from "react";
import { motion, useReducedMotion } from "motion/react";

// Storage key prefix used in sessionStorage
const SESSION_STORAGE_PREFIX = "loryfy_anim_visited_";

// In-memory set fallback and cache to avoid excessive DOM/sessionStorage queries
const sessionVisitedPages = new Set<string>();

/**
 * Checks if a specific page/route key has already played its entry/scroll animations in this browser session.
 */
export const hasPageAnimatedInSession = (pageKey: string): boolean => {
  if (typeof window === "undefined" || !pageKey) return false;
  if (sessionVisitedPages.has(pageKey)) return true;
  try {
    const val = window.sessionStorage.getItem(`${SESSION_STORAGE_PREFIX}${pageKey}`);
    if (val === "1" || val === "true") {
      sessionVisitedPages.add(pageKey);
      return true;
    }
  } catch {
    // sessionStorage unavailable or access restricted
  }
  return false;
};

/**
 * Marks a specific page/route key as having played its animations for the duration of the current browser session.
 */
export const markPageAnimatedInSession = (pageKey: string): void => {
  if (typeof window === "undefined" || !pageKey) return;
  sessionVisitedPages.add(pageKey);
  try {
    window.sessionStorage.setItem(`${SESSION_STORAGE_PREFIX}${pageKey}`, "1");
  } catch {
    // sessionStorage unavailable
  }
};

/**
 * Clears all session animation history (resets for testing or new sessions).
 */
export const clearSessionAnimations = (): void => {
  if (typeof window !== "undefined") {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < window.sessionStorage.length; i++) {
        const key = window.sessionStorage.key(i);
        if (key && key.startsWith(SESSION_STORAGE_PREFIX)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((k) => window.sessionStorage.removeItem(k));
    } catch {
      // ignore
    }
  }
  sessionVisitedPages.clear();
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
    return hasPageAnimatedInSession(pageKey);
  });

  React.useEffect(() => {
    markPageAnimatedInSession(pageKey);
  }, [pageKey]);

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
  amount = 0.1,
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
  amount = 0.1,
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
  staggerDelay = 0.09,
  id,
  amount = 0.08,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.03,
      },
    },
  };

  return (
    <motion.div
      id={id}
      className={className}
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
}

/**
 * StaggerItem: Individual card/step item inside StaggerContainer.
 * Uses CSS transforms directly via variants for instant, silky 60fps presentation.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { isAlreadyAnimated } = usePageAnimation();

  if (shouldReduceMotion || isAlreadyAnimated) {
    return <div id={id} className={className}>{children}</div>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
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
  amount = 0.1,
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
 * Uses sessionStorage to ensure animations play only once per browser session.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  pageKey,
  children,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const [alreadyAnimated] = React.useState<boolean>(() => {
    return hasPageAnimatedInSession(pageKey);
  });

  React.useEffect(() => {
    markPageAnimatedInSession(pageKey);
  }, [pageKey]);

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
          className={className}
        >
          {children}
        </motion.div>
      )}
    </PageAnimationContext.Provider>
  );
};
