import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Section Label */}
          <p
            className="text-center mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '29px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              color: '#14358A',
            }}
          >
            Thinking in Public
          </p>

          {/* Main Heading */}
          <h1
            className="text-center mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '46px',
              color: '#14358A',
              maxWidth: '1224px',
              margin: '0 auto 2rem auto',
            }}
          >
            Insights & Innovations
          </h1>

          {/* Description */}
          <p
            className="text-center mb-16"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '100%',
              color: '#333333',
              maxWidth: '1258px',
              margin: '0 auto 4rem auto',
            }}
          >
            Unfiltered thoughts on whatever matters right now: Universal Basic Income, Management Consulting, Culture Transformation, Existentialism, and everything in between. Each piece represents where our curiosity has taken us this month.
          </p>

          {/* Note to Prospective Partners Box */}
          <div
            className="bg-white rounded-[10px] p-8 mx-auto mb-16"
            style={{
              border: '3px solid #14358A',
              maxWidth: '1050px',
            }}
          >
            <h3
              className="text-center mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-3%',
                color: '#14358A',
              }}
            >
              Note to Prospective Partners
            </h3>
            <p
              className="text-center"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              This isn't a random collection of interests; it's a practice in pattern recognition and higher-order thinking. By connecting unrelated domains, we bring unconventional frameworks to business challenges. This is how we think when we aren't in the room with you; we're constantly building the toolkit we use to build your business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <div
              className="flex items-center bg-white rounded-[10px] px-6"
              style={{
                border: '3px solid #14358A',
                width: '100%',
                maxWidth: '1050px',
                height: '57px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#14358A" strokeWidth="2"/>
                <path d="M16 16L20 20" stroke="#14358A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search Articles"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '100%',
                  color: '#14358A',
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  marginLeft: '16px',
                  background: 'transparent',
                }}
              />
            </div>
          </div>

          {/* Filter by tag */}
          <p
            className="text-center mb-8"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '25px',
              lineHeight: '100%',
              color: '#000000',
            }}
          >
            Filter by tag:
          </p>

          {/* Article Card */}
          <div className="flex justify-center">
            <div
              className="bg-white rounded-[10px] p-8 flex items-center gap-8"
              style={{
                border: '3px solid #14358A',
                maxWidth: '1067px',
                width: '100%',
                minHeight: '253px',
              }}
            >
              {/* Article Image */}
              <div
                style={{
                  width: '400px',
                  height: '200px',
                  background: '#E5E7EB',
                  borderRadius: '10px',
                  flexShrink: 0,
                }}
              >
                {/* Placeholder for article image */}
              </div>

              {/* Article Content */}
              <div className="flex-1">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '29px',
                    lineHeight: '105%',
                    letterSpacing: '-3%',
                    color: '#14358A',
                  }}
                >
                  Hidden Risks of AI Expansion
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '140%',
                    color: '#68718B',
                  }}
                >
                  July 25, 2024
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '21px',
                    lineHeight: '30px',
                    color: '#14358A',
                    textDecoration: 'none',
                  }}
                >
                  Read More
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
