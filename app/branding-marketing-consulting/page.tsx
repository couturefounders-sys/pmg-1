"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachRoadmap from '@/components/ApproachRoadmap';
import ScrollStack from '@/components/ScrollStack';
import Link from 'next/link';

const CAPABILITY_ITEMS = [
  'Sector Convergence',
  'Business Value Units',
  'Input-Output Method',
  'Brand Archetypes',
  'Content Marketing',
  'Go-to-Market Strategy',
  'Customer Acquisition Funnel',
  'Marketing ROI Analysis',
  'Brand Positioning',
  'Storytelling',
  'Value Proposition Design',
  'Market Segmentation',
  'Competitive Analysis',
  'Digital Advertising',
  'SEO & SEM',
  'Social Media Engagement',
  'Influencer Marketing',
  'Public Relations',
  'Brand Identity & Voice',
  'Shopper Insights',
];
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';

const STEP_POSITIONS = {
  step1: { left: 20, top: 10 },
  step2: { left: 70, top: 10 },
  step3: { left: 47, top: 92 },
};

export default function BrandingMarketingConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto text-center" style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)' }}>

        {/* Subheading */}
        <FadeInSection direction="up">
        <p
          className="font-dm-sans font-bold mb-4"
          style={{
            fontSize: 'clamp(13px, 1.07vw, 15.4px)',
            lineHeight: '105%',
            color: '#000000',
            margin: '0 auto 1rem',
          }}
        >
          Branding &amp; Marketing Consulting
        </p>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            color: '#14358A',
            width: '1224px',
            maxWidth: '100%',
            margin: '37px auto 0 auto',
          }}
        >
          Driving Growth Through Perfectly Crafted Brands
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.375vw, 19.8px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            width: '1258px',
            maxWidth: '100%',
            margin: '31px auto 0 auto',
            paddingBottom: 'clamp(48px, 5.56vw, 80px)',
          }}
        >
          We treat brand and marketing as a direct investment in business value. We engineer integrated strategies and compelling narratives that guarantee audience resonance and deliver measurable, high-ROI revenue growth.
        </p>
        </FadeInSection>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-16">
        <FadeInSection direction="up">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Brand Building */}
          <FadeInSection delay={0}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/target.svg" alt="Brand Building" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Brand Building
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Engineer a unique brand identity and experience that guarantees consistent messaging and superior market cut-through.
            </p>
          </div>
          </FadeInSection>

          {/* Change Measurement & Evaluation */}
          <FadeInSection delay={0.1}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/funds.svg" alt="Brand Loyalty & Advocacy" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Brand Loyalty & Advocacy
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Maximize Customer Lifetime Value (CLV) by fostering advocacy and converting loyal customers into passionate brand promoters.
            </p>
          </div>
          </FadeInSection>

          {/* Consumer & Shopper Insights */}
          <FadeInSection delay={0.2}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/switch-button.svg" alt="Consumer & Shopper Insights" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Consumer & Shopper Insights
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Leverage deep consumer and shopper insights to inform strategy and create impactful experiences that guarantee sales growth.
            </p>
          </div>
          </FadeInSection>

          {/* Content Creation & Management */}
          <FadeInSection delay={0.3}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/phone.svg" alt="Content Creation & Management" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Content Creation & Management
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Develop and manage high-quality, engaging content pipelines that drive measurable audience resonance and strategic alignment.
            </p>
          </div>
          </FadeInSection>

          {/* Content Marketing & Storytelling */}
          <FadeInSection delay={0.4}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/retro-bag.svg" alt="Content Marketing & Storytelling" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Content Marketing & Storytelling
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Tell your brand's story with compelling content strategies designed to build lasting audience relationships and accelerate conversion.
            </p>
          </div>
          </FadeInSection>

          {/* Customer Acquisition Strategies */}
          <FadeInSection delay={0.5}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/efferent-three.svg" alt="Customer Acquisition Strategies" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Customer Acquisition Strategies
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Design and implement high-ROI customer acquisition strategies that aggressively expand market share and reduce cost-per-lead.
            </p>
          </div>
          </FadeInSection>

          {/* Digital Marketing */}
          <FadeInSection delay={0.6}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/chart-histogram.svg" alt="Digital Marketing" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Digital Marketing
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Execute high-performance digital marketing campaigns across all platforms to maximize traffic generation and lead volume.
            </p>
          </div>
          </FadeInSection>

          {/* Marketing & Business Analytics */}
          <FadeInSection delay={0.7}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/chart-line-area.svg" alt="Marketing & Business Analytics" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Marketing & Business Analytics
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Provide actionable, data-driven insights, analytics, and modeling to rigorously evaluate campaign effectiveness and guide high-stakes decision-making.
            </p>
          </div>
          </FadeInSection>

          {/* Market Positioning & Go-to-Market Strategy */}
          <FadeInSection delay={0.8}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/message-security.svg" alt="Market Positioning & Go-to-Market Strategy" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Market Positioning & Go-to-Market Strategy
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Define a defensible market position and design effective Go-to-Market strategies that ensure successful product launches.
            </p>
          </div>
          </FadeInSection>

          {/* Marketing Return on Investment */}
          <FadeInSection delay={0.9}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/shopping-cart-two.svg" alt="Marketing Return on Investment" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Marketing Return on Investment
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Maximize profitability by rigorously measuring and optimizing the financial Return on Investment (ROI) of all marketing expenditure.
            </p>
          </div>
          </FadeInSection>

          {/* Organization & Capabilities */}
          <FadeInSection delay={1.0}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/chip.svg" alt="Organization & Capabilities" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Organization & Capabilities
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Build structures and capabilities required to execute integrated, effective marketing and sales strategies.
            </p>
          </div>
          </FadeInSection>

          {/* Pricing & Enablement */}
          <FadeInSection delay={1.1}>
          <div className="bg-white p-6 rounded-[10px] flex flex-col" style={{ border: '3px solid #14358A', minHeight: '257px' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#14358A] rounded-[10px] flex-shrink-0">
                <Image src="/icons/cards/inbox.svg" alt="Pricing & Enablement" width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mb-0" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '105%', letterSpacing: '-0.03em', color: '#14358A' }}>
              Pricing & Enablement
              </h3>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '140%', color: '#68718B' }}>
              Establish optimal competitive pricing and enable sales teams with the tools and knowledge required to maximize revenue and profitability.
            </p>
          </div>
          </FadeInSection>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto' }}>
          <FadeInSection direction="up">
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Our Approach
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.74vw, 28px)',
              lineHeight: '140%',
              color: '#333',
              textAlign: 'center',
              maxWidth: 'min(1000px, 95%)',
              margin: '0 auto 60px',
            }}
          >
            Our approach is a unique blend of deep marketing expertise and creative innovation. We draw insights from a vast array of successful brands across industries, identifying best practices and emerging trends that can be applied to your specific business.
          </p>
          </FadeInSection>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
            <div style={{ position: 'absolute', inset: '25% 0 25% 0' }}>
              <ApproachRoadmap />
            </div>

            {/* Step 1 */}
            <div
              style={{
                position: 'absolute',
                left: `${STEP_POSITIONS.step1.left}%`,
                top: `${STEP_POSITIONS.step1.top}%`,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.88vw, 27px)',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Uncover Brand Truths
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We conduct in-depth research to understand your<br />
                brand&#39;s unique strengths, weaknesses, and<br />
                opportunities.
              </p>
            </div>

            {/* Step 2 */}
            <div
              style={{
                position: 'absolute',
                left: `${STEP_POSITIONS.step2.left}%`,
                top: `${STEP_POSITIONS.step2.top}%`,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.88vw, 27px)',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Develop a Compelling Brand Narrative
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We craft a compelling brand story that resonates<br />
                with your target audience and differentiates you<br />
                from the competition.
              </p>
            </div>

            {/* Step 3 */}
            <div
              style={{
                position: 'absolute',
                left: `${STEP_POSITIONS.step3.left}%`,
                top: `${STEP_POSITIONS.step3.top}%`,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.88vw, 27px)',
                  lineHeight: '105%',
                  color: '#14358A',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Execute Integrated Campaigns
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                Develop and execute full-funnel marketing campaigns<br />
                that guarantee a consistent, high-impact brand<br />
                experience across all touchpoints.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Crafting Compelling Brands Section */}
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Scroll Stack */}
          <div className="lg:w-[45%]">
            <ScrollStack items={CAPABILITY_ITEMS} />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[715px]">
            <FadeInSection direction="right">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Crafting Compelling Brands
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.74vw, 28px)',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              Our team of seasoned marketing and branding experts isn't confined to a single sector; we've assembled a diverse group of experts with a proven track record of success in creating and building iconic brands. This unique blend of experience and expertise allows us to think beyond traditional marketing channels.
            </p>
            </FadeInSection>

            {/* Bullet Point 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>
                Develop innovative marketing strategies by leveraging best practices from diverse industries to craft compelling brand stories and create impactful campaigns.
              </p>
            </div>

            {/* Bullet Point 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '140%', color: '#333333' }}>
                Deliver unparalleled brand value from the collective wisdom of leaders who have successfully built and maintained strong brands in competitive markets.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a
            href="/why-functional-consulting"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '30px',
              color: '#14358A',
              textDecoration: 'none',
            }}
          >
            Learn Why Functional Consulting Creates Better Outcomes
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* The Principle of Least Change Section */}
      <div
        className="relative w-full py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0B1B5E 0%, #14358A 100%)',
        }}
      >
        {/* Figma background SVG */}
        <img src="/ma-principle-bg.svg" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
        {/* Decorative Rectangle - Top Right */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
        {/* Decorative Rectangle - Bottom Left */}
        <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        {/* Decorative Border Rectangle - Top Left */}
        <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
        <div className="relative z-10 max-w-[1196px] mx-auto px-4 text-center">
          <FadeInSection direction="up">
          <p
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            The Principle of Least Change
          </p>

          <h2
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            Maximum Impact. Minimal Disruption.
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '135%',
              color: '#FFFFFF',
            }}
          >
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
          </FadeInSection>
        </div>
      </div>

      {/* Ready to Convert CTA Section */}
      <div
        className="relative w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)',
        }}
      >
        <div className="max-w-[min(1440px,_95%)] mx-auto px-4 text-center">
          <FadeInSection direction="up">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Ready to Convert Your Brand Strategy into Maximum ROI?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: 'min(1196px, 95%)',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let us help you develop and execute a winning strategy that drives sustainable growth and positions your organization for long-term success.
          </p>
          </FadeInSection>

          <Link
            href="/contact-us"
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: 'clamp(240px, 22.15vw, 319px)',
              height: 'clamp(48px, 4.51vw, 65px)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              padding: '16px 32px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Request a Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
