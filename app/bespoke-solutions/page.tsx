import Header from '@/components/Header';
import Image from 'next/image';

export default function BespokeSolutions() {
  const steps = [
    {
      icon: '/bespoke-icon-1.png',
      step: 'Step 1: The Diagnostic',
      description:
        'We perform a comprehensive analysis to identify the root causes of your challenges, not just the symptoms.',
    },
    {
      icon: '/bespoke-icon-2.png',
      step: 'Step 2: Tool Selection & Architecture',
      description:
        'Based on our findings, we architect a solution using the most appropriate tool. This could be one of our proprietary models, a proven industry framework, or a completely custom approach.',
    },
    {
      icon: '/bespoke-icon-3.png',
      step: 'Step 3: Transparent Rationale & Blueprint',
      description:
        'We present you with a complete strategic blueprint, including a clear rationale for why the chosen approach is the optimal path to achieve your specific goals.',
    },
    {
      icon: '/icon-check-correct.png',
      step: 'Step 4: Client Approval Before Engagement',
      description:
        'You review the complete, validated plan. An engagement only begins once you have full confidence in the strategy and the measurable outcomes we\'ve defined together.',
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-32 pb-16 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

          {/* Eyebrow Label */}
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Bespoke Solutions
          </p>

          {/* Main Heading */}
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '50px',
              lineHeight: '46px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '32px',
              maxWidth: '900px',
            }}
          >
            Solving Your Most Important Problem (MIP)
          </h1>

          {/* Sub-paragraph */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              marginBottom: '48px',
              maxWidth: '860px',
            }}
          >
            When you face challenges that off-the-shelf solutions can&apos;t fix, you need a partner
            who architects strategy from first principles. Our Bespoke Consulting services deliver
            tangible, project-based outcomes by crafting a plan meticulously aligned with your vision.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '339px',
              height: '65px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              color: '#FFFFFF',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Begin Your Transformation
          </a>
        </div>
      </section>

      {/* ─── Section 2: Tool-Agnostic, Diagnosis-First ─── */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

          {/* Section Heading */}
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#14358A',
              marginBottom: '28px',
            }}
          >
            Tool-Agnostic, Diagnosis-First
          </h2>

          {/* Section Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '160%',
              letterSpacing: '0%',
              color: '#333333',
              maxWidth: '900px',
              marginBottom: '60px',
            }}
          >
            We don&apos;t sell pre-packaged solutions; we solve specific, high-stakes problems. Our approach is
            tool-agnostic, meaning we diagnose your unique challenge first, then architect the right approach
            to deliver a concrete, project-based outcome. This might involve our proprietary models, a proven
            industry framework, or a completely custom-built strategy.
          </p>

          {/* Step Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '32px 24px',
                  minHeight: '338px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                {/* Icon Box */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '10px',
                    backgroundColor: '#14358A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={step.icon}
                    alt={step.step}
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '130%',
                    color: '#14358A',
                    marginBottom: '16px',
                  }}
                >
                  {step.step}
                </h3>

                {/* Step Description */}
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '160%',
                    color: '#333333',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: The Blueprint-First Approach ─── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)',
          padding: '80px 24px',
        }}
      >
        {/* component-10.png — full-cover decorative overlay */}
        <img
          src="/component-10.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        />

        <div className="max-w-[1100px] mx-auto relative" style={{ zIndex: 1 }}>
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '38px',
              lineHeight: '115%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '28px',
            }}
          >
            The Blueprint–First Approach
          </h2>

          {/* Sub-description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '165%',
              color: '#FFFFFF',
              textAlign: 'center',
              maxWidth: '780px',
              margin: '0 auto 52px auto',
            }}
          >
            The most critical work happens before you commit to the full engagement. We invest our
            expertise upfront to ensure we&apos;re aligned on a validated plan that guarantees a
            specific outcome. You see the full blueprint before the project begins.
          </p>

          {/* Two-column layout: bullet list + advantage box */}
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">

            {/* Left: bullet list */}
            <div className="flex flex-col gap-8 flex-1">

              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src="/bespoke-arrow.png" alt="arrow" width={28} height={20} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: '#FFFFFF', marginBottom: '8px' }}>
                    Deep-Dive Analysis
                  </h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '160%', color: '#FFFFFF', maxWidth: '520px' }}>
                    A PMG functional expert performs a thorough analysis to isolate the true root
                    causes of your challenge, moving beyond surface-level symptoms.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src="/bespoke-arrow.png" alt="arrow" width={28} height={20} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: '#FFFFFF', marginBottom: '8px' }}>
                    Tailored Solution Architecture
                  </h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '160%', color: '#FFFFFF', maxWidth: '520px' }}>
                    We design a high-level solution blueprint, selecting the optimal tools and
                    methodologies for your specific context.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src="/bespoke-arrow.png" alt="arrow" width={28} height={20} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: '#FFFFFF', marginBottom: '8px' }}>
                    Internal Peer Validation
                  </h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '160%', color: '#FFFFFF', maxWidth: '520px' }}>
                    Our internal, double-blind QA process stress-tests the proposed strategy,
                    ensuring it&apos;s robust, logical, and free from individual bias.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src="/bespoke-arrow.png" alt="arrow" width={28} height={20} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: '#FFFFFF', marginBottom: '8px' }}>
                    Transparent Blueprint Delivery
                  </h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '160%', color: '#FFFFFF', maxWidth: '520px' }}>
                    We present the validated blueprint to you. The full engagement only moves forward
                    once you have confidence in the plan and its expected outcomes.
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Your Advantage box — component-12 background */}
            <div
              className="flex-shrink-0 relative"
              style={{
                width: '514px',
                minHeight: '188px',
                alignSelf: 'center',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/component-12.png"
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                style={{ padding: '36px 32px', zIndex: 1 }}
              >
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '22px', color: '#14358A', marginBottom: '12px' }}>
                  Your Advantage:
                </h4>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: '160%', color: '#333333' }}>
                  Clarity before commitment. You invest in a pre-vetted execution plan, not just a
                  consultant&apos;s time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ─── Section 4: Our Bespoke Consulting Process ─── */}
      <section className="w-full bg-white pt-20 pb-0 overflow-hidden">
        {/* Header text */}
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-center text-center mb-10">
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '46px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            Our Bespoke Consulting Process
          </h2>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '130%',
              color: '#2563EB',
              marginBottom: '20px',
            }}
          >
            A proven journey to unlock sustainable growth.
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '28px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '860px',
            }}
          >
            It all starts here. We begin by aligning with your vision, establishing clear, measurable
            goals, and setting the stage for a successful partnership.
          </p>
        </div>

        {/* Wave + phases layout */}
        <div className="relative w-full" style={{ minHeight: '500px' }}>

          {/* Wave image — full width, positioned in the vertical middle */}
          <div
            className="absolute left-0 right-0"
            style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 0 }}
          >
            <Image
              src="/bespoke-wave.png"
              alt="process wave"
              width={1440}
              height={220}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Four phases overlay */}
          <div
            className="relative max-w-[1300px] mx-auto px-6 grid grid-cols-4 gap-0"
            style={{ zIndex: 1 }}
          >

            {/* Phase 1 — TOP */}
            <div className="flex flex-col items-center" style={{ paddingBottom: '20px' }}>
              <div
                style={{
                  maxWidth: '220px',
                  textAlign: 'center',
                  paddingBottom: '32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '32px',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Phase 1: Deep Dive &amp; Discovery
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                    marginBottom: '8px',
                  }}
                >
                  We start by understanding your unique landscape.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                  }}
                >
                  Our experts partner with your team for an in-depth exploration of your operations,
                  culture, and challenges. This is where we gather the essential insights that lay the
                  foundation for a truly customized strategy aligned with your vision.
                </p>
              </div>
              {/* Dot on wave */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)',
                  border: '4px solid white',
                  boxShadow: '0 2px 8px rgba(20,53,138,0.3)',
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Phase 2 — BOTTOM */}
            <div className="flex flex-col items-center justify-end">
              {/* Dot on wave */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)',
                  border: '4px solid white',
                  boxShadow: '0 2px 8px rgba(20,53,138,0.3)',
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  maxWidth: '220px',
                  textAlign: 'center',
                  paddingTop: '32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '32px',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Phase 2: Strategic Blueprint
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                    marginBottom: '8px',
                  }}
                >
                  We design your tailored plan for success.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                  }}
                >
                  Using the insights from our discovery, we design a comprehensive, actionable plan.
                  This blueprint is precisely tailored to address your challenges, capitalize on
                  opportunities, and deliver on the goals we&apos;ve set together.
                </p>
              </div>
            </div>

            {/* Phase 3 — TOP */}
            <div className="flex flex-col items-center" style={{ paddingBottom: '20px' }}>
              <div
                style={{
                  maxWidth: '220px',
                  textAlign: 'center',
                  paddingBottom: '32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '32px',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Phase 3: Focused Implementation
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                    marginBottom: '8px',
                  }}
                >
                  We put the plan into action with precision.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                  }}
                >
                  A strategy is only as good as its execution. In this phase, our team works
                  diligently alongside yours to bring the blueprint to life, ensuring smooth
                  integration and adapting as needed based on real-time feedback and results.
                </p>
              </div>
              {/* Dot on wave */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)',
                  border: '4px solid white',
                  boxShadow: '0 2px 8px rgba(20,53,138,0.3)',
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Phase 4 — BOTTOM */}
            <div className="flex flex-col items-center justify-end">
              {/* Dot on wave */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)',
                  border: '4px solid white',
                  boxShadow: '0 2px 8px rgba(20,53,138,0.3)',
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  maxWidth: '220px',
                  textAlign: 'center',
                  paddingTop: '32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '32px',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Phase 4: Sustain &amp; Optimize
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                    marginBottom: '8px',
                  }}
                >
                  We measure impact to ensure long-term success.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#5F5F5F',
                  }}
                >
                  Our partnership doesn&apos;t end at launch. We continuously monitor outcomes, using
                  data to evaluate what&apos;s working and proactively identifying areas for
                  refinement. This ensures your business is positioned for sustained excellence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 5: Common Project Types ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                color: '#14358A',
                marginBottom: '24px',
              }}
            >
              Common Project Types
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: '140%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
                maxWidth: '820px',
              }}
            >
              While every project is bespoke, they often fall into one of four core problem
              categories. Our approach is to deploy the right team of functional experts to solve
              these specific types of high-stakes challenges.
            </p>
          </div>

          {/* Row 1 — icon LEFT, text RIGHT */}
          <div className="flex flex-row items-center gap-12 mb-16">
            {/* Icon */}
            <div
              className="flex-shrink-0"
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/bespoke-proj-1.png" alt="Operational Turnarounds" width={100} height={100} style={{ objectFit: 'contain' }} />
            </div>
            {/* Text */}
            <div className="flex flex-col" style={{ textAlign: 'right', flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                  marginBottom: '16px',
                }}
              >
                Operational Turnarounds &amp; Scaling
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                For when core systems are broken or unable to scale. We diagnose the root cause of
                operational drag, redesign core processes, and manage the turnaround to restore
                efficiency and enable growth.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '23px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#333333',
                }}
              >
                Example Engagements: Rescuing a $32M support operation (Trilogy), streamlining
                enterprise architecture (Artemis Capital).
              </p>
            </div>
          </div>

          {/* Row 2 — text LEFT, icon RIGHT */}
          <div className="flex flex-row items-center gap-12 mb-16">
            {/* Text */}
            <div className="flex flex-col" style={{ textAlign: 'left', flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                  marginBottom: '16px',
                }}
              >
                M&amp;A Integration &amp; Carve-Outs
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                For complex post-merger integrations or strategic divestitures. We manage the
                intricate process of combining or separating systems, cultures, and operations to
                maximize value and minimize disruption.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '23px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#333333',
                }}
              >
                Example Engagements: Resolving post-acquisition technical debt and customer churn
                (Avolin), strategic divestitures.
              </p>
            </div>
            {/* Icon */}
            <div
              className="flex-shrink-0"
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/bespoke-proj-2.png" alt="M&A Integration" width={100} height={100} style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Row 3 — icon LEFT, text RIGHT */}
          <div className="flex flex-row items-center gap-12 mb-16">
            {/* Icon */}
            <div
              className="flex-shrink-0"
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/bespoke-proj-3.png" alt="Growth & Market Entry" width={100} height={100} style={{ objectFit: 'contain' }} />
            </div>
            {/* Text */}
            <div className="flex flex-col" style={{ textAlign: 'right', flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                  marginBottom: '16px',
                }}
              >
                M&amp;A Integration &amp; Carve-Outs
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                For complex post-merger integrations or strategic divestitures. We manage the
                intricate process of combining or separating systems, cultures, and operations to
                maximize value and minimize disruption.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '23px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#333333',
                }}
              >
                Example Engagements: Resolving post-acquisition technical debt and customer churn
                (Avolin), strategic divestitures.
              </p>
            </div>
          </div>

          {/* Row 4 — text LEFT, icon RIGHT */}
          <div className="flex flex-row items-center gap-12">
            {/* Text */}
            <div className="flex flex-col" style={{ textAlign: 'left', flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                  marginBottom: '16px',
                }}
              >
                Complex Systems &amp; Architecture
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                For when your technology or data architecture is a barrier to growth. We deconstruct
                monolithic systems, eliminate data silos, and design scalable, I-O based
                architectures that provide a foundation for future innovation.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '23px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#333333',
                }}
              >
                Example Engagements: Unifying enterprise data silos (Artemis Capital), redesigning
                legacy platforms.
              </p>
            </div>
            {/* Icon */}
            <div
              className="flex-shrink-0"
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/bespoke-proj-4.png" alt="Complex Systems" width={100} height={100} style={{ objectFit: 'contain' }} />
            </div>
          </div>

        </div>
      </section>

      {/* ─── Section 6: How We Ensure Accountability ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '10px',
              }}
            >
              How We Ensure Accountability
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '20px',
              }}
            >
              (And How You Measure Our Success)
            </p>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '150%',
                color: '#333333',
                maxWidth: '700px',
                textAlign: 'center',
              }}
            >
              Our partnerships are built on a foundation of transparency and measurable outcomes.
              We don&apos;t just promise results; we provide concrete mechanisms to ensure we deliver
              them.
            </p>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

            {/* Card 1 */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: '10px',
                padding: '28px 24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  backgroundColor: '#14358A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Image src="/icon-vector-9.png" alt="Transparent Success Metrics" width={28} height={28} style={{ objectFit: 'contain' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '130%',
                  color: '#14358A',
                }}
              >
                Transparent Success Metrics
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#333333',
                }}
              >
                Before any project begins, we work with you to define specific, measurable KPIs that
                align directly with your desired business outcomes. You know exactly what success
                looks like from day one.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: '10px',
                padding: '28px 24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  backgroundColor: '#14358A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Image src="/icon-blueprint.png" alt="Consistent Progress Reviews" width={28} height={28} style={{ objectFit: 'contain' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '130%',
                  color: '#14358A',
                }}
              >
                Consistent Progress Reviews
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#333333',
                }}
              >
                We establish a regular cadence of progress reviews, providing documented updates that
                track our performance against the agreed-upon milestones and KPIs. No ambiguity, just
                clear reporting.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: '10px',
                padding: '28px 24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  backgroundColor: '#14358A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Image src="/icon-check-correct.png" alt="Post-Engagement Success Audit" width={28} height={28} style={{ objectFit: 'contain' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '130%',
                  color: '#14358A',
                }}
              >
                Post-Engagement Success Audit
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#333333',
                }}
              >
                Our commitment extends beyond project completion. We conduct 6- and 12-month
                follow-up audits to measure the long-term impact of our work, ensuring the value we
                created is sustained and continues to grow.
              </p>
            </div>

          </div>

          {/* Result statement */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '140%',
              color: '#14358A',
              textAlign: 'center',
            }}
          >
            The Result: You get more than a consulting firm. You get a partner whose success is
            directly tied to your measurable project outcomes.
          </p>

        </div>
      </section>

      {/* ─── Section 7: How to Get Started ─── */}
      <section
        className="w-full py-20 px-6"
        style={{ backgroundColor: '#EDF2FB' }}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col items-center">

          {/* Header */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            How to Get Started
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '150%',
              color: '#333333',
              textAlign: 'center',
              maxWidth: '700px',
              marginBottom: '48px',
            }}
          >
            Our process is designed to be clear and efficient, moving from initial interest to
            impactful engagement in a matter of weeks.
          </p>

          {/* Two cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[760px] mb-14">

            {/* Card: The Discovery Call */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                padding: '28px 24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '130%',
                  color: '#14358A',
                  marginBottom: '14px',
                }}
              >
                The Discovery Call
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#333333',
                  marginBottom: '10px',
                }}
              >
                This initial 30 to 45 minute conversation is designed for mutual discovery. We&apos;ll
                discuss:
              </p>
              <ul
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '170%',
                  color: '#333333',
                  paddingLeft: '0',
                  listStyle: 'none',
                }}
              >
                <li>Your core business challenges and strategic goals.</li>
                <li>Your previous attempts to solve these problems.</li>
                <li>How PMG&apos;s Blueprint-First approach de-risks your investment in transformation.</li>
              </ul>
            </div>

            {/* Card: What to Expect */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                padding: '28px 24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '130%',
                  color: '#14358A',
                  marginBottom: '14px',
                }}
              >
                What to Expect
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#333333',
                  marginBottom: '6px',
                }}
              >
                Who should attend?
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '170%',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                To ensure a productive conversation, please include the primary decision-makers
                (e.g., CEO, COO, or Head of Operations).
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#333333',
                  marginBottom: '6px',
                }}
              >
                Typical Timeline:
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '170%',
                  color: '#333333',
                }}
              >
                Most bespoke consulting engagements begin within 2 to 4 weeks of our initial
                discovery call.
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '339px',
              height: '65px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              color: '#FFFFFF',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Let&apos;s Discuss Your Project
          </a>

        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="text-white pt-16 pb-12 px-6 relative z-20"
        style={{ background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <img
                  src="/pmg-logo-footer.png"
                  alt="PMG Logo"
                  className="object-contain"
                  style={{ width: '100px', height: 'auto' }}
                />
              </div>
            </div>

            {/* What we Do */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">What we Do</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Our Solutions</a></li>
                <li><a href="#" className="hover:text-white">Rebuilding from within</a></li>
                <li><a href="#" className="hover:text-white">Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content & Working with PMG */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-dm-sans font-bold text-xl mb-4">Our Content</h4>
                <ul className="space-y-2 font-dm-sans text-white/80">
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                  <li><a href="#" className="hover:text-white">Insights &amp; Innovations</a></li>
                  <li><a href="#" className="hover:text-white">Community Programs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-dm-sans font-bold text-xl mb-4">Working with PMG</h4>
                <ul className="space-y-2 font-dm-sans text-white/80">
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Licensing</a></li>
                </ul>
              </div>
            </div>

            {/* Our Models */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">Our Models</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Sector Convergence Model</a></li>
                <li><a href="#" className="hover:text-white">I-O Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-white">Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">Legal</h4>
              <ul className="space-y-2 font-dm-sans text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">Privacy &amp; Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">Hiring &amp; Equal Opportunity</a></li>
                <li><a href="#" className="hover:text-white">AI &amp; Data Ethics Statement</a></li>
                <li><a href="#" className="hover:text-white">Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="hover:text-white">Intellectual Property</a></li>
                <li><a href="#" className="hover:text-white">Regionalization Policy</a></li>
                <li><a href="#" className="hover:text-white">Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
