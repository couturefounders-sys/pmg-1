'use client';
import { useState } from 'react';
import Header from '@/components/Header';

const inquiryTypes = [
  { icon: '🏢', label: 'New Consulting Services' },
  { icon: '📋', label: 'Existing Consulting Services' },
  { icon: '📰', label: 'Media Inquiry' },
  { icon: '🎤', label: 'Speaking Engagements & Events' },
  { icon: '🛒', label: 'Vendor & Supplier Inquiries' },
  { icon: '❓', label: 'Other Business Inquiry' },
];

export default function ContactUs() {
  const [selectedInquiry, setSelectedInquiry] = useState(0);
  const [contactMethod, setContactMethod] = useState<'Email' | 'Phone'>('Email');
  const [subject, setSubject] = useState('Inquiry: New Consulting Services');

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Hero / Form Section ─── */}
      <section className="w-full pt-36 pb-24 px-6">
        <div className="max-w-[860px] mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-12">
            <h1
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '52px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: '20px',
              }}
            >
              Apply to Partner with Us
            </h1>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '160%',
                color: '#333333',
                maxWidth: '700px',
              }}
            >
              We are selective about our partners to ensure every engagement delivers exceptional
              results. Please complete this initial expression of interest. Our team will review
              your submission and contact you if there is a potential fit for a deeper conversation.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-6 w-full md:w-[340px] flex-shrink-0">

              {/* Contact Information box */}
              <div
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#14358A',
                    marginBottom: '20px',
                  }}
                >
                  Contact Information
                </h2>

                {/* Email */}
                <div className="flex items-start gap-3 mb-4">
                  <span style={{ color: '#14358A', fontSize: '18px', marginTop: '2px' }}>✉</span>
                  <div>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '15px',
                        color: '#14358A',
                      }}
                    >
                      Email Us
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#333333',
                      }}
                    >
                      hello@AskPMG.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span style={{ color: '#14358A', fontSize: '18px', marginTop: '2px' }}>📞</span>
                  <div>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '15px',
                        color: '#14358A',
                      }}
                    >
                      Call Us
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#333333',
                      }}
                    >
                      +1 (519) 783-1579
                    </p>
                  </div>
                </div>
              </div>

              {/* Inquiry type box */}
              <div
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#14358A',
                    marginBottom: '16px',
                  }}
                >
                  What is your primary inquiry?
                </h2>

                <div className="flex flex-col gap-2">
                  {inquiryTypes.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedInquiry(i);
                        setSubject(`Inquiry: ${item.label}`);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: selectedInquiry === i ? '#14358A' : 'transparent',
                        color: selectedInquiry === i ? '#FFFFFF' : '#333333',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: selectedInquiry === i ? 600 : 400,
                        fontSize: '14px',
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span style={{ fontSize: '16px' }}>{item.icon}</span>
                        {item.label}
                      </span>
                      <span style={{ fontSize: '16px', opacity: 0.7 }}>›</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right column: form ── */}
            <div
              style={{
                border: '1.5px solid #14358A',
                borderRadius: '12px',
                padding: '28px',
                flex: 1,
                width: '100%',
              }}
            >
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#14358A',
                  marginBottom: '24px',
                }}
              >
                Expression of Interest
              </h2>

              <div className="flex flex-col gap-5">

                {/* Row 1: Title + Full Name */}
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1 flex-1">
                    <label style={labelStyle}>Title</label>
                    <input style={inputStyle} type="text" />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <label style={labelStyle}>Full Name</label>
                    <input style={inputStyle} type="text" placeholder="John Doe" />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1 flex-1">
                    <label style={labelStyle}>Email Address</label>
                    <input style={inputStyle} type="email" placeholder="you@example.com" />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <label style={labelStyle}>Phone Number</label>
                    <input style={inputStyle} type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="flex flex-col gap-2">
                  <label style={labelStyle}>Preferred Contact Method</label>
                  <div className="flex gap-3">
                    {(['Email', 'Phone'] as const).map((method) => (
                      <button
                        key={method}
                        onClick={() => setContactMethod(method)}
                        style={{
                          padding: '8px 20px',
                          borderRadius: '6px',
                          border: `1.5px solid ${contactMethod === method ? '#14358A' : '#D0D0D0'}`,
                          backgroundColor: contactMethod === method ? '#EEF1F8' : '#FFFFFF',
                          color: contactMethod === method ? '#14358A' : '#666666',
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: contactMethod === method ? 600 : 400,
                          fontSize: '14px',
                          cursor: 'pointer',
                        }}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 3: Business Name + Location */}
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1 flex-1">
                    <label style={labelStyle}>Business/Organization Name</label>
                    <input style={inputStyle} type="text" placeholder="Acme Inc." />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <label style={labelStyle}>Business Location (Optional)</label>
                    <input style={inputStyle} type="text" />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label style={labelStyle}>Subject</label>
                  <input
                    style={inputStyle}
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <label style={labelStyle}>Message</label>
                    <button
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1.5px solid #6A36FF',
                        backgroundColor: '#FFFFFF',
                        color: '#6A36FF',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      ✦ Draft with AI
                    </button>
                  </div>
                  <textarea
                    style={{
                      ...inputStyle,
                      height: '130px',
                      resize: 'none',
                      paddingTop: '12px',
                    }}
                    placeholder="Tell us about your challenge and what you hope to achieve..."
                  />
                </div>

                {/* Submit */}
                <button
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)',
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '4px',
                  }}
                >
                  Submit Inquiry
                </button>
              </div>
            </div>
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
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">What we Do</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Our Solutions</a></li>
                <li><a href="#" className="hover:text-white">Rebuilding from within</a></li>
                <li><a href="#" className="hover:text-white">Why Consulting?</a></li>
              </ul>
            </div>
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
            <div>
              <h4 className="font-dm-sans font-bold text-xl mb-4">Our Models</h4>
              <ul className="space-y-2 font-dm-sans text-white/80">
                <li><a href="#" className="hover:text-white">Sector Convergence Model</a></li>
                <li><a href="#" className="hover:text-white">I-O Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-white">Bussiness Value-Unit Model</a></li>
              </ul>
            </div>
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

const labelStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '13px',
  color: '#333333',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '6px',
  border: '1.5px solid #D0D0D0',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  color: '#333333',
  outline: 'none',
  backgroundColor: '#FFFFFF',
};
