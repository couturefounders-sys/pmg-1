import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '0.04em',
              color: '#14358A',
              marginBottom: '14px',
            }}
          >
            The PMG Foundry
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
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
              fontSize: '30px',
              lineHeight: '140%',
              color: '#333333',
              marginBottom: '32px',
              maxWidth: '700px',
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
              maxWidth: '640px',
              width: '100%',
            }}
          >
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '160%',
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
              fontSize: '48px',
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
              fontSize: '18px',
              lineHeight: '1.75',
              color: '#333333',
              maxWidth: '720px',
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
                    fontSize: '29px',
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
                    fontSize: '15px',
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
      <section
        className="w-full relative overflow-hidden py-24 px-6"
        style={{ background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)' }}
      >
        {/* Decorative Rectangle - Top Right (solid, behind) */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Top Right (solid, in front, offset) */}
        <div className="absolute pointer-events-none" style={{ width: '220px', height: '55px', right: '-20px', top: '80px', background: '#0097FE', opacity: 0.7, transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left (outer) */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left (inner, offset) */}
        <div className="absolute pointer-events-none" style={{ width: '240px', height: '80px', left: '20px', top: '70px', background: 'transparent', border: '1px solid rgba(102,193,255,0.55)', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* ccc.png decorative overlay on gradient background */}
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

        <div className="max-w-[860px] mx-auto relative z-10 flex flex-col items-center text-center">

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '18px',
            }}
          >
            When a Toolkit Isn&apos;t Enough
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.75',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '40px',
              maxWidth: '640px',
            }}
          >
            While our Foundry toolkits provide quick improvements, they have inherent limitations:
          </p>

          {/* Limitations list — no container, directly on blue background */}
          <div style={{ width: '100%', maxWidth: '640px', textAlign: 'left', marginBottom: '40px' }}>
            {[
              'One-size-fits-all frameworks that don\'t account for your unique context',
              'Surface-level diagnostics that miss root causes',
              'Generic recommendations that lack implementation depth',
              'No mechanism to track or sustain change after delivery',
              'Inability to integrate across functions or business units',
              'Limited accountability — toolkits don\'t take ownership of outcomes',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: i < 5 ? '20px' : 0 }}>
                {/* Circle-X icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />
                  <line x1="7.5" y1="7.5" x2="16.5" y2="16.5" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16.5" y1="7.5" x2="7.5" y2="16.5" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '1.65', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA text */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '160%',
              color: '#FFFFFF',
              maxWidth: '720px',
              textAlign: 'center',
            }}
          >
            For complex challenges or maximum impact, consider our{' '}
            <a href="/bespoke-solutions" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
              Bespoke Consulting
            </a>{' '}
            or{' '}
            <a href="/equity-solutions" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
              Equity Solutions
            </a>
            .
          </p>
        </div>
      </section>

      {/* ─── Section 4: The Foundry Catalog ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '16px' }}>
              The Foundry Catalog
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '1.75', color: '#333333', maxWidth: '560px' }}>
              Explore our toolkits, organized by the proprietary PMG models they help you implement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'The I-O Architect\'s Toolkit',
                tag: 'For: Leaders needing to de-silo teams and create clear accountability.',
                contains: 'Work Unit Canvas Template, Clarity De-Definition Builder, Input-Output Mapping Workshop Guide, "Cut-off Moment" Playbook.',
              },
              {
                title: 'The BVU Finance Lab',
                tag: 'For: CFOs/COOs needing to justify non-revenue team investment.',
                contains: 'BVU Calibration Calculator (spreadsheet), Value Maximation Workshop Video, "Cost-Per-BVU" Dashboard Template, Business Case Builder for Scrutiny.',
              },
              {
                title: 'The Sector Convergence Ideation Deck',
                tag: 'For: Strategists stuck in industry-silo chambes.',
                contains: 'Convergence-MP (Move Inventory) Problem Finder, Cross-Industry Analogy Database, "I/N-O Conversion" Interview Protocol, Convergence Hypothesis Canvas.',
              },
              {
                title: 'The Gricean Communications Audit',
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
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#14358A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/ootb-icon-14.png" alt="" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '29px', color: '#14358A' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: '160%', color: '#333333' }}>
                  <span style={{ fontWeight: 600 }}>For:</span> {card.tag.replace('For: ', '')}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: '160%', color: '#333333' }}>
                  <span style={{ fontWeight: 600 }}>Contains:</span> {card.contains}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Which Solution Is Right for You? ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '0' }}>
              Which Solution Is Right for u?
            </h2>
          </div>

          {/* Comparison table */}
          <div style={{ border: '1.5px solid #E0E0E0', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px' }}>
            {/* Header */}
            <div className="grid grid-cols-5" style={{ borderBottom: '1.5px solid #E0E0E0', backgroundColor: '#F7F9FC' }}>
              {['Feature', 'Foundry (OOTB)', 'Bespoke', 'Equity', 'Active Management'].map((col, i) => (
                <div key={i} style={{ padding: '14px 16px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: i === 1 ? '#14A44D' : '#14358A', backgroundColor: i === 1 ? '#EEF1F8' : 'transparent', borderLeft: i > 0 ? '1px solid #E0E0E0' : 'none', textAlign: 'center' }}>
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
              <div key={ri} className="grid grid-cols-5" style={{ borderBottom: ri < 5 ? '1px solid #E0E0E0' : 'none' }}>
                <div style={{ padding: '14px 16px', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '13px', color: '#14358A' }}>{row.feature}</div>
                {[row.foundry, row.bespoke, row.equity, row.active].map((val, ci) => (
                  <div key={ci} style={{ padding: '14px 16px', fontFamily: 'Montserrat, sans-serif', fontWeight: ci === 0 ? 600 : 400, fontSize: '13px', color: ci === 0 ? '#14A44D' : '#333333', backgroundColor: ci === 0 ? '#EEF1F8' : 'transparent', borderLeft: '1px solid #E0E0E0', textAlign: 'center' }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', color: '#555555', fontStyle: 'italic' }}>
              Still unsure? Get a personalised recommendation.
            </p>
            <a href="/contact-us" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px', color: '#14358A', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '4px' }}>
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
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '26px', color: '#14358A', marginBottom: '16px' }}>
              These Are Tools, Not Transformations
            </h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '170%', color: '#333333', marginBottom: '16px' }}>
              Purchasing a toolkit from The Foundry is like buying a textbook on structural engineering. It gives you the principles and formulas. It does not give you the experienced engineer to diagnose your unique building's loads, design the details, and oversee the construction.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px', lineHeight: '170%', color: '#14358A', marginBottom: '16px' }}>
              Our consulting engagements provide the engineer.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: '170%', color: '#555555', marginBottom: '20px' }}>
              The true PMG advantage comes from the synthesis of these tools by our Embedded Leaders, validated through our C2 Specification and Anonymous QA Review, and executed within your operating context. That process cannot be productized.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#14358A', marginBottom: '12px' }}>
              Use The Foundry to:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                'Solve a narrow, well-understood problem.',
                'Educate your team on our domains.',
                'Prove the value of our thinking on a small scale.',
                'Then, call us for the real work.',
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '13px', color: '#333333' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Ready to Elevate Your Business? ─── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-[700px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '18px' }}>
            Ready to Elevate Your Business?
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '1.75', color: '#333333', marginBottom: '32px' }}>
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
              fontSize: '16px',
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
