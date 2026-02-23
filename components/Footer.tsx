export default function Footer() {
  return (
    <footer className="relative z-10" style={{ background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)', minHeight: '431px' }}>
      <div className="max-w-[1440px] mx-auto px-20 py-20">
        <div className="grid grid-cols-5 gap-16">
          {/* Logo Column */}
          <div className="flex items-start">
            <img
              src="/pmg-logo-footer.png"
              alt="PMG Logo"
              style={{ width: '151px', height: '145px', objectFit: 'contain' }}
            />
          </div>

          {/* What we Do Column */}
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Trade Gothic LT Std', sans-serif",
                fontWeight: 700,
                fontSize: '25px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              What we Do
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Our Services</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Our Solutions</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Rebuilding from within</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Why Consulting?</a></li>
            </ul>
          </div>

          {/* Our Content Column */}
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Trade Gothic LT Std', sans-serif",
                fontWeight: 700,
                fontSize: '25px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Our Content
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>FAQs</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Insights & Innovations</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Community Programs</a></li>
            </ul>
            <h3
              className="text-white mt-8 mb-4"
              style={{
                fontFamily: "'Trade Gothic LT Std', sans-serif",
                fontWeight: 700,
                fontSize: '25px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Working with PMG
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Careers</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Licensing</a></li>
            </ul>
          </div>

          {/* Our Models Column */}
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Trade Gothic LT Std', sans-serif",
                fontWeight: 700,
                fontSize: '25px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Our Models
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Sector Convergence Model</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>I-O Enterprise Architecture</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Bussiness Value-Unit Model</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Trade Gothic LT Std', sans-serif",
                fontWeight: 700,
                fontSize: '25px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Privacy & Cookie Policy</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Hiring & Equal Opportunity</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>AI & Data Ethics Statement</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Anti-Modern Slavery Policy</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Intellectual Property</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Regionalization Policy</a></li>
              <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Digital Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
