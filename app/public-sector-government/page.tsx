'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PublicSectorGovernment() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(140px,16.32vw,235px)] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000' }}>Public Sector &amp; Government Services</p>
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
              letterSpacing: '0%',
            }}
          >
            Modernizing Public Service Delivery
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              maxWidth: 'min(740px, 95%)'
            }}
          >
            Public institutions face the immense challenge of meeting rising citizen expectations while managing finite resources. We help government agencies transform administrative complexity into high-performing systems that balance rigorous accountability with the need for modern, efficient service.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div 
            className="rounded-full overflow-hidden"
            style={{
              width: 'clamp(280px, 31.46vw, 453px)',
              height: 'clamp(280px, 31.46vw, 453px)',
            }}
          >
            <img
              src="/public-sector-image.png"
              alt="Public Service Delivery"
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

      {/* Your Partner in the Public Sector Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            className="font-poppins font-semibold text-[#14358A] mb-16"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '46px',
            }}
          >
            Your Partner in the Public Sector
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '100%',
              maxWidth: 'min(1342px, 95%)',
              textAlign: 'center',
            }}
          >
            PMG partners with governments at all levels (federal, provincial, and municipal) along with public agencies and government-owned enterprises. Our consultants bring a combination of strategic insight, operational expertise, and transformation experience to help public institutions improve performance, strengthen trust, and deliver meaningful outcomes.
            <br /><br />
            Our government work is strengthened by cross-sector expertise in finance, technology, education, and organizational design. This allows us to support leaders in addressing complex challenges with practical, actionable strategies that deliver real public value.
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
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(20px,3.61vw,52px)] py-24">
        <h2
          className="font-poppins font-semibold text-[#14358A] text-center mb-6"
          style={{
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '46px',
            letterSpacing: '0%',
          }}
        >
          Our Work
        </h2>

        <p
          className="font-montserrat font-normal text-[#333333] text-center mb-16"
          style={{
            fontSize: 'clamp(18px, 1.67vw, 28px)',
            lineHeight: '140%',
          }}
        >
          Our work supports strategy, operations, & transformation—equipping public sector leaders with the tools to deliver meaningful change.
        </p>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
          {/* Policy & Strategy Development */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-strategy-transformation.png" alt="Policy & Strategy" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3 leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Policy & Strategy<br />Development
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Craft, refine and operationalize policies and strategies to support economic growth, improve public service delivery, and maximize long-term societal impact.
            </p>
          </div>

          {/* Operational Efficiency */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-risk-resilience.png" alt="Operational Efficiency" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Operational Efficiency
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Support efficiency initiatives through process improvement, performance measurement, and resource allocation, enabling departments to do more with less.
            </p>
          </div>

          {/* Digital Government & Service Transformation */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-customer-experience.png" alt="Digital Government" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Digital Government &<br />Service Transformation
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Design and implement digital platforms, data infrastructure, and self-service tools to significantly improve citizen accessibility and satisfaction.
            </p>
          </div>

          {/* Public Infrastructure & Capital Projects */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-regulatory-compliance.png" alt="Infrastructure" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Public Infrastructure &<br />Capital Projects
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Advise on the planning, financing, and delivery of major infrastructure projects, ensuring maximum public value is delivered on time and on budget.
            </p>
          </div>

          {/* Fiscal & Financial Management */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-innovation-fintech.png" alt="Fiscal Management" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Fiscal & Financial<br />Management
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Advise on fiscal strategy, budget optimization, and cost reduction to ensure long-term financial sustainability while maintaining critical service stability.
            </p>
          </div>

          {/* Workforce & Organizational Transformation */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-capital-performance.png" alt="Workforce" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Workforce & Organizational<br />Transformation
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Strengthen workforce strategies and enhance training, and build organizational cultures that promote innovation and internal accountability.
            </p>
          </div>

          {/* Program Evaluation & Impact Measurement */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-regulatory-compliance.png" alt="Program Evaluation" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Program Evaluation &<br />Impact Measurement
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Design and implement frameworks to rigorously measure program outcomes, evaluate efficacy, and ensure government investments deliver meaningful community impact.
            </p>
          </div>

          {/* Stakeholder Engagement & Public Consultation */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-innovation-fintech.png" alt="Stakeholder Engagement" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Stakeholder Engagement &<br />Public Consultation
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Facilitate transparent dialogue and public consultation processes, ensuring that decisions are informed by diverse citizen and stakeholder perspectives.
            </p>
          </div>

          {/* Procurement & Sourcing Modernization */}
          <div className="bg-white" style={{ width: 'min(412px, 100%)',
                border: '3px solid #14358A', borderRadius: '10px', padding: '23px 25px',}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img src="/icon-capital-performance.png" alt="Procurement" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
              <h3 className="font-bold text-[#14358A] mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em' }}>
                Procurement & Sourcing<br />Modernization
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#68718B' }}>
              Reform procurement processes to enhance transparency, achieve greater value for money, and support strategic goals like economic development and sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div 
        className="relative w-full py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/project-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />

        <div className="relative max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(20px,3.61vw,52px)]">
          {/* Section Heading */}
          <h2
            className="text-center text-white mb-16"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
                className="text-center mb-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>+1000</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>data points collected from executives</p>
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>1</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>late-phase education plan developed</p>
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>50+</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>stakeholders engaged across sectors</p>
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
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
                className="text-center mb-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>$5M</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>in service hours added at no extra cost</p>
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>30%</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>reduction in cost per program hour</p>
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>45x</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Return on Investment</p>
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
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
                className="text-center mb-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>17%</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>increase in student enrollment & NPS</p>
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>400+</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>annual student support hours added</p>
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
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-0.03em', color: '#006FBA', marginBottom: '4px' }}>24x</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Return on Investment</p>
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
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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

      {/* Our Projects Description Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '140%',
              color: '#64748B',
              maxWidth: 'min(800px, 95%)',
              margin: '0 auto',
            }}
          >
            We deliver tangible results that modernize public services, improve operational efficiency, and strengthen citizen outcomes.
          </p>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <div className="relative w-full py-24 bg-white overflow-hidden">

        <div className="relative max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(40px,12.43vw,179px)]">
          {/* Section Heading */}
          <h2 
            className="text-center mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              The public sector operates under unique scrutiny. Generalist consulting often applies private-sector playbooks that fail because they ignore the complex political, legislative, and accountability constraints of government. The result is a well-intentioned but ultimately impractical strategy that gets bogged down in implementation.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              PMG&apos;s model ensures accountability and practical delivery. We deploy specialists in functions like fiscal management, digital service transformation, and efficient procurement who adapt proven, world-class operational frameworks to the public context. We deliver solutions that are not only innovative and efficient but are also transparent, legally compliant, and designed for political viability and citizen adoption.
            </p>
          </div>

          <div className="text-center mt-16">
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
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
              Discover how we deliver public value without sacrificing accountability and trust.
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
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Partner with PMG to Enhance Public Service
          </h2>

          <p 
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: 'min(1196px, 95%)',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let's work together to build more efficient, responsive, and resilient public institutions.
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
