'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export default function PrivacyPolicy() {
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
              Privacy & Cookie Policy
            </h1>

            <p
              className="font-dm-sans font-normal text-[#68718B]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Last Updated: September 1, 2024
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Content Section */}
      <FadeInSection direction="up">
        <div
          className="w-full px-6"
          style={{
            paddingTop: 'clamp(60px, 6vw, 100px)',
            paddingBottom: 'clamp(60px, 6vw, 100px)',
          }}
        >
          <div
            className="mx-auto rounded-xl border p-8"
            style={{
              maxWidth: 'min(900px, 90%)',
              borderColor: '#E5E7EB',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div
              className="font-dm-sans font-normal text-[#333333] space-y-6"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.8',
              }}
            >
              <p>
                PMG Consulting is committed to protecting your personal data and respecting your privacy. This Privacy & Cookie Policy explains how we collect, use, and protect information when you interact with us, both online through our digital platforms and offline through our business operations.
              </p>

              <ul className="list-disc pl-8 space-y-3">
                <li>
                  <strong>Collection & Use of Personal Data:</strong> We collect personal information online and offline through various channels, including our website, applications, email communications, and direct interactions with clients and partners. This data is used to provide services, improve our offerings, and comply with legal obligations.
                </li>
                <li>
                  <strong>Cookies & Tracking Technologies:</strong> Our website uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings, though some functionality may be limited if cookies are disabled.
                </li>
                <li>
                  <strong>Your Data Protection Rights:</strong> You have the right to access, correct, or delete your personal data. You may also object to certain processing activities and withdraw consent at any time. For requests related to your data or privacy concerns, please contact our Privacy Team directly.
                </li>
              </ul>

              <p>
                <strong>Personal Data Definition (PIPEDA Compliant):</strong> Personal data means any information about an identified individual or an individual whose identity can be determined from that information. This includes name, contact details, IP address, device information, and behavioral data collected online or offline.
              </p>

              <p>
                This Privacy & Cookie Policy supplements but does not override other privacy notices, disclosure statements, or confidentiality agreements you may have received from PMG or its subsidiaries. If there is a conflict between this policy and another specific notice, the more restrictive or specific notice will apply.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
