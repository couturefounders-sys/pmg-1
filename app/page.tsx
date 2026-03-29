import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HexWorldMap from '@/components/HexWorldMap';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />

      {/* What We Can Do Section */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(48px, 5vw, 96px)', paddingBottom: 'clamp(32px, 3.5vw, 64px)' }}>
        <p className="text-center font-montserrat font-semibold tracking-wide" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', letterSpacing: '0.385px', color: '#6B7280', maxWidth: 'min(765px, 85%)', margin: '0 auto', marginBottom: 'clamp(24px, 3vw, 48px)' }}>
          Trusted as a strategic partner to global leaders, accelerators, and the &ldquo;Big 4.&rdquo;
        </p>

        <p className="text-center font-dm-sans font-semibold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '26.4px', letterSpacing: 'normal', color: '#1a1a2e', marginBottom: 'clamp(8px, 0.83vw, 16px)' }}>
          Our Expertise
        </p>

        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: 'clamp(12px, 1.25vw, 20px)' }}>
          What We Help With
        </h2>

        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#333333', maxWidth: 'min(1342px, 90%)', margin: '0 auto', marginBottom: 'clamp(24px, 3vw, 48px)', padding: '0 2rem' }}>
          As functional consultants, we offer targeted expertise across key business areas to drive tangible results.
        </p>

        <div style={{ maxWidth: 'min(1353px, 90%)', margin: '0 auto', marginTop: 'clamp(24px, 3vw, 48px)' }}>
          <div className="overflow-hidden" style={{ borderRadius: 'clamp(28px, 3.89vw, 60px)', boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)', borderLeft: '1px solid white' }}>
            {[
              { title: 'Operations & Strategy', desc: ['Efficiency Engineered,', 'Excellence Delivered.'], first: true },
              { title: 'People & Organizations', desc: ['We solve the \u201cPeople Tax\u201d on your P&L.'] },
              { title: 'Customer Experience', desc: ['Engineering high-retention,', 'high-value journeys.'] },
              { title: 'Mergers & Acquisitions', desc: ['Realizing the synergies that', 'others leave on the table.'] },
              { title: 'Branding & Marketing', desc: ['Crafting Identities That Captivate.'] },
              { title: 'BPO & Fractional Talent', desc: ['Scaling your infrastructure', 'without scaling your overhead.'] },
              { title: 'Crisis & Transition Management', desc: ['Navigating Uncertainty,', 'Delivering Stability.'], last: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center flex-wrap md:flex-nowrap" style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', minHeight: item.first ? 'clamp(70px, 10.83vw, 170px)' : 'clamp(60px, 9.86vw, 156px)', borderBottom: item.last ? 'none' : '1px solid white', paddingLeft: 'clamp(16px, 5.56vw, 90px)', paddingRight: 'clamp(16px, 5.56vw, 90px)', paddingTop: 'clamp(12px, 1vw, 16px)', paddingBottom: 'clamp(12px, 1vw, 16px)' }}>
                <Image src="/arrow-icon.png" alt="" width={24} height={24} className="hidden md:block" style={{ flexShrink: 0, width: 'clamp(16px, 1.67vw, 28px)', height: 'clamp(16px, 1.67vw, 28px)' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.53vw, 22px)', lineHeight: '22px', letterSpacing: '-0.55px', marginLeft: 'clamp(8px, 2.22vw, 36px)', flexShrink: 0 }}>{item.title}</span>
                <div className="text-white flex flex-col ml-auto" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(12px, 1.375vw, 19.8px)', lineHeight: '30.8px' }}>
                  {item.desc.map((line, j) => <p key={j}>{line}</p>)}
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center" style={{ background: '#AC5FE6', boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)', height: 'clamp(70px, 8.13vw, 130px)' }}>
              <button className="text-white font-montserrat font-medium flex items-center gap-3 hover:bg-white/10 transition-all" style={{ fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px', border: '1px solid white', borderRadius: '50px', padding: 'clamp(8px, 0.69vw, 12px) clamp(16px, 1.67vw, 28px)' }}>
                Explore All Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with PMG Section */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(48px, 5vw, 96px)', paddingBottom: 'clamp(48px, 5vw, 96px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>Why Partner with PMG?</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#465052', maxWidth: 'min(918px, 85%)', margin: '0 auto', marginBottom: 'clamp(48px, 5vw, 96px)' }}>Because results matter more than reports. We focus on quality first, consistently outperforming the industry.</p>

        <div className="flex justify-center items-center px-4 flex-wrap" style={{ maxWidth: 'min(1400px, 95%)', margin: '0 auto', gap: 'clamp(8px, 0.5vw, 0px)' }}>
          <div className="flex flex-col items-center" style={{ width: 'clamp(150px, 16vw, 260px)' }}>
            <Image src="/icon-box-1.png" alt="ROI Icon" width={100} height={100} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', objectFit: 'contain', width: 'clamp(60px, 6.94vw, 120px)', height: 'clamp(60px, 6.94vw, 120px)' }} />
            <p className="font-poppins font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>9x</p>
            <p className="font-poppins font-normal text-center" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#000' }}>Average Client ROI</p>
          </div>
          <div className="flex items-center justify-center" style={{ width: 'clamp(60px, 7vw, 120px)', alignSelf: 'flex-start', marginTop: 'clamp(10px, 2.08vw, 40px)' }}><Image src="/stat-arrow.png" alt="" width={140} height={40} style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} /></div>
          <div className="flex flex-col items-center" style={{ width: 'clamp(150px, 16vw, 260px)' }}>
            <Image src="/icon-box-2.png" alt="Resolution Icon" width={100} height={100} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', objectFit: 'contain', width: 'clamp(60px, 6.94vw, 120px)', height: 'clamp(60px, 6.94vw, 120px)' }} />
            <p className="font-poppins font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>72%</p>
            <p className="font-poppins font-normal text-center" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#000' }}>On-Time Resolution</p>
          </div>
          <div className="flex items-center justify-center" style={{ width: 'clamp(60px, 7vw, 120px)', alignSelf: 'flex-start', marginTop: 'clamp(10px, 2.08vw, 40px)' }}><Image src="/stat-arrow.png" alt="" width={140} height={40} style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} /></div>
          <div className="flex flex-col items-center" style={{ width: 'clamp(150px, 16vw, 260px)' }}>
            <Image src="/icon-box-3.png" alt="Recidivism Icon" width={80} height={80} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', marginTop: 'clamp(6px, 0.69vw, 12px)', borderRadius: '10px', objectFit: 'contain', width: 'clamp(50px, 5.56vw, 96px)', height: 'clamp(50px, 5.56vw, 96px)' }} />
            <p className="font-poppins font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>32%</p>
            <p className="font-poppins font-normal text-center" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#000' }}>1-Year Client Recidivism</p>
          </div>
          <div className="flex items-center justify-center" style={{ width: 'clamp(60px, 7vw, 120px)', alignSelf: 'flex-start', marginTop: 'clamp(10px, 2.08vw, 40px)' }}><Image src="/stat-arrow.png" alt="" width={140} height={40} style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} /></div>
          <div className="flex flex-col items-center" style={{ width: 'clamp(150px, 16vw, 260px)' }}>
            <Image src="/icon-box-1.png" alt="Satisfaction Icon" width={100} height={100} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', objectFit: 'contain', width: 'clamp(60px, 6.94vw, 120px)', height: 'clamp(60px, 6.94vw, 120px)' }} />
            <p className="font-poppins font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>84%</p>
            <p className="font-poppins font-normal text-center" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#000' }}>Client Satisfaction</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap" style={{ gap: 'clamp(12px, 1.39vw, 20px)', marginTop: 'clamp(32px, 3.5vw, 64px)' }}>
          <button className="text-white font-poppins font-medium hover:opacity-90 transition-opacity flex items-center gap-3" style={{ background: '#14358A', border: '2px solid #14358A', borderRadius: '82px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)', fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px' }}>
            Learn Why We&apos;re Different
            <span style={{ fontSize: '1.1em' }}>→</span>
          </button>
          <button className="font-poppins font-medium hover:bg-gray-50 transition-colors flex items-center gap-3" style={{ background: 'transparent', border: '2px solid #D1D5DB', borderRadius: '82px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)', fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px', color: '#1a1a2e' }}>
            Our Execution-First Model
            <span style={{ fontSize: '1.1em' }}>→</span>
          </button>
        </div>
      </div>

      {/* Traditional Consulting is Broken */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', maxWidth: 'min(809px, 85%)', margin: '0 auto', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>Traditional Consulting is Broken</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#64748B', maxWidth: 'min(1106px, 90%)', margin: '0 auto', marginBottom: 'clamp(24px, 3vw, 48px)', padding: '0 2rem' }}>The old model of consulting is failing. We built PMG to be different, focusing on execution and tangible results, not just slide decks and billable hours.</p>
        <div className="flex items-center justify-center flex-wrap" style={{ gap: 'clamp(12px, 1.39vw, 20px)' }}>
          <button className="text-white font-poppins font-medium hover:opacity-90 transition-opacity flex items-center gap-3" style={{ background: '#14358A', border: '2px solid #14358A', borderRadius: '82px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)', fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px' }}>
            Why We&apos;re Different
            <Image src="/icons/right-2.png" alt="" width={24} height={24} style={{ width: 'clamp(16px, 1.67vw, 26px)', height: 'clamp(16px, 1.67vw, 26px)' }} />
          </button>
          <button className="font-poppins font-medium hover:bg-blue-50 transition-colors" style={{ background: 'transparent', border: '2px solid #14358A', borderRadius: '82px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)', fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px', color: '#14358A' }}>Understand Our Approach</button>
        </div>
      </div>

      {/* What Our Clients Say */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>What Our Clients Say</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#333', maxWidth: 'min(842px, 85%)', margin: '0 auto', marginBottom: 'clamp(32px, 3.5vw, 64px)' }}>We are proud to have earned the trust of industry leaders.</p>
        <div className="flex justify-center flex-wrap px-4" style={{ gap: 'clamp(16px, 1.67vw, 32px)', marginBottom: 'clamp(40px, 4.5vw, 80px)' }}>
          {[
            { logo: '/accenture.png', quote: '\u201CGenerative AI tools like Writer can drive greater creativity. As we continue to expand the use of AI, the opportunities to enhance content creation, productivity and our entire marketing model are boundless.\u201D', name: 'Jill Kramer', role: 'Chief Marketing and Communications Officer' },
            { logo: '/vanguard.png', quote: '\u201CWriter\u2019s full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity.\u201D', name: 'Nitin Tandon', role: 'Chief Information Officer' },
            { logo: '/kenvue.png', quote: '\u201CWriter is onto something amazing. Their full-stack platform, deep customer-centricity, and high-touch approach to services truly sets them apart. Post our due diligence, partnering with Writer was an easy decision for us.\u201D', name: 'Ajay Dhaul', role: 'SVP of Data & Applied AI' },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-xl w-full sm:w-auto" style={{ maxWidth: '380px', minWidth: 'min(280px, 100%)', flex: '1 1 clamp(260px, 23vw, 380px)', minHeight: 'clamp(300px, 29.93vw, 480px)', padding: 'clamp(20px, 1.67vw, 32px)', boxShadow: '0px 2.26px 12.06px 0px #EBEEFA' }}>
              <img src={c.logo} alt="" className="mb-6" style={{ height: 'clamp(20px, 1.94vw, 32px)', objectFit: 'contain' }} />
              <p className="font-poppins mb-6" style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '26.4px', fontWeight: 400, color: '#333' }}>{c.quote}</p>
              <div>
                <p className="font-poppins font-semibold" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#000' }}>{c.name}</p>
                <p className="font-poppins" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', fontWeight: 400, color: '#000' }}>{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operative Across All 4 Continents */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: 'clamp(16px, 1.5vw, 32px)' }}>Operative Across 4 Continents</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#333', maxWidth: 'min(1121px, 85%)', margin: '0 auto', marginBottom: 'clamp(32px, 3.5vw, 64px)', padding: '0 2rem' }}>Complexity does not stop at borders. From the tech stacks of Silicon Valley to the sovereign shifts in the Middle East, PMG deploys wherever functional mastery is required.</p>
        <div className="flex justify-center items-center flex-wrap" style={{ gap: 'clamp(16px, 1.67vw, 32px)', marginBottom: 'clamp(32px, 3.5vw, 64px)' }}>
          <div className="flex flex-col items-center justify-center" style={{ border: '1px solid #14358A', borderRadius: '40px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)' }}>
            <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', opacity: 0.9 }}>65+</p>
            <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#14358A' }}>Global Hubs</p>
          </div>
          <div className="flex flex-col items-center justify-center" style={{ border: '1px solid #14358A', borderRadius: '40px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)' }}>
            <p className="font-dm-sans font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', opacity: 0.9 }}>24/7/365</p>
            <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#14358A' }}>Operational Support</p>
          </div>
        </div>
        <div className="flex justify-center" style={{ maxWidth: 'min(1500px, 96%)', margin: '0 auto' }}>
          <HexWorldMap />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8 px-4" style={{ maxWidth: 'min(900px, 90%)', margin: 'clamp(24px, 2.75vw, 39.6px) auto 0' }}>
          {['Aspen CO', 'Phoenix AZ', 'Chicago IL', 'Victoria BC', 'Montreal QC', 'Hong Kong', 'Bucharest', 'Manila', 'Niagara Falls ON', 'Gqeberha SA', 'San Diego CA', 'Johannesburg SA'].map(city => (
            <span key={city} className="font-dm-sans font-normal" style={{ fontSize: 'clamp(14px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#14358A', border: '1px solid #14358A', borderRadius: '20px', padding: 'clamp(4px, 0.42vw, 6px) clamp(12px, 1.25vw, 18px)' }}>{city}</span>
          ))}
        </div>
      </div>

      {/* Seize Your Next Opportunity */}
      <div className="relative z-10" style={{ background: '#EBF7FF', paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <div style={{ maxWidth: 'min(900px, 85%)', margin: '0 auto', textAlign: 'center', padding: '0 1rem' }}>
          <h2 className="font-dm-sans font-bold" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>Seize Your Next Opportunity</h2>
          <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#68718B', maxWidth: 'min(563px, 90%)', margin: '0 auto', marginBottom: 'clamp(14px, 1.25vw, 20px)' }}>Connect with our executive team to solve your critical challenges and capitalize on opportunities for immediate, high-impact growth.</p>
          <div className="flex items-center justify-center">
            <button className="text-white font-dm-sans font-medium rounded-[10px] hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)', padding: 'clamp(12px, 1.11vw, 18px) clamp(24px, 2.5vw, 42px)', fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px' }}>Request a Consultation</button>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits */}
      <div className="relative z-10" style={{ background: '#EBF7FF', paddingTop: 'clamp(32px, 4vw, 80px)', paddingBottom: 'clamp(32px, 4vw, 80px)' }}>
        <div style={{ maxWidth: 'min(1200px, 90%)', margin: '0 auto', textAlign: 'center', padding: '0 clamp(24px, 3vw, 48px)' }}>
          <h2 className="font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: 'clamp(16px, 1.67vw, 32px)' }}>Unsure which solution fits your business?</h2>
          <p className="font-montserrat font-normal mx-auto" style={{ fontSize: 'clamp(15px, 1.375vw, 19.8px)', lineHeight: '30.8px', color: '#333', maxWidth: 'min(1196px, 95%)', marginBottom: 'clamp(24px, 2.5vw, 48px)' }}>Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.</p>
          <button className="text-white font-dm-sans font-medium rounded-[10px] hover:opacity-90 transition-all transform hover:scale-105" style={{ background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)', padding: 'clamp(12px, 1.11vw, 18px) clamp(24px, 2.22vw, 36px)', fontSize: 'clamp(13px, 1.07vw, 15.4px)', fontWeight: 500, lineHeight: '22px' }}>Find your ideal solution</button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
