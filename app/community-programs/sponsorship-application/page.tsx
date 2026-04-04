'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SponsorshipApplication() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)', paddingBottom: 'clamp(48px, 5vw, 80px)' }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(760px, 90%)' }}>
            <h1
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                marginBottom: '20px',
              }}
            >
              Not-for-Profit Sponsorship Application
            </h1>
            <p
              className="font-dm-sans font-normal text-[#333333]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Thank you for your interest in the PMG Not-for-Profit Consultation Sponsorship program. Please complete the application below and we'll review your organization's needs.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Content Section */}
      <div
        className="w-full px-6"
        style={{ paddingBottom: 'clamp(80px, 8vw, 120px)' }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 'min(900px, 90%)' }}
        >
          <FadeInSection direction="up">
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] bg-white p-8"
            >
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '160%',
                  marginBottom: '24px',
                }}
              >
                Application form coming soon. In the meantime, please contact us directly at hello@pmgconsulting.com to discuss your organization's needs and how the PMG Not-for-Profit Consultation Sponsorship program can support your mission.
              </p>

              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '160%',
                  marginBottom: '32px',
                }}
              >
                We look forward to partnering with your organization to drive positive change in your community.
              </p>

              <Link
                href="/community-involvement"
                className="inline-flex items-center gap-2 font-dm-sans font-medium text-white rounded-[8px] transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: '#14358A',
                  fontSize: 'clamp(13px, 1.11vw, 15px)',
                  padding: '12px 24px',
                }}
              >
                <ArrowLeft size={18} /> Back to Community Involvement
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>

      <Footer />
    </main>
  );
}
