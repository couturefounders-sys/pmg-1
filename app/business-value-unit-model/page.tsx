import Header from '@/components/Header';

export default function BusinessValueUnitModelPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* Section 1: Hero */}
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
            The Business Value Unit (BVU) Model
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
            The End of Arbitrary Capital Allocation
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
            The Business Value Unit (BVU) Model is a proprietary financial framework that
            solves the most critical flaw in modern finance: the failure to quantify the
            contribution of non-commercial teams. We translate all diverse internal
            outputs (from risk mitigation and compliance to efficiency gains) into a single,
            normalized abstraction of value. The BVU Model eliminates &ldquo;apples-to-oranges&rdquo;
            comparisons, transforming support functions from unquantifiable cost centres
            into auditable, high-yield investment platforms.
          </p>
        </div>
      </section>

      {/* Section 3: The BVU Model in Practice */}
      <section className="w-full py-20 px-6" style={{ background: '#F7F9FF' }}>
        <div className="max-w-[700px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            The BVU Model in Practice
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: '#3A3A3A',
              marginBottom: '24px',
            }}
          >
            The real power of the BVU model is in its practical application. It transforms
            abstract theories about value into concrete, data-driven decisions.
          </p>
          <a
            href="#"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              color: '#14358A',
              textDecoration: 'none',
            }}
          >
            Too theoretical? Click to see the BVU model in action. &rsaquo;
          </a>
        </div>
      </section>

      {/* Section 4: Mechanics and Strategic Benefits */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Mechanics and Strategic Benefits
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              lineHeight: '1.75',
              color: '#3A3A3A',
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto 48px',
            }}
          >
            The BVU Model is both a measurement framework and a strategic tool for capital
            allocation and risk management.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#FFFFFF',
                }}
              >
                1
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                BVU Calibration
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Each team defines their output in terms of BVUs delivered per unit of capital invested. Legal might measure BVUs per contract reviewed; HR per successful hire; IT per infrastructure incident resolved. These outputs are normalized against a universal baseline.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#FFFFFF',
                }}
              >
                2
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Integration with I-O Architecture
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                When combined with the I-O Architecture Model, each WorkUnit has a defined BVU output. This allows precise tracking: which teams are delivering value efficiently, and which are consuming disproportionate resources relative to their contribution.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#FFFFFF',
                }}
              >
                3
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Strategic Benefit: Capital Allocation
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Leadership can now make apples-to-apples comparisons. If Legal delivers 12 BVUs per $100k invested and IT delivers 8, capital can be reallocated accordingly—not arbitrarily, but based on verifiable performance data.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#FFFFFF',
                }}
              >
                4
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Strategic Benefit: Risk Hedging
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                The BVU model exposes inefficiency long before it becomes a crisis. If a team&apos;s BVU output per dollar starts declining, it signals process decay, staffing misalignment, or tool obsolescence—problems that can be corrected proactively, not reactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Managing Performance Over Time */}
      <section className="w-full py-24 px-6" style={{ background: '#F7F9FF' }}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.06em',
              color: '#14358A',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Beyond a Single Metric
          </p>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '38px',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Managing Performance Over Time
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: '#3A3A3A',
              marginBottom: '36px',
            }}
          >
            The real strategic advantage of the BVU Model is not just in creating a universal metric, but in tracking efficiency trends over time. The BVU is constantly evolving, allowing leadership to identify declining performance, reward high-performing teams, and make capital reallocation decisions proactively. If a team&apos;s BVU-to-dollar ratio is improving quarter over quarter, that&apos;s empirical proof they are optimizing. If it&apos;s declining, it&apos;s an early signal that intervention is needed.
          </p>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #6A36FF 0%, #8B5FFF 100%)',
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
            See it in Action
          </a>
        </div>
      </section>

      {/* Section 6: How We Help */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            How We Help
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                1
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Value Abstraction
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                We work with your leadership to identify the most critical, universal deliverable across all teams—the thing your organization ultimately produces (e.g., &ldquo;a client engagement,&rdquo; &ldquo;a product feature,&rdquo; &ldquo;a regulatory approval&rdquo;). This becomes the anchor for all BVU measurements.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                2
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Business Value Unit (BVU)
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                A single, universal abstraction of value that represents one standardized unit of organizational output. Every internal team&apos;s work is translated into BVUs, making all contributions measurable and comparable.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                3
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Facility & Resource Management
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Teams that maintain physical or digital infrastructure (e.g., IT, Facilities) are measured by the BVU-enabling capacity they provide, such as system uptime, infrastructure reliability, or workspace availability.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px', maxWidth: '730px', margin: '0 auto 20px' }}>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                4
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                BVU-Per-Personnel Hour
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                How many BVUs does a team produce per hour of staff time? This metric reveals team efficiency and guides hiring, automation, and process optimization decisions.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                5
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Value Equivalence
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Each team&apos;s output is translated into a fractional or multiplied BVU contribution. For example, Legal might produce 0.2 BVUs per contract (contracts enable 20% of a final deal), while IT produces 1.5 BVUs per system deployment (infrastructure supports multiple deals simultaneously).
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '730px', margin: '0 auto' }}>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                6
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Cost-Per-BVU Baseline
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                We calculate the baseline cost to produce one BVU, including labor, tools, overhead, and operational expenses. This becomes the benchmark for efficiency tracking.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FFFFFF',
                }}
              >
                7
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                BVU-Per-Personnel Hour/Spend
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Leadership can now ask: &ldquo;How many BVUs are we getting per $100k spent on IT vs. Legal vs. Sales?&rdquo; This allows direct comparison and strategic reallocation of capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="w-full py-24 px-6 bg-white" style={{ border: '1px solid #0097FE' }}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '38px',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Stop Guessing. Start Allocating with Precision.
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: '#3A3A3A',
              marginBottom: '36px',
            }}
          >
            Eliminate gut-driven capital allocation. Let our team help you implement the BVU Model and bring quantitative, auditable clarity to your most critical investment and resource decisions.
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

      {/* Footer */}
      <footer
        className="text-white pt-16 pb-12 px-6 relative z-20"
        style={{ background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
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
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">What we Do</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Our Solutions</a></li>
                <li><a href="#" className="hover:text-white">Rebuilding from within</a></li>
                <li><a href="#" className="hover:text-white">Why Consulting?</a></li>
              </ul>
            </div>
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
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">Our Models</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Sector Convergence Model</a></li>
                <li><a href="#" className="hover:text-white">I-O Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-white">Bussiness Value-Unit Model</a></li>
              </ul>
            </div>
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
