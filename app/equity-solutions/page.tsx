import Image from 'next/image';
import Header from '@/components/Header';

export default function EquitySolutions() {
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
              color: '#6A36FF',
              marginBottom: '20px',
            }}
          >
            Equity Solutions
          </p>

          {/* Main Heading */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '56px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '40px',
              maxWidth: '860px',
            }}
          >
            A Strategic Partnership for Accelerated Growth &amp; Shared Success
          </h1>

          {/* How Our Model Works box */}
          <div
            style={{
              width: '100%',
              border: '2px solid #14358A',
              borderRadius: '12px',
              padding: '36px 48px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#14358A',
                marginBottom: '20px',
              }}
            >
              How Our Model Works
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '160%',
                color: '#333333',
                marginBottom: '20px',
                maxWidth: '760px',
                margin: '0 auto 20px auto',
              }}
            >
              PMG Equity Solutions is a hybrid model where we provide our full consulting services
              (strategy, operations, execution) in exchange for equity instead of cash. You get
              world-class expertise without draining operating capital; we get aligned long-term
              upside.
            </p>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '18px',
                lineHeight: '160%',
                color: '#333333',
              }}
            >
              This is not investment capital—it&apos;s expertise capital.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Section 2: Our Ideal Partner Profile ─── */}
      <section className="w-full bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '46px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '20px',
              }}
            >
              Our Ideal Partner Profile
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '155%',
                color: '#333333',
                maxWidth: '680px',
                textAlign: 'center',
              }}
            >
              We look for partners with a compelling vision, strong leadership, and a clear market
              opportunity. While every company is unique, our most successful partnerships share
              these characteristics.
            </p>
          </div>

          {/* Diagram */}
          <div className="relative flex items-center justify-between" style={{ minHeight: '580px' }}>

            {/* LEFT half-circle */}
            <div
              className="absolute left-0 top-1/2"
              style={{
                transform: 'translateY(-50%)',
                width: '200px',
                height: '400px',
                zIndex: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/equity-half-circle.png"
                alt=""
                aria-hidden="true"
                style={{
                  width: '200px',
                  height: '400px',
                  objectFit: 'cover',
                  objectPosition: 'left center',
                  borderRadius: '0 200px 200px 0',
                }}
              />
            </div>

            {/* RIGHT half-circle */}
            <div
              className="absolute right-0 top-1/2"
              style={{
                transform: 'translateY(-50%)',
                width: '200px',
                height: '400px',
                zIndex: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/equity-half-circle.png"
                alt=""
                aria-hidden="true"
                style={{
                  width: '200px',
                  height: '400px',
                  objectFit: 'cover',
                  objectPosition: 'right center',
                  transform: 'scaleX(-1)',
                  borderRadius: '0 200px 200px 0',
                }}
              />
            </div>

            {/* LEFT column — Stage, Market Potential, Team */}
            <div
              className="relative flex flex-col gap-10 items-start"
              style={{ zIndex: 1, paddingLeft: '220px', width: '50%' }}
            >
              {/* Stage */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#14358A',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    marginBottom: '10px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    Stage
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '160%', color: '#14358A', maxWidth: '260px' }}>
                  Pre-seed to Series B, or established businesses in turnaround/recovery
                </p>
              </div>

              {/* Market Potential */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#14358A',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    marginBottom: '10px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/>
                    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8l-2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    Market Potential
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '160%', color: '#14358A', maxWidth: '260px' }}>
                  Addressable market &gt;$100M with clear differentiation
                </p>
              </div>

              {/* Team */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#14358A',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    marginBottom: '10px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    Team
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '160%', color: '#14358A', maxWidth: '260px' }}>
                  Founder/executive team with domain expertise and execution capability
                </p>
              </div>
            </div>

            {/* RIGHT column — Clear Success Metrics, Alignment, Risk-Sharing */}
            <div
              className="relative flex flex-col gap-10 items-end"
              style={{ zIndex: 1, paddingRight: '220px', width: '50%' }}
            >
              {/* Clear Success Metrics */}
              <div className="flex flex-col items-end">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#14358A',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    marginBottom: '10px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    Clear Success Metrics
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '160%', color: '#14358A', maxWidth: '260px', textAlign: 'right' }}>
                  Early revenue, product-market fit, or clear path to both
                </p>
              </div>

              {/* Alignment */}
              <div className="flex flex-col items-end">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#14358A',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    marginBottom: '10px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/>
                    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8l-2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    Alignment
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '160%', color: '#14358A', maxWidth: '260px', textAlign: 'right' }}>
                  Values and vision that align with PMG&apos;s partnership approach
                </p>
              </div>

              {/* Risk-Sharing Mechanisms */}
              <div className="flex flex-col items-end">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#14358A',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    marginBottom: '10px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    Risk-Sharing Mechanisms
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '160%', color: '#14358A', maxWidth: '260px', textAlign: 'right' }}>
                  Our equity and milestone-based models align incentives with outcomes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 3: How a PMG Equity Partnership Works ─── */}
      <section className="w-full bg-white py-20 px-6 overflow-hidden relative">

        {/* Background zigzag pattern */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/equity-zigzag-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.08,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="max-w-[1000px] mx-auto relative" style={{ zIndex: 1 }}>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '46px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '18px',
              }}
            >
              How a PMG Equity Partnership Works
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '155%',
                color: '#333333',
                maxWidth: '660px',
                textAlign: 'center',
              }}
            >
              Our process is designed for mutual understanding, rigorous fit assessment, and
              integrated execution.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col" style={{ gap: '0' }}>

            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '24px',
                bottom: '24px',
                width: '2px',
                backgroundColor: '#14358A',
                transform: 'translateX(-50%)',
                zIndex: 0,
              }}
            />

            {[
              {
                side: 'left',
                title: 'Eligibility & Fit Assessment',
                desc: 'We begin with a comprehensive review of your company\'s stage, market potential, team, and specific challenges to ensure a strong mutual fit.',
              },
              {
                side: 'right',
                title: 'Define Scope & Negotiate Terms',
                desc: 'We clearly define the scope of support PMG will provide and negotiate the equity agreement, aligning our investment of expertise with the potential value we help create.',
              },
              {
                side: 'left',
                title: 'Execute the Consulting Engagement',
                desc: 'We seamlessly integrate our standard, results-oriented four-phase consulting model to address the agreed-upon scope and achieve the defined objectives.',
              },
              {
                side: 'right',
                title: 'Ongoing Advisory & Support (Optional)',
                desc: 'Following the initial engagement, we can provide ongoing strategic advisory or fractional support to nurture the long-term partnership.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex items-center"
                style={{
                  marginBottom: idx < 3 ? '48px' : '0',
                  justifyContent: item.side === 'left' ? 'flex-start' : 'flex-end',
                }}
              >
                {/* Card */}
                <div
                  style={{
                    width: '42%',
                    border: '1.5px solid #14358A',
                    borderRadius: '10px',
                    padding: '20px 24px',
                    backgroundColor: '#FFFFFF',
                    position: 'relative',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '130%',
                      color: '#14358A',
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
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
                    {item.desc}
                  </p>

                  {/* Dashed connector line from card to dot */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      [item.side === 'left' ? 'right' : 'left']: '-16%',
                      width: '16%',
                      height: '2px',
                      borderTop: '2px dashed #14358A',
                      transform: 'translateY(-50%)',
                    }}
                  />
                </div>

                {/* Centre dot on the timeline */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#14358A',
                    zIndex: 2,
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ─── Section 4: Why Choose PMG for an Equity Partnership? ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '46px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '18px',
              }}
            >
              Why Choose PMG for an Equity Partnership?
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '155%',
                color: '#333333',
                maxWidth: '660px',
                textAlign: 'center',
              }}
            >
              Our model provides distinct advantages designed for the startup, growth, or recovery
              ecosystem, creating an unparalleled alignment of interests.
            </p>
          </div>

          {/* Top row — 2 cards centred */}
          <div className="flex justify-center gap-6 mb-6">
            {[
              {
                title: 'Maximize Capital Preservation',
                desc: 'Access critical strategic guidance and hands-on operational support without draining your operating capital, allowing you to re-allocate funds to essential growth areas like product development or sales.',
              },
              {
                title: 'Perfectly Aligned Incentives',
                desc: 'Our success is directly tied to your valuation and long-term milestones. We are deeply motivated to achieve significant, measurable outcomes because your growth is unequivocally our growth.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  width: '340px',
                  border: '1.5px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
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
                  <Image src="/equity-icon-13.png" alt={card.title} width={28} height={28} style={{ objectFit: 'contain' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
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

          {/* Bottom row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'True Operating Partnership',
                desc: 'We transcend the traditional consultant model; we are deeply invested members of your team, committed to your long-term vision, and sharing both the risks and the substantial rewards of the journey.',
              },
              {
                title: 'Unlock Full PMG Expertise',
                desc: 'An Equity Partnership grants full, immediate access to PMG\'s entire range of world-class services and deep functional expertise across strategy, operations, M&A, and customer experience.',
              },
              {
                title: 'Unwavering Focus on Valuation',
                desc: 'Our relationship is engineered for long-term success, built on a mutual commitment to achieving defined milestones and realizing substantial shared value as your company scales and maximizes its valuation.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
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
                  <Image src="/equity-icon-13.png" alt={card.title} width={28} height={28} style={{ objectFit: 'contain' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
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

      {/* ─── Section 5: Gradient content section ─── */}
      <section
        className="w-full relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">

          {/* Main design image */}
          <div className="w-full flex justify-center">
            <Image
              src="/equity-ccc.png"
              alt="Equity Solutions"
              width={1200}
              height={693}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* "We don't provide cash investment" box */}
          <div className="w-full flex justify-center">
            <Image
              src="/equity-component-13.png"
              alt="We don't provide cash investment"
              width={1100}
              height={497}
              style={{ width: '100%', maxWidth: '1100px', height: 'auto', objectFit: 'contain' }}
            />
          </div>

        </div>
      </section>

      {/* ─── Section 6: Why PMG Believes in Expertise Capital ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '16px' }}>
              Why PMG Believes in Expertise Capital
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '155%', color: '#333333', maxWidth: '620px' }}>
              We choose equity partnerships because they create deeper alignment and better outcomes for everyone.
            </p>
          </div>

          {/* Row 1: 2 cards */}
          <div className="flex justify-center gap-6 mb-6">
            {[
              {
                bg: '/equity-c2.png',
                title: 'Maximum Alignment',
                desc: "When our success depends on yours, we're 100% focused on delivering exceptional results.",
              },
              {
                bg: '/equity-com.png',
                title: 'Access to Exceptional Companies',
                desc: 'Equity allows us to partner with innovative companies that have potential but limited cash.',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  width: '340px',
                  minHeight: '200px',
                  borderRadius: '12px',
                  backgroundImage: `url(${card.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '10px', backgroundColor: '#14358A', flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#14358A' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#333333' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 1 centered card */}
          <div className="flex justify-center">
            <div
              style={{
                width: '340px',
                minHeight: '200px',
                borderRadius: '12px',
                backgroundImage: 'url(/equity-c4.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '10px', backgroundColor: '#14358A', flexShrink: 0 }} />
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#14358A' }}>Proven Returns</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#333333' }}>Our equity partnerships consistently outperform traditional consulting engagements in long-term value creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Proven Partnerships, Measurable Impact ─── */}
      <section className="w-full bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '48px' }}>
            Proven Partnerships, Measurable Impact
          </h2>

          {/* 2 stat boxes */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 w-full">
            {[
              { stat: '$3,000,000+', label: 'In Consulting Fees Saved for Our Partners' },
              { stat: '12+', label: 'Expertise-for-Equity Partnerships Established' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '12px',
                  padding: '32px 40px',
                  minWidth: '280px',
                  flex: '1',
                  maxWidth: '380px',
                  textAlign: 'left',
                }}
              >
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '42px', color: '#14358A', marginBottom: '8px' }}>{item.stat}</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', color: '#333333', lineHeight: '150%' }}>{item.label}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', color: '#14358A', marginBottom: '8px' }}>
            Our partnerships span across North America, including:
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', color: '#333333' }}>
            British Columbia &nbsp;·&nbsp; Ontario &nbsp;·&nbsp; Nova Scotia &nbsp;·&nbsp; California &nbsp;·&nbsp; Texas &nbsp;·&nbsp; New York
          </p>
        </div>
      </section>

      {/* ─── Section 8: Our Commitment: True Accountability & Aligned Growth ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '18px' }}>
              Our Commitment: True Accountability &amp; Aligned Growth
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '155%', color: '#333333', maxWidth: '760px', textAlign: 'center' }}>
              As co-owners, our partnership is built on a shared, tangible asset: the value of your company. Our accountability is not just to a project plan, but to the long-term drivers of valuation. We structure our engagement to protect and grow our shared investment.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'Transparent Success Metrics',
                desc: 'We begin by aligning on the 2–3 key drivers of valuation that our work will directly impact. Whether it\'s scaling ARR, achieving product-led growth milestones, or executing an operational turnaround to improve EBITDA margins, we define success in the language of your next funding round or exit.',
              },
              {
                title: 'Governance & Transparent Stewardship',
                desc: 'Our involvement is designed for clarity, not control. We establish clear, lightweight governance—often through an Advisory Board—where you retain clear rights—to provide oversight and insight. You receive direct access to the same operational dashboards (built on our PMG and <12 framework) that we use to track progress.',
              },
              {
                title: 'Exit-Readiness Reviews',
                desc: "Quarterly, we conduct an 'Exit-Readiness Audit.' This isn't just a project update. It's a disciplined review of the company's health against the criteria of potential acquirors or Series B+ investors. We identify gaps in documentation, operational metrics, or financial storytelling, and work proactively to close them. Our goal is to ensure the company is always positioned for a successful liquidity event.",
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '12px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#14358A', flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#14358A' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#333333' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '160%', color: '#14358A', textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            The Result: You get more than a consultant or an investor. You get a co-owner who is structurally and incentivized to build fundamental, durable value, measured by the milestones that matter most to your company&apos;s future.
          </p>
        </div>
      </section>

      {/* ─── Section 9: How We Compare ─── */}
      <section className="w-full bg-[#F7F9FC] py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '14px' }}>
              How We Compare
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '155%', color: '#333333', maxWidth: '600px', textAlign: 'center' }}>
              PMG&apos;s Equity model offers a unique alternative to traditional funding routes, focused on hands-on expertise instead of just capital.
            </p>
          </div>

          {/* Comparison table */}
          <div style={{ border: '1.5px solid #E0E0E0', borderRadius: '14px', overflow: 'hidden' }}>
            {/* Header row */}
            <div className="grid grid-cols-4" style={{ borderBottom: '1.5px solid #E0E0E0' }}>
              <div style={{ padding: '18px 20px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#333' }} />
              {['PMG Equity Solutions', 'Traditional VC', 'Traditional Consulting'].map((col, i) => (
                <div
                  key={i}
                  style={{
                    padding: '18px 20px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: i === 0 ? '#14A44D' : '#333333',
                    backgroundColor: i === 0 ? '#EEF1F8' : 'transparent',
                    borderLeft: i === 0 ? '2px solid #14A44D' : '1px solid #E0E0E0',
                    textAlign: 'center',
                  }}
                >
                  {col}
                </div>
              ))}
            </div>

            {[
              {
                label: 'Capital',
                pmg: 'Capital Preserved',
                vc: '$ Cash',
                tc: '$ Capital & Salary',
              },
              {
                label: 'Expertise',
                pmg: 'Full PMG team',
                vc: 'Limited (board only)',
                tc: 'Fractional / limited',
              },
              {
                label: 'Alignment',
                pmg: 'Complete (equity)',
                vc: 'Partial (equity)',
                tc: 'Project-based',
              },
              {
                label: 'Speed',
                pmg: 'Immediate',
                vc: '3–6 months',
                tc: 'Immediate',
              },
              {
                label: 'Cost',
                pmg: 'Equity only',
                vc: 'Equity + dilution',
                tc: 'Cash ($200k/m)',
              },
            ].map((row, ri) => (
              <div
                key={ri}
                className="grid grid-cols-4"
                style={{ borderBottom: ri < 4 ? '1px solid #E0E0E0' : 'none' }}
              >
                <div style={{ padding: '16px 20px', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px', color: '#14358A' }}>{row.label}</div>
                {[row.pmg, row.vc, row.tc].map((val, ci) => (
                  <div
                    key={ci}
                    style={{
                      padding: '16px 20px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: ci === 0 ? 600 : 400,
                      fontSize: '14px',
                      color: ci === 0 ? '#14A44D' : '#333333',
                      backgroundColor: ci === 0 ? '#EEF1F8' : 'transparent',
                      borderLeft: ci === 0 ? '2px solid #14A44D' : '1px solid #E0E0E0',
                      textAlign: 'center',
                    }}
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 10: Ready to Explore an Equity Partnership? ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '48px' }}>
            Ready to Explore an Equity Partnership?
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: 'Start with Exploration',
                desc: "Not sure if equity is right for you? Let's discuss your situation.",
                btn: 'Schedule Discovery Call',
              },
              {
                title: 'Ready to Apply',
                desc: 'Understand our model and want to pursue a partnership.',
                btn: 'Begin Application',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '12px',
                  padding: '32px 28px',
                  width: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '10px', backgroundColor: '#14358A' }} />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '22px', color: '#14358A' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#333333' }}>{card.desc}</p>
                <button
                  style={{
                    marginTop: '8px',
                    background: 'linear-gradient(90deg, #6A36FF 0%, #AC5FE6 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 22px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.btn}
                </button>
              </div>
            ))}
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
