'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';

export default function ResourcesCMS() {
  return (
    <CMSCollectionManager
      collectionName="resources"
      title="Resources"
      description="Manage the PMG Dictionary and Metacognitive Anti-Concepts."
      displayField="title"
      fields={[
        { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Resource title' },
        { name: 'type', label: 'Type', type: 'select', required: true, options: ['Dictionary Term', 'Anti-Concept', 'Framework', 'Guide'] },
        { name: 'definition', label: 'Definition / Description', type: 'textarea', required: true, placeholder: 'Define or describe the resource' },
        { name: 'example', label: 'Example', type: 'textarea', placeholder: 'Provide an example of usage' },
        { name: 'category', label: 'Category', type: 'text', placeholder: 'e.g. Leadership, Strategy, Operations' },
        { name: 'published', label: 'Published', type: 'boolean' },
      ]}
    />
  );
}
