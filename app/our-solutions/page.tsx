'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurSolutions() {
  const allImpactCards = [
    {
      metric: 'Strategic Clarity',
      metricSmall: true,
      subtitle: null,
      desc: 'A clear, validated strategic direction that aligns your team and eliminates costly indecision.',
      tag: 'Strategy',
      tagColor: '#DBEAFE',
      value: 0,
    },
    {
      metric: '-30%',
      metricSmall: false,
      subtitle: 'Cost Per Program Hour',
      desc: 'Significant reduction in per-program delivery costs through optimized processes and scheduling.',
      tag: 'Cost/Efficiency',
      tagColor: '#F3E8FF',
      value: 0,
    },
    {
      metric: '+$4.5M',
      metricSmall: false,
      subtitle: 'Turnover Cost Avoidance',
      desc: 'Reduction in recruitment and hiring costs from 60% lower turnover.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 4500000,
    },
    {
      metric: '+$34.3M',
      metricSmall: false,
      subtitle: 'Revenue Retained',
      desc: 'Annual Recurring Revenue preserved by increasing retention to 88%.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 34300000,
    },
    {
      metric: '+$1.5M',
      metricSmall: false,
      subtitle: 'New Product Revenue',
      desc: 'Revenue generated from successfully launching a new product line through our GTM strategy.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 1500000,
    },
    {
      metric: '-40%',
      metricSmall: false,
      subtitle: 'New Employee Time-to-Value',
      desc: 'Faster ramp-up times for new hires through improved onboarding systems and training programs.',
      tag: 'Cost/Efficiency',
      tagColor: '#F3E8FF',
      value: 0,
    },
    {
      metric: '-$4M',
      metricSmall: false,
      subtitle: 'Labor & Infrastructure Savings',
      desc: 'Global support headcount reduction through consolidation.',
      tag: 'Cost/Efficiency',
      tagColor: '#F3E8FF',
      value: 4000000,
    },
    {
      metric: 'Talent Pipeline',
      metricSmall: true,
      subtitle: null,
      desc: 'Projected value of increased graduate employability and provincial retention.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 0,
    },
    {
      metric: 'Competitive Positioning',
      metricSmall: true,
      subtitle: null,
      desc: 'Data-driven insights enabling institutional differentiation.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 0,
    },
    {
      metric: '+20%',
      metricSmall: false,
      subtitle: 'Student Satisfaction',
      desc: 'Projected impact of improved student experience on recruitment/retention.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 0,
    },
    {
      metric: 'Experiential Learning Capital',
      metricSmall: true,
      subtitle: null,
      desc: '100+ student internships translating to higher earning potential.',
      tag: 'Revenue/Growth',
      tagColor: '#DBEAFE',
      value: 0,
    },
  ];

  const [displayedCards, setDisplayedCards] = useState(allImpactCards.slice(0, 6));

  const totalImpact = displayedCards.reduce((sum, card) => sum + card.value, 0);
  const totalInMillions = (totalImpact / 1000000).toFixed(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...allImpactCards].sort(() => Math.random() - 0.5);
      setDisplayedCards(shuffled.slice(0, 6));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: '/icon-bespoke.png',
      title: 'Bespoke Solutions',
      subtitle: 'For Complex, High-Stakes Challenges',
      description: 'Fully customized strategies and hands-on implementation designed for your most complex, high-stakes organizational and operational challenges.',
    },
    {
      icon: '/icon-operations.png',
      title: 'Out-of-the-Box Solutions',
      subtitle: 'For Common Problems & Rapid Results',
      description: 'Accelerated, ready-to-deploy frameworks and toolkits designed to rapidly address common business inefficiencies and operational gaps.',
    },
    {
      icon: '/icon-equity.png',
      title: 'Equity Consulting',
      subtitle: 'For Scale-Ups & Turnarounds',
      description: 'A shared-risk partnership where we invest our operational expertise in exchange for equity, ensuring our success is directly tied to your valuation and long-term growth.',
    },
    {
      icon: '/icon-active.png',
      title: 'Active Management',
      subtitle: 'For Hands-On Execution & Leadership',
      description: 'Placements of executive operators directly into key management roles to drive immediate, sustained success and build internal capability from within.',
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full pt-24 pb-0 px-4">
        <div className="max-w-[min(1440px,_95%)] mx-auto">
          <div className="flex flex-col items-center justify-center text-center pt-12 pb-8">
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '105%',
                color: '#000000',
                marginBottom: 'clamp(8px, 0.83vw, 12px)',
              }}
            >
              Customized Excellence
            </p>

            {/* Main Heading */}
            <h1
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                color: '#14358A',
                marginBottom: 'clamp(14px, 1.67vw, 24px)',
              }}
            >
              Solutions for Every Business Challenge
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
                maxWidth: 'min(1258px, 90%)',
                padding: '0 1rem',
              }}
            >
              Is your business facing challenges that require expert insight and a clear path forward? PMG offers a comprehensive suite of solutions designed to meet your unique needs, from strategic hurdles to leadership gaps.
            </p>
          </div>
        </div>
      </div>

      {/* Our Engagement Models Section */}
      <div className="w-full py-16 px-4 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto">
          {/* Section Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: 'clamp(10px, 1.11vw, 16px)',
            }}
          >
            Our Engagement Models
          </h2>

          {/* Section Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1201px, 90%)',
              margin: '0 auto clamp(24px, 2.75vw, 39.6px) auto',
            }}
          >
            One size never fits all. That&apos;s why we offer distinct ways to partner with us, each designed to deliver maximum value based on your specific needs.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {cards.map((card) => (
              <div
                key={card.title}
                className="depth-card flex flex-col"
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: 'clamp(16px, 1.53vw, 22px)',
                  minHeight: 'clamp(300px, 27.15vw, 391px)',
                }}
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={card.icon}
                    alt={card.title}
                    style={{
                      width: 'clamp(48px, 4.44vw, 64px)',
                      height: 'clamp(48px, 4.44vw, 64px)',
                      borderRadius: '10px',
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '105%',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    color: '#68718B',
                    marginBottom: 'clamp(6px, 0.56vw, 8px)',
                  }}
                >
                  {card.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    color: '#68718B',
                    marginBottom: 'auto',
                  }}
                >
                  {card.description}
                </p>

                {/* CTA Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(15px, 1.46vw, 23px)',
                    lineHeight: '30px',
                    color: '#14358A',
                    marginTop: 'clamp(14px, 1.67vw, 24px)',
                  }}
                >
                  {card.title}
                  <span style={{ fontSize: 'clamp(15px, 1.46vw, 23px)' }}>&rsaquo;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Not Sure Where to Start Section */}
      <div
        className="relative z-10 w-full overflow-hidden"
        style={{
          backgroundImage: 'url(/bg-not-sure.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="mx-auto text-center" style={{ padding: 'clamp(48px, 5.56vw, 80px) clamp(16px, 1.53vw, 22px)' }}>
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#FFFFFF',
              marginBottom: 'clamp(20px, 2.22vw, 32px)',
            }}
          >
            Not Sure Where to Start?
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#FFFFFF',
              maxWidth: 'min(1196px, 90%)',
              margin: '0 auto clamp(24px, 2.75vw, 39.6px) auto',
            }}
          >
            Get a personalized recommendation in 3 minutes. Our AI-powered advisor analyzes your specific challenges and goals to match you with the optimal PMG solution
          </p>

          {/* CTA Button */}
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: 'min(384px, 90%)',
              height: 'clamp(52px, 4.51vw, 65px)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get personalized Recommendation
          </button>
        </div>
      </div>

      {/* The Impact We Deliver Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-16">
          {/* Heading */}
          <h2
            className="mb-4 text-center"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            The Impact We Deliver
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1201px, 90%)',
              margin: '0 auto clamp(24px, 2.75vw, 39.6px) auto',
            }}
          >
            Proven results across industries, driven by our proprietary approach to solving complex problems.
          </p>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1320px] mx-auto">
            {displayedCards.map((card, idx) => (
              <div
                key={idx}
                className="depth-card"
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: 'clamp(16px, 1.53vw, 22px) clamp(18px, 1.94vw, 28px)',
                  minHeight: 'clamp(200px, 17.57vw, 253px)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {card.metricSmall ? (
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.78vw, 44px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(8px, 0.83vw, 12px)' }}>
                    {card.metric}
                  </p>
                ) : (
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '4px' }}>
                    {card.metric}
                  </p>
                )}
                {card.subtitle && (
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(6px, 0.56vw, 8px)' }}>
                    {card.subtitle}
                  </p>
                )}
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                  {card.desc}
                </p>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(8px, 0.69vw, 12px)', lineHeight: '26px', color: card.tagColor === '#F3E8FF' ? '#7C3AED' : '#1D4ED8', background: card.tagColor, borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: 'clamp(8px, 0.83vw, 12px)' }}>
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Impact Summary Section */}
      <div className="relative z-10 py-16" style={{ background: '#EBF7FF' }}>
        <div className="mx-auto text-center px-6">
          {/* Label */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#000000',
              marginBottom: 'clamp(6px, 0.56vw, 8px)',
            }}
          >
            Sample impact from displayed metrics:
          </p>

          {/* Big Number */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: 'clamp(6px, 0.56vw, 8px)',
            }}
          >
            {totalImpact > 0 ? `$${totalInMillions}M+` : 'Measurable Impact'}
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              textAlign: 'center',
              color: '#333333',
              marginBottom: 'clamp(20px, 2.22vw, 32px)',
            }}
          >
            In combined value delivered to clients
          </p>

          {/* CTA Button */}
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              padding: 'clamp(12px, 1.11vw, 16px) clamp(24px, 2.78vw, 40px)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Flexible Pricing Options Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-16">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: 'clamp(10px, 1.11vw, 16px)',
            }}
          >
            Flexible Pricing Options
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1201px, 90%)',
              margin: '0 auto clamp(24px, 2.75vw, 39.6px) auto',
            }}
          >
            Your investment should be clear, fair, and deliver tangible value. Our pricing models are designed to be flexible, adapting to the solution you need and the scale of your business.
          </p>

          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
            {/* Card 1 - Project-Based Pricing */}
            <div
              className="relative flex items-stretch"
              style={{ width: 'min(540px, 90%)' }}
            >
              {/* Blue Tab */}
              <div
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '-4px',
                  width: 'clamp(110px, 10vw, 144px)',
                  height: 'clamp(120px, 10.63vw, 153px)',
                  background: '#14358A',
                  borderRadius: '13px 0 0 13px',
                  clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: 'clamp(12px, 1.39vw, 20px)',
                  zIndex: 1,
                }}
              >
                <img src="/icon-palette.png" alt="Project-Based Pricing" style={{ width: 'clamp(48px, 4.44vw, 64px)', height: 'clamp(48px, 4.44vw, 64px)' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: 'clamp(16px, 1.53vw, 22px) clamp(16px, 1.53vw, 22px) clamp(16px, 1.53vw, 22px) clamp(100px, 9.72vw, 140px)',
                  width: '100%',
                  minHeight: 'clamp(120px, 10.63vw, 153px)',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                  Project-Based Pricing
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(10px, 0.83vw, 14px)', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                  For Specific Goals & Defined Scope.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#5F5F5F' }}>
                  Ideal for short-term, defined goals with clear deliverables. This fixed-cost model ensures complete budget predictability and scope control.
                </p>
              </div>
            </div>

            {/* Card 2 - Retainer & Ongoing Support */}
            <div
              className="relative flex items-stretch"
              style={{ width: 'min(540px, 90%)' }}
            >
              {/* Blue Tab */}
              <div
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '-4px',
                  width: 'clamp(110px, 10vw, 144px)',
                  height: 'clamp(120px, 10.63vw, 153px)',
                  background: '#14358A',
                  borderRadius: '13px 0 0 13px',
                  clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: 'clamp(12px, 1.39vw, 20px)',
                  zIndex: 1,
                }}
              >
                <img src="/icon-users-four.png" alt="Retainer & Ongoing Support" style={{ width: 'clamp(48px, 4.44vw, 64px)', height: 'clamp(48px, 4.44vw, 64px)' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: 'clamp(16px, 1.53vw, 22px) clamp(16px, 1.53vw, 22px) clamp(16px, 1.53vw, 22px) clamp(100px, 9.72vw, 140px)',
                  width: '100%',
                  minHeight: 'clamp(120px, 10.63vw, 153px)',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                  Retainer & Ongoing Support
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(10px, 0.83vw, 14px)', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                  Continuous Expertise at Your Fingertips.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#5F5F5F' }}>
                  For businesses requiring consistent, proactive access to strategic advice and specialized fractional expertise, building a deeper partnership for sustained long-term growth.
                </p>
              </div>
            </div>

            {/* Card 3 - Custom & Hybrid Agreements */}
            <div
              className="relative flex items-stretch"
              style={{ width: 'min(540px, 90%)' }}
            >
              {/* Blue Tab */}
              <div
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '-4px',
                  width: 'clamp(120px, 10.97vw, 158px)',
                  height: 'clamp(140px, 12.29vw, 177px)',
                  background: '#14358A',
                  borderRadius: '13px 0 0 13px',
                  clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: 'clamp(12px, 1.39vw, 20px)',
                  zIndex: 1,
                }}
              >
                <img src="/icon-handshake.png" alt="Custom & Hybrid Agreements" style={{ width: 'clamp(48px, 4.44vw, 64px)', height: 'clamp(48px, 4.44vw, 64px)' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: 'clamp(16px, 1.53vw, 22px) clamp(16px, 1.53vw, 22px) clamp(16px, 1.53vw, 22px) clamp(105px, 10.42vw, 150px)',
                  width: '100%',
                  minHeight: 'clamp(140px, 12.29vw, 177px)',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                  Custom & Hybrid Agreements
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(10px, 0.83vw, 14px)', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                  Solutions Structured Just For You.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#5F5F5F' }}>
                  When complex challenges or multi-phase roadmaps require a non-standard approach, we design custom or hybrid terms that perfectly align investment structure with your strategic goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Accountability Framework Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-16">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: 'clamp(10px, 1.11vw, 16px)',
            }}
          >
            Our Accountability Framework
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1201px, 90%)',
              margin: '0 auto clamp(36px, 4.44vw, 64px) auto',
            }}
          >
            We believe in total alignment. Our success is measured by yours. This isn&apos;t just a promise; it&apos;s built into our process.
          </p>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Framework Illustration */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/left_side_our_accountability.png" alt="" style={{ width: 'clamp(400px, 50vw, 720px)', height: 'auto', marginLeft: 'clamp(-100px, -6.94vw, -40px)', marginTop: 'clamp(12px, 1.39vw, 20px)' }} />

            {/* Right Side - Average Heart ROI */}
            <div className="flex flex-col items-center gap-6">
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                  lineHeight: '120%',
                  color: '#14358A',
                  marginBottom: 'clamp(14px, 1.67vw, 24px)',
                  marginTop: '0',
                }}
              >
                Average Client ROI
              </h3>
              {/* ROI Circle */}
              <div
                style={{
                  width: 'clamp(220px, 20.83vw, 300px)',
                  height: 'clamp(220px, 20.83vw, 300px)',
                  borderRadius: '50%',
                  border: '12px solid #14358A',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(56px, 6.67vw, 104px)',
                    lineHeight: '100%',
                    color: '#14358A',
                  }}
                >
                  22x
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                  lineHeight: '150%',
                  textAlign: 'center',
                  color: '#333333',
                  maxWidth: 'min(300px, 90%)',
                  marginTop: 'clamp(14px, 1.67vw, 24px)',
                }}
              >
                Industry-leading returns, driven by a model built on tangible results and shared success.
              </p>
              {/* Buttons */}
              <a
                href="/power-of-working-with-us"
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: 'min(340px, 90%)',
                  textAlign: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.11vw, 17px)',
                  color: '#FFFFFF',
                  background: 'linear-gradient(135deg, #7C5CFA 0%, #C45FD4 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  marginTop: 'clamp(16px, 1.53vw, 22px)',
                }}
              >
                Discover How We Engineer Results
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-6 lg:px-12">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: 'clamp(36px, 4.44vw, 64px)',
            }}
          >
            Common Questions
          </h2>

          <div className="max-w-[min(900px,_90%)] mx-auto flex flex-col gap-4">
            {/* FAQ Item 1 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '3px solid #14358A',
                boxShadow: '0px 0px 1px 1px #00000026',
                minHeight: 'clamp(56px, 5vw, 72px)',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  How do I know which engagement model is right for me?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 2 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: 'clamp(56px, 5vw, 72px)',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  What is a typical timeline for seeing measurable results?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 3 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: 'clamp(56px, 5vw, 72px)',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  How is PMG&apos;s pricing structured compared to other firms?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 4 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: 'clamp(56px, 5vw, 72px)',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  What makes your &apos;functional consulting&apos; approach different?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 5 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: 'clamp(56px, 5vw, 72px)',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  Do you only work with large corporations?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Elevate Your Business Section */}
      <div className="relative z-10 py-16 lg:py-20" style={{ background: '#EBF7FF' }}>
        <div className="mx-auto px-6 lg:px-12 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: 'clamp(14px, 1.67vw, 24px)',
            }}
          >
            Ready to Elevate Your Business?
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1196px, 90%)',
              margin: '0 auto clamp(24px, 2.75vw, 39.6px) auto',
            }}
          >
            Let&apos;s discuss how PMG can help you navigate your challenges and seize new opportunities.
          </p>
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: 'min(319px, 90%)',
              height: 'clamp(52px, 4.51vw, 65px)',
              border: 'none',
              cursor: 'pointer',
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
