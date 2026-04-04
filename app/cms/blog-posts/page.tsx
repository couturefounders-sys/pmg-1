'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { Newspaper } from 'lucide-react';

export default function BlogPostsCMS() {
  return (
    <CMSCollectionManager
      icon={Newspaper}
      collectionName="blogPosts"
      title="Blog Posts"
      description="Create, edit, and delete articles for the Insights & Innovations page."
      displayField="title"
      fields={[
        { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter post title' },
        { name: 'slug', label: 'URL Slug', type: 'text', required: true, placeholder: 'e.g. my-blog-post' },
        { name: 'author', label: 'Author', type: 'text', required: true, placeholder: 'Author name' },
        { name: 'category', label: 'Category', type: 'select', options: ['Insights', 'Innovations', 'Industry', 'Strategy', 'Technology'] },
        { name: 'summary', label: 'Summary', type: 'textarea', placeholder: 'Brief summary for the listing page' },
        { name: 'content', label: 'Content', type: 'textarea', required: true, placeholder: 'Full article content' },
        { name: 'imageUrl', label: 'Featured Image URL', type: 'text', placeholder: 'https://...' },
        { name: 'published', label: 'Published', type: 'boolean' },
      ]}
    />
  );
}
