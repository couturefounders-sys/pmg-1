import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

const articles = [
  { title: 'The Hidden Risks of AI Expansion', tag: 'AI', date: 'July 25, 2024' },
  { title: 'The Unseen Edge', tag: 'Strategy', date: 'July 20, 2024' },
  { title: 'Charities in Crisis', tag: 'Impact', date: 'July 15, 2024' },
  { title: 'The Sector Convergence Model', tag: 'Innovation', date: 'November 10, 2023' },
];

export default function InsightsInnovationsPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      <FadeInSection delay={0} direction="up">
      <div className="w-full flex justify-center px-4" style={{ paddingTop: '8px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1vw, 14px)', color: '#14358A' }}>
          <AnimatedCounter end={22} suffix="x" /> average client ROI
        </p>
      </div>
      </FadeInSection>



      {/* ─── Section 1: Hero ─── */}
      <section className="w-full pt-36 pb-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <FadeInSection direction="up">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000', marginBottom: '12px' }}>
            Thinking in Public
          </p>
          <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', marginBottom: '20px' }}>
            Insights &amp; Innovations
          </h1>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', letterSpacing: '0%', textAlign: 'center', color: '#333333', marginBottom: '36px' }}>
            Unfiltered thoughts on whatever matters right now: Resource Scarcity, Neobank Performance Marketing, Existentialism, and everything in between. Each piece represents where our curiosity has taken us this month.
          </p>
          </FadeInSection>

          {/* Note box */}
          <FadeInSection delay={0.1} className="w-full">
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px 28px', background: '#FFFFFF', textAlign: 'center', width: '100%', maxWidth: '1067px', margin: '0 auto' }}>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', color: '#14358A', marginBottom: '10px' }}>
              Note to Prospective Partners
            </h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '26.4px', fontWeight: 400, color: '#5F6D7E' }}>
              This isn&apos;t a random collection of interests; it&apos;s a practice in pattern recognition and higher-order thinking. By connecting unrelated domains, we bring unconventional frameworks to business challenges. This is how we think when we aren&apos;t in the room with you; we&apos;re constantly building the toolkit we use to build your business.
            </p>
          </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── Section 2: Articles ─── */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 items-stretch">

          {/* Search */}
          <div style={{ border: '3px solid #14358A', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', background: '#FFFFFF', width: '100%', maxWidth: '1067px', margin: '0 auto' }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="#9AA6B4" strokeWidth="2" />
              <path d="M14.5 14.5L18 18" stroke="#9AA6B4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search Articles"
              style={{ border: 'none', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: '#333333', background: 'transparent', width: '100%' }}
            />
          </div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 'clamp(16px, 1.11vw, 20px)', lineHeight: '130%', textAlign: 'center', color: '#333333', marginTop: '6px' }}>
            Filter by tag:
          </p>

          {/* Article cards */}
          {articles.map((article, i) => (
            <FadeInSection key={i} delay={i * 0.1} className="w-full">
              <div style={{ border: '3px solid #14358A', borderRadius: '10px', background: '#FFFFFF', width: '100%', maxWidth: '1067px', margin: '0 auto', minHeight: '220px', height: 'clamp(220px, 24vw, 253px)', display: 'flex', alignItems: 'center', padding: '32px 28px 30px 28px' }}>
                <div style={{ width: '100%', maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.01vw, 29px)', lineHeight: '1.1', color: '#14358A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.title}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(15px, 1.11vw, 16px)', lineHeight: '1.4', color: '#68718B' }}>{article.date}</p>
                  <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(17px, 1.46vw, 21px)', lineHeight: '1.35', color: '#14358A', textDecoration: 'none', marginTop: '12px' }}>Read More &rsaquo;</a>
                </div>
              </div>
            </FadeInSection>
          ))}

          {/* Featured article */}
          <FadeInSection delay={0} className="w-full">
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px', background: '#FFFFFF', width: '100%', maxWidth: '945px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, color: '#68718B', marginBottom: '8px' }}>Upcoming</p>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', color: '#14358A', marginBottom: '10px' }}>The Silent ROI: Quantifying the Value of Trust &amp; Psychological Safety</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(11px, 0.9vw, 15px)', lineHeight: '1.7', color: '#5F6D7E' }}>Explore how trust and psychological safety produce measurable financial returns that traditional ROI models fail to capture.</p>
          </div>
          </FadeInSection>

          {/* Email signup */}
          <FadeInSection delay={0.1} className="w-full">
          <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '28px', background: '#FFFFFF', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '945px', margin: '0 auto' }}>
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
          </FadeInSection>

        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        className="w-full py-20 px-6 relative overflow-hidden"
        style={{ background: '#EBF7FF' }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
          <FadeInSection direction="up">
          <h2 style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', textAlign: 'center', color: '#14358A', marginBottom: '16px' }}>
            Leadership Isn&apos;t Just What You Do. It&apos;s How You Think.
          </h2>
          <p style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', letterSpacing: '0%', textAlign: 'center', color: '#333333', marginBottom: '32px' }}>
            The executives who read widely, think laterally, and connect unrelated ideas are the ones who build durable competitive advantages.
          </p>
          </FadeInSection>
          <a
            href="/contact-us"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', border: 'none', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', padding: '13px 32px', borderRadius: '8px', textDecoration: 'none' }}
          >
            Elevate Our Thinking
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
