'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import {
  ScrollText,
  Banknote,
  ShieldCheck,
  GraduationCap,
  CalendarCheck,
  Users,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const minimumRequirements = [
  {
    icon: ScrollText,
    heading: 'Legal Right',
    description: 'The legal right to own and operate a business within your country.',
    span: 'col-span-1',
  },
  {
    icon: Banknote,
    heading: 'Initial Licensee Fee',
    description: '$10,000 CAD in non-gifted, non-borrowed liquid funds required for the upfront licensing fee.',
    span: 'col-span-1',
  },
  {
    icon: ShieldCheck,
    heading: 'Financial History',
    description: 'No history of bankruptcy, fraud, or fiduciary negligence.',
    span: 'col-span-1',
  },
  {
    icon: GraduationCap,
    heading: 'Experience',
    description: '10+ years of executive work experience with identified functional expertise.',
    span: 'col-span-1',
  },
  {
    icon: CalendarCheck,
    heading: 'Commitment',
    description: 'Full-time, hands-on ownership and operation of a consulting business.',
    span: 'col-span-1',
  },
  {
    icon: Users,
    heading: 'Leadership',
    description: 'A desire to lead a team of professionals building an industry-leading business.',
    span: 'col-span-1',
  },
  {
    icon: Handshake,
    heading: 'Exclusive Focus',
    description: 'Willingness to divest from all non-passive business interests to ensure 100% focus on building the PMG licensee business.',
    span: 'col-span-1',
  },
];

export default function Licensing() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Section 1: Hero */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div
            className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            style={{ maxWidth: 'min(1300px, 92%)' }}
          >
            {/* Text Column */}
            <div>
              <h1
                className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
                style={{
                  fontSize: 'clamp(32px, 3.5vw, 56px)',
                  lineHeight: '105%',
                }}
              >
                PMG Licensing
              </h1>

              <p
                className="font-dm-sans font-normal text-[#333333] mb-6"
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.6',
                }}
              >
                PMG licensees grow the brand that our founder, Bryce Porter, began: a positive influence and resource for the businesses we support, doing good within our communities.
              </p>

              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '1.6',
                }}
              >
                This is a demanding venture, requiring long hours and a dedication to building a team of industry-leading professionals. We require licensees to be committed to building a quality-first, high-impact business in their region. This is not a hands-off investment; it is a hands-on opportunity for executives and business leaders to build their own consulting business within their local market.
              </p>
            </div>

            {/* Image Column */}
            <FadeInSection direction="up">
              <div className="rounded-lg overflow-hidden shadow-xl" style={{ minHeight: '400px' }}>
                <Image
                  src="/licensing-hero.webp"
                  alt="Business professional overlooking cityscape"
                  width={500}
                  height={400}
                  priority
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Section 2: Licensee Minimum Requirements */}
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
              Licensee Minimum Requirements
            </h2>

            <p
              className="font-dm-sans font-normal text-[#333333] mb-12"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
                maxWidth: '900px',
              }}
            >
              The PMG licensee opportunity is an exciting one for professionals looking to transition from employee to owner. Owning and operating a PMG licensee consulting business requires an entrepreneurial spirit and a quality-first mindset. Meeting these minimum requirements does not guarantee selection, as our process is highly competitive.
            </p>

            {/* Cards Grid */}
            <div className="space-y-8">
              {/* Row 1: 2 columns */}
              <div
                className="grid gap-8 items-stretch"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  maxWidth: '720px',
                }}
              >
                {minimumRequirements.slice(0, 2).map((req, idx) => {
                  const Icon = req.icon;
                  return (
                    <FadeInSection key={idx} delay={idx * 0.05}>
                      <div
                        className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 h-full"
                      >
                        <Icon size={40} color="#14358A" strokeWidth={1.5} className="mb-4" />
                        <h3
                          className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                          style={{
                            fontSize: 'clamp(16px, 1.5vw, 20px)',
                            lineHeight: '120%',
                          }}
                        >
                          {req.heading}
                        </h3>
                        <p
                          className="font-dm-sans font-normal text-[#68718B]"
                          style={{
                            fontSize: 'clamp(13px, 1.11vw, 16px)',
                            lineHeight: '140%',
                          }}
                        >
                          {req.description}
                        </p>
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>

              {/* Row 2: 3 columns */}
              <div
                className="grid gap-8 items-stretch"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  maxWidth: '1050px',
                }}
              >
                {minimumRequirements.slice(2, 5).map((req, idx) => {
                  const Icon = req.icon;
                  return (
                    <FadeInSection key={idx} delay={(idx + 2) * 0.05}>
                      <div
                        className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 h-full"
                      >
                        <Icon size={40} color="#14358A" strokeWidth={1.5} className="mb-4" />
                        <h3
                          className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                          style={{
                            fontSize: 'clamp(16px, 1.5vw, 20px)',
                            lineHeight: '120%',
                          }}
                        >
                          {req.heading}
                        </h3>
                        <p
                          className="font-dm-sans font-normal text-[#68718B]"
                          style={{
                            fontSize: 'clamp(13px, 1.11vw, 16px)',
                            lineHeight: '140%',
                          }}
                        >
                          {req.description}
                        </p>
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>

              {/* Row 3: 2 columns */}
              <div
                className="grid gap-8 items-stretch"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  maxWidth: '720px',
                }}
              >
                {minimumRequirements.slice(5, 7).map((req, idx) => {
                  const Icon = req.icon;
                  return (
                    <FadeInSection key={idx} delay={(idx + 5) * 0.05}>
                      <div
                        className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 h-full"
                      >
                        <Icon size={40} color="#14358A" strokeWidth={1.5} className="mb-4" />
                        <h3
                          className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                          style={{
                            fontSize: 'clamp(16px, 1.5vw, 20px)',
                            lineHeight: '120%',
                          }}
                        >
                          {req.heading}
                        </h3>
                        <p
                          className="font-dm-sans font-normal text-[#68718B]"
                          style={{
                            fontSize: 'clamp(13px, 1.11vw, 16px)',
                            lineHeight: '140%',
                          }}
                        >
                          {req.description}
                        </p>
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 3: Join Our Licensee Community */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(60px, 6vw, 100px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8 md:p-12"
            >
              <h2
                className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
                style={{
                  fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                  lineHeight: '105%',
                }}
              >
                Join Our Licensee Community
              </h2>

              <p
                className="font-dm-sans font-normal text-[#333333] mb-8"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '1.6',
                }}
              >
                PMG's global success is driven by the passion our licensees bring to their local markets. We take great care in selecting our business partners. Our licensee community is designed to guide you through the selection process and ensure this is the right match for you.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: '#14358A',
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  padding: '12px 28px',
                }}
              >
                Start the Licensing Process <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
