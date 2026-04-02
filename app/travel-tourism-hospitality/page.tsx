'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurProjectsSection, { DollarIcon, TrendUpIcon, CheckIcon } from '@/components/OurProjectsSection';
import type { ProjectCardData } from '@/components/OurProjectsSection';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

const travelProjects: ProjectCardData[] = [
  {
    title: 'Hilton Hotels',
    stats: [
      { icon: <DollarIcon />, value: <><AnimatedCounter end={8} suffix="M" />$</>, label: 'in additional annual profit' },
      { icon: <CheckIcon />, value: <><AnimatedCounter end={11} suffix="%" /></>, label: 'reduction in operational costs' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={28} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
  {
    title: 'Hyatt Hotels',
    stats: [
      { icon: <DollarIcon />, value: <><AnimatedCounter end={9} suffix="M" />$</>, label: 'in new revenue generated' },
      { icon: <CheckIcon />, value: <><AnimatedCounter end={60} suffix="%" /></>, label: 'occupancy sustained during pandemic' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={18} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
  {
    title: 'Wyndham Hotels',
    stats: [
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={30} suffix="%" /></>, label: 'increase in RevPAR' },
      { icon: <CheckIcon />, value: <><AnimatedCounter end={8} suffix="%" /></>, label: 'increase in total operating margin' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={21} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
];

export default function TravelTourismHospitality() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(140px,16.32vw,235px)] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000' }}>Travel, Tourism &amp; Hospitality</p>
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
              letterSpacing: '0%',
            }}
          >
            Elevating the Guest Experience
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              maxWidth: 'min(740px, 95%)'
            }}
          >
            Hospitality thrives on consistency, yet remains highly sensitive to labor shifts and digital disruption. We help brands stabilize their operations and refine their service delivery models, ensuring every guest experience drives long-term loyalty and measurable financial performance.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div 
            className="rounded-full overflow-hidden"
            style={{
              width: 'clamp(240px, 27.64vw, 398px)',
              height: 'clamp(250px, 25.83vw, 372px)',
            }}
          >
            <img
              src="/travel-hospitality-hero.png"
              alt="Travel & Hospitality"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

      </div>
      </FadeInSection>

      {/* Decorative Bars - Top Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', top: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
        <div className="absolute" style={{ width: '200px', height: '60px', left: '-10px', top: '60px', opacity: 1, background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Your Partner Section */}
      <FadeInSection delay={0.1} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="text-center">
          <h2
            className="mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '46px',
              letterSpacing: '0%',
              color: '#14358A',
            }}
          >
            Your Partner
          </h2>

          <div className="max-w-[1342px] mx-auto">
            <p
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
              }}
            >
              PMG partners with hospitality organizations of all sizes, from global hotel brands to boutique properties. Our consultants combine deep expertise in strategy, operations, and customer experience to help clients enhance performance, differentiate in competitive markets, and deliver long-term value.
            </p>

            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
              }}
            >
              Our hospitality work is supported by cross-industry expertise in finance, technology, workforce transformation, and customer-centric design, enabling leaders to innovate while strengthening operational and financial foundations.
            </p>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: '60px', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <FadeInSection delay={0.2} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
            }}
          >
            Our Work
          </h2>

          <p
            className="max-w-[min(1082px,_90%)] mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
            }}
          >
            We help hospitality leaders balance world-class guest experiences with operational and financial excellence.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
          {/* Growth & Market Strategy */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Growth & Market Positioning
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
              }}
            >
              Define growth strategies, refine brand positioning, and identify new market opportunities through pricing optimization and loyalty program design.
            </p>
          </div>

          {/* Guest Experience & Service Innovation */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5"/>
                  <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Guest Experience & Service Innovation
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
              }}
            >
              Design end-to-end guest journeys, integrating digital touchpoints and personalization strategies to create memorable experiences and drive brand loyalty.
            </p>
          </div>

          {/* Operational Efficiency & Profitability */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Operational Efficiency & Profitability
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
              }}
            >
              Streamline processes, optimize property utilization, and improve back-of-house performance to enhance financial controls and boost profitability.
            </p>
          </div>

          {/* Digital Transformation */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M3 7l9-4 9 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="5" y="7" width="14" height="14" stroke="white" strokeWidth="1.5"/>
                  <path d="M9 11h2M13 11h2M9 15h2M13 15h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Digital Transformation
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
              }}
            >
              Adopt and integrate digital platforms (CRM, revenue management) and data-driven tools to simultaneously improve operational efficiency and guest engagement.
            </p>
          </div>

          {/* Workforce Strategy */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="1.5" fill="white"/>
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Workforce Strategy
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
              }}
            >
              Advise on workforce planning, training, and cultural initiatives that enhance employee satisfaction while directly improving service quality and retention.
            </p>
          </div>

          {/* Sustainability & ESG Strategy */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Sustainability & ESG Strategy
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
              }}
            >
              Embed sustainability (ESG) into operations, supply chains, and brand strategy to create positive impact and strengthen institutional reputation.
            </p>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Our Projects Section */}
      <FadeInSection delay={0.3} direction="up">
      <OurProjectsSection projects={travelProjects} backgroundImage="/project-bg.webp" />
      </FadeInSection>

      {/* Our Projects Description Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#1E1E1E',
              marginBottom: '16px',
            }}
          >
            Our Projects
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '140%',
              color: '#64748B',
              maxWidth: 'min(800px, 95%)',
              margin: '0 auto',
            }}
          >
            We deliver tangible results that drive profitability and create world-class guest experiences for our hospitality clients.
          </p>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <FadeInSection delay={0.4} direction="up">
      <div className="relative w-full py-20 bg-white overflow-hidden">

        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            The Functional Consulting Advantage
          </h2>

          <div className="max-w-[min(1082px,_90%)] text-center">
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              The hospitality industry is a delicate balance of guest experience and operational precision. Industry-focused consultants often suggest surface-level fixes that don&apos;t address the deep-rooted operational or financial inefficiencies that impact service quality.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              PMG&apos;s functional consulting approach provides the necessary depth. We deploy experts in specific functions, like operational excellence, customer experience design, and workforce management, who bring proven models for success. They adapt these world-class frameworks to the unique context of your property or brand, ensuring that operational improvements directly translate into superior guest experiences and a stronger bottom line.
            </p>
          </div>

          <div className="text-center mt-16">
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#364153',
              }}
            >
              Still Unsure?
            </p>
            <a
              href="/why-functional-consulting"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Discover how functional precision unlocks five-star guest experiences and stronger margins.
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Partner with PMG CTA Section */}
      <FadeInSection delay={0.5} direction="up">
      <div 
        className="relative w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)',
        }}
      >
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2 
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Ready to Elevate Your Guest Experience?
          </h2>

          <p 
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: 'min(1196px, 95%)',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let's work together to create exceptional guest experiences and drive sustainable growth.
          </p>

          <button 
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: 'clamp(260px, 27.29vw, 393px)',
              height: 'clamp(48px, 4.51vw, 65px)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Request a Consultation
          </button>
        </div>
      </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
