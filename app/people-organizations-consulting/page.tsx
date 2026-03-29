"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';
import ScrollStack from '@/components/ScrollStack';

const CAPABILITY_ITEMS = [
  'Sector Convergence',
  'Business Value Units',
  'Input-Output Method',
  'Organizational Design',
  'Talent Management',
  'Change Management',
  'Leadership Development',
  'Employee Engagement',
  'Performance Metrics',
  'HR Transformation',
  'Workforce Planning',
  'Succession Planning',
  'Competency Frameworks',
  'Culture Assessment',
  'DE&I Initiatives',
  'Skills Gap Analysis',
  'Employer Branding',
  'Total Rewards Strategy',
  'HRIS Implementation',
  'People Analytics',
];

const STEP_POSITIONS = {
  step1: { left: 20, top: 10 },
  step2: { left: 70, top: 10 },
  step3: { left: 47, top: 92 },
};

export default function PeopleOrganizationsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(100px,9.86vw,142px)] pb-24 text-center">
        {/* Subheading */}
        <p
          className="mb-4 font-dm-sans font-bold"
          style={{
            fontSize: 'clamp(13px, 1.07vw, 15.4px)',
            lineHeight: '105%',
            color: '#000000',
          }}
        >
          People &amp; Organizations Consulting
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
          Engineering Human Capital Performance Excellence
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
          We transform people strategy into a competitive asset. We focus on creating exceptional employee experiences and resilient organizations that deliver measurable outcomes: reduced turnover costs and enhanced productivity.
        </p>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-16">
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

        {/* Cards Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Change Communication & Stakeholder Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Chat/Message Bubble icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              textAlign: 'left',
              }}
              >
              Change Communication & Stakeholder Management
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Secure change adoption and align all stakeholders to mitigate program delay risks and accelerate ROI.
            </p>
          </div>

          {/* Change Measurement & Evaluation */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Bar Chart icon */}
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
              textAlign: 'left',
              }}
              >
              Change Measurement & Evaluation
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Assess the success of change initiatives with expert evaluation methods that guarantee sustainable improvements and quantifiable impact.
            </p>
          </div>

          {/* HR Analytics & Data-Driven Decision Making */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Layers/Stack icon */}
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
              textAlign: 'left',
              }}
              >
              HR Analytics & Data-Driven Decision Making
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Drive smarter, risk-mitigated HR decisions using advanced analytics and actionable workforce trend insights.
            </p>
          </div>

          {/* HR Service Delivery Model */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Server/Stacked Rectangles icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="8" rx="2" stroke="white" strokeWidth="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" stroke="white" strokeWidth="2"/>
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
              textAlign: 'left',
              }}
              >
              HR Service Delivery Model
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Redefine the HR service delivery model to enhance administrative efficiency and optimize organizational alignment.
            </p>
          </div>

          {/* HRIS Implementation & Integration */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Monitor/Computer icon */}
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
              textAlign: 'left',
              }}
              >
              HRIS Implementation & Integration
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Ensure seamless HR technology adoption and integration designed to streamline processes and enhance data integrity.
            </p>
          </div>

          {/* Leadership Development Programs */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* User-Plus icon */}
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'left',
              }}
              >
              Leadership Development Programs
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Build a resilient leadership pipeline with tailored programs designed for strategic success and empower high-potential employees.
            </p>
          </div>

          {/* Organizational Structure & Design */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Four Squares/Grid icon */}
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
              textAlign: 'left',
              }}
              >
              Organizational Structure & Design
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Design an agile organizational structure that reduces silos, maximizes competitive performance and aligns with strategic goals.
            </p>
          </div>

          {/* Performance Management Systems */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Edit/Pen-Square icon */}
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'left',
              }}
              >
              Performance Management Systems
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Optimize employee performance and accountability with systems that provide clear goals, incentives, and continuous data-driven feedback.
            </p>
          </div>

          {/* Resistance Management & Mitigation */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Shield icon */}
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
              textAlign: 'left',
              }}
              >
              Resistance Management & Mitigation
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Overcome resistance to strategic change with tailored strategies that build trust, ease transition adoption, and minimize disruption costs.
            </p>
          </div>

          {/* Skills Training & Development */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Open Book icon */}
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'left',
              }}
              >
              Skills Training & Development
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Equip your workforce with critical future skills through tailored training programs designed to close competency gaps.
            </p>
          </div>

          {/* Succession Planning */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Users/Group icon */}
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
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'left',
              }}
              >
              Succession Planning
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Secure the leadership pipeline and mitigate key-person risk with expert-backed succession planning and future-focused talent development.
            </p>
          </div>

          {/* Workforce Planning & Forecasting */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                {/* Clock icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              textAlign: 'left',
              }}
              >
              Workforce Planning & Forecasting
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
                textAlign: 'left',
              }}
            >
              Prepare for the future with expert workforce planning and forecasting that strategically aligns talent supply with projected business goals.
            </p>
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
            Our approach is a unique blend of deep human resources expertise and cutting-edge organizational psychology. We draw insights from an array of industries and organizations, find the root cause behind key problems and create high-performing, inclusive, and human-centred workplaces.
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
                Uncover Employee Pain Points
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
                We conduct thorough assessments to understand<br />
                employee needs, motivations, and challenges.
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
                Design an Employee Value Proposition
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
                We help you create a compelling employee value<br />
                proposition that attracts, engages, and retains<br />
                top talent.
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
                Foster a Culture of Continuous Learning
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
                We develop and implement programs that empower<br />
                employees to grow and develop their skills.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Scroll Stack */}
          <div className="lg:w-[45%]">
            <ScrollStack items={CAPABILITY_ITEMS} />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[715px]">
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
              Our team of seasoned HR and organizational development experts thinks beyond traditional HR practices. We see people as the heart of every successful organization and focus on creating inclusive, engaging, and industry-leading work teams.
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
                Develop innovative solutions by leveraging best practices from diverse industries to attract, develop, and retain top talent.
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
                Deliver unparalleled organizational effectiveness from the collective wisdom of leaders who have built high-performing cultures.
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

      {/* CTA Section */}
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
            Ready to Convert Talent Strategy into Measurable ROI?
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
