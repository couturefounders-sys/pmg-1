import { CSSProperties, ReactNode } from 'react';

interface BlueSectionWrapperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function BlueSectionWrapper({ children, className = '', style }: BlueSectionWrapperProps) {
  return (
    <section
      className={`w-full relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)',
        ...style,
      }}
    >
      {/* Decorative overlay */}
      <img
        src="/desi design.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          pointerEvents: 'none',
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
