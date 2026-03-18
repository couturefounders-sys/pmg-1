import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BusinessValueUnitModelPage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* Section 1: Hero */}
      <section className="w-full pt-24 lg:pt-36 pb-14 lg:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(12px, 1.11vw, 16px)',
              letterSpacing: '0.04em',
              color: '#14358A',
              marginBottom: 'clamp(12px, 1.11vw, 16px)',
            }}
          >
            The Business Value Unit (BVU) Model
          </p>
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 3.33vw, 48px)',
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
               fontSize: 'clamp(16px, 2.08vw, 30px)',
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
       <section 
         className="w-full py-14 lg:py-20 px-4 sm:px-6 relative overflow-hidden" 
         style={{ 
           background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)',
         }}
       >
         {/* Background diagonal pattern image */}
         <div 
           style={{
             position: 'absolute',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundImage: 'url(/dig desi.png)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             opacity: 0.3,
             pointerEvents: 'none',
           }}
         />

         <div className="max-w-[1200px] mx-auto relative z-10">
           <h2
             style={{
               fontFamily: 'DM Sans, sans-serif',
               fontWeight: 700,
               fontSize: 'clamp(28px, 3.33vw, 48px)',
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
                 backgroundImage: 'url(/red.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
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
                 backgroundImage: 'url(/blue.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
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
                 backgroundImage: 'url(/red.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
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
                 backgroundImage: 'url(/blue.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
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
                 backgroundImage: 'url(/red.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
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
                 backgroundImage: 'url(/blue.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 'clamp(12px, 1.11vw, 16px)',
                 padding: 'clamp(20px, 2.22vw, 32px) clamp(18px, 1.94vw, 28px)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                 position: 'relative',
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
       </section>

        {/* Section 3: The BVU Model in Practice */}
       <section className="w-full py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[min(1100px,_90%)] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
               fontSize: 'clamp(18px, 2.08vw, 34px)',
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
              fontSize: 'clamp(12px, 1.04vw, 17px)',
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
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
               fontSize: 'clamp(18px, 2.08vw, 34px)',
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
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(11px, 0.97vw, 16px)',
              letterSpacing: '0.06em',
              color: '#14358A',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Beyond a Single Metric
          </p>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
               fontSize: 'clamp(18px, 2.08vw, 34px)',
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
              fontSize: 'clamp(11px, 0.97vw, 16px)',
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

      {/* Section 6: How We Help */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-[min(1100px,_90%)] mx-auto">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            How We Help
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/Value Abstraction.png"
                  alt="Value Abstraction"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Value Abstraction
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                We work with your leadership to identify the most critical, universal deliverable across all teams—the thing your organization ultimately produces (e.g., &ldquo;a client engagement,&rdquo; &ldquo;a product feature,&rdquo; &ldquo;a regulatory approval&rdquo;). This becomes the anchor for all BVU measurements.
              </p>
            </div>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/funds.png"
                  alt="Business Value Unit (BVU)"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Business Value Unit (BVU)
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                A single, universal abstraction of value that represents one standardized unit of organizational output. Every internal team&apos;s work is translated into BVUs, making all contributions measurable and comparable.
              </p>
            </div>
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/phone.png"
                  alt="Facility & Resource Management"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Facility & Resource Management
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Teams that maintain physical or digital infrastructure (e.g., IT, Facilities) are measured by the BVU-enabling capacity they provide, such as system uptime, infrastructure reliability, or workspace availability.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/phone.png"
                  alt="Facility & Resource Management"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Facility & Resource Management
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Teams that maintain physical or digital infrastructure (e.g., IT, Facilities) are measured by the BVU-enabling capacity they provide, such as system uptime, infrastructure reliability, or workspace availability.
              </p>
            </div>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/retro-bag.png"
                  alt="BVU-Per-Personnel Hour"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                BVU-Per-Personnel Hour
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                How many BVUs does a team produce per hour of staff time? This metric reveals team efficiency and guides hiring, automation, and process optimization decisions.
              </p>
            </div>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/efferent-three.png"
                  alt="Value Equivalence"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Value Equivalence
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Each team&apos;s output is translated into a fractional or multiplied BVU contribution. For example, Legal might produce 0.2 BVUs per contract (contracts enable 20% of a final deal), while IT produces 1.5 BVUs per system deployment (infrastructure supports multiple deals simultaneously).
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: 'min(730px, 95%)', margin: '0 auto' }}>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/Value Abstraction.png"
                  alt="Cost-Per-BVU Baseline"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                Cost-Per-BVU Baseline
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                We calculate the baseline cost to produce one BVU, including labor, tools, overhead, and operational expenses. This becomes the benchmark for efficiency tracking.
              </p>
            </div>
            <div
              style={{
                border: '3px solid #14358A',
                borderRadius: '12px',
                padding: '24px 20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
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
                  src="/funds.png"
                  alt="BVU-Per-Personnel Hour/Spend"
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
                  fontSize: 'clamp(13px, 1.11vw, 18px)',
                  color: '#14358A',
                  lineHeight: '1.3',
                }}
              >
                BVU-Per-Personnel Hour/Spend
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  lineHeight: '1.75',
                  color: '#5F6D7E',
                }}
              >
                Leadership can now ask: &ldquo;How many BVUs are we getting per $100k spent on IT vs. Legal vs. Sales?&rdquo; This allows direct comparison and strategic reallocation of capital.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Section 7: Final CTA */}
       <section className="w-full py-24 px-6 bg-white" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.33vw, 56px)',
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
              fontSize: 'clamp(12px, 1.04vw, 17px)',
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
               fontSize: 'clamp(11px, 0.97vw, 16px)',
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
