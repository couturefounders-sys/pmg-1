"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';

export default function BpoFractionalTalentConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto text-center" style={{ paddingTop: '142px' }}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '29px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
            margin: '0 auto',
          }}
        >
          BPO & Fractional Talent Consulting
        </p>

        <h1
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '48px',
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
          We transform fixed costs into flexible growth. Our BPO and Fractional Talent solutions provide immediate access to the top 1% of global expertise, enabling you to scale operations rapidly, fill critical gaps, and achieve dramatic cost efficiencies.
        </p>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-16">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Administrative Support */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-admin-support.png"
                alt="Administrative Support"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Administrative Support
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Offload routine tasks (scheduling, data management) to dedicated virtual assistants to free up core leadership capacity for strategic priorities.
            </p>
          </div>

          {/* Board Services */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-board-services.png"
                alt="Board Services"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Board Services
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Enhance governance and strategic implementation with expert-led board services tailored to strengthen organizational leadership.
            </p>
          </div>

          {/* BPO Playbook & Architecture Development */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-playbook.png"
                alt="BPO Playbook"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              BPO Playbook & Architecture Development
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Architect a custom BPO strategy and framework (playbook) with expert guidance to guarantee seamless execution and measurable cost savings.
            </p>
          </div>

          {/* CEO Excellence */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-ceo-excellence.png"
                alt="CEO Excellence"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              CEO Excellence
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Elevate CEO leadership impact with executive coaching and strategic insights designed to navigate complex challenges and accelerate success.
            </p>
          </div>

          {/* DFY Customer Support Solutions */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-dfy-customer-support.png"
                alt="DFY Customer Support"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              DFY Customer Support Solutions
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Deploy scalable, world-class customer support (call centers, chat) that delivers high CSAT while optimizing cost per resolution.
            </p>
          </div>

          {/* Executive Immersions */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-executive-immersions.png"
                alt="Executive Immersions"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Executive Immersions
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Immediately bridge critical C-level leadership gaps with experienced executives who drive strategic results on an interim basis.
            </p>
          </div>

          {/* Finance & Accounting Services */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-finance-accounting.png"
                alt="Finance & Accounting"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Finance & Accounting Services
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Streamline financial operations with outsourced services (bookkeeping, compliance, reporting) to enhance fiscal accuracy and efficiency.
            </p>
          </div>

          {/* HR Outsourcing */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-hr-outsourcing.png"
                alt="HR Outsourcing"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              HR Outsourcing
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Simplify HR operations and reduce overhead with outsourced solutions for recruitment, compliance, and core administrative needs.
            </p>
          </div>

          {/* IT & Helpdesk Management */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-it-helpdesk.png"
                alt="IT & Helpdesk"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              IT & Helpdesk Management
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Ensure technology stability and security with expert-managed IT and helpdesk solutions that reduce business disruption.
            </p>
          </div>

          {/* Project Management Services */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-project-management.png"
                alt="Project Management"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Project Management Services
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Leverage expert project managers to guarantee initiative execution is on time, within scope, and delivers measurable ROI.
            </p>
          </div>

          {/* Sales Support */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-sales-support.png"
                alt="Sales Support"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Sales Support
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Empower sales teams with expert assistance in lead generation, CRM management, and administrative tasks that directly drive revenue.
            </p>
          </div>

          {/* Specialized Expertise */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/bpo-icon-specialized-expertise.png"
                alt="Specialized Expertise"
                className="flex-shrink-0"
                style={{ width: 64, height: 64, borderRadius: '10px', objectFit: 'cover' }}
              />
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Specialized Expertise
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B' }}>
              Access pre-vetted, niche experts with deep industry experience to tackle unique, high-value challenges and accelerate objectives.
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
              fontSize: '48px',
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
              Determine Optimal Engagement Model
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '140%', color: '#333333' }}>
              Conduct a thorough assessment to pinpoint efficiency gains and structure the most cost-effective BPO or Fractional Talent solution.
            </p>
          </div>

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
              Ensure Seamless Integration
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '140%', color: '#333333' }}>
              We facilitate smooth integration into your existing team and provide ongoing support to ensure project success.
            </p>
          </div>
        </div>

        {/* Roadmap Image */}
        <div className="flex justify-center my-8">
          <ApproachRoadmap />
        </div>

        {/* Bottom - Step 3 */}
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
            Build High-Performing Teams
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '140%', color: '#333333' }}>
            We carefully select and onboard top talent, ensuring they possess the skills and experience to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Scaling Your Team with Confidence Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
            {/* Capability Pills with Figma Connector */}
            <div className="relative flex gap-6">
              {/* Left Connector SVG — blue bullets per pill + gray dots between */}
              <div className="flex-shrink-0" style={{ width: '50px' }}>
                <svg width="50" height="424" viewBox="0 0 50 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="36" r="10" fill="#14358A"/>
                  <circle cx="10" cy="124" r="10" fill="#14358A"/>
                  <circle cx="10" cy="212" r="10" fill="#14358A"/>
                  <circle cx="10" cy="300" r="10" fill="#14358A"/>
                  <circle cx="10" cy="388" r="10" fill="#14358A"/>
                  <circle cx="10" cy="68" r="5" fill="#424856"/>
                  <circle cx="10" cy="80" r="5" fill="#424856"/>
                  <circle cx="10" cy="92" r="5" fill="#424856"/>
                  <circle cx="36" cy="80" r="5" fill="#424856"/>
                  <circle cx="10" cy="156" r="5" fill="#424856"/>
                  <circle cx="10" cy="168" r="5" fill="#424856"/>
                  <circle cx="10" cy="180" r="5" fill="#424856"/>
                  <circle cx="36" cy="168" r="5" fill="#424856"/>
                  <circle cx="10" cy="244" r="5" fill="#424856"/>
                  <circle cx="10" cy="256" r="5" fill="#424856"/>
                  <circle cx="10" cy="268" r="5" fill="#424856"/>
                  <circle cx="36" cy="256" r="5" fill="#424856"/>
                  <circle cx="10" cy="332" r="5" fill="#424856"/>
                  <circle cx="10" cy="344" r="5" fill="#424856"/>
                  <circle cx="10" cy="356" r="5" fill="#424856"/>
                  <circle cx="36" cy="344" r="5" fill="#424856"/>
                </svg>
              </div>

              {/* Pills Column */}
              <div className="flex flex-col gap-4">
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
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    Product Lifecycle Management
                  </span>
                </div>

                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 2.5a2.12 2.12 0 013 3L16 12l-4 1 1-4 6.5-6.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 6.5L17.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M10 12.5C10 12.5 8 14 6.5 17.5C5 21 2 22 2 22s1-3 4.5-4.5C10 14 11.5 12 11.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    Capital Excellence
                  </span>
                </div>

                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4l7.07 17 2.51-7.39L21 11.1 4 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 13l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    Data-Driven Insights
                  </span>
                </div>

                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18 4s-1 0-4 3l-7 7 3 3 7-7c3-3 3-4 3-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                    KPI Optimization
                  </span>
                </div>

                <div className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                  <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
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
                fontSize: '48px',
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
                fontSize: '25px',
                lineHeight: '140%',
                color: '#333333',
                textAlign: 'right',
              }}
            >
              Imagine a team of highly skilled professionals, each a specialist in their respective field, ready to augment your capabilities on-demand. We offer a diverse pool of fractional experts and BPO services, providing you with access to top-tier talent when and where you need it.
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
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '25px', lineHeight: '140%', color: '#333333' }}>
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
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '25px', lineHeight: '140%', color: '#333333' }}>
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
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '30px', color: '#14358A', textDecoration: 'none' }}
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
        style={{ backgroundImage: 'url(/principle-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <p className="mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '30px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            The Principle of Least Change
          </p>
          <h2 className="mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Maximum Impact. Minimal Disruption.
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', lineHeight: '135%', color: '#FFFFFF' }}>
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-20" style={{ background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)' }}>
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <h2 className="mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
            Ready to Access Elite Talent and Optimize Operational Costs?
          </h2>
          <p className="mb-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', lineHeight: '135%', color: '#333333', maxWidth: '1196px', margin: '0 auto 2.5rem auto' }}>
            Let us help you unlock the power of our BPO and Fractional Talent solutions and achieve your business objectives.
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

      <Footer />
    </main>
  );
}
