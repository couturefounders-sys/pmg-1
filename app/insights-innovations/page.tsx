import Header from '@/components/Header';
import Footer from '@/components/Footer';

const articles = [
  { title: 'Hidden Risks of AI Expansion', date: 'July 25, 2024' },
  { title: 'Hidden Risks of AI Expansion', date: 'July 25, 2024' },
  { title: 'Hidden Risks of AI Expansion', date: 'July 25, 2024' },
  { title: 'Hidden Risks of AI Expansion', date: 'July 25, 2024' },
];

const tags = ['AI & Technology', 'Strategy', 'Operations', 'Leadership', 'Finance', 'Culture'];

export default function InsightsInnovationsPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-16 px-6 bg-white">
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.06em', color: '#14358A', marginBottom: '12px' }}>
            Thinking in Public
          </p>
          <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '1.1', color: '#14358A', marginBottom: '20px' }}>
            Insights &amp; Innovations
          </h1>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#3A3A3A', marginBottom: '36px' }}>
            Unfiltered thoughts on whatever matters right now: Universal Basic Income, Management Consulting, Culture Transformation, Existentialism, and everything in between. Each piece represents where our curiosity has taken us this month.
          </p>

          {/* Note box */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px 28px', background: '#FFFFFF', textAlign: 'center', maxWidth: '580px' }}>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#14358A', marginBottom: '10px' }}>
              Note to Prospective Partners
            </h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: '1.75', color: '#5F6D7E' }}>
              This isn&apos;t a random collection of interests; it&apos;s a practice in pattern recognition and higher-order thinking. By connecting unrelated domains, we bring unconventional frameworks to business challenges. This is how we think when we aren&apos;t in the room with you; we&apos;re constantly building the toolkit we use to build your business.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Articles ─── */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-[660px] mx-auto flex flex-col gap-6">

          {/* Search */}
          <div style={{ border: '3px solid #14358A', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', background: '#FFFFFF' }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="#9AA6B4" strokeWidth="2" />
              <path d="M14.5 14.5L18 18" stroke="#9AA6B4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search Articles"
              style={{ border: 'none', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#3A3A3A', background: 'transparent', width: '100%' }}
            />
          </div>

          {/* Filter by tag */}
          <div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#5F6D7E', marginBottom: '10px', textAlign: 'center' }}>Filter by tag:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {tags.map((tag, i) => (
                <span key={i} style={{ border: '3px solid #14358A', borderRadius: '20px', padding: '5px 14px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#14358A', cursor: 'pointer', background: '#FFFFFF' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Article cards */}
          {articles.map((article, i) => (
            <div key={i} style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '40px 36px', background: '#FFFFFF' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '19px', color: '#14358A', marginBottom: '8px' }}>{article.title}</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#9AA6B4', marginBottom: '20px' }}>{article.date}</p>
              <a href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '14px', color: '#14358A', textDecoration: 'none' }}>Read More &rsaquo;</a>
            </div>
          ))}

          {/* Featured article */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px', background: '#FFFFFF' }}>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '18px', color: '#14358A', marginBottom: '8px' }}>Deconstructing Risk</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#14358A', marginBottom: '10px' }}>How Modern Portfolio Theory Applies to Business Operations</p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: '1.7', color: '#5F6D7E' }}>Explore how principles from finance can be used to build more resilient, diversified, and antifragile business operations.</p>
          </div>

          {/* Email signup */}
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px', background: '#FFFFFF', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#14358A', marginBottom: '8px' }}>Get Our Latest Thinking</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12.5px', lineHeight: '1.7', color: '#5F6D7E' }}>Join executives who receive our monthly intellectual wanderings. No business platitudes, just interesting ideas applied to complex problems.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '180px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{ border: '3px solid #14358A', borderRadius: '6px', padding: '10px 14px', fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#3A3A3A', outline: 'none' }}
              />
              <button style={{ background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                Submit
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        className="w-full py-20 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)' }}
      >
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center relative z-10">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '30px', lineHeight: '1.3', color: '#FFFFFF', marginBottom: '16px' }}>
            If you&apos;re wondering how AI ethics relates to your operations problem...
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
            ...that is exactly the conversation we should have. We connect the dots between technological ambition, human consequence, and operational excellence.
          </p>
          <a
            href="/contact-us"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', border: 'none', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '14px', padding: '13px 32px', borderRadius: '8px', textDecoration: 'none' }}
          >
            Let&apos;s Connect
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
