import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      <HeroSection />

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

        {/* Section Heading */}
        <h2
          className="text-center font-dm-sans font-bold mb-8"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
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
          <div className="overflow-hidden" style={{ borderRadius: '56px', boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)', borderLeft: '1px solid white' }}>
            {/* Crisis & Transition Management */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>Crisis & Transition Management</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>Navigating Uncertainty,</p>
                <p>Delivering Stability.</p>
              </div>
            </div>

            {/* Mergers & Acquisitions */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '142px', borderBottom: '1px solid white', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>Mergers & Acquisitions</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>Realizing the synergies that</p>
                <p>others leave on the table.</p>
              </div>
            </div>

            {/* Branding & Marketing */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '142px', borderBottom: '1px solid white', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>Branding & Marketing</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>Crafting Identities That Captivate.</p>
              </div>
            </div>

            {/* BPO & Fractional Talent */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '142px', borderBottom: '1px solid white', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>BPO & Fractional Talent</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>Scaling your infrastructure</p>
                <p>without scaling your overhead.</p>
              </div>
            </div>

            {/* Custom Experience */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '142px', borderBottom: '1px solid white', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>Custom Experience</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>Engineering high-retention,</p>
                <p>high-value journey</p>
              </div>
            </div>

            {/* People & Organizations */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '142px', borderBottom: '1px solid white', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>People & Organizations</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>We solve the &ldquo;People Tax&rdquo; on P&amp;L.</p>
              </div>
            </div>

            {/* Operations & Strategy */}
            <div
              className="flex items-center"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '142px', paddingLeft: '80px', paddingRight: '80px' }}
            >
              <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%', marginLeft: '32px', width: '524px', flexShrink: 0 }}>Operations & Strategy</span>
              <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '120%', marginLeft: '94px' }}>
                <p>Efficiency Engineering,</p>
                <p>Excellence Delivered</p>
              </div>
            </div>

            {/* Explore More Button */}
            <div
              className="flex items-center justify-center"
              style={{
                background: '#AC5FE6',
                boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)',
                height: '117px'
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
          className="text-center font-dm-sans font-bold mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Why Partner with PMG?
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-24"
          style={{
            fontSize: '32px',
            lineHeight: '40px',
            color: '#465052',
            width: '918px',
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
              src="/stat-arrow.png" 
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
              src="/stat-arrow.png" 
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
          className="text-center font-dm-sans font-bold mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
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
            className="text-white font-poppins font-semibold hover:opacity-90 transition-opacity flex items-center gap-3"
            style={{
              background: '#14358A',
              border: '2px solid #14358A',
              borderRadius: '82px',
              padding: '20px 50px',
              fontSize: '18px'
            }}
          >
            Explore Strategic solutions
            <img src="/icons/right-2.png" alt="" style={{ width: '24px', height: '24px' }} />
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
          className="text-center font-dm-sans font-bold mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
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
          className="text-center font-dm-sans font-bold mb-8"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
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
            className="font-dm-sans font-normal"
            style={{
              fontSize: '18px',
              lineHeight: '135%',
              color: '#68718B',
              maxWidth: '563px',
              margin: '0 auto 18px auto'
            }}
          >
            Connect with our executive team to solve your critical challenges
            and capitalize on opportunities for immediate, high-impact growth.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <button 
              className="text-white font-dm-sans font-bold rounded-[10px] hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                width: '245px',
                height: '54px',
                fontSize: '16px',
                lineHeight: '140%'
              }}
            >
              Request a consultation
            </button>
          </div>
        </div>
      </div>

      {/* Ready for a Definitive Path to Transformation Section */}
      <div className="relative z-10 bg-white py-16 lg:py-24 overflow-hidden">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 relative">
          {/* Section Heading */}
          <h2
            className="text-center font-dm-sans font-bold mb-8 lg:mb-12"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Ready for a Definitive Path to Transformation?
          </h2>

          {/* Description */}
          <p 
            className="text-center font-montserrat font-normal mb-12 lg:mb-16 mx-auto"
            style={{
              fontSize: 'clamp(20px, 2vw, 30px)',
              lineHeight: '1.4',
              color: '#333333',
              maxWidth: '1082px'
            }}
          >
            PMG's expertise translates directly into superior results. Explore our structured engagement models, ensuring the right expertise is delivered in a way that aligns perfectly with your growth goals.
          </p>

          {/* Solution Cards Grid - Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mb-6 lg:mb-8 xl:mb-10 max-w-[1200px] mx-auto">
            {/* Out-of-the-Box Solutions Card */}
            <div 
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
              }}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: '#14358A' }}
                >
                  <img src="/cube-three.png" alt="Out-of-the-Box Solutions" className="w-10 h-10" />
                </div>
                <h3 
                  className="font-dm-sans font-bold mb-0"
                  style={{
                    fontSize: 'clamp(24px, 2vw, 29px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.03em',
                    color: '#14358A'
                  }}
                >
                  Out-of-the-Box Solutions
                </h3>
              </div>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Simple · Affordable · Self-Directed
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B',
                  marginBottom: 'auto'
                }}
              >
                Pre-packaged, technology-enabled offerings designed to rapidly address common industry challenges and deliver immediate value.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Bespoke Solutions Card */}
            <div 
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
              }}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: '#14358A' }}
                >
                  <img src="/pencil.png" alt="Bespoke Solutions" className="w-10 h-10" />
                </div>
                <h3 
                  className="font-dm-sans font-bold mb-0"
                  style={{
                    fontSize: 'clamp(24px, 2vw, 29px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.03em',
                    color: '#14358A'
                  }}
                >
                  Bespoke Solutions
                </h3>
              </div>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Custom · Flexible · Fully Supported
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B'
                }}
              >
                Tailored to your specific, complex needs. Our custom solutions are managed hands-on by our world-class expert team, ensuring high-impact innovation.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solution Cards Grid - Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 max-w-[1200px] mx-auto">
            {/* Active Management Solutions Card */}
            <div 
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
              }}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: '#14358A' }}
                >
                  <img src="/right-user.png" alt="Active Management Solutions" className="w-10 h-10" />
                </div>
                <h3 
                  className="font-dm-sans font-bold mb-0"
                  style={{
                    fontSize: 'clamp(24px, 2vw, 29px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.03em',
                    color: '#14358A'
                  }}
                >
                  Active Management Solutions
                </h3>
              </div>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Proactive · Expert-Led · Fully Managed
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B'
                }}
              >
                We don't just consult—we actively manage critical functions. PMG leads hands-on, end-to-end solution delivery with full accountability for results.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Equity Engagements Card */}
            <div 
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
              }}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: '#14358A' }}
                >
                  <img src="/efferent-four.png" alt="Equity Engagements" className="w-10 h-10" />
                </div>
                <h3 
                  className="font-dm-sans font-bold mb-0"
                  style={{
                    fontSize: 'clamp(24px, 2vw, 29px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.03em',
                    color: '#14358A'
                  }}
                >
                  Equity Engagements
                </h3>
              </div>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Aligned · Scalable · Capital-Efficient
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B'
                }}
              >
                Access top-tier strategy and execution without draining vital cash reserves. PMG invests proprietary expertise for equity, directly aligning our success with your maximized outcomes.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits Section */}
      <div className="relative z-10 py-16 lg:py-20" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          {/* Heading */}
          <h2
            className="font-dm-sans font-bold mb-6 lg:mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Unsure which solution fits your business?
          </h2>

          {/* Description */}
          <p 
            className="font-montserrat font-normal mb-10 lg:mb-12 mx-auto"
            style={{
              fontSize: 'clamp(20px, 2.2vw, 32px)',
              lineHeight: '1.35',
              color: '#333333',
              maxWidth: '1196px'
            }}
          >
            Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.
          </p>

          {/* CTA Button */}
          <button 
            className="text-white font-dm-sans font-bold rounded-[10px] hover:opacity-90 transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              padding: '16px 32px',
              fontSize: 'clamp(18px, 1.4vw, 20px)',
              lineHeight: '1.4',
              minWidth: '280px'
            }}
          >
            Find your ideal solution
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
