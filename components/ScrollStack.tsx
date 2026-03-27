"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "./ScrollStack.css";

interface ScrollStackProps {
  items: string[];
  className?: string;
}

// Icons for each card (simple white SVG icons)
const CARD_ICONS: Record<string, React.ReactNode> = {
  'Balanced Scorecard': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
  'Systems Thinking': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/>
    </svg>
  ),
  'Data-Driven Insights': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  ),
  'Change Management': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  ),
  'Lean Six Sigma': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  'Agile Methodologies': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>
    </svg>
  ),
  'Workflow Automation': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="6" height="6" rx="1"/><rect x="16" y="6" width="6" height="6" rx="1"/><rect x="9" y="13" width="6" height="6" rx="1"/><path d="M6 9h4m4 0h4M12 6v1m0 6v1"/>
    </svg>
  ),
  'Enterprise Architecture': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/>
    </svg>
  ),
  'KPI Optimization': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  'Performance Benchmarking': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  ),
  'Cost-Benefit Analysis': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  ),
  'Value Chain Analysis': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  'Capital Excellence': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  'Theory of Constraints': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
    </svg>
  ),
  'Supply Chain Management': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  'Resource Allocation': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  'Product Lifecycle Management': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
    </svg>
  ),
};

const CARD_COLORS = [
  '#14358A',
  '#1B4FBF',
  '#2563EB',
  '#1E40AF',
  '#1D4ED8',
  '#3B82F6',
  '#14358A',
  '#1B4FBF',
  '#2563EB',
  '#1E40AF',
  '#1D4ED8',
  '#3B82F6',
  '#14358A',
  '#1B4FBF',
  '#2563EB',
  '#1E40AF',
  '#1D4ED8',
  '#3B82F6',
];

export default function ScrollStack({ items, className = "" }: ScrollStackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const scrollAccum = useRef(0);
  const SCROLL_THRESHOLD = 400; // pixels of wheel delta to advance one card

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    if (isMobile) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Lock when section is at least 50% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setIsLocked(true);
        }
      },
      { threshold: [0.3] }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [isMobile]);

  // Wheel event hijack
  useEffect(() => {
    if (isMobile || !isLocked) return;

    const handleWheel = (e: WheelEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Only hijack if section is visible
      const sectionVisible = rect.top < viewH * 0.5 && rect.bottom > viewH * 0.3;
      if (!sectionVisible) {
        setIsLocked(false);
        return;
      }

      // If all cards shown and scrolling down, release
      if (e.deltaY > 0 && activeIndex >= items.length - 1) {
        setIsLocked(false);
        return;
      }

      // If at first card and scrolling up, release
      if (e.deltaY < 0 && activeIndex <= 0) {
        setIsLocked(false);
        return;
      }

      // Hijack scroll
      e.preventDefault();

      scrollAccum.current += e.deltaY;

      if (scrollAccum.current >= SCROLL_THRESHOLD) {
        // Advance to next card
        setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
        scrollAccum.current = 0;
      } else if (scrollAccum.current <= -SCROLL_THRESHOLD) {
        // Go back to previous card
        setActiveIndex((prev) => Math.max(prev - 1, 0));
        scrollAccum.current = 0;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isMobile, isLocked, activeIndex, items.length]);

  // Re-lock when scrolling back into section
  useEffect(() => {
    if (isMobile || isLocked) return;

    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Re-engage if section center is near viewport center
      const sectionCenter = rect.top + rect.height / 2;
      const inView = sectionCenter > viewH * 0.2 && sectionCenter < viewH * 0.8;

      if (inView) {
        const fullyDone = activeIndex >= items.length - 1 && rect.top < 0;
        const atStart = activeIndex <= 0 && rect.bottom > viewH;
        if (!fullyDone && !atStart) {
          setIsLocked(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, isLocked, activeIndex, items.length]);

  const getCardStyle = (index: number): React.CSSProperties => {
    if (isMobile) return { background: CARD_COLORS[index % CARD_COLORS.length] };

    const bg = CARD_COLORS[index % CARD_COLORS.length];
    const totalItems = items.length;

    if (index > activeIndex) {
      // Card hasn't arrived yet — below the stack
      const distance = index - activeIndex;
      return {
        background: bg,
        transform: `translateY(${300 + distance * 50}px) scale(0.95)`,
        opacity: 0,
        zIndex: totalItems - index,
      };
    }

    // Card is in the stack
    const stackPosition = activeIndex - index; // 0 = top card, 1 = second from top, etc.
    const maxVisible = 6;

    if (stackPosition > maxVisible) {
      return { background: bg, opacity: 0, zIndex: 0 };
    }

    const scale = 1 - stackPosition * 0.03;
    const translateY = stackPosition * 10;
    const opacity = 1 - stackPosition * 0.1;

    return {
      background: bg,
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: Math.max(0.15, opacity),
      zIndex: totalItems - stackPosition,
    };
  };

  return (
    <div
      ref={wrapperRef}
      className={`scroll-stack-wrapper ${className}`}
    >
      <div className="scroll-stack-cards-container">
        {items.map((item, i) => (
          <div
            key={i}
            className="scroll-stack-card"
            style={getCardStyle(i)}
          >
            <span>{item}</span>
            <div className="scroll-stack-card-icon">
              {CARD_ICONS[item] || (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Progress indicator */}
      <div className="scroll-stack-progress">
        <span>{activeIndex + 1} / {items.length}</span>
      </div>
    </div>
  );
}
