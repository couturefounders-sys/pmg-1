import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatWeDontDoSection from '@/components/WhatWeDontDoSection';

export default function OutOfTheBoxSolutions() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

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
            The PMG Foundry
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '22px',
            }}
          >
            Build With First Principles. Faster.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              color: '#333333',
              marginBottom: '32px',
              maxWidth: 'min(700px, 95%)',
            }}
          >
            Access the component tools and frameworks that power our engagements. Implement them
            yourself, or use them to prepare for a deeper partnership.
          </p>

          {/* Note box */}
          <div
            style={{
              border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '14px 24px',
              maxWidth: 'min(640px, 95%)',
              width: '100%',
            }}
          >
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#333333',
                textAlign: 'center',
              }}
            >
              <span style={{ fontWeight: 600 }}>Note:</span> For complex or unique challenges, we
              recommend our{' '}
              <a href="/bespoke-solutions" style={{ color: '#14358A', fontWeight: 600 }}>
                custom consulting services
              </a>{' '}
              for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Why The Foundry? ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

          {/* Heading */}
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
            Why The Foundry?
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '1.75',
              color: '#333333',
              maxWidth: 'min(720px, 95%)',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            The best outcomes are built on sound foundations. Our consulting engagements use
            proprietary models (I-O, BVU, SCM) built from smaller, discrete components. The
            Foundry gives you direct access to these components—the patterns, templates, and
            diagnostic tools—so you can:
          </p>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                title: 'Identify Your Blind Spots',
                desc: 'Use our templates to see where your current systems are failing.',
              },
              {
                title: 'Build the Business Case',
                desc: 'Get concrete data to justify the investment in a full engagement.',
              },
              {
                title: 'Experience Our Methodology',
                desc: 'Prove the value of the PMG approach on a small scale before committing.',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textAlign: 'left',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.53vw, 22px)',
                    lineHeight: '130%',
                    color: '#14358A',
                  }}
                >
                  {card.title}
                </h3>
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

      {/* ─── Section 3: When a Toolkit Isn't Enough ─── */}
      <WhatWeDontDoSection
        title="When a Toolkit Isn't Enough"
        subtitle={
          <>
            While our Foundry toolkits provide quick improvements, they have
            <br />
            inherent limitations:
          </>
        }
        items={[
          'One-size-fits-all approach may not address unique challenges',
          'Limited customization options compared to bespoke solutions',
          'Self-implementation requires internal resources and expertise',
          'Generic templates lack industry-specific optimizations',
          'No dedicated PMG team for ongoing support and optimization',
          'Lacks the critical context and adaptation only our embedded leaders provide.',
        ]}
        cardStyle={{
          width: '100%',
          maxWidth: 'min(1040px, 98%)',
          padding: '28px 30px',
          minHeight: 'unset',
        }}
        itemsContainerStyle={{ gap: '14px' }}
        itemRowClassName="flex items-start gap-3 lg:items-center"
        itemTextClassName="whitespace-normal lg:whitespace-nowrap"
        itemTextStyle={{
          fontSize: 'clamp(13px, 1.04vw, 18px)',
          lineHeight: '1.35',
        }}
        footer={
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '160%',
              color: '#FFFFFF',
              maxWidth: 'min(720px, 95%)',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            For complex challenges or maximum impact, consider our{' '}
            <a href="/bespoke-solutions" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 700 }}>
              Bespoke Consulting
            </a>{' '}
            or{' '}
            <a href="/equity-solutions" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 700 }}>
              Equity Solutions
            </a>
            .
          </p>
        }
      />

      {/* ─── Section 4: The Foundry Catalog ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '16px' }}>
              The Foundry Catalog
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', maxWidth: 'min(560px, 95%)' }}>
              Explore our toolkits, organized by the proprietary PMG models they help you implement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'The I-O Architect\'s Toolkit',
                description: 'Define the contracts that make your organization run.',
                tag: 'For: Leaders needing to de-silo teams and create clear accountability.',
                contains: 'Work Unit Canvas Template, Quality Bar Definition Builder, Input-Output Mapping Workshop Guide, "Cut-off Moment" Playbook.',
              },
              {
                title: 'The BVU Finance Lab',
                description: 'Translate all your outputs into a single currency of value.',
                tag: 'For: CFOs/COOs needing to justify non-revenue team investment.',
                contains: 'BVU Calibration Calculator (spreadsheet), Value Abstraction Workshop Video, "Cost-Per-BVU" Dashboard Template, Business Case Builder for IT/Security/Legal.',
              },
              {
                title: 'The Sector Convergence Ideation Deck',
                description: 'Systematically steal the best ideas from other worlds.',
                tag: 'For: Strategists stuck in industry-silo chambers.',
                contains: 'MIP (Most Important Problem) Finder, Cross-Industry Analogy Database, DNA Extraction Interview Protocol, Convergence Hypothesis Canvas.',
              },
              {
                title: 'The Gricean Communications Audit',
                description: 'Eradicate ambiguity, build trust through clarity.',
                tag: 'For: Executives drowning in misalignment.',
                contains: 'The Maxim Violation Tracker, Executive Comms Self-Assessment, Meeting Protocol Builder, Stakeholder Alignment Interview Script.',
              },
            ].map((card, i) => (
              <div
                key={i}
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
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#14358A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/icons/cards/cube-three.svg" alt="" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
                  </div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', color: '#14358A', margin: '6px 0 0 0', lineHeight: '1.2' }}>{card.title}</h3>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '145%', color: '#374151', margin: 0 }}>
                  {card.description}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '160%', color: '#333333' }}>
                  <span style={{ fontWeight: 600 }}>For:</span> {card.tag.replace('For: ', '')}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '160%', color: '#333333' }}>
                  <span style={{ fontWeight: 600 }}>Contains:</span> {card.contains}
                </p>
                <button
                  style={{
                    marginTop: '4px',
                    alignSelf: 'flex-start',
                    backgroundColor: '#14358A',
                    color: '#FFFFFF',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(12px, 1.04vw, 16px)',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Purchase Toolkit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Which Solution Is Right for You? ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#F3F4F6' }}>
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '0' }}>
              Which Solution Is Right for You?
            </h2>
          </div>

          {/* Comparison table */}
          <div style={{ border: '1px solid #D1D5DB', borderRadius: '18px', overflow: 'hidden', marginBottom: '32px', backgroundColor: '#FFFFFF' }}>
            {/* Header */}
            <div className="grid grid-cols-5" style={{ borderBottom: '1px solid #D1D5DB', backgroundColor: '#F3F4F6' }}>
              {['Feature', 'Foundry (OOTB)', 'Bespoke', 'Equity', 'Active Management'].map((col, i) => (
                <div key={i} style={{ padding: '20px 24px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: i === 1 ? '#14358A' : '#6B7280', borderLeft: i > 0 ? '1px solid #D1D5DB' : 'none', textAlign: i === 0 ? 'left' : 'center' }}>
                  {col}
                </div>
              ))}
            </div>
            {[
              { feature: 'Customization Level', foundry: 'Low (pre-configured)', bespoke: 'High (fully custom)', equity: 'Very High (strategic partnership)', active: 'High (embedded leadership)' },
              { feature: 'Implementation Speed', foundry: 'Fast (days)', bespoke: 'Medium (weeks)', equity: 'Medium (weeks)', active: 'Fast (immediate)' },
              { feature: 'Ongoing Support', foundry: 'Self-service', bespoke: 'Project-based', equity: 'Partnership-based', active: 'Full-time embedded' },
              { feature: 'Strategic Alignment', foundry: 'Transactional', bespoke: 'Project-aligned', equity: 'Fully aligned (equity)', active: 'Operationally aligned' },
              { feature: 'Risk/Effort', foundry: 'High (on you)', bespoke: 'Low (on us)', equity: 'Low (on us)', active: 'Low (on us)' },
              { feature: 'Best For', foundry: 'Quick fixes, common challenges', bespoke: 'Complex, unique problems', equity: 'Capital-constrained growth', active: 'Leadership gaps, execution needs' },
            ].map((row, ri) => (
              <div key={ri} className="grid grid-cols-5" style={{ borderBottom: ri < 5 ? '1px solid #D1D5DB' : 'none', backgroundColor: '#FFFFFF' }}>
                <div style={{ padding: '20px 24px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: '#2F3135', borderRight: '1px solid #D1D5DB' }}>{row.feature}</div>
                {[row.foundry, row.bespoke, row.equity, row.active].map((val, ci) => (
                  <div key={ci} style={{ padding: '20px 24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: ci === 0 ? '#14358A' : '#6B7280', borderLeft: ci > 0 ? '1px solid #D1D5DB' : 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: '#6B7280', fontStyle: 'italic' }}>
              Still unsure? Get a personalised recommendation.
            </p>
            <a href="/contact-us" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: '#14358A', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Use our Solutions Assessment Tool →
            </a>
          </div>
        </div>
      </section>

      {/* ─── Section 6: These Are Tools, Not Transformations ─── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <div
            style={{
              border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '40px 48px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', color: '#14358A', marginBottom: '20px', lineHeight: '105%', letterSpacing: '-0.03em' }}>
              These Are Tools, Not Transformations
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B', marginBottom: '20px' }}>
              Purchasing a toolkit from The Foundry is like buying a textbook on structural engineering. It gives you the principles and formulas. It does not give you the experienced engineer to diagnose your unique building&apos;s faults, design the retrofit, and oversee the construction.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', fontStyle: 'italic', lineHeight: '140%', color: '#68718B', marginBottom: '20px' }}>
              Our consulting engagements provide the engineer.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B', marginBottom: '20px' }}>
              The true PMG advantage comes from the synthesis of these tools by our Embedded Leaders, validated through our C2 Specification and Anonymous QA Review, and executed within your operating context. That process cannot be productized.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#14358A', marginBottom: '12px' }}>
              Use The Foundry to:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                'Solve a narrow, well-understood problem.',
                'Educate your team on our concepts.',
                'Prove the value of our thinking on a small scale.',
                'Then, call us for the real work.',
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#333333' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Ready to Elevate Your Business? ─── */}
      <section className="w-full py-16 px-6" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[700px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '18px' }}>
            Ready to Elevate Your Business?
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '1.75', color: '#333333', marginBottom: '32px' }}>
            Let&apos;s discuss how PMG can help you navigate your challenges and seize new opportunities.
          </p>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #6A36FF 0%, #AC5FE6 100%)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.22vw, 17.6px)',
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
