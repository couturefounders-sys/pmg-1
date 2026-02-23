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

      {/* Your Partner in a High-Growth Sector Section */}
      <div className="relative w-full bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="relative max-w-[1440px] mx-auto flex flex-col items-center px-6">

          {/* Section Title */}
          <h2
            className="font-poppins font-semibold text-center"
            style={{
              maxWidth: '900px',
              fontSize: '42px',
              lineHeight: '120%',
              color: '#14358A',
              letterSpacing: '0%',
              marginBottom: '48px'
            }}
          >
            Your Partner in a High-Growth Sector
          </h2>

          {/* Section Description */}
          <div
            className="font-inter font-normal text-center"
            style={{
              maxWidth: '1050px',
              fontSize: '19px',
              lineHeight: '165%',
              color: '#4A5568',
              letterSpacing: '0%'
            }}
          >
            <p style={{ marginBottom: '28px' }}>
              With opportunity comes complexity. Issues of scalability, regulation, competition, and talent are front of mind for technology leaders worldwide. PMG partners with technology firms from emerging startups to global enterprises to navigate this dynamic environment.
            </p>
            <p>
              Our consultants bring deep expertise in strategy, operations, finance, and transformation, helping companies manage rapid growth and competitive pressures. Our cross-sector knowledge in finance and organizational design equips leaders to address challenges that span innovation, customer acquisition, talent management, and long-term value creation.
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
            {/* Card 1: Growth & Go-to-Market Strategy */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
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
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Define and implement growth strategies that balance speed with sustainability, covering GTM planning, international expansion, and optimized pricing models.
              </p>
            </div>

            {/* Card 2: Operational Excellence & Scalability */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
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
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Improve organizational performance, optimize core processes, and deploy digital transformation initiatives to ensure sustained efficiency at scale.
              </p>
            </div>

            {/* Card 3: M&A, Funding, & Financial Performance */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
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
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                M&A, Funding, & Financial Performance
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Support M&A, capital funding, and IPO readiness by strengthening financial performance, optimizing portfolios, and enhancing the investment story.
              </p>
            </div>

            {/* Card 4: Innovation & Product Strategy */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
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
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Harness AI and automation to enhance product offerings, dramatically improve internal efficiency, and create new, measurable sources of value.
              </p>
            </div>

            {/* Card 6: Cloud Strategy & Migration */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
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
                style={{ fontSize: '16px', lineHeight: '140%' }}
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
          backgroundImage: 'url(/projects-bg-financial.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '700px'
        }}
      >

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
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
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
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
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
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
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
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">

          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-center whitespace-nowrap"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              color: '#14358A',
              marginBottom: '60px'
            }}
          >
            The Functional Consulting Advantage
          </h2>

          {/* Section Content */}
          <div
            className="font-dm-sans font-normal"
            style={{
              maxWidth: '1082px',
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#333333',
              textAlign: 'center'
            }}
          >
            Financial Services and FinTech operate at the intersection of hyper–regulation and rapid technological change. Generalist consultants often provide broad recommendations on market trends or digital strategy that fail to account for the core challenges of regulatory compliance, legacy system modernization, and risk management. Their advice is often rendered impractical by the necessity of robust audit trails and jurisdictional complexity.
            <br /><br />
            PMG's model delivers validated, compliant execution. We deploy specialized functional operators, experts in areas like modernizing core banking systems, implementing AI–driven risk models, optimizing regulatory reporting (e.g., Basel, KYC/AML), and scaling new FinTech products. Our specialists don't just advise; they implement proven systems and processes that ensure your transformation is not only efficient and differentiated in the market but is fully auditable and compliant from day one.
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
