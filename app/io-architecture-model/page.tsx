'use client';

import Header from '@/components/Header';

export default function IOArchitectureModelPage() {
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
            The I-O Model of Enterprise Architecture
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
            The Architecture of Predictability
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
            The I-O Model is our proprietary engineering framework that solves systemic
            inconsistency and technical debt by fundamentally reimagining how
            organizational units interact. This architectural blueprint delivers verifiable,
            consistent quality by transforming operational costs into reliable, auditable
            efficiency gains.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Traditional vs I-O Architecture ─── */}
      <section
        className="w-full relative overflow-hidden py-24 px-6"
        style={{ background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)' }}
      >
        {/* lll.png full-cover design overlay */}
        <img
          src="/lll.png"
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
            opacity: 1,
            zIndex: 0,
          }}
        />

        <div className="max-w-[960px] mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '1.2',
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
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '680px',
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
                  body: 'Teams operate with flexible, general mandates, leading to vague boundaries, overlapping responsibilities, and constant internal friction. No clear line exists between a team\'s mandate and its limitations.',
                  risk: 'Risk: Misallocation of Resources: Teams waste time fixing problems outside their core competency, diverting capital and expertise from strategic initiatives.',
                },
                solution: {
                  title: 'Defined Inputs, WorkUnits, & Outputs.',
                  body: 'The Architectural Contract forces teams to define their function around only what they accept (Input) and what they guarantee to deliver (Output), allowing them to define exactly how to achieve this (the WorkUnit).',
                  benefit: 'Benefit: Eliminates Ambiguity: Instantly defines clear interfaces between teams, preventing scope creep and ensuring transparent accountability.',
                },
              },
              {
                problem: {
                  title: '1. Undefined Team Scope (The Boundary Problem)',
                  body: 'Workflows, error handling, and quality checks are treated as soft guidelines. Processes drift based on individual discretion or urgency, making results inconsistent and prohibiting reliable automation.',
                  risk: 'Risk: Systemic Inconsistency: Without an immutable process, products and services vary widely in quality, eroding customer trust and inflating operational overhead.',
                },
                solution: {
                  title: 'Codified, Regularized Processes',
                  body: 'The I-O Contract mandates an immutable internal workflow for processing inputs into outputs, ensuring results are always consistent.',
                  benefit: 'Benefit: Enables Automation: Process stability allows for automated verification, dramatically reducing human error and scaling quality control.',
                },
              },
              {
                problem: {
                  title: '3. Irregular Outputs (The Quality Problem)',
                  body: 'Deliverables from one team are undefined, unquantifiable, or irregular. Downstream teams are forced to expend significant effort adapting to or fixing unpredictable inputs.',
                  risk: 'Risk: Cascading Failure: An undefined output at Team A becomes an integration error at Team B, which then results in a massive customer failure at Team C. The system amplifies low-level errors into high-level crises.',
                },
                solution: {
                  title: 'The Verifiable Quality Bar',
                  body: 'An explicit standard applied to both incoming and outgoing deliverables. Both the delivering team and the receiving team need the deliverable to pass; otherwise, it is rejected and returned for resolution. This allows for each team to know what is expected and to guarantee success or failure for each deliverable.',
                  benefit: 'Benefit: Guarantees Quality Chain: Breaks the cycle of compounding failure. Rejection forces resolution upstream, ensuring quality is maintained across the entire organizational flow.',
                },
              },
              {
                problem: {
                  title: '1. Undefined Team Scope (The Boundary Problem)',
                  body: 'Organizational gaps and input rejections are often picked up by an unofficial Single Point of Failure (SPOF) person who manually patches the workflow, bypassing formal processes and logging.',
                  risk: 'Risk: Unaccounted Risk: This creates immense, unquantifiable technical debt. Leadership does not know how many fixes exist, who owns them, or what systemic flaws they are masking, leading to sudden, catastrophic failure upon the hero\'s absence.',
                },
                solution: {
                  title: 'Defined Inputs, WorkUnits, & Outputs.',
                  body: 'Any item that is not an input in the I-O map is escalated. An executive-level decision maker must intentionally choose to: Formalize the procedure with a new I-O Contract, Grant an Explicit Exception (and action the item themselves), or Reject the problem as not worth solving and explicitly document such.',
                  benefit: 'Benefit: Eliminates Accidental Debt: Architecture only evolves via conscious, high-level business decisions, eliminating \'Institutional Inertia\' and preventing accidental complexity from accumulating.',
                },
              },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Left — Problem box (Component 13 as full background) */}
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', textAlign: 'center', width: '597px', minHeight: '382px', maxWidth: '100%' }}>
                  <img
                    src="/component-13.png"
                    alt=""
                    aria-hidden="true"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0 }}
                  />
                  <div style={{ position: 'relative', zIndex: 1, padding: '32px 28px', height: '100%' }}>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', color: '#D0021B', marginBottom: '12px', lineHeight: '1.4' }}>{row.problem.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '1.7', color: '#3A3A3A', marginBottom: '10px' }}>{row.problem.body}</p>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', lineHeight: '1.7', color: '#5F6D7E' }}>{row.problem.risk}</p>
                  </div>
                </div>
                {/* Right — Solution box (Component 12 as full background) */}
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', textAlign: 'center', width: '597px', minHeight: '382px', maxWidth: '100%' }}>
                  <img
                    src="/component-12.png"
                    alt=""
                    aria-hidden="true"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0 }}
                  />
                  <div style={{ position: 'relative', zIndex: 1, padding: '32px 28px', height: '100%' }}>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', color: '#14358A', marginBottom: '12px', lineHeight: '1.4' }}>{row.solution.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: '1.7', color: '#3A3A3A', marginBottom: '10px' }}>{row.solution.body}</p>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', lineHeight: '1.7', color: '#5F6D7E' }}>{row.solution.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: I-O Model Breakdown ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px', alignItems: 'start' }}>

            {/* Left: component-18.png as base image with labels overlaid */}
            <div style={{ position: 'relative', width: '320px' }}>
              <img src="/component-18.png" alt="Navigation menu" style={{ width: '100%', height: 'auto', display: 'block' }} />
              {/* Labels overlaid on the image */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop: '4%', paddingBottom: '4%', paddingLeft: '28%' }}>
                {['Engagement Model', 'Talent Model', 'Key Deliverable', 'Pricing Model', 'Core IP (Strategy)', 'Quality Assurance', 'Follow-Through'].map((label, i) => (
                  <span key={i} style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#FFFFFF', whiteSpace: 'nowrap' }}>{label}</span>
                ))}
              </div>
            </div>

            {/* Right: PMG Model + Old Playbook stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* The PMG Model — component-12 background */}
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '200px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
                <img src="/component-12.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px' }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', color: '#14358A', marginBottom: '16px' }}>The PMG Model</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.75', color: '#3A3A3A', textAlign: 'center' }}>
                    Sector Convergence is a strategic reset. We architect non-obvious solutions by synthesizing proven operational models from entirely different sectors, creating a durable, first-mover advantage that competitors cannot easily replicate.
                  </p>
                </div>
              </div>

              {/* The Old Playbook — component-13 background */}
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '200px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
                <img src="/component-13.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px' }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', color: '#D0021B', marginBottom: '16px' }}>The Old Playbook</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.75', color: '#3A3A3A', textAlign: 'center' }}>
                    Traditional consulting offers linear, industry-siloed &ldquo;best practices&rdquo; that lead to incremental gains at best and expensive, failed implementations at worst. It is a model built for a world that no longer exists.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Implementation Steps ─── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '38px', color: '#14358A', textAlign: 'center', marginBottom: '56px' }}>
            How We Implement the I-O Model
          </h2>

          {/* Timeline wrapper: hori.png as single vertical line + steps */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0px', position: 'relative' }}>

            {/* hori.png — used directly as the vertical line */}
            <div style={{ flexShrink: 0, position: 'relative', alignSelf: 'stretch' }}>
              <img
                src="/hori.png"
                alt=""
                style={{ width: 'auto', height: '100%', display: 'block', objectFit: 'fill', position: 'absolute', top: 0, left: 0 }}
              />
              {/* spacer to reserve width */}
              <div style={{ width: '24px', height: '100%', visibility: 'hidden' }} />
            </div>

            {/* Steps content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '48px', paddingLeft: '0px' }}>
              {[
                {
                  icon: '🔍',
                  title: 'Step 1: Diagnostic & Value Stream Mapping',
                  body: 'We conduct a deep-dive analysis of your current operational workflows to identify the core processes that constitute ~80% of a team\'s regular work. This involves mapping key value streams, dependencies, and critical pain points where ambiguity creates systemic drag.',
                  objective: 'Create a comprehensive list of \'actions\' each team performs, identify their mandatory inputs and their sources, and define what a \'perfect\' output would look like.',
                },
                {
                  icon: '✏️',
                  title: 'Step 2: Define Core Work Units & Quality Bars',
                  body: 'We work with your teams to deconstruct complex processes into discrete, Fixed-Scope Work Units. For each unit, we collaboratively define the precise Inputs, Outputs, and explicit Quality Bars (QBs) that will govern them.',
                  objective: 'Map all required inputs and their sources, establish minimum acceptable input criteria (forming the Quality Bar baseline), and determine how inputs are regularized into consistent outputs.',
                },
                {
                  icon: '›',
                  title: 'Step 3: Architect the I-O Contracts',
                  body: 'Our experts codify these definitions into formal Architectural Contracts. This blueprint makes relationships, responsibilities, and quality standards between teams immutable and transparent.',
                  objective: 'Formalize the mapping from Step 2 into actionable contracts by establishing formal Input/Output Quality Bars and defining the Work Units that transform inputs into outputs. These are living documents designed to cover ~80% of a team\'s work and are updated as requirements evolve.',
                },
                {
                  icon: '⚙️',
                  title: 'Step 4: Phased Rollout & Automation',
                  body: 'We manage a structured implementation, beginning with pilot teams where inputs are least controlled, typically customer-facing functions like inbound sales or support. This establishes baseline inputs for downstream teams. As processes stabilize, we introduce automation for Quality Bar verification.',
                  objective: 'Create a controlled deployment that builds system integrity from the ground up, then automate verification to shift human oversight from routine checks to strategic optimization.',
                },
                {
                  icon: '↗',
                  title: 'Step 5: Enterprise-Wide Scaling & System Integration',
                  body: 'Once the pilot stabilizes, we systematically propagate the I-O framework across interdependent teams, using established contracts as the foundation for upstream and downstream integration. This creates a cascading architecture where each team\'s verified outputs become the guaranteed inputs for the next.',
                  objective: 'Transform isolated improvements into a cohesive enterprise operating system by connecting work units into reliable value streams, ensuring quality compounds rather than degrades across organizational boundaries.',
                },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginLeft: '24px' }}>
                  {/* Icon circle */}
                  <div style={{ flexShrink: 0, width: '52px', height: '52px', borderRadius: '50%', background: '#FFFFFF', border: '2px solid #14358A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginTop: '2px' }}>
                    {step.icon}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', color: '#14358A', marginBottom: '10px', lineHeight: '1.3' }}>{step.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: '1.75', color: '#3A3A3A', marginBottom: '16px' }}>{step.body}</p>
                    {/* Objective box */}
                    <div style={{ background: '#F5F7FA', borderRadius: '8px', padding: '16px 20px' }}>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em', color: '#14358A', textTransform: 'uppercase', marginBottom: '8px' }}>Objective</p>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: '1.7', color: '#5F6D7E' }}>{step.objective}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
