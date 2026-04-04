'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { Map } from 'lucide-react';

export default function SitemapCMS() {
  return (
    <CMSCollectionManager
      icon={Map}
      collectionName="sitemapEntries"
      title="Sitemap"
      description="View all the publicly accessible URLs that are indexed by search engines."
      displayField="url"
      fields={[
        { name: 'url', label: 'URL Path', type: 'text', required: true, placeholder: 'e.g. /about' },
        { name: 'title', label: 'Page Title', type: 'text', required: true, placeholder: 'Page title for SEO' },
        { name: 'description', label: 'Meta Description', type: 'textarea', placeholder: 'SEO meta description' },
        { name: 'priority', label: 'Priority', type: 'select', options: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3'] },
        { name: 'changeFrequency', label: 'Change Frequency', type: 'select', options: ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'] },
        { name: 'indexed', label: 'Indexed', type: 'boolean' },
      ]}
    />
  );
}
