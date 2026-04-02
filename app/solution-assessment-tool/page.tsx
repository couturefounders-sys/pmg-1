'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const businessAreas = [
  'Growth & Revenue',
  'Operations & Efficiency',
  'People & Culture',
  'Technology & Digital',
  'Finance & Risk',
  'Strategy & M&A',
];

export default function SolutionAssessmentTool() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [involvement, setInvolvement] = useState(50);
  const [criticality, setCriticality] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [specificSolution, setSpecificSolution] = useState('');
  const [showSolutionField, setShowSolutionField] = useState(false);

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Hero / Form Section ─── */}
      <FadeInSection delay={0} direction="up">
      <section className="w-full pt-36 pb-24 px-6">
        <div className="max-w-[min(900px,_90%)] mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-10">
            <h1
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '20px',
              }}
            >
              PMG Engagement Advisor
            </h1>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#333333',
                textAlign: 'center',
                maxWidth: 'min(600px, 95%)',
              }}
            >
              This advisor applies the same diagnostic framework our consultants use in discovery calls. Answer a few questions to get a preliminary recommendation on which PMG engagement model would be most effective for your situation.
            </p>
          </div>

          {/* Form Card */}
          <div
            style={{
              borderTop: '1.6px solid #E5E7EB',
              borderRight: '1.5px solid #D0D9F0',
              borderBottom: '1.5px solid #D0D9F0',
              borderLeft: '1.5px solid #D0D9F0',
              borderRadius: '16px',
              padding: '40px 36px',
              background: '#FFFFFF',
            }}
          >
            {/* Q1: Business Area */}
            <div style={{ marginBottom: '32px', borderTop: '1.6px solid #E5E7EB', paddingTop: '32px' }}>
              <label
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  color: '#333333',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                What area of your business needs improvement?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                {businessAreas.map(area => (
                  <label
                    key={area}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(11px, 0.9vw, 15px)',
                      color: '#333333',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAreas.includes(area)}
                      onChange={() => toggleArea(area)}
                      style={{ accentColor: '#14358A', width: '14px', height: '14px' }}
                    />
                    {area}
                  </label>
                ))}
              </div>
            </div>

            {/* Q2: Involvement Slider */}
            <div style={{ marginBottom: '32px' }}>
              <label
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  color: '#333333',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                How involved do you want to be?
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={involvement}
                onChange={e => setInvolvement(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#14358A' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#5F6D7E' }}>We Advise, You Execute</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#5F6D7E' }}>We Execute, You Advise</span>
              </div>
            </div>

            {/* Q3 + Q4: Two columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px', borderTop: '0.8px solid #D1D5DC', paddingTop: '32px' }}>
              <div>
                <label
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    color: '#333333',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  How critical is this to your business?
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={criticality === '' ? 0 : Number(criticality)}
                  onChange={e => setCriticality(e.target.value)}
                  style={{ width: '100%', accentColor: '#14358A' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#5F6D7E' }}>Low</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#5F6D7E' }}>High</span>
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    color: '#333333',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  What is your ideal timeframe for a solution?
                </label>
                <select
                  value={timeframe}
                  onChange={e => setTimeframe(e.target.value)}
                  style={{
                    width: '100%',
                    border: '0.8px solid #D1D5DC',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    color: timeframe === '' ? '#9CA3AF' : '#333333',
                    outline: 'none',
                    boxSizing: 'border-box',
                    background: '#FFFFFF',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">&lt;3 Months</option>
                  <option value="<3 Months">&lt;3 Months</option>
                  <option value="3-6 Months">3–6 Months</option>
                  <option value="6-12 Months">6–12 Months</option>
                  <option value="12+ Months">12+ Months</option>
                </select>
              </div>
            </div>

            {/* Q5: Company Size */}
            <div style={{ marginBottom: '24px', borderTop: '0.8px solid #D1D5DC', paddingTop: '32px' }}>
              <label
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  color: '#333333',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Company Size <span style={{ color: '#D0021B' }}>*</span>
              </label>
              <input
                type="text"
                value={companySize}
                onChange={e => setCompanySize(e.target.value)}
                placeholder=""
                style={{
                  width: '100%',
                  border: '0.8px solid #D1D5DC',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                  color: '#333333',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Specific solution toggle */}
            <div style={{ marginBottom: '28px' }}>
              <button
                onClick={() => setShowSolutionField(v => !v)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(11px, 0.9vw, 15px)',
                  color: '#5F6D7E',
                  padding: 0,
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: '1.5px solid #5F6D7E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    flexShrink: 0,
                  }}
                >
                  i
                </span>
                Already considering a specific PMG solution? Click to tell us.
              </button>
              {showSolutionField && (
                <input
                  type="text"
                  value={specificSolution}
                  onChange={e => setSpecificSolution(e.target.value)}
                  placeholder="e.g. Bespoke Solutions, Equity Solutions…"
                  style={{
                    width: '100%',
                    border: '1.5px solid #D0D9F0',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                    color: '#333333',
                    outline: 'none',
                    boxSizing: 'border-box',
                    marginTop: '10px',
                  }}
                />
              )}
            </div>

            {/* Submit */}
            <button
              style={{
                width: '100%',
                background: '#14358A',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(12px, 1.07vw, 15.4px)',
                padding: '16px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get Your Recommendation
            </button>
          </div>

        </div>
      </section>
      </FadeInSection>

      <Footer />
    </main>
  );
}
