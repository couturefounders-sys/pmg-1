'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { Gavel } from 'lucide-react';

export default function LegalDocumentsCMS() {
  return (
    <CMSCollectionManager
      icon={Gavel}
      collectionName="legalDocuments"
      title="Legal Documents"
      description="Review and manage the text content for the legal policies on the site."
      displayField="title"
      fields={[
        { name: 'title', label: 'Document Title', type: 'text', required: true, placeholder: 'e.g. Privacy Policy' },
        { name: 'slug', label: 'URL Slug', type: 'text', required: true, placeholder: 'e.g. privacy-policy' },
        { name: 'content', label: 'Document Content', type: 'textarea', required: true, placeholder: 'Full legal text...' },
        { name: 'effectiveDate', label: 'Effective Date', type: 'date' },
        { name: 'lastReviewed', label: 'Last Reviewed Date', type: 'date' },
        { name: 'published', label: 'Published', type: 'boolean' },
      ]}
    />
  );
}
