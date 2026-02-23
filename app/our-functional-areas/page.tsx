'use client';

import Header from '@/components/Header';

export default function OurFunctionalAreas() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[171px] pb-16 text-center">
        <h1
          className="mb-6"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            color: '#14358A',
            maxWidth: '778px',
            margin: '0 auto 24px auto',
          }}
        >
          Functional Mastery. Executed.
        </h1>

        <p
          className="mb-10"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            maxWidth: '1258px',
            margin: '0 auto 40px auto',
          }}
        >
          We deliver bespoke solutions that reject generalized frameworks. Expect measurable, tangible business improvements and significant ROI precisely aligned with your strategic, high-stakes objectives.
        </p>

        <button
          className="text-white hover:opacity-90 transition-opacity"
          style={{
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            borderRadius: '10px',
            width: '393px',
            height: '65px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '140%',
          }}
        >
          See why PMG is the right choice
        </button>
      </div>

      {/* Our Functional Areas Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
            }}
          >
            Our Functional Areas
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1082px',
              margin: '0 auto',
            }}
          >
            We deploy world-class expertise to deliver a range of services uniquely tailored to your complex requirements.
          </p>
        </div>

        {/* Row 1: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 max-w-[1264px] mx-auto">
          {/* Operations & Strategy */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-operations-strategy.png"
                alt="Operations & Strategy"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Operations & Strategy
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Efficiency Engineered, Excellence Delivered.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* People & Organizations */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-people-organizations.png"
                alt="People & Organizations"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              People & Organizations
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              We solve the "People Tax" on your P&L.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>

        {/* Row 2: 3 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 max-w-[1264px] mx-auto">
          {/* Customer Experience */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-customer-experience.png"
                alt="Customer Experience"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Customer Experience
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Engineering high-retention, high-value journeys.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Mergers & Acquisitions */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-mergers-acquisitions.png"
                alt="Mergers & Acquisitions"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Mergers & Acquisitions
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Realizing the synergies that others leave on the table.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Branding & Marketing */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-branding-marketing.png"
                alt="Branding & Marketing"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Branding & Marketing
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Crafting Identities That Captivate.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>

        {/* Row 3: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-[1264px] mx-auto">
          {/* BPO & Fractional Talent */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-bpo-talent.png"
                alt="BPO & Fractional Talent"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              BPO & Fractional Talent
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Scaling your infrastructure without scaling your overhead.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Crisis & Transition Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              width: '412px',
              minHeight: '237px',
            }}
          >
            <div className="mb-6">
              <img
                src="/functional-crisis-management.png"
                alt="Crisis & Transition Management"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Crisis & Transition Management
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Navigating Uncertainty, Delivering Stability.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>
      </div>

      {/* Ready for a Definitive Path to Transformation Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '46px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14358A',
              maxWidth: '1191px',
              margin: '0 auto 24px auto',
            }}
          >
            Ready for a Definitive Path to Transformation?
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1082px',
              margin: '0 auto',
            }}
          >
            PMG's expertise translates directly into superior results. Explore our structured engagement models, ensuring the right expertise is delivered in a way that aligns perfectly with your growth goals.
          </p>
        </div>

        {/* Solution Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1264px] mx-auto">
          {/* Out-of-the-Box Solutions */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
            }}
          >
            <div className="mb-6">
              <img
                src="/solution-out-of-box.png"
                alt="Out-of-the-Box Solutions"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Out-of-the-Box Solutions
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Simple · Affordable · Self-Directed
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              Pre-packaged, technology-enabled offerings designed to rapidly address common industry challenges and deliver immediate value.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Bespoke Solutions */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
            }}
          >
            <div className="mb-6">
              <img
                src="/solution-bespoke.png"
                alt="Bespoke Solutions"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Bespoke Solutions
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Custom · Flexible · Fully Supported
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              Tailored to your specific, complex needs. Our custom solutions are managed hands-on by our world-class expert team, ensuring high-impact innovation.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Active Management Solutions */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
            }}
          >
            <div className="mb-6">
              <img
                src="/solution-active-management.png"
                alt="Active Management Solutions"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Active Management Solutions
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Flexible · Accountable · Built for success
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              We embed a PMG executive directly into your leadership team for hands-on, accountable execution and immediate strategic impact, fully backed by our global.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>

          {/* Equity Engagements */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '335px',
            }}
          >
            <div className="mb-6">
              <img
                src="/solution-equity.png"
                alt="Equity Engagements"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Equity Engagements
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Aligned · Scalable · Capital-Efficient
            </p>
            <p
              className="mb-6 flex-grow"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                letterSpacing: '0px',
                color: '#68718B',
              }}
            >
              Access top-tier strategy and execution without draining vital cash reserves. PMG invests proprietary expertise for equity, directly aligning our success with your maximized outcomes.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '21.1px',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Explore Strategic solutions ›
            </a>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits Section */}
      <div
        className="relative w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Unsure which solution fits your business?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1196px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.
          </p>

          <button
            className="text-white hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
            }}
          >
            Find your ideal solution
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-20" style={{ background: '#1B45B4' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
              <img src="/pmg-logo.png" alt="PMG Logo" style={{ width: 'auto', height: '80px', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>What we Do</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Our Content</h3>
              <ul className="space-y-4 mb-10">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Community Programs</a></li>
              </ul>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Working with PMG</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Licensing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Our Models</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Business Value-Unit Model</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
