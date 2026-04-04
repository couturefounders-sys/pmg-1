'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import * as Tabs from '@radix-ui/react-tabs';
import {
  ChevronRight,
  Zap,
  Users,
  Heart,
  Combine,
  ArrowRightLeft,
  Component,
  Shield,
  ExternalLink,
  ChevronLeft,
  ChevronRightIcon,
} from 'lucide-react';
import Link from 'next/link';

const rotatingPhrases = [
  'Create internal comms systems for a hybrid global workforce.',
  'Guide a CEO through a reputational crisis in real time.',
  'Help a founder prepare their company for IPO readiness.',
  'Build a market-entry strategy for LATAM expansion.',
  'Craft GTM playbooks for a hyper-growth SaaS startup.',
];

const testimonials = [
  {
    quote:
      'Working at PMG has ignited my drive to continuously learn and expand my perspective. I never anticipated a career in consulting would take me beyond finance to master data analytics and leverage complex datasets!',
    name: 'Ilma S.',
    title: 'Financial Analyst',
  },
  {
    quote:
      'PMG is definitely not for everyone. If you possess strong discipline, a low ego, and an insatiable hunger for continuous learning and impactful success, this is where you\'ll truly thrive.',
    name: 'Milos R.',
    title: 'Consultant, M&A, Strategy & Operations',
  },
  {
    quote:
      'My role here consistently pushes me to expand my knowledge and capabilities. The chance to collaborate with other top minds from around the world is incredibly enriching.',
    name: 'Tushar G.',
    title: 'Associate Consultant',
  },
  {
    quote:
      'If you believe you operate at the highest level, PMG is the place to objectively prove your capabilities and make a significant impact.',
    name: 'Ignatio C.',
    title: 'Associate Consultant',
  },
  {
    quote:
      'The work is as intellectually stimulating and exciting as it gets. You are constantly challenged to learn, improve, and enhance your skills as a professional.',
    name: 'Sebastián S.',
    title: 'Consultant, People & Organizations',
  },
  {
    quote:
      'This is truly one of the greatest professional opportunities I\'ve had. My previous roles didn\'t fully value my skills or capacity, but I feel fortunate to be part of a company that truly recognizes and empowers top talent.',
    name: 'Ahava E.',
    title: 'Client Relationship Manager',
  },
  {
    quote:
      'The remote-first philosophy allows me to balance my work and personal life effectively. The flexibility is unmatched. As long as I deliver results, the time I choose to work doesn\'t matter.',
    name: 'Victoria P.',
    title: 'Consultant, Operations & Strategy',
  },
  {
    quote:
      'The opportunities for growth and advancement are incredible. I\'ve learned so much and advanced quickly in my career since joining.',
    name: 'Hong N.',
    title: 'Consultant, Customer Experience',
  },
];

const workEnvironmentItems = [
  {
    icon: Zap,
    heading: 'Remote-First',
    description: 'We trust our team to manage their work effectively from anywhere in the world.',
  },
  {
    icon: Users,
    heading: 'Asynchronous by Design',
    description: 'You have the autonomy to manage your own time, integrating work seamlessly with your life.',
  },
  {
    icon: Heart,
    heading: 'Flexibility & Work-Life Balance',
    description: 'We support you in building your own schedule in collaboration with clients and the team.',
  },
];

const recruitingPhilosophy = [
  {
    number: '01',
    heading: 'No Blind Spots',
    description:
      'We actively seek talent in overlooked places, using global postings and bias-elimination safeguards.',
  },
  {
    number: '02',
    heading: 'Objective & Unbiased Evaluation',
    description:
      'Our hiring is grounded in objective factors, with multiple reviewers scoring each stage independently.',
  },
  {
    number: '03',
    heading: 'Functional Mastery & Cross-Industry Innovation',
    description:
      'We leverage our Sector Convergence model, applying breakthrough insights from diverse industries to client challenges.',
  },
  {
    number: '04',
    heading: 'Career Growth & Impact',
    description: 'Your work will have a meaningful, tangible impact on businesses and communities we serve.',
  },
  {
    number: '05',
    heading: 'Distributed & Decentralized Excellence',
    description:
      'We value diverse perspectives and leverage our asynchronous, global structure to ensure the most qualified experts solve each component of a problem.',
  },
];

const proprietaryModels = [
  {
    icon: Combine,
    heading: 'Sector Convergence Model',
    description:
      'Our framework for applying breakthrough cross-industry innovation to create non-linear, future-proof advantages.',
    linkText: 'Learn about Sector Convergence',
    linkHref: '/sector-convergence-model',
  },
  {
    icon: ArrowRightLeft,
    heading: 'Input-Output Architecture',
    description:
      'Our proprietary model for deconstructing complex systems into verifiable units of work to guarantee quality and predictability.',
    linkText: 'Learn about I-O Architecture',
    linkHref: '/io-architecture-model',
  },
  {
    icon: Component,
    heading: 'Business Value-Unit Model',
    description:
      'A financial framework for quantifying the ROI of non-commercial teams, transforming cost centers into auditable value producers.',
    linkText: 'Learn about BVUs',
    linkHref: '/business-value-unit-model',
  },
];

const hiringSteps = [
  {
    number: '1',
    heading: 'Application Submission',
    description: 'Submit your resume through our job ads. No cover letter needed at this stage.',
  },
  {
    number: '2',
    heading: 'Additional Information Request',
    description: 'If selected, you\'ll be asked for more details, including a tailored cover letter.',
  },
  {
    number: '3',
    heading: 'First Interview',
    description: 'A discussion with a hiring manager or senior consultant to dive into your experience.',
  },
  {
    number: '4',
    heading: 'Executive Interview',
    description: 'A final conversation with our executive team to ensure cultural and strategic alignment.',
  },
];

export default function Careers() {
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Section 1: Hero */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h1
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                lineHeight: '105%',
              }}
            >
              Help us Transform Businesses Globally
            </h1>

            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-8"
              style={{
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                lineHeight: '105%',
              }}
            >
              Careers for the Top 1% of Global Talent
            </h2>

            {/* Rotating Text */}
            <div
              className="relative h-14 mb-8 flex items-center justify-center"
              style={{ overflow: 'hidden' }}
            >
              {rotatingPhrases.map((phrase, idx) => (
                <p
                  key={idx}
                  className="font-dm-sans font-normal text-[#68718B] absolute"
                  style={{
                    fontSize: 'clamp(16px, 1.8vw, 24px)',
                    lineHeight: '140%',
                    opacity: idx === rotatingIndex ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                  }}
                >
                  {phrase}
                </p>
              ))}
            </div>

            <p
              className="font-dm-sans font-normal text-[#333333]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              At PMG, you'll find high-impact, remote opportunities reserved for the most talented professionals globally. Skip the commute, save money, and do your life's best work from anywhere. Here, your merit and impact, not your location or timezone, set your earning potential and career trajectory.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Section 2: About + Testimonials */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(60px, 6vw, 100px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* About Text */}
              <div>
                <h2
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 32px)',
                    lineHeight: '105%',
                  }}
                >
                  Welcome to PMG Consulting
                </h2>
                <p
                  className="font-dm-sans font-normal text-[#333333] mb-6"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '1.6',
                  }}
                >
                  Our mission is to simplify and optimize business operations for our clients. As a leading strategy consulting firm, we specialize in six key areas: Operations & Strategy, People & Organizations, Customer Experience, Mergers & Acquisitions, Marketing & Branding, and BPO & Fractional Talent. We are industry-agnostic, bringing functional expertise and cross-industry innovation to create impactful solutions.
                </p>

                <h3
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                  style={{
                    fontSize: 'clamp(18px, 1.9vw, 28px)',
                    lineHeight: '105%',
                    marginTop: 'clamp(24px, 3vw, 48px)',
                  }}
                >
                  Our Vision and Culture
                </h3>
                <p
                  className="font-dm-sans font-normal text-[#333333] mb-6"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '1.6',
                  }}
                >
                  Founded with the vision of transforming businesses, PMG comprises a diverse team of experts united by a commitment to excellence. We foster a collaborative and inclusive environment where ideas are shared, challenges are embraced, and success is celebrated. We value integrity, continuous learning, and making a tangible impact.
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-dm-sans font-medium text-[#14358A] transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  }}
                >
                  Read more on our About Us page <ChevronRight size={20} />
                </Link>
              </div>

              {/* Testimonials Carousel */}
              <div
                className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8 flex flex-col"
                style={{ minHeight: '500px' }}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <p
                    className="font-dm-sans font-normal text-[#333333] mb-6"
                    style={{
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '1.6',
                      minHeight: '120px',
                    }}
                  >
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                  <div>
                    <p
                      className="font-dm-sans font-bold text-[#14358A]"
                      style={{
                        fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                        lineHeight: '120%',
                      }}
                    >
                      {testimonials[testimonialIndex].name}
                    </p>
                    <p
                      className="font-dm-sans font-normal text-[#68718B]"
                      style={{
                        fontSize: 'clamp(13px, 1.11vw, 16px)',
                        lineHeight: '140%',
                      }}
                    >
                      {testimonials[testimonialIndex].title}
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={() =>
                      setTestimonialIndex((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} color="#14358A" />
                  </button>
                  <span
                    className="font-dm-sans font-normal text-[#68718B]"
                    style={{ fontSize: 'clamp(13px, 1.11vw, 15px)' }}
                  >
                    {testimonialIndex + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={() =>
                      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
                    }
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRightIcon size={20} color="#14358A" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 3: Tabs */}
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
            <Tabs.Root defaultValue="environment" className="w-full">
              {/* Tab List */}
              <Tabs.List
                className="flex gap-8 border-b-2 mb-12"
                style={{ borderColor: '#E5E7EB' }}
              >
                <Tabs.Trigger
                  value="environment"
                  className="font-dm-sans font-bold tracking-[-0.03em] pb-4 transition-colors relative"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#68718B',
                  }}
                >
                  Our Work Environment
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: '#14358A',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                    }}
                    className="tab-underline"
                  />
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="philosophy"
                  className="font-dm-sans font-bold tracking-[-0.03em] pb-4 transition-colors relative"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#68718B',
                  }}
                >
                  Our Recruiting Philosophy
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: '#14358A',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                    }}
                    className="tab-underline"
                  />
                </Tabs.Trigger>
              </Tabs.List>

              {/* Work Environment Tab */}
              <Tabs.Content value="environment" className="w-full">
                <h2
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 32px)',
                    lineHeight: '105%',
                  }}
                >
                  Empowerment and Trust
                </h2>
                <p
                  className="font-dm-sans font-normal text-[#333333] mb-12"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '1.6',
                    maxWidth: '800px',
                  }}
                >
                  We believe the best work happens when talented individuals are empowered and trusted. Our environment is built for high performers who value autonomy and results.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {workEnvironmentItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <FadeInSection key={idx} delay={idx * 0.05}>
                        <div
                          className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-6"
                          style={{ minHeight: '240px' }}
                        >
                          <Icon size={32} color="#14358A" strokeWidth={1.5} className="mb-4" />
                          <h3
                            className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                            style={{
                              fontSize: 'clamp(18px, 1.9vw, 24px)',
                              lineHeight: '120%',
                            }}
                          >
                            {item.heading}
                          </h3>
                          <p
                            className="font-dm-sans font-normal text-[#68718B]"
                            style={{
                              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                              lineHeight: '140%',
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </FadeInSection>
                    );
                  })}
                </div>
              </Tabs.Content>

              {/* Recruiting Philosophy Tab */}
              <Tabs.Content value="philosophy" className="w-full">
                <h2
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 32px)',
                    lineHeight: '105%',
                  }}
                >
                  Fairness, Objectivity, and Potential
                </h2>
                <p
                  className="font-dm-sans font-normal text-[#333333] mb-12"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '1.6',
                    maxWidth: '800px',
                  }}
                >
                  We are dedicated to finding and empowering the world's most talented consultants and executives through a hiring process designed to identify true potential.
                </p>

                <div className="space-y-8">
                  {recruitingPhilosophy.map((item, idx) => (
                    <FadeInSection key={idx} delay={idx * 0.05}>
                      <div className="flex gap-6">
                        <div
                          className="font-dm-sans font-bold text-[#14358A]"
                          style={{
                            fontSize: 'clamp(48px, 6vw, 72px)',
                            lineHeight: '100%',
                            color: '#14358A',
                            opacity: 0.15,
                            minWidth: '80px',
                          }}
                        >
                          {item.number}
                        </div>
                        <div>
                          <h3
                            className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                            style={{
                              fontSize: 'clamp(18px, 1.9vw, 24px)',
                              lineHeight: '120%',
                            }}
                          >
                            {item.heading}
                          </h3>
                          <p
                            className="font-dm-sans font-normal text-[#68718B]"
                            style={{
                              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                              lineHeight: '140%',
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </FadeInSection>

      {/* Section 4: Proprietary Models */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(60px, 6vw, 100px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <div className="text-center mb-12">
              <p
                className="font-dm-sans font-bold text-[#68718B] uppercase tracking-wide mb-4"
                style={{
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  letterSpacing: '0.77px',
                }}
              >
                Understand Our DNA
              </p>
              <h2
                className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
                style={{
                  fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                  lineHeight: '105%',
                }}
              >
                Our Proprietary Models
              </h2>
              <p
                className="font-dm-sans font-normal text-[#333333]"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '1.6',
                  maxWidth: '900px',
                  margin: '0 auto',
                }}
              >
                PMG is more than a consultancy; we are a high-performance engine for business transformation. We don't just advise from the sidelines—we embed ourselves to design, build, and execute solutions directly. We hire the exceptional not to maintain the status quo, but to disrupt it. In our culture, 'excellence' is a moving target. We will challenge your best work and push you to surpass your own benchmarks, ensuring that as our clients grow, you evolve with them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proprietaryModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <FadeInSection key={idx} delay={idx * 0.05}>
                    <div
                      className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8 flex flex-col"
                      style={{ minHeight: '360px' }}
                    >
                      <div className="text-center mb-6">
                        <Icon size={40} color="#14358A" strokeWidth={1.5} className="mx-auto mb-4" />
                      </div>
                      <h3
                        className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4 text-center"
                        style={{
                          fontSize: 'clamp(18px, 1.9vw, 24px)',
                          lineHeight: '120%',
                        }}
                      >
                        {model.heading}
                      </h3>
                      <p
                        className="font-dm-sans font-normal text-[#68718B] mb-6 flex-1"
                        style={{
                          fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                          lineHeight: '140%',
                        }}
                      >
                        {model.description}
                      </p>
                      <Link
                        href={model.linkHref}
                        className="inline-flex items-center gap-2 font-dm-sans font-medium text-[#14358A] transition-opacity hover:opacity-80"
                        style={{
                          fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                        }}
                      >
                        {model.linkText} <ChevronRight size={20} />
                      </Link>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 5: Hiring Process */}
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
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              Our Hiring Process
            </h2>
            <p
              className="font-dm-sans font-normal text-[#333333] mb-12"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
                maxWidth: '900px',
              }}
            >
              We've designed our hiring process to be clear, efficient, and focused on identifying the best fit for both you and PMG, while respecting your time.
            </p>

            <div className="space-y-8 mb-12">
              {hiringSteps.map((step, idx) => (
                <FadeInSection key={idx} delay={idx * 0.05}>
                  <div className="flex gap-8">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-dm-sans font-bold"
                      style={{
                        width: '56px',
                        height: '56px',
                        minWidth: '56px',
                        background: '#14358A',
                        fontSize: 'clamp(20px, 2vw, 28px)',
                      }}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
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
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* Fairness Block */}
            <FadeInSection direction="up">
              <div
                className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8"
              >
                <div className="flex gap-6">
                  <Shield size={32} color="#14358A" strokeWidth={1.5} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3
                      className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                      style={{
                        fontSize: 'clamp(18px, 1.9vw, 24px)',
                        lineHeight: '120%',
                      }}
                    >
                      Ensuring Fairness in Your Application
                    </h3>
                    <p
                      className="font-dm-sans font-normal text-[#68718B]"
                      style={{
                        fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                        lineHeight: '140%',
                      }}
                    >
                      To support our commitment to an unbiased evaluation process, we require all candidates to refrain from including personal information that could inadvertently introduce bias (age, marital status, gender, pictures, etc.). Submissions containing this type of information will, unfortunately, result in the invalidation of your application. We appreciate your cooperation in helping us maintain a focus purely on your professional merit.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Section 6: CTA */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(60px, 6vw, 100px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h2
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
              }}
            >
              Come Work with Us!
            </h2>

            <p
              className="font-dm-sans font-normal text-[#333333] mb-8"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Your next career-defining role awaits. We invite you to explore our open positions on Origin, our exclusive careers platform, for the most current listings and a streamlined application experience.
            </p>

            <a
              href="https://origin.portersmg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90 mb-12"
              style={{
                backgroundColor: '#14358A',
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                padding: '12px 28px',
              }}
            >
              Explore Roles on Origin <ExternalLink size={20} />
            </a>

            <p
              className="font-dm-sans font-normal text-[#68718B] mb-4"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Also view us on:
            </p>

            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/company/pmg-consulting-global/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans font-medium text-[#14358A] transition-opacity hover:opacity-80"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://ca.indeed.com/cmp/Porters-Management-Group-1/about"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans font-medium text-[#14358A] transition-opacity hover:opacity-80"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                }}
              >
                Indeed
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>

      <Footer />

      <style jsx>{`
        :global([data-state='active'] .tab-underline) {
          opacity: 1;
        }
        :global([data-state='active']) {
          color: #14358a;
        }
      `}</style>
    </main>
  );
}
