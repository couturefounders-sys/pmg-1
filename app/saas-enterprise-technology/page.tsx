'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SaaSEnterpriseTechnology() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(120px,13.89vw,200px)] pb-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '105%', color: '#000000' }}>SaaS &amp; Enterprise Technology</p>
          <h1
            className="font-dm-sans font-bold text-[#14358A]"
            style={{
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              whiteSpace: 'nowrap',
            }}
          >
            Scaling Technology with Precision
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              maxWidth: 'min(740px, 95%)'
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
              width: 'clamp(280px, 31.46vw, 453px)',
              height: 'clamp(280px, 30.21vw, 435px)',
              objectFit: 'cover'
            }}
          />
        </div>

      </div>

      {/* Decorative Bars - Top Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', top: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
        <div className="absolute" style={{ width: '200px', height: '60px', left: '-10px', top: '60px', opacity: 1, background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Your Partner in a High-Growth Sector Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] mb-16"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em' }}
          >
            Your Partner in a High-Growth Sector
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto"
            style={{
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '100%',
              maxWidth: 'min(1342px, 95%)',
              textAlign: 'center'
            }}
          >
            With opportunity comes complexity. Issues of scalability, regulation, competition, and talent are front of mind for technology leaders worldwide. PMG partners with technology firms from emerging startups to global enterprises to navigate this dynamic environment.
            <br /><br />
            Our consultants bring deep expertise in strategy, operations, finance, and transformation, helping companies manage rapid growth and competitive pressures. Our cross-sector knowledge in finance and organizational design equips leaders to address challenges that span innovation, customer acquisition, talent management, and long-term value creation.
          </p>
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
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', maxWidth: 'min(1082px, 95%)', textAlign: 'center' }}
            >
              Our work supports strategy, operations, & transformation—equipping technology leaders with the tools to deliver meaningful change.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
            {/* Card 1: Growth & Go-to-Market Strategy */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-strategy-transformation.png" alt="Growth & Go-to-Market Strategy" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Growth & Go-to-Market Strategy
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Define and implement growth strategies that balance speed with sustainability, covering GTM planning, international expansion, and optimized pricing models.
              </p>
            </div>

            {/* Card 2: Operational Excellence & Scalability */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-risk-resilience.png" alt="Operational Excellence & Scalability" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Operational Excellence & Scalability
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Improve organizational performance, optimize core processes, and deploy digital transformation initiatives to ensure sustained efficiency at scale.
              </p>
            </div>

            {/* Card 3: M&A, Funding, & Financial Performance */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-customer-experience.png" alt="M&A, Funding, & Financial Performance" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  M&A, Funding, & Financial Performance
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Support M&A, capital funding, and IPO readiness by strengthening financial performance, optimizing portfolios, and enhancing the investment story.
              </p>
            </div>

            {/* Card 4: Innovation & Product Strategy */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-regulatory-compliance.png" alt="Innovation & Product Strategy" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Innovation & Product Strategy
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%' }}
              >
                Shape innovation agendas, prioritize R&D, and design product strategies (including portfolio and roadmap development) that align with market opportunities.
              </p>
            </div>

            {/* Card 5: AI & Automation Integration */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-innovation-fintech.png" alt="AI & Automation Integration" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  AI & Automation Integration
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Harness AI and automation to enhance product offerings, dramatically improve internal efficiency, and create new, measurable sources of value.
              </p>
            </div>

            {/* Card 6: Cloud Strategy & Migration */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-capital-performance.png" alt="Cloud Strategy & Migration" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Cloud Strategy & Migration
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Develop and execute cloud strategies (public, private, or hybrid) that optimize cost, improve scalability, and accelerate organizational innovation.
              </p>
            </div>

            {/* Card 7: Enterprise & Workflow Architecture */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-strategy-transformation.png" alt="Enterprise & Workflow Architecture" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Enterprise & Workflow Architecture
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Design robust enterprise systems and automated workflows that ensure seamless operations, support immediate scalability, and align technology with business strategy.
              </p>
            </div>

            {/* Card 8: Talent & Culture Transformation */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-risk-resilience.png" alt="Talent & Culture Transformation" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Talent & Culture Transformation
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Design organizational structures and cultural programs that foster innovation, agility, and long-term talent retention.
              </p>
            </div>

            {/* Card 9: Risk, Compliance & Cybersecurity */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',
              }}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-regulatory-compliance.png" alt="Risk, Compliance & Cybersecurity" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Risk, Compliance & Cybersecurity
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '140%' }}
              >
                Advise on compliance frameworks, data governance, and cybersecurity strategies to proactively protect technology operations and institutional reputation from growing threats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div
        className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(/projects-bg.webp)',
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

        <div className="max-w-[min(1300px,_95%)] mx-auto">
          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-white text-center mb-16"
            style={{
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em'
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
                width: 'clamp(280px, 26.46vw, 381px)',
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
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      $8M
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      16%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      77x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: 'clamp(44px, 4.17vw, 60px)',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
                width: 'clamp(280px, 26.46vw, 381px)',
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
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      3,500
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      65%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      23x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: 'clamp(44px, 4.17vw, 60px)',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
                width: 'clamp(280px, 26.46vw, 381px)',
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
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      22%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      14%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      20x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: 'clamp(44px, 4.17vw, 60px)',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
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
              Technology moves too fast for theoretical advice. The biggest risk to a scaling tech firm is not strategy, but flawed execution. Generalist consultants often provide high-level, slow-to-implement roadmaps that fail to adapt to rapid market changes, product cycles, or the specific needs of your engineering and GTM teams.
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
              PMG&apos;s model solves the execution gap. We deploy specialized functional operators, experts in areas like automated workflow architecture, hyper-growth GTM strategy, or AI integration, who have proven models for success. They don&apos;t just recommend; they embed, build, and operationalize the change, ensuring your solutions are both innovative and immediately scalable.
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
              Find out how we turn strategy into measurable operational scale
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>


      {/* Partner with PMG Section */}
      <div className="bg-[#EAF5FF] py-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] mb-8"
            style={{
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em'
            }}
          >
            Partner with PMG to Scale New Heights
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mb-12"
            style={{
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '135%',
              maxWidth: 'min(1196px, 95%)'
            }}
          >
            Let&apos;s work together to align your technology roadmap with market realities &amp; drive scalable growth.
          </p>
          <button
            className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
            style={{
              width: 'auto', // changed from fixed width to auto to fit text
              minWidth: '393px',
              height: 'clamp(48px, 4.51vw, 65px)',
              borderRadius: '10px',
              padding: '16px 32px',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              fontSize: 'clamp(15px, 1.39vw, 22px)',
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
