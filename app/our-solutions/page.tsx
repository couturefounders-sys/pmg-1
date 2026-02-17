import Header from '@/components/Header';

export default function OurSolutions() {
  const cards = [
    {
      icon: '/icon-bespoke.png',
      title: 'Bespoke Solutions',
      subtitle: 'For Complex, High-Stakes Challenges',
      description: 'Fully customized strategies and hands-on implementation designed for your most complex, high-stakes organizational and operational challenges.',
    },
    {
      icon: '/icon-operations.png',
      title: 'Operations & Strategy',
      subtitle: 'For Common Problems & Results',
      description: 'Fully customized strategies and hands-on implementation designed for your most complex, high-stakes organizational and operational challenges.',
    },
    {
      icon: '/icon-equity.png',
      title: 'Equity Consulting',
      subtitle: 'For Scale-Ups & Turnarounds',
      description: 'A shared-risk partnership where we invest our operational expertise in exchange for equity, ensuring our success is directly tied to your valuation and long-term growth.',
    },
    {
      icon: '/icon-active.png',
      title: 'Active Management',
      subtitle: 'For Hands-On Execution & Leaders',
      description: 'Placements of executive operators directly into key management roles to drive immediate, sustained success and build internal capability from within.',
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full pt-24 pb-0 px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center pt-12 pb-8">
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '20px',
              }}
            >
              Customized Excellence
            </p>

            {/* Main Heading */}
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '50px',
                lineHeight: '46px',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#14358A',
                marginBottom: '24px',
              }}
            >
              Solutions for Every Business Challenge
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
                maxWidth: '1258px',
                padding: '0 1rem',
              }}
            >
              Is your business facing challenges that require expert insight and a clear path forward? PMG offers a comprehensive suite of solutions designed to meet your unique needs, from strategic hurdles to leadership gaps.
            </p>
          </div>
        </div>
      </div>

      {/* Our Engagement Models Section */}
      <div className="w-full py-16 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            Our Engagement Models
          </h2>

          {/* Section Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto 48px auto',
            }}
          >
            One size never fits all. That&apos;s why we offer distinct ways to partner with us, each designed to deliver maximum value based on your specific needs.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {cards.map((card) => (
              <div
                key={card.title}
                className="depth-card flex flex-col"
                style={{
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                  padding: '24px',
                  minHeight: '391px',
                }}
              >
                {/* Icon */}
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '10px',
                    marginBottom: '24px',
                  }}
                />

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '29px',
                    lineHeight: '105%',
                    letterSpacing: '-0.03em',
                    color: '#14358A',
                    marginBottom: '8px',
                  }}
                >
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    color: '#68718B',
                    marginBottom: '8px',
                  }}
                >
                  {card.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    color: '#68718B',
                    marginBottom: 'auto',
                  }}
                >
                  {card.description}
                </p>

                {/* CTA Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '21.1px',
                    lineHeight: '30px',
                    color: '#14358A',
                    marginTop: '24px',
                  }}
                >
                  Bespoke Solutions
                  <span style={{ fontSize: '21px' }}>&rsaquo;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Not Sure Where to Start Section */}
      <div
        className="relative z-10 w-full"
        style={{
          backgroundImage: 'url(/bg-not-sure.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto text-center" style={{ padding: '80px 24px' }}>
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#FFFFFF',
              marginBottom: '32px',
            }}
          >
            Not Sure Where to Start?
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#FFFFFF',
              maxWidth: '1196px',
              margin: '0 auto 48px auto',
            }}
          >
            Get a personalized recommendation in 3 minutes. Our AI-powered advisor analyzes your specific challenges and goals to match you with the optimal PMG solution
          </p>

          {/* CTA Button */}
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '384px',
              height: '65px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get personalized Recommendation
          </button>
        </div>
      </div>

      {/* The Impact We Deliver Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-16">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            The Impact We Deliver
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto 48px auto',
            }}
          >
            Proven results across industries, driven by our proprietary approach to solving complex problems.
          </p>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1320px] mx-auto">
            {/* Card 1 - +$2.1M */}
            <div
              className="depth-card"
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '24px 28px',
                minHeight: '253px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '4px' }}>
                +$2.1M
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '8px' }}>
                Productivity Gain
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                Increased output from stable, trained teams and optimized scheduling.
              </p>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '26px', color: '#FFFFFF', background: '#91AFFC', borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: '12px' }}>
                Revenue/Growth
              </span>
            </div>

            {/* Card 2 - +$4.5M */}
            <div
              className="depth-card"
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '24px 28px',
                minHeight: '253px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '4px' }}>
                +$4.5M
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '8px' }}>
                Turnover Cost Avoidance
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                Reduction in recruitment and hiring costs from 60% lower turnover.
              </p>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '26px', color: '#FFFFFF', background: '#91AFFC', borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: '12px' }}>
                Revenue/Growth
              </span>
            </div>

            {/* Card 3 - +$34.3M */}
            <div
              className="depth-card"
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '24px 28px',
                minHeight: '253px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '4px' }}>
                +$34.3M
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '8px' }}>
                Revenue Retained
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                Annual Recurring Revenue preserved by increasing retention to 88%.
              </p>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '26px', color: '#FFFFFF', background: '#91AFFC', borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: '12px' }}>
                Revenue/Growth
              </span>
            </div>

            {/* Card 4 - Employer Network */}
            <div
              className="depth-card"
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '24px 28px',
                minHeight: '253px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '40px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '12px' }}>
                Employer Network
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                Strategic value of 50+ formal partnerships for graduate placement.
              </p>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '26px', color: '#FFFFFF', background: '#91AFFC', borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: '12px' }}>
                Revenue/Growth
              </span>
            </div>

            {/* Card 5 - -$8.4M */}
            <div
              className="depth-card"
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '24px 28px',
                minHeight: '253px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '4px' }}>
                -$8.4M
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '8px' }}>
                Direct Cost Savings
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                Reduction in support labor and infrastructure costs via automation.
              </p>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '26px', color: '#FFFFFF', background: '#7DFF95', borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: '12px' }}>
                Cost/Efficiency
              </span>
            </div>

            {/* Card 6 - +$500K */}
            <div
              className="depth-card"
              style={{
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: '24px 28px',
                minHeight: '253px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '4px' }}>
                +$500K
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '8px' }}>
                Revenue Protection
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#68718B', marginBottom: 'auto' }}>
                Mitigated loss from customer dissatisfaction and service inconsistency.
              </p>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '10px', lineHeight: '26px', color: '#FFFFFF', background: '#91AFFC', borderRadius: '40px', padding: '2px 10px', alignSelf: 'flex-start', marginTop: '12px' }}>
                Revenue/Growth
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Impact Summary Section */}
      <div className="relative z-10 py-16" style={{ background: '#EBF7FF' }}>
        <div className="mx-auto text-center px-6">
          {/* Label */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#000000',
              marginBottom: '8px',
            }}
          >
            Sample impact from displayed metrics:
          </p>

          {/* Big Number */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '8px',
            }}
          >
            $31.0M+
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              textAlign: 'center',
              color: '#333333',
              marginBottom: '32px',
            }}
          >
            In combined value delivered to clients
          </p>

          {/* CTA Button */}
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              padding: '16px 40px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Flexible Pricing Options Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-16">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            Flexible Pricing Options
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto 48px auto',
            }}
          >
            Your investment should be clear, fair, and deliver tangible value. Our pricing models are designed to be flexible, adapting to the solution you need and the scale of your business.
          </p>

          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
            {/* Card 1 - Project-Based Pricing */}
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
                  height: '153px',
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
                <img src="/icon-palette.png" alt="Project-Based Pricing" style={{ width: '64px', height: '64px' }} />
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
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                  Project-Based Pricing
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                  For Specific Goals & Defined Scope.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '24px', color: '#5F5F5F' }}>
                  Ideal for short-term, defined goals with clear deliverables. This fixed-cost model ensures complete budget predictability and scope control.
                </p>
              </div>
            </div>

            {/* Card 2 - Retainer & Ongoing Support */}
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
                  height: '153px',
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
                <img src="/icon-users-four.png" alt="Retainer & Ongoing Support" style={{ width: '64px', height: '64px' }} />
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
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                  Retainer & Ongoing Support
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                  Continuous Expertise at Your Fingertips.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '24px', color: '#5F5F5F' }}>
                  For businesses requiring consistent, proactive access strategic advice and specialized fractional expertise, having a deeper partnership for sustained long-term growth.
                </p>
              </div>
            </div>

            {/* Card 3 - Custom & Hybrid Agreements */}
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
                  width: '158px',
                  height: '177px',
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
                <img src="/icon-handshake.png" alt="Custom & Hybrid Agreements" style={{ width: '64px', height: '64px' }} />
              </div>

              {/* Card Content */}
              <div
                className="depth-card"
                style={{
                  border: '1px solid #99A1AF',
                  borderRadius: '13.06px',
                  padding: '24px 24px 24px 150px',
                  width: '100%',
                  minHeight: '177px',
                }}
              >
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: '#000000', marginBottom: '2px' }}>
                  Custom & Hybrid Agreements
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '24px', color: '#14358A', marginBottom: '4px' }}>
                  Solutions Structured Just For You.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '24px', color: '#5F5F5F' }}>
                  When complex challenges or multi-phase roadmaps require a non-standard approach, we design custom or hybrid terms that perfectly align investment structure with your strategic goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Accountability Framework Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-16">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '16px',
            }}
          >
            Our Accountability Framework
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto 64px auto',
            }}
          >
            We believe in total alignment. Our success is measured by yours. This isn&apos;t just a promise; it&apos;s built into our process.
          </p>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Framework Items */}
            <div className="relative flex flex-col gap-8" style={{ width: '500px' }}>
              {/* Connecting Lines SVG */}
              <svg
                className="absolute"
                style={{ left: '75px', top: '60px', width: '60px', height: '280px', zIndex: 0 }}
                viewBox="0 0 60 280"
                fill="none"
              >
                {/* Line from first circle to second */}
                <path d="M30 0 Q60 70 30 140" stroke="#14358A" strokeWidth="3" fill="none" />
                {/* Line from second circle to third */}
                <path d="M30 140 Q60 210 30 280" stroke="#14358A" strokeWidth="3" fill="none" />
              </svg>

              {/* Item 1 - Clear Success Metrics */}
              <div className="flex items-start gap-4 relative z-10">
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '3px solid #14358A',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: '#14358A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src="/list-checks.png" alt="Clear Success Metrics" style={{ width: '48px', height: '48px' }} />
                  </div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '120%',
                      color: '#14358A',
                      marginBottom: '8px',
                    }}
                  >
                    Clear Success Metrics
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: '#333333',
                      maxWidth: '280px',
                    }}
                  >
                    We define 3-5 key performance indicators before engagement begins.
                  </p>
                </div>
              </div>

              {/* Item 2 - Monthly Progress Reviews */}
              <div className="flex items-start gap-4 relative z-10">
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '3px solid #14358A',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: '#14358A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src="/strategy.png" alt="Monthly Progress Reviews" style={{ width: '48px', height: '48px' }} />
                  </div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '120%',
                      color: '#14358A',
                      marginBottom: '8px',
                    }}
                  >
                    Monthly Progress Reviews
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: '#333333',
                      maxWidth: '280px',
                    }}
                  >
                    Transparent reporting against agreed milestones and metrics.
                  </p>
                </div>
              </div>

              {/* Item 3 - Risk-Sharing Mechanisms */}
              <div className="flex items-start gap-4 relative z-10">
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '3px solid #14358A',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: '#14358A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src="/users-four.png" alt="Risk-Sharing Mechanisms" style={{ width: '48px', height: '48px' }} />
                  </div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '120%',
                      color: '#14358A',
                      marginBottom: '8px',
                    }}
                  >
                    Risk-Sharing Mechanisms
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: '#333333',
                      maxWidth: '280px',
                    }}
                  >
                    Our equity and milestone-based models align incentives with outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Average Heart ROI */}
            <div className="flex flex-col items-center">
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '120%',
                  color: '#14358A',
                  marginBottom: '24px',
                }}
              >
                Average Heart ROI
              </h3>
              {/* ROI Circle */}
              <div
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  border: '12px solid #14358A',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '96px',
                    lineHeight: '100%',
                    color: '#14358A',
                  }}
                >
                  22x
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '150%',
                  textAlign: 'center',
                  color: '#333333',
                  maxWidth: '300px',
                  marginTop: '24px',
                }}
              >
                Industry-leading returns, driven by a model built on tangible results and shared success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits Section */}
      <div className="relative z-10 py-16 lg:py-20" style={{ background: '#EBF7FF' }}>
        <div className="mx-auto px-6 lg:px-12 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            Unsure which solution fits your business?
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1196px',
              margin: '0 auto 48px auto',
            }}
          >
            Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.
          </p>
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Find your ideal solution
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '64px',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="max-w-[900px] mx-auto flex flex-col gap-4">
            {/* FAQ Item 1 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '3px solid #14358A',
                boxShadow: '0px 0px 1px 1px #00000026',
                minHeight: '72px',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  How do I know which engagement model is right for me?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 2 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: '72px',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  What is a typical timeline for seeing measurable results?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 3 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: '72px',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  How is PMG&apos;s pricing structured compared to other firms?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 4 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: '72px',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  What makes your &apos;functional consulting&apos; approach different?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* FAQ Item 5 */}
            <div
              className="w-full bg-white flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                minHeight: '72px',
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#A5A6F6', flexShrink: 0 }}></div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }}
                >
                  Do you only work with large corporations?
                </span>
              </div>
              <img src="/chevron-right.png" alt="Expand" style={{ width: '24px', height: '24px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Elevate Your Business Section */}
      <div className="relative z-10 py-16 lg:py-20" style={{ background: '#EBF7FF' }}>
        <div className="mx-auto px-6 lg:px-12 text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            Ready to Elevate Your Business?
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1196px',
              margin: '0 auto 48px auto',
            }}
          >
            Let&apos;s discuss how PMG can help you navigate your challenges and seize new opportunities.
          </p>
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Request a Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10" style={{ background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)', minHeight: '431px' }}>
        <div className="max-w-[1440px] mx-auto px-20 py-20">
          <div className="grid grid-cols-5 gap-16">
            {/* Logo Column */}
            <div className="flex items-start">
              <img
                src="/pmg-logo-footer.png"
                alt="PMG Logo"
                style={{ width: '151px', height: '145px', objectFit: 'contain' }}
              />
            </div>

            {/* What we Do Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                What we Do
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Our Content
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Community Programs</a></li>
              </ul>
              <h3
                className="text-white mt-8 mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Working with PMG
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Licensing</a></li>
              </ul>
            </div>

            {/* Our Models Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Our Models
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
