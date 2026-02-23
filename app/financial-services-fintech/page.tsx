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

      {/* Your Strategic Partner Section */}
      <div className="relative w-full bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="relative max-w-[1440px] mx-auto px-12">

          {/* Section Title */}
          <h2
            className="font-poppins font-semibold text-center"
            style={{
              fontSize: '50px',
              lineHeight: '46px',
              color: '#14358A',
              letterSpacing: '0%',
              marginBottom: '60px'
            }}
          >
            Your Strategic Partner
          </h2>

          {/* Section Description */}
          <div
            className="font-montserrat font-normal mx-auto"
            style={{
              width: '1342px',
              fontSize: '32px',
              lineHeight: '100%',
              color: '#333333',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            <p style={{ marginBottom: '40px' }}>
              PMG partners with banks, asset managers, insurers, & fintechs to deliver a balance of strategic insight & operational expertise. We enable organizations to strengthen performance, manage risk, & deliver sustainable value in an environment of constant disruption.
            </p>
            <p>
              Our financial services work is complemented by PMG&apos;s cross-sector expertise in technology & organizational transformation, equipping leaders to address challenges across governance, digital adoption, & market positioning.
            </p>
          </div>

        </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Strategy & Transformation */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#14358A', borderRadius: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8L20 12L16 16L12 12L16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 16L12 20L8 24L4 20L8 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 16L28 20L24 24L20 20L24 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 16L20 20L16 24L12 20L16 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Strategy & Transformation
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Set bold enterprise strategies and deliver transformation at scale, covering M&A integration, digital roadmaps, and operating model modernization.
              </p>
            </div>

            {/* Card 2: Risk & Operational Resilience */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#14358A', borderRadius: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 16L16 22L28 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 22L16 28L28 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Risk & Operational Resilience
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Optimize processes and strengthen risk frameworks to enhance operational resilience, ensure regulatory compliance, and drive performance improvements.
              </p>
            </div>

            {/* Card 3: Customer & Digital Experience */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#14358A', borderRadius: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth="2"/>
                  <path d="M16 12V16L19 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Customer & Digital Experience
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Build digital-first experiences, modernize service delivery, and improve customer acquisition and loyalty in a highly competitive market.
              </p>
            </div>

            {/* Card 4: Regulatory & Compliance Strategy */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#14358A', borderRadius: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="4" width="16" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 4V2M20 4V2M8 10H24M12 14H20M12 18H20M12 22H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Regulatory & Compliance Strategy
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Navigate evolving regulations, enhance compliance frameworks, and embed risk management practices for data governance, capital adequacy, and regulatory reporting.
              </p>
            </div>

            {/* Card 5: Innovation & Fintech Partnerships */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#14358A', borderRadius: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L19 12L26 13L21 18L22 25L16 22L10 25L11 18L6 13L13 12L16 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Innovation & Fintech Partnerships
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Advise on innovation strategy, product development, and strategic partnerships to capture value from emerging trends in payments, lending, and digital assets.
              </p>
            </div>

            {/* Card 6: Capital & Financial Performance */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#14358A', borderRadius: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 28L10 22L16 26L28 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 14H28V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Capital & Financial Performance
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
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
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
          minHeight: '700px'
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Top left diagonal line */}
          <div
            className="absolute"
            style={{
              top: '0',
              left: '0',
              width: '300px',
              height: '2px',
              background: 'rgba(59, 130, 246, 0.5)',
              transform: 'rotate(30deg)',
              transformOrigin: 'top left'
            }}
          />
          {/* Bottom left blue shape */}
          <div
            className="absolute"
            style={{
              bottom: '-50px',
              left: '-50px',
              width: '250px',
              height: '250px',
              background: 'rgba(37, 99, 235, 0.3)',
              transform: 'rotate(45deg)'
            }}
          />
          {/* Top right cyan shape */}
          <div
            className="absolute"
            style={{
              top: '50px',
              right: '-100px',
              width: '400px',
              height: '400px',
              background: 'rgba(6, 182, 212, 0.3)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              transform: 'rotate(15deg)'
            }}
          />
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1: Prestige1 Capital */}
            <div
              className="bg-[#E8F0FE] hover:shadow-xl transition-shadow duration-300 relative"
              style={{
                width: '340px',
                minHeight: '420px',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3
                className="font-poppins font-semibold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  color: '#1e40af',
                  marginBottom: '8px'
                }}
              >
                Prestige1 Capital
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="6" width="18" height="14" rx="2" stroke="#1e40af" strokeWidth="2"/>
                      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#1e40af" strokeWidth="2"/>
                      <path d="M7 6V4M17 6V4" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      $9.7M
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      in new yearly profit generated
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 18L9 12L13 16L21 8" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 8V14M21 8H15" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      2.6x
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      higher ROI than typical investments
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7L10 17L5 12" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      43x
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-poppins font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '180px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'linear-gradient(112.8deg, #8B5CF6 -15.76%, #A78BFA 102.86%)',
                    fontSize: '18px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2: Kraken */}
            <div
              className="bg-[#E8F0FE] hover:shadow-xl transition-shadow duration-300 relative"
              style={{
                width: '340px',
                minHeight: '420px',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3
                className="font-poppins font-semibold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  color: '#1e40af',
                  marginBottom: '8px'
                }}
              >
                Kraken
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1e40af" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      22%
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      increase in customer satisfaction
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="#1e40af" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      40%
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      reduction in signup-to-activation time
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7L10 17L5 12" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      23x
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-poppins font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '180px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'linear-gradient(112.8deg, #8B5CF6 -15.76%, #A78BFA 102.86%)',
                    fontSize: '18px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3: Artemis Capital */}
            <div
              className="bg-[#E8F0FE] hover:shadow-xl transition-shadow duration-300 relative"
              style={{
                width: '340px',
                minHeight: '420px',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3
                className="font-poppins font-semibold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  color: '#1e40af',
                  marginBottom: '8px'
                }}
              >
                Artemis Capital
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1e40af" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      12%
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      in new yearly profit generated
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 18L9 12L13 16L21 8" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 8V14M21 8H15" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      25%
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      higher ROI than typical investments
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7L10 17L5 12" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-poppins font-semibold"
                      style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}
                    >
                      22x
                    </p>
                    <p
                      className="font-inter font-normal"
                      style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-poppins font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '180px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'linear-gradient(112.8deg, #8B5CF6 -15.76%, #A78BFA 102.86%)',
                    fontSize: '18px',
                    lineHeight: '140%'
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
      <div className="relative bg-white py-32 px-6">
        <div className="relative max-w-[1440px] mx-auto" style={{ minHeight: '700px' }}>

          {/* Section Title */}
          <h2
            className="absolute font-dm-sans font-bold text-center"
            style={{
              top: '80px',
              left: '328px',
              width: '785px',
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              color: '#14358A'
            }}
          >
            The Functional Consulting Advantage
          </h2>

          {/* Section Content */}
          <div
            className="absolute font-dm-sans font-normal text-center"
            style={{
              top: '173px',
              left: '207px',
              width: '1082px',
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#333333'
            }}
          >
            <p style={{ marginBottom: '32px' }}>
              Financial Services and FinTech operate at the intersection of hyper-regulation and rapid technological change. Generalist consultants often provide broad recommendations on market trends or digital strategy that fail to account for the core challenges of regulatory compliance, legacy system modernization, and risk management. Their advice is often rendered impractical by the necessity of robust audit trails and jurisdictional complexity.
            </p>
            <p>
              PMG&apos;s model delivers validated, compliant execution. We deploy specialized functional operators, experts in areas like modernizing core banking systems, implementing AI-driven risk models, optimizing regulatory reporting (e.g., Basel, KYC/AML), and scaling new FinTech products. Our specialists don&apos;t just advise; they implement proven systems and processes that ensure your transformation is not only efficient and differentiated in the market but is fully auditable and compliant from day one.
            </p>
          </div>

        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="text-center flex flex-col items-center"
        style={{
          background: '#F0F7FC',
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
          Ready to Transform Your Financial Operations?
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
          Let&apos;s discuss how we can help you navigate the evolving financial landscape.
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
          Request a Consultation
        </button>
      </div>

      <Footer />
    </main>
  );
}
