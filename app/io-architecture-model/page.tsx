'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlueSectionWrapper from '@/components/BlueSectionWrapper';

const advantages = [
  {
    title: 'Guaranteed Quality',
    ioResult: 'Teams are forced to remain focused on producing only their fixed, high-quality outputs. The input Quality Bar ensures a chain of consistent, reliable delivery that eliminates compounding failure.',
    whyItsBetter: 'Eliminates Compounding Failure: In Monolithic systems, poor input quality is often accepted, causing downstream teams to fix others\' mistakes. The I-O Model rejects failure at the source, guaranteeing quality throughout the chain.',
  },
  {
    title: 'Extreme Specialization',
    ioResult: 'Fixed scope allows teams to achieve deep mastery over a narrow set of functions. This enables automation of verification and quality checks, dramatically reducing human error.',
    whyItsBetter: 'Drives Reliability and Speed: Generalist teams in Monolithic systems suffer from complexity overload. I-O specialization enables rapid mastery and turns verification into automated, high-speed processes, achieving world-class quality.',
  },
  {
    title: 'Accelerated Onboarding',
    ioResult: 'New talent can rapidly master a specialized work unit contract without needing to understand the complexity of the entire Monolithic system.',
    whyItsBetter: 'Reduces Time-to-Value: Traditional systems require long, costly onboarding to navigate tangled dependencies. I-O provides a small, defined contract to master, delivering immediate productivity and enhancing long-term talent resilience.',
  },
  {
    title: 'Decisive Architecture & Intentional Exceptions',
    ioResult: 'When a team rejects an input that violates the Quality Bar (QB), the procedural gap is escalated, forcing a VP-level decision maker to choose one of three intentional outcomes:\n1. Formalize the procedure with a new I-O Contract\n2. Grant an Explicit Exception (and assume risk)\n3. Reject the problem as not worth solving and explicitly document such',
    whyItsBetter: 'Eliminates Accidental Complexity: Monolithic systems accumulate \'Institutional Inertia\' through unaddressed gaps. The I-O Model forces architecture to evolve only via conscious, high-level business decisions, preventing the accumulation of hidden technical debt.',
  },
  {
    title: 'Clear Financial Accountability',
    ioResult: 'Fixed work units allow leadership to tie operational expenses (OpEx) directly to the specific, auditable outputs of each team. This replaces generalized cost centers with transparent, unit-based cost analysis.',
    whyItsBetter: 'Transforms OpEx into Investment: General cost centers hide inefficiency. Unit Cost Modeling turns architecture into a transparent, auditable investment platform where cost is directly correlated to measurable, valuable outputs.',
  },
  {
    title: 'Mitigated Project Risk',
    ioResult: 'Since all inputs and outputs are standardized by the Architectural Contract, integration risk is minimized. Failure is contained within the unit, never spreading through the entire system.',
    whyItsBetter: 'Achieves Antifragile Architecture: Monolithic systems risk catastrophic failure when one component breaks. The I-O Model\'s structural constraint isolates failure, ensuring the overall system remains resilient and operable despite local issues.',
  },
  {
    title: 'Enhanced Governance and Audit',
    ioResult: 'The fixed boundaries of each work unit make compliance, security, and quality audit trails instantaneous and comprehensive, replacing complex, time-consuming deep-dives.',
    whyItsBetter: 'Ensures Compliance-by-Design: Auditing unbounded systems requires expensive, complex deep-dives. The I-O Model hard-codes regulatory and security requirements into the Architectural Contract, making compliance verifiable and instantaneous.',
  },
  {
    title: 'Faster Strategic Replatforming',
    ioResult: 'Decoupled I-O units can be swapped out, upgraded, or replaced independently without disrupting neighboring teams, accelerating M&A integration or technology refresh cycles.',
    whyItsBetter: 'Delivers Strategic Velocity: Monolithic systems lock organizations into legacy platforms. I-O\'s modularity allows for rapid technology pivots, accelerating M&A integration and enabling the pursuit of new market opportunities without massive debt.',
  },
];

function AdvantageShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const ROTATION_INTERVAL = 7000;

  const startRotation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % advantages.length);
    }, ROTATION_INTERVAL);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startRotation();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, startRotation]);

  const active = advantages[activeIndex];

  // Parse whyItsBetter to bold the lead phrase
  const boldSplit = active.whyItsBetter.split(': ');
  const boldLead = boldSplit[0] + ':';
  const boldRest = boldSplit.slice(1).join(': ');

  // Parse ioResult for numbered list
  const ioLines = active.ioResult.split('\n');
  const ioIntro = ioLines[0];
  const ioList = ioLines.slice(1);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ width: '100%' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '32px' }}>
        {/* Left: Tab list */}
        <div className="lg:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {advantages.map((adv, i) => (
            <button
              key={adv.title}
              onClick={() => setActiveIndex(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: activeIndex === i ? '#14358A' : '#E2E8F0',
                background: activeIndex === i ? 'rgba(20,53,138,0.08)' : '#FFFFFF',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: activeIndex === i ? 700 : 400,
                fontSize: 'clamp(12px, 1vw, 16px)',
                color: activeIndex === i ? '#14358A' : '#5F6D7E',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {adv.title}
              {activeIndex === i && !isPaused && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    background: '#14358A',
                    animation: `progressBar ${ROTATION_INTERVAL}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right: Detail panel */}
        <div className="lg:col-span-2" style={{ display: 'flex', alignItems: 'center', minHeight: '300px' }}>
          <div style={{ width: '100%' }}>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.39vw, 22px)', color: '#14358A', marginBottom: '12px' }}>
              Core I-O Model Result
            </h4>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', marginBottom: ioList.length > 0 ? '12px' : '28px' }}>
              {ioIntro}
            </p>
            {ioList.length > 0 && (
              <ol style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', marginBottom: '28px', paddingLeft: '20px', listStyleType: 'decimal' }}>
                {ioList.map((line, i) => {
                  const text = line.replace(/^\d+\.\s*/, '');
                  return <li key={i}>{text}</li>;
                })}
              </ol>
            )}

            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.39vw, 22px)', color: '#14358A', marginBottom: '12px' }}>
              Why This is Better (vs. Monolithic Architecture)
            </h4>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333' }}>
              <strong style={{ color: '#000000' }}>{boldLead}</strong> {boldRest}
            </p>
          </div>
        </div>
      </div>

      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#5F6D7E', fontStyle: 'italic', textAlign: 'center', marginTop: '24px' }}>
        Hover over the comparison to pause the rotation.
      </p>

      {/* CSS animation for the progress bar */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default function IOArchitectureModelPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-20 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '105%',
              color: '#000000',
              marginBottom: '16px',
            }}
          >
            The Input-Output Model of Enterprise Architecture
          </p>
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
            The Architecture of Predictability
          </h1>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: 'min(900px, 95%)',
            }}
          >
            The I-O Model is our proprietary engineering framework that solves systemic
            inconsistency and technical debt by fundamentally reimagining how
            organizational units interact. This architectural blueprint delivers verifiable,
            consistent quality by transforming operational costs into reliable, auditable
            efficiency gains.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Traditional vs I-O Architecture ─── */}
      <BlueSectionWrapper style={{ padding: '96px 24px' }}>

        <div className="max-w-[960px] mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Traditional Monolithic Architecture<br />versus<br />Input-Output Architecture
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.22vw, 17.6px)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 'min(680px, 95%)',
              marginBottom: '56px',
            }}
          >
            Most organizations are unintentionally designed for failure. Their internal structure
            creates critical flaws, which the I-O Model is designed to solve.
          </p>

          {/* Comparison rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            {[
              {
                problem: {
                  title: '1. Undefined Team Scope (The Boundary Problem)',
                  icon: '/icons/cards/target.svg',
                  body: 'Teams operate with flexible, general mandates, leading to vague boundaries, overlapping responsibilities, and constant internal friction. No clear line exists between a team\'s mandate and its limitations.',
                  risk: 'Risk: Misallocation of Resources: Teams waste time fixing problems outside their core competency, diverting capital and expertise from strategic initiatives.',
                },
                solution: {
                  title: 'Defined Inputs, WorkUnits, & Outputs.',
                  icon: '/icons/cards/funds.svg',
                  body: 'The Architectural Contract forces teams to define their function around only what they accept (Input) and what they guarantee to deliver (Output), allowing them to define exactly how to achieve this (the WorkUnit).',
                  benefit: 'Benefit: Eliminates Ambiguity: Instantly defines clear interfaces between teams, preventing scope creep and ensuring transparent accountability.',
                },
              },
              {
                problem: {
                  title: '2. Procedural Drift (The Process Problem)',
                  icon: '/icons/cards/funds.svg',
                  body: 'Workflows, error handling, and quality checks are treated as soft guidelines. Processes drift based on individual discretion or urgency, making results inconsistent and prohibiting reliable automation.',
                  risk: 'Risk: Systemic Inconsistency: Without an immutable process, products and services vary widely in quality, eroding customer trust and inflating operational overhead.',
                },
                solution: {
                  title: 'Codified, Regularized Processes',
                  icon: '/icons/cards/phone.svg',
                  body: 'The I-O Contract mandates an immutable internal workflow for processing inputs into outputs, ensuring results are always consistent.',
                  benefit: 'Benefit: Enables Automation: Process stability allows for automated verification, dramatically reducing human error and scaling quality control.',
                },
              },
              {
                problem: {
                  title: '3. Irregular Outputs (The Quality Problem)',
                  icon: '/icons/cards/phone.svg',
                  body: 'Deliverables from one team are undefined, unquantifiable, or irregular. Downstream teams are forced to expend significant effort adapting to or fixing unpredictable inputs.',
                  risk: 'Risk: Cascading Failure: An undefined output at Team A becomes an integration error at Team B, which then results in a massive customer failure at Team C. The system amplifies low-level errors into high-level crises.',
                },
                solution: {
                  title: 'The Verifiable Quality Bar',
                  icon: '/icons/cards/target.svg',
                  body: 'An explicit standard applied to both incoming and outgoing deliverables. Both the delivering team and the receiving team need the deliverable to pass; otherwise, it is rejected and returned for resolution. This allows for each team to know what is expected and to guarantee success or failure for each deliverable.',
                  benefit: 'Benefit: Guarantees Quality Chain: Breaks the cycle of compounding failure. Rejection forces resolution upstream, ensuring quality is maintained across the entire organizational flow.',
                },
              },
              {
                problem: {
                  title: '4. Undocumented Fixes (The Hero Problem)',
                  icon: '/icons/cards/retro-bag.svg',
                  body: 'Organizational gaps and input rejections are often picked up by an unofficial Single Point of Failure (SPOF) person who manually patches the workflow, bypassing formal processes and logging.',
                  risk: 'Risk: Unaccounted Risk: This creates immense, unquantifiable technical debt. Leadership does not know how many fixes exist, who owns them, or what systemic flaws they are masking, leading to sudden, catastrophic failure upon the hero\'s absence.',
                },
                solution: {
                  title: 'Consistent Architecture & Intentional Exceptions',
                  icon: '/icons/cards/efferent-three.svg',
                  body: 'Any item that is not an input in the I-O map is escalated. An executive-level decision maker must intentionally choose to: Formalize the procedure with a new I-O Contract, Grant an Explicit Exception (and action the item themselves), or Reject the problem as not worth solving and explicitly document such.',
                  benefit: 'Benefit: Eliminates Accidental Debt: Architecture only evolves via conscious, high-level business decisions, eliminating \'Institutional Inertia\' and preventing accidental complexity from accumulating.',
                },
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '20px' }}>
                {/* Left — Problem box (red.png as full background) */}
                <div style={{ backgroundColor: '#FFF5F5', backgroundImage: 'url(/red.png)', backgroundSize: 'cover', backgroundPosition: 'top center', overflow: 'hidden', borderRadius: '16px', textAlign: 'center', width: '100%', minHeight: '382px', padding: '32px 28px', boxSizing: 'border-box' }}>
                    <div style={{ width: '56px', height: '56px', background: '#D0021B', borderRadius: '12px', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src={row.problem.icon} alt="" width={28} height={28} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', color: '#D0021B', marginBottom: '12px', lineHeight: '1.4' }}>{row.problem.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.7', color: '#333333', marginBottom: '10px' }}>{row.problem.body}</p>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(10px, 0.83vw, 14px)', lineHeight: '1.7', color: '#5F6D7E' }}>{row.problem.risk}</p>
                </div>
                {/* Right — Solution box (blue.png as full background) */}
                <div style={{ backgroundColor: '#EBF3FF', backgroundImage: 'url(/blue.png)', backgroundSize: 'cover', backgroundPosition: 'top center', overflow: 'hidden', borderRadius: '16px', textAlign: 'center', width: '100%', minHeight: '382px', padding: '32px 28px', boxSizing: 'border-box' }}>
                    <div style={{ width: '56px', height: '56px', background: '#14358A', borderRadius: '12px', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src={row.solution.icon} alt="" width={28} height={28} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', color: '#14358A', marginBottom: '12px', lineHeight: '1.4' }}>{row.solution.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.7', color: '#333333', marginBottom: '10px' }}>{row.solution.body}</p>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(10px, 0.83vw, 14px)', lineHeight: '1.7', color: '#5F6D7E' }}>{row.solution.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlueSectionWrapper>

      {/* ─── Section 3: Consistency Through Constraint & Intentionality ─── */}
      <section className="w-full py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-[1100px] mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', letterSpacing: '0.06em', color: '#14358A', marginBottom: '12px' }}>Key Structural Advantages</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '16px' }}>
              Consistency Through Constraint &amp; Intentionality
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', maxWidth: 'min(720px, 95%)', margin: '0 auto' }}>
              The rigor of the I-O Model is not restrictive, it is empowering. It removes the guesswork from cross-functional collaboration and delivers measurable business value.
            </p>
          </div>
          <AdvantageShowcase />
        </div>
      </section>

      {/* ─── Section 4: Implementation Steps ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', textAlign: 'center', marginBottom: '56px' }}>
            How We Implement the I-O Model
          </h2>

          {(() => {
            const steps = [
              {
                title: 'Step 1: Diagnostic & Value Stream Mapping',
                body: 'We conduct a deep-dive analysis of your current operational workflows to identify the core processes that constitute ~80% of a team\'s regular work. This involves mapping key value streams, dependencies, and critical pain points where ambiguity creates systemic drag.',
                objective: 'Create a comprehensive list of \'actions\' each team performs, identify their mandatory inputs and their sources, and define what a \'perfect\' output would look like.',
              },
              {
                title: 'Step 2: Define Core Work Units & Quality Bars',
                body: 'We work with your teams to deconstruct complex processes into discrete, Fixed-Scope Work Units. For each unit, we collaboratively define the precise Inputs, Outputs, and explicit Quality Bars (QBs) that will govern them.',
                objective: 'Map all required inputs and their sources, establish minimum acceptable input criteria (forming the Quality Bar baseline), and determine how inputs are regularized into consistent outputs.',
              },
              {
                title: 'Step 3: Architect the I-O Contracts',
                body: 'Our experts codify these definitions into formal Architectural Contracts. This blueprint makes relationships, responsibilities, and quality standards between teams immutable and transparent.',
                objective: 'Formalize the mapping from Step 2 into actionable contracts by establishing formal Input/Output Quality Bars and defining the Work Units that transform inputs into outputs. These are living documents designed to cover ~80% of a team\'s work and are updated as requirements evolve.',
              },
              {
                title: 'Step 4: Phased Rollout & Automation',
                body: 'We manage a structured implementation, beginning with pilot teams where inputs are least controlled, typically customer-facing functions like inbound sales or support. This establishes baseline inputs for downstream teams. As processes stabilize, we introduce automation for Quality Bar verification.',
                objective: 'Create a controlled deployment that builds system integrity from the ground up, then automate verification to shift human oversight from routine checks to strategic optimization.',
              },
              {
                title: 'Step 5: Enterprise-Wide Scaling & System Integration',
                body: 'Once the pilot stabilizes, we systematically propagate the I-O framework across interdependent teams, using established contracts as the foundation for upstream and downstream integration. This creates a cascading architecture where each team\'s verified outputs become the guaranteed inputs for the next.',
                objective: 'Transform isolated improvements into a cohesive enterprise operating system by connecting work units into reliable value streams, ensuring quality compounds rather than degrades across organizational boundaries.',
              },
            ];
            const stepIcons = [
              /* Search */
              <svg key="s1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
              /* Pencil */
              <svg key="s2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>,
              /* Chevron-right */
              <svg key="s3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
              /* Gear */
              <svg key="s4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
              /* TrendingUp */
              <svg key="s5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
            ];
            return (
              <div style={{ position: 'relative' }}>
                {/* Dashed vertical line */}
                <div style={{ position: 'absolute', left: '26px', top: '26px', bottom: '26px', width: '0', borderLeft: '2px dashed rgba(20,53,138,0.35)', zIndex: 0 }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                  {steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                      {/* Icon circle */}
                      <div style={{ flexShrink: 0, width: '52px', height: '52px', borderRadius: '50%', background: '#FFFFFF', border: '2px solid #14358A', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                        {stepIcons[i]}
                      </div>
                      {/* Content */}
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', color: '#14358A', marginBottom: '10px', lineHeight: '1.3' }}>{step.title}</h3>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', marginBottom: '16px' }}>{step.body}</p>
                        {/* Objective box */}
                        <div style={{ background: '#F5F7FA', borderRadius: '8px', padding: '16px 20px' }}>
                          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em', color: '#14358A', textTransform: 'uppercase', marginBottom: '8px' }}>Objective</p>
                          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.7', color: '#5F6D7E' }}>{step.objective}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─── Section 5: The Blueprint for Scale ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '20px' }}>
            The Blueprint for Scale
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', color: '#333333', maxWidth: 'min(1000px, 95%)', margin: '0 auto 40px auto' }}>
            The I-O Model functions as an organizational operating system. Interfacing teams understand exactly what input and output quality is expected. Procedural gaps trigger immediate escalation. And exceptions follow a defined path requiring high-level strategic review.
          </p>
        </div>
      </section>

      {/* ─── Section 7: Core Concepts of the I-O Model ─── */}
      <section className="w-full py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '40px' }}>
            Core Concepts of the I-O Model
          </h2>
          {(() => {
            const concepts = [
              { title: 'Architectural Contract', desc: 'Immutable specifications defining work unit boundaries, inputs, and guaranteed outputs.' },
              { title: 'Fixed-Scope Work Unit', desc: 'Discrete capabilities defined by specific inputs and guaranteed outputs.' },
              { title: 'Quality Bar (QB)', desc: 'Explicit, measurable standards that every output must meet for acceptance.' },
              { title: 'Decoupling', desc: 'Minimizing interdependency between units to enable independent scaling and evolution.' },
              { title: 'Antifragile Architecture', desc: 'Failures are isolated to prevent cascading system failure across the enterprise.' },
            ];
            const renderCard = (concept: { title: string; desc: string }) => (
              <div key={concept.title} style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px', background: '#FFFFFF' }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', color: '#14358A', marginBottom: '12px' }}>{concept.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>{concept.desc}</p>
              </div>
            );
            return (
              <>
                {/* Row 1: 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {concepts.slice(0, 3).map(renderCard)}
                </div>
                {/* Row 2: 2 cards, centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" style={{ maxWidth: '67%', margin: '24px auto 0' }}>
                  {concepts.slice(3).map(renderCard)}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ─── Section 8: CTA ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '16px' }}>
            Architect Your Antifragile Advantage.
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', color: '#333333', marginBottom: '32px' }}>
            Stop building on foundations that cannot scale. Let our team design the I-O Architecture your enterprise needs to eliminate systemic risk and unlock exponential growth.
          </p>
          <a href="/contact-us" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', padding: '16px 40px', borderRadius: '10px', textDecoration: 'none' }}>
            Request a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
