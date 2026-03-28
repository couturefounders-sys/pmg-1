import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatWeDontDoSection from '@/components/WhatWeDontDoSection';

export default function EquitySolutions() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-16 px-6">
        <div className="max-w-[min(900px,_90%)] mx-auto flex flex-col items-center text-center">

          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.25vw, 20px)',
              fontStyle: 'normal',
              lineHeight: '105%',
              color: '#000000',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            Equity Solutions
          </p>

          {/* Main Heading */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '40px',
              maxWidth: 'min(860px, 95%)',
            }}
          >
            A Strategic Partnership for Accelerated
            <br />
            Growth &amp; Shared Success
          </h1>

          {/* How Our Model Works box */}
          <div
            style={{
              width: '100%',
              border: '3px solid #14358A',
              borderRadius: '10px',
              background: '#FFFFFF',
              padding: '36px 48px',
              textAlign: 'center',
            }}
          >
            <h2
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
              How Our Model Works
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#68718B',
                marginBottom: '20px',
                maxWidth: 'min(760px, 95%)',
                margin: '0 auto 20px auto',
              }}
            >
              <span
                style={{
                  color: '#14358A',
                  fontWeight: 700,
                }}
              >
                PMG Equity Solutions
              </span>{' '}
              is a hybrid model where we provide our{' '}
              <span
                style={{
                  color: '#14358A',
                  fontWeight: 700,
                }}
              >
                full consulting services
              </span>{' '}
              (strategy, operations, execution) in exchange for{' '}
              <span
                style={{
                  color: '#14358A',
                  fontWeight: 700,
                }}
              >
                equity instead of cash
              </span>
              . You get
              world-class expertise without draining operating capital; we get aligned long-term
              upside.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(13px, 1.11vw, 18px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#68718B',
              }}
            >
              This is{' '}
              <span
                style={{
                  color: '#14358A',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}
              >
                not investment capital
              </span>
              —it&apos;s{' '}
              <span
                style={{
                  color: '#14358A',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}
              >
                expertise capital
              </span>
              .
            </p>
          </div>

        </div>
      </section>

      {/* ─── Section 2: Our Ideal Partner Profile ─── */}
      <section className="w-full bg-white py-20 px-6 overflow-hidden">
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
                marginBottom: '20px',
              }}
            >
              Our Ideal Partner Profile
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '1.75',
                color: '#333333',
                maxWidth: 'min(680px, 95%)',
                textAlign: 'center',
              }}
            >
              We look for partners with a compelling vision, strong leadership, and a clear market
              opportunity. While every company is unique, our most successful partnerships share
              these characteristics.
            </p>
          </div>

          {/* Diagram */}
          <div className="flex flex-col gap-16">

            {/* Row 1 — Left illustration */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/left_side.png" alt="" style={{ width: '720px', height: 'auto', marginLeft: '-208px', marginTop: '20px' }} />

            {/* Row 2 — Right illustration */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/right_side.png" alt="" style={{ width: '720px', height: 'auto', alignSelf: 'flex-end', marginRight: '-208px', marginTop: '-550px' }} />

          </div>
        </div>
      </section>

      {/* ─── Section 3: How a PMG Equity Partnership Works ─── */}
      <section className="w-full bg-white py-20 px-6 overflow-hidden relative">


        <div className="max-w-[1000px] mx-auto relative" style={{ zIndex: 1 }}>

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
                marginBottom: '18px',
              }}
            >
              How a PMG Equity Partnership Works
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '1.75',
                color: '#333333',
                maxWidth: 'min(660px, 95%)',
                textAlign: 'center',
              }}
            >
              Our process is designed for mutual understanding, rigorous fit assessment, and
              integrated execution.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#006FBA] transform -translate-x-1/2 rounded-full"></div>

            {/* Timeline Items */}
            <div className="relative z-10 space-y-24">
              {[
                { title: "Eligibility & Fit Assessment", text: "We begin with a comprehensive review of your company's stage, market potential, team, and specific challenges to ensure a strong mutual fit." },
                { title: "Define Scope & Negotiate Terms", text: "We clearly define the scope of support PMG will provide and negotiate the equity agreement, aligning our investment of expertise with the potential value we help create." },
                { title: "Execute the Consulting Engagement", text: "We seamlessly integrate our standard, results-oriented four-phase consulting model to address the agreed-upon scope and achieve the defined objectives." },
                { title: "Ongoing Advisory & Support (Optional)", text: "Following the initial engagement, we can provide ongoing strategic advisory or fractional support to nurture the long-term partnership." }
              ].map((item, index) => (
                <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Box */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'} relative`}>
                    {/* Shadow/Offset Box */}
                    <div
                      className={`absolute ${index % 2 === 0 ? 'right-[50px] top-[8px]' : 'left-[50px] top-[8px]'} w-full max-w-[412px] h-full`}
                      style={{
                        border: '3px solid #006FBA',
                        borderRadius: '16px',
                        zIndex: 0
                      }}
                    ></div>

                    {/* Main Card */}
                    <div
                      className="inline-block w-full max-w-[412px] p-6 relative bg-white"
                      style={{
                        background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(270.31deg, #14358A 0.32%, #006FBA 97.73%) border-box',
                        border: '3px solid transparent',
                        borderRadius: '16px',
                        zIndex: 1,
                        position: 'relative'
                      }}
                    >
                      <h4 className="text-[#14358A] font-bold font-dm-sans text-[clamp(18px,_1.67vw,_28px)] mb-3">{item.title}</h4>
                      <p className="font-dm-sans font-normal text-[clamp(13px,_1.11vw,_18px)] leading-[140%] text-[#68718B]">{item.text}</p>
                    </div>
                    {/* Dotted Connector */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 border-t-2 border-dotted border-[#006FBA] w-12 ${index % 2 === 0 ? 'right-4' : 'left-4'}`}
                      style={{ zIndex: 2 }}
                    ></div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#006FBA] border-4 border-white shadow-sm z-20"></div>

                  {/* Empty Space for Balance */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
            {/* End Cap */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[4px] h-12 bg-[#006FBA]"></div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Why Choose PMG for an Equity Partnership? ─── */}
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
                marginBottom: '18px',
              }}
            >
              Why Choose PMG for an Equity Partnership?
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                lineHeight: '1.75',
                color: '#333333',
                maxWidth: 'min(660px, 95%)',
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
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: '#14358A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Image src="/equity-icon-13.png" alt={card.title} width={36} height={36} style={{ objectFit: 'contain' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                    fontSize: 'clamp(12px, 1.04vw, 17px)',
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
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: '#14358A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Image src="/equity-icon-13.png" alt={card.title} width={36} height={36} style={{ objectFit: 'contain' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.01vw, 33px)',
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
                    fontSize: 'clamp(12px, 1.04vw, 17px)',
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

      {/* ─── Section 5: What We Don't Do (reusable component) ─── */}
      <WhatWeDontDoSection
        title="What We Don't Do"
        subtitle={
          <>
            Clarity is key. To ensure our partnerships are built on mutual understanding,
            <br />
            here&apos;s what our Equity Solutions model does not involve.
          </>
        }
        items={[
          "We don't provide cash investment (we provide expertise)",
          "We don't take controlling stakes (typically 2-15% equity)",
          "We don't replace your leadership (we augment it)",
          "We don't work with direct competitors of current partners",
        ]}
      />

      {/* ─── Section 6: Why PMG Believes in Expertise Capital ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '16px' }}>
              Why PMG Believes in Expertise Capital
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '1.75', color: '#333333', maxWidth: 'min(620px, 95%)' }}>
              We choose equity partnerships because they create deeper alignment and better outcomes for everyone.
            </p>
          </div>

          {/* Cards with blue tab design */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 - Maximum Alignment */}
            <div
              className="relative flex items-stretch"
              style={{ width: '540px' }}
            >
              {/* Blue Tab */}
              <div
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '-4px',
                  width: '144px',
                  height: 'clamp(100px, 10.63vw, 153px)',
                  background: '#14358A',
                  borderRadius: '13px 0 0 13px',
                  clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: '20px',
                  zIndex: 1,
                }}
              >
                <img src="/icon-palette.png" alt="Maximum Alignment" style={{ width: '64px', height: '64px' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: '24px 24px 24px 140px',
                  width: '100%',
                  minHeight: '153px',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '24px', color: '#000000', marginBottom: '8px' }}>
                  Maximum Alignment
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '24px', color: '#5F5F5F' }}>
                  When our success depends on yours, we're 100% focused on delivering exceptional results.
                </p>
              </div>
            </div>

            {/* Card 2 - Access to Exceptional Companies */}
            <div
              className="relative flex items-stretch"
              style={{ width: '540px' }}
            >
              {/* Blue Tab */}
              <div
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '-4px',
                  width: '144px',
                  height: 'clamp(100px, 10.63vw, 153px)',
                  background: '#14358A',
                  borderRadius: '13px 0 0 13px',
                  clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: '20px',
                  zIndex: 1,
                }}
              >
                <img src="/icon-users-four.png" alt="Access to Exceptional Companies" style={{ width: '64px', height: '64px' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: '24px 24px 24px 140px',
                  width: '100%',
                  minHeight: '153px',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '24px', color: '#000000', marginBottom: '8px' }}>
                  Access to Exceptional Companies
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '24px', color: '#5F5F5F' }}>
                  Equity allows us to partner with innovative companies that have potential but limited cash.
                </p>
              </div>
            </div>

            {/* Card 3 - Proven Returns */}
            <div
              className="relative flex items-stretch"
              style={{ width: '540px' }}
            >
              {/* Blue Tab */}
              <div
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '-4px',
                  width: '144px',
                  height: 'clamp(100px, 10.63vw, 153px)',
                  background: '#14358A',
                  borderRadius: '13px 0 0 13px',
                  clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: '20px',
                  zIndex: 1,
                }}
              >
                <img src="/icon-handshake.png" alt="Proven Returns" style={{ width: '64px', height: '64px' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: '24px 24px 24px 140px',
                  width: '100%',
                  minHeight: '153px',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '24px', color: '#000000', marginBottom: '8px' }}>
                  Proven Returns
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '24px', color: '#5F5F5F' }}>
                  Our equity partnerships consistently outperform traditional consulting engagements in long-term value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Proven Partnerships, Measurable Impact ─── */}
      <section className="w-full py-14 lg:py-20 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 48px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(32px, 3.33vw, 48px)' }}>
            Proven Partnerships, Measurable Impact
          </h2>

          {/* 2 stat boxes */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-10 w-full">
            {[
              { stat: '$3,000,000+', label: 'In Consulting Fees Saved for Our Partners' },
              { stat: '12+', label: 'Expertise-for-Equity Partnerships Established' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '10px',
                  padding: 'clamp(20px, 2.22vw, 32px) clamp(24px, 2.78vw, 40px)',
                  minWidth: '280px',
                  flex: '1',
                  maxWidth: 'min(380px, 100%)',
                  textAlign: 'left',
                }}
              >
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 2.92vw, 42px)', color: '#14358A', marginBottom: '8px' }}>{item.stat}</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.11vw, 16px)', color: '#000000', lineHeight: '150%' }}>{item.label}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.74vw, 25px)', lineHeight: '24px', letterSpacing: '0%', color: '#000000', marginBottom: '8px' }}>
            Our partnerships span across North America, including:
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(20px, 2.08vw, 30px)', lineHeight: '24px', letterSpacing: '0%', color: '#000000' }}>
            British Columbia · Ontario · Nova Scotia · California · Texas · New York
          </p>
        </div>
      </section>

      {/* ─── Section 8: Our Commitment: True Accountability & Aligned Growth ─── */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '18px' }}>
              Our Commitment: True Accountability &amp; Aligned Growth
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '1.75', color: '#333333', maxWidth: 'min(760px, 95%)', textAlign: 'center' }}>
              As co-owners, our partnership is built on a shared, tangible asset: the value of your company. Our accountability is not just to a project plan, but to the long-term drivers of valuation. We structure our engagement to protect and grow our shared investment.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: '/bcdimspx.png',
                title: 'Valuation-Based Objectives',
                desc: 'We begin by aligning on the 2–3 key drivers of valuation that our work will directly impact. Whether it\'s scaling ARR, achieving product-led growth milestones, or executing an operational turnaround to improve EBITDA margins, we define success in the language of your next funding round or exit.',
              },
              {
                icon: '/c_dk_ml.png',
                title: 'Governance & Transparent Stewardship',
                desc: 'Our involvement is designed for clarity, not control. We establish clear, lightweight governance—often through an Advisory Board with board observer rights—where you retain full control. You receive direct access to the same operational dashboards (built on our BVU and I-O frameworks) that we use to track progress.',
              },
              {
                icon: '/c_djckd.png',
                title: 'Exit-Readiness Reviews',
                desc: "Quarterly, we conduct an Exit-Readiness Audit. This isn't just a project update. It's a disciplined review of the company's health against the criteria of potential acquirors or Series B+ investors. We identify gaps in documentation, operational metrics, or financial storytelling, and work proactively to close them. Our goal is to ensure the company is always positioned for a successful liquidity event.",
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
                <div className="flex items-center gap-4 mb-2">
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: '#14358A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.01vw, 33px)', color: '#14358A', margin: 0 }}>{card.title}</h3>
                </div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.04vw, 17px)', lineHeight: '160%', color: '#333333' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', lineHeight: '160%', color: '#14358A', textAlign: 'center', maxWidth: 'min(820px, 95%)', margin: '0 auto' }}>
            The Result: You get more than a consultant or an investor. You get a co-owner who is structurally and incentivized to build fundamental, durable value, measured by the milestones that matter most to your company&apos;s future.
          </p>
        </div>
      </section>

      {/* ─── Section 9: How We Compare ─── */}
      <section className="w-full py-14 lg:py-20 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 48px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(16px, 1.67vw, 24px)' }}>
              How We Compare
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.25vw, 18px)', lineHeight: '1.75', color: '#333333', maxWidth: 'min(900px, 95%)', textAlign: 'center' }}>
              PMG&apos;s Equity model offers a unique alternative to traditional funding routes, focused on hands-on expertise instead of just capital.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PMG Equity Solutions Card - Blue border */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: '16px',
                padding: '32px 24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 24px)', color: '#14358A', textAlign: 'center', marginBottom: '8px' }}>
                PMG Equity Solutions
              </h3>

              {/* Capital */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/capital.png" alt="Capital" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Capital</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', margin: 0, paddingLeft: '28px' }}>
                  Preserved
                </p>
              </div>

              {/* Expertise */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/expertise.png" alt="Expertise" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Expertise</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', margin: 0, paddingLeft: '28px' }}>
                  Full PMG team
                </p>
              </div>

              {/* Alignment */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/alignmenyt.png" alt="Alignment" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Alignment</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', margin: 0, paddingLeft: '28px' }}>
                  Complete (equity)
                </p>
              </div>

              {/* Speed */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/speed.png" alt="Speed" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Speed</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', margin: 0, paddingLeft: '28px' }}>
                  Immediate
                </p>
              </div>

              {/* Cost */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/cost.png" alt="Cost" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Cost</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#14358A', margin: 0, paddingLeft: '28px' }}>
                  Equity only
                </p>
              </div>
            </div>

            {/* Traditional VC Card - Gray border */}
            <div
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                padding: '32px 24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 24px)', color: '#333333', textAlign: 'center', marginBottom: '8px' }}>
                Traditional VC
              </h3>

              {/* Capital */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/capital.png" alt="Capital" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Capital</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#FFA500', margin: 0, paddingLeft: '28px' }}>
                  $ Cash
                </p>
              </div>

              {/* Expertise */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/expertise.png" alt="Expertise" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Expertise</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  Limited (board only)
                </p>
              </div>

              {/* Alignment */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/alignmenyt.png" alt="Alignment" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Alignment</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#FFA500', margin: 0, paddingLeft: '28px' }}>
                  Partial (equity)
                </p>
              </div>

              {/* Speed */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/speed.png" alt="Speed" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Speed</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  3-6 months
                </p>
              </div>

              {/* Cost */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/cost.png" alt="Cost" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Cost</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  Equity + dilution
                </p>
              </div>
            </div>

            {/* Traditional Consulting Card - Gray border */}
            <div
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                padding: '32px 24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 24px)', color: '#333333', textAlign: 'center', marginBottom: '8px' }}>
                Traditional Consulting
              </h3>

              {/* Capital */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/capital.png" alt="Capital" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Capital</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  $ Outlay
                </p>
              </div>

              {/* Expertise */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/expertise.png" alt="Expertise" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Expertise</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  Full PMG team
                </p>
              </div>

              {/* Alignment */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/alignmenyt.png" alt="Alignment" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Alignment</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#FFA500', margin: 0, paddingLeft: '28px' }}>
                  Project-based
                </p>
              </div>

              {/* Speed */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/speed.png" alt="Speed" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Speed</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  Immediate
                </p>
              </div>

              {/* Cost */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Image src="/cost.png" alt="Cost" width={20} height={20} style={{ objectFit: 'contain' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#666666', margin: 0 }}>Cost</p>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#333333', margin: 0, paddingLeft: '28px' }}>
                  Cash ($250K+)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 10: Ready to Explore an Equity Partnership? ─── */}
      <section className="w-full py-14 lg:py-20 px-4 sm:px-6" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 48px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(40px, 4.44vw, 64px)' }}>
            Ready to Explore an Equity Partnership?
          </h2>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {/* Card 1: Start with Exploration */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: 'clamp(12px, 1.11vw, 16px)',
                padding: 'clamp(28px, 2.78vw, 40px) clamp(24px, 2.22vw, 32px)',
                width: '100%',
                maxWidth: 'min(480px, 95%)',
                minHeight: '280px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(16px, 1.39vw, 20px)',
                alignItems: 'flex-start',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 'clamp(48px, 3.89vw, 56px)',
                  height: 'clamp(48px, 3.89vw, 56px)',
                  borderRadius: '12px',
                  backgroundColor: '#14358A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginBottom: '8px',
                }}
              >
                <Image
                  src="/switch-button.png"
                  alt="Start with Exploration"
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.22vw, 32px)', lineHeight: '120%', color: '#14358A', margin: 0 }}>
                Start with Exploration
              </h3>

              {/* Description */}
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.11vw, 16px)', lineHeight: '150%', color: '#333333', margin: 0 }}>
                Not sure if equity is right for you? Let&apos;s discuss your situation.
              </p>

              {/* Button */}
              <button
                style={{
                  marginTop: 'auto',
                  background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: 'clamp(12px, 0.97vw, 14px) clamp(24px, 2.22vw, 32px)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 1.11vw, 16px)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.3s',
                }}
                className="hover:opacity-90"
              >
                Schedule Discovery Call
              </button>
            </div>

            {/* Card 2: Ready to Apply */}
            <div
              style={{
                border: '2px solid #14358A',
                borderRadius: 'clamp(12px, 1.11vw, 16px)',
                padding: 'clamp(28px, 2.78vw, 40px) clamp(24px, 2.22vw, 32px)',
                width: '100%',
                maxWidth: 'min(480px, 95%)',
                minHeight: '280px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(16px, 1.39vw, 20px)',
                alignItems: 'flex-start',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 'clamp(48px, 3.89vw, 56px)',
                  height: 'clamp(48px, 3.89vw, 56px)',
                  borderRadius: '12px',
                  backgroundColor: '#14358A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginBottom: '8px',
                }}
              >
                <Image
                  src="/efferent-three.png"
                  alt="Ready to Apply"
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.22vw, 32px)', lineHeight: '120%', color: '#14358A', margin: 0 }}>
                Ready to Apply
              </h3>

              {/* Description */}
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.11vw, 16px)', lineHeight: '150%', color: '#333333', margin: 0 }}>
                Understand our model and want to pursue a partnership.
              </p>

              {/* Button */}
              <button
                style={{
                  marginTop: 'auto',
                  background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: 'clamp(12px, 0.97vw, 14px) clamp(24px, 2.22vw, 32px)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 1.11vw, 16px)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.3s',
                }}
                className="hover:opacity-90"
              >
                Begin Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 11: Frequently Asked Questions ─── */}
      <section className="w-full py-14 lg:py-20 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[min(900px,_90%)] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 48px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', textAlign: 'center', marginBottom: 'clamp(32px, 3.33vw, 48px)' }}>
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {[
              {
                q: 'Why do I need to apply for a partnership?',
                a: 'Our equity model means we become co-owners in your success. We need to ensure strong mutual fit—strategically, culturally, and operationally—before committing our team and resources. The application process protects both parties and ensures we can deliver maximum impact.',
              },
              {
                q: 'What if you decline our partnership application?',
                a: 'If we determine an equity partnership isn\'t the right fit, we\'ll be transparent about why. In many cases, we can still support you through our traditional consulting or active management models. We never want a great company to go without the help it needs.',
              },
              {
                q: 'How does PMG determine how much equity to take?',
                a: 'Equity allocation (typically 2–15%) is based on the scope of work, the value we\'re expected to create, the stage of your company, and the duration of engagement. We model this collaboratively and transparently—there are no hidden terms.',
              },
              {
                q: 'Do you take board seats or voting rights?',
                a: 'Not by default. Our standard structure involves advisory equity with no voting rights or board control. In some cases, founders invite us to an advisory board seat, but this is always optional and founder-led.',
              },
              {
                q: 'How is this different from bringing on an investor or VC?',
                a: 'VCs provide capital. We provide expertise. A VC will write a check and expect returns; PMG will embed senior operators into your business to directly drive those returns. We don\'t dilute your cap table with cash—we earn our equity through measurable work.',
              },
              {
                q: 'Can I still raise capital from VCs or angel investors after partnering with PMG?',
                a: 'Absolutely. Our equity structure is designed to be investor-friendly. In fact, many of our partners find that PMG\'s involvement strengthens their fundraising position by demonstrating operational maturity and strategic backing.',
              },
              {
                q: 'Do you only work with startups, or do you also support later-stage companies?',
                a: 'We work with companies at various stages—from pre-revenue startups to scaling enterprises. The common thread is a need for senior-level operational or strategic expertise and a willingness to align through equity rather than (or in addition to) cash.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group"
                style={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(15px, 1.25vw, 20px)',
                    lineHeight: '150%',
                    color: '#14358A',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform duration-200" style={{ fontSize: '20px', color: '#14358A', marginLeft: '16px', flexShrink: 0 }}>&#9660;</span>
                </summary>
                <div style={{ padding: '0 24px 20px 24px' }}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.04vw, 16px)', lineHeight: '170%', color: '#333333', margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
