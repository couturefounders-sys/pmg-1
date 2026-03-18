'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from 'recharts';

const data = [
  { year: '2018', roi: 8 },
  { year: '2020', roi: 13 },
  { year: '2025+', roi: 22 },
];

/* Custom dot that renders a filled circle + label above-right */
const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  return (
    <g>
      <circle cx={cx} cy={cy} r={8} fill="#1C2792" stroke="#fff" strokeWidth={2} />
      <text
        x={cx + 14}
        y={cy + 5}
        fontFamily="DM Sans, sans-serif"
        fontWeight={700}
        fontSize={16}
        fill="#1C2792"
      >
        {payload.roi}x
      </text>
    </g>
  );
};

/* Tooltip hidden — labels are drawn directly on the dots */
const NullTooltip = () => null;

export default function ROIChart() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      style={{
        borderRadius: '10px',
        border: '3px solid #14358A',
        padding: '32px 28px 20px',
        background: '#fff',
        width: '100%',
        position: 'relative',
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 30, right: 70, left: 40, bottom: 8 }}>
          <CartesianGrid vertical={false} stroke="#E5EAF4" strokeWidth={1} />
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 15,
              fill: '#5F6D7E',
              fontWeight: 500,
            }}
            dy={12}
          />
          <YAxis hide domain={[4, 26]} />
          <Tooltip content={<NullTooltip />} />
          <Line
            type="linear"
            dataKey="roi"
            stroke="#1C2792"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={false}
            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* "How we calculate this" footnote */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px', marginTop: '8px', position: 'relative' }}>
        <span
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '13px',
            color: '#5F6D7E',
            cursor: 'pointer',
          }}
          onClick={() => setShowInfo(!showInfo)}
        >
          How we calculate this
        </span>
        <button
          onClick={() => setShowInfo(!showInfo)}
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            border: '1.5px solid #5F6D7E',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
          aria-label="How we calculate ROI"
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '11px', color: '#5F6D7E', lineHeight: 1 }}>i</span>
        </button>

        {showInfo && (
          <div
            style={{
              position: 'absolute',
              bottom: '28px',
              right: 0,
              background: '#fff',
              border: '2px solid #14358A',
              borderRadius: '10px',
              padding: '16px 20px',
              maxWidth: '320px',
              boxShadow: '0 4px 24px rgba(20,53,138,0.12)',
              zIndex: 10,
            }}
          >
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: '1.7', color: '#333333', margin: 0 }}>
              ROI is calculated as the measurable value created for clients (cost savings, revenue uplift, efficiency gains) divided by total engagement fees. Data points represent median outcomes across completed engagements in that period.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
