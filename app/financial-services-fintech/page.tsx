'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FinancialServicesFinTech() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto" style={{ paddingTop: '140px' }}>

        {/* Content Container */}
        <div className="relative" style={{ height: '500px' }}>

          {/* Heading */}
          <h1
            className="absolute font-poppins font-semibold"
            style={{
              top: '30px',
              left: '118px',
              width: '802.78px',
              fontSize: '45px',
              lineHeight: '46px',
              color: '#14358A',
              letterSpacing: '0%'
            }}
          >
            Navigating the Future of Finance
          </h1>

          {/* Description */}
          <p
            className="absolute font-montserrat font-normal"
            style={{
              top: '100px',
              left: '118px',
              width: '740px',
              fontSize: '30px',
              lineHeight: '140%',
              color: '#333333'
            }}
          >
            As legacy institutions and agile FinTechs converge, the industry faces a dual mandate: absolute security and rapid innovation. We partner with financial leaders to navigate regulatory shifts and technological disruption, building the resilient systems required to thrive in a digital-first economy.
          </p>

          {/* Circular Hero Image */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: '0px',
              left: '960px',
              width: '416px',
              height: '424px',
              borderRadius: '208px'
            }}
          >
            <img
              src="/financial-services-hero.png"
              alt="Financial Services"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>


        </div>

      </div>

      {/* Your Strategic Partner Section */}
      <div className="relative w-full bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="relative max-w-[1440px] mx-auto px-12">

          {/* Section Title */}
          <h2
            className="font-poppins font-semibold text-center"
            style={{
              fontSize: '50px',
              lineHeight: '46px',
              color: '#14358A',
              letterSpacing: '0%',
              marginBottom: '60px'
            }}
          >
            Your Strategic Partner
          </h2>

          {/* Section Description */}
          <div
            className="font-montserrat font-normal mx-auto"
            style={{
              width: '1342px',
              fontSize: '32px',
              lineHeight: '100%',
              color: '#333333',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            <p style={{ marginBottom: '40px' }}>
              PMG partners with banks, asset managers, insurers, & fintechs to deliver a balance of strategic insight & operational expertise. We enable organizations to strengthen performance, manage risk, & deliver sustainable value in an environment of constant disruption.
            </p>
            <p>
              Our financial services work is complemented by PMG&apos;s cross-sector expertise in technology & organizational transformation, equipping leaders to address challenges across governance, digital adoption, & market positioning.
            </p>
          </div>

        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="text-center flex flex-col items-center"
        style={{
          background: '#F0F7FC',
          padding: '80px 40px'
        }}
      >
        <h2
          className="font-dm-sans font-bold text-[#14358A] mb-6"
          style={{
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-3%'
          }}
        >
          Ready to Transform Your Financial Operations?
        </h2>
        <p
          className="font-montserrat font-normal text-[#333333] mb-10"
          style={{
            fontSize: '32px',
            lineHeight: '135%',
            letterSpacing: '0%',
            maxWidth: '1196px'
          }}
        >
          Let&apos;s discuss how we can help you navigate the evolving financial landscape.
        </p>
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: '393px',
            height: '65px',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            fontSize: '20px',
            lineHeight: '140%',
            letterSpacing: '0%'
          }}
        >
          Request a Consultation
        </button>
      </div>

      <Footer />
    </main>
  );
}
