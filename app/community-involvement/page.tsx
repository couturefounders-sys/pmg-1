'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import * as Tabs from '@radix-ui/react-tabs';
import { Award, Sparkles, ArrowRight, Search, ClipboardList, Users, Handshake, CheckCircle, Lightbulb, Briefcase, BarChart3, Target, Network } from 'lucide-react';
import Link from 'next/link';

const sponsorshipFeatures = [
  {
    icon: Search,
    title: 'Comprehensive Needs Assessment',
    description: 'A thorough evaluation of your operations, finances, and structure to pinpoint key areas for improvement.',
  },
  {
    icon: ClipboardList,
    title: 'Tailored Consultation Plan',
    description: 'A custom plan with specific objectives, strategies, and actionable steps to address challenges and drive growth.',
  },
  {
    icon: Users,
    title: 'Dedicated Consultant Placement',
    description: 'You will be paired with a dedicated consultant with expertise relevant to your unique needs.',
  },
  {
    icon: Handshake,
    title: 'Hands-On Support',
    description: 'Close collaboration with your leadership and staff to implement recommended solutions and initiatives.',
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Evaluation',
    description: 'Continuous evaluation to assess impact, including regular check-ins, progress reviews, and performance tracking.',
  },
  {
    icon: Lightbulb,
    title: 'Capacity Building',
    description: 'Access to a wide range of resources, tools, and training materials to enhance your organizational capacity.',
  },
];

const mentorshipFeatures = [
  {
    icon: Briefcase,
    title: 'Executive Mentorship',
    description: 'Get paired with a dedicated executive mentor for invaluable insights, guidance, and support.',
  },
  {
    icon: Target,
    title: 'Career Planning',
    description: 'Receive assistance in creating personalized career development plans and setting achievable goals.',
  },
  {
    icon: BarChart3,
    title: 'Feedback and Evaluation',
    description: 'Receive constructive feedback from executives to refine your skills and excel in your chosen field.',
  },
  {
    icon: Award,
    title: 'Career-Launching Titles',
    description: 'Mentees earn a real-world, executive-level job title (e.g., Associate Consultant), providing immediate professional credibility far beyond a generic "intern" designation.',
  },
  {
    icon: CheckCircle,
    title: 'Executive Recommendation',
    description: 'Receive a public recommendation and a formal letter of recommendation on PMG letterhead.',
  },
  {
    icon: Network,
    title: 'Extended Professional Network Access',
    description: 'Maintain access to PMG resources and the extensive alumni network for ongoing career support and industry referrals after program completion.',
  },
];

export default function CommunityInvolvement() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section with Stats */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <div
            className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
            style={{ maxWidth: 'min(1300px, 92%)' }}
          >
            {/* Left Column: Title & Subtitle */}
            <div className="flex flex-col justify-center">
              <h1
                className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
                style={{
                  fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                  lineHeight: '105%',
                }}
              >
                Community Involvement
              </h1>
              <p
                className="font-dm-sans font-normal text-[#333333]"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '1.6',
                }}
              >
                We are committed to making a positive impact beyond our client work. Through our sponsorship and mentorship programs, we dedicate our resources and expertise to strengthening communities and nurturing the next generation of professionals.
              </p>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="flex flex-col gap-6 justify-center">
              {/* Stat Card 1 */}
              <div
                className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8 flex flex-col items-center text-center"
              >
                <Award size={32} color="#14358A" strokeWidth={1.5} className="mb-4" />
                <div
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 42px)',
                    lineHeight: '120%',
                    marginBottom: '8px',
                  }}
                >
                  $<AnimatedCounter end={250000} />+
                </div>
                <p
                  className="font-montserrat font-normal text-[#68718B]"
                  style={{
                    fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                    lineHeight: '140%',
                  }}
                >
                  In Services Donated Annually
                </p>
              </div>

              {/* Stat Card 2 */}
              <div
                className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8 flex flex-col items-center text-center"
              >
                <Sparkles size={32} color="#14358A" strokeWidth={1.5} className="mb-4" />
                <div
                  className="font-dm-sans font-bold text-[#14358A]"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 42px)',
                    lineHeight: '120%',
                    marginBottom: '8px',
                  }}
                >
                  $<AnimatedCounter end={19500000} />+
                </div>
                <p
                  className="font-montserrat font-normal text-[#68718B]"
                  style={{
                    fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                    lineHeight: '140%',
                  }}
                >
                  Estimated Economic Value Generated for Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Tabs Section */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{ paddingBottom: 'clamp(80px, 8vw, 120px)' }}
        >
          <div
            className="mx-auto"
            style={{ maxWidth: 'min(1300px, 92%)' }}
          >
            <Tabs.Root defaultValue="sponsorship" className="w-full">
              {/* Tab List */}
              <Tabs.List
                className="flex gap-8 border-b-2"
                style={{ borderColor: '#E5E7EB', marginBottom: 'clamp(40px, 4vw, 60px)' }}
              >
                <Tabs.Trigger
                  value="sponsorship"
                  className="font-dm-sans font-bold tracking-[-0.03em] pb-4 transition-colors relative"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#68718B',
                  }}
                  onFocus={(e) => {
                    const trigger = e.currentTarget;
                    if (trigger.getAttribute('data-state') === 'active') {
                      trigger.style.color = '#14358A';
                    }
                  }}
                >
                  Not-for-Profit Sponsorships
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
                  value="mentorship"
                  className="font-dm-sans font-bold tracking-[-0.03em] pb-4 transition-colors relative"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#68718B',
                  }}
                  onFocus={(e) => {
                    const trigger = e.currentTarget;
                    if (trigger.getAttribute('data-state') === 'active') {
                      trigger.style.color = '#14358A';
                    }
                  }}
                >
                  Career Catalyst Mentorship
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

              {/* Sponsorship Tab */}
              <Tabs.Content value="sponsorship" className="w-full">
                <div>
                  <h2
                    className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                      lineHeight: '105%',
                    }}
                  >
                    Not-for-Profit Consultation Sponsorships
                  </h2>
                  <p
                    className="font-dm-sans font-normal text-[#333333] mb-8"
                    style={{
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '1.6',
                      maxWidth: '800px',
                    }}
                  >
                    We are passionate believers in the vital role non-profit and charitable organizations play in creating positive change within our communities. That's why we are excited to be able to offer the PMG Not-for-Profit Consultation Sponsorship program. All of our expertise, available at no cost to qualifying not-for-profit organizations.
                  </p>

                  {/* Program Details Heading */}
                  <h3
                    className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-8"
                    style={{
                      fontSize: 'clamp(18px, 1.9vw, 28px)',
                      lineHeight: '105%',
                      marginTop: 'clamp(24px, 3vw, 48px)',
                    }}
                  >
                    Program Details
                  </h3>

                  {/* Feature Cards Grid */}
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                  >
                    {sponsorshipFeatures.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <FadeInSection key={idx} delay={idx * 0.05}>
                          <div
                            className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-6"
                            style={{ minHeight: '240px' }}
                          >
                            <Icon size={28} color="#14358A" strokeWidth={1.6} className="mb-3" />
                            <h4
                              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                              style={{
                                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                                lineHeight: '120%',
                              }}
                            >
                              {feature.title}
                            </h4>
                            <p
                              className="font-dm-sans font-normal text-[#68718B]"
                              style={{
                                fontSize: 'clamp(13px, 1.11vw, 16px)',
                                lineHeight: '140%',
                              }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </FadeInSection>
                      );
                    })}
                  </div>

                  {/* CTA Block */}
                  <FadeInSection direction="up">
                    <div
                      className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8"
                      style={{ marginTop: 'clamp(40px, 5vw, 80px)' }}
                    >
                      <h3
                        className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                        style={{
                          fontSize: 'clamp(18px, 1.9vw, 28px)',
                          lineHeight: '105%',
                        }}
                      >
                        Ready to elevate your non-profit with expert guidance?
                      </h3>
                      <p
                        className="font-dm-sans font-normal text-[#333333] mb-6"
                        style={{
                          fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                          lineHeight: '1.6',
                          maxWidth: '600px',
                        }}
                      >
                        Apply today to join a community dedicated to overcoming challenges and driving positive change. Empower your organization to thrive—this is your chance to grow, improve, and succeed.
                      </p>
                      <Link
                        href="/community-programs/sponsorship-application"
                        className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: '#14358A',
                          fontSize: 'clamp(13px, 1.11vw, 15px)',
                          padding: '12px 24px',
                        }}
                      >
                        Apply Today! <ArrowRight size={18} />
                      </Link>
                    </div>
                  </FadeInSection>
                </div>
              </Tabs.Content>

              {/* Mentorship Tab */}
              <Tabs.Content value="mentorship" className="w-full">
                <div>
                  <h2
                    className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                      lineHeight: '105%',
                    }}
                  >
                    Career Catalyst Mentorship Program
                  </h2>
                  <p
                    className="font-dm-sans font-normal text-[#333333] mb-8"
                    style={{
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '1.6',
                      maxWidth: '800px',
                    }}
                  >
                    We believe in supporting and nurturing talent, guiding new professionals towards success. Our six-month program for recent post-secondary graduates provides support and guidance to kickstart careers in Operations, Customer Experience, People and Organizations, and Marketing.
                  </p>

                  {/* Program Details Heading */}
                  <h3
                    className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-8"
                    style={{
                      fontSize: 'clamp(18px, 1.9vw, 28px)',
                      lineHeight: '105%',
                      marginTop: 'clamp(24px, 3vw, 48px)',
                    }}
                  >
                    Program Details
                  </h3>

                  {/* Feature Cards Grid */}
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                  >
                    {mentorshipFeatures.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <FadeInSection key={idx} delay={idx * 0.05}>
                          <div
                            className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-6"
                            style={{ minHeight: '240px' }}
                          >
                            <Icon size={28} color="#14358A" strokeWidth={1.6} className="mb-3" />
                            <h4
                              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-3"
                              style={{
                                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                                lineHeight: '120%',
                              }}
                            >
                              {feature.title}
                            </h4>
                            <p
                              className="font-dm-sans font-normal text-[#68718B]"
                              style={{
                                fontSize: 'clamp(13px, 1.11vw, 16px)',
                                lineHeight: '140%',
                              }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </FadeInSection>
                      );
                    })}
                  </div>

                  {/* CTA Block */}
                  <FadeInSection direction="up">
                    <div
                      className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8"
                      style={{ marginTop: 'clamp(40px, 5vw, 80px)' }}
                    >
                      <h3
                        className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                        style={{
                          fontSize: 'clamp(18px, 1.9vw, 28px)',
                          lineHeight: '105%',
                        }}
                      >
                        Ready to jumpstart your career with guidance from industry experts?
                      </h3>
                      <p
                        className="font-dm-sans font-normal text-[#333333] mb-3"
                        style={{
                          fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                          lineHeight: '1.6',
                          maxWidth: '600px',
                        }}
                      >
                        The PMG Career Catalyst Mentorship Program is your chance to unlock your full potential. Apply today to join a community of driven individuals committed to achieving excellence.
                      </p>
                      <p
                        className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-4"
                        style={{
                          fontSize: 'clamp(16px, 1.5vw, 20px)',
                          lineHeight: '105%',
                        }}
                      >
                        Your future starts here.
                      </p>
                      <p
                        className="font-dm-sans font-normal text-[#333333] mb-6"
                        style={{
                          fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                          lineHeight: '1.6',
                          maxWidth: '600px',
                        }}
                      >
                        Don't miss this opportunity to learn, grow, and excel.
                      </p>
                      <Link
                        href="/community-programs/mentorship-application"
                        className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: '#14358A',
                          fontSize: 'clamp(13px, 1.11vw, 15px)',
                          padding: '12px 24px',
                        }}
                      >
                        Apply Now <ArrowRight size={18} />
                      </Link>
                    </div>
                  </FadeInSection>
                </div>
              </Tabs.Content>
            </Tabs.Root>
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
