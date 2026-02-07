'use client';

import Header from '@/components/Header';

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
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src="/logo.png" alt="PMG" style={{ height: '40px', width: 'auto' }} />
              <h2 className="text-[#14358A] font-bold text-4xl">PMG Consulting</h2>
            </div>
            <p
              className="font-dm-sans font-normal mb-8 text-center"
              style={{
                fontSize: '20px',
                lineHeight: '135%',
                color: '#333333'
              }}
            >
              Driving Industries Forward
            </p>
            <p
              className="font-montserrat font-normal mx-auto text-center px-4"
              style={{
                fontSize: '30px',
                lineHeight: '40px',
                color: '#333333',
                maxWidth: '1405px'
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
            style={{ maxHeight: '450px' }}
          />
        </div>

        {/* Data Analytics Heading */}
        <div className="mb-16 text-center max-w-[800px] mx-auto px-4">
          <h3 className="font-dm-sans font-bold text-[48px] leading-[105%] tracking-[-0.03em] text-[#14358A]">
            We make it easy to track <br className="hidden md:block" />
            all <br className="hidden md:block" />
            data analytics
          </h3>
        </div>

        {/* Strategic Pillars Cards */}
        <div className="max-w-[1300px] mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 - Functional Mastery */}
            <div className="border-[3px] border-[#14358A] rounded-[10px] p-8 w-full max-w-[410px] min-h-[260px] flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300">
              <img src="/icon-functional.png" alt="Functional Mastery Icon" width={64} height={64} className="mb-6" />
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-4">
                Functional Mastery
              </h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">
                We don't just know your industry; we master the functions that drive it, from P&L engineering to workflow architecture.
              </p>
            </div>

            {/* Card 2 - Passion for Results */}
            <div className="border-[3px] border-[#14358A] rounded-[10px] p-8 w-full max-w-[410px] min-h-[260px] flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300">
              <img src="/icon-passion.png" alt="Passion for Results Icon" width={64} height={64} className="mb-6" />
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-4">
                Passion for Results
              </h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">
                Our dedication to execution means we own the outcome. This relentless drive accelerates project timelines and ensures we exceed key performance indicators.
              </p>
            </div>

            {/* Card 3 - An Expert Network */}
            <div className="border-[3px] border-[#14358A] rounded-[10px] p-8 w-full max-w-[410px] min-h-[260px] flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300">
              <img src="/icon-network.png" alt="Expert Network Icon" width={64} height={64} className="mb-6" />
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-4">
                An Expert Network
              </h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">
                A curated global network of functional specialists ensures clients receive bespoke expertise, providing a decisive advantage in complex markets.
              </p>
            </div>

            {/* Card 4 - Relentless Innovation */}
            <div className="border-[3px] border-[#14358A] rounded-[10px] p-8 w-full max-w-[410px] min-h-[260px] flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300">
              <img src="/icon-innovation.png" alt="Relentless Innovation Icon" width={64} height={64} className="mb-6" />
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-4">
                Relentless Innovation
              </h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">
                We embed future-proof strategies into your operations, positioning your business to immediately capitalize on new market opportunities.
              </p>
            </div>

            {/* Card 5 - People-Focused Leadership */}
            <div className="border-[3px] border-[#14358A] rounded-[10px] p-8 w-full max-w-[410px] min-h-[260px] flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300">
              <img src="/icon-leadership.png" alt="People-Focused Leadership Icon" width={64} height={64} className="mb-6" />
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-4">
                People-Focused Leadership
              </h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">
                We focus on talent and organizational design to ensure change management is effective, accelerating adoption and securing long-term institutional value.
              </p>
            </div>

            {/* Card 6 - Evidence-Based Strategy */}
            <div className="border-[3px] border-[#14358A] rounded-[10px] p-8 w-full max-w-[410px] min-h-[260px] flex flex-col items-start justify-start text-left bg-white hover:shadow-lg transition-shadow duration-300">
              <img src="/icon-evidence.png" alt="Evidence-Based Strategy Icon" width={64} height={64} className="mb-6" />
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-4">
                Evidence-Based Strategy
              </h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">
                We replace "gut feelings" with forensic data analysis, ensuring every move is backed by quantifiable reality.
              </p>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mt-24 mb-20 text-center">
          <div className="flex justify-center items-center px-4">
            <img
              src="/core-values.png"
              alt="Our Core Values - Principled Integrity, Individualism, Respect, Excellence"
              className="max-w-full h-auto"
              style={{ maxWidth: '1400px' }}
            />
          </div>
        </div>

        {/* Read Our Latest Insights */}
        {/* Read Our Latest Insights */}
        <div className="mb-20 text-center bg-[#F9FAFB] py-16">


          <div className="flex justify-center items-center px-4 mb-24 overflow-hidden">
            <img
              src="/insights-section.png"
              alt="Read Our Latest Insights - The Hidden Risks of AI Expansion, The Unseen Edge"
              className="max-w-full h-auto relative left-[-2px]"
              style={{ maxWidth: '1000px' }}
            />
          </div>
        </div>

        {/* Who We Partner With */}
        <div className="mb-20 text-center px-4 max-w-[1440px] mx-auto">
          <h3 className="font-poppins font-semibold text-[50px] leading-[46px] text-[#14358A] mb-8">Who We Partner With</h3>
          <p className="font-montserrat font-normal text-[30px] leading-[36px] text-[#333333] max-w-[1265px] mx-auto mb-16">
            We don't work with everyone. We partner with organizations that are ready to move from 'Strategy as a Document' to 'Strategy as an Operation.' Our strategic partnerships are critical extensions of our functional expertise, expanding our capabilities to deliver seamless, cutting-edge solutions across complex operational landscapes.
          </p>

          <div className="flex items-start justify-center gap-16 flex-wrap mt-16">
            <div className="max-w-[853px] text-left">
              <h4 className="font-dm-sans font-bold text-[32px] leading-[105%] tracking-[-0.03em] text-black mb-6">OneThought Technologies</h4>
              <p className="font-montserrat font-normal text-[25px] leading-[140%] text-[#333333]">
                OneThought Technologies is our premier partner for high-volume BPO and operational technology integration. They leverage top-tier global talent and proprietary tech to resolve complex operational hurdles, ensuring tangible outcomes and seamless, scalable resource solutions.
              </p>
            </div>
            <div className="flex-shrink-0 pt-4">
              <img
                src="/onethought-logo.png"
                alt="OneThought Technologies Logo"
                style={{ height: '150px', width: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Global Network */}
        <div className="mb-24 text-center px-4 max-w-[1440px] mx-auto">
          <h3 className="font-dm-sans font-bold text-[48px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-12">Global Network and Strategic Engagements</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="w-[536px] text-left">
              <div className="h-[192px] w-full mb-6 rounded-lg overflow-hidden shadow-sm">
                <img src="/white-label.png" alt="White-Label Consulting Support" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-dm-sans font-bold text-[24px] leading-[110%] tracking-[-0.03em] text-black mb-3">White-Label Consulting Support</h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B] max-w-[478px]">
                We serve as a confidential, white-label partner to two of the "Big 4" global consulting firms, providing critical technical and specialized support on sensitive projects. This allows these organizations to leverage our unique expertise under their own brand to ensure the highest quality outcomes.
              </p>
            </div>

            <div className="w-[536px] text-left">
              <div className="h-[192px] w-full mb-6 rounded-lg overflow-hidden shadow-sm">
                <img src="/ecosystem.png" alt="Ecosystem and Advisory Partnerships" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-dm-sans font-bold text-[24px] leading-[110%] tracking-[-0.03em] text-black mb-3">Ecosystem and Advisory Partnerships</h4>
              <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B] max-w-[478px]">
                We are proud ecosystem partners with one of the world's most successful startup accelerators, Y Combinator, focusing our services on supporting their emerging incubator projects rather than working with the accelerator directly.
              </p>
            </div>
          </div>
        </div>

        {/* Evolution of Our Logic */}
        <div className="mb-24 text-center px-4 max-w-[1440px] mx-auto">
          <h3 className="font-dm-sans font-bold text-[48px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-8">The Evolution of Our Logic</h3>
          <p className="font-montserrat font-normal text-[30px] leading-[36px] text-[#333333] max-w-[1100px] mx-auto mb-24">
            Our story is one of relentless innovation and an unwavering commitment to our clients' long-term success.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#006FBA] transform -translate-x-1/2 rounded-full"></div>

            {/* Timeline Items */}
            <div className="relative z-10 space-y-24">
              {[
                { date: "August 2018", text: "PMG is founded to deliver high-value, tailored consulting solutions that drive strategic business success." },
                { date: "September 2018", text: "PMG secures its first client, cementing our reputation for delivering practical, high-impact results." },
                { date: "November 2018", text: "Expanding nationally, PMG wins a major consulting bid in Halifax, establishing a foothold for growth." },
                { date: "December 2018", text: "PMG launches a whitelabel operating service, enabling clients to maintain seamless operations while focusing on growth." },
                { date: "February 2019", text: "Entering the Vancouver market, PMG continues its rapid expansion with a multi-location restaurant contract." },
                { date: "April 2019", text: "In response to growing demand, PMG welcomes its 20th associate, scaling our expertise to serve more clients." },
                { date: "October 2019", text: "Our influence grows to over 25 locations, with a diverse portfolio of long-term management and strategic projects." },
                { date: "January 2020", text: "PMG expands into the U.S. market, overseeing a 15-location restaurant group in New York." },
                { date: "February 2020", text: "PMG launches a COVID-19 Resiliency Program, helping hotels and restaurants navigate unprecedented challenges." },
                { date: "April 2020", text: "Appointed as lead project manager for a hotel in Dubai, PMG establishes its global consulting footprint." },
                { date: "March 2021", text: "PMG launches M&A advisory services, guiding clients through complex transactions and restructurings." },
                { date: "July 2021", text: "Investing in talent, PMG launches an accelerated GM training program to cultivate future industry leaders." },
                { date: "May 2022", text: "Having supported over $100M in M&A deals, PMG solidifies its reputation as a trusted transaction partner." },
                { date: "October 2022", text: "PMG partners with a private equity group to launch three luxury hotels in South Africa, expanding our global impact." },
                { date: "February 2022", text: "Shifting to functional consulting, PMG leverages deep specialization to deliver superior, data-driven results." },
                { date: "April 2023", text: "PMG achieves a 20x client ROI for large-scale projects, setting a new industry benchmark for value." },
                { date: "September 2023", text: "Operating in over a dozen countries on four continents, PMG's brand recognition and global presence grow." },
                { date: "January 2024", text: "PMG publishes its revolutionary Sector Convergence Model, accelerating timelines and maximizing client ROI." },
                { date: "April 2024", text: "Evolving into a full-service leader, PMG expands its functional consulting services to meet diverse client needs." },
                { date: "July 2025", text: "PMG relaunches its service suite, redesigning our offerings to deliver even greater value and expertise to our clients." },
                { date: "September 2025", text: "PMG relaunches its brand, focusing on the core principles that have always set it apart while making new investments in its public presence to directly compete with larger, established consulting firms." }
              ].map((item, index) => (
                <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Box */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'} relative`}>
                    {/* Shadow/Offset Box */}
                    <div
                      className={`absolute ${index % 2 === 0 ? 'right-[50px] top-[8px]' : 'left-[50px] top-[8px]'} w-full max-w-[412px] h-full`}
                      style={{
                        border: '3px solid #006FBA',
                        borderRadius: '16px',
                        zIndex: 0
                      }}
                    ></div>

                    {/* Main Card */}
                    <div
                      className="inline-block w-full max-w-[412px] p-6 relative bg-white"
                      style={{
                        background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(270.31deg, #14358A 0.32%, #006FBA 97.73%) border-box',
                        border: '3px solid transparent',
                        borderRadius: '16px',
                        zIndex: 1,
                        position: 'relative'
                      }}
                    >
                      <h4 className="text-[#14358A] font-bold font-dm-sans text-[24px] mb-3">{item.date}</h4>
                      <p className="font-dm-sans font-normal text-[16px] leading-[140%] text-[#68718B]">{item.text}</p>
                    </div>
                    {/* Dotted Connector */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 border-t-2 border-dotted border-[#006FBA] w-12 ${index % 2 === 0 ? 'right-4' : 'left-4'}`}
                      style={{ zIndex: 2 }}
                    ></div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#006FBA] border-4 border-white shadow-sm z-20"></div>

                  {/* Empty Space for Balance */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
            {/* End Cap */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[4px] h-12 bg-[#006FBA]"></div>
          </div>
        </div>
      </div>

      {/* Ready to Define Your Success Story Section */}
      <div className="bg-[#EBF7FF] pt-24 pb-32 text-center relative z-0">
        <h3 className="font-dm-sans font-bold text-[48px] leading-[105%] tracking-[-0.03em] text-[#14358A] mb-6">Ready to Write Your Success Story?</h3>
        <p className="font-dm-sans font-normal text-[18px] leading-[135%] text-[#68718B] max-w-[577px] mx-auto mb-10">
          Now that you know our story, let us help you write yours. Partner with us to leverage our expertise, values, and innovation for your business.
        </p>
        <button
          className="text-white font-bold text-[16px] shadow-lg hover:opacity-95 transition-opacity px-8 py-3"
          style={{
            background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
            borderRadius: '10px'
          }}
        >
          Request a Consultation
        </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pt-32 pb-20" style={{ background: '#1B45B4', clipPath: 'polygon(0 70px, 100% 0, 100% 100%, 0 100%)', marginTop: '-70px' }}>
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-5 gap-16">
            {/* Logo Column */}
            <div>
              <img src="/logo.png" alt="PMG Logo" style={{ width: '120px', height: 'auto' }} />
            </div>

            {/* What we Do Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                What we Do
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Our Services</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Our Content
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>FAQs</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Community Programs</a></li>
              </ul>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mt-8 mb-4" style={{ lineHeight: '100%' }}>
                Working with PMG
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Careers</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Licensing</a></li>
              </ul>
            </div>

            {/* Our Models Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Our Models
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '100%' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main >
  );
}
