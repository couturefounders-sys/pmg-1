'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';
import ScrollStack from '@/components/ScrollStack';
import FadeInSection from '@/components/FadeInSection';

const CAPABILITY_ITEMS = [
  'Sector Convergence',
  'Business Value Units',
  'Input-Output Method',
  'Lean Six Sigma',
  'Agile Methodologies',
  'Value Chain Analysis',
  'KPI Optimization',
  'Balanced Scorecard',
  'Enterprise Architecture',
  'Cost-Benefit Analysis',
  'Workflow Automation',
  'Resource Allocation',
  'Capital Excellence',
  'Supply Chain Management',
  'Risk Mitigation',
  'Change Management',
  'Performance Benchmarking',
  'Data-Driven Insights',
  'Systems Thinking',
  'Customer Journey Mapping',
  'Product Lifecycle Management',
  'Theory of Constraints',
];

// ─── APPROACH STEP POSITIONS ─────────────────────────────────────────────────
// left & top are percentages (0–100) of the roadmap container.
// Because the container uses aspect-ratio, these scale identically on all screens.
//   left: 0 = far left,  100 = far right
//   top:  0 = top edge,  100 = bottom edge
// Keep values roughly 0–80 so text stays visible.

const STEP_POSITIONS = {
  step1: { left: 20,  top: 10  },   // "Uncover Strategic Growth Avenues"
  step2: { left: 70, top: 10  },   // "Develop a Resilient Strategic Roadmap"
  step3: { left: 47, top: 92 },   // "Empower Your Organization for the Future"
};
// ─────────────────────────────────────────────────────────────────────────────

export default function StrategyOperationsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(100px,9.86vw,142px)] pb-24 text-center">
        <FadeInSection direction="up">
        {/* Subheading */}
        <p
          className="mb-4 font-dm-sans font-bold"
          style={{
            fontSize: 'clamp(13px, 1.07vw, 15.4px)',
            lineHeight: '105%',
            color: '#000000',
          }}
        >
          Strategy &amp; Operations Consulting
        </p>

        {/* Main Heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
            fontSize: 'clamp(15px, 1.375vw, 19.8px)',
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
        </FadeInSection>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-16">
        <FadeInSection direction="up">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>
        </FadeInSection>

        {/* Cards Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Capital Excellence */}
          <FadeInSection delay={0}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Maximize ROI by leveraging expert strategies for optimal resource allocation and flawless project execution across the portfolio.
            </p>
          </div>
          </FadeInSection>

          {/* Cost Management */}
          <FadeInSection delay={0.1}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Achieve sustainable cost reduction without compromising operational quality or competitive edge.
            </p>
          </div>
          </FadeInSection>

          {/* Enterprise Architecture & Workflow Management */}
          <FadeInSection delay={0.2}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Design and implement robust enterprise architecture to ensure seamless, scalable operations and strategic alignment.
            </p>
          </div>
          </FadeInSection>

          {/* Facility & Resource Management */}
          <FadeInSection delay={0.3}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Optimize physical resources and facility management for peak efficiency and significant fixed-cost reduction.
            </p>
          </div>
          </FadeInSection>

          {/* Lean, Six Sigma, Agile, or Sector Convergence */}
          <FadeInSection delay={0.4}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Apply industry-leading methodologies (Lean, Six Sigma, Agile) to eliminate waste and accelerate time-to-market.
            </p>
          </div>
          </FadeInSection>

          {/* Multi-unit Strategy */}
          <FadeInSection delay={0.5}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Synchronize complex, multi-unit operations with a cohesive strategy that guarantees consistency and maximizes performance across all locations.
            </p>
          </div>
          </FadeInSection>

          {/* Operations Scalability */}
          <FadeInSection delay={0.6}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Future-proof your business by developing scalable systems and processes capable of supporting exponential growth.
            </p>
          </div>
          </FadeInSection>

          {/* Performance Metrics & KPI Optimization */}
          <FadeInSection delay={0.7}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Refine and optimize KPIs and performance metrics to ensure organizational accountability and guarantee measurable success.
            </p>
          </div>
          </FadeInSection>

          {/* Risk & Crisis Management */}
          <FadeInSection delay={0.8}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Safeguard continuity with proactive risk assessments and proven crisis management strategies tailored for market resilience.
            </p>
          </div>
          </FadeInSection>

          {/* Supply Chain & Procurement */}
          <FadeInSection delay={0.9}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Transform the supply chain into a competitive advantage via streamlined logistics and expert, cost-efficient procurement.
            </p>
          </div>
          </FadeInSection>

          {/* Technology Integration */}
          <FadeInSection delay={1.0}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Seamlessly integrate cutting-edge technologies (AI/Automation) to enhance operational efficiency and accelerate competitive advantage.
            </p>
          </div>
          </FadeInSection>

          {/* Product Development */}
          <FadeInSection delay={1.1}>
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Accelerate the product journey from concept to market with innovative strategies and processes engineered for immediate customer alignment.
            </p>
          </div>
          </FadeInSection>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto' }}>
          <FadeInSection direction="up">
          {/* Title */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
          </FadeInSection>

          {/* Roadmap container — aspect-ratio keeps height proportional on every screen */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>

            {/* SVG Roadmap */}
            <div style={{ position: 'absolute', inset: '25% 0 25% 0' }}>
              <ApproachRoadmap />
            </div>

            {/* Step 1 */}
            <div
              style={{
                position: 'absolute',
                left: `${STEP_POSITIONS.step1.left}%`,
                top: `${STEP_POSITIONS.step1.top}%`,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.88vw, 27px)',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Uncover Strategic Growth Avenues
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We identify emerging market trends and cross-sectoral<br />
                opportunities to develop compelling strategies for long-<br />
                term dominance.
              </p>
            </div>

            {/* Step 2 */}
            <div
              style={{
                position: 'absolute',
                left: `${STEP_POSITIONS.step2.left}%`,
                top: `${STEP_POSITIONS.step2.top}%`,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.88vw, 27px)',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Develop a Resilient Strategic Roadmap
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We create a clear and actionable roadmap that can withstand market volatility and position your organization for long-term success.
              </p>
            </div>

            {/* Step 3 */}
            <div
              style={{
                position: 'absolute',
                left: `${STEP_POSITIONS.step3.left}%`,
                top: `${STEP_POSITIONS.step3.top}%`,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.88vw, 27px)',
                  lineHeight: '105%',
                  color: '#14358A',
                  whiteSpace: 'nowrap',
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
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We provide strategic guidance, leadership development,<br />
                and organizational change management to ensure<br />
                successful execution.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Scroll Stack (creates the scroll runway) */}
          <div className="lg:w-[45%]">
            <ScrollStack items={CAPABILITY_ITEMS} />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[715px]">
            <FadeInSection direction="right">
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
            </FadeInSection>

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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
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
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
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
          <FadeInSection direction="up">
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
            Ready to unlock your organization's full potential?
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
            Let us help you develop and execute a winning strategy that drives sustainable growth and positions your organization for long-term success.
          </p>
          </FadeInSection>

          <Link
            href="/contact-us"
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
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Request a Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
