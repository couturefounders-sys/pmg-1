'use client';

import { useRef } from 'react';
import Header from '@/components/Header';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={heroRef}
        className="hero-section relative w-full"
        style={{
          height: '76vh',
          backgroundImage: 'url(/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1e3a8a',
        }}
      >
        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full"
          style={{
            paddingTop: 'max(100px, 26.4vh)',
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
            <button
              className="rounded-[10px] text-white hover:opacity-90 transition-opacity"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'max(13px, 1.25vw)',
                lineHeight: '135%',
                background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                paddingTop: 'max(12px, 1.39vw)',
                paddingBottom: 'max(12px, 1.39vw)',
                paddingLeft: 'max(20px, 2.78vw)',
                paddingRight: 'max(20px, 2.78vw)',
                minWidth: 'max(200px, 27.5vw)',
                height: 'max(44px, 4.44vw)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                borderRadius: '10px',
              }}
            >
              Request a Private Executive Briefing
            </button>

            {/* Secondary Button */}
            <button
              className="rounded-[10px] text-white border border-white hover:bg-white/10 transition-all flex items-center justify-center"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'max(13px, 1.25vw)',
                lineHeight: '135%',
                paddingTop: 'max(12px, 1.39vw)',
                paddingBottom: 'max(12px, 1.39vw)',
                paddingLeft: 'max(20px, 2.78vw)',
                paddingRight: 'max(20px, 2.78vw)',
                gap: 'max(3px, 0.28vw)',
                minWidth: 'max(180px, 23.96vw)',
                height: 'max(44px, 4.44vw)',
                background: 'transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                borderRadius: '10px',
              }}
            >
              Explore Strategic solutions
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
            </button>
          </div>
        </div>
      </div>

    </>
  );
}
