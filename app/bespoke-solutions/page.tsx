import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      icon: '/bespoke-icon-4.png',
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

          {/* Eyebrow Label — DM Sans Bold 29px, node 0:5834 */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.01vw, 33px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Bespoke Solutions
          </p>

          {/* Main Heading — Poppins SemiBold 50px, node 0:5831 */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '24px',
              maxWidth: 'min(1200px, 95%)',
            }}
          >
            Solving Your Most Important Problem (MIP)
          </h1>

          {/* Sub-paragraph — Montserrat Regular 32px, node 0:5832 */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              textAlign: 'center',
              color: '#333333',
              marginBottom: '48px',
              maxWidth: 'min(1200px, 95%)',
            }}
          >
            When you face challenges that off-the-shelf solutions can&apos;t fix, you need a partner who architects strategy from first principles. Our Bespoke Consulting services deliver tangible, project-based outcomes by crafting a plan meticulously aligned with your vision.
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
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
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
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
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
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#333333',
              maxWidth: 'min(1201px, 95%)',
              marginBottom: '60px',
            }}
          >
            We don&apos;t sell pre-packaged solutions; we solve specific, high-stakes problems. Our approach is tool-agnostic, meaning we diagnose your unique challenge first, then architect the right approach to deliver a concrete, project-based outcome. This might involve our proprietary models, a proven industry framework, or a completely custom-built strategy.
          </p>

          {/* Step Cards Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: 'clamp(16px, 1.67vw, 24px)',
                  minHeight: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon */}
                  <Image
                    src={step.icon}
                    alt={step.step}
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain', flexShrink: 0, width: 'clamp(40px, 3.33vw, 48px)', height: 'clamp(40px, 3.33vw, 48px)' }}
                  />

                  {/* Step Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 1.25vw, 20px)',
                      lineHeight: '120%',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                      margin: '3px 0 0 0',
                    }}
                  >
                    {step.step}
                  </h3>
                </div>

                {/* Step Description */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.11vw, 18px)',
                    lineHeight: '140%',
                    color: '#68718B',
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
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
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

        <div className="max-w-[min(1100px,_90%)] mx-auto relative" style={{ zIndex: 1 }}>
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
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
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '135%',
              color: '#FFFFFF',
              textAlign: 'center',
              maxWidth: 'min(1196px, 95%)',
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
            <div className="flex flex-col flex-1" style={{ maxWidth: 'min(700px, 95%)', gap: '32px' }}>

              {[
                {
                  heading: 'Deep-Dive Analysis',
                  body: 'A PMG functional expert performs a thorough analysis to isolate the true root causes of your challenge, moving beyond surface-level symptoms.',
                },
                {
                  heading: 'Tailored Solution Architecture',
                  body: 'We design a high-level solution blueprint, selecting the optimal tools and methodologies for your specific context.',
                },
                {
                  heading: 'Internal Peer Validation',
                  body: "Our internal, double-blind QA process stress-tests the proposed strategy, ensuring it's robust, logical, and free from individual bias.",
                },
                {
                  heading: 'Transparent Blueprint Delivery',
                  body: 'We present the validated blueprint to you. The full engagement only moves forward once you have confidence in the plan and its expected outcomes.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start" style={{ gap: '12px' }}>
                  <div className="flex-shrink-0" style={{ marginTop: '3px' }}>
                    <Image src="/bespoke-arrow.png" alt="arrow" width={24} height={18} style={{ objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '27px',
                      lineHeight: '1.4',
                      color: '#FFFFFF',
                      margin: '0 0 6px 0',
                    }}>
                      {item.heading}
                    </h3>
                    <p style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(16px, 1.74vw, 28px)',
                      lineHeight: '1.4',
                      color: '#FFFFFF',
                      margin: 0,
                    }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Right: Your Advantage box */}
            <div
              className="flex-shrink-0 relative"
              style={{
                width: '514px',
                minHeight: '178px',
                alignSelf: 'center',
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '24px',
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
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.9px',
                  color: '#006FBA',
                  textAlign: 'center',
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Your Advantage:
              </h4>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 1.25vw, 20px)',
                  lineHeight: '1.75',
                  color: '#68718B',
                  textAlign: 'center',
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: 'min(485px, 95%)',
                }}
              >
                Clarity before commitment. You invest in a pre-vetted execution plan, not just a
                consultant&apos;s time.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* ─── Section 4: Our Bespoke Consulting Process ─── */}
      <section className="w-full bg-white pt-20 pb-16">
        {/* Header text */}
        <div className="max-w-[min(1100px,_90%)] mx-auto px-6 flex flex-col items-center text-center mb-12">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            Our Bespoke Consulting Process
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
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
              fontSize: 'clamp(18px, 1.94vw, 32px)',
              lineHeight: '140%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: 'min(860px, 95%)',
            }}
          >
            It all starts here. We begin by aligning with your vision, establishing clear, measurable
            goals, and setting the stage for a successful partnership.
          </p>
        </div>

        {/* Wave + phases layout */}
        <div className="relative w-full" style={{ minHeight: '560px' }}>

          {/* Wave image — full width, vertically centered */}
          <div
            className="absolute left-0 right-0"
            style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 0 }}
          >
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

            {/* Phase 1 — text TOP, dot at bottom-left of wave */}
            <div className="flex flex-col items-center justify-between" style={{ paddingBottom: 'clamp(140px, 15.28vw, 220px)' }}>
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'left', alignSelf: 'flex-start', transform: 'translateX(-30px)' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.81vw, 30px)',
                    lineHeight: '1.3',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  Phase 1: Deep Dive &amp; Discovery
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', lineHeight: '1.4', color: '#424242', marginBottom: '10px' }}>
                  We start by understanding your unique landscape.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.5', color: '#5F5F5F' }}>
                  Our experts partner with your team for an in-depth exploration of your operations,
                  culture, and challenges. This is where we gather the essential insights that lay the
                  foundation for a truly customized strategy aligned with your vision.
                </p>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)', border: '4px solid white', boxShadow: '0 2px 8px rgba(20,53,138,0.3)', flexShrink: 0 }} />
            </div>

            {/* Phase 2 — dot at top of first hump, text BOTTOM */}
            <div className="flex flex-col items-center justify-between" style={{ paddingTop: 'clamp(60px, 6.94vw, 100px)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)', border: '4px solid white', boxShadow: '0 2px 8px rgba(20,53,138,0.3)', flexShrink: 0 }} />
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.81vw, 30px)',
                    lineHeight: '1.3',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  Phase 2: Strategic Blueprint
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', lineHeight: '1.4', color: '#424242', marginBottom: '10px' }}>
                  We design your tailored plan for success.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.5', color: '#5F5F5F' }}>
                  Using the insights from our discovery, we design a comprehensive, actionable plan.
                  This blueprint is precisely tailored to address your challenges, capitalize on
                  opportunities, and deliver on the goals we&apos;ve set together.
                </p>
              </div>
            </div>

            {/* Phase 3 — text TOP, dot at top of second hump */}
            <div className="flex flex-col items-center justify-between" style={{ paddingBottom: 'clamp(60px, 6.94vw, 100px)' }}>
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'right', alignSelf: 'flex-end' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.81vw, 30px)',
                    lineHeight: '1.3',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  Phase 3: Focused Implementation
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', lineHeight: '1.4', color: '#424242', marginBottom: '10px' }}>
                  We put the plan into action with precision.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.5', color: '#5F5F5F' }}>
                  A strategy is only as good as its execution. In this phase, our team works
                  diligently alongside yours to bring the blueprint to life, ensuring smooth
                  integration and adapting as needed based on real-time feedback and results.
                </p>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)', border: '4px solid white', boxShadow: '0 2px 8px rgba(20,53,138,0.3)', flexShrink: 0 }} />
            </div>

            {/* Phase 4 — dot at bottom-right of wave, text BOTTOM */}
            <div className="flex flex-col items-center justify-between" style={{ paddingTop: 'clamp(140px, 15.28vw, 220px)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B6FE8 0%, #1C2792 100%)', border: '4px solid white', boxShadow: '0 2px 8px rgba(20,53,138,0.3)', flexShrink: 0 }} />
              <div style={{ maxWidth: 'min(280px, 100%)', textAlign: 'right', alignSelf: 'flex-end', transform: 'translateX(40px)' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.81vw, 30px)',
                    lineHeight: '1.3',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  Phase 4: Sustain &amp; Optimize
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', lineHeight: '1.4', color: '#424242', marginBottom: '10px' }}>
                  We measure impact to ensure long-term success.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.5', color: '#5F5F5F' }}>
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
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.33vw, 56px)',
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
                fontSize: 'clamp(18px, 1.94vw, 32px)',
                lineHeight: '140%',
                textAlign: 'center',
                color: '#333333',
                maxWidth: 'min(1100px, 95%)',
              }}
            >
              While every project is bespoke, they often fall into one of four core problem
              categories. Our approach is to deploy the right team of functional experts to solve
              these specific types of high-stakes challenges.
            </p>
          </div>

          {/* Row 1 — icon LEFT, text RIGHT */}
          <div className="flex flex-row items-center gap-16 mb-16">
            <div className="flex-shrink-0">
              <Image src="/bespoke-proj-1.png" alt="Operational Turnarounds" width={220} height={200} style={{ objectFit: 'contain' }} />
            </div>
            <div className="flex flex-col flex-1" style={{ textAlign: 'right' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.22vw, 36px)', lineHeight: '105%', letterSpacing: '-0.96px', color: '#14358A', marginBottom: '16px' }}>
                Operational Turnarounds &amp; Scaling
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '140%', color: '#333333', marginBottom: '12px', textAlign: 'right' }}>
                For when core systems are broken or unable to scale. We diagnose the root cause of
                operational drag, redesign core processes, and manage the turnaround to restore
                efficiency and enable growth.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '23px', lineHeight: '140%', color: '#333333', textAlign: 'right' }}>
                Example Engagements: Rescuing a $32M support operation (Trilogy), streamlining
                enterprise architecture (Artemis Capital).
              </p>
            </div>
          </div>

          {/* Row 2 — text LEFT, icon RIGHT */}
          <div className="flex flex-row items-center gap-16 mb-16">
            <div className="flex flex-col flex-1" style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.22vw, 36px)', lineHeight: '105%', letterSpacing: '-0.96px', color: '#14358A', marginBottom: '16px' }}>
                M&amp;A Integration &amp; Carve-Outs
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '140%', color: '#333333', marginBottom: '12px', textAlign: 'left' }}>
                For complex post-merger integrations or strategic divestitures. We manage the
                intricate process of combining or separating systems, cultures, and operations to
                maximize value and minimize disruption.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '23px', lineHeight: '140%', color: '#333333', textAlign: 'left' }}>
                Example Engagements: Resolving post-acquisition technical debt and customer churn
                (Avolin), strategic divestitures.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image src="/bespoke-proj-2.png" alt="M&A Integration" width={260} height={250} style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Row 3 — icon LEFT, text RIGHT */}
          <div className="flex flex-row items-center gap-16 mb-16">
            <div className="flex-shrink-0">
              <Image src="/bespoke-proj-3.png" alt="M&A Integration Carve-Outs" width={280} height={240} style={{ objectFit: 'contain' }} />
            </div>
            <div className="flex flex-col flex-1" style={{ textAlign: 'right' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.22vw, 36px)', lineHeight: '105%', letterSpacing: '-0.96px', color: '#14358A', marginBottom: '16px', textAlign: 'right' }}>
                M&amp;A Integration &amp; Carve-Outs
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '140%', color: '#333333', marginBottom: '12px', textAlign: 'right' }}>
                For complex post-merger integrations or strategic divestitures. We manage the
                intricate process of combining or separating systems, cultures, and operations to
                maximize value and minimize disruption.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '23px', lineHeight: '140%', color: '#333333', textAlign: 'right' }}>
                Example Engagements: Resolving post-acquisition technical debt and customer churn
                (Avolin), strategic divestitures.
              </p>
            </div>
          </div>

          {/* Row 4 — text LEFT, icon RIGHT */}
          <div className="flex flex-row items-center gap-16">
            <div className="flex flex-col flex-1" style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.22vw, 36px)', lineHeight: '105%', letterSpacing: '-0.96px', color: '#14358A', marginBottom: '16px' }}>
                Complex Systems &amp; Architecture
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '140%', color: '#333333', marginBottom: '12px', textAlign: 'left' }}>
                For when your technology or data architecture is a barrier to growth. We deconstruct
                monolithic systems, eliminate data silos, and design scalable, I-O based
                architectures that provide a foundation for future innovation.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '23px', lineHeight: '140%', color: '#333333', textAlign: 'left' }}>
                Example Engagements: Unifying enterprise data silos (Artemis Capital), redesigning
                legacy platforms.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image src="/bespoke-proj-4.png" alt="Complex Systems" width={290} height={260} style={{ objectFit: 'contain' }} />
            </div>
          </div>

        </div>
      </section>

      {/* ─── Section 6: How We Ensure Accountability ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[min(1100px,_90%)] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
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
              How We Ensure Accountability
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.94vw, 32px)',
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
                fontSize: 'clamp(18px, 1.94vw, 32px)',
                lineHeight: '140%',
                color: '#333333',
                maxWidth: 'min(1216px, 95%)',
                textAlign: 'center',
              }}
            >
              Our partnerships are built on a foundation of transparency and measurable outcomes. We don&apos;t just promise results; we provide concrete mechanisms to ensure we deliver them.
            </p>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

            {/* Card 1 */}
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="flex items-center gap-4">
                <Image src="/accountability-icon-1.png" alt="Transparent Success Metrics" width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    lineHeight: '105%',
                    letterSpacing: '-0.03em',
                    color: '#14358A',
                    margin: 0,
                  }}
                >
                  Transparent Success Metrics
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
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
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="flex items-center gap-4">
                <Image src="/accountability-icon-2.png" alt="Consistent Progress Reviews" width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    lineHeight: '105%',
                    letterSpacing: '-0.03em',
                    color: '#14358A',
                    margin: 0,
                  }}
                >
                  Consistent Progress Reviews
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
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
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '23px 25px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="flex items-center gap-4">
                <Image src="/accountability-icon-3.png" alt="Post-Engagement Success Audit" width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    lineHeight: '105%',
                    letterSpacing: '-0.03em',
                    color: '#14358A',
                    margin: 0,
                  }}
                >
                  Post-Engagement Success Audit
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
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
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '105%',
              letterSpacing: '-0.96px',
              color: '#14358A',
              textAlign: 'center',
              maxWidth: 'min(1011px, 95%)',
              margin: '0 auto',
              whiteSpace: 'pre-wrap',
            }}
          >
            {`The Result: You get more than a consulting firm. You get a partner whose success is directly tied to your measurable project outcomes.`}
          </p>

        </div>
      </section>

      {/* ─── Section 7: How to Get Started ─── */}
      <section
        className="w-full py-20 px-6"
        style={{ backgroundColor: '#EBF7FF' }}
      >
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center">

          {/* Header */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '135%',
              color: '#333333',
              textAlign: 'center',
              maxWidth: 'min(1196px, 95%)',
              marginBottom: '48px',
            }}
          >
            Our process is designed to be clear and efficient, moving from initial interest to impactful engagement in a matter of weeks.
          </p>

          {/* Two cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[760px] mb-14">

            {/* Card: The Discovery Call */}
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                backgroundColor: '#EBF7FF',
                padding: '23px 25px',
                minHeight: '331px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.01vw, 33px)',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                  marginBottom: '20px',
                }}
              >
                The Discovery Call
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
                  marginBottom: '10px',
                }}
              >
                This initial 30 to 45 minute conversation is designed for mutual discovery. We&apos;ll discuss:
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
                }}
              >
                <p style={{ margin: '0 0 4px 0' }}>Your core business challenges and strategic goals.</p>
                <p style={{ margin: '0 0 4px 0' }}>Your previous attempts to solve these problems.</p>
                <p style={{ margin: 0 }}>How PMG&apos;s Blueprint-First approach de-risks your investment in transformation.</p>
              </div>
            </div>

            {/* Card: What to Expect */}
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                backgroundColor: '#EBF7FF',
                padding: '23px 25px',
                minHeight: '331px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.01vw, 33px)',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                  marginBottom: '20px',
                }}
              >
                What to Expect
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
                  marginBottom: '6px',
                }}
              >
                Who should attend?
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
                  marginBottom: '12px',
                }}
              >
                To ensure a productive conversation, please include the primary decision-makers (e.g., CEO, COO, or Head of Operations).
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
                  marginBottom: '6px',
                }}
              >
                Typical Timeline:
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  lineHeight: '140%',
                  color: '#68718B',
                }}
              >
                Most bespoke consulting engagements begin within 2 to 4 weeks of our initial discovery call.
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
              width: '319px',
              height: '65px',
              borderRadius: '10px',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              color: '#FFFFFF',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Let&apos;s Discuss Your Project
          </a>

        </div>
      </section>

      <Footer />
    </main>
  );
}
