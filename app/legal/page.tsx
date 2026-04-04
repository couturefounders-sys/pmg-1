'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import Link from 'next/link';

const legalSections = [
  {
    title: 'Public Legal & Website Terms',
    items: [
      { name: 'Privacy & Cookie Policy', date: 'September 1, 2024', href: '/legal/privacy-policy' },
      { name: 'Digital Terms of Use', date: 'September 1, 2024', href: '/legal/digital-terms-of-use' },
      { name: 'AI & Data Ethics Statement', date: 'September 1, 2024', href: '/legal/ai-and-data-ethics-statement' },
    ],
  },
  {
    title: 'PMG-Developed Product-Specific Legal Terms',
    items: [
      { name: 'Terms and Conditions', date: 'September 1, 2024', href: '#' },
      { name: 'End User License Agreement (EULA)', date: 'September 1, 2024', href: '#' },
      { name: 'Data Processing Addendum (DPA)', date: 'September 1, 2024', href: '#' },
    ],
  },
  {
    title: 'Client & Partner Facing Policies',
    items: [
      { name: 'Information Accuracy and Success Metrics Policy', date: 'September 1, 2024', href: '/legal/information-accuracy-and-success-metrics-policy' },
      { name: 'Intellectual Property Policy', date: 'September 1, 2024', href: '/legal/intellectual-property' },
      { name: 'Conflict of Interest & Client Segregation Policy', date: 'September 1, 2024', href: '#' },
      { name: 'Political & Government Advisory Services Policy', date: 'September 1, 2024', href: '#' },
      { name: 'Anti-Modern Slavery Policy', date: 'July 14, 2024', href: '/legal/anti-modern-slavery-policy' },
      { name: 'Regionalization Policy', date: 'September 1, 2024', href: '/legal/regionalization-policy' },
    ],
  },
  {
    title: 'Internal & Employment',
    items: [
      { name: 'Hiring & Equal Opportunity Policy', date: 'September 1, 2024', href: '/legal/hiring-and-equal-opportunity' },
    ],
  },
];

export default function LegalCenter() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6 text-center"
          style={{
            paddingTop: 'clamp(100px, 9.86vw, 142px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(900px, 90%)' }}>
            <h1
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                lineHeight: '105%',
              }}
            >
              Legal Center
            </h1>

            <p
              className="font-dm-sans font-normal text-[#68718B]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Access all legal documents, policies, and terms of use for PMG.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Legal Sections */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 'min(1300px, 92%)' }}>
            <div className="space-y-12">
              {legalSections.map((section, sectionIdx) => (
                <FadeInSection key={sectionIdx} direction="up" delay={sectionIdx * 0.1}>
                  <div>
                    <h2
                      className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-6"
                      style={{
                        fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                        lineHeight: '105%',
                      }}
                    >
                      {section.title}
                    </h2>

                    <div
                      className="rounded-xl border overflow-hidden shadow-lg"
                      style={{
                        borderColor: '#E5E7EB',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <div className="relative w-full overflow-auto">
                        <table
                          className="w-full caption-bottom text-sm"
                          style={{
                            fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                          }}
                        >
                          <thead>
                            <tr
                              style={{
                                borderBottom: '2px solid #14358A',
                                backgroundColor: '#F9FAFB',
                              }}
                            >
                              <th
                                className="text-left p-4 font-dm-sans font-bold text-[#14358A]"
                                style={{ width: '70%' }}
                              >
                                Policy
                              </th>
                              <th
                                className="text-left p-4 font-dm-sans font-bold text-[#14358A]"
                                style={{ width: '30%' }}
                              >
                                Last Updated
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, itemIdx) => (
                              <tr
                                key={itemIdx}
                                style={{
                                  borderBottom: '1px solid #E5E7EB',
                                }}
                              >
                                <td className="p-4">
                                  <Link
                                    href={item.href}
                                    className="font-dm-sans font-normal text-[#14358A] hover:underline transition-colors"
                                    style={{
                                      color: '#14358A',
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </td>
                                <td className="p-4 font-dm-sans font-normal text-[#68718B]">
                                  {item.date}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
