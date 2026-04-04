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
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Our Services</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Our Solutions</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Rebuilding from within</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Why Consulting?</a></li>
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
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>FAQs</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Insights &amp; Innovations</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Community Programs</a></li>
            </ul>
            <h3
              className="text-white font-semibold mb-4 uppercase"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 600, letterSpacing: '0.77px', lineHeight: '22px', marginTop: 'clamp(10px, 0.9vw, 16px)' }}
            >
              Working with PMG
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 8px)' }}>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Careers</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Licensing</a></li>
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
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Sector Convergence Model</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>I-O Enterprise Architecture</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Bussiness Value-Unit Model</a></li>
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
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Privacy &amp; Cookie Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Hiring &amp; Equal Opportunity</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>AI &amp; Data Ethics Statement</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Intellectual Property</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Regionalization Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-normal opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', fontWeight: 400, lineHeight: '22px', display: 'block' }}>Digital Terms of Use</a></li>
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
