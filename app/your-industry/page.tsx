'use client';

import Header from '@/components/Header';

export default function YourIndustry() {
  const workCards = [
    {
      title: 'Due Diligence & Deal Sourcing',
      description: 'We provide commercial, operational, and technical due diligence to help you assess opportunities with precision, ensuring your investment thesis is built on a solid foundation.',
      icon: '/icon-strategy-transformation.png'  // Circular arrows/refresh icon
    },
    {
      title: 'Portfolio Company Value Creation',
      description: 'Our hands-on operators work with portfolio company leadership to implement operational efficiencies, accelerate growth, and maximize EBITDA, from 100-day plans to long-term transformations.',
      icon: '/icon-risk-resilience.png'  // Checkmark icon
    },
    {
      title: 'Interim & Fractional Leadership',
      description: 'We fill critical leadership gaps within your portfolio companies with our own seasoned executives, providing stability and driving performance during transitions or high-growth phases.',
      icon: '/icon-customer-experience.png'  // Heart icon
    },
    {
      title: 'Exit Strategy & Preparation',
      description: 'We help you prepare portfolio companies for a successful exit, whether through IPO, strategic sale, or secondary buyout, ensuring you maximize returns.',
      icon: '/icon-regulatory-compliance.png'  // Building/pillars icon
    },
    {
      title: 'Fund Strategy & Operations',
      description: 'We advise investment firms on fund strategy, operational efficiency, and LP reporting to enhance performance and strengthen investor relations.',
      icon: '/icon-innovation-fintech.png'  // Lightbulb icon
    },
    {
      title: 'Risk Management & Turnaround',
      description: 'We fill critical leadership gaps within your portfolio companies with our own seasoned executives, providing stability and driving performance during transitions or high-growth phases.',
      icon: '/icon-capital-performance.png'  // Bar chart icon
    },
    {
      title: 'Commercialization Strategy',
      description: 'We develop and execute go-to-market strategies for portfolio companies, aligning product, sales, and marketing to accelerate revenue growth and capture market share.',
      icon: '/icon-regulatory-compliance.png'  // Building/pillars icon
    },
    {
      title: 'Post-Acquisition Integrations',
      description: 'Our experts manage the post-acquisition process, seamlessly integrating operations, technology, and culture to realize synergies and ensure the deal thesis is achieved.',
      icon: '/icon-innovation-fintech.png'  // Lightbulb icon
    },
    {
      title: 'Multi-Industry Portfolio Design',
      description: 'Leveraging our Sector Convergence model, we help firms build resilient, diversified portfolios by identifying high-potential assets in non-obvious, adjacent sectors.',
      icon: '/icon-capital-performance.png'  // Bar chart icon
    }
  ];

  const projects = [
    {
      name: 'Prescient Capital',
      image: '/project-prescient.png',
      stats: '27% IRR'
    },
    {
      name: 'Exalero',
      image: '/project-exalero.png',
      stats: 'Arteria Finance'
    },
    {
      name: 'Arteria Finance',
      image: '/project-arteria.png',
      stats: ''
    }
  ];

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[118px] pt-[200px] pb-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[803px] z-10">
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
            }}
          >
            Driving Alpha Through Operational Excellence
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '30px',
              lineHeight: '140%',
              maxWidth: '740px'
            }}
          >
            In a competitive capital landscape, sustainable returns require more than just a strong thesis—they require superior execution. We act as the operational bridge for portfolio companies, helping investors unlock hidden value and accelerate the path to a high-multiple exit.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 z-10">
          <img
            src="/pe-vc-hero.png"
            alt="Operational Excellence"
            style={{
              width: '461px',
              height: '447px',
              objectFit: 'cover'
            }}
          />
        </div>

      </div>

      {/* Background Shapes - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0">
        {/* Light Blue Bar */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '100px',
            left: '-100px',
            bottom: '100px',
            background: 'linear-gradient(90deg, #D4E2F8 0%, rgba(212, 226, 248, 0) 100%)',
            transform: 'rotate(-15deg)',
            opacity: 0.8
          }}
        />
        {/* Dark Blue Bar */}
        <div
          className="absolute"
          style={{
            width: '500px',
            height: '120px',
            left: '-50px',
            bottom: '50px',
            background: 'linear-gradient(90deg, #3B82F6 0%, rgba(59, 130, 246, 0) 100%)',
            transform: 'rotate(-15deg)',
            opacity: 0.8
          }}
        />
      </div>

      {/* Your Partner in Value Creation Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            className="font-poppins font-semibold text-[#14358A] mb-16"
            style={{ fontSize: '50px', lineHeight: '46px' }}
          >
            Your Partner in Value Creation
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto"
            style={{
              fontSize: '32px',
              lineHeight: '100%',
              maxWidth: '1342px',
              textAlign: 'center'
            }}
          >
            We partner with private equity firms, venture capitalists, and their portfolio companies to accelerate growth, optimize operations, and maximize returns. Our consultants are not just advisors; they are seasoned operators who embed themselves to drive tangible, measurable results.
            <br /><br />
            Our work in PE & VC is strengthened by our deep functional expertise in M&A, operations, finance, and technology, allowing us to provide end-to-end support throughout the investment lifecycle.
          </p>
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
              Our work supports strategy, operations, & transformation—equipping
              financial leaders with the tools to deliver meaningful change.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
                style={{
                  width: '412px',
                  minHeight: '260px',
                  padding: '32px',
                  border: '3px solid #14358A',
                  borderRadius: '10px'
                }}
              >
                <div className="mb-6">
                  <img src={card.icon} alt={card.title} style={{ width: '64px', height: '64px' }} />
                </div>
                <h3
                  className="font-dm-sans font-bold text-[#14358A] mb-4"
                  style={{ fontSize: '29px', lineHeight: '105%', letterSpacing: '-3%' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-dm-sans font-normal text-[#68718B]"
                  style={{ fontSize: '16px', lineHeight: '140%' }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div
        className="relative py-24 px-6"
        style={{
          backgroundImage: 'url(/projects-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '852px'
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-white text-center mb-16"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%'
            }}
          >
            Our Projects
          </h2>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1: Trilogy Software */}
            <div
              className="bg-white hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '381px',
                minHeight: '378px',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3
                className="font-dm-sans font-bold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  letterSpacing: '-3%',
                  color: '#006FBA'
                }}
              >
                Trilogy Software
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12h2m2 0h6" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 16h10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="1.5" fill="#006FBA"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      $10M
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      in new yearly profit generated
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M6 12l4 4 8-8" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      3x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      higher ROI than typical investments
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12l3 3 7-7" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      43x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2: Kraken */}
            <div
              className="bg-white hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '381px',
                minHeight: '378px',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3
                className="font-dm-sans font-bold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  letterSpacing: '-3%',
                  color: '#006FBA'
                }}
              >
                Kraken
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      22%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      reduction in customer churn
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M6 12l4 4 8-8" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      14%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      increase in post-acquisition margin
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12l3 3 7-7" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      20x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3: Artemis Capital */}
            <div
              className="bg-white hover:shadow-xl transition-shadow duration-300"
              style={{
                width: '381px',
                minHeight: '378px',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3
                className="font-dm-sans font-bold text-center"
                style={{
                  fontSize: '30px',
                  lineHeight: '110%',
                  letterSpacing: '-3%',
                  color: '#006FBA'
                }}
              >
                Artemis Capital
              </h3>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      12%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      reduction in operating expenses
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M6 12l4 4 8-8" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      25%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      reduction in low-value personnel spend
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#006FBA" strokeWidth="2"/>
                      <path d="M7 12l3 3 7-7" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-dm-sans font-bold"
                      style={{ fontSize: '24px', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      22x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: '16px', lineHeight: '140%', color: '#68718B' }}
                    >
                      Return on Investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto mx-auto">
                <button
                  className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '157px',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: '20px',
                    lineHeight: '140%'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Functional Consulting Advantage */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] text-center mb-12"
            style={{ 
              fontSize: '48px', 
              lineHeight: '105%', 
              letterSpacing: '-3%',
              maxWidth: '785px'
            }}
          >
            The Functional Consulting Advantage
          </h2>
          <div className="flex flex-col gap-8 mb-16">
            <p
              className="font-dm-sans font-normal text-[#333333] text-center"
              style={{
                fontSize: '30px',
                lineHeight: '140%',
                letterSpacing: '0%',
                maxWidth: '1082px'
              }}
            >
              You invest in potential; we unlock its maximum value. Whether you are a PE firm seeking tangible EBITDA growth, a VC firm demanding hyper-scale, or a Fund Manager optimizing operations, generalist advice often misses the mark. It provides high-level strategy that rarely translates into the deep operational precision needed to execute a 100-day plan or accelerate a high-growth scale-up. The challenge is always execution.
            </p>
            <p
              className="font-dm-sans font-normal text-[#333333] text-center"
              style={{
                fontSize: '30px',
                lineHeight: '140%',
                letterSpacing: '0%',
                maxWidth: '1082px'
              }}
            >
              PMG&apos;s model is built for the entire capital lifecycle. We replace costly, theoretical counsel with execution-focused operators specializing in discrete value creation levers: commercial due diligence, rapid growth GTM strategy, post-merger integration, and fund operational efficiency. Our consultants embed, execute, and are accountable for measurable improvements, be it EBITDA, burn rate, or LP reporting, ensuring we deliver alpha that matters to your investors.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p
              className="font-dm-sans font-bold text-[#364153]"
              style={{ fontSize: '30px', lineHeight: '140%' }}
            >
              Still Unsure?
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 font-inter font-semibold text-[#14358A] hover:opacity-80 transition-opacity"
              style={{ fontSize: '21.1px', lineHeight: '30px' }}
            >
              Find out how we turn strategy into measurable operational scale
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center justify-center bg-[#14358A] rounded-full w-6 h-6">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 9L7.5 6L4.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Maximize Your Portfolio's Potential Section */}
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
          Maximize Your Portfolio&apos;s Potential
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
          Let&apos;s discuss how our execution-focused approach can drive superior returns for your fund.
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

      {/* Footer */}
      <footer
        className="text-white pt-16 pb-12 px-6 relative z-20"
        style={{
          background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)'
        }}
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
                  <li><a href="#" className="hover:text-white">Insights & Innovations</a></li>
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
                <li><a href="#" className="hover:text-white">Privacy & Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="hover:text-white">AI & Data Ethics Statement</a></li>
                <li><a href="#" className="hover:text-white">Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="hover:text-white">Intellectual Property</a></li>
                <li><a href="#" className="hover:text-white">Regionalization Policy</a></li>
                <li><a href="#" className="hover:text-white">Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main >
  );
}
