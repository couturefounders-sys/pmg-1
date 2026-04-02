import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export type AlternatingTimelineItem = {
  title: string;
  description: string;
  side?: 'left' | 'right';
};

type AlternatingTimelineProps = {
  items: AlternatingTimelineItem[];
  className?: string;
  itemSpacingClassName?: string;
  showEndCap?: boolean;
};

export default function AlternatingTimeline({
  items,
  className = '',
  itemSpacingClassName = 'space-y-24',
  showEndCap = true,
}: AlternatingTimelineProps) {
  const CONNECTOR_WIDTH = 24;
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div ref={containerRef} className={`relative max-w-5xl mx-auto ${className}`.trim()}>
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#006FBA]/20 transform md:-translate-x-1/2 rounded-full" />
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] transform md:-translate-x-1/2 rounded-full overflow-hidden">
        <motion.div
          className="w-full h-full bg-[#006FBA] origin-top"
          style={{
            scaleY: shouldReduceMotion ? 1 : lineProgress,
          }}
        />
      </div>

      <div className={`relative z-10 ${itemSpacingClassName}`.trim()}>
        {items.map((item, index) => {
          const isLeft = item.side ? item.side === 'left' : index % 2 === 0;

          return (
            <motion.div
              key={`${item.title}-${index}`}
              className="w-full"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            >
              {/* Desktop: strict 3-column geometry keeps line/dot/connectors perfectly aligned */}
              <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)] items-center w-full">
                {/* Left side card column */}
                <div className="relative flex justify-end">
                  {isLeft && (
                    <div
                      className="relative w-full"
                      style={{
                        maxWidth: 'min(412px, 90%)',
                        marginRight: `${CONNECTOR_WIDTH}px`,
                        textAlign: 'right',
                      }}
                    >
                      <div
                        className="absolute w-full h-full"
                        style={{
                          border: '3px solid #006FBA',
                          borderRadius: '16px',
                          zIndex: 0,
                          top: '8px',
                          right: '-12px',
                        }}
                      />
                      <div
                        className="w-full relative bg-white"
                        style={{
                          padding: 'clamp(16px, 1.39vw, 24px)',
                          background:
                            'linear-gradient(#fff, #fff) padding-box, linear-gradient(270.31deg, #14358A 0.32%, #006FBA 97.73%) border-box',
                          border: '3px solid transparent',
                          borderRadius: '16px',
                          zIndex: 1,
                          position: 'relative',
                        }}
                      >
                        <h4
                          className="text-[#14358A] font-bold font-dm-sans mb-3"
                          style={{ fontSize: 'clamp(18px, 1.67vw, 24px)' }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="font-dm-sans font-normal text-[#68718B]"
                          style={{
                            fontSize: 'clamp(13px, 1.11vw, 16px)',
                            lineHeight: '140%',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div
                        className="absolute top-1/2 -translate-y-1/2 border-t-2 border-dotted border-[#006FBA]"
                        style={{
                          zIndex: 2,
                          right: `-${CONNECTOR_WIDTH}px`,
                          width: `${CONNECTOR_WIDTH}px`,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Center rail column marker */}
                <div className="relative h-full flex items-center justify-center">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#006FBA] border-4 border-white shadow-sm z-20"
                    initial={shouldReduceMotion ? undefined : { scale: 0.75, opacity: 0 }}
                    whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.35, delay: 0.08 + index * 0.06, ease: 'easeOut' }}
                  />
                </div>

                {/* Right side card column */}
                <div className="relative flex justify-start">
                  {!isLeft && (
                    <div
                      className="relative w-full"
                      style={{
                        maxWidth: 'min(412px, 90%)',
                        marginLeft: `${CONNECTOR_WIDTH}px`,
                        textAlign: 'left',
                      }}
                    >
                      <div
                        className="absolute w-full h-full"
                        style={{
                          border: '3px solid #006FBA',
                          borderRadius: '16px',
                          zIndex: 0,
                          top: '8px',
                          left: '-12px',
                        }}
                      />
                      <div
                        className="w-full relative bg-white"
                        style={{
                          padding: 'clamp(16px, 1.39vw, 24px)',
                          background:
                            'linear-gradient(#fff, #fff) padding-box, linear-gradient(270.31deg, #14358A 0.32%, #006FBA 97.73%) border-box',
                          border: '3px solid transparent',
                          borderRadius: '16px',
                          zIndex: 1,
                          position: 'relative',
                        }}
                      >
                        <h4
                          className="text-[#14358A] font-bold font-dm-sans mb-3"
                          style={{ fontSize: 'clamp(18px, 1.67vw, 24px)' }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="font-dm-sans font-normal text-[#68718B]"
                          style={{
                            fontSize: 'clamp(13px, 1.11vw, 16px)',
                            lineHeight: '140%',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div
                        className="absolute top-1/2 -translate-y-1/2 border-t-2 border-dotted border-[#006FBA]"
                        style={{
                          zIndex: 2,
                          left: `-${CONNECTOR_WIDTH}px`,
                          width: `${CONNECTOR_WIDTH}px`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile: keep simple stacked layout */}
              <div className="md:hidden w-full pl-12 relative">
                <div
                  className="w-full relative bg-white"
                  style={{
                    maxWidth: '100%',
                    padding: 'clamp(16px, 1.39vw, 24px)',
                    background:
                      'linear-gradient(#fff, #fff) padding-box, linear-gradient(270.31deg, #14358A 0.32%, #006FBA 97.73%) border-box',
                    border: '3px solid transparent',
                    borderRadius: '16px',
                    zIndex: 1,
                    position: 'relative',
                    textAlign: 'left',
                  }}
                >
                  <h4
                    className="text-[#14358A] font-bold font-dm-sans mb-3"
                    style={{ fontSize: 'clamp(18px, 1.67vw, 24px)' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-dm-sans font-normal text-[#68718B]"
                    style={{
                      fontSize: 'clamp(13px, 1.11vw, 16px)',
                      lineHeight: '140%',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#006FBA] border-4 border-white shadow-sm z-20"
                  initial={shouldReduceMotion ? undefined : { scale: 0.75, opacity: 0 }}
                  whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: 0.08 + index * 0.06, ease: 'easeOut' }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 border-t-2 border-dotted border-[#006FBA]"
                  style={{ left: '32px', width: '16px' }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {showEndCap && (
        <div className="absolute left-4 md:left-1/2 bottom-0 transform md:-translate-x-1/2 w-[4px] h-12 bg-[#006FBA]" />
      )}
    </div>
  );
}
