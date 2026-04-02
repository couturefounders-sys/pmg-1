'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  duration = 1500,
  decimals,
  className,
  style,
}: Props) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const precision =
    typeof decimals === 'number'
      ? decimals
      : (() => {
          const fraction = end.toString().split('.')[1];
          return fraction ? Math.min(fraction.length, 2) : 0;
        })();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {precision > 0
        ? count.toFixed(precision).replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1')
        : Math.round(count)}
      {suffix}
    </span>
  );
}
