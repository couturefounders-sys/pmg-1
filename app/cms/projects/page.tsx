'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { Briefcase } from 'lucide-react';

export default function ProjectsCMS() {
  return (
    <CMSCollectionManager
      icon={Briefcase}
      collectionName="projects"
      title="Projects / Case Studies"
      description="Manage the case studies that appear on the 'Our Projects' page."
      displayField="title"
      fields={[
        { name: 'title', label: 'Project Title', type: 'text', required: true, placeholder: 'Project name' },
        { name: 'client', label: 'Client', type: 'text', placeholder: 'Client name' },
        { name: 'industry', label: 'Industry', type: 'select', options: ['SaaS & Enterprise Technology', 'Financial Services & Fintech', 'Higher Education & EdTech', 'Travel, Tourism & Hospitality', 'Food, Beverage & Agribusiness', 'B2B & Professional Services', 'Public Sector & Government', 'Equity Solutions'] },
        { name: 'summary', label: 'Summary', type: 'textarea', required: true, placeholder: 'Brief project description' },
        { name: 'challenge', label: 'Challenge', type: 'textarea', placeholder: 'What challenge was the client facing?' },
        { name: 'solution', label: 'Solution', type: 'textarea', placeholder: 'How did PMG solve it?' },
        { name: 'results', label: 'Results', type: 'textarea', placeholder: 'What were the outcomes?' },
        { name: 'imageUrl', label: 'Image URL', type: 'text', placeholder: 'https://...' },
        { name: 'published', label: 'Published', type: 'boolean' },
      ]}
    />
  );
}
