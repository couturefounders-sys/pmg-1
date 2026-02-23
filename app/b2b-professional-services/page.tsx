'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function B2BProfessionalServices() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[118px] pt-[200px] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[740px] z-10">
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
            }}
          >
            Optimizing High-Value Professional Services
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '30px',
              lineHeight: '140%',
            }}
          >
            Professional firms and internal departments are under increasing pressure to scale specialized expertise without compromising quality. We help organizations bridge the gap between operational complexity and high-margin service delivery, ensuring that growth never comes at the expense of excellence.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: '416px',
              height: '424px',
            }}
          >
            <img
              src="/b2b-professional-services-hero.png"
              alt="Professional Services"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>

      {/* Your Partner in Service Excellence Section */}
      <div className="relative w-full bg-white py-24 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2
            className="font-poppins font-semibold text-center"
            style={{
              fontSize: '42px',
              lineHeight: '120%',
              color: '#14358A',
              marginBottom: '48px',
            }}
          >
            Your Partner in Service Excellence
          </h2>

          <div
            className="font-inter font-normal text-center"
            style={{
              maxWidth: '1050px',
              fontSize: '19px',
              lineHeight: '165%',
              color: '#4A5568',
            }}
          >
            <p style={{ marginBottom: '28px' }}>
              Whether you are a law firm, accounting practice, architectural firm, or a corporate HR, IT, or finance department, your challenge is the same: deliver expert value efficiently. PMG provides the operational and strategic expertise to help you scale your impact.
            </p>
            <p>
              Our work is strengthened by deep functional knowledge in organizational design, process automation, and financial management, allowing us to deliver solutions that are not just strategic, but also highly practical and profitable.
            </p>
          </div>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: '48px', lineHeight: '105%', letterSpacing: '-3%' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: '30px', lineHeight: '140%', maxWidth: '1082px', textAlign: 'center' }}
            >
              We help service-based organizations build scalable, efficient, and client-centric operating models.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Service Delivery & Margin Optimization */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-strategy-transformation.png" alt="Service Delivery" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Service Delivery & Margin Optimization
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Refine service delivery models and implement value-based pricing to enhance profitability and optimize resource allocation.
              </p>
            </div>

            {/* Card 2: Operational Excellence for Corporate Functions */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-risk-resilience.png" alt="Operational Excellence" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Operational Excellence for Corporate Functions
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Streamline internal HR, Finance, and IT workflows, leveraging automation and shared service models to drastically reduce overhead.
              </p>
            </div>

            {/* Card 3: Client Relationship & Lifecycle Management */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-customer-experience.png" alt="Client Relationship" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Client Relationship & Lifecycle Management
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Develop robust client management strategies, optimizing acquisition, onboarding, retention, and growth using advanced CRM and analytics.
              </p>
            </div>

            {/* Card 4: Talent Management & Professional Development */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-regulatory-compliance.png" alt="Talent Management" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Talent Management & Professional Development
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Design career pathways and learning systems to attract, develop, and retain top professional talent and institutional knowledge.
              </p>
            </div>

            {/* Card 5: Partnership & Firm Governance */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-innovation-fintech.png" alt="Partnership Governance" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Partnership & Firm Governance
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Advise on partnership structures, succession planning, and governance to ensure long-term stability and strategic firm alignment.
              </p>
            </div>

            {/* Card 6: Risk Management & Quality Assurance */}
            <div
              className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                minHeight: '260px',
                padding: '32px',
                border: '3px solid #14358A',
                borderRadius: '10px'
              }}
            >
              <div className="mb-6">
                <img src="/icon-capital-performance.png" alt="Risk Management" style={{ width: '64px', height: '64px' }} />
              </div>
              <h3
                className="font-dm-sans font-bold text-[#14358A] mb-4"
                style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
              >
                Risk Management & Quality Assurance
              </h3>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{ fontSize: '16px', lineHeight: '140%' }}
              >
                Implement rigorous QA processes and risk frameworks to protect firm reputation, ensure compliance, and maintain service delivery standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div
        className="relative py-24 px-6"
        style={{
          backgroundImage: 'url(/projects-bg-financial.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '700px'
        }}
      >
        <div className="max-w-[1300px] mx-auto relative z-10">
          <h2
            className="font-poppins font-semibold text-white text-center mb-16"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%'
            }}
          >
            Our Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Project 1: Artemis Capital */}
            <div
              className="bg-[#E8F0FE] hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '340px',
                minHeight: '420px',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3
                className="font-poppins font-semibold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  color: '#1e40af',
                  marginBottom: '8px'
                }}
              >
                Artemis Capital
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      12%
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      reduction in operating expenses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      25%
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      reduction in low-value personnel spend
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      22x
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Project 2: Kraken */}
            <div
              className="bg-[#E8F0FE] hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '340px',
                minHeight: '420px',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3
                className="font-poppins font-semibold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  color: '#1e40af',
                  marginBottom: '8px'
                }}
              >
                Kraken
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      22%
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      increase in customer satisfaction
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      40%
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      reduction in signup-to-activation time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      23x
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Project 3: Artemis Capital */}
            <div
              className="bg-[#E8F0FE] hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '340px',
                minHeight: '420px',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3
                className="font-poppins font-semibold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  color: '#1e40af',
                  marginBottom: '8px'
                }}
              >
                Artemis Capital
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      25%
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      increase in qualified leads
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      15%
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      increase in customer renewal rates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1e40af"/>
                      <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold" style={{ fontSize: '24px', lineHeight: '110%', color: '#1e40af' }}>
                      9x
                    </p>
                    <p className="font-inter font-normal" style={{ fontSize: '14px', lineHeight: '140%', color: '#64748b' }}>
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    padding: '16px 32px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Functional Consulting Advantage Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2
            className="font-dm-sans font-bold text-center whitespace-nowrap"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              color: '#14358A',
              marginBottom: '60px'
            }}
          >
            The Functional Consulting Advantage
          </h2>

          <div
            className="font-dm-sans font-normal"
            style={{
              maxWidth: '1082px',
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#333333',
              textAlign: 'center'
            }}
          >
            The public sector operates under unique scrutiny. Generalist consulting often applies private-sector playbooks that fail because they ignore the complex political, legislative, and accountability constraints of government. The result is a well-intentioned but ultimately impractical strategy that gets bogged down in implementation.
            <br /><br />
            PMG's model ensures accountability and practical delivery. We deploy specialists in functions like fiscal management, digital service transformation, and efficient procurement who adapt proven, world-class operational frameworks to the public context. We deliver solutions that are not only innovative and efficient but are also transparent, legally compliant, and designed for political viability and citizen adoption.
          </div>

          <div className="mt-16 text-center">
            <h3
              className="font-dm-sans font-bold text-[#14358A] mb-4"
              style={{ fontSize: '32px', lineHeight: '120%' }}
            >
              Still Unsure?
            </h3>
            <p
              className="font-dm-sans font-normal"
              style={{
                fontSize: '18px',
                lineHeight: '140%',
                color: '#1e40af',
                maxWidth: '900px'
              }}
            >
              Discover why our execution-focused model generates superior returns across the investment lifecycle and asset classes.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="text-center flex flex-col items-center"
        style={{
          background: '#F0F7FC',
          padding: '80px 40px'
        }}
      >
        <h2
          className="font-dm-sans font-bold text-[#14358A] mb-6"
          style={{
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-3%'
          }}
        >
          Ready to Optimize Your Service Delivery?
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: '32px',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: '1196px'
          }}
        >
          Let&apos;s discuss how PMG can help you enhance efficiency, delight your guests, and drive profitability.
        </p>
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: '393px',
            height: '65px',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: '20px',
            lineHeight: '140%',
            letterSpacing: '0%'
          }}
        >
          Request a Consultation
        </button>
      </div>

      <Footer />
    </main>
  );
}
