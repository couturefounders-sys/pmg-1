import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />

      {/* What We Can Do Section */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(48px, 5vw, 96px)', paddingBottom: 'clamp(32px, 3.5vw, 64px)' }}>
        <p className="text-center font-montserrat font-medium uppercase tracking-wide" style={{ fontSize: 'clamp(11px, 0.97vw, 16px)', lineHeight: '100%', color: '#6B7280', maxWidth: 'min(765px, 85%)', margin: '0 auto', marginBottom: 'clamp(24px, 3vw, 48px)' }}>
          Trusted as a strategic partner to global leaders, accelerators, and the &ldquo;Big 4.&rdquo;
        </p>

        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(16px, 1.5vw, 32px)' }}>
          What we can do for you?
        </h2>

        <p className="text-center font-montserrat font-medium" style={{ fontSize: 'clamp(18px, 2.22vw, 36px)', lineHeight: '120%', color: '#333333', maxWidth: 'min(1342px, 90%)', margin: '0 auto', marginBottom: 'clamp(24px, 3vw, 48px)', padding: '0 2rem' }}>
          PMG bridges the gap between high-level blueprints and verifiable enterprise value. We do not just advise from the sidelines. We provide the embedded leadership and functional mastery required to turn strategic goals into measurable ROI
        </p>

        <div style={{ maxWidth: 'min(1353px, 90%)', margin: '0 auto', marginTop: 'clamp(24px, 3vw, 48px)' }}>
          <div className="overflow-hidden" style={{ borderRadius: 'clamp(28px, 3.89vw, 60px)', boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)', borderLeft: '1px solid white' }}>
            {[
              { title: 'Crisis & Transition Management', desc: ['Navigating Uncertainty,', 'Delivering Stability.'], first: true },
              { title: 'Mergers & Acquisitions', desc: ['Realizing the synergies that', 'others leave on the table.'] },
              { title: 'Branding & Marketing', desc: ['Crafting Identities That Captivate.'] },
              { title: 'BPO & Fractional Talent', desc: ['Scaling your infrastructure', 'without scaling your overhead.'] },
              { title: 'Custom Experience', desc: ['Engineering high-retention,', 'high-value journey'] },
              { title: 'People & Organizations', desc: ['We solve the \u201cPeople Tax\u201d on P&L.'] },
              { title: 'Operations & Strategy', desc: ['Efficiency Engineering,', 'Excellence Delivered'], last: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center" style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: item.first ? 'clamp(90px, 10.83vw, 170px)' : 'clamp(80px, 9.86vw, 156px)', borderBottom: item.last ? 'none' : '1px solid white', paddingLeft: 'clamp(24px, 5.56vw, 90px)', paddingRight: 'clamp(24px, 5.56vw, 90px)' }}>
                <Image src="/arrow-icon.png" alt="" width={24} height={24} style={{ flexShrink: 0, width: 'clamp(16px, 1.67vw, 28px)', height: 'clamp(16px, 1.67vw, 28px)' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 2.08vw, 34px)', lineHeight: '120%', marginLeft: 'clamp(16px, 2.22vw, 36px)', width: '40%', flexShrink: 0 }}>{item.title}</span>
                <div className="text-white flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 'clamp(16px, 2.08vw, 34px)', lineHeight: '120%', marginLeft: 'auto' }}>
                  {item.desc.map((line, j) => <p key={j}>{line}</p>)}
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center" style={{ background: '#AC5FE6', boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)', height: 'clamp(70px, 8.13vw, 130px)' }}>
              <button className="text-white font-montserrat font-medium flex items-center gap-3 hover:bg-white/10 transition-all" style={{ fontSize: 'clamp(14px, 1.25vw, 20px)', border: '1px solid white', borderRadius: '50px', padding: 'clamp(8px, 0.69vw, 12px) clamp(16px, 1.67vw, 28px)' }}>
                Explore more services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with PMG Section */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(48px, 5vw, 96px)', paddingBottom: 'clamp(48px, 5vw, 96px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>Why Partner with PMG?</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(18px, 2.22vw, 36px)', lineHeight: '125%', color: '#465052', maxWidth: 'min(918px, 85%)', margin: '0 auto', marginBottom: 'clamp(48px, 5vw, 96px)' }}>Because results matter more than reports. We focus on quality first, consistently outperforming the industry.</p>

        <div className="flex justify-center items-center px-4" style={{ maxWidth: 'min(1140px, 90%)', margin: '0 auto', gap: '0' }}>
          <div className="flex flex-col items-center" style={{ width: 'clamp(180px, 19.44vw, 320px)' }}>
            <Image src="/icon-box-1.png" alt="ROI Icon" width={100} height={100} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', objectFit: 'contain', width: 'clamp(60px, 6.94vw, 120px)', height: 'clamp(60px, 6.94vw, 120px)' }} />
            <p className="font-poppins font-semibold" style={{ fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '1.2', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>22x</p>
            <p className="font-poppins font-normal" style={{ fontSize: 'clamp(13px, 1.25vw, 20px)', lineHeight: '1.5', color: '#000' }}>Average client ROI</p>
          </div>
          <div className="flex items-center justify-center" style={{ width: 'clamp(80px, 9.72vw, 160px)', alignSelf: 'flex-start', marginTop: 'clamp(10px, 2.08vw, 40px)' }}><Image src="/stat-arrow.png" alt="" width={140} height={40} style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} /></div>
          <div className="flex flex-col items-center" style={{ width: 'clamp(180px, 19.44vw, 320px)' }}>
            <Image src="/icon-box-2.png" alt="Resolution Icon" width={100} height={100} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', objectFit: 'contain', width: 'clamp(60px, 6.94vw, 120px)', height: 'clamp(60px, 6.94vw, 120px)' }} />
            <p className="font-poppins font-semibold" style={{ fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '1.2', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>95%</p>
            <p className="font-poppins font-normal" style={{ fontSize: 'clamp(13px, 1.25vw, 20px)', lineHeight: '1.5', color: '#000' }}>On time resolution</p>
          </div>
          <div className="flex items-center justify-center" style={{ width: 'clamp(80px, 9.72vw, 160px)', alignSelf: 'flex-start', marginTop: 'clamp(10px, 2.08vw, 40px)' }}><Image src="/stat-arrow.png" alt="" width={140} height={40} style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} /></div>
          <div className="flex flex-col items-center" style={{ width: 'clamp(180px, 19.44vw, 320px)' }}>
            <Image src="/icon-box-3.png" alt="Recidivism Icon" width={80} height={80} style={{ marginBottom: 'clamp(16px, 1.94vw, 32px)', marginTop: 'clamp(6px, 0.69vw, 12px)', borderRadius: '10px', objectFit: 'contain', width: 'clamp(50px, 5.56vw, 96px)', height: 'clamp(50px, 5.56vw, 96px)' }} />
            <p className="font-poppins font-semibold" style={{ fontSize: 'clamp(18px, 1.94vw, 32px)', lineHeight: '1.2', color: '#14358A', marginBottom: 'clamp(4px, 0.56vw, 10px)' }}>14%</p>
            <p className="font-poppins font-normal text-center" style={{ fontSize: 'clamp(13px, 1.25vw, 20px)', lineHeight: '1.5', color: '#000' }}>1-Year Client Recidivism</p>
          </div>
        </div>
      </div>

      {/* Traditional Consulting is Broken */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', maxWidth: 'min(809px, 85%)', margin: '0 auto', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>Traditional Consulting is Broken</h2>
        <p className="text-center font-montserrat font-medium" style={{ fontSize: 'clamp(18px, 2.22vw, 36px)', lineHeight: '150%', color: '#64748B', maxWidth: 'min(1106px, 90%)', margin: '0 auto', marginBottom: 'clamp(24px, 3vw, 48px)', padding: '0 2rem' }}>The old model of consulting is failing. We built PMG to be different, focusing on execution and tangible results, not just slide decks and billable hours.</p>
        <div className="flex items-center justify-center flex-wrap" style={{ gap: 'clamp(12px, 1.39vw, 20px)' }}>
          <button className="text-white font-poppins font-semibold hover:opacity-90 transition-opacity flex items-center gap-3" style={{ background: '#14358A', border: '2px solid #14358A', borderRadius: '82px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)', fontSize: 'clamp(14px, 1.25vw, 20px)' }}>
            Explore Strategic solutions
            <Image src="/icons/right-2.png" alt="" width={24} height={24} style={{ width: 'clamp(16px, 1.67vw, 26px)', height: 'clamp(16px, 1.67vw, 26px)' }} />
          </button>
          <button className="font-poppins font-semibold hover:bg-blue-50 transition-colors" style={{ background: 'transparent', border: '2px solid #14358A', borderRadius: '82px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)', fontSize: 'clamp(14px, 1.25vw, 20px)', color: '#14358A' }}>Request a demo</button>
        </div>
      </div>

      {/* What Our Clients Say */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>What Our Clients Say</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(18px, 2.22vw, 36px)', lineHeight: '1.15', color: '#333', maxWidth: 'min(842px, 85%)', margin: '0 auto', marginBottom: 'clamp(32px, 3.5vw, 64px)' }}>Across industries and functions, world-class teams transform work with PMG.</p>
        <div className="flex justify-center flex-wrap px-4" style={{ gap: 'clamp(16px, 1.67vw, 32px)', marginBottom: 'clamp(40px, 4.5vw, 80px)' }}>
          {[
            { logo: '/accenture.png', quote: '\u201CGenerative AI tools like Writer can drive greater creativity. As we continue to expand the use of AI, the opportunities to enhance content creation, productivity and our entire marketing model are boundless.\u201D', name: 'Jill Kramer', role: 'Chief Marketing and Communications Officer' },
            { logo: '/vanguard.png', quote: '\u201CWriter\u2019s full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity.\u201D', name: 'Nitin Tandon', role: 'Chief Information Officer' },
            { logo: '/kenvue.png', quote: '\u201CWriter is onto something amazing. Their full-stack platform, deep customer-centricity, and high-touch approach to services truly sets them apart. Post our due diligence, partnering with Writer was an easy decision for us.\u201D', name: 'Ajay Dhaul', role: 'SVP of Data & Applied AI' },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-xl" style={{ width: 'clamp(280px, 23vw, 380px)', minHeight: 'clamp(340px, 29.93vw, 480px)', padding: 'clamp(20px, 1.67vw, 32px)', boxShadow: '0px 2.26px 12.06px 0px #EBEEFA' }}>
              <img src={c.logo} alt="" className="mb-6" style={{ height: 'clamp(20px, 1.94vw, 32px)', objectFit: 'contain' }} />
              <p className="font-poppins mb-6" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.75', color: '#333' }}>{c.quote}</p>
              <div>
                <p className="font-poppins font-semibold" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', color: '#000' }}>{c.name}</p>
                <p className="font-poppins" style={{ fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.5', color: '#000' }}>{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operative Across All 4 Continents */}
      <div className="relative z-10 bg-white" style={{ paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <h2 className="text-center font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(16px, 1.5vw, 32px)' }}>Operative across all 4 continents</h2>
        <p className="text-center font-montserrat font-normal" style={{ fontSize: 'clamp(18px, 2.22vw, 36px)', lineHeight: '125%', color: '#333', maxWidth: 'min(1121px, 85%)', margin: '0 auto', marginBottom: 'clamp(32px, 3.5vw, 64px)', padding: '0 2rem' }}>Complexity does not stop at borders. From the tech stacks of Silicon Valley to the sovereign shifts in the Middle East, PMG deploys wherever functional mastery is required.</p>
        <div className="flex justify-center items-center flex-wrap" style={{ gap: 'clamp(16px, 1.67vw, 32px)', marginBottom: 'clamp(32px, 3.5vw, 64px)' }}>
          <div className="flex flex-col items-center justify-center" style={{ border: '1px solid #14358A', borderRadius: '40px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)' }}>
            <p className="font-dm-sans font-semibold" style={{ fontSize: 'clamp(28px, 3.47vw, 56px)', lineHeight: '140%', color: '#14358A', opacity: 0.9 }}>65+</p>
            <p className="font-dm-sans font-semibold" style={{ fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', color: '#14358A' }}>Global Hubs</p>
          </div>
          <div className="flex flex-col items-center justify-center" style={{ border: '1px solid #14358A', borderRadius: '40px', padding: 'clamp(12px, 1.39vw, 22px) clamp(24px, 3.47vw, 54px)' }}>
            <p className="font-dm-sans font-semibold" style={{ fontSize: 'clamp(28px, 3.47vw, 56px)', lineHeight: '140%', color: '#14358A', opacity: 0.9 }}>24/7/365</p>
            <p className="font-dm-sans font-semibold" style={{ fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', color: '#14358A' }}>Operational Support</p>
          </div>
        </div>
        <div className="flex justify-center"><img src="/world-map.png" alt="World Map" className="max-w-full h-auto" style={{ maxWidth: 'min(980px, 85%)', width: '100%' }} /></div>
      </div>

      {/* Seize Your Next Opportunity */}
      <div className="relative z-10" style={{ background: '#EBF7FF', paddingTop: 'clamp(40px, 4.5vw, 80px)', paddingBottom: 'clamp(40px, 4.5vw, 80px)' }}>
        <div style={{ maxWidth: 'min(900px, 85%)', margin: '0 auto', textAlign: 'center', padding: '0 1rem' }}>
          <h2 className="font-dm-sans font-bold" style={{ fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>Seize your next opportunity</h2>
          <p className="font-dm-sans font-normal" style={{ fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '135%', color: '#68718B', maxWidth: 'min(563px, 90%)', margin: '0 auto', marginBottom: 'clamp(14px, 1.25vw, 20px)' }}>Connect with our executive team to solve your critical challenges and capitalize on opportunities for immediate, high-impact growth.</p>
          <div className="flex items-center justify-center">
            <button className="text-white font-dm-sans font-bold rounded-[10px] hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)', padding: 'clamp(12px, 1.11vw, 18px) clamp(24px, 2.5vw, 42px)', fontSize: 'clamp(14px, 1.11vw, 18px)', lineHeight: '140%' }}>Request a consultation</button>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits */}
      <div className="relative z-10" style={{ background: '#EBF7FF', paddingTop: 'clamp(32px, 4vw, 80px)', paddingBottom: 'clamp(32px, 4vw, 80px)' }}>
        <div style={{ maxWidth: 'min(1200px, 90%)', margin: '0 auto', textAlign: 'center', padding: '0 clamp(24px, 3vw, 48px)' }}>
          <h2 className="font-dm-sans font-bold" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: 'clamp(16px, 1.67vw, 32px)' }}>Unsure which solution fits your business?</h2>
          <p className="font-montserrat font-normal mx-auto" style={{ fontSize: 'clamp(16px, 2.2vw, 34px)', lineHeight: '1.35', color: '#333', maxWidth: 'min(1196px, 95%)', marginBottom: 'clamp(24px, 2.5vw, 48px)' }}>Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.</p>
          <button className="text-white font-dm-sans font-bold rounded-[10px] hover:opacity-90 transition-all transform hover:scale-105" style={{ background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)', padding: 'clamp(12px, 1.11vw, 18px) clamp(24px, 2.22vw, 36px)', fontSize: 'clamp(15px, 1.39vw, 22px)', lineHeight: '1.4' }}>Find your ideal solution</button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
