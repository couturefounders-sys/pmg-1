'use client';

import { useState } from 'react';

// x, y are percentage positions (0-100) relative to the map container
// Adjust any city's x/y to reposition its marker on the map
const CITIES = [
  { name: 'Ankara', address: 'Ankara, Türkiye', x: 58.79, y: 32.3 },
  { name: 'Aspen', address: 'Aspen, USA', x: 17.79, y: 30.08 },
  { name: 'Bedford', address: 'Bedford, Canada', x: 28.6, y: 27.99 },
  { name: 'Bengaluru', address: 'Bengaluru, India', x: 67.96, y: 45.2 },
  { name: 'Bethesda', address: 'Bethesda, USA', x: 26.1, y: 31.61 },
  { name: 'Bordeaux', address: 'Bordeaux, France', x: 47.05, y: 28 },
  { name: 'Boston', address: 'Boston, USA', x: 28.67, y: 29.47 },
  { name: 'Bucharest', address: 'Bucharest, Romania', x: 56.32, y: 30.19 },
  { name: 'Calgary', address: 'Calgary, Canada', x: 17.82, y: 19.72 },
  { name: 'Cape Town', address: 'Cape Town, South Africa', x: 52.08, y: 68.24 },
  { name: 'Chicago', address: 'Chicago, USA', x: 22.78, y: 28.6 },
  { name: 'Cleveland', address: 'Cleveland, USA', x: 23.55, y: 26.40 },
  { name: 'Cupertino', address: 'Cupertino, USA', x: 15.2, y: 30.9 },
  { name: 'Dallas', address: 'Dallas, USA', x: 21.95, y: 33.95 },
  { name: 'Dubai', address: 'Dubai, UAE', x: 61.95, y: 38.33 },
  { name: 'Edmonton', address: 'Edmonton, Canada', x: 16.12, y: 18.29 },
  { name: 'Fredericton', address: 'Fredericton, Canada', x:  28.6, y: 24.98 },
  { name: 'Gqeberha', address: 'Gqeberha, South Africa', x: 54.58, y: 67.53 },
  { name: 'Halifax', address: 'Halifax, Canada', x: 29.49, y: 27.19 },
  { name: 'Hamilton', address: 'Hamilton, Canada', x: 26.14, y: 25.69 },
  { name: 'Hong Kong', address: 'Hong Kong SAR, China', x: 78.9, y: 39.9 },
  { name: 'Houston', address: 'Houston, USA', x: 21.93, y: 36.77 },
  { name: 'Hyderabad', address: 'Hyderabad, India', x: 69.00, y: 44.24 },
  { name: 'Indianapolis', address: 'Indianapolis, USA', x: 23.6, y: 29.45 },
  { name: 'Isle of Man', address: 'Isle of Man, UK', x: 46.20, y: 21.19 },
  { name: 'Jacksonville', address: 'Jacksonville, USA', x: 25.26, y: 35.43 },
  { name: 'Jersey', address: 'Jersey, UK', x: 46.9, y: 25.03 },
  { name: 'Johannesburg', address: 'Johannesburg, South Africa', x: 53.8, y: 63.65 },
  { name: 'Kamloops', address: 'Kamloops, Canada', x: 15.31, y: 20.55 },
  { name: 'Kelowna', address: 'Kelowna, Canada', x: 16.03, y: 21.29 },
  { name: 'Kormangala', address: 'Kormangala, India', x: 67.87, y: 46.73 },
  { name: 'Lisbon', address: 'Lisbon, Portugal', x: 45.29, y: 32.26 },
  { name: 'London', address: 'London, Canada', x: 24.47, y:27.19 },
  { name: 'London UK', address: 'London, UK', x: 47.17, y: 21.9 },
  { name: 'Los Angeles', address: 'Los Angeles, USA', x: 15.27, y: 32.37},
  { name: 'Lunenburg', address: 'Lunenburg, Canada', x: 29.4, y: 28.69 },
  { name: 'Manila', address: 'Manila, Philippines', x: 81, y: 44.93 },
  { name: 'Melbourne', address: 'Melbourne, Australia', x: 85.61, y: 69.59 },
  { name: 'Miami', address: 'Miami, USA', x: 25.25, y: 38.29 },
  { name: 'Moncton', address: 'Moncton, Canada', x: 28.6, y: 26.4 },
  { name: 'Montreal', address: 'Montreal, Canada', x: 27.84, y: 22.76 },
  { name: 'Mumbai', address: 'Mumbai, India', x: 67, y: 42.80 },
  { name: 'New York', address: 'New York, USA', x: 27.89, y: 30.16 },
  { name: 'Newark', address: 'Newark, USA', x: 26.94, y: 29.36 },
  { name: 'Niagara Falls', address: 'Niagara Falls, Canada', x: 24.48, y: 25.69 },
  { name: 'Ottawa', address: 'Ottawa, Canada', x: 26.94, y: 23.39 },
  { name: 'Peterborough', address: 'Peterborough, Canada', x: 26.14, y: 24.19 },
  { name: 'Phoenix', address: 'Phoenix, USA', x: 16.90, y: 33.87 },
  { name: 'Port Hawkesbury', address: 'Port Hawkesbury, Canada', x: 30.29, y: 27.99 },
  { name: 'Portland', address: 'Portland, USA', x: 15.29, y: 24.96 },
  { name: 'Pretoria', address: 'Pretoria, South Africa', x: 54.68, y: 62.90 },
  { name: 'Prince George', address: 'Prince George, Canada', x: 13.57, y: 19 },
  { name: 'Puebla', address: 'Puebla, Mexico', x: 19.48, y: 39.2 },
  { name: 'Richmond Hill', address: 'Richmond Hill, Canada', x: 26.15, y: 22.69 },
  { name: 'Riyadh', address: 'Riyadh, Saudi Arabia', x: 61.2, y: 40.82 },
  { name: 'Sacramento', address: 'Sacramento, USA', x: 15.21, y: 29.44 },
  { name: 'San Diego', address: 'San Diego, USA', x: 15.27, y: 33.87 },
  { name: 'San Francisco', address: 'San Francisco, USA', x: 14.42, y: 30 },
  { name: 'Seattle', address: 'Seattle, USA', x: 15.20, y: 23.48 },
  { name: 'Sydney', address: 'Sydney, Australia', x: 87.27, y: 68.12 },
  { name: 'Toronto', address: 'Toronto, Canada', x: 25.3, y: 25},
  { name: 'Vancouver', address: 'Vancouver, Canada', x: 15.3, y: 21.98 },
  { name: 'Vaughan', address: 'Vaughan, Canada', x: 23.58, y: 25 },
  { name: 'Victoria', address: 'Victoria, Canada', x: 14.41, y: 22.74 },
  { name: 'Wolfville', address: 'Wolfville, Canada', x: 27.84, y: 27.12 },
];

export default function HexWorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src="/worldmap.svg"
        alt="PMG Global Presence"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        draggable={false}
      />
      {CITIES.map((city) => {
        const isActive = hovered === city.name;
        const isRight = city.x > 75;
        const isTop = city.y < 20;

        return (
          <div
            key={city.name}
            style={{
              position: 'absolute',
              left: `${city.x}%`,
              top: `${city.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isActive ? 20 : 1,
            }}
            onMouseEnter={() => setHovered(city.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Hover zone */}
            <div
              style={{
                width: 16,
                height: 16,
                cursor: 'pointer',
                position: 'relative',
              }}
            />
            {/* Red hex marker */}
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                opacity: 0,
                transition: 'opacity 0.15s',
              }}
            >
              <polygon
                points="5,0 9.33,2.5 9.33,7.5 5,10 0.67,7.5 0.67,2.5"
                fill="#E53E3E"
              />
            </svg>
            {/* Tooltip */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  bottom: isTop ? undefined : '100%',
                  top: isTop ? '100%' : undefined,
                  left: isRight ? undefined : '50%',
                  right: isRight ? '50%' : undefined,
                  transform: isRight ? 'translateX(50%)' : 'translateX(-50%)',
                  marginBottom: isTop ? 0 : 8,
                  marginTop: isTop ? 8 : 0,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 8,
                    padding: '8px 14px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#1a1a2e',
                    lineHeight: 1.4,
                    textAlign: 'center',
                  }}
                >
                  {city.address.split(', ').map((part, i) => (
                    <div key={i}>{part}</div>
                  ))}
                </div>
                {/* Arrow */}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: isTop ? 'none' : '6px solid #fff',
                    borderBottom: isTop ? '6px solid #fff' : 'none',
                    margin: '0 auto',
                    position: 'relative',
                    top: isTop ? -1 : undefined,
                    bottom: isTop ? undefined : undefined,
                    transform: isTop ? 'rotate(180deg)' : undefined,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
