'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  motionProfile?: 'default' | 'card';
  className?: string;
  style?: React.CSSProperties;
  animateOnInitialView?: boolean;
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = 'up',
  motionProfile = 'default',
  className,
  style,
  animateOnInitialView = false,
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const offset = 14;
  const timing =
    motionProfile === 'card'
      ? { duration: 0.34, delayScale: 0.85, delayCap: 0.24 }
      : { duration: 0.24, delayScale: 0.45, delayCap: 1 };
  const effectiveDelay = Math.min(delay * timing.delayScale, timing.delayCap);

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) {
      setHasMounted(true);
      return;
    }

    // Skip animation for near-viewport content to avoid page-load flash/jump on route open.
    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const isInitiallyInView = rect.top <= viewportHeight + 120 && rect.bottom >= -120;

    if (isInitiallyInView && !animateOnInitialView) {
      setSkipAnimation(true);
    }
    setHasMounted(true);
  }, [animateOnInitialView]);

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === 'up' ? offset : 0,
        x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
      };

  const preMountStyle =
    !shouldReduceMotion && animateOnInitialView
      ? {
          ...style,
          opacity: 0,
          transform:
            direction === 'up'
              ? `translateY(${offset}px)`
              : direction === 'left'
                ? `translateX(-${offset}px)`
                : direction === 'right'
                  ? `translateX(${offset}px)`
                  : undefined,
        }
      : style;

  if (!hasMounted) {
    return (
      <div ref={containerRef} className={className} style={preMountStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={skipAnimation ? { opacity: 1, y: 0, x: 0 } : initial}
      whileInView={skipAnimation ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.09 }}
      transition={{
        duration: shouldReduceMotion ? 0.14 : timing.duration,
        delay: shouldReduceMotion ? 0 : effectiveDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
