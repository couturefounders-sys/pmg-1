'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function ActiveManagementSolutions() {
  const [activeTab, setActiveTab] = useState<'leadership' | 'autopilot'>('leadership');
  const advantageCards = [
    {
      icon: '/icons/cards/badge-thunderbolt.svg',
      title: 'Unmatched Flexibility',
      desc: 'Your contract is with PMG, not an individual. This provides unparalleled flexibility to switch the assigned executive as your business needs shift, from growth to M&A, ensuring you always have the right expertise at the right time.',
    },
    {
      icon: '/icons/cards/badge-setting-laptop.svg',
      title: 'World-Class Consultant Quality',
      desc: 'We embed our own top-tier experts, rigorously selected, trained in PMG\'s integration methods, and backed by our global resources, they ensure you receive consultant-level ROI without the typical consultant price tag.',
    },
    {
      icon: '/icons/cards/badge-protect.svg',
      title: 'Guaranteed Quality & Accountability',
      desc: 'PMG actively monitors performance and provides oversight, ensuring alignment with your strategic objectives. Your embedded executive is supported by the full PMG knowledge base to deliver exceptional results.',
    },
  ];

  const impactCards = [
    {
      icon: '/icons/cards/badge-medal-one.svg',
      title: 'Accelerated Career Growth',
      desc: 'Work on diverse, high-impact challenges across industries instead of being limited to one company\'s trajectory.',
    },
    {
      icon: '/icons/cards/ams-heart.svg',
      title: 'Methodology & Resources',
      desc: 'Access to PMG\'s proprietary frameworks, tools, and knowledge base that individual companies can\'t provide.',
    },
    {
      icon: '/icons/cards/ams-every-user.svg',
      title: 'Portfolio Experience',
      desc: 'Solve different types of problems across multiple businesses to build a truly diverse and robust skill set.',
    },
    {
      icon: '/icons/cards/badge-cloud-storage.svg',
      title: 'Peer Network',
      desc: 'Collaborate with other top operators in PMG\'s ecosystem, sharing insights and solving challenges collectively.',
    },
    {
      icon: '/icons/cards/ams-heart.svg',
      title: 'Reduced Risk',
      desc: 'PMG provides stability, benefits, and support, freeing operators to focus on execution without administrative burdens.',
    },
    {
      icon: '/icons/cards/badge-alignment-bottom-center.svg',
      title: 'Work-Life Integration',
      desc: 'Structured engagement models with clear boundaries, preventing the 24/7 demands of traditional C-suite roles.',
    },
  ];

  const compareRows = [
    { category: 'Accountability', traditional: 'Individual consultant', interim: 'Individual consultant', pmg: 'PMG corporate guarantee' },
    { category: 'Flexibility', traditional: 'Limited | Low flexibility', interim: 'Medium flexibility', pmg: 'High — can switch executives' },
    { category: 'Cost', traditional: 'High (full-time hire)', interim: 'Medium (contract)', pmg: 'Low (fractional)' },
    { category: 'Support', traditional: 'Solo', interim: 'Solo with agency overhead', pmg: 'Full PMG team' },
    { category: 'ROI Focus', traditional: 'Low (time-based)', interim: 'Medium', pmg: 'High (outcome-based)' },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
      <section className="w-full pt-36 pb-16 px-6">
        <div className="max-w-[min(900px,_90%)] mx-auto flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '105%',
              color: '#000000',
              marginBottom: '12px',
            }}
          >
            Active Management Solutions
          </p>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '28px',
            }}
          >
            The Leadership Subscription
          </h1>

          {/* Para 1 */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              color: '#333333',
              marginBottom: '24px',
            }}
          >
            When you need more than a consultant, you need an operator. Active Management embeds a
            world-class PMG executive into your organization to fill a critical role, drive
            execution, and deliver sustained results from the inside.
          </p>

          {/* Para 2 */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              color: '#333333',
            }}
          >
            This is not a recruitment service. It&apos;s a strategic partnership where we place our
            own proven experts into your leadership structure, fully backed by the resources and
            accountability of our entire global organization.
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 2: The PMG Advantage ─── */}
      <FadeInSection delay={0.1} direction="up">
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '16px',
              }}
            >
              The PMG Advantage
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '150%',
                color: '#333333',
                maxWidth: 'min(680px, 95%)',
              }}
            >
              Our embedded executive model delivers critical advantages over traditional recruitment
              or interim solutions.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantageCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={card.icon} alt={card.title} width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      lineHeight: '130%',
                      color: '#14358A',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    lineHeight: '160%',
                    color: '#333333',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 3: Why World-Class Operators Choose PMG ─── */}
      <FadeInSection delay={0.2} direction="up">
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Why World-Class Operators Choose PMG
            </h2>
          </div>

          {/* 6 cards — 3 columns × 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={card.icon} alt={card.title} width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      lineHeight: '130%',
                      color: '#14358A',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    lineHeight: '160%',
                    color: '#333333',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Result statement */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#333333',
              textAlign: 'center',
              maxWidth: 'min(1201px, 95%)',
              margin: '0 auto',
            }}
          >
            This means you get access to executives who would be unattainable through traditional
            recruitment—operators at the top of their game, backed by PMG&apos;s full support system.
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 4: How We Compare ─── */}
      <FadeInSection delay={0.3} direction="up">
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '16px',
              }}
            >
              How We Compare
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '1.75',
                letterSpacing: '0%',
                color: '#68718B',
                marginBottom: '40px',
              }}
            >
              Understand the clear benefits of partnering with PMG for active management.
            </p>
          </div>

          {/* Comparison table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      borderRight: '1px solid #E5E7EB',
                      width: '18%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      borderRight: '1px solid #E5E7EB',
                      width: '27%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Traditional Recruiting
                  </th>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      borderRight: '1px solid #E5E7EB',
                      width: '27%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Interim Management
                  </th>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                      color: '#14358A',
                      padding: '18px 20px',
                      textAlign: 'center',
                      borderBottom: '1px solid #C7D2FE',
                      width: '28%',
                      backgroundColor: '#EEF2FF',
                      borderRadius: '12px 12px 0 0',
                    }}
                  >
                    PMG Active Management
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, idx) => (
                  <tr key={idx}>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.category}
                    </td>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.traditional}
                    </td>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.interim}
                    </td>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                        color: '#14358A',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        backgroundColor: '#EEF2FF',
                        textAlign: 'center',
                      }}
                    >
                      {row.pmg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 5: Our Process Wave ─── */}
      <FadeInSection delay={0.4} direction="up">
      <section className="w-full bg-white pt-16 pb-16 overflow-hidden">
        {/* Header */}
        <div className="max-w-[min(1100px,_90%)] mx-auto px-6 flex flex-col items-center text-center mb-10">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            From Role Definition to ROI — Our Operator-Led Process
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '1.75',
              color: '#333333',
              maxWidth: 'min(680px, 95%)',
            }}
          >
            From the first conversation to sustained execution, here&apos;s how we embed the right leader into your organization.
          </p>
        </div>

        {/* Wave + phases — grid layout matching bespoke-solutions */}
        <div className="relative w-full overflow-hidden">
          {/* Wave image — full width, absolutely centred */}
          <div className="absolute left-0 right-0" style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 0 }}>
            <Image
              src="/bespoke-wave.png"
              alt="process wave"
              width={1440}
              height={226}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Four phases grid overlay */}
          <div
            className="relative w-full max-w-[1400px] mx-auto px-8 grid grid-cols-4"
            style={{ zIndex: 1, height: 'clamp(350px, 38.89vw, 560px)' }}
          >
            {/* Phase 1 — text TOP, left — pulled down */}
            <div className="flex flex-col items-center justify-between" style={{ paddingTop: 'clamp(40px, 5vw, 70px)', paddingBottom: 'clamp(100px, 11vw, 160px)' }}>
              <div style={{ maxWidth: 'min(200px, 100%)', textAlign: 'left', alignSelf: 'flex-start', transform: 'translateX(-10px)' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '1.3', color: '#14358A', marginBottom: '12px' }}>
                  Needs Assessment
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.6', color: '#5F5F5F' }}>
                  We begin with a comprehensive, collaborative deep dive to fully understand your specific needs and context.
                </p>
              </div>
            </div>

            {/* Phase 2 — text BOTTOM, center-left — pulled up */}
            <div className="flex flex-col items-center justify-between" style={{ paddingTop: 'clamp(170px, 17vw, 250px)' }}>
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '1.3', color: '#14358A', marginBottom: '12px' }}>
                  Strategic Deep-Dive
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.6', color: '#5F5F5F' }}>
                  Our consultants perform a focused diagnostic review to uncover the most pressing needs and opportunities.
                </p>
              </div>
            </div>

            {/* Phase 3 — text TOP, center-right — pulled down */}
            <div className="flex flex-col items-center justify-between" style={{ paddingTop: 'clamp(40px, 5vw, 70px)', paddingBottom: 'clamp(20px, 2.5vw, 40px)' }}>
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'right', alignSelf: 'flex-end' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '1.3', color: '#14358A', marginBottom: '12px' }}>
                  Placement &amp; Integration
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.6', color: '#5F5F5F' }}>
                  We select and embed the ideal PMG executive, ensuring they are fully integrated within your business&apos;s daily operations.
                </p>
              </div>
            </div>

            {/* Phase 4 — text BOTTOM, right — shifted right and up */}
            <div className="flex flex-col items-center justify-between" style={{ paddingTop: 'clamp(170px, 17vw, 250px)' }}>
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'right', alignSelf: 'flex-end', transform: 'translateX(30px)' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '1.3', color: '#14358A', marginBottom: '12px' }}>
                  Ongoing PMG Support
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.6', color: '#5F5F5F' }}>
                  The embedded executive has continuous access to PMG&apos;s knowledge base, methodologies, and fractional resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 6: Engagement Models ─── */}
      <FadeInSection delay={0.5} direction="up">
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '16px',
              }}
            >
              Engagement Models
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '150%',
                color: '#333333',
                maxWidth: 'min(900px, 95%)',
              }}
            >
              We offer two distinct engagement models to provide the right level of support for your specific goals.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center mb-12">
            <div
              style={{
                display: 'inline-flex',
                border: '3px solid #14358A',
                borderRadius: '50px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setActiveTab('leadership')}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                  padding: '14px 40px',
                  backgroundColor: activeTab === 'leadership' ? '#14358A' : '#FFFFFF',
                  color: activeTab === 'leadership' ? '#FFFFFF' : '#14358A',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
              >
                Leadership Support
              </button>
              <button
                onClick={() => setActiveTab('autopilot')}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                  padding: '14px 40px',
                  backgroundColor: activeTab === 'autopilot' ? '#14358A' : '#FFFFFF',
                  color: activeTab === 'autopilot' ? '#FFFFFF' : '#14358A',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
              >
                Business Autopilot
              </button>
            </div>
          </div>

          {/* ── Leadership Support Tab ── */}
          {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Leadership Support */}
            <div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '120%',
                  color: '#14358A',
                  marginBottom: '16px',
                }}
              >
                Leadership Support
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                  lineHeight: '1.75',
                  color: '#333333',
                  marginBottom: '24px',
                }}
              >
                For owners who wish to remain operationally involved, we embed PMG executives to lead critical functions, drive high-priority transformation initiatives, or fill acute leadership gaps collaboratively. We embed consultants as leaders in a variety of corporate functional areas, including:
              </p>

              {/* Functional areas list */}
              <div className="space-y-3 mb-6">
                {[
                  { text: 'Operations & Strategy', icon: '/icons/cards/functional-operations-strategy.svg' },
                  { text: 'People & Organizations', icon: '/icons/cards/functional-people-organizations.svg' },
                  { text: 'Mergers & Acquisitions', icon: '/icons/cards/functional-mergers-acquisitions.svg' },
                  { text: 'Customer Experience', icon: '/icons/cards/functional-customer-experience.svg' },
                  { text: 'Branding & Marketing', icon: '/icons/cards/functional-branding-marketing.svg' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      style={{ height: '20px', width: 'auto', flexShrink: 0, alignSelf: 'stretch', objectFit: 'contain' }}
                    />
                    <span
                      style={{
                        fontFamily: 'Arimo, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                        lineHeight: '150%',
                        color: '#364153',
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* What Leadership Support Delivers */}
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  color: '#14358A',
                  marginTop: '32px',
                  marginBottom: '16px',
                }}
              >
                What Leadership Support Delivers
              </h4>

              {/* Two columns: We Do / We Do Not */}
              <div className="grid grid-cols-2 gap-6">
                {/* We Do */}
                <div>
                  <h5
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                      color: '#008236',
                      marginBottom: '12px',
                    }}
                  >
                    We Do:
                  </h5>
                  <ul className="space-y-3">
                    {[
                      'Lead specific functions or departments (e.g., COO, Head of CX)',
                      'Drive high-priority transformation initiatives',
                      'Provide strategic guidance to the existing leadership team',
                      'Mentor and develop internal talent',
                      'Report progress and results to you or your designated leader',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Image src="/icons/cards/we-do.svg" alt="✓" width={20} height={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                            lineHeight: '140%',
                            color: '#364153',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* We Do Not */}
                <div>
                  <h5
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                      color: '#C10007',
                      marginBottom: '12px',
                    }}
                  >
                    We Do Not:
                  </h5>
                  <ul className="space-y-3">
                    {[
                      'Make unilateral decisions outside our defined scope',
                      'Replace existing, effective leadership',
                      'Operate in a silo without collaboration',
                      'Disengage without a thorough knowledge transfer',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Image src="/icons/cards/we-do-not.svg" alt="✗" width={20} height={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                            lineHeight: '140%',
                            color: '#364153',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column - Ideal For & Your Involvement */}
            <div>
              {/* Ideal For box */}
              <div
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                  marginBottom: '20px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.74vw, 28px)',
                    lineHeight: '24px',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  Ideal For
                </h4>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '22.75px',
                    color: '#68718B',
                  }}
                >
                  Businesses needing high-impact leadership for specific departments, organizations in transition, or owners who need to strengthen their executive team.
                </p>
              </div>

              {/* Your Involvement box */}
              <div
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.74vw, 28px)',
                    lineHeight: '24px',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  Your Involvement:
                </h4>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    lineHeight: '22.75px',
                    color: '#68718B',
                  }}
                >
                  You define your level of involvement. The PMG executive works within your existing structure, reporting to ownership or the board as agreed.
                </p>
              </div>
            </div>
          </div>
          )}

          {/* ── Business Autopilot Tab ── */}
          {activeTab === 'autopilot' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '27px', lineHeight: '120%', color: '#14358A', marginBottom: '16px' }}>
                Business Autopilot
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', marginBottom: '24px' }}>
                For founders or investors seeking minimal to no operational involvement. A PMG executive assumes complete, autonomous responsibility for the business&apos;s day-to-day operations and strategic execution, reporting only at high-level milestones.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '1.6', color: '#333333', marginBottom: '16px' }}>
                In this model, our executive is embedded as the ultimate operational authority:
              </p>
              <ul className="space-y-3 mb-8">
                {['Managing Partner', 'Chief Executive Officer (CEO)', 'Executive Director (ED)', 'General Manager (GM)'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#364153', flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontFamily: 'Arimo, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '150%', color: '#364153' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '140%', color: '#14358A', marginBottom: '16px' }}>
                What Autopilot Means (and Does Not Mean)
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h5 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#008236', marginBottom: '12px' }}>We Do:</h5>
                  <ul className="space-y-3">
                    {[
                      'Full operational leadership and decision-making',
                      'Strategic planning and execution',
                      'Team management and development',
                      'Regular milestone reporting to ownership',
                      'Risk management and compliance',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Image src="/icons/cards/we-do.svg" alt="✓" width={20} height={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#364153' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#C10007', marginBottom: '12px' }}>We Do Not:</h5>
                  <ul className="space-y-3">
                    {[
                      'Change ownership or equity structure',
                      'Make decisions outside agreed authority limits',
                      'Operate without transparency',
                      'Leave without extensive transition planning',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Image src="/icons/cards/we-do-not.svg" alt="✗" width={20} height={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '140%', color: '#364153' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '28px' }}>
                <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', color: '#333333', marginBottom: '8px' }}>Governance Structure:</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '160%', color: '#364153' }}>
                  Clear reporting lines and decision rights are established upfront to ensure alignment and transparency.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px', backgroundColor: '#FFFFFF', marginBottom: '20px' }}>
                <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '24px', color: '#14358A', marginBottom: '12px' }}>Ideal For</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '22.75px', color: '#68718B' }}>
                  Investors with portfolio companies, founders planning an exit, absentee owners, or those who wish to focus purely on passive returns without operational burdens.
                </p>
              </div>
              <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px', backgroundColor: '#FFFFFF' }}>
                <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '24px', color: '#14358A', marginBottom: '12px' }}>Your Involvement:</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '22.75px', color: '#68718B' }}>
                  Limited to high-level oversight and receiving key reports, typically on a quarterly basis. We handle the rest.
                </p>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 7: Our Commitment: True Accountability ─── */}
      <FadeInSection delay={0.6} direction="up">
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '16px',
              }}
            >
              Our Commitment: True Accountability
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                lineHeight: '150%',
                color: '#333333',
                maxWidth: 'min(900px, 95%)',
              }}
            >
              Our partnerships are built on a foundation of transparency and measurable outcomes. We don&apos;t just promise results; we provide concrete mechanisms to ensure we deliver them.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '/icons/cards/badge-target.svg',
                title: 'Transparent Success Metrics',
                desc: 'Before any project begins, we work with you to define specific, measurable KPIs that align directly with your desired business outcomes. You know exactly what success looks like from day one.',
              },
              {
                icon: '/icons/cards/badge-pencil.svg',
                title: 'Consistent Progress Reviews',
                desc: 'We establish a regular cadence of structured reviews, providing documented updates that track our performance against the agreed-upon targets. This ensures you always have clear reporting.',
              },
              {
                icon: '/icons/cards/badge-check-correct.svg',
                title: 'Post-Engagement Success Audit',
                desc: 'Our commitment extends beyond project completion. We conduct a 6- and 12-month follow-up audits to ensure the long-term impact of our work, verifying that improvements are sustained and continue to grow.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={card.icon} alt={card.title} width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      lineHeight: '130%',
                      color: '#14358A',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    lineHeight: '160%',
                    color: '#333333',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 8: Our Approach: From Insight to Impact ─── */}
      <FadeInSection delay={0.7} direction="up">
      <section className="relative z-10 py-20 bg-white">
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
              marginBottom: '16px',
            }}
          >
            Our Approach: From Insight to Impact
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(1201px, 95%)',
              margin: '0 auto 48px auto',
            }}
          >
            We do not just deliver advice; we deliver outcomes. Our methodology is built on deep analysis, hands-on execution, and a relentless commitment to quality. We do not rely on recycled industry playbooks. Instead, we architect and implement first-principle solutions designed for one purpose: to solve your most critical challenges effectively and permanently.
          </p>

          {/* Approach Cards — same design as Flexible Pricing Options */}
          <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
            {[
              {
                icon: '/icons/cards/badge-setting-laptop.svg',
                title: 'Architects & Implementers, Not Just Advisors',
                subtitle: 'We Own the Outcome.',
                desc: 'Our engagement does not end with a strategy deck; we stay to execute the plan, integrating with your teams to manage the transformation and ensure the solutions we design are the solutions we deliver.',
              },
              {
                icon: '/icons/cards/badge-protect.svg',
                title: 'Industry-Agnostic Innovation',
                subtitle: 'Proven Strategies Beyond Sector Silos.',
                desc: 'We believe the best solutions are not confined to a single industry. By applying our Sector Convergence Model, we pull proven strategies from diverse fields to solve problems with a speed and creativity that industry-siloed consultants cannot match.',
              },
              {
                icon: '/icons/cards/badge-medal-one.svg',
                title: 'Rigorous Quality Assurance & Continuous Improvement',
                subtitle: 'Built for Excellence. Refined for Results.',
                desc: <>Every project plan, financial model, and key deliverable undergoes a rigorous internal QA process to ensure viability and alignment with your goals. After every engagement, we codify our learnings to continuously refine our methods. This is how we maintain our industry-leading <AnimatedCounter end={22} suffix="x" /> average client ROI.</>,
              },
            ].map((card, idx) => {
              const isThirdCard = idx === 2;
              const tabHeight = isThirdCard ? 177 : 153;
              const cardPadding = isThirdCard ? '24px 24px 24px 150px' : '24px 24px 24px 140px';
              return (
              <div
                key={idx}
                className="relative flex items-stretch"
                style={{ width: '540px' }}
              >
                {/* Blue Tab */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-16px',
                    top: '-4px',
                    width: isThirdCard ? '158px' : '144px',
                    height: tabHeight,
                    background: '#14358A',
                    borderRadius: '13px 0 0 13px',
                    clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: '20px',
                    zIndex: 1,
                  }}
                >
                  <Image src={card.icon} alt={card.title} width={64} height={64} style={{ objectFit: 'contain' }} />
                </div>

                {/* Card Content */}
                <div
                  className="depth-card"
                  style={{
                    border: '1px solid #99A1AF',
                    borderRadius: '13.06px',
                    padding: cardPadding,
                    width: '100%',
                    minHeight: `${tabHeight}px`,
                  }}
                >
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(10px, 0.83vw, 14px)', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                    {card.subtitle}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '24px', color: '#5F5F5F' }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ─── Section 9: Ready to Elevate Your Business? ─── */}
      <FadeInSection delay={0.8} direction="up">
      <section
        className="w-full py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, #EBF7FF 0%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-[min(900px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Ready for a New Level of Leadership?
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '1.75',
              color: '#333333',
              marginBottom: '32px',
            }}
          >
            Let&apos;s discuss how PMG can help you navigate your challenges and seize new opportunities.
          </p>
          <Link
            href="/contact-us"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.22vw, 17.6px)',
              padding: '16px 40px',
              backgroundColor: '#8B5CF6',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
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
      </section>
      </FadeInSection>

      <Footer />
    </main>
  );
}
