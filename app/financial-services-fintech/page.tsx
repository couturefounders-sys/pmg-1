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
