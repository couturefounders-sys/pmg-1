'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_BLUR_DATA_URL =
  'data:image/png;base64,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';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={heroRef}
        className="hero-section relative w-full"
        style={{
          height: 'clamp(500px, 76vh, 900px)',
          minHeight: '500px',
          backgroundColor: '#1e3a8a',
        }}
      >
        {/* Hero Background Image */}
        <Image
          src="/hero-background.webp"
          alt="PMG Hero Background"
          fill
          priority
          placeholder="blur"
          blurDataURL={HERO_BLUR_DATA_URL}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          quality={85}
        />

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full"
          style={{
            paddingTop: 'clamp(80px, 26.4vh, 260px)',
            paddingLeft: '4vw',
            paddingRight: '4vw',
          }}
        >
          <h1
            className="text-center text-white font-bold"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'max(28px, 3.33vw)',
              fontWeight: 700,
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              maxWidth: 'max(300px, 35.83vw)',
              marginBottom: 'max(10px, 0.9vw)',
            }}
          >
            Strategy is Intention.
            <br />
            Execution is Reality.
          </h1>

          <p
            className="text-center"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'max(14px, 1.25vw)',
              fontWeight: 400,
              lineHeight: '135%',
              maxWidth: 'max(320px, 47.71vw)',
              color: '#FFFFFF',
              marginBottom: 'max(16px, 2.22vw)',
              opacity: 0.95,
            }}
          >
            PMG bridges the gap between high-level blueprints and verifiable enterprise value.
            We do not just advise from the sidelines. We provide the embedded leadership
            and functional mastery required to turn strategic goals into measurable ROI
          </p>

          <div
            className="flex items-center justify-center flex-wrap"
            style={{ gap: 'max(12px, 2.08vw)' }}
          >
            {/* Primary Button */}
            <Link
              href="/contact"
              className="rounded-[10px] text-white hover:opacity-90 transition-opacity"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '22px',
                background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                paddingTop: 'max(12px, 1.39vw)',
                paddingBottom: 'max(12px, 1.39vw)',
                paddingLeft: 'max(20px, 2.78vw)',
                paddingRight: 'max(20px, 2.78vw)',
                minWidth: 'clamp(200px, 27.5vw, 400px)',
                height: 'max(44px, 4.44vw)',
                border: 'none',
                whiteSpace: 'nowrap',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Request a Private Executive Briefing
            </Link>

            {/* Secondary Button */}
            <Link
              href="/our-solutions"
              className="rounded-[10px] text-white border border-white hover:bg-white/10 transition-all flex items-center justify-center"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '22px',
                paddingTop: 'max(12px, 1.39vw)',
                paddingBottom: 'max(12px, 1.39vw)',
                paddingLeft: 'max(20px, 2.78vw)',
                paddingRight: 'max(20px, 2.78vw)',
                gap: 'max(3px, 0.28vw)',
                minWidth: 'clamp(180px, 23.96vw, 360px)',
                height: 'max(44px, 4.44vw)',
                background: 'transparent',
                whiteSpace: 'nowrap',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              Explore Strategic Solutions
              <svg
                style={{
                  width: 'max(14px, 1.39vw)',
                  height: 'max(14px, 1.39vw)',
                  flexShrink: 0,
                }}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
