"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';

export default function CustomerExperienceConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[142px] pb-24 text-center">
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
          Customer Experience Consulting
        </p>

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
          Building Industry-Defining Customer Experiences
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
            maxWidth: '1258px',
            margin: '0 auto',
          }}
        >
          We treat Customer Experience as a direct driver of revenue, retention, and cost-efficiency. We engineer seamless, personalized interactions that build lasting loyalty and drive sustainable growth.
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
          {/* Agent Training & Continuous Development */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Open Book icon - training */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Agent Training & Continuous Development
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Implement continuous agent training and tools to guarantee delivery of exceptional service and drive operational efficiency.
            </p>
          </div>

          {/* AI & Service Automation */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Monitor/Computer icon - automation/tech */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              AI & Service Automation
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Drive immediate efficiency and reduce support costs using cutting-edge AI and service automation solutions.
            </p>
          </div>

          {/* Customer Advocacy & Referral Programs */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Users/Group icon - advocacy */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Advocacy & Referral Programs
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Architect high-ROI customer advocacy and referral programs that guarantee organic growth and reduce acquisition costs.
            </p>
          </div>

          {/* Customer Experience Design */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Edit/Pen-Square icon - design */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Experience Design
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Craft exceptional, data-informed customer experiences using innovative design strategies that maximize engagement and loyalty.
            </p>
          </div>

          {/* Customer Journey Mapping */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Expand/Diverge icon - journey mapping */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Journey Mapping
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Precisely map the customer journey to eliminate friction and boost long-term retention and loyalty.
            </p>
          </div>

          {/* Customer Lifecycle Management */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Refresh/Turnaround Arrows icon - lifecycle */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23 4v6h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 20v-6h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Lifecycle Management
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Strategically manage the customer lifecycle, from acquisition to retention, to maximize customer lifetime value (CLV).
            </p>
          </div>

          {/* Customer Persona Development */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Single User icon - persona */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Persona Development
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Build detailed, validated customer profiles to personalize interactions and enhance marketing ROI and effectiveness.
            </p>
          </div>

          {/* Customer Retention Strategies */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Shield icon - retention/protection */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Retention Strategies
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Implement proven retention strategies designed to significantly increase loyalty, repeat business, and subscription rates.
            </p>
          </div>

          {/* Customer Self-Service Solutions */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Question Mark Circle icon - self-service */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Self-Service Solutions
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Empower customers with self-service solutions that reduce support volume and improve first-contact resolution rates.
            </p>
          </div>

          {/* Customer Support Excellence Programs */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Chat/Message Bubble icon - support */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Customer Support Excellence Programs
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Establish best-in-class support systems that maximize issue resolution speed and enhance customer satisfaction (CSAT).
            </p>
          </div>

          {/* Data Analytics & Reporting */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Bar Chart icon - analytics */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Data Analytics & Reporting
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Provide actionable data-driven insights and reporting from customer behavior trends to inform high-stakes strategic decisions.
            </p>
          </div>

          {/* Digital Engagement & Experience */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* 3D Box/Cube icon - digital experience */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Digital Engagement & Experience
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Drive deep customer engagement via innovative digital strategies, including UX design and mobile optimization.
            </p>
          </div>

          {/* Omnichannel Communication & Integration */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Layers/Stack icon - omnichannel */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Omnichannel Communication & Integration
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Guarantee a seamless, consistent customer experience across all physical and digital communication channels.
            </p>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
              {/* Clock icon - predictive/future */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'left' }}>
              Predictive Analytics
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', textAlign: 'left' }}>
              Anticipate customer needs and preferences using predictive analytics to secure a competitive edge and drive proactive service.
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
            Our approach is a unique blend of deep customer experience expertise and human-centred design principles. We draw insights from a vast array of successful customer experiences across industries, identifying best practices and innovative solutions that deliver exceptional results.
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto mt-16">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-16 mb-12">
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
                Measure and Optimize Performance
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
                We track key metrics, such as customer satisfaction, loyalty, and Net Promoter Score (NPS), to measure the impact of our interventions and continually improve the customer experience.
              </p>
            </div>
          </div>

          {/* Roadmap Image */}
          <div className="relative flex items-center justify-center mb-12">
            <ApproachRoadmap />
          </div>

          {/* Bottom Box */}
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
              Design Customer-Centric Solutions
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
              We develop innovative solutions that address customer needs and create seamless, enjoyable experiences.
            </p>
          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
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
                {[
                  {
                    label: 'Product Lifecycle Management',
                    svg: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                        <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                        <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                        <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Capital Excellence',
                    svg: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 2.5a2.12 2.12 0 013 3L16 12l-4 1 1-4 6.5-6.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 6.5L17.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M10 12.5C10 12.5 8 14 6.5 17.5C5 21 2 22 2 22s1-3 4.5-4.5C10 14 11.5 12 11.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ),
                  },
                  {
                    label: 'Data-Driven Insights',
                    svg: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4l7.07 17 2.51-7.39L21 11.1 4 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 13l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ),
                  },
                  {
                    label: 'KPI Optimization',
                    svg: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18 4s-1 0-4 3l-7 7 3 3 7-7c3-3 3-4 3-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    ),
                  },
                  {
                    label: 'Lean Six Sigma',
                    svg: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ),
                  },
                ].map((pill, idx) => (
                  <div key={idx} className="flex items-center rounded-full overflow-hidden" style={{ background: '#14358A', height: '72px' }}>
                    <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
                      <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                        <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#14358A' }}>
                          {pill.svg}
                        </div>
                      </div>
                    </div>
                    <span className="pr-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF' }}>
                      {pill.label}
                    </span>
                  </div>
                ))}
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
              Creating Exceptional Customer Journeys
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
              Our team isn't confined to a single industry; we've assembled a diverse group of experts with a proven track record of success in creating exceptional customer experiences across sectors. This unique blend of experience and expertise allows us to think beyond traditional channels.
            </p>

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
                Develop innovative solutions by leveraging best practices from diverse industries to craft unique and engaging experiences that delight your customers.
              </p>
            </div>

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
                Deliver unparalleled customer-centricity from the collective wisdom of leaders who have successfully built loyal customer bases and driven brand advocacy.
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
        className="relative w-full py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/principle-bg.png)',
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
        style={{ background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)' }}
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
            Ready to Convert Customer Loyalty into Measurable Growth?
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
            Let us help you develop and execute a winning customer experience strategy that drives business growth and creates lasting customer loyalty.
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
