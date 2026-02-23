'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HigherEducationEdTech() {
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
            Transforming the Educational Model
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
            Higher education is navigating a fundamental transition in how value is delivered and measured. We provide the strategic guidance and operational frameworks institutions need to modernize their delivery models, improve student outcomes, and secure their mission in a changing landscape.
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
              src="/higher-education-hero.png"
              alt="Higher Education"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

      </div>

      {/* Navigating a Sector in Transition Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[52px] py-24">
        <h2
          className="font-poppins font-semibold text-[#14358A] text-center mb-12"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            maxWidth: '1087px',
            margin: '0 auto 3rem auto',
          }}
        >
          Navigating a Sector in Transition
        </h2>

        <div className="flex flex-col gap-8 text-center">
          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '32px',
              lineHeight: '150%',
              letterSpacing: '0%',
              maxWidth: '1342px',
              margin: '0 auto',
            }}
          >
            Universities and colleges have long been pillars of resilience and adaptation. Today, however, they face a convergence of pressures: shifting demographics, new technologies, evolving student expectations, and increasing demands from government and community stakeholders.
          </p>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '32px',
              lineHeight: '150%',
              letterSpacing: '0%',
              maxWidth: '1342px',
              margin: '0 auto',
            }}
          >
            Our education work is strengthened by world-class expertise in operations, finance, and technology, combined with a deep understanding of academic culture. We provide university leaders with innovative strategies and practical insights that address core challenges, align governance and staff, and enable bold transformation.
          </p>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="relative w-full bg-white py-24">
        {/* Section Heading */}
        <h2 
          className="text-center mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Our Work
        </h2>

        {/* Description */}
        <p 
          className="text-center mb-16"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '30px',
            lineHeight: '140%',
            color: '#333333',
            maxWidth: '1082px',
            margin: '0 auto 4rem auto',
            padding: '0 2rem'
          }}
        >
          Our work supports strategy, operations, & transformation—equipping financial leaders with the tools to deliver meaningful change.
        </p>

        {/* Cards Grid */}
        <div className="max-w-[1312px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Transformation Strategy & Implementation */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-strategy-transformation.png" alt="Transformation Strategy" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Transformation Strategy & Implementation
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Serve as a trusted partner for complex change, combining organizational design and change management to ensure successful technology implementation and culture buy-in.
              </p>
            </div>

            {/* Card 2 - Operational Efficiency */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-risk-resilience.png" alt="Operational Efficiency" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Operational Efficiency
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Support efficiency initiatives through process optimization, performance measurement, and resource allocation, enabling departments to do more with less.
              </p>
            </div>

            {/* Card 3 - Digital Government & Service Transformation */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-customer-experience.png" alt="Digital Transformation" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Digital Government & Service Transformation
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and implement digital platforms, data strategies, and user-centered services to significantly improve citizen accessibility and satisfaction.
              </p>
            </div>

            {/* Card 4 - Academic Portfolio & Program Design */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-regulatory-compliance.png" alt="Academic Portfolio" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Academic Portfolio & Program Design
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and launch academic programs that meet student demand, align with market needs, and secure financial sustainability.
              </p>
            </div>

            {/* Card 5 - Governance & Risk */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-innovation-fintech.png" alt="Governance & Risk" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Governance & Risk
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Strengthen governance structures and improve decision-making processes to manage strategic risks and ensure long-term institutional resilience.
              </p>
            </div>

            {/* Card 6 - Faculty & Staff Engagement */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-capital-performance.png" alt="Faculty & Staff Engagement" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Faculty & Staff Engagement
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Advise on talent management and organizational culture to attract, retain, and empower the faculty and staff who drive institutional success.
              </p>
            </div>

            {/* Card 7 - Program Evaluation & Impact Measurement */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-regulatory-compliance.png" alt="Program Evaluation" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Program Evaluation & Impact Measurement
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and implement frameworks to rigorously measure program outcomes, evaluate efficacy, and ensure government investments deliver meaningful community impact.
              </p>
            </div>

            {/* Card 8 - Research Performance */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-innovation-fintech.png" alt="Research Performance" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Research Performance
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Shape research priorities, strengthen commercialization capabilities, and build the capacity required to deliver world-class, financially viable research.
              </p>
            </div>

            {/* Card 9 - Alumni Relations & Fundraising */}
            <div
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-capital-performance.png" alt="Alumni Relations" style={{ width: '64px', height: '64px' }} />
              </div>

              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Alumni Relations & Fundraising
              </h3>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Develop effective fundraising strategies and build lasting alumni relationships to support strategic priorities and long-term financial health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div 
        className="relative w-full py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/project-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-[52px]">
          {/* Section Heading */}
          <h2 
            className="text-center text-white mb-16"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
            }}
          >
            Our Projects
          </h2>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Government of Nova Scotia */}
            <div 
              className="bg-white rounded-[16px] p-8 relative"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              }}
            >
              <h3 
                className="mb-8"
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

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>+1000</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>data points collected from executives</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>1</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>late-phase education plan developed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>50+</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>stakeholders engaged across sectors</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  className="text-white font-bold hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '20px',
                    lineHeight: '140%',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2 - Kraken */}
            <div 
              className="bg-white rounded-[16px] p-8 relative"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              }}
            >
              <h3 
                className="mb-8"
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

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>17%</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>increase in student enrollment & NPS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>30%</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>annual student support hours added</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <path d="M8 16L12 8L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>24x</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>Return on Investment</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  className="text-white font-bold hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '20px',
                    lineHeight: '140%',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3 - Artemis Capital */}
            <div 
              className="bg-white rounded-[16px] p-8 relative"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              }}
            >
              <h3 
                className="mb-8"
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

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>50+</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>increase in student enrollment & NPS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>100+</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>annual student support hours added</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#006FBA"/>
                      <path d="M8 16L12 8L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>20%</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>Return on Investment</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  className="text-white font-bold hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '20px',
                    lineHeight: '140%',
                    border: 'none',
                    cursor: 'pointer',
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
      <div className="relative w-full py-24 bg-white overflow-hidden">
        {/* Decorative Shape - Top Left */}
        <div 
          className="absolute left-0 top-0"
          style={{
            width: '200px',
            height: '100px',
            background: 'linear-gradient(135deg, #00D4FF 0%, #0097FE 100%)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />

        {/* Decorative Shape - Bottom Right */}
        <div 
          className="absolute right-0 bottom-0"
          style={{
            width: '200px',
            height: '100px',
            background: 'linear-gradient(135deg, #00D4FF 0%, #0097FE 100%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-[179px]">
          {/* Section Heading */}
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

          {/* Content */}
          <div className="text-center mb-12" style={{ maxWidth: '1082px', margin: '0 auto' }}>
            <p 
              className="mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '30px',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              In academia, strategy often dies in implementation due to cultural resistance. Generalist consultants deliver broad, business-centric recommendations that are frequently perceived by faculty and administration as misaligned with the institution's mission and academic values. They fail to gain the necessary cultural buy-in for lasting change.
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
              PMG's model brings practicality with cultural respect. We deploy functional experts in areas like operational finance, student experience design, and research commercialization. They adapt proven models of excellence to your institution's unique culture and shared governance structure, ensuring that solutions are not only financially sound and efficient but are also embraced by the staff and faculty who must drive the transformation.
            </p>
          </div>

          {/* Still Unsure? CTA */}
          <div className="text-center">
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
              Discover how we balance operational efficiency with the core academic mission.
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
            Partner with PMG to Transform Education
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
            Let's work together to build more efficient, innovative, and student-centered educational institutions.
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
