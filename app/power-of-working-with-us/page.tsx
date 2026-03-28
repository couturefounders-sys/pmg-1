'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ROIChart from '@/components/ROIChart';

export default function PowerOfWorkingWithUs() {
  const blueprintSteps = [
    'Expert Deep Dive',
    'C2 Spec Created',
    'Anonymous QA Review',
    'Approved Strategic Blueprint',
    'Client Implementation Begins',
  ];

  const clientQuotePool = [
    '"Implementation support wasn\'t just an afterthought — it was baked into every recommendation."',
    '"Solutions ignored organizational culture and change management entirely."',
    '"We got recommendations, not results."',
    '"Rigid frameworks slowed down real decision-making."',
    '"The strategy was polished, but nobody owned execution after kickoff."',
    '"We paid for a framework that looked identical to what our competitors got."',
    '"The engagement ended exactly when implementation risk started."',
    '"The recommendations did not account for our operating constraints."',
  ];

  const loudConsultingProblems = [
    {
      title: 'Overpriced and Under-Delivering',
      description:
        'Activity over outcomes: endless hours billed and high fees justified by activity, not measurable delivered outcomes.',
    },
    {
      title: 'Recommendations Without Realism',
      description:
        'Ideas that sound good in slides but fail in practice because they ignore your operating realities.',
    },
    {
      title: 'Implementation Chaos',
      description:
        'Solutions that look compelling in presentations but collapse in real execution, leaving teams with confusion and rework.',
    },
    {
      title: 'Generic Advice, Not Expert Solutions',
      description:
        'Recycled playbooks instead of expert diagnosis and tailored strategy for your specific context.',
    },
    {
      title: 'No Capability Transfer',
      description:
        'Teams are left dependent on external consultants instead of building internal capability and repeatable execution muscle.',
    },
    {
      title: 'Misaligned Incentives',
      description:
        'Commercial models reward extended activity and scope creep rather than measurable business outcomes.',
    },
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
  const [visibleQuoteCards, setVisibleQuoteCards] = useState(() =>
    Array.from({ length: 4 }, (_, i) => clientQuotePool[i % clientQuotePool.length])
  );
  const [quoteCardVisible, setQuoteCardVisible] = useState([true, true, true, true]);
  const [highlightedQuoteSlot, setHighlightedQuoteSlot] = useState(0);
  const [isLoudPaused, setIsLoudPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextQuotePoolIdxRef = useRef(4 % clientQuotePool.length);
  const quoteSlotRef = useRef(0);
  const LOUD_QUOTE_FADE_OUT_MS = 1500;
  const LOUD_QUOTE_FADE_IN_MS = 1500;
  const LOUD_QUOTE_GAP_MS = 500;

  const staticProblemCards = loudConsultingProblems.slice(0, 4);

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

  useEffect(() => {
    if (isLoudPaused) return;

    let fadeOutTimeout: ReturnType<typeof setTimeout> | null = null;
    let fadeInStartTimeout: ReturnType<typeof setTimeout> | null = null;
    let nextCycleTimeout: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const runQuoteCycle = () => {
      const slot = quoteSlotRef.current;

      setQuoteCardVisible(prev => prev.map((visible, i) => (i === slot ? false : visible)));

      fadeOutTimeout = setTimeout(() => {
        if (cancelled) return;

        setVisibleQuoteCards(prev => {
          const next = [...prev];
          next[slot] = clientQuotePool[nextQuotePoolIdxRef.current];
          return next;
        });

        nextQuotePoolIdxRef.current = (nextQuotePoolIdxRef.current + 1) % clientQuotePool.length;
        setHighlightedQuoteSlot(slot);

        // Start fade-in on the next tick so the browser applies the swapped content first.
        fadeInStartTimeout = setTimeout(() => {
          if (cancelled) return;
          setQuoteCardVisible(prev => prev.map((visible, i) => (i === slot ? true : visible)));
        }, 20);

        quoteSlotRef.current = (slot + 1) % 4;

        nextCycleTimeout = setTimeout(() => {
          if (!cancelled) runQuoteCycle();
        }, LOUD_QUOTE_FADE_IN_MS + LOUD_QUOTE_GAP_MS);
      }, LOUD_QUOTE_FADE_OUT_MS);
    };

    runQuoteCycle();

    return () => {
      cancelled = true;
      if (fadeOutTimeout) clearTimeout(fadeOutTimeout);
      if (fadeInStartTimeout) clearTimeout(fadeInStartTimeout);
      if (nextCycleTimeout) clearTimeout(nextCycleTimeout);
    };
  }, [
    isLoudPaused,
    clientQuotePool.length,
    LOUD_QUOTE_FADE_OUT_MS,
    LOUD_QUOTE_FADE_IN_MS,
    LOUD_QUOTE_GAP_MS,
  ]);

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
              marginBottom: '40px',
            }}
          >
            But here is where we differ: that expert&apos;s blueprint is then submitted to our
            internal Quality Assurance panel, a separate group of peer executives and
            functional leaders. The review is double-blind. The designer does not know the
            reviewer, and the reviewer does not know the designer.
          </p>

          <div className="w-full overflow-x-auto pb-2 mb-14">
            <div className="w-max min-w-full mx-auto flex items-center justify-center gap-3 flex-nowrap px-1">
              {blueprintSteps.map((step, index) => {
                const isActive = step === 'Anonymous QA Review';

                return (
                  <div key={step} className="flex items-center gap-3 flex-none">
                    <div
                      style={{
                        border: isActive ? '2px solid #1E2F8C' : '1px solid #C9CCD3',
                        borderRadius: '12px',
                        padding: '12px 20px',
                        background: '#FFFFFF',
                        minHeight: '52px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: isActive ? 700 : 600,
                          fontSize: 'clamp(14px, 0.95vw, 17px)',
                          color: isActive ? '#1E2F8C' : '#6B7280',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {step}
                      </span>
                    </div>
                    {index < blueprintSteps.length - 1 && (
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 700,
                          fontSize: '28px',
                          lineHeight: 1,
                          color: '#1E2F8C',
                        }}
                      >
                        &rarr;
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

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
              marginBottom: '36px',
              maxWidth: 'min(1320px, 95%)',
            }}
          >
            Too often, consulting is the opposite: loud, costly, and ineffective. And it
            is not just our view. It is well documented across industries.
          </p>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(12px, 0.95vw, 15px)',
              color: '#6B7280',
              marginBottom: '18px',
            }}
          >
            Auto-cycling quotes · Hover to pause
          </p>

          {/* Client Quotes */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px] mb-14"
            onMouseEnter={() => setIsLoudPaused(true)}
            onMouseLeave={() => setIsLoudPaused(false)}
          >
            {visibleQuoteCards.map((quote, i) => (
              <div
                key={`${quote}-${i}`}
                style={{
                  border: i === highlightedQuoteSlot ? '3px solid #14358A' : '2px solid #A8B6E4',
                  borderRadius: '14px',
                  padding: '34px 40px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: quoteCardVisible[i] ? 1 : 0,
                  boxShadow: i === highlightedQuoteSlot ? '0 12px 24px rgba(20,53,138,0.16)' : '0 8px 16px rgba(20,53,138,0.08)',
                  transition: `opacity ${LOUD_QUOTE_FADE_OUT_MS}ms ease-in-out, border ${LOUD_QUOTE_FADE_OUT_MS}ms ease, box-shadow ${LOUD_QUOTE_FADE_OUT_MS}ms ease`,
                }}
              >
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(13px, 1.25vw, 20px)',
                    lineHeight: '1.6',
                    color: i === highlightedQuoteSlot ? '#14358A' : '#36519F',
                    fontStyle: 'italic',
                    margin: 0,
                    textAlign: 'center',
                    transition: 'color 0.45s ease',
                  }}
                >
                  {quote}
                </p>
              </div>
            ))}
          </div>

          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.5vw, 40px)',
              lineHeight: '110%',
              letterSpacing: '-0.02em',
              color: '#14358A',
              marginBottom: '28px',
            }}
          >
            &ldquo;Loud&rdquo; consultants are mostly known for&hellip;
          </h3>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            onMouseEnter={() => setIsLoudPaused(true)}
            onMouseLeave={() => setIsLoudPaused(false)}
          >
            {staticProblemCards.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                style={{
                  background: '#FFF7F7',
                  border: '2px solid #F5C2C7',
                  borderRadius: '14px',
                  padding: '30px',
                  textAlign: 'left',
                  boxShadow: '0 6px 14px rgba(198,40,40,0.08)',
                  transition: 'all 0.45s ease',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 1.8vw, 30px)',
                    lineHeight: '110%',
                    color: '#C62828',
                    marginBottom: '12px',
                    transition: 'color 0.45s ease',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.02vw, 17px)',
                    lineHeight: '150%',
                    color: '#5F6D7E',
                    margin: 0,
                  }}
                >
                  {item.description}
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
        <div className="max-w-[min(1200px,_96%)] mx-auto flex flex-col items-center text-center">
          {/* Formula row */}
          <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '4px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'nowrap', justifyContent: 'center', width: 'max-content', minWidth: '100%', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                <img src="/56.png" alt="Proprietary Models" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', lineHeight: '105%', color: '#14358A' }}>3</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 1vw, 16px)', lineHeight: '140%', color: '#68718B', whiteSpace: 'nowrap' }}>Proprietary Models</span>
                </div>
              </div>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', color: '#14358A', flexShrink: 0 }}>+</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                <img src="/67.png" alt="Proven Frameworks" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', lineHeight: '105%', color: '#14358A' }}>8</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 1vw, 16px)', lineHeight: '140%', color: '#68718B', whiteSpace: 'nowrap' }}>Proven Frameworks</span>
                </div>
              </div>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 40px)', color: '#14358A', flexShrink: 0 }}>=</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#EEF2FF', borderRadius: '999px', padding: '14px 28px', flexShrink: 0 }}>
                <img src="/78.png" alt="The Right Solution" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.25vw, 20px)', color: '#14358A', whiteSpace: 'nowrap' }}>The Right Solution, Every Time.</span>
              </div>
            </div>
          </div>

          {/* Philosophy box */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '36px 40px', textAlign: 'left', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2vw, 36px)', lineHeight: 1, color: '#14358A', flexShrink: 0 }}>&#9675;</span>
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
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '20px' }}>
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
            <div style={{ border: '2px solid #BFD0F0', borderRadius: '16px', padding: 'clamp(24px, 2.78vw, 40px)', backgroundColor: '#EEF3FB' }}>
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
