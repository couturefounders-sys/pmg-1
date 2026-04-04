'use client';

import { useEffect, useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import { getCollection, FirestoreDoc } from '@/lib/firestore';

interface TestimonialDoc extends FirestoreDoc {
  name?: string;
  role?: string;
  quote?: string;
  featured?: boolean;
}

const fallbackTestimonials: TestimonialDoc[] = [
  {
    id: 'fallback-1',
    name: 'Jill Kramer',
    role: 'Chief Marketing and Communications Officer',
    quote:
      'Generative AI tools can drive greater creativity and productivity across marketing operations.',
    featured: true,
  },
  {
    id: 'fallback-2',
    name: 'Nitin Tandon',
    role: 'Chief Information Officer',
    quote:
      'The right AI platform combines team expertise with modern capability to improve execution speed.',
    featured: true,
  },
];

export default function HomeTestimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialDoc[]>(fallbackTestimonials);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const docs = (await getCollection('testimonials', 'createdAt', 'desc')) as TestimonialDoc[];
        const featured = docs.filter((item) => item.featured === true);
        const next = (featured.length > 0 ? featured : docs).slice(0, 3);
        if (active && next.length > 0) {
          setTestimonials(next);
        }
      } catch {
        // Keep fallback content when Firestore is unavailable.
      }
    };

    void load();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="flex justify-center flex-wrap px-4" style={{ gap: 'clamp(16px, 1.67vw, 32px)', marginBottom: 'clamp(40px, 4.5vw, 80px)' }}>
      {testimonials.map((c, i) => (
        <FadeInSection key={c.id} delay={i * 0.1}>
          <div className="bg-white rounded-xl w-full sm:w-auto testimonial-card" style={{ maxWidth: '380px', minWidth: 'min(280px, 100%)', flex: '1 1 clamp(260px, 23vw, 380px)', minHeight: 'clamp(300px, 29.93vw, 480px)', padding: 'clamp(20px, 1.67vw, 32px)', boxShadow: '0px 2.26px 12.06px 0px #EBEEFA' }}>
            <p className="font-poppins mb-6" style={{ fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '26.4px', fontWeight: 400, color: '#333' }}>
              &ldquo;{String(c.quote || '')}&rdquo;
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', color: '#000' }}>
                {String(c.name || '')}
              </p>
              <p className="font-poppins" style={{ fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '22px', fontWeight: 400, color: '#000' }}>
                {String(c.role || '')}
              </p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}
