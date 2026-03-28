import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.25vw, 20px)',
              lineHeight: '105%',
              color: '#000000',
              marginBottom: '16px',
            }}
          >
            Why Constantly Reinvent the Wheel?
          </p>
          <h1
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
            Build Smarter, not Harder
          </h1>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: 'min(900px, 95%)',
            }}
          >
            Business as usual guarantees obsolescence. The Sector Convergence Model is
            a strategic operating system designed to transform complex challenges into
            competitive breakthroughs, faster and more consistently than ever.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Your Unfair Advantage ─── */}
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
        <img
          src="/bespoke-component-10.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 1,
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-[960px] mx-auto relative z-10 flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(11px, 0.97vw, 16px)',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.75)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            The Strategic Imperative
          </p>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              color: '#FFFFFF',
              marginBottom: '48px',
            }}
          >
            Your Unfair Advantage
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              width: '100%',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src="/component-13.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    color: '#D0021B',
                    marginBottom: '16px',
                  }}
                >
                  The Old Playbook
                </h3>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.04vw, 17px)',
                    lineHeight: '1.75',
                    color: '#5F6D7E',
                  }}
                >
                  Traditional consulting offers linear, industry-siloed
                  &ldquo;best practices&rdquo; that lead to incremental gains at
                  best and expensive, failed implementations at worst.
                  It is a model built for a world that no longer exists.
                </p>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src="/component-12.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1, padding: '36px 32px', textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    color: '#14358A',
                    marginBottom: '16px',
                  }}
                >
                  The PMG Model
                </h3>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.04vw, 17px)',
                    lineHeight: '1.75',
                    color: '#5F6D7E',
                  }}
                >
                  Sector Convergence is a strategic reset. We
                  architect non-obvious solutions by synthesizing
                  proven operational models from entirely different
                  sectors, creating a durable, first-mover advantage
                  that competitors cannot easily replicate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: The Six-Step Strategic Framework ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: '16px' }}>
            The Six-Step Strategic Framework
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.75', color: '#333333', textAlign: 'center', marginBottom: '56px' }}>
            A systematic process for engineering breakthrough solutions.
          </p>
          <div style={{ position: 'relative' }}>
            {/* Vertical center line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '3px', background: '#14358A', transform: 'translateX(-50%)', zIndex: 0 }} />
            {[
              { step: 1, title: 'Isolate Strategic Outcome', desc: 'Articulate one clear, measurable strategic outcome. This is your North Star.' },
              { step: 2, title: 'Determine Most Important Problems (MIPs)', desc: 'Pinpoint the critical barriers preventing your objective using root-cause analysis.' },
              { step: 3, title: 'Map Divergent Sectors', desc: 'Identify sectors with contrasting strategic DNA to draw novel insights from.' },
              { step: 4, title: 'Source Cross-Sector Solutions', desc: 'Leverage your defined MIP to ask precise, actionable questions of sector experts.' },
              { step: 5, title: 'Integration & Execution', desc: 'Execute a decisive transition, replacing legacy systems with the new, integrated solution.' },
              { step: 6, title: 'Validation & Continuous Iteration', desc: 'Continuously monitor outcomes, using real-time data to refine and optimize.' },
            ].map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', flexDirection: isLeft ? 'row' : 'row-reverse', position: 'relative' }}>
                  {/* Card */}
                  <div style={{ width: 'calc(50% - 44px)', border: '3px solid #14358A', borderRadius: '10px', padding: '24px', background: '#FFFFFF' }}>
                    <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', color: '#14358A', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.75', color: '#5F6D7E', margin: 0 }}>{item.desc}</p>
                  </div>
                  {/* Center circle */}
                  <div style={{ width: '88px', display: 'flex', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#14358A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '20px' }}>
                      {item.step}
                    </div>
                  </div>
                  {/* Empty half */}
                  <div style={{ width: 'calc(50% - 44px)' }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 4: How We Select Sectors ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          {/* Eyebrow */}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 0.97vw, 16px)', letterSpacing: '0.06em', color: '#14358A', textAlign: 'center', marginBottom: '12px' }}>
            The Logic of Operational DNA
          </p>
          {/* Heading */}
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: '20px' }}>
            How We Select Sectors
          </h2>
          {/* Intro */}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '1.75', color: '#333333', textAlign: 'center', marginBottom: '36px' }}>
            Sector Convergence is not about random creativity. It is a systematic search for proven operational DNA. We do not look for &ldquo;similar companies.&rdquo; We look for sectors where your core challenge is their central competency.
          </p>

          {/* The Process */}
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', marginBottom: '20px' }}>
            The Process:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
            {[
              {
                label: 'Abstract the Challenge:',
                text: 'We reframe your industry-specific problem (e.g., "low software renewal rates") into a universal operational one (e.g., "maintaining engagement with a non-contract service").',
              },
              {
                label: 'Identify Archetype Sectors:',
                text: 'We ask: "Which industries are world-class at this universal challenge as a matter of survival?" For engagement, it might be luxury hospitality or subscription retail.',
              },
              {
                label: 'Extract Principles, Not Playbooks:',
                text: 'We engage a subject-matter expert from that sector not to run your business, but for a focused interview. Our PMG operators, fluent in the language of process and strategy, translate the underlying principle (e.g., a hotel\'s "anticipatory service") into an adaptable insight for your context.\nExample:',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <img src="/vector.png" alt="" aria-hidden="true" style={{ width: '18px', height: '18px', objectFit: 'contain', marginTop: '2px', flexShrink: 0 }} />
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', color: '#333333' }}>
                  <strong style={{ color: '#000000' }}>{item.label}</strong>{' '}
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Example */}
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', marginBottom: '12px' }}>
            Example
          </h3>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', color: '#333333' }}>
            For a FinTech firm needing trust, we did not look at other banks. We looked at industries built on fragile trust: psychotherapy (confidentiality, safe space) and precious metals trading (verification, audits). We adapted their principles of secure communication and transparent verification to rebuild user confidence.
          </p>
        </div>
      </section>

      {/* ─── Section 5: From Theory to ROI ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '20px' }}>
            From Theory to ROI
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', letterSpacing: '0%', textAlign: 'center', color: '#333333', marginBottom: '24px' }}>
            This model emerged from high-stakes engagements where traditional, linear consulting methods proved fundamentally inadequate to solve multi-faceted challenges. Such challenges include simultaneously unifying customer experience, reducing operational overhead, and enhancing quality across complex, disparate business lines.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', letterSpacing: '0%', textAlign: 'center', color: '#333333', marginBottom: '32px' }}>
            The Sector Convergence Model was created by reframing the challenge to ignore industry boundaries. Instead, we abstracted and synthesized proven operational excellence models: successful customer experience systems from regulated industries, advanced automation strategies from high-volume telecom, and robust training systems from specialized professional services.
          </p>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '30px', letterSpacing: '0px', verticalAlign: 'middle', color: '#14358A', textDecoration: 'none' }}>
            Read Full White Paper &rsaquo;
          </a>
        </div>
      </section>

      {/* ─── Section 6: Real World Impact ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '16px' }}>
            Real World Impact
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.75', color: '#333333', marginBottom: '48px' }}>
            With our support, organizations across diverse sectors have leveraged Sector Convergence to restructure operations, rescue customer relationships, and reframe past failures as opportunities for innovation.
          </p>

          {/* Formula diagram — pure CSS */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {/* Left: Struggling Businesses */}
            <div style={{ background: '#14358A', borderRadius: '14px', padding: '36px 28px', width: '220px', minHeight: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.3vw, 18px)', color: '#FFFFFF', textAlign: 'center', lineHeight: 1.3 }}>Struggling Businesses</span>
            </div>

            {/* + */}
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', color: '#14358A', flexShrink: 0 }}>+</span>

            {/* Center: stacked boxes */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px', flexShrink: 0 }}>
              {[
                'Customer Lifecycle Management from D2C Services',
                'Training Systems from Defence Forces',
                'Failsafe Engineering from Space Exploration',
              ].map((label, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {i > 0 && (
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '28px', color: '#14358A', lineHeight: 1, padding: '6px 0' }}>+</span>
                  )}
                  <div style={{ background: '#D6EAF8', border: '1.5px solid #A8CCE8', borderRadius: '14px', padding: '20px 24px', width: '280px', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 1.05vw, 14px)', color: '#14358A', lineHeight: 1.4 }}>{label}</span>
                  </div>
                </div>
              ))}
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '28px', color: '#14358A', lineHeight: 1, padding: '6px 0' }}>+</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 1.05vw, 14px)', color: '#14358A' }}>PMG Consulting Expertise</span>
            </div>

            {/* = */}
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', color: '#14358A', flexShrink: 0 }}>=</span>

            {/* Right: An industry-defining business */}
            <div style={{ background: '#14358A', borderRadius: '14px', padding: '36px 28px', width: '220px', minHeight: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 1.1vw, 15px)', color: '#FFFFFF', textAlign: 'center', lineHeight: 1.4 }}>An industry-defining business.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: From Blueprint to Reality ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: '16px' }}>
            From Blueprint to Reality
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.75', color: '#333333', textAlign: 'center', maxWidth: 'min(680px, 95%)', margin: '0 auto 48px' }}>
            Our Sector Convergence model is not just a theoretical exercise. We offer structured engagement paths to translate cross-industry insights into tangible business outcomes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {(() => {
              const cards = [
                {
                  title: 'Strategic Blueprint Workshop',
                  text: 'A focused 2–4 week engagement where we identify your MIPs, map divergent sectors, and deliver a high-level strategic blueprint outlining a potential convergence-based solution.',
                },
                {
                  title: 'Pilot Program Implementation',
                  text: 'A 3–6 month pilot program designed to test a cross-sector solution on a smaller, controlled scale. We measure impact and build a business case before a full rollout.',
                },
                {
                  title: 'Full Transformation Engagement',
                  text: 'A comprehensive partnership where we lead the end-to-end design, implementation, and optimisation of a Sector Convergence strategy to solve a core business challenge.',
                },
              ];
              const icons = [
                /* Brain */
                <svg key="brain" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                </svg>,
                /* Zap */
                <svg key="zap" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>,
                /* Combine / merge */
                <svg key="combine" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="8" height="8" x="2" y="2" rx="2"/>
                  <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/>
                  <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/>
                  <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1"/>
                  <polyline points="7 21 10 18 7 15"/>
                  <rect width="8" height="8" x="14" y="14" rx="2"/>
                </svg>,
              ];
              return cards.map((card, i) => (
                <div key={i} style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px 24px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', background: '#14358A', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {icons[i]}
                  </div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', color: '#14358A', lineHeight: '1.3' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.75', color: '#5F6D7E' }}>{card.text}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ─── Section 8: Core Concepts of Sector Convergence ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: '48px' }}>
            Core Concepts of Sector Convergence
          </h2>
          {(() => {
            const concepts = [
              { title: 'Cut-off Moment', text: 'A fixed point when outdated systems are retired and new practices go live, enforcing clarity, speed, and alignment.' },
              { title: 'Alignment Metrics', text: 'Targeted indicators used to measure how well implementation aligns with strategic goals.' },
              { title: 'Institutional Inertia', text: 'The internal resistance to change that stalls innovation and transformation. It is often rooted in habit, not strategy.' },
              { title: 'Iterative Analysis', text: 'A methodical process of examining, reviewing, and refining solutions through multiple cycles based on insights from previous iterations.' },
              { title: 'Key Deliverables', text: "Concrete, measurable items crucial for a project or organisation's success." },
              { title: 'Most Important Problems (MIPs)', text: 'A pivotal challenge identified as the primary obstacle to achieving a key deliverable.' },
              { title: 'Why-why analysis', text: 'A root cause method that continuously asks deeper into a topic through layers of problems to reveal the fundamental cause of a specific issue.' },
            ];
            const helpCircleIcon = (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            );
            const conceptCard = (c: { title: string; text: string }, i: number) => (
              <div
                key={i}
                className="group"
                style={{ borderRadius: '12px', padding: '28px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FFFFFF', border: '1.5px solid #C8D5F0', transition: 'background 0.2s' }}
              >
                {helpCircleIcon}
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.04vw, 17px)', color: '#14358A', marginBottom: '8px' }}>{c.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(10px, 0.87vw, 14px)', lineHeight: '1.7', color: '#5F6D7E', margin: 0 }}>{c.text}</p>
              </div>
            );
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Row 1: 2 items */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {concepts.slice(0, 2).map((c, i) => conceptCard(c, i))}
                </div>
                {/* Row 2: 3 items */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {concepts.slice(2, 5).map((c, i) => conceptCard(c, i + 2))}
                </div>
                {/* Row 3: 2 items */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {concepts.slice(5, 7).map((c, i) => conceptCard(c, i + 5))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─── Section 9: Shape the Next Market Standard ─── */}
      <section className="w-full py-24 px-6" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '20px' }}>
            Shape the Next Market Standard
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '1.8', color: '#333333', marginBottom: '36px' }}>
            In a world without pre-written playbooks, Sector Convergence equips leaders not just to survive disruption, but to weaponize it. Transform constraint into capability, and crisis into acceleration.
          </p>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(11px, 0.97vw, 16px)',
              letterSpacing: '0.04em',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Request a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
