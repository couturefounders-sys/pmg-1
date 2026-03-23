'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FinancialServicesFinTech() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)]" style={{ paddingTop: 'clamp(100px, 9.72vw, 140px)', paddingBottom: 'clamp(32px, 3vw, 48px)' }}>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">

          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 w-full lg:max-w-[calc(100%-clamp(300px,30vw,440px)-3rem)]">
            {/* Heading */}
            <h1
              className="font-dm-sans font-bold"
              style={{
                fontSize: 'clamp(28px, 3.33vw, 56px)',
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
                fontSize: 'clamp(18px, 2.22vw, 36px)',
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
      <div className="relative w-full bg-white" style={{ paddingTop: 'clamp(60px, 8.33vw, 120px)', paddingBottom: 'clamp(60px, 8.33vw, 120px)' }}>
        <div className="relative max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center px-6">

          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-center"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
              fontSize: 'clamp(18px, 2.22vw, 36px)',
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
              fontSize: 'clamp(18px, 2.22vw, 36px)',
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

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: 'clamp(44px, 4.17vw, 60px)', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: 'clamp(44px, 4.17vw, 60px)', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: 'clamp(18px, 2.22vw, 36px)', lineHeight: '140%', maxWidth: 'min(1082px, 90%)', textAlign: 'center' }}
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
                <img src="/icon-strategy-transformation.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 29px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Strategy & Transformation
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '140%', marginTop: '8px' }}
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
                <img src="/icon-risk-resilience.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 29px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Risk & Operational Resilience
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '140%', marginTop: '8px' }}
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
                <img src="/icon-customer-experience.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 29px)', lineHeight: '105%', letterSpacing: '-0.84px', paddingTop: '8px' }}
                >
                  Customer & Digital Experience
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '140%', marginTop: '8px' }}
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
                <img src="/icon-regulatory-compliance.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 29px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '9px' }}
                >
                  Regulatory & Compliance Strategy
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', marginTop: '8px' }}
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
                <img src="/icon-innovation-fintech.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 29px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '9px' }}
                >
                  Innovation & Fintech Partnerships
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '140%', marginTop: '8px' }}
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
                <img src="/icon-capital-performance.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 29px)', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Capital & Financial Performance
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '140%', marginTop: '8px' }}
              >
                Strengthen financial performance through capital optimization, portfolio review, and advanced financial modeling to ensure market competitiveness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div
        className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(/projects-bg-financial.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '852px'
        }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />

        <div className="max-w-[min(1300px,_95%)] mx-auto relative z-10">
          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-white text-center mb-16"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em'
            }}
          >
            Our Projects
          </h2>

          {/* Project Cards Grid */}
          <div
            className="flex justify-center flex-wrap"
            style={{ gap: 'clamp(24px, 4.44vw, 64px)' }}
          >
            {/* Card 1: Trilogy Software */}
            <div
              className="bg-white relative overflow-hidden"
              style={{
                width: 'clamp(280px, 26.46vw, 381px)',
                minHeight: '378px',
                borderRadius: '10px',
                border: '1px solid #E0E7EF',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '48px'
              }}
            >
              {/* Pattern Overlay */}
              <div
                className="absolute top-0 left-0"
                style={{
                  width: '375px',
                  height: 'clamp(160px, 16.67vw, 240px)',
                  background: '#EBF7FF',
                  clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)',
                  zIndex: 0
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col" style={{ gap: '24px' }}>
                <h3
                  className="font-dm-sans font-bold text-center"
                  style={{
                    fontSize: 'clamp(18px, 2.08vw, 34px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.9px',
                    color: '#006FBA'
                  }}
                >
                  Trilogy Software
                </h3>

                {/* Stats */}
                <div className="flex flex-col" style={{ gap: '20px' }}>
                  {/* Stat 1 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <circle cx="14" cy="14" r="6" stroke="#006FBA" strokeWidth="2"/>
                        <path d="M14 11V17M12 14.5H16" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        $8M
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      in annual support costs saved
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <path d="M8 18L12 13L16 15L20 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 10H20V13" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        16%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      increase in Customer Satisfaction
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <rect x="6" y="10" width="16" height="10" rx="1" stroke="#006FBA" strokeWidth="2"/>
                        <circle cx="11" cy="15" r="2" stroke="#006FBA" strokeWidth="1.5"/>
                        <path d="M17 20L15 17L13 19" stroke="#006FBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        77x
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto relative z-10">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: 'clamp(44px, 4.17vw, 60px)',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
                    lineHeight: '1.4',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2: Kraken */}
            <div
              className="bg-white relative overflow-hidden"
              style={{
                width: 'clamp(280px, 26.46vw, 381px)',
                minHeight: '378px',
                borderRadius: '10px',
                border: '1px solid #E0E7EF',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '48px'
              }}
            >
              {/* Pattern Overlay */}
              <div
                className="absolute top-0 left-0"
                style={{
                  width: '375px',
                  height: 'clamp(160px, 16.67vw, 240px)',
                  background: '#EBF7FF',
                  clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)',
                  zIndex: 0
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col" style={{ gap: '24px' }}>
                <h3
                  className="font-dm-sans font-bold text-center"
                  style={{
                    fontSize: 'clamp(18px, 2.08vw, 34px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.9px',
                    color: '#006FBA'
                  }}
                >
                  Kraken
                </h3>

                {/* Stats */}
                <div className="flex flex-col" style={{ gap: '20px' }}>
                  {/* Stat 1 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <circle cx="14" cy="14" r="6" stroke="#006FBA" strokeWidth="2"/>
                        <path d="M14 11V17M12 14.5H16" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        3,500
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      ticket backlog eliminated
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <rect x="6" y="10" width="16" height="10" rx="1" stroke="#006FBA" strokeWidth="2"/>
                        <circle cx="11" cy="15" r="2" stroke="#006FBA" strokeWidth="1.5"/>
                        <path d="M17 20L15 17L13 19" stroke="#006FBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        65%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      reduction in first-response time
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <path d="M10 14L13 17L19 11" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        23x
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto relative z-10">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: 'clamp(44px, 4.17vw, 60px)',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
                    lineHeight: '1.4',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3: Artemis Capital */}
            <div
              className="bg-white relative overflow-hidden"
              style={{
                width: 'clamp(280px, 26.46vw, 381px)',
                minHeight: '378px',
                borderRadius: '10px',
                border: '1px solid #E0E7EF',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '48px'
              }}
            >
              {/* Pattern Overlay */}
              <div
                className="absolute top-0 left-0"
                style={{
                  width: '375px',
                  height: 'clamp(160px, 16.67vw, 240px)',
                  background: '#EBF7FF',
                  clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)',
                  zIndex: 0
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col" style={{ gap: '24px' }}>
                <h3
                  className="font-dm-sans font-bold text-center"
                  style={{
                    fontSize: 'clamp(18px, 2.08vw, 34px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.9px',
                    color: '#006FBA'
                  }}
                >
                  Artemis Capital
                </h3>

                {/* Stats */}
                <div className="flex flex-col" style={{ gap: '20px' }}>
                  {/* Stat 1 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <circle cx="14" cy="14" r="6" stroke="#006FBA" strokeWidth="2"/>
                        <path d="M14 11V17M12 14.5H16" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        22%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      reduction in customer churn
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <rect x="6" y="10" width="16" height="10" rx="1" stroke="#006FBA" strokeWidth="2"/>
                        <circle cx="11" cy="15" r="2" stroke="#006FBA" strokeWidth="1.5"/>
                        <path d="M17 20L15 17L13 19" stroke="#006FBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        14%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      increase in post-acquisition margin
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div>
                    <div className="flex items-center" style={{ gap: '8px' }}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
                        <path d="M10 14L13 17L19 11" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        20x
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto relative z-10">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: 'clamp(44px, 4.17vw, 60px)',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
                    lineHeight: '1.4',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center">
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
                fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                fontSize: 'clamp(18px, 2.08vw, 34px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              PMG&apos;s model delivers validated, compliant execution. We deploy specialized functional operators, experts in areas like modernizing core banking systems, implementing AI–driven risk models, optimizing regulatory reporting (e.g., Basel, KYC/AML), and scaling new FinTech products. Our specialists don&apos;t just advise; they implement proven systems and processes that ensure your transformation is not only efficient and differentiated in the market but is fully auditable and compliant from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
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
            fontSize: 'clamp(28px, 3.33vw, 56px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em'
          }}
        >
          Partner with PMG to Build a Resilient Future
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: 'clamp(20px, 2.22vw, 36px)',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: 'min(1196px, 95%)'
          }}
        >
          Let&apos;s work together to navigate the complexities of the financial sector &amp; drive sustainable growth.
        </p>
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: 'clamp(260px, 27.29vw, 393px)',
            height: 'clamp(48px, 4.51vw, 65px)',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: 'clamp(15px, 1.39vw, 22px)',
            lineHeight: '140%',
            letterSpacing: '0%'
          }}
        >
          Learn about Functional Consulting
        </button>
      </div>

      <Footer />
    </main>
  );
}
