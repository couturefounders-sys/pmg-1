"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';

export default function MergersAcquisitionsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto text-center" style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)' }}>

        {/* Subheading */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(18px, 2.01vw, 33px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
            width: '448px',
            margin: '0 auto',
          }}
        >
          Mergers & Acquisitions Consulting
        </p>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.33vw, 56px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            color: '#14358A',
            width: '1224px',
            maxWidth: '100%',
            margin: '37px auto 0 auto',
          }}
        >
          Execution-Driven Strategy. Guaranteed Value Realization.
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(20px, 2.22vw, 36px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            width: '1258px',
            maxWidth: '100%',
            margin: '31px auto 0 auto',
            paddingBottom: 'clamp(48px, 5.56vw, 80px)',
          }}
        >
          M&A success is a strategic journey driven by rigorous execution. We deliver integrated solutions that maximize value, minimize integration risk, and ensure long-term growth. Our team has supported, structured, and integrated almost 100 transactions valued at over $200 million.
        </p>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-16">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.33vw, 56px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Compliance & Risk Assessment */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Compliance & Risk Assessment
              </h3>
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
              Ensure transaction security with comprehensive risk analysis and regulatory compliance to protect your investment and mitigate post-close liabilities.
            </p>
          </div>

          {/* Divestitures & Spin-offs */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Divestitures & Spin-offs
              </h3>
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
              Simplify asset divestitures and spin-offs with expert guidance to maximize sale returns and ensure seamless transitions.
            </p>
          </div>

          {/* Joint Ventures & Alliances */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Joint Ventures & Alliances
              </h3>
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
              Structure high-impact partnerships and alliances to amplify value, foster innovation, and guarantee mutual strategic growth.
            </p>
          </div>

          {/* M&A Capability Building */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              M&A Capability Building
              </h3>
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
              Empower internal teams with best-in-class M&A tools, frameworks, and training to execute complex transactions confidently and efficiently.
            </p>
          </div>

          {/* M&A Strategy & Due Diligence */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
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
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              M&A Strategy & Due Diligence
              </h3>
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
              Develop a winning M&A roadmap, leveraging deep-dive due diligence to guarantee maximized synergies and minimized execution risks.
            </p>
          </div>

          {/* Post-Acquisition Integration */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="18" x2="6.01" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Post-Acquisition Integration
              </h3>
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
              Unlock full deal value by seamlessly integrating operations, systems, and cultures with a proven Post-Merger Integration (PMI) methodology.
            </p>
          </div>

          {/* Separations & IPOs */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Separations & IPOs
              </h3>
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
              Navigate the complexities of carve-outs, spin-offs, and IPOs to establish market-ready, stand-alone entities.
            </p>
          </div>

          {/* Stakeholder Communication */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Stakeholder Communication
              </h3>
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
              Craft clear, compelling messages to maintain investor confidence and ensure transparency among all stakeholders during critical transactions.
            </p>
          </div>

          {/* Transaction Structuring */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Transaction Structuring
              </h3>
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
              Design innovative, tax-efficient transaction structures that maximize value realization while minimizing financial and legal risks.
            </p>
          </div>

          {/* Valuation & Negotiations */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
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
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Valuation & Negotiations
              </h3>
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
              Drive optimal deal terms using expert valuation models and advanced negotiation strategies for every transaction.
            </p>
          </div>

          {/* Valuation Support */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
              className="mb-0"
              style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              }}
              >
              Valuation Support
              </h3>
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
              Deliver precise, expert-backed financial insights and valuation models to support data-driven decisions at every stage of the deal process.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Our Approach
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1001px, 95%)',
              margin: '0 auto',
            }}
          >
            Our approach is a unique blend of deep M&A expertise and a data-driven, results-oriented methodology. We leverage our extensive experience across industries, combined with cutting-edge analytical tools and a global network of industry contacts, to deliver exceptional results.
          </p>
        </div>

        {/* Top Row - Steps 1 and 2 */}
        <div className="flex justify-between max-w-[1200px] mx-auto mb-0">
          {/* Step 1 - Understand Your Strategic Objectives */}
          <div className="text-center" style={{ maxWidth: 'min(512px, 95%)' }}>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 24px)',
                lineHeight: '120%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Understand Your Strategic Objectives
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '150%',
                color: '#333333',
              }}
            >
              We work with you to define your M&A strategy and identify the right targets that align with your long-term growth goals.
            </p>
          </div>

          {/* Step 2 - Guarantee Value and Mitigate Risk */}
          <div className="text-center" style={{ maxWidth: 'min(491px, 95%)' }}>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 24px)',
                lineHeight: '120%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Guarantee Value and Mitigate Risk
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '150%',
                color: '#333333',
              }}
            >
              We conduct rigorous due diligence and provide expert guidance to ensure maximum deal value realization and security.
            </p>
          </div>
        </div>

        {/* Roadmap Image */}
        <div className="flex justify-center my-8">
          <ApproachRoadmap />
        </div>

        {/* Bottom - Step 3 - Drive Successful Integration */}
        <div className="text-center max-w-[625px] mx-auto">
          <h3
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '27px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Drive Successful Integration
          </h3>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              color: '#333333',
            }}
          >
            We develop and execute comprehensive integration plans that minimize disruption and maximize the value of the acquisition.
          </p>
        </div>
      </div>

      {/* Growth Through Successful M&A Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
             {/* Capability Pills with Figma Connector */}
            <div className="relative flex gap-6">
              {/* Left Connector — Figma infographic elements stacked */}
              <div className="flex-shrink-0 relative" style={{ width: '50px', height: 'clamp(280px, 30.56vw, 440px)' }}>
                <img src="/ma-infographic-1.svg" alt="" style={{ position: 'absolute', top: '0', left: '0', width: '50px', height: '88px' }} />
                <img src="/ma-infographic-2.svg" alt="" style={{ position: 'absolute', top: '88px', left: '0', width: '50px', height: '88px' }} />
                <img src="/ma-infographic-3.svg" alt="" style={{ position: 'absolute', top: '176px', left: '0', width: '50px', height: '88px' }} />
                <img src="/ma-infographic-4.svg" alt="" style={{ position: 'absolute', top: '264px', left: '0', width: '50px', height: '88px' }} />
                <img src="/ma-infographic-5.svg" alt="" style={{ position: 'absolute', top: '352px', left: '0', width: '50px', height: '88px' }} />
              </div>

              {/* Pills Column */}
              <div className="flex flex-col gap-4">
                {/* Product Lifecycle Management */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <img src="/ma-icon-file-search.svg" alt="" width="48" height="48" />
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Product Lifecycle Management
                  </span>
                </div>

                {/* Capital Excellence */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <img src="/ma-icon-paint-brush.svg" alt="" width="48" height="48" />
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Capital Excellence
                  </span>
                </div>

                {/* Data-Driven Insights */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <img src="/ma-icon-cursor-click.svg" alt="" width="48" height="48" />
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Data-Driven Insights
                  </span>
                </div>

                {/* KPI Optimization */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <img src="/ma-icon-rocket-launch.svg" alt="" width="48" height="48" />
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    KPI Optimization
                  </span>
                </div>

                {/* Lean Six Sigma */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <img src="/ma-icon-wrench.svg" alt="" width="48" height="48" />
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Lean Six Sigma
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[715px]">
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
              Growth Through Successful M&A
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.39vw, 22px)',
                lineHeight: '150%',
                color: '#333333',
              }}
            >
              Our team isn't confined to a single sector; we've assembled a diverse group of experts with a proven track record of success in executing complex M&A transactions. This unique blend of experience and methodology allows us to think beyond traditional deal structures.
            </p>

            {/* Bullet Point 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '150%',
                  color: '#333333',
                }}
              >
                Develop innovative deal strategies by leveraging best practices from diverse industries to maximize value and minimize risk.
              </p>
            </div>

            {/* Bullet Point 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '150%',
                  color: '#333333',
                }}
              >
                Deliver unparalleled deal execution from the collective wisdom of leaders who have successfully navigated the complexities of M&A transactions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a
            href="/why-functional-consulting"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '30px',
              color: '#14358A',
              textDecoration: 'none',
            }}
          >
            Learn Why Functional Consulting Creates Better Outcomes
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* The Principle of Least Change Section */}
      <div
        className="relative w-full py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0B1B5E 0%, #14358A 100%)',
        }}
      >
        {/* Figma background SVG */}
        <img src="/ma-principle-bg.svg" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <p
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 1.67vw, 28px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            The Principle of Least Change
          </p>

          <h2
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.78vw, 46px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            Maximum Impact. Minimal Disruption.
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '150%',
              color: '#FFFFFF',
            }}
          >
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
        </div>
      </div>

      {/* Ready to Guarantee the Success CTA Section */}
      <div
        className="relative w-full py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)',
        }}
      >
        <img src="/ma-cta-bg.svg" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', opacity: 0.15 }} />
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.5vw, 40px)',
              lineHeight: '120%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Ready to Guarantee the Success of Your Next Transaction?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 24px)',
              lineHeight: '150%',
              color: '#333333',
              maxWidth: 'min(900px, 95%)',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let us help you navigate the complexities of M&A and achieve your strategic growth objectives.
          </p>

          <button
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              padding: '16px 32px',
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
