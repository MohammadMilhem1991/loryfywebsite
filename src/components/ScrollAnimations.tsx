import React from "react";
import { motion, useReducedMotion } from "motion/react";

// Global in-memory set tracking which pages and sub-pages have animated in the current browser session.
const sessionVisitedPages = new Set<string>();

export const hasPageAnimatedInSession = (pageKey: string): boolean => {
  if (typeof window === "undefined") return false;
  return sessionVisitedPages.has(pageKey);
};

export const markPageAnimatedInSession = (pageKey: string): void => {
  if (typeof window === "undefined" || !pageKey) return;
  sessionVisitedPages.add(pageKey);
};

export const clearSessionAnimations = (): void => {
  sessionVisitedPages.clear();
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
 * Runs once per element to minimize browser IntersectionObserver overhead.
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

  if (shouldReduceMotion) {
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

  if (shouldReduceMotion) {
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
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.09,
  id,
  amount = 0.08,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
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

  if (shouldReduceMotion) {
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

  if (shouldReduceMotion) {
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
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  pageKey,
  children,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const alreadyAnimated = hasPageAnimatedInSession(pageKey);

  React.useEffect(() => {
    if (!sessionVisitedPages.has(pageKey)) {
      sessionVisitedPages.add(pageKey);
    }
  }, [pageKey]);

  if (shouldReduceMotion || alreadyAnimated) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={`page-entry-${pageKey}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
