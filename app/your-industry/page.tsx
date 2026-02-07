'use client';

import Header from '@/components/Header';

export default function YourIndustry() {
  const workCards = [
    {
      title: 'Strategy & Transformation',
      description: 'Set bold enterprise strategies and deliver transformation at scale, covering M&A integration, digital roadmaps, and operating model modernization.',
      icon: '/work-icon-1.png'
    },
    {
      title: 'Risk & Operational Resilience',
      description: 'Optimize processes and strengthen risk frameworks to enhance operational resilience, ensure regulatory compliance, and drive performance improvements.',
      icon: '/work-icon-2.png'
    },
    {
      title: 'Customer & Digital Experience',
      description: 'Build digital-first experiences, modernize service delivery, and improve customer acquisition and loyalty in a highly competitive market.',
      icon: '/work-icon-3.png'
    },
    {
      title: 'Regulatory & Compliance Strategy',
      description: 'Navigate evolving regulations, enhance compliance frameworks, and embed risk management practices for data governance, capital adequacy, and regulatory reporting.',
      icon: '/work-icon-4.png'
    },
    {
      title: 'Innovation & Fintech Partnerships',
      description: 'Advise on innovation strategy, product development, and strategic partnerships to capture value from emerging trends in payments, lending, and digital assets.',
      icon: '/work-icon-5.png'
    },
    {
      title: 'Capital & Financial Performance',
      description: 'Strengthen financial performance through capital optimization, portfolio review, and advanced financial modeling to ensure market competitiveness.',
      icon: '/work-icon-6.png'
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
            Navigating the Future of Finance
          </h1>
          
          <p 
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '30px',
              lineHeight: '140%',
              maxWidth: '740px'
            }}
          >
            As legacy institutions and agile FinTechs converge, the industry faces a dual mandate: absolute security and rapid innovation. We partner with financial leaders to navigate regulatory shifts and technological disruption, building the resilient systems required to thrive in a digital-first economy.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 z-10">
          <img 
            src="/finance-circle.png" 
            alt="Future of Finance" 
            style={{
              width: '416px',
              height: '416px',
              borderRadius: '50%',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
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

      {/* Your Strategic Partner Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 
            className="font-poppins font-semibold text-[#14358A] mb-16"
            style={{ fontSize: '50px', lineHeight: '46px' }}
          >
            Your Strategic Partner
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
            PMG partners with banks, asset managers, insurers, & fintechs to deliver a balance of 
            strategic insight & operational expertise. We enable organizations to strengthen 
            performance, manage risk, & deliver sustainable value in an environment of constant disruption.
            <br /><br />
            Our financial services work is complemented by PMG's cross-sector expertise in 
            technology & organizational transformation, equipping leaders to address 
            challenges across governance, digital adoption, & market positioning.
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
                  <img src={card.icon} alt={card.title} style={{ width: '48px', height: '48px' }} />
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
        className="relative w-full"
        style={{
          backgroundImage: 'url(/projects-bg.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '700px',
          maxWidth: '1452px',
          margin: '0 auto'
        }}
      >
        <div className="absolute w-full flex justify-center gap-5" style={{ top: '220px', left: '0', right: '0', padding: '0 80px' }}>
          {/* Prestige1 Capital */}
          <div 
            className="rounded-xl shadow-lg p-4 relative"
            style={{ 
              width: '220px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F4FF 100%)',
              border: '1px solid rgba(20, 53, 138, 0.1)'
            }}
          >
            <h3 className="font-dm-sans font-bold text-[#14358A] text-base mb-3">Prestige1 Capital</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#14358A]">💰</span>
                <div>
                  <span className="text-[#14358A] font-bold">$9.7M</span>
                  <p className="text-gray-500">in new yearly profit generated</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#14358A]">📈</span>
                <div>
                  <span className="text-[#14358A] font-bold">2.6x</span>
                  <p className="text-gray-500">higher ROI than typical investments</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#14358A]">📊</span>
                <div>
                  <span className="text-[#14358A] font-bold">43x</span>
                  <p className="text-gray-500">Return on Investment</p>
                </div>
              </div>
            </div>
            <button 
              className="mt-3 px-4 py-1.5 rounded-lg text-white font-semibold text-xs"
              style={{ background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)' }}
            >
              Learn More
            </button>
          </div>

          {/* Kraken */}
          <div 
            className="rounded-xl shadow-lg p-4"
            style={{ 
              width: '220px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F4FF 100%)',
              border: '1px solid rgba(20, 53, 138, 0.1)'
            }}
          >
            <h3 className="font-dm-sans font-bold text-[#14358A] text-base mb-3">Kraken</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#00C2FF]">☐</span>
                <div>
                  <span className="text-[#00C2FF] font-bold">22%</span>
                  <p className="text-gray-500">increase in customer satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00C2FF]">📊</span>
                <div>
                  <span className="text-[#00C2FF] font-bold">40%</span>
                  <p className="text-gray-500">reduction in signup-to-activation time</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00C2FF]">☑</span>
                <div>
                  <span className="text-[#00C2FF] font-bold">23x</span>
                  <p className="text-gray-500">Return on Investment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Artemis Capital */}
          <div 
            className="rounded-xl shadow-lg p-4"
            style={{ 
              width: '220px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F4FF 100%)',
              border: '1px solid rgba(20, 53, 138, 0.1)'
            }}
          >
            <h3 className="font-dm-sans font-bold text-[#00C2FF] text-base mb-3">Artemis Capital</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#00C2FF]">☐</span>
                <div>
                  <span className="text-[#00C2FF] font-bold">12%</span>
                  <p className="text-gray-500">in new yearly profit generated</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00C2FF]">📊</span>
                <div>
                  <span className="text-[#00C2FF] font-bold">25%</span>
                  <p className="text-gray-500">higher ROI than typical investments</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00C2FF]">☑</span>
                <div>
                  <span className="text-[#00C2FF] font-bold">22x</span>
                  <p className="text-gray-500">Return on Investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Functional Consulting Advantage */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="font-poppins font-semibold text-[#14358A] text-center mb-8"
            style={{ fontSize: '48px', lineHeight: '110%' }}
          >
            The Functional Consulting Advantage
          </h2>
          <p 
            className="font-montserrat font-normal text-[#333333] text-center mx-auto mb-16"
            style={{ 
              fontSize: '30px', 
              lineHeight: '140%', 
              maxWidth: '1082px' 
            }}
          >
            Financial Services and FinTech operate at the intersection of hyper-regulation and rapid technological change. Generalist consultants often provide broad recommendations on market trends or digital strategy that fail to account for the core challenges of regulatory compliance, legacy system modernization, and risk management. Their advice is often rendered impractical by the necessity of robust audit trails and jurisdictional complexity.
            <br /><br />
            PMG's model delivers validated, compliant execution. We deploy specialized functional operators, experts in areas like modernizing core banking systems, implementing AI-driven risk models, optimizing regulatory reporting (e.g., Basel, KYC/AML), and scaling new FinTech products. Our specialists don't just advise; they implement proven systems and processes that ensure your transformation is not only efficient and differentiated in the market but is fully auditable and compliant from day one.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-16 py-12">
            <div className="text-center">
              <div 
                className="font-dm-sans font-bold text-[#14358A]"
                style={{ fontSize: '72px', lineHeight: '100%' }}
              >
                1452.48
              </div>
              <p className="text-[#68718B] font-dm-sans text-lg mt-2">Million Processed</p>
            </div>
            <div className="text-6xl text-[#14358A] font-light">×</div>
            <div className="text-center">
              <div 
                className="font-dm-sans font-bold text-[#14358A]"
                style={{ fontSize: '72px', lineHeight: '100%' }}
              >
                13
              </div>
              <p className="text-[#68718B] font-dm-sans text-lg mt-2">Countries</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="PMG" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Partner with PMG Section */}
      <div 
        className="py-24 px-6 relative"
        style={{
          background: '#EAF6FF',
        }}
      >
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h2 
            className="font-poppins font-bold text-[#14358A] mb-6"
            style={{ fontSize: '44px', lineHeight: '120%' }}
          >
            Partner with PMG to Build a Resilient Future
          </h2>
          <p 
            className="font-montserrat font-normal text-[#333333] mb-10 mx-auto"
            style={{ fontSize: '24px', lineHeight: '140%', maxWidth: '800px' }}
          >
            Let's work together to navigate the complexities of the financial sector & 
            drive sustainable growth.
          </p>
          <button 
            className="text-white font-dm-sans font-bold px-10 py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            style={{ 
              fontSize: '16px',
              background: 'linear-gradient(90deg, #8B5CF6 0%, #A855F7 100%)', /* Purple gradient approximate */
            }}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="bg-[#14358A] text-white pt-48 pb-16 px-6 -mt-32 relative z-20"
        style={{
          clipPath: 'polygon(0 100px, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
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
              <h4 className="font-dm-sans font-bold text-xl mb-6">What we Do</h4>
              <ul className="space-y-3 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Our Solutions</a></li>
                <li><a href="#" className="hover:text-white">Rebuilding from within</a></li>
                <li><a href="#" className="hover:text-white">Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content & Working with PMG */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="font-dm-sans font-bold text-xl mb-6">Our Content</h4>
                <ul className="space-y-3 font-dm-sans text-white/80">
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                  <li><a href="#" className="hover:text-white">Insights & Innovations</a></li>
                  <li><a href="#" className="hover:text-white">Community Programs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-dm-sans font-bold text-xl mb-6">Working with PMG</h4>
                <ul className="space-y-3 font-dm-sans text-white/80">
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Licensing</a></li>
                </ul>
              </div>
            </div>

            {/* Our Models */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-6">Our Models</h4>
              <ul className="space-y-3 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Sector Convergence Model</a></li>
                <li><a href="#" className="hover:text-white">I-O Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-white">Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-6">Legal</h4>
              <ul className="space-y-3 font-dm-sans text-white/80 text-sm">
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
    </main>
  );
}
