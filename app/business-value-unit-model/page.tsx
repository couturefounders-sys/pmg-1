import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlueSectionWrapper from '@/components/BlueSectionWrapper';

export default function BusinessValueUnitModelPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* Section 1: Hero */}
      <section className="w-full pt-24 lg:pt-36 pb-14 lg:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '105%',
              color: '#000000',
              marginBottom: 'clamp(12px, 1.11vw, 16px)',
            }}
          >
            The Business Value Unit (BVU) Model
          </p>
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: 'clamp(16px, 1.94vw, 28px)',
            }}
          >
            The End of Arbitrary Capital Allocation
          </h1>
           <p
             style={{
               fontFamily: 'Montserrat, sans-serif',
               fontWeight: 400,
               fontStyle: 'normal',
               fontSize: 'clamp(15px, 1.375vw, 19.8px)',
               lineHeight: '140%',
               letterSpacing: '0%',
               textAlign: 'center',
               color: '#333333',
               maxWidth: 'min(900px, 95%)',
             }}
           >
             The Business Value Unit (BVU) Model is a proprietary financial framework that
             solves the most critical flaw in modern finance: the failure to quantify the
             contribution of non-commercial teams. We translate all diverse internal
             outputs (from risk mitigation and compliance to efficiency gains) into a single,
             normalized abstraction of value. The BVU Model eliminates &ldquo;apples-to-oranges&rdquo;
             comparisons, transforming support functions from unquantifiable cost centres
             into auditable, high-yield investment platforms.
           </p>
         </div>
       </section>

       {/* Section 2: The Unquantified Cost of Flawed Executive Decisions */}
       <BlueSectionWrapper className="py-14 lg:py-20 px-4 sm:px-6">

         <div className="max-w-[1200px] mx-auto relative z-10">
           <h2
             style={{
               fontFamily: 'DM Sans, sans-serif',
               fontWeight: 700,
               fontSize: 'clamp(24px, 2.75vw, 39.6px)',
               lineHeight: '105%',
               letterSpacing: '-0.03em',
               color: '#FFFFFF',
               textAlign: 'center',
               marginBottom: 'clamp(16px, 1.39vw, 20px)',
             }}
           >
             The Unquantified Cost of Flawed Executive Decisions
           </h2>
           <p
             style={{
               fontFamily: 'Montserrat, sans-serif',
               fontWeight: 400,
               fontSize: 'clamp(14px, 1.25vw, 18px)',
               lineHeight: '160%',
               color: '#FFFFFF',
               textAlign: 'center',
               maxWidth: 'min(800px, 95%)',
               margin: '0 auto',
               marginBottom: 'clamp(32px, 3.33vw, 48px)',
             }}
           >
             Traditional business metrics fail to capture the true value of non-commercial teams, leading to flawed decision-making and wasted resources.
           </p>

           {/* Comparison Cards Grid */}
           <div 
             className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
           >
             
             {/* Card 1: The Comparison Flaw */}
             <div
               style={{
                 backgroundColor: '#FFF5F5',
                 backgroundImage: 'url(/red.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
                 overflow: 'hidden',
               }}
             >
               <h3
                 style={{
                   fontFamily: 'DM Sans, sans-serif',
                   fontWeight: 700,
                   fontSize: 'clamp(18px, 1.53vw, 22px)',
                   color: '#D32F2F',
                   marginBottom: 'clamp(14px, 1.39vw, 20px)',
                   textAlign: 'center',
                 }}
               >
                 The Comparison Flaw
               </h3>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 400,
                   fontSize: 'clamp(13px, 1.04vw, 15px)',
                   lineHeight: '160%',
                   color: '#333333',
                   marginBottom: 'clamp(12px, 1.11vw, 16px)',
                 }}
               >
                 Traditional accounting forces executives to compare lines of code to legal risk and sales dollars, leading to fictional, opinion-driven investment decisions.
               </p>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 600,
                   fontSize: 'clamp(11px, 0.9vw, 13px)',
                   lineHeight: '160%',
                   color: '#68718B',
                 }}
               >
                 <strong style={{ color: '#D32F2F' }}>Risk:</strong> Misallocation of Resources: Teams waste time fixing problems outside their core competency, diverting capital and expertise from strategic initiatives.
               </p>
             </div>

             {/* Card 2: The BVU Solution */}
             <div
               style={{
                 backgroundColor: '#EBF3FF',
                 backgroundImage: 'url(/blue.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
                 overflow: 'hidden',
               }}
             >
               <h3
                 style={{
                   fontFamily: 'DM Sans, sans-serif',
                   fontWeight: 700,
                   fontSize: 'clamp(18px, 1.53vw, 22px)',
                   color: '#1565C0',
                   marginBottom: 'clamp(14px, 1.39vw, 20px)',
                   textAlign: 'center',
                 }}
               >
                 The BVU Solution
               </h3>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 400,
                   fontSize: 'clamp(13px, 1.04vw, 15px)',
                   lineHeight: '160%',
                   color: '#333333',
                   marginBottom: 'clamp(12px, 1.11vw, 16px)',
                 }}
               >
                 <strong>Normalized Investment:</strong> The BVU Model abstracts every team's output into a single, universal metric (BVU), enabling direct, objective investment comparison across all functions—from IT to Sales.
               </p>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 600,
                   fontSize: 'clamp(11px, 0.9vw, 13px)',
                   lineHeight: '160%',
                   color: '#68718B',
                 }}
               >
                 <strong style={{ color: '#1565C0' }}>Benefit:</strong> Eliminates Ambiguity: Instantly defines clear interfaces between teams, preventing scope creep and ensuring transparent accountability.
               </p>
             </div>

             {/* Card 3: The Cost Center Trap */}
             <div
               style={{
                 backgroundColor: '#FFF5F5',
                 backgroundImage: 'url(/red.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
                 overflow: 'hidden',
               }}
             >
               <h3
                 style={{
                   fontFamily: 'DM Sans, sans-serif',
                   fontWeight: 700,
                   fontSize: 'clamp(18px, 1.53vw, 22px)',
                   color: '#D32F2F',
                   marginBottom: 'clamp(14px, 1.39vw, 20px)',
                   textAlign: 'center',
                 }}
               >
                 The Cost Center Trap
               </h3>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 400,
                   fontSize: 'clamp(13px, 1.04vw, 15px)',
                   lineHeight: '160%',
                   color: '#333333',
                   marginBottom: 'clamp(12px, 1.11vw, 16px)',
                 }}
               >
                 Teams like IT, HR, and Internal Legal are seen only as expenses. Their essential contributions (risk reduction, efficiency) are unquantifiable, making them targets for arbitrary budget cuts.
               </p>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 600,
                   fontSize: 'clamp(11px, 0.9vw, 13px)',
                   lineHeight: '160%',
                   color: '#68718B',
                 }}
               >
                 <strong style={{ color: '#D32F2F' }}>Risk:</strong> Systemic Inconsistency: Without an immutable process, products and services vary widely in quality, eroding customer trust and inflating operational overhead.
               </p>
             </div>

             {/* Card 4: The BVU Solution */}
             <div
               style={{
                 backgroundColor: '#EBF3FF',
                 backgroundImage: 'url(/blue.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
                 overflow: 'hidden',
               }}
             >
               <h3
                 style={{
                   fontFamily: 'DM Sans, sans-serif',
                   fontWeight: 700,
                   fontSize: 'clamp(18px, 1.53vw, 22px)',
                   color: '#1565C0',
                   marginBottom: 'clamp(14px, 1.39vw, 20px)',
                   textAlign: 'center',
                 }}
               >
                 The BVU Solution
               </h3>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 400,
                   fontSize: 'clamp(13px, 1.04vw, 15px)',
                   lineHeight: '160%',
                   color: '#333333',
                   marginBottom: 'clamp(12px, 1.11vw, 16px)',
                 }}
               >
                 <strong>Auditable Value Stream:</strong> It transforms non-commercial functions from expense items into auditable value producers, where investment is justified by the measurable BVUs generated per staff hour and dollar spent.
               </p>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 600,
                   fontSize: 'clamp(11px, 0.9vw, 13px)',
                   lineHeight: '160%',
                   color: '#68718B',
                 }}
               >
                 <strong style={{ color: '#1565C0' }}>Benefit:</strong> Enables Automation: Process stability allows for automated verification, dramatically reducing human error and scaling quality control.
               </p>
             </div>

             {/* Card 5: The Misaligned Activity Trap */}
             <div
               style={{
                 backgroundColor: '#FFF5F5',
                 backgroundImage: 'url(/red.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
                 overflow: 'hidden',
               }}
             >
               <h3
                 style={{
                   fontFamily: 'DM Sans, sans-serif',
                   fontWeight: 700,
                   fontSize: 'clamp(18px, 1.53vw, 22px)',
                   color: '#D32F2F',
                   marginBottom: 'clamp(14px, 1.39vw, 20px)',
                   textAlign: 'center',
                 }}
               >
                 The Misaligned Activity Trap
               </h3>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 400,
                   fontSize: 'clamp(13px, 1.04vw, 15px)',
                   lineHeight: '160%',
                   color: '#333333',
                   marginBottom: 'clamp(12px, 1.11vw, 16px)',
                 }}
               >
                 Teams focus on clearing a queue (e.g., tickets, feature requests) quickly, regardless of whether that activity produces low-value outcomes, leading to significant wasted effort.
               </p>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 600,
                   fontSize: 'clamp(11px, 0.9vw, 13px)',
                   lineHeight: '160%',
                   color: '#68718B',
                 }}
               >
                 <strong style={{ color: '#D32F2F' }}>Risk:</strong> Cascading Failure: An undefined output at Team A becomes an integration error at Team B, which then results in a massive customer failure at Team C. The system amplifies low-level errors into high-level crises.
               </p>
             </div>

             {/* Card 6: The BVU Solution */}
             <div
               style={{
                 backgroundColor: '#EBF3FF',
                 backgroundImage: 'url(/blue.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
                 overflow: 'hidden',
               }}
             >
               <h3
                 style={{
                   fontFamily: 'DM Sans, sans-serif',
                   fontWeight: 700,
                   fontSize: 'clamp(18px, 1.53vw, 22px)',
                   color: '#1565C0',
                   marginBottom: 'clamp(14px, 1.39vw, 20px)',
                   textAlign: 'center',
                 }}
               >
                 The BVU Solution
               </h3>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 400,
                   fontSize: 'clamp(13px, 1.04vw, 15px)',
                   lineHeight: '160%',
                   color: '#333333',
                   marginBottom: 'clamp(12px, 1.11vw, 16px)',
                 }}
               >
                 <strong>Strategic Prioritization:</strong> By measuring the BVU generated by specific activities within a team's mandate, leadership can surgically shift resources away from high-volume, low-value work and focus effort on the activities that yield the greatest enterprise return.
               </p>
               <p
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 600,
                   fontSize: 'clamp(11px, 0.9vw, 13px)',
                   lineHeight: '160%',
                   color: '#68718B',
                 }}
               >
                 <strong style={{ color: '#1565C0' }}>Benefit:</strong> Guarantees Quality Chain: Breaks the cycle of compounding failure. Rejection forces resolution upstream, ensuring quality is maintained across the entire organizational flow.
               </p>
             </div>

           </div>
         </div>
       </BlueSectionWrapper>

        {/* Section 3: The BVU Model in Practice */}
       <section className="w-full py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            The BVU Model in Practice
          </h2>
           <p
             style={{
               fontFamily: 'Montserrat, sans-serif',
               fontWeight: 400,
               fontStyle: 'normal',
               fontSize: 'clamp(16px, 1.53vw, 22px)',
               lineHeight: '140%',
               letterSpacing: '0%',
               textAlign: 'center',
               color: '#333333',
               marginBottom: '24px',
             }}
           >
             The real power of the BVU model is in its practical application. It transforms
             abstract theories about value into concrete, data-driven decisions.
           </p>
          <a
            href="#"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(12px, 1.07vw, 15.4px)',
              color: '#14358A',
              textDecoration: 'none',
            }}
          >
            Too theoretical? Click to see the BVU model in action. &rsaquo;
          </a>
        </div>
      </section>

      {/* Section 4: Mechanics and Strategic Benefits */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Mechanics and Strategic Benefits
          </h2>
           <p
             style={{
               fontFamily: 'Montserrat, sans-serif',
               fontWeight: 400,
               fontStyle: 'normal',
               fontSize: 'clamp(16px, 1.53vw, 22px)',
               lineHeight: '140%',
               letterSpacing: '0%',
               textAlign: 'center',
               color: '#333333',
               maxWidth: 'min(680px, 95%)',
               margin: '0 auto 48px',
             }}
           >
             The BVU Model is both a measurement framework and a strategic tool for capital
             allocation and risk management.
           </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/calibration.png"
                  alt="BVU Calibration"
                  style={{
                    width: '32px',
                    height: '32px',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.18vw, 19px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                BVU Calibration
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Each team defines their output in terms of BVUs delivered per unit of capital invested. Legal might measure BVUs per contract reviewed; HR per successful hire; IT per infrastructure incident resolved. These outputs are normalized against a universal baseline.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/calibration.png"
                  alt="Integration with I-O Architecture"
                  style={{
                    width: '32px',
                    height: '32px',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.18vw, 19px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Integration with I-O Architecture
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                When combined with the I-O Architecture Model, each WorkUnit has a defined BVU output. This allows precise tracking: which teams are delivering value efficiently, and which are consuming disproportionate resources relative to their contribution.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/calibration.png"
                  alt="Strategic Benefit: Capital Allocation"
                  style={{
                    width: '32px',
                    height: '32px',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.18vw, 19px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Strategic Benefit: Capital Allocation
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Leadership can now make apples-to-apples comparisons. If Legal delivers 12 BVUs per $100k invested and IT delivers 8, capital can be reallocated accordingly—not arbitrarily, but based on verifiable performance data.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #C8D5F0',
                borderRadius: '12px',
                padding: '28px 24px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#14358A',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/calibration.png"
                  alt="Strategic Benefit: Risk Hedging"
                  style={{
                    width: '32px',
                    height: '32px',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.18vw, 19px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Strategic Benefit: Risk Hedging
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                The BVU model exposes inefficiency long before it becomes a crisis. If a team&apos;s BVU output per dollar starts declining, it signals process decay, staffing misalignment, or tool obsolescence—problems that can be corrected proactively, not reactively.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Section 5: Managing Performance Over Time */}
       <section className="w-full py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '105%',
              color: '#000000',
              marginBottom: '12px',
            }}
          >
            Beyond a Single Metric
          </p>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Managing Performance Over Time
          </h2>
           <p
             style={{
               fontFamily: 'Montserrat, sans-serif',
               fontWeight: 400,
               fontStyle: 'normal',
               fontSize: 'clamp(16px, 1.53vw, 22px)',
               lineHeight: '140%',
               letterSpacing: '0%',
               textAlign: 'center',
               color: '#333333',
               marginBottom: '36px',
             }}
           >
             The real power of the BVU is not in a one-time calculation. It is in creating a stable benchmark to track efficiency trends. Once calibrated, you can see if a team's Cost-Per-BVU is improving quarter-over-quarter, or if a new process generates more BVUs per personnel hour. It turns abstract goals into a continuous performance dashboard.
           </p>
          <a
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #6A36FF 0%, #8B5FFF 100%)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(12px, 1.07vw, 15.4px)',
              letterSpacing: '0.04em',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            See it in Action
          </a>
        </div>
      </section>

      {/* Section 6: Core Concepts of the BVU Model */}
      <section className="w-full py-20 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', letterSpacing: 'normal', color: '#14358A', textAlign: 'center', marginBottom: '48px' }}>
            Core Concepts of the BVU Model
          </h2>
          {(() => {
            const concepts = [
              { title: 'Value Abstraction', text: 'The foundational mathematical process of normalizing the diverse, tangible outputs of all teams (e.g., risk mitigated, tickets solved, dollars earned) into a single, unified, and quantifiable metric established as a consistent management convention.' },
              { title: 'Business Value Unit (BVU)', text: 'The fundamental, normalized metric that represents a single, abstracted unit of organizational value, used as a stable unit of account for internal comparison.' },
              { title: 'Cost-Per-BVU Baseline', text: "The initial financial calculation derived by dividing a team's total operational cost over a defined period by the total number of normalized BVUs produced. This metric establishes the baseline cost efficiency for comparative analysis across different functional areas." },
              { title: 'BVU-Per-Personnel Hour/Spend', text: "A key operational metric that quantifies performance by dividing total BVU output by the team's total operational spend or time. This granular calculation accounts for disparities in staff cost and utilization, precisely identifying where personnel investment yields the highest measurable return." },
              { title: 'Value Equivalence', text: 'The principle that, after the initial calibration process, one BVU generated by a commercial team (e.g., sales) is treated as equivalent in organizational importance to one BVU generated by a non-commercial team (e.g., legal or IT infrastructure).' },
              { title: 'Enterprise Value Stream', text: 'The complete organizational workflow seen through the lens of BVU generation, allowing leadership to map and analyze which functional areas and specific activities—rather than just which products—generate the highest return on enterprise value.' },
              { title: 'Activity Prioritization', text: "The strategic mechanism of using BVU analysis to identify high-volume, low-value work efforts within a team's mandate. This allows management to surgically shift resources away from inefficient processes to focus strictly on activities that deliver the greatest BVU return." },
            ];
            const helpCircleIcon = (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            );
            const conceptCard = (c: { title: string; text: string }, i: number) => (
              <div
                key={i}
                style={{ borderRadius: '12px', padding: '28px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FFFFFF', border: '1.5px solid #C8D5F0' }}
              >
                {helpCircleIcon}
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: '#14358A', marginBottom: '8px' }}>{c.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(10px, 0.87vw, 14px)', lineHeight: '1.7', color: '#5F6D7E', margin: 0 }}>{c.text}</p>
              </div>
            );
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Row 1: 2 items */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {concepts.slice(0, 2).map((c, i) => conceptCard(c, i))}
                </div>
                {/* Row 2: 3 items */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {concepts.slice(2, 5).map((c, i) => conceptCard(c, i + 2))}
                </div>
                {/* Row 3: 2 items */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {concepts.slice(5, 7).map((c, i) => conceptCard(c, i + 5))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

       {/* Section 7: Final CTA */}
       <section className="w-full py-24 px-6 bg-white" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              marginBottom: '20px',
            }}
          >
            Stop Guessing. Start Allocating with Precision.
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(12px, 1.07vw, 15.4px)',
              lineHeight: '1.8',
              color: '#333333',
              marginBottom: '36px',
            }}
          >
            Eliminate gut-driven capital allocation. Let our team help you implement the BVU Model and bring quantitative, auditable clarity to your most critical investment and resource decisions.
          </p>
           <a
             href="/contact-us"
             style={{
               display: 'inline-block',
               background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
               color: '#FFFFFF',
               fontFamily: 'Montserrat, sans-serif',
               fontWeight: 700,
               fontSize: 'clamp(12px, 1.07vw, 15.4px)',
               letterSpacing: '0.04em',
               padding: '14px 32px',
               borderRadius: '8px',
               textDecoration: 'none',
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
