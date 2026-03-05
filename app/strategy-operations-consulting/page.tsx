'use client';

import Header from '@/components/Header';

export default function StrategyOperationsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[142px] pb-24 text-center">

        {/* Subheading */}
        <p
          className="mb-4"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '29px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Strategy & Operations Consulting
        </p>

        {/* Main Heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14358A',
            maxWidth: '1224px',
            margin: '0 auto 24px auto',
          }}
        >
          Transforming Systems into High-Yield Assets.
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
            margin: '0 auto',
          }}
        >
          We transform inefficient processes into predictable, high-yield assets. PMG provides the systems-driven strategy and execution required to align your operations perfectly with your growth strategy, guaranteeing maximum returns and sustained competitive advantage.
        </p>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-16">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>

        {/* Cards Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Capital Excellence */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-capital-excellence.png"
                alt="Capital Excellence"
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
              Capital Excellence
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Maximize ROI by leveraging expert strategies for optimal resource allocation and flawless project execution across the portfolio.
            </p>
          </div>

          {/* Cost Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-cost-management.png"
                alt="Cost Management"
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
              Cost Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Achieve sustainable cost reduction without compromising operational quality or competitive edge.
            </p>
          </div>

          {/* Enterprise Architecture & Workflow Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-enterprise-architecture.png"
                alt="Enterprise Architecture"
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
              Enterprise Architecture & Workflow Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Design and implement robust enterprise architecture to ensure seamless, scalable operations and strategic alignment.
            </p>
          </div>

          {/* Facility & Resource Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-facility-resource.png"
                alt="Facility & Resource Management"
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
              Facility & Resource Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Optimize physical resources and facility management for peak efficiency and significant fixed-cost reduction.
            </p>
          </div>

          {/* Lean, Six Sigma, Agile, or Sector Convergence */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-lean-sigma.png"
                alt="Lean, Six Sigma, Agile"
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
              Lean, Six Sigma, Agile, or Sector Convergence
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Apply industry-leading methodologies (Lean, Six Sigma, Agile) to eliminate waste and accelerate time-to-market.
            </p>
          </div>

          {/* Multi-unit Strategy */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-multi-unit-strategy.png"
                alt="Multi-unit Strategy"
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
              Multi-unit Strategy
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Synchronize complex, multi-unit operations with a cohesive strategy that guarantees consistency and maximizes performance across all locations.
            </p>
          </div>

          {/* Operations Scalability */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-operations-scalability.png"
                alt="Operations Scalability"
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
              Operations Scalability
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Future-proof your business by developing scalable systems and processes capable of supporting exponential growth.
            </p>
          </div>

          {/* Performance Metrics & KPI Optimization */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-performance-metrics.png"
                alt="Performance Metrics"
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
              Performance Metrics & KPI Optimization
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Refine and optimize KPIs and performance metrics to ensure organizational accountability and guarantee measurable success.
            </p>
          </div>

          {/* Risk & Crisis Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-risk-crisis.png"
                alt="Risk & Crisis Management"
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
              Risk & Crisis Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Safeguard continuity with proactive risk assessments and proven crisis management strategies tailored for market resilience.
            </p>
          </div>

          {/* Supply Chain & Procurement */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-supply-chain.png"
                alt="Supply Chain & Procurement"
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
              Supply Chain & Procurement
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Transform the supply chain into a competitive advantage via streamlined logistics and expert, cost-efficient procurement.
            </p>
          </div>

          {/* Technology Integration */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-technology-integration.png"
                alt="Technology Integration"
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
              Technology Integration
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Seamlessly integrate cutting-edge technologies (AI/Automation) to enhance operational efficiency and accelerate competitive advantage.
            </p>
          </div>

          {/* Product Development */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-product-development.png"
                alt="Product Development"
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
              Product Development
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Accelerate the product journey from concept to market with innovative strategies and processes engineered for immediate customer alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '105%',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Our Approach
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '25px',
              lineHeight: '140%',
              color: '#333',
              textAlign: 'center',
              maxWidth: '1000px',
              margin: '0 auto 60px',
            }}
          >
            Our approach is a unique blend of deep functional expertise and rigorous systems thinking. We solve complex problems by drawing on successful cross-sector strategies, identifying hidden value, and crafting customized execution roadmaps.
          </p>

          {/* Top two steps */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '60px',
              marginBottom: '0',
            }}
          >
            {/* Step 1 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Uncover Strategic Growth Avenues
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We identify emerging market trends and cross-sectoral opportunities to develop compelling strategies for long-term dominance.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Develop a Resilient Strategic Roadmap
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We create a clear and actionable roadmap that can withstand market volatility and position your organization for long-term success.
              </p>
            </div>
          </div>

          {/* SVG Roadmap - Figma design */}
          <svg
            viewBox="0 0 1031 309"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', display: 'block', margin: '40px 0' }}
          >
            {/* Left up-branch with endpoint dot */}
            <path fillRule="evenodd" clipRule="evenodd" d="M0 142.881V165.681H277.768C346.991 165.681 409.076 120.413 435.343 51.6224C447.773 50.7272 457.598 39.5261 457.598 25.8399C457.598 11.5688 446.915 -0.000244377 433.736 -0.000244377C420.557 -0.000244377 409.873 11.5688 409.873 25.8399C409.873 32.4119 412.143 38.409 415.866 42.9633C392.829 103.227 338.424 142.881 277.768 142.881H0ZM433.736 16.7199C438.387 16.7199 442.158 20.8031 442.158 25.8399C442.158 30.8768 438.387 34.96 433.736 34.96C429.085 34.96 425.314 30.8768 425.314 25.8399C425.314 20.8031 429.085 16.7199 433.736 16.7199Z" fill="#14358A" />

            {/* Right up-branch with endpoint dot */}
            <path fillRule="evenodd" clipRule="evenodd" d="M573.402 142.881V165.681H851.17C920.392 165.681 982.478 120.413 1008.75 51.6224C1021.17 50.7272 1031 39.5261 1031 25.8399C1031 11.5688 1020.32 -0.000244377 1007.14 -0.000244377C993.959 -0.000244377 983.275 11.5688 983.275 25.8399C983.275 32.4119 985.544 38.409 989.267 42.9633C966.231 103.227 911.826 142.881 851.17 142.881H573.402ZM1007.14 16.7199C1011.79 16.7199 1015.56 20.8031 1015.56 25.8399C1015.56 30.8768 1011.79 34.96 1007.14 34.96C1002.49 34.96 998.716 30.8768 998.716 25.8399C998.716 20.8031 1002.49 16.7199 1007.14 16.7199Z" fill="#14358A" />

            {/* Down-branch with endpoint dot */}
            <path fillRule="evenodd" clipRule="evenodd" d="M290.561 165.681V142.881H568.328C637.551 142.881 699.637 188.149 725.904 256.939C738.333 257.834 748.159 269.035 748.159 282.721C748.159 296.993 737.475 308.562 724.297 308.562C711.118 308.562 700.434 296.993 700.434 282.721C700.434 276.149 702.703 270.152 706.426 265.598C683.39 205.335 628.985 165.681 568.328 165.681H290.561ZM724.297 291.842C728.948 291.842 732.719 287.758 732.719 282.721C732.719 277.685 728.948 273.601 724.297 273.601C719.645 273.601 715.874 277.685 715.874 282.721C715.874 287.758 719.645 291.842 724.297 291.842Z" fill="#14358A" />

            {/* Circle 1 (left) */}
            <path d="M235.521 153.746C235.521 131.5 218.867 113.466 198.324 113.466C177.78 113.466 161.126 131.5 161.126 153.746C161.126 175.993 177.78 194.027 198.324 194.027C218.867 194.027 235.521 175.993 235.521 153.746Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M198.621 117.382C217.44 117.382 232.696 133.902 232.696 154.281C232.696 174.66 217.44 191.18 198.621 191.18C179.802 191.18 164.546 174.66 164.546 154.281C164.546 133.902 179.802 117.382 198.621 117.382ZM198.621 107.921C222.265 107.921 241.433 128.677 241.433 154.281C241.433 179.885 222.265 200.641 198.621 200.641C174.976 200.641 155.809 179.885 155.809 154.281C155.809 128.677 174.976 107.921 198.621 107.921Z" fill="#14358A" />
            <text x="198.621" y="154.281" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontSize="50" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="-1.5">1</text>

            {/* Circle 2 (center) */}
            <path d="M526.138 154.026C526.138 176.272 509.484 194.306 488.941 194.306C468.397 194.306 451.743 176.272 451.743 154.026C451.743 131.78 468.397 113.746 488.941 113.746C509.484 113.746 526.138 131.78 526.138 154.026Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M489.181 191.18C508 191.18 523.256 174.659 523.256 154.281C523.256 133.902 508 117.382 489.181 117.382C470.362 117.382 455.106 133.902 455.106 154.281C455.106 174.659 470.362 191.18 489.181 191.18ZM489.181 200.641C512.826 200.641 531.993 179.885 531.993 154.281C531.993 128.677 512.826 107.92 489.181 107.92C465.537 107.92 446.369 128.677 446.369 154.281C446.369 179.885 465.537 200.641 489.181 200.641Z" fill="#14358A" />
            <text x="489.181" y="154.281" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontSize="50" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="-1.5">2</text>

            {/* Circle 3 (right) */}
            <path d="M808.848 153.746C808.848 131.5 792.194 113.466 771.651 113.466C751.107 113.466 734.453 131.5 734.453 153.746C734.453 175.993 751.107 194.027 771.651 194.027C792.194 194.027 808.848 175.993 808.848 153.746Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M772.02 117.382C790.84 117.382 806.095 133.902 806.095 154.281C806.095 174.66 790.84 191.18 772.02 191.18C753.201 191.18 737.946 174.66 737.946 154.281C737.946 133.902 753.201 117.382 772.02 117.382ZM772.02 107.921C795.665 107.921 814.833 128.677 814.833 154.281C814.833 179.885 795.665 200.641 772.02 200.641C748.376 200.641 729.208 179.885 729.208 154.281C729.208 128.677 748.376 107.921 772.02 107.921Z" fill="#14358A" />
            <text x="772.02" y="154.281" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontSize="50" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="-1.5">3</text>
          </svg>

          {/* Step 3 - centered below SVG */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <h3
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '27px',
                lineHeight: '105%',
                color: '#14358A',
                letterSpacing: '-0.81px',
                marginBottom: '12px',
              }}
            >
              Empower Your Organization for the Future
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#333',
                margin: 0,
              }}
            >
              We provide strategic guidance, leadership development, and organizational change management to ensure successful execution.
            </p>
          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
            {/* Vertical Line */}
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 h-full"
                style={{
                  width: '4px',
                  background: '#14358A',
                  borderRadius: '2px',
                }}
              />

              {/* Product Lifecycle Management */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Product Lifecycle Management
                  </span>
                </div>
              </div>

              {/* Capital Excellence */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/paintbrush.png"
                      alt="Capital Excellence"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Capital Excellence
                  </span>
                </div>
              </div>

              {/* Data-Driven Insights */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/cursor-click.png"
                      alt="Data-Driven Insights"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Data-Driven Insights
                  </span>
                </div>
              </div>

              {/* KPI Optimization */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/rocket-launch.png"
                      alt="KPI Optimization"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    KPI Optimization
                  </span>
                </div>
              </div>

              {/* Lean Six Sigma */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/wrench.png"
                      alt="Lean Six Sigma"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Lean Six Sigma
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[715px]">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              A Multi-Faceted Approach to Success
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '25px',
                lineHeight: '140%',
                color: '#333333',
                textAlign: 'right',
              }}
            >
              Our team isn't limited to a single sector; our strength lies in our industry-agnostic expertise. By assembling a diverse group of experts with proven track records across various fields, we can apply a multi-faceted approach to every challenge. This unique blend of experience and methodology allows us to:
            </p>

            {/* Bullet Point 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '25px',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                Develop truly innovative strategies by leveraging best practices and successful models from a wide range of industries, not just your own.
              </p>
            </div>

            {/* Bullet Point 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '25px',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                Deliver unparalleled operational efficiency by drawing from the collective wisdom of proven leaders who have solved similar problems in different contexts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a
            href="/why-functional-consulting"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '30px',
              color: '#14358A',
              textDecoration: 'none',
            }}
          >
            Learn Why Functional Consulting Creates Better Outcomes
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* The Principle of Least Change Section */}
      <div
        className="relative w-full py-20"
        style={{
          backgroundImage: 'url(/principle-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <p
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            The Principle of Least Change
          </p>

          <h2
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            Maximum Impact. Minimal Disruption.
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              color: '#FFFFFF',
            }}
          >
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
        </div>
      </div>

      {/* Ready to unlock your organization's full potential CTA Section */}
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
            Ready to unlock your organization's full potential?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: '1196px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let us help you develop and execute a winning strategy that drives sustainable growth and positions your organization for long-term success.
          </p>

          <button
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '20px',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              padding: '16px 32px',
            }}
          >
            Request a Consultation
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
