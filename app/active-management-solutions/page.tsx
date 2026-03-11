import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ActiveManagementSolutions() {
  const advantageCards = [
    {
      icon: '/ams-icon-1.png',
      title: 'Unmatched Flexibility',
      desc: 'Your contract is with PMG, not an individual. This provides unparalleled flexibility to switch the assigned executive as your business needs shift, from growth to M&A, ensuring you always have the right expertise at the right time.',
    },
    {
      icon: '/ams-icon-2.png',
      title: 'World-Class Consultant Quality',
      desc: 'We embed our own top-tier experts, rigorously selected, trained in PMG\'s integration methods, and backed by our global resources, they ensure you receive consultant-level ROI without the typical consultant price tag.',
    },
    {
      icon: '/ams-icon-3.png',
      title: 'Guaranteed Quality & Accountability',
      desc: 'PMG actively monitors performance and provides oversight, ensuring alignment with your strategic objectives. Your embedded executive is supported by the full PMG knowledge base to deliver exceptional results.',
    },
  ];

  const impactCards = [
    {
      icon: '/ams-icon-4.png',
      title: 'Accelerated Career Growth',
      desc: 'Work on diverse, high-impact challenges across industries instead of being limited to one company\'s trajectory.',
    },
    {
      icon: '/ams-icon-5.png',
      title: 'Methodology & Resources',
      desc: 'Access to PMG\'s proprietary frameworks, tools, and knowledge base that individual companies can\'t provide.',
    },
    {
      icon: '/ams-icon-8.png',
      title: 'Turnover Cost Avoidance',
      desc: 'Solve different types of problems across multiple businesses, building a richer skill set than any single role offers.',
    },
    {
      icon: '/ams-icon-7.png',
      title: 'Peer Network',
      desc: 'Collaborate with other top operators in PMG\'s ecosystem, sharing insights and solving challenges collectively.',
    },
    {
      icon: '/ams-icon-5.png',
      title: 'Reduced Risk',
      desc: 'PMG provides stability, benefits, and support, freeing operators to focus on execution without administrative burdens.',
    },
    {
      icon: '/ams-icon-9.png',
      title: 'Work-Life Integration',
      desc: 'Structured engagement models with clear boundaries, preventing the 24/7 demands of traditional C-suite roles.',
    },
  ];

  const compareRows = [
    { category: 'Flexibility', traditional: 'Limited (individual)', interim: 'Limited (individual)', pmg: 'PMG corporate guarantee' },
    { category: 'Cost', traditional: 'Low (fixed hire)', interim: 'Medium (contract)', pmg: 'High (can switch executives)' },
    { category: 'Support', traditional: 'High (salary + benefits)', interim: 'Medium-high', pmg: 'Predictable monthly investment' },
    { category: 'ROI Focus', traditional: 'James Clear', interim: 'Limited', pmg: 'Full PMG backing & resources' },
    { category: 'Dune', traditional: 'Variable', interim: 'Project-based', pmg: 'Outcome-driven, supported by track record of industry-beating ROI.' },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-16 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '100%',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Active Management Solutions
          </p>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '28px',
            }}
          >
            The Leadership Subscription
          </h1>

          {/* Para 1 */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '150%',
              color: '#333333',
              marginBottom: '24px',
            }}
          >
            When you need more than a consultant, you need an operator. Active Management embeds a
            world-class PMG executive into your organization to fill a critical role, drive
            execution, and deliver sustained results from the inside.
          </p>

          {/* Para 2 */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '150%',
              color: '#333333',
            }}
          >
            This is not a recruitment service. It&apos;s a strategic partnership where we place our
            own proven experts into your leadership structure, fully backed by the resources and
            accountability of our entire global organization.
          </p>
        </div>
      </section>

      {/* ─── Section 2: The PMG Advantage ─── */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '16px',
              }}
            >
              The PMG Advantage
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '150%',
                color: '#333333',
                maxWidth: '680px',
              }}
            >
              Our embedded executive model delivers critical advantages over traditional recruitment
              or interim solutions.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantageCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '2px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={card.icon} alt={card.title} width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '130%',
                      color: '#14358A',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
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

      {/* ─── Section 3: The Impact We Deliver ─── */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              The Impact We Deliver
            </h2>
          </div>

          {/* 6 cards — 3 columns × 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '2px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={card.icon} alt={card.title} width={64} height={64} style={{ objectFit: 'contain', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '130%',
                      color: '#14358A',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#333333',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Result statement */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#333333',
              textAlign: 'center',
              maxWidth: '1201px',
              margin: '0 auto',
            }}
          >
            This means you get access to executives who would be unattainable through traditional
            recruitment—operators at the top of their game, backed by PMG&apos;s full support system.
          </p>
        </div>
      </section>

      {/* ─── Section 4: How We Compare ─── */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '16px',
              }}
            >
              How We Compare
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#68718B',
                marginBottom: '40px',
              }}
            >
              Understand the clear benefits of partnering with PMG for active management.
            </p>
          </div>

          {/* Comparison table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      borderRight: '1px solid #E5E7EB',
                      width: '18%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Accountability
                  </th>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      borderRight: '1px solid #E5E7EB',
                      width: '27%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Traditional Recruiting
                  </th>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      borderRight: '1px solid #E5E7EB',
                      width: '27%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Interim Management
                  </th>
                  <th
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#333333',
                      padding: '18px 20px',
                      textAlign: 'left',
                      borderBottom: '1px solid #E5E7EB',
                      width: '28%',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    PMG Active Management
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, idx) => (
                  <tr key={idx}>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.category}
                    </td>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.traditional}
                    </td>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.interim}
                    </td>
                    <td
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#333333',
                        padding: '18px 20px',
                        verticalAlign: 'top',
                        lineHeight: '160%',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {row.pmg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Our Process Wave ─── */}
      <section className="w-full bg-white pt-16 pb-0 overflow-hidden">
        {/* Header */}
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-center text-center mb-10">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            Our Process
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '150%',
              color: '#333333',
              maxWidth: '680px',
            }}
          >
            From the first conversation to sustained execution, here&apos;s how we embed the right
            leader into your organization.
          </p>
        </div>

        {/* Wave + phases */}
        <div className="relative w-full" style={{ minHeight: '460px' }}>

          {/* Wave image — full width, vertically centred */}
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

          {/* Four phases overlaid on wave */}
          <div
            className="relative max-w-[1300px] mx-auto px-6 grid grid-cols-4 gap-0"
            style={{ zIndex: 1 }}
          >

            {/* Phase 1 — TOP */}
            <div className="flex flex-col items-center">
              <div style={{ maxWidth: '210px', textAlign: 'center', paddingBottom: '28px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '130%',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Needs Assessment
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#5F5F5F',
                  }}
                >
                  We begin with a comprehensive, collaborative deep dive to fully understand your
                  specific needs.
                </p>
              </div>
              {/* Dot */}
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
              {/* Dot */}
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
              <div style={{ maxWidth: '210px', textAlign: 'center', paddingTop: '28px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '130%',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Strategic Deep-Dive
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#5F5F5F',
                  }}
                >
                  Our consultants perform a focused diagnostic review to uncover the most pressing
                  needs and opportunities.
                </p>
              </div>
            </div>

            {/* Phase 3 — TOP */}
            <div className="flex flex-col items-center">
              <div style={{ maxWidth: '210px', textAlign: 'center', paddingBottom: '28px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '130%',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Placement &amp; Integration
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#5F5F5F',
                  }}
                >
                  We select and embed the ideal PMG executive, ensuring they are fully integrated
                  within your business&apos;s daily operations.
                </p>
              </div>
              {/* Dot */}
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
              {/* Dot */}
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
              <div style={{ maxWidth: '210px', textAlign: 'center', paddingTop: '28px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '130%',
                    color: '#14358A',
                    marginBottom: '10px',
                  }}
                >
                  Ongoing PMG Support
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#5F5F5F',
                  }}
                >
                  The embedded executive has continuous access to PMG&apos;s knowledge base,
                  methodologies, and fractional resources.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
