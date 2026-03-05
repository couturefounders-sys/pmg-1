"use client";

import Header from '@/components/Header';
import ApproachRoadmap from '@/components/ApproachRoadmap';

export default function BrandingMarketingConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto text-center" style={{ paddingTop: '142px' }}>

        {/* Subheading */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '29px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
            width: '428px',
            margin: '0 auto',
          }}
        >
          Branding & Marketing Consulting
        </p>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14358A',
            width: '1224px',
            maxWidth: '100%',
            margin: '37px auto 0 auto',
          }}
        >
          Driving Growth Through Perfectly Crafted Brands
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            width: '1258px',
            maxWidth: '100%',
            margin: '31px auto 0 auto',
            paddingBottom: '80px',
          }}
        >
          We treat brand and marketing as a direct investment in business value. We engineer integrated strategies and compelling narratives that guarantee audience resonance and deliver measurable, high-ROI revenue growth.
        </p>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-16">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Brand Building */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Brand Building
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Engineer a unique brand identity and experience that guarantees consistent messaging and superior market cut-through.
            </p>
          </div>

          {/* Change Measurement & Evaluation */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Change Measurement & Evaluation
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Maximize Customer Lifetime Value (CLV) by fostering advocacy and converting loyal customers into passionate brand promoters.
            </p>
          </div>

          {/* Consumer & Shopper Insights */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Consumer & Shopper Insights
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Leverage deep consumer and shopper insights to inform strategy and create impactful experiences that guarantee sales growth.
            </p>
          </div>

          {/* Content Creation & Management */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Content Creation & Management
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Develop and manage high-quality, engaging content pipelines that drive measurable audience resonance and strategic alignment.
            </p>
          </div>

          {/* Content Marketing & Storytelling */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Content Marketing & Storytelling
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Tell your brand's story with compelling content strategies designed to build lasting audience relationships and accelerate conversion.
            </p>
          </div>

          {/* Customer Acquisition Strategies */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <line x1="20" y1="8" x2="20" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="23" y1="11" x2="17" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Customer Acquisition Strategies
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Design and implement high-ROI customer acquisition strategies that aggressively expand market share and reduce cost-per-lead.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Digital Marketing
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Execute high-performance digital marketing campaigns across all platforms to maximize traffic generation and lead volume.
            </p>
          </div>

          {/* Marketing & Business Analytics */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Marketing & Business Analytics
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Provide actionable, data-driven insights, analytics, and modeling to rigorously evaluate campaign effectiveness and guide high-stakes decision-making.
            </p>
          </div>

          {/* Market Positioning & Go-to-Market Strategy */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M12 8v4l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Market Positioning & Go-to-Market Strategy
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Define a defensible market position and design effective Go-to-Market strategies that ensure successful product launches.
            </p>
          </div>

          {/* Marketing Return on Investment */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Marketing Return on Investment
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Maximize profitability by rigorously measuring and optimizing the financial Return on Investment (ROI) of all marketing expenditure.
            </p>
          </div>

          {/* Organization & Capabilities */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Organization & Capabilities
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Build structures and capabilities required to execute integrated, effective marketing and sales strategies.
            </p>
          </div>

          {/* Pricing & Enablement */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="7" y1="7" x2="7.01" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Pricing & Enablement
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Establish optimal competitive pricing and enable sales teams with the tools and knowledge required to maximize revenue and profitability.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '50px',
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
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto',
            }}
          >
            Our approach is a unique blend of deep marketing expertise and creative innovation. We draw insights from a vast array of successful brands across industries, identifying best practices and emerging trends that can be applied to your specific business.
          </p>
        </div>

        {/* Top Row - Steps 1 and 2 */}
        <div className="flex justify-between max-w-[1200px] mx-auto mb-0">
          {/* Step 1 - Uncover Brand Truths */}
          <div className="text-center" style={{ maxWidth: '512px' }}>
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
              Uncover Brand Truths
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              We conduct in-depth research to understand your brand's unique strengths, weaknesses, and opportunities.
            </p>
          </div>

          {/* Step 2 - Develop a Compelling Brand Narrative */}
          <div className="text-center" style={{ maxWidth: '491px' }}>
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
              Develop a Compelling Brand Narrative
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              We craft a compelling brand story that resonates with your target audience and differentiates you from the competition.
            </p>
          </div>
        </div>

        {/* Roadmap Image */}
        <div className="flex justify-center my-8">
          <ApproachRoadmap />
        </div>

        {/* Bottom - Step 3 - Execute Integrated Campaigns */}
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
            Execute Integrated Campaigns
          </h3>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#333333',
            }}
          >
            Develop and execute full-funnel marketing campaigns that guarantee a consistent, high-impact brand experience across all touchpoints.
          </p>
        </div>
      </div>

      {/* Crafting Compelling Brands Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 h-full"
                style={{ width: '4px', background: '#14358A', borderRadius: '2px' }}
              />

              {/* Product Lifecycle Management */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    Product Lifecycle Management
                  </span>
                </div>
              </div>

              {/* Capital Excellence */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M20 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 2.5a2.12 2.12 0 013 3L16 12l-4 1 1-4 6.5-6.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 6.5L17.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M10 12.5C10 12.5 8 14 6.5 17.5C5 21 2 22 2 22s1-3 4.5-4.5C10 14 11.5 12 11.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    Capital Excellence
                  </span>
                </div>
              </div>

              {/* Data-Driven Insights */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 4l7.07 17 2.51-7.39L21 11.1 4 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 13l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    Data-Driven Insights
                  </span>
                </div>
              </div>

              {/* KPI Optimization */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18 4s-1 0-4 3l-7 7 3 3 7-7c3-3 3-4 3-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    KPI Optimization
                  </span>
                </div>
              </div>

              {/* Lean Six Sigma */}
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
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
                fontSize: '50px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Crafting Compelling Brands
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '25px',
                lineHeight: '140%',
                color: '#333333',
                textAlign: 'right',
              }}
            >
              Our team of seasoned marketing and branding experts isn't confined to a single sector; we've assembled a diverse group of experts with a proven track record of success in creating and building iconic brands. This unique blend of experience and expertise allows us to think beyond traditional marketing channels.
            </p>

            {/* Bullet Point 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '25px', lineHeight: '140%', color: '#333333' }}>
                Develop innovative marketing strategies by leveraging best practices from diverse industries to craft compelling brand stories and create impactful campaigns.
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
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '25px', lineHeight: '140%', color: '#333333' }}>
                Deliver unparalleled brand value from the collective wisdom of leaders who have successfully built and maintained strong brands in competitive markets.
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
              fontSize: '30px',
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
        className="relative w-full py-20"
        style={{
          backgroundImage: 'url(/principle-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <p
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '30px',
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
              fontSize: '48px',
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
              fontSize: '32px',
              lineHeight: '135%',
              color: '#FFFFFF',
            }}
          >
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
        </div>
      </div>

      {/* Ready to Convert CTA Section */}
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
            Ready to Convert Talent Strategy into Measurable ROI?
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
            Let us help you develop and execute a winning strategy that drives sustainable growth and positions your organization for long-term success.
          </p>

          <button
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '20px',
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

      {/* Footer */}
      <footer className="relative z-10 py-20" style={{ background: '#1B45B4' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
              <img src="/pmg-logo.png" alt="PMG Logo" style={{ width: 'auto', height: '80px', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>What we Do</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Our Content</h3>
              <ul className="space-y-4 mb-10">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Community Programs</a></li>
              </ul>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Working with PMG</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Licensing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Our Models</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Business Value-Unit Model</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Legal</h3>
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
