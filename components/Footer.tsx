export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        background: 'linear-gradient(135deg, #1B45B4 0%, #0D1A7A 100%)',
        paddingTop: 'clamp(48px, 6vw, 100px)',
        paddingBottom: 'clamp(60px, 9.6vw, 150px)'
      }}
    >
      <div style={{ maxWidth: 'min(92%, 2200px)', margin: '0 auto', paddingLeft: 'clamp(24px, 5.2vw, 80px)', paddingRight: 'clamp(16px, 2vw, 40px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'clamp(16px, 2.2vw, 40px)'
          }}
        >
          {/* Logo Column */}
          <div>
            <img
              src="/pmg-logo-footer.png"
              alt="PMG"
              style={{
                width: 'clamp(100px, 10.5vw, 170px)',
                height: 'auto'
              }}
            />
          </div>

          {/* What we Do Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '100%' }}
            >
              What we Do
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.83vw, 14px)' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Our Services</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Our Solutions</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Rebuilding from within</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Why Consulting?</a></li>
            </ul>
          </div>

          {/* Our Content + Working with PMG Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '100%' }}
            >
              Our Content
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.83vw, 14px)' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>FAQs</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Insights &amp; Innovations</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Community Programs</a></li>
            </ul>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '100%', marginTop: 'clamp(14px, 1.53vw, 26px)' }}
            >
              Working with PMG
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.83vw, 14px)' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Careers</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Licensing</a></li>
            </ul>
          </div>

          {/* Our Models Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '100%' }}
            >
              Our Models
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.83vw, 14px)' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Sector Convergence Model</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>I-O Enterprise Architecture</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Bussiness Value-Unit Model</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: 'clamp(16px, 1.74vw, 28px)', lineHeight: '100%' }}
            >
              Legal
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.83vw, 14px)' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Privacy &amp; Cookie Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Hiring &amp; Equal Opportunity</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>AI &amp; Data Ethics Statement</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Intellectual Property</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Regionalization Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: 'clamp(13px, 1.39vw, 22px)', lineHeight: 'normal', display: 'block' }}>Digital Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
