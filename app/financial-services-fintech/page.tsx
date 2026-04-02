'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurProjectsSection, { DollarIcon, TrendUpIcon, ScreenIcon, CheckIcon } from '@/components/OurProjectsSection';
import type { ProjectCardData } from '@/components/OurProjectsSection';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

const financialProjects: ProjectCardData[] = [
  {
    title: 'Prestige1 Capital',
    stats: [
      { icon: <DollarIcon />, value: <><AnimatedCounter end={9.57} suffix="M" /></>, label: 'in new yearly profit generated' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={2.6} suffix="x" /></>, label: 'higher ROI than typical investments' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={43} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
  {
    title: 'Kraken',
    stats: [
      { icon: <CheckIcon />, value: <><AnimatedCounter end={22} suffix="%" /></>, label: 'increase in customer satisfaction' },
      { icon: <ScreenIcon />, value: <><AnimatedCounter end={40} suffix="%" /></>, label: 'reduction in signup-to-activation time' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={23} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
  {
    title: 'Artemis Capital',
    stats: [
      { icon: <ScreenIcon />, value: <><AnimatedCounter end={12} suffix="%" /></>, label: 'reduction in operating expenses' },
      { icon: <ScreenIcon />, value: <><AnimatedCounter end={25} suffix="%" /></>, label: 'reduction in low-value personnel spend' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={22} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
];

export default function FinancialServicesFinTech() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)]" style={{ paddingTop: 'clamp(100px, 9.72vw, 140px)', paddingBottom: 'clamp(32px, 3vw, 48px)' }}>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">

          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 w-full lg:max-w-[calc(100%-clamp(300px,30vw,440px)-3rem)]">
            {/* Heading */}
            <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000' }}>Financial Services &amp; FinTech</p>
            <h1
              className="font-dm-sans font-bold"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Navigating the Future of Finance
            </h1>

            {/* Description */}
            <p
              className="font-montserrat font-normal"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '140%',
                color: '#333333'
              }}
            >
              As legacy institutions and agile FinTechs converge, the industry faces a dual mandate: absolute security and rapid innovation. We partner with financial leaders to navigate regulatory shifts and technological disruption, building the resilient systems required to thrive in a digital-first economy.
            </p>
          </div>

          {/* Circular Hero Image */}
          <div
            className="overflow-hidden flex-shrink-0 mx-auto lg:mx-0"
            style={{
              width: 'clamp(240px, 28.89vw, 416px)',
              height: 'clamp(240px, 29.44vw, 424px)',
              borderRadius: '50%'
            }}
          >
            <img
              src="/financial-services-hero.png"
              alt="Financial Services"
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

      {/* Decorative Bars - Between Hero and Partner Section */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Bar 1 - Light gray, wider, top */}
        <div
          className="absolute"
          style={{
            width: '325px',
            height: 'clamp(44px, 4.17vw, 60px)',
            left: '-10px',
            top: '20px',
            opacity: 0.2,
            background: '#888895',
            transform: 'rotate(8deg)',
            transformOrigin: 'left center'
          }}
        />
        {/* Bar 2 - Blue, narrower, bottom */}
        <div
          className="absolute"
          style={{
            width: '200px',
            height: 'clamp(44px, 4.17vw, 60px)',
            left: '-10px',
            top: '60px',
            opacity: 1,
            background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)',
            transform: 'rotate(8deg)',
            transformOrigin: 'left center'
          }}
        />
      </div>

      {/* Your Partner in a High-Growth Sector Section */}
      <FadeInSection delay={0.1} direction="up">
      <div className="relative w-full bg-white" style={{ paddingTop: 'clamp(60px, 8.33vw, 120px)', paddingBottom: 'clamp(60px, 8.33vw, 120px)' }}>
        <div className="relative max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center px-6">

          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-center"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: 'clamp(24px, 3.33vw, 48px)'
            }}
          >
            Your Strategic Partner
          </h2>
          <p
            className="font-montserrat font-normal mx-auto"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: 'normal',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333',
              maxWidth: 'min(1342px, 90%)',
              marginBottom: 0
            }}
          >
            PMG partners with banks, asset managers, insurers, &amp; fintechs to deliver a balance of strategic insight &amp; operational expertise. We enable organizations to strengthen performance, manage risk, &amp; deliver sustainable value in an environment of constant disruption.
          </p>
          <p
            className="font-montserrat font-normal mx-auto"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: 'normal',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333',
              maxWidth: 'min(1342px, 90%)'
            }}
          >
            Our financial services work is complemented by PMG&apos;s cross-sector expertise in technology &amp; organizational transformation, equipping leaders to address challenges across governance, digital adoption, &amp; market positioning.
          </p>
        </div>
      </div>
      </FadeInSection>

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: 'clamp(44px, 4.17vw, 60px)', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: 'clamp(44px, 4.17vw, 60px)', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <FadeInSection delay={0.2} direction="up">
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '140%', maxWidth: 'min(1082px, 90%)', textAlign: 'center' }}
            >
              Our work supports strategy, operations, & transformation—equipping financial leaders with the tools to deliver meaningful change.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: 'clamp(30px, 4.17vw, 60px) clamp(16px, 1.81vw, 26px)',
              justifyContent: 'center'
            }}
          >
            {/* Card 1: Growth & Go-to-Market Strategy */}
            <div
              className="bg-white"
              style={{
                width: '100%',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
              }}
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
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Strategy & Transformation
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Set bold enterprise strategies and deliver transformation at scale, covering M&A integration, digital roadmaps, and operating model modernization.
              </p>
            </div>

            {/* Card 2: Operational Excellence & Scalability */}
            <div
              className="bg-white"
              style={{
                width: '100%',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5"/>
                    <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Risk & Operational Resilience
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Optimize processes and strengthen risk frameworks to enhance operational resilience, ensure regulatory compliance, and drive performance improvements.
              </p>
            </div>

            {/* Card 3: M&A, Funding, & Financial Performance */}
            <div
              className="bg-white"
              style={{
                width: '100%',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.84px', paddingTop: '8px' }}
                >
                  Customer & Digital Experience
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Build digital-first experiences, modernize service delivery, and improve customer acquisition and loyalty in a highly competitive market.
              </p>
            </div>

            {/* Card 4: Innovation & Product Strategy */}
            <div
              className="bg-white"
              style={{
                width: '100%',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
              }}
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
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '9px' }}
                >
                  Regulatory & Compliance Strategy
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Navigate evolving regulations, enhance compliance frameworks, and embed risk management practices for data governance, capital adequacy, and regulatory reporting.
              </p>
            </div>

            {/* Card 5: AI & Automation Integration */}
            <div
              className="bg-white"
              style={{
                width: '100%',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
              }}
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
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '9px' }}
                >
                  Innovation & Fintech Partnerships
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Advise on innovation strategy, product development, and strategic partnerships to capture value from emerging trends in payments, lending, and digital assets.
              </p>
            </div>

            {/* Card 6: Cloud Strategy & Migration */}
            <div
              className="bg-white"
              style={{
                width: '100%',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Capital & Financial Performance
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Strengthen financial performance through capital optimization, portfolio review, and advanced financial modeling to ensure market competitiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Our Projects Section */}
      <FadeInSection delay={0.3} direction="up">
      <OurProjectsSection projects={financialProjects} backgroundImage="/projects-bg-financial.webp" />
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
            We deliver tangible results that strengthen financial performance, regulatory compliance, and competitive advantage.
          </p>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <FadeInSection delay={0.4} direction="up">
      <div className="bg-white py-24 px-6">
        <div className="max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center">
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
              Financial Services and FinTech operate at the intersection of hyper–regulation and rapid technological change. Generalist consultants often provide broad recommendations on market trends or digital strategy that fail to account for the core challenges of regulatory compliance, legacy system modernization, and risk management. Their advice is often rendered impractical by the necessity of robust audit trails and jurisdictional complexity.
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
              PMG&apos;s model delivers validated, compliant execution. We deploy specialized functional operators, experts in areas like modernizing core banking systems, implementing AI–driven risk models, optimizing regulatory reporting (e.g., Basel, KYC/AML), and scaling new FinTech products. Our specialists don&apos;t just advise; they implement proven systems and processes that ensure your transformation is not only efficient and differentiated in the market but is fully auditable and compliant from day one.
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
              Discover how we deliver technological agility without compromising regulatory integrity or stability.
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Call to Action Section */}
      <FadeInSection delay={0.5} direction="up">
      <div
        className="text-center flex flex-col items-center"
        style={{
          background: '#EBF7FF',
          padding: '80px 40px'
        }}
      >
        <h2
          className="font-dm-sans font-bold text-[#14358A] mb-6"
          style={{
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em'
          }}
        >
          Partner with PMG to Build a Resilient Future
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: 'clamp(15px, 1.375vw, 19.8px)',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: 'min(1196px, 95%)'
          }}
        >
          Let&apos;s work together to navigate the complexities of the financial sector &amp; drive sustainable growth.
        </p>
        <Link
          href="/why-functional-consulting"
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: 'clamp(260px, 27.29vw, 393px)',
            height: 'clamp(48px, 4.51vw, 65px)',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: 'clamp(15px, 1.39vw, 22px)',
            lineHeight: '140%',
            letterSpacing: '0%',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Learn about Functional Consulting
        </Link>
      </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
