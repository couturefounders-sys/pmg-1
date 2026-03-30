'use client';

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface ProjectCardData {
  title: string;
  stats: Stat[];
}

const DollarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
    <circle cx="14" cy="14" r="6" stroke="#006FBA" strokeWidth="2"/>
    <path d="M14 11V17M12 14.5H16" stroke="#006FBA" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TrendUpIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
    <path d="M8 18L12 13L16 15L20 10" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 10H20V13" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ScreenIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
    <rect x="6" y="10" width="16" height="10" rx="1" stroke="#006FBA" strokeWidth="2"/>
    <circle cx="11" cy="15" r="2" stroke="#006FBA" strokeWidth="1.5"/>
    <path d="M17 20L15 17L13 19" stroke="#006FBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="26" height="26" rx="4" stroke="#006FBA" strokeWidth="2"/>
    <path d="M10 14L13 17L19 11" stroke="#006FBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export { DollarIcon, TrendUpIcon, ScreenIcon, CheckIcon };

const defaultProjects: ProjectCardData[] = [
  {
    title: 'Trilogy Software',
    stats: [
      { icon: <DollarIcon />, value: '$8M', label: 'in annual support costs saved' },
      { icon: <TrendUpIcon />, value: '16%', label: 'increase in Customer Satisfaction' },
      { icon: <ScreenIcon />, value: '77x', label: 'Return on Investment' },
    ],
  },
  {
    title: 'Kraken',
    stats: [
      { icon: <DollarIcon />, value: '3,500', label: 'ticket backlog eliminated' },
      { icon: <ScreenIcon />, value: '65%', label: 'reduction in first-response time' },
      { icon: <CheckIcon />, value: '23x', label: 'Return on Investment' },
    ],
  },
  {
    title: 'Artemis Capital',
    stats: [
      { icon: <DollarIcon />, value: '22%', label: 'reduction in customer churn' },
      { icon: <ScreenIcon />, value: '14%', label: 'increase in post-acquisition margin' },
      { icon: <CheckIcon />, value: '20x', label: 'Return on Investment' },
    ],
  },
];

function ProjectCard({ title, stats }: ProjectCardData) {
  return (
    <div
      className="bg-white relative overflow-hidden"
      style={{
        width: 'clamp(280px, 26.46vw, 381px)',
        minHeight: '378px',
        borderRadius: '10px',
        border: '1px solid #E0E7EF',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
      }}
    >
      {/* Pattern Overlay */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: '375px',
          height: 'clamp(160px, 16.67vw, 240px)',
          background: '#EBF7FF',
          clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col" style={{ gap: '24px' }}>
        <h3
          className="font-dm-sans font-bold text-center"
          style={{
            fontSize: 'clamp(16px, 1.53vw, 22px)',
            lineHeight: '1.1',
            letterSpacing: '-0.9px',
            color: '#006FBA',
          }}
        >
          {title}
        </h3>

        <div className="flex flex-col" style={{ gap: '20px' }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="flex items-center" style={{ gap: '8px' }}>
                {stat.icon}
                <p
                  className="font-dm-sans font-bold"
                  style={{ fontSize: 'clamp(18px, 1.67vw, 28px)', lineHeight: '1.1', letterSpacing: '-0.72px', color: '#006FBA' }}
                >
                  {stat.value}
                </p>
              </div>
              <p
                className="font-dm-sans font-normal"
                style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '1.4', color: '#68718B', marginTop: '4px' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More Button */}
      <div className="mt-auto mx-auto relative z-10">
        <button
          className="font-dm-sans font-bold text-white hover:opacity-90 transition-opacity"
          style={{
            width: 'clamp(120px, 10.9vw, 157px)',
            height: 'clamp(44px, 4.17vw, 60px)',
            borderRadius: '10px',
            padding: '16px 32px',
            background: 'linear-gradient(137.73deg, #6A36FF 15.76%, #AC5FE6 102.86%)',
            fontSize: 'clamp(15px, 1.39vw, 22px)',
            lineHeight: '1.4',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

interface OurProjectsSectionProps {
  projects?: ProjectCardData[];
  backgroundImage?: string;
}

export default function OurProjectsSection({
  projects = defaultProjects,
  backgroundImage = '/projects-bg-financial.webp',
}: OurProjectsSectionProps) {
  return (
    <div
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '852px',
      }}
    >
      {/* Decorative Rectangle - Top Right */}
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
      {/* Decorative Rectangle - Bottom Left */}
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
      {/* Decorative Border Rectangle - Top Left */}
      <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />

      <div className="max-w-[min(1300px,_95%)] mx-auto relative z-10">
        <h2
          className="font-dm-sans font-bold text-white text-center mb-16"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(24px, 2.75vw, 39.6px)',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
          }}
        >
          Our Projects
        </h2>

        <div className="flex justify-center flex-wrap" style={{ gap: 'clamp(24px, 4.44vw, 64px)' }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
