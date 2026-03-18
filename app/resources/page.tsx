import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section - Our Resources */}
      <section className="w-full pt-24 lg:pt-36 pb-14 lg:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h1
            className="text-center mb-6 lg:mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 3.33vw, 48px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Our Resources
          </h1>
          <p
            className="text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2.08vw, 30px)',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: 'min(1082px, 95%)',
              margin: '0 auto',
            }}
          >
            This resource provides a direct look into the intellectual capital that powers PMG's strategic engine. It serves as a shared language for our partners, a foundational guide for those considering working with us, and a clear point of differentiation from our industry peers. By exploring these concepts, you can understand how we deconstruct complex problems, avoid common strategic pitfalls, and engineer durable, high-performance solutions.
          </p>
        </div>
      </section>

      {/* How PMG's Language Creates Better Outcomes */}
      {/* Decorative bar */}
      <div style={{ width: '100%', height: '4px', background: 'linear-gradient(90deg, #14358A 0%, #6A36FF 100%)' }} />

      <section className="w-full py-12 lg:py-16 px-4 sm:px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-4 lg:mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 48px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            How PMG's Language Creates Better Outcomes
          </h2>
          <p
            className="text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.25vw, 18px)',
              lineHeight: '1.75',
              color: '#333333',
              maxWidth: 'min(1082px, 95%)',
              margin: '0 auto',
              marginBottom: 'clamp(32px, 3.33vw, 48px)',
            }}
          >
            The way we think about problems determines how we solve them. Our proprietary frameworks and mental models are not just academic - they are battle-tested tools that have delivered <strong style={{ fontWeight: 700 }}>22x average ROI</strong> for our clients.
          </p>

          {/* Three Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Card 1: Precision Thinking */}
            <div
              style={{
                background: '#FFFFFF',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.67vw, 24px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.11vw, 16px)',
              }}
            >
              <div
                style={{
                  width: 'clamp(40px, 3.33vw, 48px)',
                  height: 'clamp(40px, 3.33vw, 48px)',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 2.01vw, 29px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Precision Thinking
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.04vw, 15px)',
                  lineHeight: '160%',
                  color: '#68718B',
                }}
              >
                Shared language eliminates ambiguity and accelerates decision-making
              </p>
            </div>

            {/* Card 2: Avoid Costly Errors */}
            <div
              style={{
                background: '#FFFFFF',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.67vw, 24px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.11vw, 16px)',
              }}
            >
              <div
                style={{
                  width: 'clamp(40px, 3.33vw, 48px)',
                  height: 'clamp(40px, 3.33vw, 48px)',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 2.01vw, 29px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Avoid Costly Errors
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.04vw, 15px)',
                  lineHeight: '160%',
                  color: '#68718B',
                }}
              >
                Anti-concepts help identify and eliminate flawed thinking patterns before they cause damage
              </p>
            </div>

            {/* Card 3: Faster Execution */}
            <div
              style={{
                background: '#FFFFFF',
                border: '3px solid #14358A',
                borderRadius: '10px',
                padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.67vw, 24px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.11vw, 16px)',
              }}
            >
              <div
                style={{
                  width: 'clamp(40px, 3.33vw, 48px)',
                  height: 'clamp(40px, 3.33vw, 48px)',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 2.01vw, 29px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Faster Execution
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.04vw, 15px)',
                  lineHeight: '160%',
                  color: '#68718B',
                }}
              >
                Common frameworks mean less explanation and more action
              </p>
            </div>
          </div>

          {/* How to Use This Resource Box */}
          <div
            style={{
              background: '#FFFFFF',
              border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '32px',
              marginTop: '48px',
            }}
          >
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.01vw, 33px)',
                    color: '#14358A',
                    marginBottom: '12px',
                  }}
                >
                  How to Use This Resource
                </h3>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 1.04vw, 17px)',
                    lineHeight: '160%',
                    color: '#68718B',
                  }}
                >
                  This resource serves multiple audiences. For potential clients, it offers a foundational understanding of our strategic approach before an engagement begins. For current partners, it's a shared vocabulary to streamline communication and align on project frameworks. For industry peers, it provides a transparent look at how PMG's thinking and methodologies differ from traditional consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative bar */}
      <div style={{ width: '100%', height: '4px', background: 'linear-gradient(90deg, #14358A 0%, #6A36FF 100%)' }} />

      {/* Ready to Apply These Concepts? CTA */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Ready to Apply These Concepts?
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.25vw, 20px)',
              lineHeight: '160%',
              color: '#333333',
              maxWidth: 'min(900px, 95%)',
              margin: '0 auto 32px',
            }}
          >
            Understanding these principles is the first step. Applying them is where real transformation happens. Let's discuss how PMG's expertise can solve your specific challenges.
          </p>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.11vw, 18px)',
              letterSpacing: '0.04em',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Request a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
