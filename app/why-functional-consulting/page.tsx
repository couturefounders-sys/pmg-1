'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WhyFunctionalConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(140px,15.97vw,230px)] pb-24">
        <div className="text-center max-w-[1224px] mx-auto">
          <h1
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
            }}
          >
            Stop Hiring Generalists.
          </h1>

          <p
            className="max-w-[827px] mx-auto"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#14358A',
            }}
          >
            Don't hire advisors who act like generalists. Hire functional operators who deliver measurable results and stay through execution.
          </p>
        </div>
      </div>

      {/* The Problem with Traditional Consulting Section */}
      <div 
        className="relative w-full py-20"
        style={{
          backgroundImage: 'url(/problem-consulting-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            >
              The Problem with Traditional Consulting
            </h2>

            <p
              className="max-w-[1161px] mx-auto"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '120%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            >
              Traditional consulting firms promise expertise, but too often deliver polished documents instead of tangible impact.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1264px] mx-auto">
            {/* Lacking Functional Depth */}
            <div
              className="bg-white p-6 rounded-[10px] text-center"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#FF0000',
                }}
              >
                Lacking Functional Depth
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: '#68718B',
                }}
              >
                Consultants arrive armed with industry jargon but lack the hands-on expertise needed to solve core functional challenges. They can talk about "efficiency" or "customer centricity" in abstract terms, but when it comes to redesigning a process, fixing a P&L, or building a customer journey, the experience simply isn't there.
              </p>
            </div>

            {/* Deliverables, Not Impact */}
            <div
              className="bg-white p-6 rounded-[10px] text-center"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#FF0000',
                }}
              >
                Deliverables, Not Impact
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: '#68718B',
                }}
              >
                Traditional firms measure their value in slide decks, frameworks, and presentations. These deliverables may look impressive, but they rarely move the needle on the ground. The hard work of execution, including shifting culture, redesigning processes, or implementing systems, is left entirely to the client.
              </p>
            </div>

            {/* Recycled Playbooks */}
            <div
              className="bg-white p-6 rounded-[10px] text-center"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#FF0000',
                }}
              >
                Recycled Playbooks
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: '#68718B',
                }}
              >
                With deep industry specialization comes a narrow lens. Industry consultants often recycle the same playbooks from client to client, tweaking names and numbers but leaving the approach largely unchanged. The result is one-size-fits-all strategies that feel familiar, predictable, and uninspired.
              </p>
            </div>

            {/* Insular Groupthink */}
            <div
              className="bg-white p-6 rounded-[10px] text-center"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#FF0000',
                }}
              >
                Insular Groupthink
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.39vw, 22px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: '#68718B',
                }}
              >
                When everyone in the room shares the same background, education, and industry perspective, the solutions that emerge are limited. This groupthink discourages bold thinking, prevents innovation, and leaves organizations vulnerable to disruption from outside their sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sound Familiar? The Echoes of Frustration Section */}
      <div className="relative w-full py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4">
          <div className="text-center">
            <h2
              className="mb-8"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                color: '#14358A',
                maxWidth: 'min(1224px, 95%)',
                margin: '0 auto 2rem auto',
              }}
            >
              Sound Familiar? The Echoes of Frustration
            </h2>

            <p
              className="mb-10"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
                maxWidth: 'min(1258px, 95%)',
                margin: '0 auto 2.5rem auto',
              }}
            >
              The consulting world is filled with stories of massive investments that lead to little more than a binder on a shelf. Below are just a few of the real frustrations we hear from clients who come to us after working with traditional firms. It's why we built PMG to be different.
            </p>

            {/* Pain Point Quotes */}
            <div className="flex flex-col gap-4 mb-10 mx-auto" style={{ maxWidth: 'min(900px, 95%)' }}>
              {[
                '"Solutions ignored organizational culture — recommendations were technically sound but faced overwhelming resistance from the people expected to execute them."',
                '"Heavy reliance on \'best practices\' that worked elsewhere but didn\'t account for our specific competitive environment, customer base, or operational constraints."',
                '"Solutions ignored frontline realities — the consultants never spoke to the people doing the actual work, so the plan fell apart the moment it hit the ground."',
              ].map((quote, i) => (
                <div key={i} style={{ padding: '24px', border: '3px solid #14358A', borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 'clamp(15px, 1.53vw, 24px)', lineHeight: '140%', textAlign: 'center', color: '#14358A' }}>
                    {quote}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#000000',
                maxWidth: 'min(1337px, 95%)',
                margin: '0 auto',
              }}
            >
              Nearly one-third of PMG clients come to us after failed projects with industry-focused consulting firms. We're committed to ensuring that when a project ends with us, it ends with success.
            </p>
          </div>
        </div>
      </div>

      {/* Why Functional Consulting Works Section */}
      <div className="relative w-full py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4">
          <div className="text-center max-w-[1258px] mx-auto">
            <h2
              className="mb-8"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                color: '#14358A',
                maxWidth: 'min(1224px, 95%)',
                margin: '0 auto 2rem auto',
              }}
            >
              Why Functional Consulting Works
            </h2>

            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
              }}
            >
              <p className="mb-6" style={{ fontWeight: 400 }}>
                At PMG, we believe consulting should look more like hiring a C-suite functional expert than hiring a generic business advisor. You wouldn't hire a "business person" to be your CFO, COO, or CTO. Yet most consulting firms act exactly like that, offering generalists where you need specialists.
              </p>

              <p className="mb-4" style={{ fontWeight: 700 }}>
                PMG does it differently:
              </p>

              <ul className="text-left max-w-[min(1100px,_90%)] mx-auto space-y-3 mb-6" style={{ fontWeight: 400, listStyleType: 'disc', paddingLeft: '40px' }}>
                <li>
                  We classify every project by its primary functional specialty (e.g., Strategy & Operations, Customer Experience, M&A).
                </li>
                <li>
                  We place an expert in that function directly into your business.
                </li>
                <li>
                  That expert draws on PMG's network of other functional specialists to ensure every part of your project benefits from deep knowledge.
                </li>
              </ul>

              <p style={{ fontWeight: 700 }}>
                This model means our clients don't just get recommendations, they get results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative w-full py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4">
          <h2 className="text-center font-dm-sans font-bold mb-10" style={{ fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A' }}>
            The PMG Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            {/* Impact, Not Deliverables */}
            <div
              className="bg-white p-6 rounded-[10px]"
              style={{
                border: '3px solid #14358A',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M8 12H16M8 8H16M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                className="mb-0"
                style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                }}
                >
                Impact, Not Deliverables
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#68718B',
                }}
              >
                We measure success by the realized outcome, not the deliverable volume. Our engagements are structured around clear, measurable KPIs and financial returns, ensuring every activity contributes directly to your bottom line.
              </p>
            </div>

            {/* Functional Depth */}
            <div
              className="bg-white p-6 rounded-[10px]"
              style={{
                border: '3px solid #14358A',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M8 12H16M8 8H16M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                className="mb-0"
                style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                }}
                >
                Functional Depth
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#68718B',
                }}
              >
                Our consultants are deeply experienced operators and subject-matter experts first, consultants second. This functional specialization ensures the guidance you receive is pragmatic, battle-tested, and focused on executable strategies rather than abstract theory.
              </p>
            </div>

            {/* Cross-Industry Innovation */}
            <div
              className="bg-white p-6 rounded-[10px]"
              style={{
                border: '3px solid #14358A',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M8 12H16M8 8H16M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                className="mb-0"
                style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                }}
                >
                Cross-Industry Innovation
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#68718B',
                }}
              >
                We deliberately apply cross-industry experience, importing proven strategies from adjacent or dissimilar sectors. This approach eliminates groupthink and delivers transformative, non-obvious solutions that insulate your business from industry-specific blind spots.
              </p>
            </div>

            {/* Practical Execution */}
            <div
              className="bg-white p-6 rounded-[10px]"
              style={{
                border: '3px solid #14358A',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#14358A] rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M8 12H16M8 8H16M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3
                className="mb-0"
                style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                }}
                >
                Practical Execution
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#68718B',
                }}
              >
                Unlike firms that exit upon delivery, we commit to practical execution. Our experts integrate with your team through the implementation phase to ensure adoption, troubleshoot real-world obstacles, and drive the project to quantifiable completion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Clients Choose Functional Consulting Section */}
      <div className="relative w-full py-20 bg-white">
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              maxWidth: 'min(1224px, 95%)',
              margin: '0 auto 4rem auto',
            }}
          >
            Why Clients Choose Functional Consulting
          </h2>

          {/* Timeline Layout */}
          <div className="relative max-w-[min(1100px,_90%)] mx-auto">
            {/* Vertical Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{
                width: '4px',
                height: '100%',
                background: '#006FBA',
                top: 0,
              }}
            />

            {/* Timeline Items */}
            <div className="relative flex flex-col gap-8">
              {/* Item 1 - Left */}
              <div className="flex items-center justify-end pr-[calc(50%+40px)]">
                <div className="relative">
                  {/* Dashed line to timeline */}
                  <div 
                    className="absolute right-0 top-1/2 transform translate-x-full"
                    style={{
                      width: '40px',
                      height: '0',
                      borderTop: '2px dashed #006FBA',
                    }}
                  />
                  <div
                    className="p-6"
                    style={{
                      border: '3px solid #006FBA',
                      borderRadius: '16px',
                      maxWidth: 'min(350px, 100%)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(16px, 1.53vw, 22px)',
                        lineHeight: '105%',
                        letterSpacing: '-0.03em',
                        textAlign: 'right',
                        background: 'linear-gradient(90deg, #006FBA 0%, #003254 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Faster adoption, because solutions are designed by true experts.
                    </p>
                  </div>
                </div>
                {/* Circle on timeline */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '30px',
                    height: '30px',
                    background: '#006FBA',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Item 2 - Right */}
              <div className="flex items-center justify-start pl-[calc(50%+40px)]">
                <div className="relative">
                  {/* Dashed line to timeline */}
                  <div 
                    className="absolute left-0 top-1/2 transform -translate-x-full"
                    style={{
                      width: '40px',
                      height: '0',
                      borderTop: '2px dashed #006FBA',
                    }}
                  />
                  <div
                    className="p-6"
                    style={{
                      border: '3px solid #006FBA',
                      borderRadius: '16px',
                      maxWidth: 'min(350px, 100%)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(16px, 1.53vw, 22px)',
                        lineHeight: '105%',
                        letterSpacing: '-0.03em',
                        textAlign: 'left',
                        background: 'linear-gradient(90deg, #006FBA 0%, #003254 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Stronger ROI, because every recommendation is tied to measurable outcomes.
                    </p>
                  </div>
                </div>
                {/* Circle on timeline */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '30px',
                    height: '30px',
                    background: '#006FBA',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Item 3 - Left */}
              <div className="flex items-center justify-end pr-[calc(50%+40px)]">
                <div className="relative">
                  {/* Dashed line to timeline */}
                  <div 
                    className="absolute right-0 top-1/2 transform translate-x-full"
                    style={{
                      width: '40px',
                      height: '0',
                      borderTop: '2px dashed #006FBA',
                    }}
                  />
                  <div
                    className="p-6"
                    style={{
                      border: '3px solid #006FBA',
                      borderRadius: '16px',
                      maxWidth: 'min(350px, 100%)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(16px, 1.53vw, 22px)',
                        lineHeight: '105%',
                        letterSpacing: '-0.03em',
                        textAlign: 'right',
                        background: 'linear-gradient(90deg, #006FBA 0%, #003254 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Greater innovation, because insights flow across industries, not just within them.
                    </p>
                  </div>
                </div>
                {/* Circle on timeline */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '30px',
                    height: '30px',
                    background: '#006FBA',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Item 4 - Right */}
              <div className="flex items-center justify-start pl-[calc(50%+40px)]">
                <div className="relative">
                  {/* Dashed line to timeline */}
                  <div 
                    className="absolute left-0 top-1/2 transform -translate-x-full"
                    style={{
                      width: '40px',
                      height: '0',
                      borderTop: '2px dashed #006FBA',
                    }}
                  />
                  <div
                    className="p-6"
                    style={{
                      border: '3px solid #006FBA',
                      borderRadius: '16px',
                      maxWidth: 'min(350px, 100%)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(16px, 1.53vw, 22px)',
                        lineHeight: '105%',
                        letterSpacing: '-0.03em',
                        textAlign: 'left',
                        background: 'linear-gradient(90deg, #006FBA 0%, #003254 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      More accountability, because we only succeed if our clients do.
                    </p>
                  </div>
                </div>
                {/* Circle on timeline */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '30px',
                    height: '30px',
                    background: '#006FBA',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner with PMG CTA Section */}
      <div 
        className="relative w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)',
        }}
      >
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
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
            Partner with PMG for Functional Excellence
          </h2>

          <p 
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: 'min(1196px, 95%)',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let's work together to deliver results through deep functional expertise.
          </p>

          <button 
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '393px',
              height: '65px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Request a Consultation
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
