import { CSSProperties, ReactNode } from 'react';

interface BlueSectionDecoratedProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function BlueSectionDecorated({ children, className = '', style }: BlueSectionDecoratedProps) {
  return (
    <section
      className={`w-full relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1B45B4 0%, #1C2792 100%)',
        ...style,
      }}
    >
      {/* Decorative Rectangle - Top Right */}
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', right: '-20px', top: '40px', background: '#0097FE', transform: 'rotate(-15deg)', transformOrigin: 'right center' }} />
      {/* Decorative Rectangle - Bottom Left */}
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '70px', left: '-20px', bottom: '40px', background: '#0097FE', opacity: 0.5, transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />
      {/* Decorative Border Rectangle - Top Left */}
      <div className="absolute pointer-events-none" style={{ width: '315px', height: '111px', left: '-20px', top: '30px', background: 'transparent', border: '1px solid #66C1FF', transform: 'rotate(-15deg)', transformOrigin: 'left center' }} />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
