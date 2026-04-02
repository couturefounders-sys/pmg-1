"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';
import ScrollStack from '@/components/ScrollStack';

const CAPABILITY_ITEMS = [
  'Crisis Leadership',
  'Turnaround Strategy',
  'Stakeholder Communication',
  'Business Continuity',
  'Resilience Planning',
  'Interim Management',
  'Financial Restructuring',
  'Reputation Management',
  'Succession Planning',
  'Risk Assessment',
  'Scenario Planning',
  'Post-Mortem Analysis',
  'Liquidity Management',
  'Operational Stabilization',
  'Change Management',
];

const STEP_POSITIONS = {
  step1: { left: 20, top: 10 },
  step2: { left: 70, top: 10 },
  step3: { left: 47, top: 92 },
};

export default function CrisisTransitionManagement() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      <FadeInSection delay={0} direction="up">
      <div className="w-full flex justify-center px-4" style={{ paddingTop: '8px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1vw, 14px)', color: '#14358A' }}>
          <AnimatedCounter end={22} suffix="x" /> average client ROI
        </p>
      </div>
      </FadeInSection>



      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto text-center" style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)' }}>
        <FadeInSection direction="up">
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000', margin: '0 auto 1rem' }}>
          Crisis &amp; Transition Management
        </p>
        <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', textAlign: 'center', color: '#14358A', width: '1224px', maxWidth: '100%', margin: '37px auto 0 auto' }}>
          Navigating Uncertainty with Decisive Leadership
        </h1>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#333333', width: '1258px', maxWidth: '100%', margin: '31px auto 0 auto', paddingBottom: 'clamp(48px, 5.56vw, 80px)' }}>
          In times of crisis or significant change, decisive leadership and a steady hand are paramount. PMG provides the expert guidance and hands-on support needed to navigate complex transitions, manage risk, and emerge stronger and more resilient.
        </p>
        </FadeInSection>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-16">
        <h2 className="text-center mb-12" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A' }}>
          How We Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Business Continuity & Resilience Planning */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.5" fill="white"/><line x1="12" y1="2" x2="12" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="17" x2="12" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="2" y1="12" x2="7" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Business Continuity & Resilience Planning</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Develop robust frameworks to ensure essential functions continue operating during and after a major disruption or disaster.</p>
          </div>

          {/* Interim Executive Leadership */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Interim Executive Leadership</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Rapidly deploy seasoned leaders to maintain stability and momentum during unplanned executive departures or transitions.</p>
          </div>

          {/* Turnaround & Restructuring Strategy */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="8" rx="4" stroke="white" strokeWidth="1.5"/><circle cx="18" cy="6" r="2" fill="white"/><rect x="2" y="14" width="20" height="8" rx="4" stroke="white" strokeWidth="1.5"/><circle cx="6" cy="18" r="2" stroke="white" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Turnaround & Restructuring Strategy</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Revitalize underperforming business units with aggressive stabilization tactics and long-term financial restructuring.</p>
          </div>

          {/* Crisis Communication & Reputation Defense */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="1.5"/><line x1="9" y1="18" x2="15" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="5" x2="14" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Crisis Communication & Reputation Defense</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Protect your brand's integrity with rapid-response communication strategies designed to manage public perception and stakeholder trust.</p>
          </div>

          {/* Post-Crisis Recovery & Learning */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5"/><path d="M2 13h20" stroke="white" strokeWidth="1.5"/><rect x="9" y="13" width="6" height="4" rx="1" stroke="white" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Post-Crisis Recovery & Learning</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Conduct deep-dive assessments after a crisis to refine protocols, rebuild infrastructure, and prevent future occurrences.</p>
          </div>

          {/* Succession Transition Coaching */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/><line x1="12" y1="12" x2="12" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><polyline points="9.5,8.5 12,6 14.5,8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="12" x2="16.5" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><polyline points="14,17.5 17,17.5 17,14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="12" x2="7.5" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><polyline points="7,14.5 7,17.5 10,17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Succession Transition Coaching</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Facilitate the smooth transfer of power between outgoing and incoming leaders to minimize cultural and operational friction.</p>
          </div>

          {/* Financial Liquidity Management */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="14" width="3" height="5" stroke="white" strokeWidth="1.2" fill="none"/><rect x="10" y="10" width="3" height="9" stroke="white" strokeWidth="1.2" fill="none"/><rect x="15" y="6" width="3" height="13" stroke="white" strokeWidth="1.2" fill="none"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Financial Liquidity Management</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Ensure immediate access to capital and optimize cash flow during volatile periods to maintain solvency and operational readiness.</p>
          </div>

          {/* Organizational Stabilization */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 17l4-6 4 3 5-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 17l4-6 4 3 5-8v9H5z" fill="white" fillOpacity="0.25"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Organizational Stabilization</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Implement immediate protocols to calm internal volatility and maintain employee productivity during periods of high uncertainty.</p>
          </div>

          {/* Scenario Planning & War Gaming */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', background: '#14358A' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="7" y1="8" x2="12" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="11" x2="10" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 7v1.5a2 2 0 0 1 4 0V7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/><rect x="14" y="8.5" width="6" height="4" rx="1" stroke="white" strokeWidth="1.2" fill="none"/></svg>
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Scenario Planning & War Gaming</h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>Stress-test your organization's readiness by simulating potential crises to identify vulnerabilities and sharpen executive decision-making.</p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto' }}>
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
            We replace panic with protocol. Our approach is forensic; identifying the leak, stabilizing the burn, and re-engineering the system for long-term immunity.
          </p>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
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
                Stabilize and Assess
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
                We quickly assess the situation to stabilize<br />
                operations, secure financials, and establish<br />
                a clear baseline.
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
                Develop a Strategic Response
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
                We formulate a clear, actionable plan that addresses<br />
                the root causes of the crisis and charts a path<br />
                toward recovery and resilience.
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
                Execute with Precision
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
                Our embedded experts lead the implementation<br />
                of the turnaround plan, managing stakeholders<br />
                and driving toward key milestones with<br />
                unwavering focus.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Leadership When It Counts Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Scroll Stack */}
          <div className="lg:w-[45%]">
            <ScrollStack items={CAPABILITY_ITEMS} />
          </div>

          <div className="flex-1 max-w-[715px]">
            <h2 className="mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A' }}>Leadership When It Counts</h2>
            <p className="mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333', textAlign: 'right' }}>
              Effective crisis management requires a unique blend of strategic thinking, operational expertise, and calm under pressure. Our team is composed of seasoned leaders who have successfully navigated high-stakes situations across a range of industries.
            </p>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>Gain confidence from leaders who have been tested in the field and know how to make tough decisions.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>Leverage cross-industry insights to find non-obvious solutions to your most pressing challenges.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/why-functional-consulting" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '30px', color: '#14358A', textDecoration: 'none' }}>
            Learn Why Functional Consulting Creates Better Outcomes
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* The Principle of Least Change Section */}
      <div className="relative w-full py-20 overflow-hidden" style={{ backgroundImage: 'url(/principle-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <p className="mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#FFFFFF' }}>The Principle of Least Change</p>
          <h2 className="mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#FFFFFF' }}>Maximum Impact. Minimal Disruption.</h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '135%', color: '#FFFFFF' }}>The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-20" style={{ background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)' }}>
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2 className="mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A' }}>Facing a Critical Transition?</h2>
          <p className="mb-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '135%', color: '#333333', maxWidth: 'min(1196px, 95%)', margin: '0 auto 2.5rem auto' }}>
            Don't navigate it alone. Contact us for a confidential consultation to see how our expertise can bring stability and create opportunity.
          </p>
          <Link href="/contact-us" className="text-white font-bold hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)', borderRadius: '10px', width: '319px', height: '65px', fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '140%', fontWeight: 700, border: 'none', cursor: 'pointer', padding: '16px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            Request a Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
