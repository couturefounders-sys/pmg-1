import Header from '@/components/Header';
import Footer from '@/components/Footer';

const articles = [
  { title: 'The Hidden Risks of AI Expansion', tag: 'AI', date: 'July 25, 2024' },
  { title: 'The Unseen Edge', tag: 'Strategy', date: 'July 20, 2024' },
  { title: 'Charities in Crisis', tag: 'Impact', date: 'July 15, 2024' },
  { title: 'The Sector Convergence Model', tag: 'Innovation', date: 'November 10, 2023' },
];

const tags = ['AI & Technology', 'Strategy', 'Operations', 'Leadership', 'Finance', 'Culture'];

export default function InsightsInnovationsPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.25vw, 20px)', lineHeight: '105%', color: '#000000', marginBottom: '12px' }}>
            Thinking in Public
          </p>
          <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A', marginBottom: '20px' }}>
            Insights &amp; Innovations
          </h1>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', letterSpacing: '0%', textAlign: 'center', color: '#333333', marginBottom: '36px' }}>
            Unfiltered thoughts on whatever matters right now: Resource Scarcity, Neobank Performance Marketing, Existentialism, and everything in between. Each piece represents where our curiosity has taken us this month.
          </p>

          {/* Note box */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px 28px', background: '#FFFFFF', textAlign: 'center', width: '100%', maxWidth: 'min(1056px, 95%)' }}>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', color: '#14358A', marginBottom: '10px' }}>
              Note to Prospective Partners
            </h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 1.11vw, 18px)', lineHeight: '1.75', color: '#5F6D7E' }}>
              This isn&apos;t a random collection of interests; it&apos;s a practice in pattern recognition and higher-order thinking. By connecting unrelated domains, we bring unconventional frameworks to business challenges. This is how we think when we aren&apos;t in the room with you; we&apos;re constantly building the toolkit we use to build your business.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Articles ─── */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6" style={{ alignItems: 'center' }}>

          {/* Search */}
          <div style={{ border: '3px solid #14358A', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', background: '#FFFFFF', width: '100%', maxWidth: 'min(1056px, 95%)' }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="#9AA6B4" strokeWidth="2" />
              <path d="M14.5 14.5L18 18" stroke="#9AA6B4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search Articles"
              style={{ border: 'none', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#333333', background: 'transparent', width: '100%' }}
            />
          </div>

          {/* Article cards */}
          {articles.map((article, i) => (
            <div key={i} style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '40px 36px', background: '#FFFFFF', width: '100%', maxWidth: 'min(1056px, 95%)' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 1.67vw, 28px)', color: '#14358A', marginBottom: '8px' }}>{article.title}</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.04vw, 17px)', color: '#9AA6B4', marginBottom: '20px' }}>{article.date}</p>
              <a href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 0.97vw, 16px)', color: '#14358A', textDecoration: 'none' }}>Read More &rsaquo;</a>
            </div>
          ))}

          {/* Featured article */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px', background: '#FFFFFF', width: '100%', maxWidth: 'min(945px, 95%)', alignSelf: 'center', textAlign: 'center' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(11px, 0.97vw, 16px)', fontWeight: 600, color: '#68718B', marginBottom: '8px' }}>Upcoming</p>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 1.25vw, 20px)', color: '#14358A', marginBottom: '10px' }}>The Silent ROI: Quantifying the Value of Trust &amp; Psychological Safety</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.7', color: '#5F6D7E' }}>Explore how trust and psychological safety produce measurable financial returns that traditional ROI models fail to capture.</p>
          </div>

          {/* Email signup */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px', background: '#FFFFFF', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: 'min(945px, 95%)', alignSelf: 'center' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.18vw, 19px)', color: '#14358A', marginBottom: '8px' }}>Get Our Latest Thinking</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(10px, 0.87vw, 14px)', lineHeight: '1.7', color: '#5F6D7E' }}>Join executives who receive our monthly intellectual wanderings. No business platitudes, just interesting ideas applied to complex problems.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '180px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{ border: '3px solid #14358A', borderRadius: '6px', padding: '10px 14px', fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', color: '#333333', outline: 'none' }}
              />
              <button style={{ background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 0.9vw, 15px)', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                Submit
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        className="w-full py-20 px-6 relative overflow-hidden"
        style={{ background: '#EBF7FF' }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
          <h2 style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 'clamp(28px, 3.33vw, 56px)', lineHeight: '105%', letterSpacing: '-0.03em', textAlign: 'center', color: '#14358A', marginBottom: '16px' }}>
            Leadership Isn&apos;t Just What You Do. It&apos;s How You Think.
          </h2>
          <p style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: 'clamp(18px, 2.08vw, 34px)', lineHeight: '140%', letterSpacing: '0%', textAlign: 'center', color: '#333333', marginBottom: '32px' }}>
            The executives who read widely, think laterally, and connect unrelated ideas are the ones who build durable competitive advantages.
          </p>
          <a
            href="/contact-us"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', border: 'none', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(11px, 0.97vw, 16px)', padding: '13px 32px', borderRadius: '8px', textDecoration: 'none' }}
          >
            Elevate Our Thinking
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
