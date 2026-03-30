'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurProjectsSection, { DollarIcon, TrendUpIcon, CheckIcon, ScreenIcon } from '@/components/OurProjectsSection';
import type { ProjectCardData } from '@/components/OurProjectsSection';

const b2bProjects: ProjectCardData[] = [
  {
    title: 'Artemis Capital',
    stats: [
      { icon: <DollarIcon />, value: '12%', label: 'reduction in operating expenses' },
      { icon: <ScreenIcon />, value: '25%', label: 'reduction in low-value personnel spend' },
      { icon: <TrendUpIcon />, value: '22x', label: 'Return on Investment' },
    ],
  },
  {
    title: 'Kraken',
    stats: [
      { icon: <CheckIcon />, value: '22%', label: 'increase in customer satisfaction' },
      { icon: <ScreenIcon />, value: '40%', label: 'reduction in signup-to-activation time' },
      { icon: <TrendUpIcon />, value: '23x', label: 'Return on Investment' },
    ],
  },
  {
    title: 'OneSCM',
    stats: [
      { icon: <TrendUpIcon />, value: '25%', label: 'increase in qualified leads' },
      { icon: <CheckIcon />, value: '17%', label: 'increase in customer renewal rates' },
      { icon: <TrendUpIcon />, value: '9x', label: 'Return on Investment' },
    ],
  },
];

export default function B2BProfessionalServices() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(120px,13.89vw,200px)] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[740px] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000' }}>B2B &amp; Professional Services</p>
          <h1
            className="font-dm-sans font-bold text-[#14358A]"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
            }}
          >
            Optimizing High-Value Professional Services
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
            }}
          >
            Professional firms and internal departments are under increasing pressure to scale specialized expertise without compromising quality. We help organizations bridge the gap between operational complexity and high-margin service delivery, ensuring that growth never comes at the expense of excellence.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 'clamp(240px, 28.89vw, 416px)',
              height: 'clamp(240px, 29.44vw, 424px)',
            }}
          >
            <img
              src="/b2b-professional-services-hero.png"
              alt="Professional Services"
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

      {/* Your Partner in Service Excellence Section */}
      <div className="relative w-full bg-white" style={{ paddingTop: 'clamp(80px, 8.33vw, 120px)', paddingBottom: 'clamp(80px, 8.33vw, 120px)' }}>
        <div className="relative max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center px-6">

          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-center"
            style={{
              width: '1087px',
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              color: '#14358A',
              letterSpacing: '-0.03em',
              marginBottom: '60px'
            }}
          >
            Your Partner in Service Excellence
          </h2>

          {/* Section Description */}
          <div
            className="font-montserrat font-normal text-center"
            style={{
              width: '1342px',
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '100%',
              color: '#333333',
              letterSpacing: '0%'
            }}
          >
            <p style={{ marginBottom: '40px' }}>
              Whether you are a law firm, accounting practice, architectural firm, or a corporate HR, IT, or finance department, your challenge is the same: deliver expert value efficiently. PMG provides the operational and strategic expertise to help you scale your impact.
            </p>
            <p>
              Our work is strengthened by deep functional knowledge in organizational design, process automation, and financial management, allowing us to deliver solutions that are not just strategic, but also highly practical and profitable.
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
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', maxWidth: 'min(1082px, 95%)', textAlign: 'center' }}
            >
              We help service-based organizations build scalable, efficient, and client-centric operating models.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
            {/* Card 1: Service Delivery & Margin Optimization */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-strategy-transformation.png" alt="Service Delivery" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Service Delivery & Margin Optimization
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
              >
                Refine service delivery models and implement value-based pricing to enhance profitability and optimize resource allocation.
              </p>
            </div>

            {/* Card 2: Operational Excellence for Corporate Functions */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-risk-resilience.png" alt="Operational Excellence" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Operational Excellence for Corporate Functions
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
              >
                Streamline internal HR, Finance, and IT workflows, leveraging automation and shared service models to drastically reduce overhead.
              </p>
            </div>

            {/* Card 3: Client Relationship & Lifecycle Management */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-customer-experience.png" alt="Client Relationship" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Client Relationship & Lifecycle Management
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
              >
                Develop robust client management strategies, optimizing acquisition, onboarding, retention, and growth using advanced CRM and analytics.
              </p>
            </div>

            {/* Card 4: Talent Management & Professional Development */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-regulatory-compliance.png" alt="Talent Management" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Talent Management & Professional Development
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
              >
                Design career pathways and learning systems to attract, develop, and retain top professional talent and institutional knowledge.
              </p>
            </div>

            {/* Card 5: Partnership & Firm Governance */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-innovation-fintech.png" alt="Partnership Governance" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Partnership & Firm Governance
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
              >
                Advise on partnership structures, succession planning, and governance to ensure long-term stability and strategic firm alignment.
              </p>
            </div>

            {/* Card 6: Risk Management & Quality Assurance */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                padding: '23px 25px',
                border: '3px solid #14358A',
                borderRadius: '10px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/icon-capital-performance.png" alt="Risk Management" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  Risk Management & Quality Assurance
                </h3>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
              >
                Implement rigorous QA processes and risk frameworks to protect firm reputation, ensure compliance, and maintain service delivery standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <OurProjectsSection projects={b2bProjects} backgroundImage="/projects-bg-financial.webp" />

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
            We deliver tangible results that accelerate growth, optimize operations, and drive sustainable success for B2B organizations.
          </p>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center">
          <h2
            className="text-center mb-10"
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
              Professional services firms face a unique paradox: the expertise that drives revenue is the same resource that is hardest to scale. Generalist consultants often apply one-size-fits-all operational frameworks that fail to account for the relationship-driven, knowledge-intensive nature of professional work. Their recommendations often undermine the very quality that differentiates your firm.
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
              PMG&apos;s model delivers precision without compromise. We deploy specialists in functions like service delivery optimization, talent management, and client lifecycle strategy who understand that efficiency must enhance, not erode, quality. They embed proven operational frameworks that protect your margins while scaling your capacity to deliver excellence.
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
              Discover how our functional experts help professional firms scale expertise without compromising quality.
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
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
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em'
          }}
        >
          Ready to Optimize Your Service Delivery?
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: 'clamp(15px, 1.375vw, 19.8px)',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: 'min(1196px, 95%)'
          }}
        >
          Let&apos;s discuss how PMG can help you enhance efficiency, scale expertise, and drive profitability.
        </p>
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: 'clamp(260px, 27.29vw, 393px)',
            height: 'clamp(48px, 4.51vw, 65px)',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: 'clamp(15px, 1.39vw, 22px)',
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
