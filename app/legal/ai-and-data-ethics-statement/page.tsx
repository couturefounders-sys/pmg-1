'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export default function AIDataEthicsStatement() {
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
              AI & Data Ethics Statement
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

      <Footer />
    </main>
  );
}
