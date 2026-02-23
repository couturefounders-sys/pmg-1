'use client';

import { useState } from 'react';
import Header from '@/components/Header';

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
      <section className="w-full pt-36 pb-24 px-6">
        <div className="max-w-[700px] mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-10">
            <h1
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '1.2',
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
                fontSize: '30px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#333333',
                textAlign: 'center',
                maxWidth: '600px',
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
                  fontSize: '15px',
                  color: '#1a1a1a',
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
                      fontSize: '13px',
                      color: '#3A3A3A',
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
                  fontSize: '15px',
                  color: '#1a1a1a',
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
                    fontSize: '14px',
                    color: '#1a1a1a',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  How critical is this to your business?
                </label>
                <input
                  type="text"
                  value={criticality}
                  onChange={e => setCriticality(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    border: '0.8px solid #D1D5DC',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1a1a1a',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  What is your ideal timeframe for a solution?
                </label>
                <input
                  type="text"
                  value={timeframe}
                  onChange={e => setTimeframe(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    border: '0.8px solid #D1D5DC',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Q5: Company Size */}
            <div style={{ marginBottom: '24px', borderTop: '0.8px solid #D1D5DC', paddingTop: '32px' }}>
              <label
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#1a1a1a',
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
                  fontSize: '14px',
                  color: '#1a1a1a',
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
                  fontSize: '13px',
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
                    fontSize: '14px',
                    color: '#1a1a1a',
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
                fontSize: '15px',
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

      {/* ─── Footer ─── */}
      <footer
        className="text-white pt-16 pb-12 px-6 relative z-20"
        style={{ background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <img
                  src="/pmg-logo-footer.png"
                  alt="PMG Logo"
                  className="object-contain"
                  style={{ width: '100px', height: 'auto' }}
                />
              </div>
            </div>

            {/* What we Do */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">What we Do</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Our Solutions</a></li>
                <li><a href="#" className="hover:text-white">Rebuilding from within</a></li>
                <li><a href="#" className="hover:text-white">Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content & Working with PMG */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-dm-sans font-bold text-xl mb-4">Our Content</h4>
                <ul className="space-y-2 font-dm-sans text-white/80">
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                  <li><a href="#" className="hover:text-white">Insights &amp; Innovations</a></li>
                  <li><a href="#" className="hover:text-white">Community Programs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-dm-sans font-bold text-xl mb-4">Working with PMG</h4>
                <ul className="space-y-2 font-dm-sans text-white/80">
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Licensing</a></li>
                </ul>
              </div>
            </div>

            {/* Our Models */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">Our Models</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Sector Convergence Model</a></li>
                <li><a href="#" className="hover:text-white">I-O Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-white">Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">Legal</h4>
              <ul className="space-y-2 font-dm-sans text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">Privacy &amp; Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">Hiring &amp; Equal Opportunity</a></li>
                <li><a href="#" className="hover:text-white">AI &amp; Data Ethics Statement</a></li>
                <li><a href="#" className="hover:text-white">Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="hover:text-white">Intellectual Property</a></li>
                <li><a href="#" className="hover:text-white">Regionalization Policy</a></li>
                <li><a href="#" className="hover:text-white">Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
