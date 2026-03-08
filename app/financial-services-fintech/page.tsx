'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FinancialServicesFinTech() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto" style={{ paddingTop: '140px' }}>

        {/* Content Container */}
        <div className="relative" style={{ height: '500px' }}>

          {/* Heading */}
          <h1
            className="absolute font-poppins font-semibold"
            style={{
              top: '30px',
              left: '118px',
              width: '802.78px',
              fontSize: '45px',
              lineHeight: '46px',
              color: '#14358A',
              letterSpacing: '0%'
            }}
          >
            Navigating the Future of Finance
          </h1>

          {/* Description */}
          <p
            className="absolute font-montserrat font-normal"
            style={{
              top: '100px',
              left: '118px',
              width: '740px',
              fontSize: '30px',
              lineHeight: '140%',
              color: '#333333'
            }}
          >
            As legacy institutions and agile FinTechs converge, the industry faces a dual mandate: absolute security and rapid innovation. We partner with financial leaders to navigate regulatory shifts and technological disruption, building the resilient systems required to thrive in a digital-first economy.
          </p>

          {/* Circular Hero Image */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: '0px',
              left: '960px',
              width: '416px',
              height: '424px',
              borderRadius: '208px'
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
      <div className="relative w-full pointer-events-none" style={{ height: '160px' }}>
        {/* Bar 1 - Light gray, wider, top */}
        <div
          className="absolute"
          style={{
            width: '325px',
            height: '60px',
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
            height: '60px',
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
      <div className="relative w-full bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="relative max-w-[1440px] mx-auto flex flex-col items-center px-6">

          {/* Section Title */}
          <h2
            className="font-poppins font-semibold text-center"
            style={{
              fontSize: '50px',
              lineHeight: '46px',
              letterSpacing: '0%',
              color: '#14358A',
              marginBottom: '48px'
            }}
          >
            Your Strategic Partner
          </h2>
          <p
            className="font-montserrat font-normal mx-auto"
            style={{
              fontSize: '32px',
              lineHeight: 'normal',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333',
              maxWidth: '1342px',
              marginBottom: 0
            }}
          >
            PMG partners with banks, asset managers, insurers, &amp; fintechs to deliver a balance of strategic insight &amp; operational expertise. We enable organizations to strengthen performance, manage risk, &amp; deliver sustainable value in an environment of constant disruption.
          </p>
          <p
            className="font-montserrat font-normal mx-auto"
            style={{
              fontSize: '32px',
              lineHeight: 'normal',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333',
              maxWidth: '1342px'
            }}
          >
            Our financial services work is complemented by PMG&apos;s cross-sector expertise in technology &amp; organizational transformation, equipping leaders to address challenges across governance, digital adoption, &amp; market positioning.
          </p>
        </div>
      </div>

      {/* Decorative Bars - Between Partner and Our Work Section */}
      <div className="relative w-full pointer-events-none" style={{ height: '160px' }}>
        {/* Bar 1 - Blue, right side, top */}
        <div
          className="absolute"
          style={{
            width: '200px',
            height: '60px',
            right: '-10px',
            top: '20px',
            opacity: 1,
            background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)',
            transform: 'rotate(8deg)',
            transformOrigin: 'right center'
          }}
        />
        {/* Bar 2 - Light gray, right side, bottom */}
        <div
          className="absolute"
          style={{
            width: '325px',
            height: '60px',
            right: '-10px',
            top: '60px',
            opacity: 0.2,
            background: '#5B9BD5',
            transform: 'rotate(8deg)',
            transformOrigin: 'right center'
          }}
        />
      </div>

      {/* Our Work Section */}
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: '48px', lineHeight: '105%', letterSpacing: '-3%' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: '30px', lineHeight: '140%', maxWidth: '1082px', textAlign: 'center' }}
            >
              Our work supports strategy, operations, & transformation—equipping financial leaders with the tools to deliver meaningful change.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 412px)',
              gap: '60px 26px',
              justifyContent: 'center'
            }}
          >
            {/* Card 1: Growth & Go-to-Market Strategy */}
            <div
              className="bg-white"
              style={{
                width: '412px',
                height: '227px',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <img src="/icon-strategy-transformation.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Growth & Go-to-Market Strategy
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%', marginTop: '8px' }}
              >
                Define and implement growth strategies that balance speed with sustainability, covering GTM planning, international expansion, and optimized pricing models.
              </p>
            </div>

            {/* Card 2: Operational Excellence & Scalability */}
            <div
              className="bg-white"
              style={{
                width: '412px',
                height: '227px',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <img src="/icon-risk-resilience.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Operational Excellence & Scalability
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%', marginTop: '8px' }}
              >
                Improve organizational performance, optimize core processes, and deploy digital transformation initiatives to ensure sustained efficiency at scale.
              </p>
            </div>

            {/* Card 3: M&A, Funding, & Financial Performance */}
            <div
              className="bg-white"
              style={{
                width: '412px',
                height: '227px',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <img src="/icon-customer-experience.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: '28px', lineHeight: '105%', letterSpacing: '-0.84px', paddingTop: '8px' }}
                >
                  M&A, Funding, & Financial Performance
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%', marginTop: '8px' }}
              >
                Support M&A, capital funding, and IPO readiness by strengthening financial performance, optimizing portfolios, and enhancing the investment story.
              </p>
            </div>

            {/* Card 4: Innovation & Product Strategy */}
            <div
              className="bg-white"
              style={{
                width: '412px',
                height: '227px',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <img src="/icon-regulatory-compliance.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '9px' }}
                >
                  Innovation & Product Strategy
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%', marginTop: '8px' }}
              >
                Shape innovation agendas, prioritize R&D, and design product strategies (including portfolio and roadmap development) that align with market opportunities.
              </p>
            </div>

            {/* Card 5: AI & Automation Integration */}
            <div
              className="bg-white"
              style={{
                width: '412px',
                height: '227px',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <img src="/icon-innovation-fintech.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '9px' }}
                >
                  AI & Automation Integration
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%', marginTop: '8px' }}
              >
                Harness AI and automation to enhance product offerings, dramatically improve internal efficiency, and create new, measurable sources of value.
              </p>
            </div>

            {/* Card 6: Cloud Strategy & Migration */}
            <div
              className="bg-white"
              style={{
                width: '412px',
                height: '227px',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <img src="/icon-capital-performance.png" alt="" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-0.87px', paddingTop: '7px' }}
                >
                  Cloud Strategy & Migration
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%', marginTop: '8px' }}
              >
                Develop and execute cloud strategies (public, private, or hybrid) that optimize cost, improve scalability, and accelerate organizational innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div
        className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(/projects-bg-financial.png)',
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

        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Section Title */}
          <h2
            className="font-poppins font-semibold text-white text-center mb-16"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%'
            }}
          >
            Our Projects
          </h2>

          {/* Project Cards Grid */}
          <div
            className="flex justify-center flex-wrap"
            style={{ gap: '64px' }}
          >
            {/* Card 1: Trilogy Software */}
            <div
              className="bg-white relative overflow-hidden"
              style={{
                width: '381px',
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
                  height: '240px',
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
                    fontSize: '30px',
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        $8M
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        16%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        77x
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
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
                width: '381px',
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
                  height: '240px',
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
                    fontSize: '30px',
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        3,500
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        65%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        23x
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
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
                width: '381px',
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
                  height: '240px',
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
                    fontSize: '30px',
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        22%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        14%
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                      <p className="font-dm-sans font-bold" style={{ fontSize: '24px', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}>
                        20x
                      </p>
                    </div>
                    <p className="font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}>
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
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
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

      {/* Decorative Bars - Above Functional Consulting Advantage */}
      <div className="relative w-full pointer-events-none" style={{ height: '160px' }}>
        {/* Bar 1 - Light gray, wider, top */}
        <div
          className="absolute"
          style={{
            width: '325px',
            height: '60px',
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
            height: '60px',
            left: '-10px',
            top: '60px',
            opacity: 1,
            background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)',
            transform: 'rotate(8deg)',
            transformOrigin: 'left center'
          }}
        />
      </div>

      {/* The Functional Consulting Advantage Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2
            className="text-center whitespace-nowrap mb-10"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            The Functional Consulting Advantage
          </h2>

          <div className="max-w-[1082px] text-center">
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '30px',
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
                fontSize: '30px',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              PMG&apos;s model delivers validated, compliant execution. We deploy specialized functional operators, experts in areas like modernizing core banking systems, implementing AI–driven risk models, optimizing regulatory reporting (e.g., Basel, KYC/AML), and scaling new FinTech products. Our specialists don&apos;t just advise; they implement proven systems and processes that ensure your transformation is not only efficient and differentiated in the market but is fully auditable and compliant from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bars - Below Functional Consulting Advantage */}
      <div className="relative w-full pointer-events-none" style={{ height: '160px' }}>
        {/* Bar 1 - Blue, right side, top */}
        <div
          className="absolute"
          style={{
            width: '200px',
            height: '60px',
            right: '-10px',
            top: '20px',
            opacity: 1,
            background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)',
            transform: 'rotate(8deg)',
            transformOrigin: 'right center'
          }}
        />
        {/* Bar 2 - Light gray, right side, bottom */}
        <div
          className="absolute"
          style={{
            width: '325px',
            height: '60px',
            right: '-10px',
            top: '60px',
            opacity: 0.2,
            background: '#5B9BD5',
            transform: 'rotate(8deg)',
            transformOrigin: 'right center'
          }}
        />
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
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-3%'
          }}
        >
          Partner with PMG to Build a Resilient Future
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: '32px',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: '1196px'
          }}
        >
          Let&apos;s work together to navigate the complexities of the financial sector &amp; drive sustainable growth.
        </p>
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: '393px',
            height: '65px',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: '20px',
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
