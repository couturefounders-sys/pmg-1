import Header from '@/components/Header';

export default function InsightsPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-20 px-6 bg-white">
        <div className="max-w-[760px] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '0.04em',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            Why Constantly Reinvent the Wheel?
          </p>
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '52px',
              lineHeight: '1.1',
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
              fontSize: '16px',
              lineHeight: '1.75',
              color: '#3A3A3A',
              maxWidth: '640px',
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
              fontSize: '14px',
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
              fontSize: '46px',
              lineHeight: '1.15',
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
                    fontSize: '20px',
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
                    fontSize: '15px',
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
                    fontSize: '20px',
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
                    fontSize: '15px',
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
        <div className="max-w-[860px] mx-auto flex justify-center">
          <img
            src="/ss.png"
            alt="The Six-Step Strategic Framework"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* ─── Section 4: How We Select Sectors ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          {/* Eyebrow */}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.06em', color: '#14358A', textAlign: 'center', marginBottom: '12px' }}>
            The Logic of Operational DNA
          </p>
          {/* Heading */}
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '36px', color: '#14358A', textAlign: 'center', marginBottom: '20px' }}>
            How We Select Sectors
          </h2>
          {/* Intro */}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.75', color: '#3A3A3A', textAlign: 'center', marginBottom: '36px' }}>
            Sector Convergence is not about random creativity. It is a systematic search for proven operational DNA. We do not look for &ldquo;similar companies.&rdquo; We look for sectors where your core challenge is their central competency.
          </p>

          {/* The Process */}
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#14358A', marginBottom: '20px' }}>
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
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: '1.75', color: '#3A3A3A' }}>
                  <strong style={{ color: '#000000' }}>{item.label}</strong>{' '}
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Example */}
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#14358A', marginBottom: '12px' }}>
            Example
          </h3>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: '1.75', color: '#3A3A3A' }}>
            For a FinTech firm needing trust, we did not look at other banks. We looked at industries built on fragile trust: psychotherapy (confidentiality, safe space) and precious metals trading (verification, audits). We adapted their principles of secure communication and transparent verification to rebuild user confidence.
          </p>
        </div>
      </section>

      {/* ─── Section 5: From Theory to ROI ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[700px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '36px', color: '#14358A', marginBottom: '20px' }}>
            From Theory to ROI
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#3A3A3A', marginBottom: '24px' }}>
            This model emerged from high-stakes engagements where traditional, linear consulting methods proved fundamentally inadequate to solve multi-faceted challenges. Such challenges include simultaneously unifying customer experience, reducing operational overhead, and enhancing quality across complex, disparate business lines.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#3A3A3A', marginBottom: '32px' }}>
            The Sector Convergence Model was created by reframing the challenge to ignore industry boundaries. Instead, we abstracted and synthesized proven operational excellence models: successful customer experience systems from regulated industries, advanced automation strategies from high-volume telecom, and robust training systems from specialized professional services.
          </p>
          <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '30px', letterSpacing: '0px', verticalAlign: 'middle', color: '#14358A', textDecoration: 'none' }}>
            Read Full White Paper &rsaquo;
          </a>
        </div>
      </section>

      {/* ─── Section 6: Real World Impact ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[620px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '36px', color: '#14358A', marginBottom: '16px' }}>
            Real World Impact
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.75', color: '#3A3A3A', marginBottom: '48px' }}>
            With our support, organizations across diverse sectors have leveraged Sector Convergence to restructure operations, rescue customer relationships, and reframe past failures as opportunities for innovation.
          </p>

          {/* Formula diagram */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
              <img src="/bbbbox.png" alt="Real World Impact Formula" style={{ width: '100%', height: 'auto', display: 'block' }} />

              {/* Left: Struggling Businesses — box x:0-30%, y:33-56% */}
              <div style={{ position: 'absolute', top: '33%', left: '0%', width: '30%', height: '23%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 8px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(10px, 1.5vw, 16px)', color: '#FFFFFF', lineHeight: 1.3 }}>Struggling Businesses</span>
              </div>

              {/* Center top box — x:39-69%, y:0-23% */}
              <div style={{ position: 'absolute', top: '0%', left: '39%', width: '30%', height: '23%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 10px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(8px, 1.1vw, 12px)', color: '#14358A', lineHeight: 1.35 }}>Customer Lifecycle Management from D2C Services</span>
              </div>

              {/* Center middle box — x:39-69%, y:35-57% */}
              <div style={{ position: 'absolute', top: '35%', left: '39%', width: '30%', height: '22%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 10px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(8px, 1.1vw, 12px)', color: '#14358A', lineHeight: 1.35 }}>Training Systems from Defence Forces</span>
              </div>

              {/* Center bottom box — x:39-69%, y:68-90% */}
              <div style={{ position: 'absolute', top: '68%', left: '39%', width: '30%', height: '22%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 10px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(8px, 1.1vw, 12px)', color: '#14358A', lineHeight: 1.35 }}>Failsafe Engineering from Space Exploration</span>
              </div>

              {/* PMG Consulting Expertise — below bottom box */}
              <div style={{ position: 'absolute', top: '92%', left: '39%', width: '30%', textAlign: 'center' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(7px, 1vw, 11px)', color: '#14358A' }}>PMG Consulting Expertise</span>
              </div>

              {/* Right: An industry-defining business — x:78-100%, y:33-57% */}
              <div style={{ position: 'absolute', top: '33%', left: '78%', width: '22%', height: '24%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 8px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(8px, 1.1vw, 12px)', color: '#FFFFFF', lineHeight: 1.35 }}>An industry-defining business.</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: From Blueprint to Reality ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '36px', color: '#14358A', textAlign: 'center', marginBottom: '16px' }}>
            From Blueprint to Reality
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.75', color: '#3A3A3A', textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            Our Sector Convergence model is not just a theoretical exercise. We offer structured engagement paths to translate cross-industry insights into tangible business outcomes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
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
            ].map((card, i) => (
              <div key={i} style={{ border: '3px solid #14358A', borderRadius: '12px', padding: '28px 24px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', background: '#14358A', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '22px', height: '22px', background: '#14358A', borderRadius: '4px' }} />
                </div>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#14358A', lineHeight: '1.3' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: '1.75', color: '#5F6D7E' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 8: Core Concepts of Sector Convergence ─── */}
      <section className="w-full py-20 px-6" style={{ background: '#F7F9FF' }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '36px', color: '#14358A', textAlign: 'center', marginBottom: '48px' }}>
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
            return (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {concepts.map((c, i) => {
                  const isLast = i === concepts.length - 1;
                  return (
                    <div
                      key={i}
                      style={{
                        gridColumn: isLast ? '1 / -1' : 'auto',
                        display: 'flex',
                        alignItems: 'stretch',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1.5px solid #C8D5F0',
                        background: '#FFFFFF',
                        maxWidth: isLast ? '540px' : undefined,
                        margin: isLast ? '0 auto' : undefined,
                      }}
                    >
                      {/* Left block: hands.png as background with icon on top */}
                      <div style={{ width: '110px', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                        <img src="/hands.png" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill' }} />
                        <img src="/concept-icon.png" alt="" aria-hidden="true" style={{ position: 'relative', zIndex: 1, width: '52px', height: '52px', objectFit: 'contain' }} />
                      </div>
                      {/* Right text — white background */}
                      <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', flex: 1, background: '#FFFFFF' }}>
                        <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#14358A', margin: 0 }}>{c.title}</h3>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12.5px', lineHeight: '1.7', color: '#5F6D7E', margin: 0 }}>{c.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─── Section 9: Shape the Next Market Standard ─── */}
      <section className="w-full py-24 px-6" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '38px', color: '#14358A', marginBottom: '20px' }}>
            Shape the Next Market Standard
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#3A3A3A', marginBottom: '36px' }}>
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
              fontSize: '14px',
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
