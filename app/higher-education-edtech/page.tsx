'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurProjectsSection, { DollarIcon, TrendUpIcon, CheckIcon, ScreenIcon } from '@/components/OurProjectsSection';
import type { ProjectCardData } from '@/components/OurProjectsSection';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

const educationProjects: ProjectCardData[] = [
  {
    title: 'McGill University',
    stats: [
      { icon: <DollarIcon />, value: <><AnimatedCounter end={5} suffix="M" />$</>, label: 'in service hours added at no extra cost' },
      { icon: <CheckIcon />, value: <><AnimatedCounter end={30} suffix="%" /></>, label: 'reduction in cost per program hour' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={45} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
  {
    title: 'NSCC',
    stats: [
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={17} suffix="%" /></>, label: 'increase in student enrollment & NPS' },
      { icon: <ScreenIcon />, value: <><AnimatedCounter end={400} suffix="+" /></>, label: 'annual student support hours added' },
      { icon: <TrendUpIcon />, value: <><AnimatedCounter end={24} suffix="x" /></>, label: 'Return on Investment' },
    ],
  },
  {
    title: "Saint Mary's University",
    stats: [
      { icon: <CheckIcon />, value: <><AnimatedCounter end={50} suffix="+" /></>, label: 'employer partnerships established' },
      { icon: <ScreenIcon />, value: <><AnimatedCounter end={100} suffix="+" /></>, label: 'students placed in new internships' },
      { icon: <CheckIcon />, value: <><AnimatedCounter end={20} suffix="%" /></>, label: 'increase in career support satisfaction' },
    ],
  },
];

export default function HigherEducationEdTech() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(140px,16.32vw,235px)] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000' }}>Higher Education &amp; EdTech</p>
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
              letterSpacing: '0%',
            }}
          >
            Transforming the Educational Model
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              maxWidth: 'min(740px, 95%)'
            }}
          >
            Higher education is navigating a fundamental transition in how value is delivered and measured. We provide the strategic guidance and operational frameworks institutions need to modernize their delivery models, improve student outcomes, and secure their mission in a changing landscape.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div 
            className="rounded-full overflow-hidden"
            style={{
              width: 'clamp(240px, 27.64vw, 398px)',
              height: 'clamp(250px, 25.83vw, 372px)',
            }}
          >
            <img
              src="/higher-education-hero.png"
              alt="Higher Education"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

      </div>
      </FadeInSection>

      {/* Decorative Bars - Top Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', top: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
        <div className="absolute" style={{ width: '200px', height: '60px', left: '-10px', top: '60px', opacity: 1, background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Navigating a Sector in Transition Section */}
      <FadeInSection delay={0.1} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(20px,3.61vw,52px)] py-24">
        <h2
          className="font-poppins font-semibold text-[#14358A] text-center mb-12"
          style={{
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '46px',
            letterSpacing: '0%',
            maxWidth: 'min(1087px, 95%)',
            margin: '0 auto 3rem auto',
          }}
        >
          Navigating a Sector in Transition
        </h2>

        <div className="flex flex-col gap-8 text-center">
          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              maxWidth: 'min(1342px, 95%)',
              margin: '0 auto',
            }}
          >
            Universities and colleges have long been pillars of resilience and adaptation. Today, however, they face a convergence of pressures: shifting demographics, new technologies, evolving student expectations, and increasing demands from government and community stakeholders.
          </p>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              maxWidth: 'min(1342px, 95%)',
              margin: '0 auto',
            }}
          >
            Our education work is strengthened by world-class expertise in operations, finance, and technology, combined with a deep understanding of academic culture. We provide university leaders with innovative strategies and practical insights that address core challenges, align governance and staff, and enable bold transformation.
          </p>
        </div>
      </div>
      </FadeInSection>

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: '60px', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <FadeInSection delay={0.2} direction="up">
      <div className="relative w-full bg-white py-24">
        {/* Section Heading */}
        <h2 
          className="text-center mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Our Work
        </h2>

        {/* Description */}
        <p 
          className="text-center mb-16"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.53vw, 22px)',
            lineHeight: '140%',
            color: '#333333',
            maxWidth: 'min(1082px, 95%)',
            margin: '0 auto 4rem auto',
            padding: '0 2rem'
          }}
        >
          Our work supports strategy, operations, & transformation—equipping education leaders with the tools to deliver meaningful change.
        </p>

        {/* Cards Grid */}
        <div className="max-w-[min(1312px,_95%)] mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
            {/* Card 1 - Transformation Strategy & Implementation */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Transformation Strategy & Implementation
                </h3>
              </div>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Serve as a trusted partner for complex change, combining organizational design and change management to ensure successful technology implementation and culture buy-in.
              </p>
            </div>

            {/* Card 2 - Operational Efficiency */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5"/>
                    <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Governance & Operational Excellence
                </h3>
              </div>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Strengthen governance structures and optimize institutional operations to improve decision-making, accountability, and resource efficiency.
              </p>
            </div>

            {/* Card 3 - Digital Government & Service Transformation */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Student Experience & Outcomes
                </h3>
              </div>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and implement strategies that enhance the student experience, improve retention, and drive measurable improvements in learning outcomes.
              </p>
            </div>

            {/* Card 4 - Academic Portfolio & Program Design */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 7l9-4 9 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="5" y="7" width="14" height="14" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 11h2M13 11h2M9 15h2M13 15h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Academic Portfolio & Program Design
                </h3>
              </div>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and launch academic programs that meet student demand, align with market needs, and secure financial sustainability.
              </p>
            </div>

            {/* Card 5 - Governance & Risk */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="1.5" fill="white"/>
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Governance & Risk
                </h3>
              </div>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Strengthen governance structures and improve decision-making processes to manage strategic risks and ensure long-term institutional resilience.
              </p>
            </div>

            {/* Card 6 - Faculty & Staff Engagement */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Faculty & Staff Engagement
                </h3>
              </div>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Advise on talent management and organizational culture to attract, retain, and empower the faculty and staff who drive institutional success.
              </p>
            </div>

            {/* Card 7 - Program Evaluation & Impact Measurement */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 7l9-4 9 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="5" y="7" width="14" height="14" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 11h2M13 11h2M9 15h2M13 15h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  International Strategy
                </h3>
              </div>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Develop and execute international strategies for student recruitment, global partnerships, and cross-border program delivery to expand institutional reach.
              </p>
            </div>

            {/* Card 8 - Research Performance */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="1.5" fill="white"/>
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Research Performance
                </h3>
              </div>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Shape research priorities, strengthen commercialization capabilities, and build the capacity required to deliver world-class, financially viable research.
              </p>
            </div>

            {/* Card 9 - Alumni Relations & Fundraising */}
            <div
              className="bg-white"
              style={{
                width: 'min(412px, 100%)',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',}}
            >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}
                >
                  Alumni Relations & Fundraising
                </h3>
              </div>

              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Develop effective fundraising strategies and build lasting alumni relationships to support strategic priorities and long-term financial health.
              </p>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Our Projects Section */}
      <FadeInSection delay={0.3} direction="up">
      <OurProjectsSection projects={educationProjects} backgroundImage="/project-bg.webp" />
      </FadeInSection>

      {/* Our Projects Description Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#1E1E1E',
              marginBottom: '16px',
            }}
          >
            Our Projects
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '140%',
              color: '#64748B',
              maxWidth: 'min(800px, 95%)',
              margin: '0 auto',
            }}
          >
            We deliver tangible results that enhance institutional effectiveness and student success.
          </p>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <FadeInSection delay={0.4} direction="up">
      <div className="relative w-full py-24 bg-white overflow-hidden">

        <div className="relative max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(40px,12.43vw,179px)]">
          {/* Section Heading */}
          <h2 
            className="text-center mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            The Functional Consulting Advantage
          </h2>

          <div className="max-w-[min(1082px,_90%)] text-center">
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              In academia, strategy often dies in implementation due to cultural resistance. Generalist consultants deliver broad, business-centric recommendations that are frequently perceived by faculty and administration as misaligned with the institution&apos;s mission and academic values. They fail to gain the necessary cultural buy-in for lasting change.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              PMG&apos;s model brings practicality with cultural respect. We deploy functional experts in areas like operational finance, student experience design, and research commercialization. They adapt proven models of excellence to your institution&apos;s unique culture and shared governance structure, ensuring that solutions are not only financially sound and efficient but are also embraced by the staff and faculty who must drive the transformation.
            </p>
          </div>

          <div className="text-center mt-16">
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                color: '#364153',
              }}
            >
              Still Unsure?
            </p>
            <a
              href="/why-functional-consulting"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Discover how we balance operational efficiency with the core academic mission.
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* Partner with PMG CTA Section */}
      <FadeInSection delay={0.5} direction="up">
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
            Partner with PMG to Shape the Future
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
            Let's work together to build more efficient, innovative, and student-centered educational institutions.
          </p>

          <Link href="/contact-us"
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: 'clamp(260px, 27.29vw, 393px)',
              height: 'clamp(48px, 4.51vw, 65px)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
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
      </FadeInSection>

      <Footer />
    </main>
  );
}
