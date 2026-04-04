'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { Star } from 'lucide-react';

export default function TestimonialsCMS() {
  return (
    <CMSCollectionManager
      icon={Star}
      collectionName="testimonials"
      title="Testimonials"
      description="Add, update, or remove client testimonials displayed on the homepage."
      displayField="name"
      fields={[
        { name: 'name', label: 'Client Name', type: 'text', required: true, placeholder: 'Full name' },
        { name: 'role', label: 'Role / Title', type: 'text', placeholder: 'e.g. CEO, Head of Strategy' },
        { name: 'company', label: 'Company', type: 'text', placeholder: 'Company name' },
        { name: 'quote', label: 'Testimonial Quote', type: 'textarea', required: true, placeholder: 'What did the client say?' },
        { name: 'imageUrl', label: 'Photo URL', type: 'text', placeholder: 'https://...' },
        { name: 'rating', label: 'Rating (1-5)', type: 'number' },
        { name: 'featured', label: 'Featured on Homepage', type: 'boolean' },
      ]}
    />
  );
}
