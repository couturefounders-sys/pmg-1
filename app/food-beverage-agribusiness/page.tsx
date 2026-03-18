'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FoodBeverageAgribusiness() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(140px,16.32vw,235px)] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
              letterSpacing: '0%',
            }}
          >
            Resilience Across the Global Value Chain
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
            Operating in a sector defined by thin margins and supply chain volatility requires more than just "best practices." We help agribusiness and food service leaders optimize their resource yield and operational logistics, ensuring sustainability and profitability from source to table.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div 
            className="rounded-full overflow-hidden"
            style={{
              width: '398px',
              height: 'clamp(250px, 25.83vw, 372px)',
            }}
          >
            <img
              src="/food-agribusiness-hero.png"
              alt="Food & Agribusiness"
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
              PMG partners with food service businesses across the value chain, from global restaurant brands to regional operators and suppliers. Our consultants bring expertise in strategy, operations, and organizational performance to help companies adapt, scale, and thrive in a highly competitive landscape.
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
              Our food service work is strengthened by PMG's cross-industry expertise in finance, technology, and customer experience, enabling leaders to address challenges across supply chain, labor, growth, and operational performance.
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
            From quick-service restaurants to large-scale hospitality operators, we help organizations balance quality, efficiency, and customer experience in a constantly changing environment.
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
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
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
                Growth & Market Strategy
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
              Expand into new markets, refine business models, and strengthen customer acquisition through franchise development, market entry, and optimized pricing strategies.
            </p>
          </div>

          {/* Operational Excellence */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-risk-resilience.png" alt="Operational Excellence" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Operational Excellence
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
              Optimize kitchen operations, streamline workflows, and improve vendor management to strengthen cost control without sacrificing quality or guest satisfaction.
            </p>
          </div>

          {/* Customer & Guest Experience */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-customer-experience.png" alt="Customer & Guest Experience" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Customer & Guest Experience
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
              Redesign service delivery and integrate digital channels (e.g. mobile ordering, loyalty) to personalize engagement and improve guest retention.
            </p>
          </div>

          {/* Supply Chain & Sustainability */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-regulatory-compliance.png" alt="Supply Chain & Sustainability" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Supply Chain & Sustainability
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
              Improve sourcing strategies, optimize inventory management, and embed sustainability into procurement to address rising costs and reduce waste.
            </p>
          </div>

          {/* Labor & Workforce Transformation */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-innovation-fintech.png" alt="Labor & Workforce Transformation" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Labor & Workforce Transformation
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
              Design workforce planning and engagement strategies to improve retention, enhance labor productivity, and strengthen company culture.
            </p>
          </div>

          {/* Financial Performance & Turnaround */}
          <div
            className="bg-white"
            style={{
              width: 'min(412px, 100%)',
                border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '23px 25px',}}
          >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-capital-performance.png" alt="Financial Performance & Turnaround" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3
                className="mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.01vw, 33px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A', }}
              >
                Financial Performance & Turnaround
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
              Enhance financial performance through cost optimization, performance benchmarking, and restructuring support to deliver measurable, tight-margins.
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
            className="text-center mb-16"
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
                    $7M
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
                  in value retained
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
                  decrease in employee turnover
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
                    50+
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
                  width: '157px',
                  height: '60px',
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
                    $6M
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
                  in new revenue generated
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
                    70%
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
                  reduction in employee turnover
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
                    20x
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
                  width: '157px',
                  height: '60px',
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
                    12%
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
                  reduction in food costs
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
                  increase in customer retention
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
                    17x
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
                  width: '157px',
                  height: '60px',
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

      {/* The Functional Consulting Advantage Section */}
      <div className="relative w-full py-20 bg-white overflow-hidden">

        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h2
            className="text-center whitespace-nowrap mb-10"
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
              The food and beverage industry is a relentless battle of fractions: fractional margins, fractional service improvements, and fractional cost savings. Generalist consultants offer familiar, high-level platitudes (&ldquo;reduce waste,&rdquo; &ldquo;improve training&rdquo;) that fail to deliver the granular, operational precision needed to shift your P&amp;L. You know what to fix; you need to know how to fix it right now.
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
              PMG&apos;s model delivers operational grit and margin control. We deploy experts in specific, high-impact functions, like Lean kitchen operations, supply chain optimization, or workforce retention systems, who embed and implement proven, zero-tolerance processes. We turn abstract goals into concrete, measurable improvements in cost-per-serving, labor efficiency, and customer throughput.
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
              Learn how our functional experts deliver immediate, measurable improvements to your tightest margins.
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
            Partner with PMG for Sustainable Growth
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
            Let's work together to build resilient, efficient, and sustainable agribusiness operations.
          </p>

          <button 
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '393px',
              height: '65px',
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
