'use client';
import { useState } from 'react';
import Header from '@/components/Header';

type InquiryItem = {
  iconPath?: string;
  iconEmoji?: string;
  label: string;
};

const inquiryTypes: InquiryItem[] = [
  { iconPath: '/icons/consulting.png', label: 'New Consulting Services' },
  { iconPath: '/icons/existing-consulting.png', label: 'Existing Consulting Services' },
  { iconEmoji: '📰', label: 'Media Inquiry' },
  { iconPath: '/icons/speaking-events.png', label: 'Speaking Engagements & Events' },
  { iconPath: '/icons/vendor-supplier.png', label: 'Vendor & Supplier Inquiries' },
  { iconPath: '/icons/other-business.png', label: 'Other Business Inquiry' },
];

export default function ContactUs() {
  const [selectedInquiry, setSelectedInquiry] = useState(0);
  const [contactMethod, setContactMethod] = useState<'Email' | 'Phone'>('Email');
  const [subject, setSubject] = useState('Inquiry: New Consulting Services');

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* ─── Hero / Form Section ─── */}
      <section className="w-full pt-24 lg:pt-32 xl:pt-36 pb-14 lg:pb-20 xl:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] w-full mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-8 lg:mb-10 xl:mb-12">
            <h1
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(30px, 3.61vw, 52px)',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
                marginBottom: 'clamp(12px, 1.39vw, 20px)',
              }}
            >
              Apply to Partner with Us
            </h1>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.25vw, 18px)',
                lineHeight: '160%',
                color: '#333333',
                maxWidth: 'min(700px, 100%)',
              }}
            >
              We are selective about our partners to ensure every engagement delivers exceptional
              results. Please complete this initial expression of interest. Our team will review
              your submission and contact you if there is a potential fit for a deeper conversation.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-start" style={{ gap: 'clamp(14px, 1.67vw, 24px)' }}>

            {/* ── Left column ── */}
            <div
              className="flex flex-col w-full lg:w-auto flex-shrink-0"
              style={{
                gap: 'clamp(14px, 1.67vw, 24px)',
                flexBasis: 'clamp(240px, 23.6vw, 340px)',
              }}
            >
              {/* Contact Information box */}
              <div
                style={{
                  border: '1.5px solid #14358A',
                  borderRadius: '12px',
                  padding: 'clamp(14px, 1.67vw, 24px)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 1.39vw, 20px)',
                    color: '#14358A',
                    marginBottom: 'clamp(12px, 1.39vw, 20px)',
                  }}
                >
                  Contact Information
                </h2>

                {/* Email */}
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src="/icons/email.png"
                    alt="Email"
                    style={{
                      width: 'clamp(16px, 1.39vw, 20px)',
                      height: 'clamp(16px, 1.39vw, 20px)',
                      marginTop: '2px',
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(12px, 1.04vw, 15px)',
                        color: '#14358A',
                      }}
                    >
                      Email Us
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(11px, 0.97vw, 14px)',
                        color: '#333333',
                      }}
                    >
                      hello@AskPMG.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <img
                    src="/icons/call.png"
                    alt="Call"
                    style={{
                      width: 'clamp(16px, 1.39vw, 20px)',
                      height: 'clamp(16px, 1.39vw, 20px)',
                      marginTop: '2px',
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(12px, 1.04vw, 15px)',
                        color: '#14358A',
                      }}
                    >
                      Call Us
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(11px, 0.97vw, 14px)',
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
                  padding: 'clamp(14px, 1.67vw, 24px)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 1.39vw, 20px)',
                    color: '#14358A',
                    marginBottom: 'clamp(10px, 1.11vw, 16px)',
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
                        padding: 'clamp(7px, 0.83vw, 12px) clamp(9px, 1.11vw, 16px)',
                        borderRadius: '8px',
                        border: `1.5px solid ${selectedInquiry === i ? '#14358A' : 'transparent'}`,
                        cursor: 'pointer',
                        backgroundColor: selectedInquiry === i ? '#14358A' : 'transparent',
                        color: selectedInquiry === i ? '#FFFFFF' : '#333333',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: selectedInquiry === i ? 600 : 400,
                        fontSize: 'clamp(11px, 0.97vw, 14px)',
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                        width: '100%',
                      }}
                    >
                      <span className="flex items-center" style={{ gap: 'clamp(6px, 0.69vw, 10px)' }}>
                        {item.iconPath ? (
                          <img
                            src={item.iconPath}
                            alt=""
                            style={{
                              width: 'clamp(14px, 1.25vw, 18px)',
                              height: 'clamp(14px, 1.25vw, 18px)',
                              objectFit: 'contain',
                              filter: selectedInquiry === i ? 'brightness(0) invert(1)' : 'none',
                              flexShrink: 0,
                            }}
                          />
                        ) : (
                          <span style={{ fontSize: 'clamp(13px, 1.11vw, 16px)' }}>{item.iconEmoji}</span>
                        )}
                        <span>{item.label}</span>
                      </span>
                      <span style={{ fontSize: '14px', opacity: 0.7, marginLeft: '4px', flexShrink: 0 }}>›</span>
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
                padding: 'clamp(16px, 1.94vw, 28px)',
                flex: 1,
                minWidth: 0,
              }}
            >
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.53vw, 22px)',
                  color: '#14358A',
                  marginBottom: 'clamp(14px, 1.67vw, 24px)',
                }}
              >
                Expression of Interest
              </h2>

              <div className="flex flex-col" style={{ gap: 'clamp(12px, 1.39vw, 20px)' }}>

                {/* Row 1: Title + Full Name */}
                <div className="flex" style={{ gap: 'clamp(10px, 1.11vw, 16px)' }}>
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
                <div className="flex" style={{ gap: 'clamp(10px, 1.11vw, 16px)' }}>
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
                          fontSize: 'clamp(12px, 0.97vw, 14px)',
                          cursor: 'pointer',
                        }}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 3: Business Name + Location */}
                <div className="flex" style={{ gap: 'clamp(10px, 1.11vw, 16px)' }}>
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
                        fontSize: 'clamp(11px, 0.83vw, 12px)',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        src="/icons/draft-with-ai.png"
                        alt=""
                        style={{ width: '14px', height: '14px', objectFit: 'contain', flexShrink: 0 }}
                      />
                      Draft with AI
                    </button>
                  </div>
                  <textarea
                    style={{
                      ...inputStyle,
                      height: 'clamp(100px, 9.03vw, 130px)',
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
                    padding: 'clamp(12px, 1.11vw, 16px)',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)',
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 1.11vw, 16px)',
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
  fontSize: 'clamp(11px, 0.9vw, 13px)',
  color: '#333333',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: 'clamp(8px, 0.69vw, 10px) clamp(10px, 0.97vw, 14px)',
  borderRadius: '6px',
  border: '1.5px solid #D0D0D0',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  fontSize: 'clamp(12px, 0.97vw, 14px)',
  color: '#333333',
  outline: 'none',
  backgroundColor: '#FFFFFF',
};
