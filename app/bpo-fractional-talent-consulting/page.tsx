"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';
import ScrollStack from '@/components/ScrollStack';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

const CAPABILITY_ITEMS = [
  'Sector Convergence',
  'Business Value Units',
  'Input-Output Method',
  'Global Talent Sourcing',
  'Process Offshoring',
  'Fractional C-Suite',
  'BPO Playbook Design',
  'Remote Team Integration',
  'Service Level Agreements',
  'Knowledge Process Outsourcing',
  'Vendor Management',
  'Skill-Based Routing',
  'Scalable Workforce Models',
  'Cost Arbitrage',
  'Follow-the-Sun Support',
  'Compliance Outsourcing',
  'Virtual Assistants',
  'Nearshore vs. Offshore',
  'Build-Operate-Transfer',
  'Talent as a Service',
];

const STEP_POSITIONS = {
  step1: { left: 20, top: 10 },
  step2: { left: 70, top: 10 },
  step3: { left: 47, top: 92 },
};

export default function BpoFractionalTalentConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto text-center" style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)' }}>
        <FadeInSection direction="up">
        <p
          className="font-dm-sans font-bold mb-4"
          style={{
            fontSize: 'clamp(13px, 1.07vw, 15.4px)',
            lineHeight: '105%',
            color: '#000000',
            margin: '0 auto 1rem',
          }}
        >
          BPO &amp; Fractional Talent Consulting
        </p>

        <h1
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            color: '#14358A',
            width: '1224px',
            maxWidth: '100%',
            margin: '37px auto 0 auto',
          }}
        >
          Global Elite Talent on Demand
        </h1>

        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.375vw, 19.8px)',
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
          We transform fixed costs into flexible growth. Our BPO and Fractional Talent solutions provide immediate access to the top 1% of global expertise, enabling you to scale operations rapidly, fill critical gaps, and achieve dramatic cost efficiencies.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Administrative Support */}
          <FadeInSection delay={0}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/target.svg" alt="Administrative Support" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Administrative Support
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Offload routine tasks (scheduling, data management) to dedicated virtual assistants to free up core leadership capacity for strategic priorities.
            </p>
          </div>
          </FadeInSection>

          {/* Board Services */}
          <FadeInSection delay={0.1}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/funds.svg" alt="Board Services" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Board Services
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Enhance governance and strategic implementation with expert-led board services tailored to strengthen organizational leadership.
            </p>
          </div>
          </FadeInSection>

          {/* BPO Playbook & Architecture Development */}
          <FadeInSection delay={0.2}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/switch-button.svg" alt="BPO Playbook" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              BPO Playbook & Architecture Development
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Architect a custom BPO strategy and framework (playbook) with expert guidance to guarantee seamless execution and measurable cost savings.
            </p>
          </div>
          </FadeInSection>

          {/* CEO Excellence */}
          <FadeInSection delay={0.3}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/phone.svg" alt="CEO Excellence" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              CEO Excellence
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Elevate CEO leadership impact with executive coaching and strategic insights designed to navigate complex challenges and accelerate success.
            </p>
          </div>
          </FadeInSection>

          {/* DFY Customer Support Solutions */}
          <FadeInSection delay={0.4}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/retro-bag.svg" alt="DFY Customer Support" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              DFY Customer Support Solutions
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Deploy scalable, world-class customer support (call centers, chat) that delivers high CSAT while optimizing cost per resolution.
            </p>
          </div>
          </FadeInSection>

          {/* Executive Immersions */}
          <FadeInSection delay={0.5}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/efferent-three.svg" alt="Executive Immersions" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Executive Immersions
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Immediately bridge critical C-level leadership gaps with experienced executives who drive strategic results on an interim basis.
            </p>
          </div>
          </FadeInSection>

          {/* Finance & Accounting Services */}
          <FadeInSection delay={0.6}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/chart-histogram.svg" alt="Finance & Accounting" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Finance & Accounting Services
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Streamline financial operations with outsourced services (bookkeeping, compliance, reporting) to enhance fiscal accuracy and efficiency.
            </p>
          </div>
          </FadeInSection>

          {/* HR Outsourcing */}
          <FadeInSection delay={0.7}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/chart-line-area.svg" alt="HR Outsourcing" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              HR Outsourcing
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Simplify HR operations and reduce overhead with outsourced solutions for recruitment, compliance, and core administrative needs.
            </p>
          </div>
          </FadeInSection>

          {/* IT & Helpdesk Management */}
          <FadeInSection delay={0.8}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/message-security.svg" alt="IT & Helpdesk" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              IT & Helpdesk Management
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Ensure technology stability and security with expert-managed IT and helpdesk solutions that reduce business disruption.
            </p>
          </div>
          </FadeInSection>

          {/* Project Management Services */}
          <FadeInSection delay={0.9}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/shopping-cart-two.svg" alt="Project Management" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Project Management Services
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Leverage expert project managers to guarantee initiative execution is on time, within scope, and delivers measurable ROI.
            </p>
          </div>
          </FadeInSection>

          {/* Sales Support */}
          <FadeInSection delay={1.0}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/chip.svg" alt="Sales Support" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Sales Support
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Empower sales teams with expert assistance in lead generation, CRM management, and administrative tasks that directly drive revenue.
            </p>
          </div>
          </FadeInSection>

          {/* Specialized Expertise */}
          <FadeInSection delay={1.1}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <img src="/icons/cards/inbox.svg" alt="Specialized Expertise" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Specialized Expertise
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Access pre-vetted, niche experts with deep industry experience to tackle unique, high-value challenges and accelerate objectives.
            </p>
          </div>
          </FadeInSection>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto' }}>
          <FadeInSection direction="up">
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
            Our approach is a unique blend of deep industry expertise and flexible engagement models. We draw insights from a vast array of successful organizations and tailor our solutions to meet your specific needs and budget.
          </p>
          </FadeInSection>

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
                Determine Optimal Engagement Model
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
                Conduct a thorough assessment to pinpoint efficiency<br />
                gains and structure the most cost-effective BPO or<br />
                Fractional Talent solution.
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
                Build High-Performing Teams
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
                We carefully select and onboard top talent, ensuring<br />
                they possess the skills and experience to deliver<br />
                exceptional results.
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
                Ensure Seamless Integration
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
                We facilitate smooth integration into your existing<br />
                team and provide ongoing support to ensure<br />
                project success.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Scaling Your Team with Confidence Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Scroll Stack */}
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
              Scaling Your Team with Confidence
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
              Imagine a team of highly skilled professionals, each a specialist in their respective field, ready to augment your capabilities on-demand. We offer a diverse pool of fractional experts and BPO services, providing you with access to top-tier talent when and where you need it.
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
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>
                Think beyond traditional staffing models with customized solutions that meet your specific needs and budget.
              </p>
            </div>

            {/* Bullet Point 2 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>
                Develop innovative workforce solutions by leveraging our network to quickly scale your team and address challenges.
              </p>
            </div>

            {/* Bullet Point 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>
                Deliver unparalleled operational efficiency without the overhead of full-time hiring.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a
            href="/why-functional-consulting"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '30px', color: '#14358A', textDecoration: 'none' }}
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
        style={{ backgroundImage: 'url(/principle-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <FadeInSection direction="up">
          <p className="mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            The Principle of Least Change
          </p>
          <h2 className="mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#FFFFFF' }}>
            Maximum Impact. Minimal Disruption.
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '135%', color: '#FFFFFF' }}>
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
          </FadeInSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-20" style={{ background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)' }}>
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <FadeInSection direction="up">
          <h2 className="mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A' }}>
            Ready to Access Elite Talent and Optimize Operational Costs?
          </h2>
          <p className="mb-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '135%', color: '#333333', maxWidth: 'min(1196px, 95%)', margin: '0 auto 2.5rem auto' }}>
            Let us help you unlock the power of our BPO and Fractional Talent solutions and achieve your business objectives.
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
