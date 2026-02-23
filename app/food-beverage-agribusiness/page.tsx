'use client';

import Header from '@/components/Header';

export default function FoodBeverageAgribusiness() {
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
            Resilience Across the Global Value Chain
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
            Operating in a sector defined by thin margins and supply chain volatility requires more than just "best practices." We help agribusiness and food service leaders optimize their resource yield and operational logistics, ensuring sustainability and profitability from source to table.
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
              PMG partners with food service businesses across the value chain, from global restaurant brands to regional operators and suppliers. Our consultants bring expertise in strategy, operations, and organizational performance to help companies adapt, scale, and thrive in a highly competitive landscape.
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
              Our food service work is strengthened by PMG's cross-industry expertise in finance, technology, and customer experience, enabling leaders to address challenges across supply chain, labor, growth, and operational performance.
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
            From quick-service restaurants to large-scale hospitality operators, we help organizations balance quality, efficiency, and customer experience in a constantly changing environment.
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
              Expand into new markets, refine business models, and strengthen customer acquisition through franchise development, market entry, and optimized pricing strategies.
            </p>
          </div>

          {/* Operational Excellence */}
          <div
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-risk-resilience.png"
                alt="Operational Excellence"
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
              Operational Excellence
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
              Optimize kitchen operations, streamline workflows, and improve vendor management to strengthen cost control without sacrificing quality or guest satisfaction.
            </p>
          </div>

          {/* Customer & Guest Experience */}
          <div
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-customer-experience.png"
                alt="Customer & Guest Experience"
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
              Customer & Guest Experience
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
              Redesign service delivery and integrate digital channels (e.g. mobile ordering, loyalty) to personalize engagement and improve guest retention.
            </p>
          </div>

          {/* Supply Chain & Sustainability */}
          <div
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-regulatory-compliance.png"
                alt="Supply Chain & Sustainability"
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
              Supply Chain & Sustainability
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
              Improve sourcing strategies, optimize inventory management, and embed sustainability into procurement to address rising costs and reduce waste.
            </p>
          </div>

          {/* Labor & Workforce Transformation */}
          <div
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-innovation-fintech.png"
                alt="Labor & Workforce Transformation"
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
              Labor & Workforce Transformation
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
              Design workforce planning and engagement strategies to improve retention, enhance labor productivity, and strengthen company culture.
            </p>
          </div>

          {/* Financial Performance & Turnaround */}
          <div
            className="bg-white p-6 rounded-[10px]"
            style={{
              border: '3px solid #14358A',
            }}
          >
            <div className="mb-4">
              <img
                src="/icon-capital-performance.png"
                alt="Financial Performance & Turnaround"
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
              Financial Performance & Turnaround
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
              Enhance financial performance through cost optimization, performance benchmarking, and restructuring support to deliver measurable, tight-margins.
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
            className="text-center mb-16"
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
                    $7M
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
                      fontSize: '24px',
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
                    $6M
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
                      fontSize: '24px',
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
                    fontSize: '16px',
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
                      fontSize: '24px',
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
                    12%
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
                      fontSize: '24px',
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
              The food and beverage industry is a relentless battle of fractions: fractional margins, fractional service improvements, and fractional cost savings. Generalist consultants offer familiar, high-level platitudes ("reduce waste," "improve training") that fail to deliver the granular, operational precision needed to shift your P&L. You know what to fix; you need to know how to fix it right now.
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
              PMG's model delivers operational grit and margin control. We deploy experts in specific, high-impact functions, like Lean kitchen operations, supply chain optimization, or workforce retention systems, who embed and implement proven, zero-tolerance processes. We turn abstract goals into concrete, measurable improvements in cost-per-serving, labor efficiency, and customer throughput.
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
              Learn how our functional experts deliver immediate, measurable improvements to your tightest margins.
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
            Partner with PMG for Sustainable Growth
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

      {/* Footer */}
      <footer className="relative z-10 py-20" style={{ background: '#1B45B4' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo Column */}
            <div>
              <img 
                src="/pmg-logo.png" 
                alt="PMG Logo" 
                style={{ 
                  width: 'auto', 
                  height: '80px',
                  objectFit: 'contain'
                }} 
              />
            </div>

            {/* What we Do Column */}
            <div>
              <h3 
                className="text-white mb-6" 
                style={{ 
                  fontFamily: 'Trade Gothic LT Std, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '25px', 
                  lineHeight: '100%' 
                }}
              >
                What we Do
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content & Working with PMG Column */}
            <div>
              <h3 
                className="text-white mb-6" 
                style={{ 
                  fontFamily: 'Trade Gothic LT Std, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '25px', 
                  lineHeight: '100%' 
                }}
              >
                Our Content
              </h3>
              <ul className="space-y-4 mb-10">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Community Programs</a></li>
              </ul>
              
              <h3 
                className="text-white mb-6" 
                style={{ 
                  fontFamily: 'Trade Gothic LT Std, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '25px', 
                  lineHeight: '100%' 
                }}
              >
                Working with PMG
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Licensing</a></li>
              </ul>
            </div>

            {/* Our Models Column */}
            <div>
              <h3 
                className="text-white mb-6" 
                style={{ 
                  fontFamily: 'Trade Gothic LT Std, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '25px', 
                  lineHeight: '100%' 
                }}
              >
                Our Models
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 
                className="text-white mb-6" 
                style={{ 
                  fontFamily: 'Trade Gothic LT Std, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '25px', 
                  lineHeight: '100%' 
                }}
              >
                Legal
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
