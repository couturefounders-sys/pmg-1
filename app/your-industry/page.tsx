'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import OurProjectsSection, { DollarIcon, TrendUpIcon, ScreenIcon, CheckIcon } from '@/components/OurProjectsSection';

export default function YourIndustry() {
  const iconContainer = (svg: React.ReactNode) => (
    <div style={{ width: 64, height: 64, borderRadius: 10, background: '#14358A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {svg}
    </div>
  );

  const crosshairIcon = iconContainer(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  const checkboxIcon = iconContainer(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5"/>
      <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const heartIcon = iconContainer(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const buildingIcon = iconContainer(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 7l9-4 9 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="5" y="7" width="14" height="14" stroke="white" strokeWidth="1.5"/>
      <path d="M9 11h2M13 11h2M9 15h2M13 15h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  const scopeIcon = iconContainer(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="white"/>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  const barChartIcon = iconContainer(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const workCards = [
    {
      title: 'Due Diligence & Deal Sourcing',
      description: 'We provide commercial, operational, and technical due diligence to help you assess opportunities with precision, ensuring your investment thesis is built on a solid foundation.',
      icon: crosshairIcon,
    },
    {
      title: 'Portfolio Company Value Creation',
      description: 'Our hands-on operators work with portfolio company leadership to implement operational efficiencies, accelerate growth, and maximize EBITDA, from 100-day plans to long-term transformations.',
      icon: checkboxIcon,
    },
    {
      title: 'Interim & Fractional Leadership',
      description: 'We fill critical leadership gaps within your portfolio companies with our own seasoned executives, providing stability and driving performance during transitions or high-growth phases.',
      icon: heartIcon,
    },
    {
      title: 'Exit Strategy & Preparation',
      description: 'We help you prepare portfolio companies for a successful exit, whether through IPO, strategic sale, or secondary buyout, ensuring you maximize returns.',
      icon: buildingIcon,
    },
    {
      title: 'Fund Strategy & Operations',
      description: 'We advise investment firms on fund strategy, operational efficiency, and LP reporting to enhance performance and strengthen investor relations.',
      icon: scopeIcon,
    },
    {
      title: 'Risk Management & Turnaround',
      description: 'For underperforming assets, we provide deep diagnostic and turnaround expertise, stabilizing operations and developing clear pathways back to profitability.',
      icon: barChartIcon,
    },
    {
      title: 'Commercialization Strategy',
      description: 'We develop and execute go-to-market strategies for portfolio companies, aligning product, sales, and marketing to accelerate revenue growth and capture market share.',
      icon: buildingIcon,
    },
    {
      title: 'Post-Acquisition Integrations',
      description: 'Our experts manage the post-acquisition process, seamlessly integrating operations, technology, and culture to realize synergies and ensure the deal thesis is achieved.',
      icon: scopeIcon,
    },
    {
      title: 'Multi-Industry Portfolio Design',
      description: 'Leveraging our Sector Convergence model, we help firms build resilient, diversified portfolios by identifying high-potential assets in non-obvious, adjacent sectors.',
      icon: barChartIcon,
    },
  ];

  const projects = [
    {
      name: 'Prescient Capital',
      image: '/project-prescient.png',
      stats: '27% IRR'
    },
    {
      name: 'Exalero',
      image: '/project-exalero.png',
      stats: 'Arteria Finance'
    },
    {
      name: 'Arteria Finance',
      image: '/project-arteria.png',
      stats: ''
    }
  ];

  const yourIndustryProjects = [
    {
      title: 'Prestige1 Capital',
      stats: [
        { icon: <DollarIcon />, value: '$10M', label: 'in new yearly profit generated' },
        { icon: <TrendUpIcon />, value: '3x', label: 'higher ROI than typical investments' },
        { icon: <TrendUpIcon />, value: '43x', label: 'Return on Investment' },
      ],
    },
    {
      title: 'Avolin',
      stats: [
        { icon: <ScreenIcon />, value: '22%', label: 'reduction in customer churn' },
        { icon: <TrendUpIcon />, value: '14%', label: 'increase in post-acquisition margin' },
        { icon: <TrendUpIcon />, value: '20x', label: 'Return on Investment' },
      ],
    },
    {
      title: 'Artemis Capital',
      stats: [
        { icon: <DollarIcon />, value: '12%', label: 'reduction in operating expenses' },
        { icon: <ScreenIcon />, value: '25%', label: 'reduction in low-value personnel spend' },
        { icon: <TrendUpIcon />, value: '22x', label: 'Return on Investment' },
      ],
    },
  ];

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(120px,13.89vw,200px)] pb-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <p className="font-dm-sans font-bold mb-2" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000' }}>PE, VC, and Capital Management</p>
          <h1
            className="font-dm-sans font-bold text-[#14358A]"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
            }}
          >
            Driving Alpha Through Operational Excellence
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              maxWidth: 'min(740px, 95%)'
            }}
          >
            In a competitive capital landscape, sustainable returns require more than just a strong thesis—they require superior execution. We act as the operational bridge for portfolio companies, helping investors unlock hidden value and accelerate the path to a high-multiple exit.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 z-10">
          <img
            src="/pe-vc-hero.png"
            alt="Operational Excellence"
            style={{
              width: '461px',
              height: 'clamp(280px, 31.04vw, 447px)',
              objectFit: 'cover'
            }}
          />
        </div>

      </div>

      {/* Decorative Bars - Top Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', top: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
        <div className="absolute" style={{ width: '200px', height: '60px', left: '-10px', top: '60px', opacity: 1, background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Your Partner in Value Creation Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] mb-16"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal' }}
          >
            Your Partner in Value Creation
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '100%',
              maxWidth: 'min(1342px, 95%)',
              textAlign: 'center'
            }}
          >
            We partner with private equity firms, venture capitalists, and their portfolio companies to accelerate growth, optimize operations, and maximize returns. Our consultants are not just advisors; they are seasoned operators who embed themselves to drive tangible, measurable results.
            <br /><br />
            Our work in PE & VC is strengthened by our deep functional expertise in M&A, operations, finance, and technology, allowing us to provide end-to-end support throughout the investment lifecycle.
          </p>
        </div>
      </div>

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: '60px', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', maxWidth: 'min(1082px, 95%)', textAlign: 'center' }}
            >
              We equip investment professionals and portfolio company leaders with the tools to create lasting value.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
            {workCards.map((card, index) => (
              <div
                key={index}
                className="bg-white"
                style={{
                  width: 'min(412px, 100%)',
                  padding: '23px 25px',
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {card.icon}
                  <h3
                    className="font-dm-sans font-bold text-[#14358A] mb-0"
                    style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-3%', margin: 0 }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className="font-dm-sans font-normal text-[#68718B]"
                  style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%' }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurProjectsSection projects={yourIndustryProjects} backgroundImage="/projects-bg.webp" />

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
            We deliver tangible results that accelerate growth, optimize operations, and create lasting value across every industry we serve.
          </p>
        </div>
      </div>

      {/* The Functional Consulting Advantage */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center">
          <h2
            className="text-center mb-10"
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
              You invest in potential; we unlock its maximum value. Whether you are a PE firm seeking tangible EBITDA growth, a VC firm demanding hyper-scale, or a Fund Manager optimizing operations, generalist advice often misses the mark. It provides high-level strategy that rarely translates into the deep operational precision needed to execute a 100-day plan or accelerate a high-growth scale-up. The challenge is always execution.
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
              PMG&apos;s model is built for the entire capital lifecycle. We replace costly, theoretical counsel with execution-focused operators specializing in discrete value creation levers: commercial due diligence, rapid growth GTM strategy, post-merger integration, and fund operational efficiency. Our consultants embed, execute, and are accountable for measurable improvements, be it EBITDA, burn rate, or LP reporting, ensuring we deliver alpha that matters to your investors.
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
              Find out how we turn strategy into measurable operational scale
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>


      {/* Maximize Your Portfolio's Potential Section */}

      <div 
        className="text-center flex flex-col items-center"
        style={{
          background: '#F0F7FC',
          padding: '80px 40px'
        }}
      >
        <h2
          className="font-dm-sans font-bold text-[#14358A] mb-6"
          style={{ 
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em'
          }}
        >
          Maximize Your Portfolio&apos;s Potential
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: 'clamp(15px, 1.375vw, 19.8px)',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: 'min(1196px, 95%)'
          }}
        >
          Let&apos;s discuss how our execution-focused approach can drive superior returns for your fund.
        </p>
        <Link
          href="/contact-us"
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: 'clamp(260px, 27.29vw, 393px)',
            height: 'clamp(48px, 4.51vw, 65px)',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: 'clamp(15px, 1.39vw, 22px)',
            lineHeight: '140%',
            letterSpacing: '0%',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Request a Consultation
        </Link>
      </div>

      <Footer />
    </main >
  );
}
