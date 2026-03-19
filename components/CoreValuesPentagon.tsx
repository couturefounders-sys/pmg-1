'use client';

import { useState } from 'react';

const VALUES = [
  {
    id: 'Integrity',
    cx: 300,
    cy: 80,
    labelX: 300,
    labelY: 42,
    labelAnchor: 'middle' as const,
    description:
      'Unwavering honesty and transparency are the foundation of every action. We earn the long-term trust of our clients through consistent, principled behaviour and candid counsel.',
  },
  {
    id: 'Respect',
    cx: 509,
    cy: 232,
    labelX: 528,
    labelY: 228,
    labelAnchor: 'start' as const,
    description:
      'We value diverse global perspectives and approach every situation with an open mind. We believe inclusivity is a catalyst for better solutions and collective success.',
  },
  {
    id: 'Innovation',
    cx: 429,
    cy: 478,
    labelX: 448,
    labelY: 478,
    labelAnchor: 'start' as const,
    description:
      'Driven by a passion for creative thinking, we embrace innovation as a catalyst for growth, progress, and unlocking positive change.',
  },
  {
    id: 'Excellence',
    cx: 171,
    cy: 478,
    labelX: 152,
    labelY: 478,
    labelAnchor: 'end' as const,
    description:
      'We are dedicated to the pursuit of world-class mastery in our functional domains. We view excellence as an ongoing journey of refinement, continuous learning, and delivering high-impact results.',
  },
  {
    id: 'Principled\nSincerity',
    cx: 91,
    cy: 232,
    labelX: 72,
    labelY: 228,
    labelAnchor: 'end' as const,
    description:
      'We commit to genuine self-expression and sincerity, fostering meaningful relationships built on candid communication and professional vulnerability.',
  },
];

// All 10 diagonals between the 5 vertices
const DIAGONALS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 2], [1, 3], [1, 4],
  [2, 3], [2, 4],
  [3, 4],
];

export default function CoreValuesPentagon() {
  const [active, setActive] = useState('Integrity');

  const activeValue = VALUES.find((v) => v.id === active || v.id.replace('\n', ' ') === active) || VALUES[0];

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <svg
        viewBox="0 0 600 560"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* All diagonal lines */}
        {DIAGONALS.map(([i, j]) => (
          <line
            key={`d-${i}-${j}`}
            x1={VALUES[i].cx}
            y1={VALUES[i].cy}
            x2={VALUES[j].cx}
            y2={VALUES[j].cy}
            stroke="#C8CCE0"
            strokeWidth="1.5"
          />
        ))}

        {/* Pentagon outline */}
        <polygon
          points="300,80 509,232 429,478 171,478 91,232"
          stroke="#C8CCE0"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Center content via foreignObject */}
        <foreignObject x="150" y="195" width="300" height="180">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '8px',
              boxSizing: 'border-box',
              transition: 'opacity 0.3s ease',
            }}
          >
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '1.2',
                color: '#14358A',
                marginBottom: '8px',
              }}
            >
              {activeValue.id.replace('\n', ' ')}
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '11px',
                lineHeight: '1.5',
                color: '#5F5F5F',
              }}
            >
              {activeValue.description}
            </div>
          </div>
        </foreignObject>

        {/* Vertex groups */}
        {VALUES.map((v) => {
          const isActive = active === v.id;
          const label = v.id.split('\n');
          // Vertical offset for multi-line labels
          const lineHeight = 16;
          const totalHeight = label.length * lineHeight;
          const startY = v.labelY - (totalHeight / 2) + (lineHeight / 2);

          return (
            <g
              key={v.id}
              onMouseEnter={() => setActive(v.id)}
              style={{ cursor: 'pointer' }}
            >
              {/* Dot */}
              <circle
                cx={v.cx}
                cy={v.cy}
                r={14}
                fill={isActive ? '#1C2B6A' : 'white'}
                stroke="#1C2B6A"
                strokeWidth={2}
                style={{ transition: 'fill 0.2s ease' }}
              />

              {/* Labels */}
              {label.map((line, idx) => (
                <text
                  key={idx}
                  x={v.labelX}
                  y={startY + idx * lineHeight}
                  textAnchor={v.labelAnchor}
                  dominantBaseline="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="13"
                  fontWeight={isActive ? '700' : '400'}
                  fill="#14358A"
                  style={{ transition: 'font-weight 0.2s ease' }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
