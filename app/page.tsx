import Header from '@/components/Header';

export default function Home() {
  return (
    <main
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: 'url(/hero-bg-new.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Header */}
        <Header />

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4" style={{ minHeight: '100vh', paddingTop: '100px' }}>
        {/* Main Heading */}
        <h1 
          className="text-center text-white font-dm-sans font-bold"
          style={{
            fontSize: '60px',
            lineHeight: '110%',
            letterSpacing: '-0.03em',
            maxWidth: '760px',
            marginBottom: '20px'
          }}
        >
          Strategy is Intention.
          <br />
          Execution is Reality.
        </h1>

        {/* Description */}
        <p 
          className="text-center font-dm-sans font-normal"
          style={{
            fontSize: '18px',
            lineHeight: '135%',
            maxWidth: '820px',
            color: '#FFFFFF',
            marginBottom: '40px',
            opacity: 0.95
          }}
        >
          PMG bridges the gap between high-level blueprints and verifiable enterprise value.
          We do not just advise from the sidelines. We provide the embedded leadership 
          and functional mastery required to turn strategic goals into measurable ROI
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {/* Primary Button */}
          <button 
            className="rounded-[10px] text-white font-dm-sans font-semibold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              padding: '20px 40px',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Request a Private Executive Briefing
          </button>

          {/* Secondary Button */}
          <button 
            className="rounded-[10px] text-white font-dm-sans font-semibold border border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            style={{
              padding: '20px 40px',
              fontSize: '16px',
              background: 'transparent',
              cursor: 'pointer'
            }}
          >
            Explore Strategic solutions
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      </div>

      {/* What We Can Do Section */}
      <div className="relative z-10 bg-white pt-24 pb-16">
        {/* Trusted Text */}
        <p 
          className="text-center font-montserrat font-medium mb-12 uppercase tracking-wide"
          style={{
            fontSize: '14px',
            lineHeight: '100%',
            color: '#6B7280',
            maxWidth: '765px',
            margin: '0 auto 3rem auto'
          }}
        >
          Trusted as a strategic partner to global leaders, accelerators, and the "Big 4."
        </p>

        {/* Client Logos */}
        <div className="flex items-center justify-center gap-16 mb-16 px-4 flex-wrap">
          <img 
            src="/accenture.png" 
            alt="Accenture" 
            style={{ height: '40px', width: 'auto', opacity: 0.8 }}
          />
          <img 
            src="/vanguard.png" 
            alt="Vanguard" 
            style={{ height: '40px', width: 'auto', opacity: 0.8 }}
          />
          <img 
            src="/kenvue.png" 
            alt="Kenvue" 
            style={{ height: '40px', width: 'auto', opacity: 0.8 }}
          />
        </div>

        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-semibold mb-8"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
            marginBottom: '2rem'
          }}
        >
          What we can do for you?
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-medium mb-12"
          style={{
            fontSize: '32px',
            lineHeight: '100%',
            color: '#333333',
            maxWidth: '1342px',
            margin: '0 auto 3rem auto',
            padding: '0 2rem'
          }}
        >
          PMG bridges the gap between high-level blueprints and verifiable enterprise value. We do not just advise from the sidelines. We provide the embedded leadership and functional mastery required to turn strategic goals into measurable ROI
        </p>

        {/* Services List */}
        <div className="max-w-[1353px] mx-auto" style={{ marginTop: '3rem' }}>
          {/* Service Items */}
          <div className="rounded-t-xl overflow-hidden" style={{ boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)' }}>
            {/* Crisis & Transition Management */}
            <div 
              className="flex items-center justify-between px-12 py-8 border-b border-white"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">Crisis & Transition Management</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">Navigating Uncertainty, Delivering Stability.</span>
            </div>

            {/* Mergers & Acquisitions */}
            <div 
              className="flex items-center justify-between px-12 py-8 border-b border-white"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">Mergers & Acquisitions</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">Realizing the synergies that others leave on the table.</span>
            </div>

            {/* Branding & Marketing */}
            <div 
              className="flex items-center justify-between px-12 py-8 border-b border-white"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">Branding & Marketing</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">Crafting Identities That Captivate.</span>
            </div>

            {/* BPO & Fractional Talent */}
            <div 
              className="flex items-center justify-between px-12 py-8 border-b border-white"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">BPO & Fractional Talent</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">Scaling your infrastructure without scaling your overhead.</span>
            </div>

            {/* Custom Experience */}
            <div 
              className="flex items-center justify-between px-12 py-8 border-b border-white"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">Custom Experience</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">Engineering high-retention, high-value journey</span>
            </div>

            {/* People & Organizations */}
            <div 
              className="flex items-center justify-between px-12 py-8 border-b border-white"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">People & Organizations</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">We solve the "People Tax" on P&L.</span>
            </div>

            {/* Operations & Strategy */}
            <div 
              className="flex items-center justify-between px-12 py-8"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-2xl">↘</span>
                <span className="text-white font-montserrat font-medium text-xl">Operations & Strategy</span>
              </div>
              <span className="text-white font-montserrat font-normal text-lg">Efficiency Engineering. Excellence Delivered</span>
            </div>

            {/* Explore More Button */}
            <div 
              className="flex items-center justify-center py-8 rounded-b-xl"
              style={{ 
                background: '#AC5FE6',
                boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)'
              }}
            >
              <button 
                className="text-white font-montserrat font-medium text-lg flex items-center gap-3 hover:bg-white/10 transition-all"
                style={{
                  border: '1px solid white',
                  borderRadius: '50px',
                  padding: '10px 24px'
                }}
              >
                Explore more services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H5M13 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with PMG Section */}
      <div className="relative z-10 bg-white py-24">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-bold mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '120%',
            color: '#14358A',
          }}
        >
          Why Partner with PMG?
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-24"
          style={{
            fontSize: '24px',
            lineHeight: '150%',
            color: '#6B7280',
            maxWidth: '1000px',
            margin: '0 auto 6rem auto'
          }}
        >
          Because results matter more than reports. We focus on quality first, consistently outperforming the industry.
        </p>

        {/* Stats Row */}
        <div 
          className="flex justify-center items-center px-4"
          style={{ 
            maxWidth: '1140px', 
            margin: '0 auto',
            gap: '0'
          }}
        >
          {/* Stat 1 - 22x */}
          <div className="flex flex-col items-center" style={{ width: '280px' }}>
            <img 
              src="/icon-box-1.png" 
              alt="ROI Icon" 
              style={{ width: '100px', height: '100px', marginBottom: '28px', objectFit: 'contain' }}
            />
            <p 
              className="font-poppins font-semibold"
              style={{ 
                fontSize: '28px', 
                lineHeight: '34px', 
                color: '#14358A',
                marginBottom: '8px'
              }}
            >
              22x
            </p>
            <p 
              className="font-poppins font-normal"
              style={{ 
                fontSize: '18px', 
                lineHeight: '27px', 
                color: '#000000'
              }}
            >
              Average client ROI
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="flex items-center justify-center" style={{ width: '140px', marginTop: '-60px' }}>
            <img 
              src="/arrow-1.png" 
              alt="Arrow" 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
          </div>

          {/* Stat 2 - 95% */}
          <div className="flex flex-col items-center" style={{ width: '280px' }}>
            <img 
              src="/icon-box-2.png" 
              alt="Resolution Icon" 
              style={{ width: '100px', height: '100px', marginBottom: '28px', objectFit: 'contain' }}
            />
            <p 
              className="font-poppins font-semibold"
              style={{ 
                fontSize: '28px', 
                lineHeight: '34px', 
                color: '#14358A',
                marginBottom: '8px'
              }}
            >
              95%
            </p>
            <p 
              className="font-poppins font-normal"
              style={{ 
                fontSize: '18px', 
                lineHeight: '27px', 
                color: '#000000'
              }}
            >
              On time resolution
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center" style={{ width: '140px', marginTop: '-60px' }}>
            <img 
              src="/arrow-2.png" 
              alt="Arrow" 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
          </div>

          {/* Stat 3 - 14% */}
          <div className="flex flex-col items-center" style={{ width: '280px' }}>
            <img 
              src="/icon-box-3.png" 
              alt="Recidivism Icon" 
              style={{ 
                width: '80px', 
                height: '80px', 
                marginBottom: '28px',
                marginTop: '10px',
                borderRadius: '10px',
                objectFit: 'contain'
              }}
            />
            <p 
              className="font-poppins font-semibold"
              style={{ 
                fontSize: '28px', 
                lineHeight: '34px', 
                color: '#14358A',
                marginBottom: '8px'
              }}
            >
              14%
            </p>
            <p 
              className="font-poppins font-normal text-center"
              style={{ 
                fontSize: '18px', 
                lineHeight: '27px', 
                color: '#000000'
              }}
            >
              1-Year Client Recidivism
            </p>
          </div>
        </div>
      </div>

      {/* Traditional Consulting is Broken Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-semibold mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
            maxWidth: '809px',
            margin: '0 auto 1.5rem auto'
          }}
        >
          Traditional Consulting is Broken
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-medium mb-12"
          style={{
            fontSize: '32px',
            lineHeight: '150%',
            color: '#64748B',
            maxWidth: '1106px',
            margin: '0 auto 3rem auto',
            padding: '0 2rem'
          }}
        >
          The old model of consulting is failing. We built PMG to be different, focusing on execution and tangible results, not just slide decks and billable hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-5">
          <button 
            className="text-white font-poppins font-semibold hover:opacity-90 transition-opacity"
            style={{
              background: '#14358A',
              border: '2px solid #14358A',
              borderRadius: '82px',
              padding: '20px 50px',
              fontSize: '18px'
            }}
          >
            Explore Strategic solutions ›
          </button>

          <button 
            className="font-poppins font-semibold hover:bg-blue-50 transition-colors"
            style={{
              background: 'transparent',
              border: '2px solid #14358A',
              borderRadius: '82px',
              padding: '20px 50px',
              fontSize: '18px',
              color: '#14358A'
            }}
          >
            Request a demo
          </button>
        </div>
      </div>

      {/* What Our Clients Say Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-semibold mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
          }}
        >
          What Our Clients Say
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-16"
          style={{
            fontSize: '32px',
            lineHeight: '36px',
            color: '#333333',
            maxWidth: '842px',
            margin: '0 auto 4rem auto'
          }}
        >
          Across industries and functions, world-class teams
          transform work with PMG.
        </p>

        {/* Testimonial Cards */}
        <div className="flex justify-center gap-8 mb-20 px-4">
          {/* Card 1 - Accenture */}
          <div 
            className="bg-white rounded-xl p-8"
            style={{
              width: '332px',
              minHeight: '431px',
              boxShadow: '0px 2.26px 12.06px 0px #EBEEFA'
            }}
          >
            <img src="/accenture.png" alt="Accenture" className="mb-6" style={{ height: '28px', objectFit: 'contain' }} />
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: '#333333'
              }}
            >
              "Generative AI tools like Writer can drive greater creativity. As we continue to expand the use of AI, the opportunities to enhance content creation, productivity and our entire marketing model are boundless."
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: '16px', color: '#000000' }}>Jill Kramer</p>
              <p className="font-poppins" style={{ fontSize: '16px', lineHeight: '24px', color: '#000000' }}>Chief Marketing and Communications Officer</p>
            </div>
          </div>

          {/* Card 2 - Vanguard */}
          <div 
            className="bg-white rounded-xl p-8"
            style={{
              width: '332px',
              minHeight: '431px',
              boxShadow: '0px 2.26px 12.06px 0px #EBEEFA'
            }}
          >
            <img src="/vanguard.png" alt="Vanguard" className="mb-6" style={{ height: '28px', objectFit: 'contain' }} />
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: '#333333'
              }}
            >
              "Writer's full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity."
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: '16px', color: '#000000' }}>Nitin Tandon</p>
              <p className="font-poppins" style={{ fontSize: '16px', lineHeight: '24px', color: '#000000' }}>Chief Information Officer</p>
            </div>
          </div>

          {/* Card 3 - Kenvue */}
          <div 
            className="bg-white rounded-xl p-8"
            style={{
              width: '332px',
              minHeight: '431px',
              boxShadow: '0px 2.26px 12.06px 0px #EBEEFA'
            }}
          >
            <img src="/kenvue.png" alt="Kenvue" className="mb-6" style={{ height: '28px', objectFit: 'contain' }} />
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: '#333333'
              }}
            >
              "Writer is onto something amazing. Their full-stack platform, deep customer-centricity, and high-touch approach to services truly sets them apart. Post our due diligence, partnering with Writer was an easy decision for us."
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: '16px', color: '#000000' }}>Ajay Dhaul</p>
              <p className="font-poppins" style={{ fontSize: '16px', lineHeight: '24px', color: '#000000' }}>SVP of Data & Applied AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Operative Across All 4 Continents Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-bold mb-8"
          style={{
            fontSize: '42px',
            lineHeight: '50px',
            color: '#14358A',
          }}
        >
          Operative across all 4 continents
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-16"
          style={{
            fontSize: '32px',
            lineHeight: '40px',
            color: '#333333',
            maxWidth: '1121px',
            margin: '0 auto 4rem auto',
            padding: '0 2rem'
          }}
        >
          Complexity does not stop at borders. From the tech stacks of Silicon Valley to the sovereign shifts in the Middle East, PMG deploys wherever functional mastery is required.
        </p>

        {/* Stats Badges */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {/* 65+ Global Hubs */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              border: '1px solid #14358A',
              borderRadius: '40px',
              padding: '20px 50px',
              minWidth: '250px'
            }}
          >
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '50px',
                lineHeight: '140%',
                color: '#14358A',
                opacity: 0.9
              }}
            >
              65+
            </p>
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '30px',
                lineHeight: '140%',
                color: '#14358A'
              }}
            >
              Global Hubs
            </p>
          </div>

          {/* 24/7/365 Operational Support */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              border: '1px solid #14358A',
              borderRadius: '40px',
              padding: '20px 50px',
              minWidth: '373px'
            }}
          >
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '50px',
                lineHeight: '140%',
                color: '#14358A',
                opacity: 0.9
              }}
            >
              24/7/365
            </p>
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '30px',
                lineHeight: '140%',
                color: '#14358A'
              }}
            >
              Operational Support
            </p>
          </div>
        </div>

        {/* World Map */}
        <div className="flex justify-center">
          <img 
            src="/world-map.png" 
            alt="World Map showing Global Hubs and Operational Support" 
            className="max-w-full h-auto"
            style={{ maxWidth: '980px', width: '100%' }}
          />
        </div>
      </div>

      {/* Diagonal Wave Divider before CTA */}
      <div className="relative w-full" style={{ height: '100px', background: '#FFFFFF', overflow: 'hidden' }}>
        <svg 
          className="absolute bottom-0 left-0 w-full" 
          viewBox="0 0 1440 100" 
          fill="none" 
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          <path 
            d="M0 100L1440 0V100H0Z" 
            fill="#EBF7FF"
          />
        </svg>
      </div>

      {/* Seize Your Next Opportunity CTA Section */}
      <div className="relative z-10 py-20" style={{ background: '#EBF7FF' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Heading */}
          <h2 
            className="font-dm-sans font-bold mb-6"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Seize your next opportunity
          </h2>

          {/* Description */}
          <p 
            className="font-dm-sans font-normal mb-8"
            style={{
              fontSize: '18px',
              lineHeight: '135%',
              color: '#68718B',
              maxWidth: '563px',
              margin: '0 auto 2rem auto'
            }}
          >
            Connect with our executive team to solve your critical challenges
            and capitalize on opportunities for immediate, high-impact growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-5">
            <button 
              className="text-white font-dm-sans font-semibold rounded-[10px] hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                padding: '16px 32px',
                fontSize: '16px'
              }}
            >
              Request a demo
            </button>

            <button 
              className="font-dm-sans font-semibold rounded-[10px] hover:bg-purple-50 transition-colors"
              style={{
                background: 'transparent',
                border: '1px solid',
                borderImage: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                borderImageSlice: 1,
                padding: '16px 32px',
                fontSize: '16px',
                color: '#6A36FF'
              }}
            >
              Try for free
            </button>
          </div>
        </div>
      </div>

      {/* Diagonal Wave Divider before Footer */}
      <div className="relative w-full" style={{ height: '100px', background: '#EBF7FF', overflow: 'hidden' }}>
        <svg 
          className="absolute bottom-0 left-0 w-full" 
          viewBox="0 0 1440 100" 
          fill="none" 
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          <path 
            d="M0 100L1440 0V100H0Z" 
            fill="#1B45B4"
          />
        </svg>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-20" style={{ background: '#1B45B4' }}>
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-5 gap-16">
            {/* Logo Column */}
            <div>
              <img src="/logo.png" alt="PMG Logo" style={{ width: '120px', height: 'auto' }} />
            </div>

            {/* What we Do Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                What we Do
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Our Services</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Our Content
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>FAQs</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Community Programs</a></li>
              </ul>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mt-8 mb-4" style={{ lineHeight: '100%' }}>
                Working with PMG
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Careers</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Licensing</a></li>
              </ul>
            </div>

            {/* Our Models Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Our Models
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
