'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ROIChart from '@/components/ROIChart';

export default function PowerOfWorkingWithUs() {
  const clientQuotes = [
    '"Implementation support wasn\'t just an afterthought — it was baked into every recommendation."',
    '"Solutions ignored organizational culture and change management entirely."',
    '"We got recommendations, not results."',
    '"Rigid frameworks slowed down real decision-making."',
  ];

  const comparisonFeatures = [
    {
      feature: 'Engagement Model',
      oldPlaybook: 'Project-based, time-limited engagements',
      pmgModel: 'Outcome-based partnerships with ongoing accountability',
    },
    {
      feature: 'Talent Model',
      oldPlaybook: 'Rotating junior staff with senior sign-off',
      pmgModel: 'Senior operators embedded directly in your team',
    },
    {
      feature: 'Key Deliverable',
      oldPlaybook: 'Slide decks and strategy reports',
      pmgModel: 'Executed plans with measurable outcomes',
    },
    {
      feature: 'Pricing Model',
      oldPlaybook: 'Hourly billing regardless of results',
      pmgModel: 'Value-aligned pricing tied to outcomes',
    },
    {
      feature: 'Core IP',
      oldPlaybook: 'Recycled industry frameworks',
      pmgModel: 'Proprietary models: I-O, BVU, Sector Convergence',
    },
    {
      feature: 'Quality Assurance',
      oldPlaybook: 'Internal review by the same team',
      pmgModel: 'Double-blind anonymous peer QA review',
    },
    {
      feature: 'Follow-Through',
      oldPlaybook: 'Disengages after delivery',
      pmgModel: 'Post-engagement audits at 6 and 12 months',
    },
  ];

  const [currentFeatureIdx, setCurrentFeatureIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentFeatureIdx(prev => (prev + 1) % comparisonFeatures.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, comparisonFeatures.length]);

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: The Power of Quiet Consulting ─── */}
      <section className="w-full pt-36 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            The Power of Quiet Consulting
          </h1>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
            }}
          >
            Consulting does not need to be loud or flashy. And it should never overshadow
            the organizations it serves. At its core, consulting is simple: trusted advice and
            targeted support to solve real problems. The best consulting does not make
            headlines. It makes organizations stronger, sharper, and more resilient.
          </p>
        </div>
      </section>

      {/* ─── Section 2: The Unseen Discipline Behind Quiet Results ─── */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            The Unseen Discipline Behind Quiet Results
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Quiet consulting is not just an attitude; it is a built-in system. Before any PMG
            engagement begins, the strategy itself must pass the most rigorous test we can
            devise: a blind review by our own experts.
          </p>
        </div>
      </section>

      {/* ─── Section 3: Our Blueprint for Certainty ─── */}
      <section className="w-full py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '10px',
            }}
          >
            Our Blueprint for Certainty
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.11vw, 18px)',
              letterSpacing: '0.04em',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            The C2 Specification &amp; Anonymous QA Review
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            When a PMG functional expert completes their deep dive into your challenge,
            they do not just prepare a presentation. They architect a full execution
            blueprint called a C2 Specification. This document details the precise changes,
            systems, and technologies required to solve your problem.
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            But here is where we differ: that expert&apos;s blueprint is then submitted to our
            internal Quality Assurance panel, a separate group of peer executives and
            functional leaders. The review is double-blind. The designer does not know the
            reviewer, and the reviewer does not know the designer.
          </p>
        </div>
      </section>

      {/* ─── Section 4: Global Network and Strategic Engagements ─── */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Global Network and Strategic Engagements
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            This panel uses a rigorous framework to ask the hard questions you would. Does the
            logic hold without bias or leaps? Are there hidden information gaps? Is the solution
            truly tailored, or a repackaged idea? Is the claimed outcome a likely result of the
            proposed actions?
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Only a C2 Spec that passes this internal gauntlet becomes a PMG strategy. This
            process eliminates individual blind spots and ensures that what we bring you is
            not just confident, it has been pre-validated for coherence and durability. We
            find the flaws in our own thinking, so you do not have to.
          </p>
        </div>
      </section>

      {/* ─── Section 5: The Problem with "Loud" Consulting ─── */}
      <section className="w-full py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            The Problem with &ldquo;Loud&rdquo; Consulting
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Too often, consulting is the opposite: loud, costly, and ineffective. And it
            is not just our view. It is well documented across industries.
          </p>

          {/* Client Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
            {clientQuotes.map((quote, i) => (
              <div
                key={i}
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 32px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(13px, 1.25vw, 20px)',
                    lineHeight: '1.6',
                    color: '#14358A',
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: "Loud" Consultants Are Mostly Known For ─── */}
      <section
        className="w-full relative overflow-hidden py-24 px-6"
        style={{ background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)' }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* decorative overlay */}
        <img
          src="/equity-ccc.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.12,
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(13px, 1.11vw, 18px)',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.75)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            The Strategic Imperative
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              color: '#FFFFFF',
              marginBottom: '48px',
              maxWidth: 'min(760px, 95%)',
            }}
          >
            &ldquo;Loud&rdquo; consultants are mostly known for&hellip;
          </h2>

          {/* 2×2 Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{
              gap: '24px',
              width: '100%',
            }}
          >
            {[
              {
                title: 'Overpriced and Under-Delivering',
                desc: 'Activity Over Outcomes (or Consulting Theatre): Endless hours billed and high fees justified by activity, not measurable, delivered outcomes.',
              },
              {
                title: 'Recommendations Without Realism',
                desc: 'Ideas that sound good in slides but fail in practice because they ignore your realities.',
              },
              {
                title: 'Implementation Chaos',
                desc: 'Solutions that look great in slides but fall apart in real-world application, leaving broken systems and internal confusion.',
              },
              {
                title: 'Generic Advice, Not Expert Solutions',
                desc: 'Recycled playbooks instead of expertise. Generic advice, ineffective strategies.',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#FDF5F0',
                  borderRadius: '16px',
                  padding: '36px',
                  textAlign: 'left',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    lineHeight: '105%',
                    letterSpacing: '-0.03em',
                    color: '#D0021B',
                    marginBottom: '16px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#5F6D7E',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 7: PMG vs Old Playbook Comparison ─── */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: '12px' }}>
            PMG vs. The Old Playbook
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#68718B', textAlign: 'center', marginBottom: '40px' }}>
            Auto-cycling every 3 seconds · <span style={{ fontStyle: 'italic' }}>Hover to pause</span>
          </p>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ border: '2px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}
          >
            {/* Table header */}
            <div className="grid grid-cols-3" style={{ backgroundColor: '#14358A' }}>
              {['Feature', 'Old Playbook', 'PMG Model'].map((col, i) => (
                <div key={i} style={{ padding: '18px 24px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.25vw, 20px)', color: '#FFFFFF', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.2)' : 'none', textAlign: 'center' }}>
                  {col}
                </div>
              ))}
            </div>

            {/* Feature rows — all visible with current highlighted */}
            {comparisonFeatures.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3"
                style={{
                  borderBottom: i < comparisonFeatures.length - 1 ? '1px solid #E5E7EB' : 'none',
                  backgroundColor: i === currentFeatureIdx ? '#EBF7FF' : '#FFFFFF',
                  transition: 'background-color 0.4s ease',
                }}
              >
                <div style={{ padding: '18px 24px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.11vw, 18px)', color: '#14358A', borderRight: '1px solid #E5E7EB', display: 'flex', alignItems: 'center' }}>
                  {row.feature}
                </div>
                <div style={{ padding: '18px 24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', color: '#D0021B', borderRight: '1px solid #E5E7EB', display: 'flex', alignItems: 'center' }}>
                  {row.oldPlaybook}
                </div>
                <div style={{ padding: '18px 24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', color: '#14358A', display: 'flex', alignItems: 'center' }}>
                  {row.pmgModel}
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {comparisonFeatures.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentFeatureIdx(i)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: i === currentFeatureIdx ? '#14358A' : '#D0D9F0',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 8: The Proof is in the Performance ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '16px' }}>
            The Proof is in the Performance
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', color: '#333333', marginBottom: '48px', maxWidth: 'min(900px, 95%)' }}>
            Our quiet, focused approach delivers loud results. We consistently outperform industry averages across key performance indicators.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' style={{ gap: '24px', width: '100%' }}>
            {[
              { stat: '22x', label: 'Consultation ROI', desc: 'Industry-leading returns on every engagement.' },
              { stat: '30%', label: 'Higher Cost Reduction', desc: 'Efficiency gains that far outpace the industry.' },
              { stat: 'Top 1%', label: 'Access', desc: 'A global network of elite, proven experts.' },
              { stat: 'Unmatched', label: 'Speed of Service', desc: 'Rapid, streamlined processes for faster results.' },
              { stat: '95%', label: 'On-Time Resolution', desc: 'A reliable partner committed to timely execution.' },
              { stat: 'Proven', label: 'Track Record', desc: 'A history of delivering measurable, tangible success.' },
            ].map((item, i) => (
              <div key={i} style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '32px 28px', textAlign: 'left' }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '8px' }}>{item.stat}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '12px' }}>{item.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 9: Our Approach & Methodology ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '16px' }}>
            Our Approach &amp; Methodology
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', color: '#333333', marginBottom: '48px', maxWidth: 'min(1000px, 95%)' }}>
            We use proven methodologies and cutting-edge frameworks to deliver results. But what sets PMG apart is our proprietary models: tools that provide deeper insight and unlock solutions the industry cannot match.
          </p>

          <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '12px' }}>
            Our Proprietary Models
          </h3>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B', marginBottom: '40px' }}>
            Unique frameworks developed by PMG that unlock insights and solutions the industry cannot match.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' style={{ gap: '24px', width: '100%' }}>
            {[
              { icon: '/write.png', title: 'Sector Convergence Model', desc: 'Our proprietary framework for identifying and leveraging next-generation disruption opportunities at the intersection of industries, creating unique, durable competitive advantages.' },
              { icon: '/box.png', title: 'Input-Output Model', desc: 'Our integrated approach to enterprise architecture, built on field-scope work tools that drive unprecedented consistency, standardization and automation, resulting in superior quality control and reduced failure rates.' },
              { icon: '/balane-two.png', title: 'Business Value-Unit Model', desc: 'Our unique method for quantifying the true ROI of cross-revenue generating departments such as HR & IT, creating holistic performance measurement and precise strategic alignment.' },
            ].map((card, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '3px solid #14358A', borderRadius: '10px', padding: '32px 28px', textAlign: 'left' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ width: '64px', height: '64px', background: '#14358A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={card.icon} alt={card.title} style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', margin: 0 }}>{card.title}</div>
                </div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}>{card.desc}</p>
                <a href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', marginTop: '16px', display: 'inline-block' }}>Read More ›</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 10: Proven Industry Frameworks ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marqueeScroll 18s linear infinite;
          }
          .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '12px' }}>
            Proven Industry Frameworks
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B', marginBottom: '8px' }}>
            We leverage established methodologies that have stood the test of time across industries.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 14px)', lineHeight: '140%', color: '#A0AEC0', fontStyle: 'italic', marginBottom: '32px' }}>
            Hover to pause
          </p>
          <div className="marquee-wrapper w-full overflow-hidden" style={{ border: '3px dashed #A0B4E8', borderRadius: '10px', padding: '36px 0' }}>
            <div className="marquee-track" style={{ display: 'flex', gap: '48px', width: 'max-content' }}>
              {[
                { icon: '/12.png', label: 'Agile', emoji: '⚡' },
                { icon: '/23.png', label: 'Lean', emoji: '🔍' },
                { icon: '/34.png', label: 'Six Sigma', emoji: '📊' },
                { icon: '/45.png', label: 'Waterfall', emoji: '💧' },
                { icon: '/12.png', label: 'Kanban', emoji: '📋' },
                { icon: '/23.png', label: 'SAFe', emoji: '🏗️' },
                { icon: '/34.png', label: "Kotter's 8-Step", emoji: '🔄' },
                { icon: '/45.png', label: 'Theory of Constraints', emoji: '🎯' },
                /* duplicate for seamless loop */
                { icon: '/12.png', label: 'Agile', emoji: '⚡' },
                { icon: '/23.png', label: 'Lean', emoji: '🔍' },
                { icon: '/34.png', label: 'Six Sigma', emoji: '📊' },
                { icon: '/45.png', label: 'Waterfall', emoji: '💧' },
                { icon: '/12.png', label: 'Kanban', emoji: '📋' },
                { icon: '/23.png', label: 'SAFe', emoji: '🏗️' },
                { icon: '/34.png', label: "Kotter's 8-Step", emoji: '🔄' },
                { icon: '/45.png', label: 'Theory of Constraints', emoji: '🎯' },
              ].map((fw, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', minWidth: '120px' }}>
                  <span style={{ fontSize: '40px' }}>{fw.emoji}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.25vw, 18px)', lineHeight: '105%', color: '#14358A', whiteSpace: 'nowrap' }}>{fw.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 11: The Right Solution, Every Time ─── */}
      <section className="w-full py-16 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[min(900px,_90%)] mx-auto flex flex-col items-center text-center">
          {/* Formula row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/56.png" alt="Proprietary Models" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', lineHeight: '105%', color: '#14358A' }}>3</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 1vw, 16px)', lineHeight: '140%', color: '#68718B' }}>Proprietary Models</span>
              </div>
            </div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', color: '#14358A' }}>+</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/67.png" alt="Proven Frameworks" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', lineHeight: '105%', color: '#14358A' }}>8</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 1vw, 16px)', lineHeight: '140%', color: '#68718B' }}>Proven Frameworks</span>
              </div>
            </div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', color: '#14358A' }}>=</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#EEF2FF', borderRadius: '999px', padding: '14px 28px' }}>
              <img src="/78.png" alt="The Right Solution" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.25vw, 20px)', color: '#14358A' }}>The Right Solution, Every Time.</span>
            </div>
          </div>

          {/* Philosophy box */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '36px 40px', textAlign: 'left', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #14358A', display: 'inline-block', flexShrink: 0 }} />
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>Our Philosophy of Application</h3>
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333' }}>
              No single method is right for every situation. PMG selects and adapts frameworks based on each client&apos;s specific needs, culture, and goals. Our objective is to use the least-change-demanding methods first, balancing the amount of disruption with the impact it will create, based on your needs and the results you are looking for.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 12: A Commitment to Continuous Improvement ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: '20px' }}>
              A Commitment to Continuous Improvement
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333' }}>
              Our 22x ROI was not instant. It was earned. In 2018, we matched the industry average of 6–9x. But average was never the goal. In 2020, we made client ROI our north star. That focus pushed us to 13x and continues to drive improvement today. Whatever our current benchmark, we refine, learn, and raise it. Continuous improvement is not a slogan; it is our operating model.
            </p>
          </div>
          <ROIChart />
        </div>
      </section>

      {/* ─── Section 13: Still Not Convinced? ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: '48px' }}>
            Still Not Convinced?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2' style={{ gap: 'clamp(24px, 4.17vw, 60px)' }}>
            {/* Left */}
            <div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333', marginBottom: '20px' }}>
                We understand the skepticism. In many cases, it is earned. Almost one-third of our clients come to us after a major consulting engagement failed to deliver meaningful results.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333', marginBottom: '20px' }}>
                If you are not confident we are the right partner, you should not hire us yet.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333', marginBottom: '20px' }}>
                We are not here to trap you. We are here to help.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333', marginBottom: '20px' }}>
                If you choose another firm and later find that you are still not where you would like to be, we will be here when you are ready.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}>
                No pressure. No long-term commitment. Just a conversation.
              </p>
            </div>
            {/* Right */}
            <div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '20px' }}>
                Why Are We So Confident?
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333', marginBottom: '20px' }}>
                We are often asked how we back our bold claims. The answer is simple: we built a system to check our own work.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#333333' }}>
                Our proprietary C2 Specification and Anonymous QA Review means every strategy we propose has already been stress-tested by a separate committee of experts before we even present it to you. We are as committed to eliminating our own blind spots and biases that we have institutionalized the peer review process. Our confidence comes not from arrogance, but from a proven, systematic method of validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 14: CTA ─── */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-[700px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '36px' }}>
            Stop Buying Reports. Start Buying Results.
          </h2>
          <a
            href="/contact-us"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              color: '#FFFFFF',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              padding: '20px 48px',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            See Our Execution-First Model
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
