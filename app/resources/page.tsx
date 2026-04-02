import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function ResourcesPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section - Our Resources */}
      <section className="w-full pt-24 lg:pt-36 pb-14 lg:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <FadeInSection direction="up">
          <h1
            className="text-center mb-6 lg:mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: 'min(1082px, 95%)',
              margin: '0 auto',
            }}
          >
            This resource provides a direct look into the intellectual capital that powers PMG's strategic engine. It serves as a shared language for our partners, a foundational guide for those considering working with us, and a clear point of differentiation from our industry peers. By exploring these concepts, you can understand how we deconstruct complex problems, avoid common strategic pitfalls, and engineer durable, high-performance solutions.
          </p>
          </FadeInSection>
        </div>
      </section>

      {/* How PMG's Language Creates Better Outcomes */}
      <section className="w-full py-12 lg:py-16 px-4 sm:px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[1200px] mx-auto">
          <FadeInSection direction="up">
          <h2
            className="text-center mb-4 lg:mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
            The way we think about problems determines how we solve them. Our proprietary frameworks and mental models are not just academic - they are battle-tested tools that have delivered <strong style={{ fontWeight: 700 }}><AnimatedCounter end={22} suffix="x" /> average ROI</strong> for our clients.
          </p>
          </FadeInSection>

          {/* Three Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
            {/* Card 1: Precision Thinking */}
            <FadeInSection delay={0} className="h-full">
            <div
              className="h-full"
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
              <div style={{ position: 'relative', width: '56px', height: '56px', background: '#14358A', borderRadius: '12px', flexShrink: 0 }}>
                <Image src="/icons/cards/message-security.svg" alt="Precision Thinking" width={34} height={34} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '34px', height: '34px', objectFit: 'contain' }} />
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
            </FadeInSection>

            {/* Card 2: Avoid Costly Errors */}
            <FadeInSection delay={0.1} className="h-full">
            <div
              className="h-full"
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
              <div style={{ position: 'relative', width: '56px', height: '56px', background: '#14358A', borderRadius: '12px', flexShrink: 0 }}>
                <Image src="/icons/cards/funds.svg" alt="Avoid Costly Errors" width={34} height={34} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '34px', height: '34px', objectFit: 'contain' }} />
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
            </FadeInSection>

            {/* Card 3: Faster Execution */}
            <FadeInSection delay={0.2} className="h-full">
            <div
              className="h-full"
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
              <div style={{ position: 'relative', width: '56px', height: '56px', background: '#14358A', borderRadius: '12px', flexShrink: 0 }}>
                <Image src="/icons/cards/chart-histogram.svg" alt="Faster Execution" width={34} height={34} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '34px', height: '34px', objectFit: 'contain' }} />
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
            </FadeInSection>
          </div>

          {/* How to Use This Resource Box */}
          <FadeInSection delay={0.1}>
          <div
            style={{
              background: '#FFFFFF',
              border: '3px solid #14358A',
              borderRadius: '10px',
              padding: '32px',
              marginTop: '48px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ position: 'relative', width: '56px', height: '56px', background: '#14358A', borderRadius: '12px', flexShrink: 0 }}>
                <Image src="/icons/cards/efferent-three.svg" alt="How to Use This Resource" width={34} height={34} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '34px', height: '34px', objectFit: 'contain' }} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.53vw, 22px)',
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
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    lineHeight: '160%',
                    color: '#68718B',
                  }}
                >
                  This resource serves multiple audiences. For potential clients, it offers a foundational understanding of our strategic approach before an engagement begins. For current partners, it's a shared vocabulary to streamline communication and align on project frameworks. For industry peers, it provides a transparent look at how PMG's thinking and methodologies differ from traditional consulting.
                </p>
              </div>
            </div>
          </div>
          </FadeInSection>
        </div>
      </section>


      {/* Ready to Apply These Concepts? CTA */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <FadeInSection direction="up">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
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
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '160%',
              color: '#333333',
              maxWidth: 'min(900px, 95%)',
              margin: '0 auto 32px',
            }}
          >
            Understanding these principles is the first step. Applying them is where real transformation happens. Let's discuss how PMG's expertise can solve your specific challenges.
          </p>
          </FadeInSection>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.22vw, 17.6px)',
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
