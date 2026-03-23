'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurFunctionalAreas() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(110px,11.88vw,171px)] pb-16 text-center">
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.47vw, 56px)',
            lineHeight: '110%',
            letterSpacing: '0%',
            color: '#14358A',
            maxWidth: 'min(778px, 95%)',
            margin: '0 auto 12px auto',
          }}
        >
          Functional Mastery. Executed.
        </h1>

        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(20px, 2.22vw, 36px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            maxWidth: 'min(1258px, 95%)',
            margin: '0 auto 32px auto',
          }}
        >
          We deliver bespoke solutions that reject generalized frameworks. Expect measurable, tangible business improvements and significant ROI precisely aligned with your strategic, high-stakes objectives.
        </p>

        <button
          className="text-white hover:opacity-90 transition-opacity"
          style={{
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            borderRadius: '10px',
            width: 'clamp(280px, 27.29vw, 393px)',
            height: 'clamp(48px, 4.51vw, 65px)',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(15px, 1.39vw, 22px)',
            lineHeight: '140%',
          }}
        >
          See why PMG is the Right Choice
        </button>
      </div>

      {/* Our Functional Areas Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4" style={{ paddingTop: '75px', paddingBottom: '64px' }}>
        <div className="text-center" style={{ marginBottom: '30px' }}>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '80.65%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '18px',
            }}
          >
            Our Functional Areas
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1082px, 95%)',
              margin: '0 auto',
            }}
          >
            We deploy world-class expertise to deliver a range of services uniquely tailored to your complex requirements.
          </p>
        </div>

        {/* Row 1: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center max-w-[1264px] mx-auto" style={{ gap: '30px', marginBottom: '32px' }}>
          {/* Operations & Strategy */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Bar Chart icon - strategy/operations */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Operations & Strategy
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Efficiency Engineered, Excellence Delivered.
            </p>
            <a
              href="/strategy-operations-consulting"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* People & Organizations */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Users/Group icon - people */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              People & Organizations
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              We solve the "People Tax" on your P&L.
            </p>
            <a
              href="/people-organizations-consulting"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>

        {/* Row 2: 3 Cards */}
        <div className="flex flex-col md:flex-row justify-center max-w-[1264px] mx-auto" style={{ gap: '30px', marginBottom: '24px' }}>
          {/* Customer Experience */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Chat/Message Bubble icon - customer experience */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Customer Experience
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Engineering high-retention, high-value journeys.
            </p>
            <a
              href="/customer-experience-consulting"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Mergers & Acquisitions */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Expand/Diverge icon - M&A */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Mergers & Acquisitions
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Realizing the synergies that others leave on the table.
            </p>
            <a
              href="/mergers-acquisitions-consulting"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Branding & Marketing */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Price Tag icon - branding */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="7" y1="7" x2="7.01" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Branding & Marketing
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Crafting Identities That Captivate.
            </p>
            <a
              href="/branding-marketing-consulting"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>

        {/* Row 3: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center max-w-[1264px] mx-auto" style={{ gap: '30px' }}>
          {/* BPO & Fractional Talent */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* User-Plus icon - talent */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <line x1="20" y1="8" x2="20" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="23" y1="11" x2="17" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              BPO & Fractional Talent
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Scaling your infrastructure without scaling your overhead.
            </p>
            <a
              href="/bpo-fractional-talent-consulting"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Crisis & Transition Management */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: 'min(412px, 100%)',
              minHeight: '198px',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Shield icon - crisis/protection */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(17px, 1.81vw, 30px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Crisis & Transition Management
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Navigating Uncertainty, Delivering Stability.
            </p>
            <a
              href="/crisis-transition-management"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>
      </div>

      {/* Ready for a Definitive Path to Transformation Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4" style={{ paddingTop: 'clamp(160px, 19.86vw, 286px)', paddingBottom: 'clamp(48px, 5.56vw, 80px)' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px, 3.47vw, 56px)',
              lineHeight: '110%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14358A',
              maxWidth: 'min(1191px, 95%)',
              margin: '0 auto 15px auto',
            }}
          >
            Ready for a Definitive Path to Transformation?
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1082px, 95%)',
              margin: '0 auto',
            }}
          >
            PMG's expertise translates directly into superior results. Explore our structured engagement models, ensuring the right expertise is delivered in a way that aligns perfectly with your growth goals.
          </p>
        </div>

        {/* Solution Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1062px] mx-auto" style={{ columnGap: '22px', rowGap: '24px' }}>
          {/* Out-of-the-Box Solutions */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
              width: 'min(519px, 100%)',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* 3D Box/Cube icon - out-of-the-box */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Out-of-the-Box Solutions
              </h3>
            </div>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Simple · Affordable · Self-Directed
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              Pre-packaged, technology-enabled offerings designed to rapidly address common industry challenges and deliver immediate value.
            </p>
            <a
              href="/out-of-the-box-solutions"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Bespoke Solutions */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
              width: 'min(519px, 100%)',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Edit/Pen-Square icon - bespoke/custom */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Bespoke Solutions
              </h3>
            </div>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Custom · Flexible · Fully Supported
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              Tailored to your specific, complex needs. Our custom solutions are managed hands-on by our world-class expert team, ensuring high-impact innovation.
            </p>
            <a
              href="/bespoke-solutions"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Active Management Solutions */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
              width: 'min(519px, 100%)',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Single User icon - active management */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Active Management Solutions
              </h3>
            </div>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Flexible · Accountable · Built for success
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              We embed a PMG executive directly into your leadership team for hands-on, accountable execution and immediate strategic impact, fully backed by our global.
            </p>
            <a
              href="/active-management-solutions"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Equity Engagements */}
          <div
            className="bg-white rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
              width: 'min(519px, 100%)',
              paddingLeft: '28px',
              paddingTop: '26px',
              paddingRight: '10px',
              paddingBottom: '24px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                {/* Dollar Sign icon - equity */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Equity Engagements
              </h3>
            </div>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Aligned · Scalable · Capital-Efficient
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              Access top-tier strategy and execution without draining vital cash reserves. PMG invests proprietary expertise for equity, directly aligning our success with your maximized outcomes.
            </p>
            <a
              href="/equity-solutions"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits Section */}
      <div
        className="relative w-full"
        style={{
          background: '#EAF6FF',
          paddingTop: '73px',
          paddingBottom: 'clamp(48px, 5.56vw, 80px)',
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
              letterSpacing: '-1.44px',
              color: '#14358A',
            }}
          >
            Unsure which solution fits your business?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1196px, 95%)',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.
          </p>

          <button
            className="text-white hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: 'clamp(240px, 22.15vw, 319px)',
              height: 'clamp(48px, 4.51vw, 65px)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
            }}
          >
            Find your ideal solution
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
