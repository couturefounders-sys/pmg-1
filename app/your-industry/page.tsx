'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      description: 'For underperforming assets, we provide deep diagnostic and turnaround expertise, stabilizing operations and developing clear pathways back to profitability.',
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
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 sm:px-[clamp(24px,8.19vw,118px)] pt-[clamp(120px,13.89vw,200px)] pb-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[min(803px,_90%)] z-10">
          <h1
            className="font-dm-sans font-bold text-[#14358A]"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
            }}
          >
            Driving Alpha Through Operational Excellence
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: 'clamp(18px, 2.08vw, 34px)',
              lineHeight: '140%',
              maxWidth: 'min(740px, 95%)'
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
              height: 'clamp(280px, 31.04vw, 447px)',
              objectFit: 'cover'
            }}
          />
        </div>

      </div>

      {/* Decorative Bars - Top Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', top: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
        <div className="absolute" style={{ width: '200px', height: '60px', left: '-10px', top: '60px', opacity: 1, background: 'linear-gradient(90deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Your Partner in Value Creation Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            className="font-dm-sans font-bold text-[#14358A] mb-16"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em' }}
          >
            Your Partner in Value Creation
          </h2>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto"
            style={{
              fontSize: 'clamp(20px, 2.22vw, 36px)',
              lineHeight: '100%',
              maxWidth: 'min(1342px, 95%)',
              textAlign: 'center'
            }}
          >
            We partner with private equity firms, venture capitalists, and their portfolio companies to accelerate growth, optimize operations, and maximize returns. Our consultants are not just advisors; they are seasoned operators who embed themselves to drive tangible, measurable results.
            <br /><br />
            Our work in PE & VC is strengthened by our deep functional expertise in M&A, operations, finance, and technology, allowing us to provide end-to-end support throughout the investment lifecycle.
          </p>
        </div>
      </div>

      {/* Decorative Bars - Top Right + Bottom Left */}
      <div className="relative w-full pointer-events-none" style={{ height: 'clamp(80px, 11.11vw, 160px)' }}>
        {/* Top Right */}
        <div className="absolute" style={{ width: '200px', height: '60px', right: '-10px', top: '20px', opacity: 1, background: 'linear-gradient(270deg, #3B7FD4 0%, rgba(59, 127, 212, 0) 100%)', transform: 'rotate(-8deg)', transformOrigin: 'right center' }} />
        {/* Bottom Left */}
        <div className="absolute" style={{ width: '325px', height: '60px', left: '-10px', bottom: '20px', opacity: 0.2, background: '#888895', transform: 'rotate(-8deg)', transformOrigin: 'left center' }} />
      </div>

      {/* Our Work Section */}
      <div className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-[min(1300px,_95%)] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-dm-sans font-bold text-[#14358A] mb-6"
              style={{ fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em' }}
            >
              Our Work
            </h2>
            <p
              className="font-montserrat font-normal text-[#333333] mx-auto"
              style={{ fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', maxWidth: 'min(1082px, 95%)', textAlign: 'center' }}
            >
              We equip investment professionals and portfolio company leaders with the tools to create lasting value.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px 26px', justifyContent: 'center' }}>
            {workCards.map((card, index) => (
              <div
                key={index}
                className="bg-white"
                style={{
                  width: 'min(412px, 100%)',
                  padding: '23px 25px',
                  border: '3px solid #14358A',
                  borderRadius: '10px',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={card.icon} alt={card.title} style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                  <h3
                    className="font-dm-sans font-bold text-[#14358A] mb-0"
                    style={{ fontSize: 'clamp(18px, 2.01vw, 33px)', lineHeight: '105%', letterSpacing: '-3%', margin: 0 }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className="font-dm-sans font-normal text-[#68718B]"
                  style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%' }}
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
        className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(/projects-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '852px'
        }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />

        <div className="max-w-[min(1300px,_95%)] mx-auto">
          {/* Section Title */}
          <h2
            className="font-dm-sans font-bold text-white text-center mb-16"
            style={{
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em'
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
                width: 'clamp(280px, 26.46vw, 381px)',
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
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      $10M
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      3x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      43x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
                width: 'clamp(280px, 26.46vw, 381px)',
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
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      22%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      14%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      20x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
                width: 'clamp(280px, 26.46vw, 381px)',
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
                  fontSize: 'clamp(18px, 2.08vw, 34px)',
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      12%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      25%
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                      style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '110%', letterSpacing: '-3%', color: '#006FBA' }}
                    >
                      22x
                    </p>
                    <p
                      className="font-dm-sans font-normal"
                      style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '140%', color: '#68718B' }}
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
                    width: 'clamp(120px, 10.9vw, 157px)',
                    height: '60px',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                    fontSize: 'clamp(15px, 1.39vw, 22px)',
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
        <div className="max-w-[min(1440px,_95%)] mx-auto flex flex-col items-center">
          <h2
            className="text-center mb-10"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)', 
              lineHeight: '105%', 
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            The Functional Consulting Advantage
          </h2>

          <div className="max-w-[min(1082px,_90%)] text-center">
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(18px, 2.08vw, 34px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              You invest in potential; we unlock its maximum value. Whether you are a PE firm seeking tangible EBITDA growth, a VC firm demanding hyper-scale, or a Fund Manager optimizing operations, generalist advice often misses the mark. It provides high-level strategy that rarely translates into the deep operational precision needed to execute a 100-day plan or accelerate a high-growth scale-up. The challenge is always execution.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(18px, 2.08vw, 34px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              PMG&apos;s model is built for the entire capital lifecycle. We replace costly, theoretical counsel with execution-focused operators specializing in discrete value creation levers: commercial due diligence, rapid growth GTM strategy, post-merger integration, and fund operational efficiency. Our consultants embed, execute, and are accountable for measurable improvements, be it EBITDA, burn rate, or LP reporting, ensuring we deliver alpha that matters to your investors.
            </p>
          </div>

          <div className="text-center mt-16">
            <p
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.08vw, 34px)',
                lineHeight: '140%',
                color: '#364153',
              }}
            >
              Still Unsure?
            </p>
            <a
              href="/why-functional-consulting"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 1.46vw, 24px)',
                lineHeight: '30px',
                color: '#14358A',
                textDecoration: 'none',
              }}
            >
              Find out how we turn strategy into measurable operational scale
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
            fontSize: 'clamp(28px, 3.33vw, 56px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em'
          }}
        >
          Maximize Your Portfolio&apos;s Potential
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: 'clamp(20px, 2.22vw, 36px)',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: 'min(1196px, 95%)'
          }}
        >
          Let&apos;s discuss how our execution-focused approach can drive superior returns for your fund.
        </p>
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: 'clamp(260px, 27.29vw, 393px)',
            height: 'clamp(48px, 4.51vw, 65px)',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: 'clamp(15px, 1.39vw, 22px)',
            lineHeight: '140%',
            letterSpacing: '0%'
          }}
        >
          Request a Consultation
        </button>
      </div>

      <Footer />
    </main >
  );
}
