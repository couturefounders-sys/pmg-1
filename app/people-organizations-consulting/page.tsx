"use client";

import Header from '@/components/Header';
import ApproachRoadmap from '@/components/ApproachRoadmap';

export default function PeopleOrganizationsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[142px] pb-24 text-center">
        {/* Subheading */}
        <p
          className="mb-4"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '29px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          People & Organizations Consulting
        </p>

        {/* Main Heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14358A',
            maxWidth: '1224px',
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
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            maxWidth: '1258px',
            margin: '0 auto',
          }}
        >
          We transform people strategy into a competitive asset. We focus on creating exceptional employee experiences and resilient organizations that deliver measurable outcomes: reduced turnover costs and enhanced productivity.
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Chat/Message Bubble icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Change Communication & Stakeholder Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Bar Chart icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Change Measurement & Evaluation
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Layers/Stack icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              HR Analytics & Data-Driven Decision Making
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Server/Stacked Rectangles icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="8" rx="2" stroke="white" strokeWidth="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" stroke="white" strokeWidth="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="18" x2="6.01" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              HR Service Delivery Model
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Monitor/Computer icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              HRIS Implementation & Integration
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* User-Plus icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <line x1="20" y1="8" x2="20" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="23" y1="11" x2="17" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Leadership Development Programs
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Four Squares/Grid icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Organizational Structure & Design
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Edit/Pen-Square icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Performance Management Systems
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Shield icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Resistance Management & Mitigation
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Open Book icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Skills Training & Development
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Users/Group icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Succession Planning
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Clock icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                textAlign: 'left',
              }}
            >
              Workforce Planning & Forecasting
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
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
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="text-center mb-12">
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
            Our Approach
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto',
            }}
          >
            Our approach is a unique blend of deep human resources expertise and cutting-edge organizational psychology. We draw insights from an array of industries and organizations, find the root cause behind key problems and create high-performing, inclusive, and human-centred workplaces.
          </p>
        </div>

        {/* Roadmap Visual with Content Boxes */}
        <div className="relative max-w-[1200px] mx-auto mt-16">
          {/* Top Row - Boxes 1 and 3 */}
          <div className="grid grid-cols-2 gap-16 mb-12">
            {/* Box 1: Uncover Employee Pain Points */}
            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                }}
              >
                Uncover Employee Pain Points
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
                We conduct thorough assessments to understand employee needs, motivations, and challenges.
              </p>
            </div>

            {/* Box 3: Foster a Culture of Continuous Learning */}
            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                }}
              >
                Foster a Culture of Continuous Learning
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
                We develop and implement programs that empower employees to grow and develop their skills.
              </p>
            </div>
          </div>

          {/* Roadmap Timeline Graphic - Using Component */}
          <div className="relative flex items-center justify-center mb-12">
            <ApproachRoadmap />
          </div>

          {/* Bottom Box: Design an Employee Value Proposition */}
          <div className="text-center max-w-[600px] mx-auto">
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '27px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Design an Employee Value Proposition
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
              We help you create a compelling employee value proposition that attracts, engages, and retains top talent.
            </p>
          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
            {/* Vertical Line */}
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 h-full"
                style={{
                  width: '4px',
                  background: '#14358A',
                  borderRadius: '2px',
                }}
              />

              {/* Product Lifecycle Management */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Product Lifecycle Management
                  </span>
                </div>
              </div>

              {/* Capital Excellence */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M20 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 2.5a2.12 2.12 0 013 3L16 12l-4 1 1-4 6.5-6.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 6.5L17.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M10 12.5C10 12.5 8 14 6.5 17.5C5 21 2 22 2 22s1-3 4.5-4.5C10 14 11.5 12 11.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Capital Excellence
                  </span>
                </div>
              </div>

              {/* Data-Driven Insights */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 4l7.07 17 2.51-7.39L21 11.1 4 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 13l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Data-Driven Insights
                  </span>
                </div>
              </div>

              {/* KPI Optimization */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18 4s-1 0-4 3l-7 7 3 3 7-7c3-3 3-4 3-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    KPI Optimization
                  </span>
                </div>
              </div>

              {/* Lean Six Sigma */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
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
              A Multi-Faceted Approach to Success
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
                  fontSize: '25px',
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
                  fontSize: '25px',
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

      {/* CTA Section */}
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
              <img
                src="/PMG_Logo-removebg-preview 11.png"
                alt="PMG Logo"
                className="mb-6 h-12"
              />
            </div>

            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Trade Gothic LT Std, sans-serif',
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  color: '#FFFFFF',
                }}
              >
                What we Do
              </h3>
              <ul className="space-y-3">
                {['Strategy & Operations', 'People & Organizations', 'Customer Experience', 'M&A', 'Branding & Marketing', 'BPO & Fractional Talent', 'Crisis & Transition'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Trade Gothic LT Std, sans-serif',
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  color: '#FFFFFF',
                }}
              >
                Our Content
              </h3>
              <ul className="space-y-3">
                {['Featured Articles', 'Case Studies', 'White Papers', 'Webinars', 'Podcast'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Trade Gothic LT Std, sans-serif',
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  color: '#FFFFFF',
                }}
              >
                Our Models
              </h3>
              <ul className="space-y-3">
                {['Out-of-the-Box', 'Bespoke Solutions', 'Active Management', 'Equity Engagements'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Trade Gothic LT Std, sans-serif',
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  color: '#FFFFFF',
                }}
              >
                Legal
              </h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: '#FFFFFF',
              }}
            >
              © 2024 PMG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
