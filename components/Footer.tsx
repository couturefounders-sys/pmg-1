import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        background: 'linear-gradient(135deg, #1B45B4 0%, #0D1A7A 100%)'
      }}
    >
      <div style={{ paddingTop: 'clamp(32px, 3.5vw, 56px)', paddingBottom: 'clamp(32px, 3.5vw, 56px)' }}>
        <div style={{ maxWidth: 'min(92%, 2200px)', margin: '0 auto', paddingLeft: 'clamp(24px, 5.2vw, 80px)', paddingRight: 'clamp(16px, 2vw, 40px)' }}>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
          style={{
            gap: 'clamp(16px, 2.2vw, 40px)'
          }}
        >
          {/* Logo Column */}
          <div>
            <img
              src="/pmg-logo-footer.png"
              alt="PMG"
              style={{
                width: 'clamp(70px, 7vw, 110px)',
                height: 'auto'
              }}
            />
          </div>

          {/* What we Do Column */}
          <div>
            <h3
              className="text-white font-semibold mb-4 uppercase"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, letterSpacing: '0.77px', lineHeight: '22px' }}
            >
              What we Do
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 8px)' }}>
              <li><Link href="/our-solutions" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Our Services</Link></li>
              <li><Link href="/our-solutions" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Our Solutions</Link></li>
              <li><Link href="/power-of-working-with-us" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Rebuilding from within</Link></li>
              <li><Link href="/why-functional-consulting" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Why Consulting?</Link></li>
            </ul>
          </div>

          {/* Our Content + Working with PMG Column */}
          <div>
            <h3
              className="text-white font-semibold mb-4 uppercase"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, letterSpacing: '0.77px', lineHeight: '22px' }}
            >
              Our Content
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 8px)' }}>
              <li><Link href="/faqs" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>FAQs</Link></li>
              <li><Link href="/insights-innovations" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Insights &amp; Innovations</Link></li>
              <li><Link href="/community-involvement" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Community Programs</Link></li>
            </ul>
            <h3
              className="text-white font-semibold mb-4 uppercase"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, letterSpacing: '0.77px', lineHeight: '22px', marginTop: 'clamp(10px, 0.9vw, 16px)' }}
            >
              Working with PMG
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 8px)' }}>
              <li><Link href="/careers" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Careers</Link></li>
              <li><Link href="/licensing" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Licensing</Link></li>
            </ul>
          </div>

          {/* Our Models Column */}
          <div>
            <h3
              className="text-white font-semibold mb-4 uppercase"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, letterSpacing: '0.77px', lineHeight: '22px' }}
            >
              Our Models
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 8px)' }}>
              <li><Link href="/sector-convergence-model" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Sector Convergence Model</Link></li>
              <li><Link href="/io-architecture-model" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>I-O Enterprise Architecture</Link></li>
              <li><Link href="/business-value-unit-model" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Bussiness Value-Unit Model</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              className="text-white font-semibold mb-4 uppercase"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, letterSpacing: '0.77px', lineHeight: '22px' }}
            >
              Legal
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 8px)' }}>
              <li><Link href="/legal/privacy-policy" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Privacy &amp; Cookie Policy</Link></li>
              <li><Link href="/legal/hiring-and-equal-opportunity" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Hiring &amp; Equal Opportunity</Link></li>
              <li><Link href="/legal/ai-and-data-ethics-statement" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>AI &amp; Data Ethics Statement</Link></li>
              <li><Link href="/legal/anti-modern-slavery-policy" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Anti-Modern Slavery Policy</Link></li>
              <li><Link href="/legal/intellectual-property" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Intellectual Property</Link></li>
              <li><Link href="/legal/regionalization-policy" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Regionalization Policy</Link></li>
              <li><Link href="/legal/digital-terms-of-use" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Digital Terms of Use</Link></li>
              <li><Link href="/legal/information-accuracy-and-success-metrics-policy" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>IASM Policy</Link></li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Section with CMS & Cookie Settings */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 'clamp(16px, 1.5vw, 24px)',
          paddingBottom: 'clamp(16px, 1.5vw, 24px)',
          paddingLeft: 'clamp(24px, 5.2vw, 80px)',
          paddingRight: 'clamp(16px, 2vw, 40px)',
        }}
      >
        <div style={{ maxWidth: 'min(92%, 2200px)', margin: '0 auto', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link
            href="/cms"
            className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity"
            style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}
          >
            CMS
          </Link>
          <a
            href="#"
            className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity"
            style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}
          >
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
