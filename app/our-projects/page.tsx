'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import FadeInSection from '@/components/FadeInSection';

export default function OurProjects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    'Strategy & Operations',
    'People & Organizations',
    'Customer Experience',
    'M&A',
    'Branding & Marketing',
    'BPO & Fractional Talent',
    'Crisis & Transition',
  ];

  const projects: any[] = []; // Empty array - no projects to display

  const filteredProjects = selectedFilters.length === 0
    ? projects
    : projects.filter(project =>
        selectedFilters.some(filter => project.categories.includes(filter))
      );

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(100px,9.86vw,142px)] pb-12">
        <h1
          className="text-center mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '46px',
            color: '#14358A',
          }}
        >
          Our Projects
        </h1>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterOptions.map((filter) => {
            const isSelected = selectedFilters.includes(filter);
            return (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilters(prev =>
                    isSelected
                      ? prev.filter(f => f !== filter)
                      : [...prev, filter]
                  );
                }}
                className="px-6 py-2 rounded-full transition-all"
                style={{
                  background: isSelected ? '#14358A' : '#F0F0F0',
                  color: isSelected ? '#FFFFFF' : '#333333',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Filter Projects Text */}
        <div className="text-center mb-8">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.39vw, 22px)',
              lineHeight: '100%',
              color: '#000000',
            }}
          >
            Filter Projects
          </p>
        </div>

        {/* No Projects Message */}
        <div className="text-center py-20">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.74vw, 28px)',
              lineHeight: '100%',
              color: '#000000',
            }}
          >
            No projects match the selected filters.
          </p>
        </div>
      </div>
      </FadeInSection>

      {/* Global Network Section */}
      <FadeInSection delay={0.1} direction="up">
      <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Global Network and Strategic Engagements
        </h2>

        <p
          className="text-center mb-16 mx-auto"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.53vw, 22px)',
            lineHeight: '140%',
            color: '#333333',
            maxWidth: 'min(1201px, 95%)',
          }}
        >
          Beyond our direct client engagements, PMG is a trusted strategic partner providing essential domain expertise and services across the global professional and startup ecosystem.
        </p>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {/* White-Label Consulting Support */}
          <div
            className="bg-white p-8 rounded-lg"
            style={{ border: '3px solid #14358A' }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.67vw, 28px)',
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: '#000000',
              }}
            >
              White-Label Consulting Support
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              We serve as a confidential, white-label partner to two of the "Big 4" global consulting firms, providing critical technical and specialized support on sensitive projects. This allows these organizations to leverage our unique expertise under their own brand to ensure the highest quality outcomes.
            </p>
          </div>

          {/* Ecosystem and Advisory Partnerships */}
          <div
            className="bg-white p-8 rounded-lg"
            style={{ border: '3px solid #14358A' }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.67vw, 28px)',
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: '#000000',
              }}
            >
              Ecosystem and Advisory Partnerships
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              We are proud ecosystem partners with one of the world's most successful startup accelerators, Y Combinator, focusing our services on supporting their emerging incubator projects rather than working with the accelerator directly.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-12 mt-16 flex-wrap">
          <img src="/image 21.png" alt="Partner Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          <img src="/image 22.png" alt="Partner Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
