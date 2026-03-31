'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoreValuesPentagon from '@/components/CoreValuesPentagon';
import AlternatingTimeline from '@/components/AlternatingTimeline';
import Link from 'next/link';

export default function About() {
  return (
    <main
      className="relative w-full min-h-screen overflow-x-hidden bg-white"
    >
      <Header />

      {/* About Section */}
      <div id="about" className="relative z-10 bg-white pt-32 pb-16">
        {/* Header content */}
        <div className="relative text-center mb-16 px-4">

          <div className="relative z-10">
            <div className="flex flex-col items-center mb-4">
              <p
                className="font-dm-sans font-bold mb-2"
                style={{
                  fontSize: 'clamp(13px, 1.07vw, 15.4px)',
                  lineHeight: '105%',
                  color: '#000000',
                }}
              >
                Driving Industries Forward
              </p>
              <h2
                className="font-dm-sans font-bold text-[#14358A]"
                style={{
                  fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                }}
              >
                PMG Consulting
              </h2>
            </div>
            <p
              className="font-montserrat font-normal mx-auto text-center px-4"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: 'clamp(28px, 2.78vw, 40px)',
                color: '#333333',
                maxWidth: 'min(1405px, 92%)'
              }}
            >
              We are the go-to strategic consulting partner for SMB, Mid-market, and Enterprise leaders around the globe. Our foundational values of Excellence, Value, and Innovation drive the exceptional, transformative results that turn strategy into competitive reality.
            </p>
          </div>
        </div>

        {/* Diagram Area */}
        <div className="relative max-w-4xl mx-auto mb-20 hidden md:flex justify-center">
          <img
            src="/results-diagram.png"
            alt="Strategic Values Diagram"
            className="max-w-full h-auto"
            style={{ maxWidth: 'min(600px, 85%)' }}
          />
        </div>

        {/* Data Analytics Heading */}
        <div className="mb-16 text-center mx-auto px-4" style={{ maxWidth: 'min(800px, 90%)' }}>
          <h3
            className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%'
            }}
          >
            What We Bring to Every Partnership
          </h3>
        </div>

        {/* Strategic Pillars Cards */}
        <div className="mx-auto px-4 mb-20" style={{ maxWidth: 'min(1300px, 92%)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 - Functional Mastery */}
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] w-full flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                padding: 'clamp(20px, 1.67vw, 32px)',
                maxWidth: 'min(410px, 100%)',
                minHeight: 'clamp(220px, 18.06vw, 260px)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-[10px]" style={{ width: 64, height: 64, background: '#14358A' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 9.5L8.5 5.5C8.3 4.6 9 3.8 9.9 3.8H14.1C15 3.8 15.7 4.6 15.5 5.5L14.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="16" r="5.5" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="16" r="2.5" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h4
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-0"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '105%'
                  }}
                >
                  Functional Mastery
                </h4>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%'
                }}
              >
                We don't just know your industry; we master the functions that drive it, from P&L engineering to workflow architecture.
              </p>
            </div>

            {/* Card 2 - Passion for Results */}
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] w-full flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                padding: 'clamp(20px, 1.67vw, 32px)',
                maxWidth: 'min(410px, 100%)',
                minHeight: 'clamp(220px, 18.06vw, 260px)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-[10px]" style={{ width: 64, height: 64, background: '#14358A' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-0"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '105%'
                  }}
                >
                  Passion for Results
                </h4>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%'
                }}
              >
                Our dedication to execution means we own the outcome. This relentless drive accelerates project timelines and ensures we exceed key performance indicators.
              </p>
            </div>

            {/* Card 3 - An Expert Network */}
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] w-full flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                padding: 'clamp(20px, 1.67vw, 32px)',
                maxWidth: 'min(410px, 100%)',
                minHeight: 'clamp(220px, 18.06vw, 260px)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-[10px]" style={{ width: 64, height: 64, background: '#14358A' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="3" stroke="white" strokeWidth="1.5"/>
                    <path d="M6 21v-1a6 6 0 0 1 12 0v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="4.5" cy="9.5" r="2" stroke="white" strokeWidth="1.5"/>
                    <path d="M1 21v-0.5A4.5 4.5 0 0 1 5.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="19.5" cy="9.5" r="2" stroke="white" strokeWidth="1.5"/>
                    <path d="M23 21v-0.5A4.5 4.5 0 0 0 18.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-0"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '105%'
                  }}
                >
                  An Expert Network
                </h4>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%'
                }}
              >
                A curated global network of functional specialists ensures clients receive bespoke expertise, providing a decisive advantage in complex markets.
              </p>
            </div>

            {/* Card 4 - Relentless Innovation */}
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] w-full flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                padding: 'clamp(20px, 1.67vw, 32px)',
                maxWidth: 'min(410px, 100%)',
                minHeight: 'clamp(220px, 18.06vw, 260px)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-[10px]" style={{ width: 64, height: 64, background: '#14358A' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
                    <path d="M6 8.5h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 12h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 15.5h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-0"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '105%'
                  }}
                >
                  Relentless Innovation
                </h4>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%'
                }}
              >
                We embed future-proof strategies into your operations, positioning your business to immediately capitalize on new market opportunities.
              </p>
            </div>

            {/* Card 5 - People-Focused Leadership */}
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] w-full flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                padding: 'clamp(20px, 1.67vw, 32px)',
                maxWidth: 'min(410px, 100%)',
                minHeight: 'clamp(220px, 18.06vw, 260px)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-[10px]" style={{ width: 64, height: 64, background: '#14358A' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="3" stroke="white" strokeWidth="1.5"/>
                    <path d="M6 21v-1a6 6 0 0 1 12 0v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="4.5" cy="9.5" r="2" stroke="white" strokeWidth="1.5"/>
                    <path d="M1 21v-0.5A4.5 4.5 0 0 1 5.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="19.5" cy="9.5" r="2" stroke="white" strokeWidth="1.5"/>
                    <path d="M23 21v-0.5A4.5 4.5 0 0 0 18.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-0"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '105%'
                  }}
                >
                  People-Focused Leadership
                </h4>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%'
                }}
              >
                We focus on talent and organizational design to ensure change management is effective, accelerating adoption and securing long-term institutional value.
              </p>
            </div>

            {/* Card 6 - Evidence-Based Strategy */}
            <div
              className="border-[3px] border-[#14358A] rounded-[10px] w-full flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                padding: 'clamp(20px, 1.67vw, 32px)',
                maxWidth: 'min(410px, 100%)',
                minHeight: 'clamp(220px, 18.06vw, 260px)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-[10px]" style={{ width: 64, height: 64, background: '#14358A' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4
                  className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-0"
                  style={{
                    fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                    lineHeight: '105%'
                  }}
                >
                  Evidence-Based Strategy
                </h4>
              </div>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%'
                }}
              >
                We replace "gut feelings" with forensic data analysis, ensuring every move is backed by quantifiable reality.
              </p>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mt-24 mb-20 text-center">
          <h3
            className="font-dm-sans font-bold mb-12"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Our Core Values
          </h3>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto mb-12"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: 'clamp(24px, 2.5vw, 36px)',
              maxWidth: 'min(1100px, 90%)'
            }}
          >
            We don&apos;t have core values because they look good on a wall; we have them because they are the filters through which we hire our Embedded Leaders. These principles guide our every action and fuel our pursuit of excellence.
          </p>
          <div className="mx-auto" style={{ maxWidth: 'min(700px, 90vw)' }}>
            <CoreValuesPentagon />
          </div>
        </div>

        {/* Read Our Latest Insights */}
        <div className="mb-20 text-center bg-[#F9FAFB]" style={{ paddingTop: 'clamp(32px, 3.33vw, 64px)', paddingBottom: 'clamp(32px, 3.33vw, 64px)' }}>
          {/* Section Title */}
          <p
            className="font-dm-sans font-bold mb-2"
            style={{
              fontSize: 'clamp(13px, 1.07vw, 15.4px)',
              lineHeight: '105%',
              color: '#000000',
            }}
          >
            The PMG Thesis
          </p>
          <h3
            className="font-dm-sans font-bold mb-12"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Read Our Latest Insights
          </h3>

          {/* Cards Container */}
          <div className="flex justify-center items-start gap-6 px-4 mb-12 flex-wrap">
            {/* Card 1 - The Hidden Risks of AI Expansion */}
            <div
              className="overflow-hidden"
              style={{
                width: 'clamp(280px, 27.71vw, 440px)',
                borderRadius: '10px',
                border: '3px solid #231F20',
                background: '#FFFFFF'
              }}
            >
              {/* Card Header */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: 'clamp(80px, 7.22vw, 110px)',
                  borderTopLeftRadius: '7px',
                  borderTopRightRadius: '7px',
                  background: 'linear-gradient(180deg, #1B45B4 3.85%, #1C2792 69.39%)'
                }}
              >
                <h4
                  className="font-dm-sans font-bold text-white text-center px-3"
                  style={{
                    fontSize: 'clamp(18px, 1.67vw, 24px)',
                    lineHeight: '110%',
                    letterSpacing: '-0.03em'
                  }}
                >
                  The Hidden Risks of AI Expansion
                </h4>
              </div>
              {/* Card Body */}
              <div className="flex flex-col items-center" style={{ padding: 'clamp(16px, 1.39vw, 24px) clamp(12px, 1.11vw, 16px)' }}>
                <p
                  className="font-dm-sans font-normal mb-4"
                  style={{
                    fontSize: 'clamp(13px, 1.11vw, 16px)',
                    lineHeight: '140%',
                    color: '#1B45B4'
                  }}
                >
                  AI · July 25, 2024
                </p>
                <Link
                  href="/insights-innovations"
                  className="font-dm-sans font-bold text-white"
                  style={{
                    display: 'inline-flex',
                    textDecoration: 'none',
                    fontSize: 'clamp(13px, 1.11vw, 16px)',
                    lineHeight: '140%',
                    padding: 'clamp(10px, 1.11vw, 16px) clamp(20px, 2.22vw, 32px)',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)'
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 2 - The Unseen Edge */}
            <div
              className="overflow-hidden"
              style={{
                width: 'clamp(280px, 27.71vw, 440px)',
                borderRadius: '10px',
                border: '3px solid #231F20',
                background: '#FFFFFF'
              }}
            >
              {/* Card Header */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: 'clamp(74px, 6.81vw, 104px)',
                  borderTopLeftRadius: '7px',
                  borderTopRightRadius: '7px',
                  background: 'linear-gradient(180deg, #1B45B4 3.85%, #1C2792 69.39%)'
                }}
              >
                <h4
                  className="font-dm-sans font-bold text-white text-center px-3"
                  style={{
                    fontSize: 'clamp(18px, 1.67vw, 24px)',
                    lineHeight: '110%',
                    letterSpacing: '-0.03em'
                  }}
                >
                  The Unseen Edge
                </h4>
              </div>
              {/* Card Body */}
              <div className="flex flex-col items-center" style={{ padding: 'clamp(16px, 1.39vw, 24px) clamp(12px, 1.11vw, 16px)' }}>
                <p
                  className="font-dm-sans font-normal mb-4"
                  style={{
                    fontSize: 'clamp(13px, 1.11vw, 16px)',
                    lineHeight: '140%',
                    color: '#1B45B4'
                  }}
                >
                  Strategy · July 20, 2024
                </p>
                <Link
                  href="/insights-innovations"
                  className="font-dm-sans font-bold text-white"
                  style={{
                    display: 'inline-flex',
                    textDecoration: 'none',
                    fontSize: 'clamp(13px, 1.11vw, 16px)',
                    lineHeight: '140%',
                    padding: 'clamp(10px, 1.11vw, 16px) clamp(20px, 2.22vw, 32px)',
                    borderRadius: '10px',
                    background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)'
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Browse All Publications Button */}
          <Link
            href="/insights-innovations"
            className="inline-flex items-center justify-center gap-2 font-inter font-semibold text-white"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              fontSize: 'clamp(15px, 1.47vw, 21.1px)',
              lineHeight: 'clamp(22px, 2.08vw, 30px)',
              padding: 'clamp(16px, 1.53vw, 22px) clamp(20px, 2.22vw, 32px)',
              borderRadius: '82px',
              background: '#14358A',
              border: '2px solid #14358A'
            }}
          >
            Browse All Publications
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Who We Partner With */}
        <div className="mb-20 text-center px-4 mx-auto" style={{ maxWidth: 'min(1440px, 95%)' }}>
          <h3
            className="font-poppins font-semibold text-[#14358A] mb-8"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: 'clamp(32px, 3.19vw, 46px)'
            }}
          >
            Who We Partner With
          </h3>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto mb-16"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: 'clamp(24px, 2.5vw, 36px)',
              maxWidth: 'min(1265px, 90%)'
            }}
          >
            We don't work with everyone. We partner with organizations that are ready to move from 'Strategy as a Document' to 'Strategy as an Operation.' Our strategic partnerships are critical extensions of our functional expertise, expanding our capabilities to deliver seamless, cutting-edge solutions across complex operational landscapes.
          </p>

          <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8 max-w-7xl mx-auto mt-16" style={{ border: '1px solid #e5e7eb', borderRadius: '16px', background: '#ffffff' }}>
            {/* Left Side: Heading and Text */}
            <div className="flex flex-col" style={{ maxWidth: 'min(700px, 90%)' }}>
              <h4
                className="font-dm-sans font-bold tracking-[-0.03em] text-black mb-6"
                style={{
                  fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                  lineHeight: '105%'
                }}
              >
                OneThought Technologies
              </h4>
              <p
                className="font-montserrat font-normal text-[#333333]"
                style={{
                  fontSize: 'clamp(18px, 1.74vw, 25px)',
                  lineHeight: '140%'
                }}
              >
                OneThought Technologies is our premier partner for high-volume BPO and operational technology integration. They leverage top-tier global talent and proprietary tech to resolve complex operational hurdles, ensuring tangible outcomes and seamless, scalable resource solutions.
              </p>
            </div>

            {/* Right Side: Logo */}
            <div className="flex-shrink-0">
              <img
                src="/onethought-logo.png"
                alt="OneThought Technologies Logo"
                style={{ height: 'clamp(100px, 10.42vw, 150px)', width: 'auto' }}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Global Network */}
        <div className="mb-24 text-center px-4 mx-auto" style={{ maxWidth: 'min(1440px, 95%)' }}>
          <h3
            className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-8"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%'
            }}
          >
            Global Network and Strategic Engagements
          </h3>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto mb-12"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: 'clamp(24px, 2.5vw, 36px)',
              maxWidth: 'min(1100px, 90%)'
            }}
          >
            Beyond our direct client engagements, PMG is a trusted strategic partner providing essential domain expertise and services across the global professional and startup ecosystem.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="text-left" style={{ width: 'clamp(380px, 37.22vw, 580px)', border: '1px solid #e5e7eb', borderRadius: '16px', background: '#ffffff', overflow: 'hidden' }}>
              <div className="w-full mb-6 overflow-hidden shadow-sm" style={{ height: 'clamp(140px, 13.33vw, 192px)' }}>
                <img src="/white-label.png" alt="White-Label Consulting Support" className="w-full h-full object-cover" />
              </div>
              <div style={{ padding: '0 clamp(16px, 1.5vw, 24px) clamp(16px, 1.5vw, 24px)' }}>
              <h4
                className="font-dm-sans font-bold tracking-[-0.03em] text-black mb-3"
                style={{
                  fontSize: 'clamp(18px, 1.67vw, 24px)',
                  lineHeight: '110%'
                }}
              >
                White-Label Consulting Support
              </h4>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%',
                  maxWidth: 'min(478px, 90%)'
                }}
              >
                We serve as a confidential, white-label partner to two of the "Big 4" global consulting firms, providing critical technical and specialized support on sensitive projects. This allows these organizations to leverage our unique expertise under their own brand to ensure the highest quality outcomes.
              </p>
              </div>
            </div>

            <div className="text-left" style={{ width: 'clamp(380px, 37.22vw, 580px)', border: '1px solid #e5e7eb', borderRadius: '16px', background: '#ffffff', overflow: 'hidden' }}>
              <div className="w-full mb-6 overflow-hidden shadow-sm" style={{ height: 'clamp(140px, 13.33vw, 192px)' }}>
                <img src="/ecosystem.png" alt="Ecosystem and Advisory Partnerships" className="w-full h-full object-cover" />
              </div>
              <div style={{ padding: '0 clamp(16px, 1.5vw, 24px) clamp(16px, 1.5vw, 24px)' }}>
              <h4
                className="font-dm-sans font-bold tracking-[-0.03em] text-black mb-3"
                style={{
                  fontSize: 'clamp(18px, 1.67vw, 24px)',
                  lineHeight: '110%'
                }}
              >
                Ecosystem and Advisory Partnerships
              </h4>
              <p
                className="font-dm-sans font-normal text-[#68718B]"
                style={{
                  fontSize: 'clamp(13px, 1.11vw, 16px)',
                  lineHeight: '140%',
                  maxWidth: 'min(478px, 90%)'
                }}
              >
                We are proud ecosystem partners with one of the world's most successful startup accelerators, Y Combinator, focusing our services on supporting their emerging incubator projects rather than working with the accelerator directly.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Evolution of Our Logic */}
        <div className="mb-24 text-center px-4 mx-auto" style={{ maxWidth: 'min(1440px, 95%)' }}>
          <h3
            className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A] mb-8"
            style={{
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%'
            }}
          >
            The Evolution of Our Logic
          </h3>
          <p
            className="font-montserrat font-normal text-[#333333] mx-auto mb-24"
            style={{
              fontSize: 'clamp(15px, 1.375vw, 19.8px)',
              lineHeight: 'clamp(24px, 2.5vw, 36px)',
              maxWidth: 'min(1100px, 90%)'
            }}
          >
            Our story is one of relentless innovation and an unwavering commitment to our clients' long-term success.
          </p>

          <AlternatingTimeline
            items={[
              { title: "August 2018", description: "PMG is founded to deliver high-value, tailored consulting solutions that drive strategic business success." },
              { title: "September 2018", description: "PMG secures its first client, cementing our reputation for delivering practical, high-impact results." },
              { title: "November 2018", description: "Expanding nationally, PMG wins a major consulting bid in Halifax, establishing a foothold for growth." },
              { title: "December 2018", description: "PMG launches a whitelabel operating service, enabling clients to maintain seamless operations while focusing on growth." },
              { title: "February 2019", description: "Entering the Vancouver market, PMG continues its rapid expansion with a multi-location restaurant contract." },
              { title: "April 2019", description: "In response to growing demand, PMG welcomes its 20th associate, scaling our expertise to serve more clients." },
              { title: "October 2019", description: "Our influence grows to over 25 locations, with a diverse portfolio of long-term management and strategic projects." },
              { title: "January 2020", description: "PMG expands into the U.S. market, overseeing a 15-location restaurant group in New York." },
              { title: "February 2020", description: "PMG launches a COVID-19 Resiliency Program, helping hotels and restaurants navigate unprecedented challenges." },
              { title: "April 2020", description: "Appointed as lead project manager for a hotel in Dubai, PMG establishes its global consulting footprint." },
              { title: "June 2020", description: "To maximize industry recovery, PMG runs its enhanced COVID-19 support program at cost." },
              { title: "October 2020", description: "Now serving over 50 clients across 60+ locations, PMG becomes a North American industry leader." },
              { title: "March 2021", description: "PMG launches M&A advisory services, guiding clients through complex transactions and restructurings." },
              { title: "July 2021", description: "Investing in talent, PMG launches an accelerated GM training program to cultivate future industry leaders." },
              { title: "May 2022", description: "Having supported over $100M in M&A deals, PMG solidifies its reputation as a trusted transaction partner." },
              { title: "October 2022", description: "PMG partners with a private equity group to launch three luxury hotels in South Africa, expanding our global impact." },
              { title: "February 2023", description: "Shifting to functional consulting, PMG leverages deep specialization to deliver superior, data-driven results." },
              { title: "April 2023", description: "PMG achieves a 20x client ROI for large-scale projects, setting a new industry benchmark for value." },
              { title: "September 2023", description: "Operating in over a dozen countries on four continents, PMG's brand recognition and global presence grow." },
              { title: "January 2024", description: "PMG publishes its revolutionary Sector Convergence Model, accelerating timelines and maximizing client ROI." },
              { title: "April 2024", description: "Evolving into a full-service leader, PMG expands its functional consulting services to meet diverse client needs." },
              { title: "May 2024", description: "PMG dedicates over $250K annually in pro-bono consulting, reaffirming our commitment to community impact." },
              { title: "December 2024", description: "PMG becomes the trusted white-label partner for top-tier consulting firms, delivering expert knowledge management." },
              { title: "July 2025", description: "PMG relaunches its service suite, redesigning our offerings to deliver even greater value and expertise to our clients." },
              { title: "September 2025", description: "PMG relaunches its brand, focusing on the core principles that have always set it apart while making new investments in its public presence to directly compete with larger, established consulting firms. Learn more about the next stage of PMG →" },
            ]}
          />
        </div>
      </div>

      {/* Ready to Write Your Success Story Section */}
      <div className="bg-[#EBF7FF] text-center relative z-0" style={{ paddingTop: 'clamp(40px, 5.56vw, 80px)', paddingBottom: 'clamp(40px, 5.56vw, 80px)' }}>
        <h3
          className="font-dm-sans font-bold text-[#14358A]"
          style={{
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            marginBottom: 'clamp(8px, 0.83vw, 12px)'
          }}
        >
          Ready to Write Your Success Story?
        </h3>
        <p
          className="font-dm-sans font-normal mx-auto"
          style={{
            fontSize: 'clamp(14px, 1.25vw, 18px)',
            lineHeight: '135%',
            textAlign: 'center',
            color: '#68718B',
            maxWidth: 'min(577px, 85%)',
            marginBottom: 'clamp(8px, 0.9vw, 13px)'
          }}
        >
          Now that you know our story, let us help you write yours. Partner with us to leverage our expertise, values, and innovation for your business.
        </p>
        <Link
          href="/contact-us"
          className="font-dm-sans font-bold text-white hover:opacity-95 transition-opacity mx-auto"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontSize: 'clamp(13px, 1.11vw, 16px)',
            lineHeight: '140%',
            width: 'clamp(200px, 17.15vw, 260px)',
            height: 'clamp(44px, 3.75vw, 54px)',
            borderRadius: '10px',
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)'
          }}
        >
          Request a Consultation
        </Link>
      </div>

      <Footer />
    </main >
  );
}
