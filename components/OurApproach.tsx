"use client";

// ─── POSITION TUNING ────────────────────────────────────────────────────────
// left: percentage across the container width  (0 = left edge, 100 = right edge)
// top:  percentage of container HEIGHT          (0 = top edge,  100 = bottom edge)
//
// The container uses a 16:9-ish aspect ratio so height scales with width —
// meaning these percentages look the same on every screen size.
//
// Keep left between 0–85 and top between 0–85 to stay in view.

const POSITIONS = {
  step1: { left: 5,  top: 0  },   // "Uncover Strategic Growth Avenues"
  step2: { left: 60, top: 0  },   // "Develop a Resilient Strategic Roadmap"
  step3: { left: 30, top: 62 },   // "Empower Your Organization for the Future"
};
// ────────────────────────────────────────────────────────────────────────────

export default function OurApproach() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2
          className="text-center font-bold mb-6"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "50px",
            lineHeight: "105%",
            letterSpacing: "-1.5px",
            color: "#14358A",
          }}
        >
          Our Approach
        </h2>

        {/* Description */}
        <p
          className="text-center max-w-4xl mx-auto mb-16"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            lineHeight: "160%",
            color: "#4A5568",
          }}
        >
          Our approach is a unique blend of deep functional expertise and rigorous
          systems thinking. We solve complex problems by drawing on successful cross-
          sector strategies, identifying hidden value, and crafting customized execution
          roadmaps.
        </p>

        {/* Roadmap Container */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: "450px" }}>

          {/* Step 1 */}
          <div
            className="absolute w-56 text-center"
            style={{ left: `${POSITIONS.step1.left}%`, top: `${POSITIONS.step1.top}%` }}
          >
            <h3
              className="font-bold mb-2"
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", color: "#14358A" }}
            >
              Uncover Strategic Growth Avenues
            </h3>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: "150%", color: "#6B7280" }}>
              We identify emerging market trends and cross-sectoral
              opportunities to develop compelling strategies for long-
              term dominance.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="absolute w-56 text-center"
            style={{ left: `${POSITIONS.step2.left}%`, top: `${POSITIONS.step2.top}%` }}
          >
            <h3
              className="font-bold mb-2"
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", color: "#14358A" }}
            >
              Develop a Resilient Strategic Roadmap
            </h3>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: "150%", color: "#6B7280" }}>
              We create a clear and actionable roadmap that can
              withstand market volatility and position your
              organization for long-term success.
            </p>
          </div>

          {/* Roadmap SVG */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[130px] w-full"
            style={{ maxWidth: "900px" }}
          >
            <svg
              viewBox="0 0 1200 240"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Main horizontal line */}
              <line x1="80" y1="120" x2="1120" y2="120" stroke="#14358A" strokeWidth="14" strokeLinecap="round" />

              {/* Circle 1 */}
              <circle cx="230" cy="120" r="40" fill="white" stroke="#14358A" strokeWidth="10" />
              <text x="230" y="120" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="600">1</text>

              {/* Circle 2 */}
              <circle cx="570" cy="120" r="40" fill="white" stroke="#14358A" strokeWidth="10" />
              <text x="570" y="120" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="600">2</text>

              {/* Circle 3 */}
              <circle cx="910" cy="120" r="40" fill="white" stroke="#14358A" strokeWidth="10" />
              <text x="910" y="120" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="600">3</text>

              {/* Left up-branch from Circle 1 */}
              <path d="M230 120 C 230 80 180 60 140 40" fill="none" stroke="#14358A" strokeWidth="14" strokeLinecap="round" />
              <circle cx="140" cy="40" r="14" fill="#14358A" />

              {/* Down branch from Circle 2 */}
              <path d="M570 120 C 570 165 545 185 525 205" fill="none" stroke="#14358A" strokeWidth="14" strokeLinecap="round" />
              <circle cx="525" cy="205" r="14" fill="#14358A" />

              {/* Right up-branch from Circle 3 */}
              <path d="M910 120 C 960 80 1000 60 1040 40" fill="none" stroke="#14358A" strokeWidth="14" strokeLinecap="round" />
              <circle cx="1040" cy="40" r="14" fill="#14358A" />
            </svg>
          </div>

          {/* Step 3 */}
          <div
            className="absolute w-64 text-center"
            style={{ left: `${POSITIONS.step3.left}%`, top: `${POSITIONS.step3.top}%` }}
          >
            <h3
              className="font-bold mb-2"
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", color: "#14358A" }}
            >
              Empower Your Organization for the Future
            </h3>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: "150%", color: "#6B7280" }}>
              We provide strategic guidance, leadership
              development, and organizational change
              management to ensure successful execution.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
