'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import {
  Plus,
  Equal,
  Brain,
  Zap,
  Combine,
  CircleHelp,
  MoveRight,
} from 'lucide-react';
import Link from 'next/link';

const rotatingItems = [
  'Workflow Automation from Technology',
  'Storytelling from Entertainment',
  'Digital Transformation from Banking Modernization',
  'Brand Loyalty from Auction & Collectors Markets',
  'Security Protocol Design from High-Frequency Trading',
  'CX Insights from Hospitality',
  'Supply Chain from Manufacturing',
  'Community Building from Social Media',
  'Sustainability from Energy Infrastructure',
  'Crisis Communication from Public Utilities',
  'Training Systems from Defence Forces',
  'Real-Time Diagnostics from Formula 1 Racing',
  'Risk Management from Finance',
  'Ethical Data Use from Academic Research',
  'Quality Assurance from Healthcare',
  'Auditing and Verification from Precious Metals Trade',
  'Customer Lifecycle Management from D2C Services',
  'Pricing Elasticity from Airlines',
  'Resource Allocation from Disaster Relief',
  'Service Consistency from QSR',
  'Premium Experience from Luxury Retail',
];

const engagementPaths = [
  {
    icon: Brain,
    heading: 'Strategic Blueprint Workshop',
    description:
      'A focused 2-4 week engagement where we identify your MIPs, map divergent sectors, and deliver a high-level strategic blueprint outlining a potential convergence-based solution.',
  },
  {
    icon: Zap,
    heading: 'Pilot Program Implementation',
    description:
      'A 3-6 month pilot program to test and validate a cross-sector solution on a smaller, controlled scale. We measure impact and build a business case before a full rollout.',
  },
  {
    icon: Combine,
    heading: 'Full Transformation Engagement',
    description:
      'A comprehensive partnership where we lead the end-to-end design, implementation, and optimization of a Sector Convergence strategy to solve a core business challenge.',
  },
];

const coreConcepts = [
  {
    term: 'Alignment Metrics',
    definition: 'Targeted indicators used to measure how well implementation aligns with strategic goals.',
  },
  {
    term: 'Cut-off Moment',
    definition:
      'A fixed point when outdated systems are retired and new practices go live, enforcing clarity, speed, and alignment.',
  },
  {
    term: 'Institutional Inertia',
    definition:
      'The internal resistance to change that stalls innovation and transformation. It is often rooted in habit, not strategy.',
  },
  {
    term: 'Iterative Analysis',
    definition:
      'A methodical process of examining, reviewing, and refining solutions through multiple cycles based on insights from previous iterations.',
  },
  {
    term: 'Key Deliverables',
    definition: 'Concrete, measurable results crucial for a project or organization\'s success.',
  },
  {
    term: 'Most Important Problems (MIPs)',
    definition:
      'A pivotal challenge identified as the primary obstacle to attaining a key deliverable.',
  },
  {
    term: 'Why-why analysis',
    definition:
      'A root-cause method that continuously looks deeper into a topic through layers of symptoms to reveal the fundamental cause of a specific issue.',
  },
];

const sixSteps = [
  {
    number: '1',
    heading: 'Isolate Strategic Outcome',
    description: 'Articulate one clear, measurable strategic outcome. This is your North Star.',
  },
  {
    number: '2',
    heading: 'Determine Most Important Problems (MIPs)',
    description: 'Pinpoint the critical barriers preventing your objective using root-cause analysis.',
  },
  {
    number: '3',
    heading: 'Map Divergent Sectors',
    description: 'Identify sectors with contrasting strategic DNA to draw novel insights from.',
  },
  {
    number: '4',
    heading: 'Source Cross-Sector Solutions',
    description: 'Leverage your defined MIP to ask precise, actionable questions of sector experts.',
  },
  {
    number: '5',
    heading: 'Integration & Execution',
    description: 'Execute a decisive transition, replacing legacy systems with the new, integrated solution.',
  },
  {
    number: '6',
    heading: 'Validation & Continuous Iteration',
    description: 'Continuously monitor outcomes, using real-time data to refine and optimize.',
  },
];

export default function SectorConvergenceModel() {
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Section 1: Hero */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(100px, 9.86vw, 142px)',
            paddingBottom: 'clamp(80px, 8vw, 120px)',
            backgroundColor: '#F9FAFB',
          }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h1 className="sr-only">The Sector Convergence Model</h1>

            <p
              className="font-dm-sans font-bold text-[#14358A] uppercase tracking-wide mb-4"
              style={{
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                letterSpacing: '0.77px',
              }}
            >
              Why Constantly Reinvent the Wheel?
            </p>

            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                lineHeight: '105%',
              }}
            >
              Build Smarter, not Harder
            </h2>

            <p
              className="font-dm-sans font-normal text-[#68718B]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Business as usual guarantees obsolescence. The Sector Convergence Model is a strategic operating system designed to transform complex challenges into competitive breakthroughs, faster and more consistently than ever.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Section 2: Your Unfair Advantage */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <div className="text-center mb-12">
              <p
                className="font-dm-sans font-bold text-[#14358A] uppercase tracking-wide mb-4"
                style={{
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  letterSpacing: '0.77px',
                }}
              >
                The Strategic Imperative
              </p>
              <h2
                className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
                style={{
                  fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                  lineHeight: '105%',
                }}
              >
                Your Unfair Advantage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <FadeInSection direction="left">
                <div>
                  <h3
                    className="font-dm-sans font-bold tracking-[-0.03em] mb-4"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                      lineHeight: '105%',
                      color: '#DC2626',
                    }}
                  >
                    The Old Playbook
                  </h3>
                  <p
                    className="font-dm-sans font-normal text-[#68718B]"
                    style={{
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '1.6',
                    }}
                  >
                    Traditional consulting offers linear, industry-siloed "best practices" that lead to incremental gains at best and expensive, failed implementations at worst. It is a model built for a world that no longer exists.
                  </p>
                </div>
              </FadeInSection>

              {/* Right Column */}
              <FadeInSection direction="right">
                <div>
                  <h3
                    className="font-dm-sans font-bold tracking-[-0.03em] mb-4 text-[#14358A]"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                      lineHeight: '105%',
                    }}
                  >
                    The PMG Model
                  </h3>
                  <p
                    className="font-dm-sans font-normal text-[#68718B]"
                    style={{
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '1.6',
                    }}
                  >
                    Sector Convergence is a strategic reset. We architect non-obvious solutions by synthesizing proven operational models from entirely different sectors, creating a durable, first-mover advantage that competitors cannot easily replicate.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 3: Six-Step Strategic Framework */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
            backgroundColor: '#F9FAFB',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              The Six-Step Strategic Framework
            </h2>

            <p
              className="font-dm-sans font-normal text-[#68718B] mb-12"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
                maxWidth: '800px',
              }}
            >
              An application-first framework built for rapid impact and sustained optimization. Strategic velocity matters more than initial precision.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {sixSteps.map((step, idx) => (
                <FadeInSection key={idx} delay={idx * 0.05}>
                  <div className="relative pl-24">
                    {/* Circular Badge */}
                    <div
                      className="absolute left-0 top-0 rounded-full bg-[#14358A] text-white flex items-center justify-center font-dm-sans font-bold"
                      style={{
                        width: '64px',
                        height: '64px',
                        fontSize: 'clamp(24px, 2.5vw, 32px)',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3
                      className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                      style={{
                        fontSize: 'clamp(18px, 1.9vw, 24px)',
                        lineHeight: '120%',
                      }}
                    >
                      {step.heading}
                    </h3>
                    <p
                      className="font-dm-sans font-normal text-[#68718B]"
                      style={{
                        fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                        lineHeight: '140%',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 4: How We Select Sectors */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1000px, 92%)' }}>
            <p
              className="font-dm-sans font-bold text-[#14358A] uppercase tracking-wide mb-4"
              style={{
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                letterSpacing: '0.77px',
              }}
            >
              The Logic of Operational DNA
            </p>

            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              How We Select Sectors
            </h2>

            <p
              className="font-dm-sans font-normal text-[#333333] mb-8"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Sector Convergence is not about random creativity. It is a systematic search for proven operational DNA. We do not look for "similar companies." We look for sectors where your core challenge is their central competency.
            </p>

            <h3
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(18px, 1.9vw, 24px)',
                lineHeight: '120%',
              }}
            >
              The Process:
            </h3>

            <ol
              className="space-y-6 mb-12"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              <li className="font-dm-sans text-[#333333]">
                <strong className="text-[#14358A]">Abstract the Challenge:</strong> We reframe your industry-specific problem (e.g., "low software renewal rates") into a universal operational one (e.g., "maintaining engagement with a non-contract service").
              </li>
              <li className="font-dm-sans text-[#333333]">
                <strong className="text-[#14358A]">Identify Archetype Sectors:</strong> We ask: "Which industries are world-class at this universal challenge as a matter of survival?" For engagement, it might be luxury hospitality or subscription retail.
              </li>
              <li className="font-dm-sans text-[#333333]">
                <strong className="text-[#14358A]">Extract Principles, Not Playbooks:</strong> We engage a subject-matter expert from that sector not to run your business, but for a focused interview. Our PMG operators, fluent in the language of process and strategy, translate the underlying principle (e.g., a hotel's "anticipatory service") into an adaptable insight for your context.
              </li>
            </ol>

            <h3
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(18px, 1.9vw, 24px)',
                lineHeight: '120%',
              }}
            >
              Example:
            </h3>

            <div
              className="border-l-4 pl-6"
              style={{ borderColor: '#14358A' }}
            >
              <p
                className="font-dm-sans font-normal text-[#333333]"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '1.6',
                }}
              >
                For a FinTech firm needing trust, we did not look at other banks. We looked at industries built on fragile trust: psychotherapy (confidentiality, safe space) and precious metals trading (verification, audits). We adapted their principles of secure communication and transparent verification to rebuild user confidence.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 5: From Theory to ROI */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
            backgroundColor: '#F9FAFB',
          }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              From Theory to ROI
            </h2>

            <p
              className="font-dm-sans font-normal text-[#68718B] mb-4"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              This model emerged from high-stakes engagements where traditional, linear consulting methods proved fundamentally inadequate to solve multi-faceted challenges. Such challenges include simultaneously unifying customer experience, reducing operational overhead, and enhancing quality across complex, disparate business lines.
            </p>

            <p
              className="font-dm-sans font-normal text-[#68718B] mb-8"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              The Sector Convergence Model was created by reframing the challenge to ignore industry boundaries. Instead, we abstracted and synthesized proven operational excellence models: successful customer experience systems from regulated industries, advanced automation strategies from high-volume telecom, and robust training systems from specialized professional services.
            </p>

            <Link
              href="/insights-innovations"
              className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90"
              style={{
                backgroundColor: '#14358A',
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                padding: '12px 28px',
              }}
            >
              Read the Full White Paper
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Section 6: Real-World Impact */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div className="text-center mx-auto mb-12" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              Real-World Impact
            </h2>

            <p
              className="font-dm-sans font-normal text-[#333333]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              With our support, organizations across diverse sectors have leveraged Sector Convergence to restructure operations, rescue customer relationships, and reframe past failures as opportunities for innovation.
            </p>
          </div>

          {/* Equation Display */}
          <FadeInSection direction="up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
              {/* Left: Struggling Businesses */}
              <div className="text-center" style={{ width: '240px' }}>
                <h3
                  className="font-dm-sans font-bold text-[#DC2626]"
                  style={{
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    lineHeight: '120%',
                  }}
                >
                  Struggling Businesses
                </h3>
              </div>

              {/* Plus */}
              <Plus size={40} color="#68718B" strokeWidth={1.5} className="hidden md:block" />

              {/* Middle: Rotating Items + PMG */}
              <div className="text-center" style={{ width: '380px', minHeight: '100px' }}>
                <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p
                    className="font-dm-sans font-normal text-[#68718B]"
                    style={{
                      fontSize: 'clamp(13px, 1.11vw, 16px)',
                      lineHeight: '140%',
                      opacity: 0.7,
                      minHeight: '40px',
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  >
                    {rotatingItems[rotatingIndex]}
                  </p>
                </div>
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{
                    fontSize: 'clamp(16px, 1.6vw, 22px)',
                    lineHeight: '120%',
                  }}
                >
                  +
                </h3>
                <h3
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{
                    fontSize: 'clamp(16px, 1.6vw, 22px)',
                    lineHeight: '120%',
                  }}
                >
                  PMG Consulting Expertise
                </h3>
              </div>

              {/* Equal */}
              <Equal size={40} color="#68718B" strokeWidth={1.5} className="hidden md:block" />

              {/* Right: Industry-Defining */}
              <div className="text-center" style={{ width: '240px' }}>
                <h3
                  className="font-dm-sans font-bold text-[#16A34A]"
                  style={{
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    lineHeight: '120%',
                  }}
                >
                  An industry-defining business.
                </h3>
              </div>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Section 7: From Blueprint to Reality */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
            backgroundColor: '#F9FAFB',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              From Blueprint to Reality
            </h2>

            <p
              className="font-dm-sans font-normal text-[#333333] mb-12"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
                maxWidth: '800px',
              }}
            >
              Our Sector Convergence model is not just a theoretical exercise. We offer structured engagement paths to translate cross-industry insights into tangible business outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementPaths.map((path, idx) => {
                const Icon = path.icon;
                return (
                  <FadeInSection key={idx} delay={idx * 0.05}>
                    <div
                      className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                    >
                      <Icon size={40} color="#14358A" strokeWidth={1.5} className="mb-4" />
                      <h3
                        className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                        style={{
                          fontSize: 'clamp(16px, 1.6vw, 22px)',
                          lineHeight: '120%',
                        }}
                      >
                        {path.heading}
                      </h3>
                      <p
                        className="font-dm-sans font-normal text-[#68718B]"
                        style={{
                          fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                          lineHeight: '140%',
                        }}
                      >
                        {path.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 8: Core Concepts */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-12"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              Core Concepts of Sector Convergence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreConcepts.map((concept, idx) => (
                <FadeInSection key={idx} delay={idx * 0.05}>
                  <div
                    className="rounded-lg p-6 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 text-center"
                    style={{
                      border: '1px solid #E5E7EB',
                    }}
                  >
                    <CircleHelp size={24} color="#14358A" strokeWidth={1.5} className="mx-auto mb-4" />
                    <h3
                      className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                      style={{
                        fontSize: 'clamp(16px, 1.6vw, 22px)',
                        lineHeight: '120%',
                      }}
                    >
                      {concept.term}
                    </h3>
                    <p
                      className="font-dm-sans font-normal text-[#68718B]"
                      style={{
                        fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                        lineHeight: '140%',
                      }}
                    >
                      {concept.definition}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 9: CTA */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(80px, 8vw, 120px)',
            paddingBottom: 'clamp(80px, 8vw, 120px)',
            background: 'linear-gradient(135deg, #1B45B4 0%, #0D1A7A 100%)',
          }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-white mb-6"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                lineHeight: '105%',
              }}
            >
              Shape the Next Market Standard
            </h2>

            <p
              className="font-dm-sans font-normal text-white mb-8"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
                opacity: 0.9,
              }}
            >
              In a world without pre-written playbooks, Sector Convergence equips leaders not just to survive disruption, but to weaponize it. Transform constraint into capability, and crisis into acceleration.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                padding: '12px 28px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              Request a Consultation <MoveRight size={20} />
            </Link>
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
