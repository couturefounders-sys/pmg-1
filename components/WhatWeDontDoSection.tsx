import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

type WhatWeDontDoSectionProps = {
  title: string;
  subtitle: ReactNode;
  items: string[];
  footer?: ReactNode;
  sectionBackgroundImage?: string;
  sectionStyle?: CSSProperties;
  cardBackgroundImage?: string;
  cardStyle?: CSSProperties;
  subtitleStyle?: CSSProperties;
  itemIconVariant?: 'image' | 'cross';
  showSecondaryTopRight?: boolean;
  showInnerTopLeftBorder?: boolean;
  overlayImageSrc?: string;
  sectionClassName?: string;
  itemsContainerStyle?: CSSProperties;
  itemRowClassName?: string;
  itemTextStyle?: CSSProperties;
  itemTextClassName?: string;
};

export default function WhatWeDontDoSection({
  title,
  subtitle,
  items,
  footer,
  sectionBackgroundImage = '/bg-not-sure.webp',
  sectionStyle,
  cardBackgroundImage = '/red.png',
  cardStyle,
  subtitleStyle,
  itemIconVariant = 'image',
  showSecondaryTopRight = false,
  showInnerTopLeftBorder = false,
  overlayImageSrc,
  sectionClassName = 'relative z-10 w-full overflow-hidden',
  itemsContainerStyle,
  itemRowClassName = 'flex items-start gap-3',
  itemTextStyle,
  itemTextClassName = '',
}: WhatWeDontDoSectionProps) {
  const shouldShowCardBackground = cardBackgroundImage.length > 0;

  return (
    <section
      className={sectionClassName}
      style={{
        ...(sectionBackgroundImage
          ? {
              backgroundImage: `url(${sectionBackgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : {}),
        ...sectionStyle,
      }}
    >
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
      {showSecondaryTopRight ? (
        <div className="absolute pointer-events-none" style={{ width: '220px', height: '55px', right: '-20px', top: '80px', background: '#0097FE', opacity: 0.7, transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
      ) : null}
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
      <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
      {showInnerTopLeftBorder ? (
        <div className="absolute pointer-events-none" style={{ width: '240px', height: '80px', left: '20px', top: '70px', background: 'transparent', border: '1px solid rgba(102,193,255,0.55)', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
      ) : null}
      {overlayImageSrc ? (
        <img
          src={overlayImageSrc}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.12,
            pointerEvents: 'none',
          }}
        />
      ) : null}

      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12 py-20 px-6">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 px-2 sm:px-4">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: 0,
              marginBottom: '24px',
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: 0,
              marginBottom: '32px',
              ...subtitleStyle,
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              position: 'relative',
              width: '643px',
              maxWidth: '100%',
              height: 'auto',
              minHeight: '263px',
              borderRadius: '10px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              ...cardStyle,
            }}
          >
            {shouldShowCardBackground ? (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${cardBackgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  zIndex: 0,
                }}
              />
            ) : null}

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                ...itemsContainerStyle,
              }}
            >
              {items.map((text, idx) => (
                <div key={idx} className={itemRowClassName}>
                  {itemIconVariant === 'cross' ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="11" stroke="#FF3B44" strokeWidth="2" fill="none" />
                      <line x1="7.5" y1="7.5" x2="16.5" y2="16.5" stroke="#FF3B44" strokeWidth="2" strokeLinecap="round" />
                      <line x1="16.5" y1="7.5" x2="7.5" y2="16.5" stroke="#FF3B44" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <Image
                      src="/we-do-not-icon.png"
                      alt=""
                      width={24}
                      height={24}
                      className="flex-shrink-0 mt-0.5"
                    />
                  )}
                  <span
                    className={itemTextClassName}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(15px, 1.39vw, 22px)',
                      lineHeight: '140%',
                      letterSpacing: '0%',
                      color: '#FF3B44',
                      ...itemTextStyle,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {footer ? <div className="w-full max-w-[820px] text-center">{footer}</div> : null}
        </div>
      </div>
    </section>
  );
}
