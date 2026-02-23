'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SaaSEnterpriseTechnology() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[118px] pt-[200px] pb-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[803px] z-10">
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
              whiteSpace: 'nowrap',
            }}
          >
            Scaling Technology with Precision
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '30px',
              lineHeight: '140%',
              maxWidth: '740px'
            }}
          >
            For technology firms, the greatest risk isn&apos;t a lack of innovation, but the friction that comes with rapid growth. We deliver the strategic insight and operational maturity needed to align development roadmaps with market realities, ensuring your platform scales efficiently and predictably.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 z-10">
          <img
            src="/saas-enterprise-tech.png"
            alt="Scaling Technology"
            style={{
              width: '453px',
              height: '435px',
              objectFit: 'cover'
            }}
          />
        </div>

      </div>

      {/* Background Shapes - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0">
        {/* Light Blue Bar */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '100px',
            left: '-100px',
            bottom: '100px',
            background: 'linear-gradient(90deg, #D4E2F8 0%, rgba(212, 226, 248, 0) 100%)',
            transform: 'rotate(-15deg)',
            opacity: 0.8
          }}
        />
        {/* Dark Blue Bar */}
        <div
          className="absolute"
          style={{
            width: '500px',
            height: '120px',
            left: '-50px',
            bottom: '50px',
            background: 'linear-gradient(90deg, #3B82F6 0%, rgba(59, 130, 246, 0) 100%)',
            transform: 'rotate(-15deg)',
            opacity: 0.8
          }}
        />
      </div>

      {/* Your Partner in a High-Growth Sector Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            className="font-poppins font-semibold text-[#14358A] mb-16"
            style={{ fontSize: '50px', lineHeight: '46px' }}
          >
            Your Partner in a High-Growth Sector
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto"
            style={{
              fontSize: '32px',
              lineHeight: '100%',
              maxWidth: '1342px',
              textAlign: 'center'
            }}
          >
            With opportunity comes complexity. Issues of scalability, regulation, competition, and talent are front of mind for technology leaders worldwide. PMG partners with technology firms from emerging startups to global enterprises to navigate this dynamic environment.
            <br /><br />
            Our consultants bring deep expertise in strategy, operations, finance, and transformation, helping companies manage rapid growth and competitive pressures. Our cross-sector knowledge in finance and organizational design equips leaders to address challenges that span innovation, customer acquisition, talent management, and long-term value creation.
          </p>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[1300px] mx-auto">
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
            {/* Card 1: Growth & Go-to-Market Strategy */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                width: '412px',
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-strategy-transformation.png" alt="Growth & Go-to-Market Strategy" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Growth & Go-to-Market Strategy
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%' }}
              >
                Define and implement growth strategies that balance speed with sustainability, covering GTM planning, international expansion, and optimized pricing models.
              </p>
            </div>

            {/* Card 2: Operational Excellence & Scalability */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                width: '412px',
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-risk-resilience.png" alt="Operational Excellence & Scalability" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Operational Excellence & Scalability
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%' }}
              >
                Improve organizational performance, optimize core processes, and deploy digital transformation initiatives to ensure sustained efficiency at scale.
              </p>
            </div>

            {/* Card 3: M&A, Funding, & Financial Performance */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                width: '412px',
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-customer-experience.png" alt="M&A, Funding, & Financial Performance" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '28px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                M&A, Funding, & Financial Performance
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%' }}
              >
                Support M&A, capital funding, and IPO readiness by strengthening financial performance, optimizing portfolios, and enhancing the investment story.
              </p>
            </div>

            {/* Card 4: Innovation & Product Strategy */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                width: '412px',
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-regulatory-compliance.png" alt="Innovation & Product Strategy" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Innovation & Product Strategy
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Shape innovation agendas, prioritize R&D, and design product strategies (including portfolio and roadmap development) that align with market opportunities.
              </p>
            </div>

            {/* Card 5: AI & Automation Integration */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                width: '412px',
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-innovation-fintech.png" alt="AI & Automation Integration" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                AI & Automation Integration
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%' }}
              >
                Harness AI and automation to enhance product offerings, dramatically improve internal efficiency, and create new, measurable sources of value.
              </p>
            </div>

            {/* Card 6: Cloud Strategy & Migration */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                width: '412px',
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-capital-performance.png" alt="Cloud Strategy & Migration" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Cloud Strategy & Migration
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '15px', lineHeight: '140%' }}
              >
                Develop and execute cloud strategies (public, private, or hybrid) that optimize cost, improve scalability, and accelerate organizational innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div
        className="relative py-24 px-6"
        style={{
          backgroundImage: 'url(/projects-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '852px'
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-white text-center mb-16"
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
            {/* Card 1: Trilogy Software */}
            <div
              className="bg-white hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '381px',
                minHeight: '378px',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3
                className="font-dm-sans font-bold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  letterSpacing: '-3%',
                  color: '#006FBA'
                }}
              >
                Trilogy Software
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12h2m2 0h6" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 16h10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="1.5" fill="#006FBA"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      $8M
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      in annual support costs saved
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M6 12l4 4 8-8" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      16%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      increase in Customer Satisfaction
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12l3 3 7-7" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      77x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2: Kraken */}
            <div
              className="bg-white hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '381px',
                minHeight: '378px',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3
                className="font-dm-sans font-bold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  letterSpacing: '-3%',
                  color: '#006FBA'
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
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      3,500
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      ticket backlog eliminated
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M6 12l4 4 8-8" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      65%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      reduction in first-response time
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12l3 3 7-7" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      23x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3: Artemis Capital */}
            <div
              className="bg-white hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '381px',
                minHeight: '378px',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3
                className="font-dm-sans font-bold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  letterSpacing: '-3%',
                  color: '#006FBA'
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
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      22%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      reduction in customer churn
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M6 12l4 4 8-8" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      14%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      increase in post-acquisition margin
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12l3 3 7-7" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      20x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
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
      <div className="relative py-24 bg-white overflow-hidden">
        {/* Top Left Blue Bar */}
         <div
          className="absolute top-0 left-0"
          style={{
            width: '300px',
            height: '60px',
            background: 'linear-gradient(90deg, #60A5FA 0%, #3B82F6 100%)',
            transform: 'rotate(-15deg) translate(-50px, 30px)',
            opacity: 0.8
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] mb-12"
            style={{ fontSize: '48px', lineHeight: '105%', letterSpacing: '-3%' }}
          >
            The Functional Consulting Advantage
          </h2>

          <div className="flex flex-col gap-8 mb-16">
            <p
              className="font-dm-sans font-normal text-[#333333]"
              style={{ fontSize: '30px', lineHeight: '140%', maxWidth: '1082px' }}
            >
              Technology moves too fast for theoretical advice. The biggest risk to a scaling tech firm is not strategy, but flawed execution. Generalist consultants often provide high-level, slow-to-implement roadmaps that fail to adapt to rapid market changes, product cycles, or the specific needs of your engineering and GTM teams.
            </p>
            <p
              className="font-dm-sans font-normal text-[#333333]"
              style={{ fontSize: '30px', lineHeight: '140%', maxWidth: '1082px' }}
            >
              PMG&apos;s model solves the execution gap. We deploy specialized functional operators, experts in areas like automated workflow architecture, hyper-growth GTM strategy, or AI integration, who have proven models for success. They don&apos;t just recommend; they embed, build, and operationalize the change, ensuring your solutions are both innovative and immediately scalable.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p
              className="font-dm-sans font-bold text-[#364153]"
              style={{ fontSize: '30px', lineHeight: '140%' }}
            >
              Still Unsure?
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 font-inter font-semibold text-[#14358A] hover:opacity-80 transition-opacity"
              style={{ fontSize: '21.1px', lineHeight: '30px' }}
            >
              Find out how we turn strategy into measurable operational scale
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center justify-center bg-[#14358A] rounded-full w-6 h-6">
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 9L7.5 6L4.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </span>
            </a>
          </div>
        </div>
        
         {/* Bottom Right Blue Bar (Simulated based on image style) */}
         <div
          className="absolute bottom-0 right-0"
          style={{
            width: '400px',
            height: '80px',
            background: 'linear-gradient(270deg, #60A5FA 0%, #3B82F6 100%)',
            transform: 'rotate(-10deg) translate(50px, 40px)', 
            opacity: 0.6
          }}
        />

      </div>

      {/* Partner with PMG Section */}
      <div className="bg-[#EAF5FF] py-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] mb-8"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%'
            }}
          >
            Partner with PMG to Build a Resilient Future
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mb-12"
            style={{
              fontSize: '32px',
              lineHeight: '135%',
              maxWidth: '1196px'
            }}
          >
            Let&apos;s work together to navigate the complexities of the financial sector & drive sustainable growth.
          </p>
          <button
            className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
            style={{
              width: 'auto', // changed from fixed width to auto to fit text
              minWidth: '393px',
              height: '65px',
              borderRadius: '10px',
              padding: '16px 32px',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              fontSize: '20px',
              lineHeight: '140%',
              whiteSpace: 'nowrap' // ensures text stays on one line
            }}
          >
            Learn about Functional Consulting
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
