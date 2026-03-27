'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TravelTourismHospitality() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(140px,16.32vw,235px)] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '105%', color: '#000000' }}>Travel, Tourism &amp; Hospitality</p>
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
              fontSize: 'clamp(18px, 2.08vw, 34px)',
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

      {/* Decorative Bars - Top Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', top: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
        <div className="absolute" style={{ width: '200px', height: '60px', left: '-10px', top: '60px', opacity: 1, background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Your Partner Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="text-center">
          <h2
            className="mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px, 3.47vw, 56px)',
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
                fontSize: 'clamp(20px, 2.22vw, 36px)',
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
                fontSize: 'clamp(20px, 2.22vw, 36px)',
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

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: '60px', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
              fontSize: 'clamp(18px, 2.08vw, 34px)',
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
              <img src="/icon-strategy-transformation.png" alt="Growth & Market Strategy" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                fontSize: 'clamp(12px, 1.04vw, 17px)',
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
              <img src="/icon-customer-experience.png" alt="Guest Experience & Service Innovation" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                fontSize: 'clamp(12px, 1.04vw, 17px)',
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
              <img src="/icon-risk-resilience.png" alt="Operational Efficiency & Profitability" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                fontSize: 'clamp(12px, 1.04vw, 17px)',
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
              <img src="/icon-regulatory-compliance.png" alt="Digital Transformation" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                fontSize: 'clamp(12px, 1.04vw, 17px)',
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
              <img src="/icon-innovation-fintech.png" alt="Workforce Strategy" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                fontSize: 'clamp(12px, 1.04vw, 17px)',
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
              <img src="/icon-capital-performance.png" alt="Sustainability & ESG Strategy" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                fontSize: 'clamp(12px, 1.04vw, 17px)',
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

      {/* Our Projects Section */}
      <div 
        className="relative w-full py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/project-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />

        <div className="max-w-[min(1440px,_95%)] mx-auto px-4">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            Our Projects
          </h2>

          <p
            className="text-center mb-16"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.25vw, 20px)',
              lineHeight: '140%',
              color: '#FFFFFF',
              maxWidth: 'min(800px, 95%)',
              margin: '0 auto 4rem auto',
            }}
          >
            We deliver tangible results that drive profitability and create world-class guest experiences for our hospitality clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {/* Government of Nova Scotia */}
            <div className="bg-white rounded-lg p-8 flex flex-col items-center">
              <h3
                className="text-center mb-6"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#006FBA',
                }}
              >
                Government of Nova Scotia
              </h3>

              {/* Stat 1 */}
              <div className="text-center mb-6 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    $8M
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  additional annual profit
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center mb-6 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    30%
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  reduction in operational costs
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center mb-8 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    18x
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  Return on Investment
                </p>
              </div>

              <button
                className="text-white"
                style={{
                  background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                  borderRadius: '10px',
                  width: 'clamp(120px, 10.9vw, 157px)',
                  height: 'clamp(44px, 4.17vw, 60px)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                }}
              >
                Learn More
              </button>
            </div>

            {/* Kraken */}
            <div className="bg-white rounded-lg p-8 flex flex-col items-center">
              <h3
                className="text-center mb-6"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#006FBA',
                }}
              >
                Kraken
              </h3>

              {/* Stat 1 */}
              <div className="text-center mb-6 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    $9M
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  in revenue generated
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center mb-6 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    60%
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  efficiency sustained during pandemic
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center mb-8 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    28x
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  Return on Investment
                </p>
              </div>

              <button
                className="text-white"
                style={{
                  background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                  borderRadius: '10px',
                  width: 'clamp(120px, 10.9vw, 157px)',
                  height: 'clamp(44px, 4.17vw, 60px)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                }}
              >
                Learn More
              </button>
            </div>

            {/* Artemis Capital */}
            <div className="bg-white rounded-lg p-8 flex flex-col items-center">
              <h3
                className="text-center mb-6"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#006FBA',
                }}
              >
                Artemis Capital
              </h3>

              {/* Stat 1 */}
              <div className="text-center mb-6 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    30%
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  increase in RevPAR
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center mb-6 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    15%
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  increase in total operating margin
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center mb-8 w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 1.67vw, 28px)',
                      lineHeight: '110%',
                      letterSpacing: '-0.03em',
                      color: '#006FBA',
                    }}
                  >
                    21x
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  Return on Investment
                </p>
              </div>

              <button
                className="text-white"
                style={{
                  background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                  borderRadius: '10px',
                  width: 'clamp(120px, 10.9vw, 157px)',
                  height: 'clamp(44px, 4.17vw, 60px)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Description Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 48px)',
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
              fontSize: 'clamp(14px, 1.25vw, 20px)',
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
      <div className="relative w-full py-20 bg-white overflow-hidden">

        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
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
              The hospitality industry is a delicate balance of guest experience and operational precision. Industry-focused consultants often suggest surface-level fixes that don&apos;t address the deep-rooted operational or financial inefficiencies that impact service quality.
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
              PMG&apos;s functional consulting approach provides the necessary depth. We deploy experts in specific functions, like operational excellence, customer experience design, and workforce management, who bring proven models for success. They adapt these world-class frameworks to the unique context of your property or brand, ensuring that operational improvements directly translate into superior guest experiences and a stronger bottom line.
            </p>
          </div>

          <div className="text-center mt-16">
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.08vw, 34px)',
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

      {/* Partner with PMG CTA Section */}
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
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
              fontSize: 'clamp(20px, 2.22vw, 36px)',
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

      <Footer />
    </main>
  );
}
