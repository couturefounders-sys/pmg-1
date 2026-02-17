'use client';

import Header from '@/components/Header';

export default function PublicSectorGovernment() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[118px] pt-[235px] pb-24 flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-[803px] z-10">
          <h1
            className="font-poppins font-semibold text-[#14358A]"
            style={{
              fontSize: '45px',
              lineHeight: '46px',
              letterSpacing: '0%',
            }}
          >
            Modernizing Public Service Delivery
          </h1>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '0%',
              maxWidth: '740px'
            }}
          >
            Public institutions face the immense challenge of meeting rising citizen expectations while managing finite resources. We help government agencies transform administrative complexity into high-performing systems that balance rigorous accountability with the need for modern, efficient service.
          </p>
        </div>

        {/* Right Image - Circular */}
        <div className="relative flex-shrink-0 z-10">
          <div 
            className="rounded-full overflow-hidden"
            style={{
              width: '453px',
              height: '453px',
            }}
          >
            <img
              src="/public-sector-image.png"
              alt="Public Service Delivery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

      </div>

      {/* Your Partner in the Public Sector Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[52px] py-24">
        <h2
          className="font-poppins font-semibold text-[#14358A] text-center mb-12"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
          }}
        >
          Your Partner in the Public Sector
        </h2>

        <div className="flex flex-col gap-8 text-center">
          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '32px',
              lineHeight: '150%',
              letterSpacing: '0%',
            }}
          >
            PMG partners with governments at all levels (federal, provincial, and municipal) along with public agencies and government-owned enterprises. Our consultants bring a combination of strategic insight, operational expertise, and transformation experience to help public institutions improve performance, strengthen trust, and deliver meaningful outcomes.
          </p>

          <p
            className="font-montserrat font-normal text-[#333333]"
            style={{
              fontSize: '32px',
              lineHeight: '150%',
              letterSpacing: '0%',
            }}
          >
            Our government work is strengthened by cross-sector expertise in finance, technology, education, and organizational design. This allows us to support leaders in addressing complex challenges with practical, actionable strategies that deliver real public value.
          </p>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-[52px] py-24">
        <h2
          className="font-poppins font-semibold text-[#14358A] text-center mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
          }}
        >
          Our Work
        </h2>

        <p
          className="font-montserrat font-normal text-[#333333] text-center mb-16"
          style={{
            fontSize: '24px',
            lineHeight: '140%',
          }}
        >
          Our work supports strategy, operations, & transformation—equipping financial leaders with the tools to deliver meaningful change.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Policy & Strategy Development */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3 leading-tight">
              Policy & Strategy<br />Development
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Craft, refine and operationalize policies and strategies to support economic growth, improve public service delivery, and maximize long-term societal impact.
            </p>
          </div>

          {/* Operational Efficiency */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Operational Efficiency
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Support efficiency initiatives through process improvement, performance measurement, and resource allocation, enabling departments to do more with less.
            </p>
          </div>

          {/* Digital Government & Service Transformation */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Digital Government &<br />Service Transformation
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Design and implement digital platforms, data infrastructure, and self-service tools to significantly improve citizen accessibility and satisfaction.
            </p>
          </div>

          {/* Public Infrastructure & Capital Projects */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2"/>
                <path d="M9 6h6M9 10h6M9 14h6"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Public Infrastructure &<br />Capital Projects
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Advise on the planning, financing, and delivery of major infrastructure projects, ensuring maximum public value is delivered on time and on budget.
            </p>
          </div>

          {/* Fiscal & Financial Management */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Fiscal & Financial<br />Management
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Advise on fiscal strategy, budget optimization, and cost reduction to ensure long-term financial sustainability while maintaining critical service stability.
            </p>
          </div>

          {/* Workforce & Organizational Transformation */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18 17V9M13 17v-6M8 17v-4"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Workforce & Organizational<br />Transformation
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Strengthen workforce strategies and enhance training, and build organizational cultures that promote innovation and internal accountability.
            </p>
          </div>

          {/* Program Evaluation & Impact Measurement */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2"/>
                <path d="M9 6h6M9 10h6M9 14h6"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Program Evaluation &<br />Impact Measurement
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Design and implement frameworks to rigorously measure program outcomes, evaluate efficacy, and ensure government investments deliver meaningful community impact.
            </p>
          </div>

          {/* Stakeholder Engagement & Public Consultation */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="12" r="8"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Stakeholder Engagement &<br />Public Consultation
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Facilitate transparent dialogue and public consultation processes, ensuring that decisions are informed by diverse citizen and stakeholder perspectives.
            </p>
          </div>

          {/* Procurement & Sourcing Modernization */}
          <div className="border-2 border-[#14358A] rounded-xl p-6 bg-white">
            <div className="w-12 h-12 bg-[#14358A] rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18 17V9M13 17v-6M8 17v-4"/>
              </svg>
            </div>
            <h3 className="font-poppins font-semibold text-[#14358A] text-xl mb-3">
              Procurement & Sourcing<br />Modernization
            </h3>
            <p className="font-montserrat text-[#5F6D7E] text-sm leading-relaxed">
              Reform procurement processes to enhance transparency, achieve greater value for money, and support strategic goals like economic development and sustainability.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
