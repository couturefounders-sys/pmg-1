'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TravelTourismHospitality() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[118px] pt-[235px] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[803px] z-10">
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
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              maxWidth: '740px'
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
              width: '398px',
              height: '372px',
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

      {/* Your Partner Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="text-center">
          <h2
            className="mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
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
                fontSize: '32px',
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
                fontSize: '32px',
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

      {/* Our Work Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
            }}
          >
            Our Work
          </h2>

          <p
            className="max-w-[1082px] mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1264px] mx-auto">
          {/* Growth & Market Strategy */}
          <div
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-strategy-transformation.png"
                alt="Growth & Market Strategy"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Growth & Market Strategy
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
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
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-customer-experience.png"
                alt="Guest Experience & Service Innovation"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Guest Experience & Service Innovation
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
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
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-risk-resilience.png"
                alt="Operational Efficiency & Profitability"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Operational Efficiency & Profitability
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
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
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-regulatory-compliance.png"
                alt="Digital Transformation"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Digital Transformation
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
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
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-innovation-fintech.png"
                alt="Workforce Strategy"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Workforce Strategy
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
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
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-capital-performance.png"
                alt="Sustainability & ESG Strategy"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Sustainability & ESG Strategy
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
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
        className="relative w-full py-20"
        style={{
          backgroundImage: 'url(/project-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
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
              fontSize: '18px',
              lineHeight: '140%',
              color: '#FFFFFF',
              maxWidth: '800px',
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
                  fontSize: '30px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                  fontSize: '20px',
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
                  fontSize: '30px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                  fontSize: '20px',
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
                  fontSize: '30px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                  fontSize: '20px',
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
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h2
            className="text-center mb-8"
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

          <div className="max-w-[1082px] mx-auto text-center">
            <p
              className="mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '30px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#333333',
              }}
            >
              The hospitality industry is a delicate balance of guest experience and operational precision. Industry-focused consultants often suggest surface-level fixes that don't address the deep-rooted operational or financial inefficiencies that impact service quality.
            </p>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '30px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#333333',
              }}
            >
              PMG's functional consulting approach provides the necessary depth. We deploy experts in specific functions, like operational excellence, customer experience design, and workforce management, who bring proven models for success. They adapt these world-class frameworks to the unique context of your property or brand, ensuring that operational improvements directly translate into superior guest experiences and a stronger bottom line.
            </p>
          </div>

          {/* Still Unsure? CTA */}
          <div className="text-center mt-12">
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '140%',
                color: '#364153',
              }}
            >
              Still Unsure?
            </h3>

            <a
              href="#"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Discover how functional precision unlocks five-star guest experiences and stronger margins.
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <h2 
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Partner with PMG for Guest Excellence
          </h2>

          <p 
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: '1196px',
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
              width: '393px',
              height: '65px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '20px',
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
