import React from 'react';

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
  return (
    <div className={`relative max-w-5xl mx-auto ${className}`.trim()}>
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#006FBA] transform md:-translate-x-1/2 rounded-full" />

      <div className={`relative z-10 ${itemSpacingClassName}`.trim()}>
        {items.map((item, index) => {
          const isLeft = item.side ? item.side === 'left' : index % 2 === 0;

          return (
            <div
              key={`${item.title}-${index}`}
              className="flex items-center w-full"
              style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}
            >
              <div
                className="w-full md:w-1/2 relative"
                style={{
                  paddingLeft: isLeft ? 0 : '4rem',
                  paddingRight: isLeft ? '4rem' : 0,
                  textAlign: isLeft ? 'right' : 'left',
                }}
              >
                <div
                  className="absolute hidden md:block w-full h-full"
                  style={{
                    maxWidth: 'min(412px, 90%)',
                    border: '3px solid #006FBA',
                    borderRadius: '16px',
                    zIndex: 0,
                    top: '8px',
                    right: isLeft ? '50px' : 'auto',
                    left: isLeft ? 'auto' : '50px',
                  }}
                />

                <div
                  className="inline-block w-full relative bg-white"
                  style={{
                    maxWidth: 'min(412px, 90%)',
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
                  className="absolute top-1/2 -translate-y-1/2 border-t-2 border-dotted border-[#006FBA] w-12"
                  style={{ zIndex: 2, right: isLeft ? '1rem' : 'auto', left: isLeft ? 'auto' : '1rem' }}
                />
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#006FBA] border-4 border-white shadow-sm z-20" />

              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>

      {showEndCap && (
        <div className="absolute left-4 md:left-1/2 bottom-0 transform md:-translate-x-1/2 w-[4px] h-12 bg-[#006FBA]" />
      )}
    </div>
  );
}
