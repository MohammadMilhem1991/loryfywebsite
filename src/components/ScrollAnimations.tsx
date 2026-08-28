import React from "react";
import { motion, useReducedMotion } from "motion/react";

// Global in-memory set tracking which pages and sub-pages have animated in the current browser session.
// Automatically resets whenever the browser page/tab is refreshed or reloaded.
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
 * FadeInUp: Scroll reveal with distinct fade + upward movement + subtle scale.
 * Optimized for mobile touchscreens with responsive viewport trigger margins.
 */
export const FadeInUp: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.52,
  id,
  amount = 0.08,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 22, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount, margin: "0px 0px -20px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
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
 * FadeInSlide: For app/phone visuals and feature images with soft fade + horizontal slide.
 */
export const FadeInSlide: React.FC<FadeInSlideProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.52,
  direction = "left",
  isRtl = false,
  id,
  amount = 0.08,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount, margin: "0px 0px -20px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
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
 * StaggerContainer: Wraps a group of cards to animate children with visible stagger.
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.05,
  id,
  amount = 0.02,
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
        delayChildren: 0.04,
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
      viewport={{ once: true, amount, margin: "0px 0px -20px 0px" }}
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
 * StaggerItem: Individual card item inside StaggerContainer with visible upward motion and mobile tap feedback.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  id,
  index,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  const isIndependent = typeof index === "number";
  const amount = isIndependent ? 0.05 : undefined;

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.48,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      id={id}
      className={className}
      variants={itemVariants}
      whileTap={{ scale: 0.985 }}
      initial={isIndependent ? "hidden" : undefined}
      whileInView={isIndependent ? "show" : undefined}
      viewport={isIndependent ? { once: true, amount, margin: "0px 0px -20px 0px" } : undefined}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedCardBox: Standalone card box with scroll reveal motion and tactile tap responsiveness.
 */
export const AnimatedCardBox: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.48,
  id,
  amount = 0.5,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount, margin: "0px 0px -20px 0px" }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
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
 * PageTransition: Animates each page or subpage entrance EXACTLY ONCE per session.
 * - If pageKey has NOT been animated yet in this session: plays the smooth entrance movement and marks pageKey as animated.
 * - If pageKey HAS already been animated in this session: renders immediately with no animation.
 * - When the page/app is refreshed/reloaded, the session restarts.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  pageKey,
  children,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  // Check if this specific pageKey has already animated in this browser session
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
