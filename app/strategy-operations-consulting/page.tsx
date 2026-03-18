'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';

export default function StrategyOperationsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(100px,9.86vw,142px)] pb-24 text-center">

        {/* Subheading */}
        <p
          className="mb-4"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(18px, 2.01vw, 33px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Strategy & Operations Consulting
        </p>

        {/* Main Heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.33vw, 56px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            color: '#14358A',
            maxWidth: 'min(1224px, 95%)',
            margin: '0 auto 24px auto',
          }}
        >
          Transforming Systems into High-Yield Assets.
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
            maxWidth: 'min(1258px, 95%)',
            margin: '0 auto',
          }}
        >
          We transform inefficient processes into predictable, high-yield assets. PMG provides the systems-driven strategy and execution required to align your operations perfectly with your growth strategy, guaranteeing maximum returns and sustained competitive advantage.
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

        {/* Cards Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Capital Excellence */}
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
              Capital Excellence
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
              Maximize ROI by leveraging expert strategies for optimal resource allocation and flawless project execution across the portfolio.
            </p>
          </div>

          {/* Cost Management */}
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
              Cost Management
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
              Achieve sustainable cost reduction without compromising operational quality or competitive edge.
            </p>
          </div>

          {/* Enterprise Architecture & Workflow Management */}
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
              Enterprise Architecture & Workflow Management
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
              Design and implement robust enterprise architecture to ensure seamless, scalable operations and strategic alignment.
            </p>
          </div>

          {/* Facility & Resource Management */}
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
                <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
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
              Facility & Resource Management
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
              Optimize physical resources and facility management for peak efficiency and significant fixed-cost reduction.
            </p>
          </div>

          {/* Lean, Six Sigma, Agile, or Sector Convergence */}
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
                <path d="M23 4v6h-6M1 20v-6h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              Lean, Six Sigma, Agile, or Sector Convergence
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
              Apply industry-leading methodologies (Lean, Six Sigma, Agile) to eliminate waste and accelerate time-to-market.
            </p>
          </div>

          {/* Multi-unit Strategy */}
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
              Multi-unit Strategy
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
              Synchronize complex, multi-unit operations with a cohesive strategy that guarantees consistency and maximizes performance across all locations.
            </p>
          </div>

          {/* Operations Scalability */}
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
              Operations Scalability
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
              Future-proof your business by developing scalable systems and processes capable of supporting exponential growth.
            </p>
          </div>

          {/* Performance Metrics & KPI Optimization */}
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
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M12 8v4l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              Performance Metrics & KPI Optimization
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
              Refine and optimize KPIs and performance metrics to ensure organizational accountability and guarantee measurable success.
            </p>
          </div>

          {/* Risk & Crisis Management */}
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
              Risk & Crisis Management
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
              Safeguard continuity with proactive risk assessments and proven crisis management strategies tailored for market resilience.
            </p>
          </div>

          {/* Supply Chain & Procurement */}
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
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              Supply Chain & Procurement
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
              Transform the supply chain into a competitive advantage via streamlined logistics and expert, cost-efficient procurement.
            </p>
          </div>

          {/* Technology Integration */}
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
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
              Technology Integration
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
              Seamlessly integrate cutting-edge technologies (AI/Automation) to enhance operational efficiency and accelerate competitive advantage.
            </p>
          </div>

          {/* Product Development */}
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
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="7" y1="7" x2="7.01" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
              Product Development
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
              Accelerate the product journey from concept to market with innovative strategies and processes engineered for immediate customer alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto' }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Our Approach
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.74vw, 28px)',
              lineHeight: '140%',
              color: '#333',
              textAlign: 'center',
              maxWidth: 'min(1000px, 95%)',
              margin: '0 auto 60px',
            }}
          >
            Our approach is a unique blend of deep functional expertise and rigorous systems thinking. We solve complex problems by drawing on successful cross-sector strategies, identifying hidden value, and crafting customized execution roadmaps.
          </p>

          {/* Top two steps */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '60px',
              marginBottom: '0',
            }}
          >
            {/* Step 1 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Uncover Strategic Growth Avenues
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We identify emerging market trends and cross-sectoral opportunities to develop compelling strategies for long-term dominance.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Develop a Resilient Strategic Roadmap
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We create a clear and actionable roadmap that can withstand market volatility and position your organization for long-term success.
              </p>
            </div>
          </div>

          {/* SVG Roadmap - Figma design */}
          <ApproachRoadmap />

          {/* Step 3 - centered below SVG */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: 'min(600px, 95%)',
              margin: '0 auto',
            }}
          >
            <h3
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '27px',
                lineHeight: '105%',
                color: '#14358A',
                letterSpacing: '-0.81px',
                marginBottom: '12px',
              }}
            >
              Empower Your Organization for the Future
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.39vw, 22px)',
                lineHeight: '140%',
                color: '#333',
                margin: 0,
              }}
            >
              We provide strategic guidance, leadership development, and organizational change management to ensure successful execution.
            </p>
          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
             {/* Capability Pills with Figma Connector */}
            <div className="relative flex gap-6">
              {/* Left Connector SVG — blue bullets per pill + gray dots between */}
              <div className="flex-shrink-0" style={{ width: '50px' }}>
                <svg width="50" height="424" viewBox="0 0 50 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Blue bullet circles — one per pill center */}
                  <circle cx="10" cy="36" r="10" fill="#14358A"/>
                  <circle cx="10" cy="124" r="10" fill="#14358A"/>
                  <circle cx="10" cy="212" r="10" fill="#14358A"/>
                  <circle cx="10" cy="300" r="10" fill="#14358A"/>
                  <circle cx="10" cy="388" r="10" fill="#14358A"/>
                  {/* Gray spacer dots between pill 1-2 */}
                  <circle cx="10" cy="68" r="5" fill="#424856"/>
                  <circle cx="10" cy="80" r="5" fill="#424856"/>
                  <circle cx="10" cy="92" r="5" fill="#424856"/>
                  <circle cx="36" cy="80" r="5" fill="#424856"/>
                  {/* Gray spacer dots between pill 2-3 */}
                  <circle cx="10" cy="156" r="5" fill="#424856"/>
                  <circle cx="10" cy="168" r="5" fill="#424856"/>
                  <circle cx="10" cy="180" r="5" fill="#424856"/>
                  <circle cx="36" cy="168" r="5" fill="#424856"/>
                  {/* Gray spacer dots between pill 3-4 */}
                  <circle cx="10" cy="244" r="5" fill="#424856"/>
                  <circle cx="10" cy="256" r="5" fill="#424856"/>
                  <circle cx="10" cy="268" r="5" fill="#424856"/>
                  <circle cx="36" cy="256" r="5" fill="#424856"/>
                  {/* Gray spacer dots between pill 4-5 */}
                  <circle cx="10" cy="332" r="5" fill="#424856"/>
                  <circle cx="10" cy="344" r="5" fill="#424856"/>
                  <circle cx="10" cy="356" r="5" fill="#424856"/>
                  <circle cx="36" cy="344" r="5" fill="#424856"/>
                </svg>
              </div>

              {/* Pills Column */}
              <div className="flex flex-col gap-4">
                {/* Product Lifecycle Management */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                          <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                          <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                          <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Product Lifecycle Management
                  </span>
                </div>

                {/* Capital Excellence */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 2.5a2.12 2.12 0 013 3L16 12l-4 1 1-4 6.5-6.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 6.5L17.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M10 12.5C10 12.5 8 14 6.5 17.5C5 21 2 22 2 22s1-3 4.5-4.5C10 14 11.5 12 11.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Capital Excellence
                  </span>
                </div>

                {/* Data-Driven Insights */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4l7.07 17 2.51-7.39L21 11.1 4 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 13l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    Data-Driven Insights
                  </span>
                </div>

                {/* KPI Optimization */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18 4s-1 0-4 3l-7 7 3 3 7-7c3-3 3-4 3-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '100%', color: '#FFFFFF' }}>
                    KPI Optimization
                  </span>
                </div>

                {/* Lean Six Sigma */}
                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
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
              A Multi-Faceted Approach to Success
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.74vw, 28px)',
                lineHeight: '140%',
                color: '#333333',
                textAlign: 'right',
              }}
            >
              Our team isn't limited to a single sector; our strength lies in our industry-agnostic expertise. By assembling a diverse group of experts with proven track records across various fields, we can apply a multi-faceted approach to every challenge. This unique blend of experience and methodology allows us to:
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
                  fontSize: 'clamp(16px, 1.74vw, 28px)',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                Develop truly innovative strategies by leveraging best practices and successful models from a wide range of industries, not just your own.
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
                  fontSize: 'clamp(16px, 1.74vw, 28px)',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                Deliver unparalleled operational efficiency by drawing from the collective wisdom of proven leaders who have solved similar problems in different contexts.
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
              fontSize: 'clamp(18px, 2.08vw, 34px)',
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
          backgroundImage: 'url(/principle-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
              fontSize: 'clamp(18px, 2.08vw, 34px)',
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
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '135%',
              color: '#FFFFFF',
            }}
          >
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
        </div>
      </div>

      {/* Ready to unlock your organization's full potential CTA Section */}
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
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Ready to unlock your organization's full potential?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: 'min(1196px, 95%)',
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
