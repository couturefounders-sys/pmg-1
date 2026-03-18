'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DocumentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="12" height="16" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
    <path d="M8 7h6M8 10h6M8 13h4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14 2v4h4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cmsCards = [
  {
    title: 'Blog Posts',
    description: 'Create, edit, and delete articles for the Insights & Innovations page.',
    buttonLabel: 'Manage Blog Posts',
    href: '/cms/blog-posts',
  },
  {
    title: 'Announcements',
    description: 'Manage the upcoming article announcement banner on the Insights page.',
    buttonLabel: 'Manage Announcements',
    href: '/cms/announcements',
  },
  {
    title: 'Projects / Case Studies',
    description: "Manage the case studies that appear on the 'Our Projects' page.",
    buttonLabel: 'Manage Projects / Case Studies',
    href: '/cms/projects',
  },
  {
    title: 'Testimonials',
    description: 'Add, update, or remove client testimonials displayed on the homepage.',
    buttonLabel: 'Manage Testimonials',
    href: '/cms/testimonials',
  },
  {
    title: 'Resources',
    description: 'Manage the PMG Dictionary and Metacognitive Anti-Concepts.',
    buttonLabel: 'Manage Resources',
    href: '/cms/resources',
  },
  {
    title: 'AI Prompts',
    description: 'Edit the system prompts that guide the AI assistants on the site.',
    buttonLabel: 'Manage AI Prompts',
    href: '/cms/ai-prompts',
  },
  {
    title: 'Anti-Concept Diagnostic',
    description: 'Review and test the scoring logic for the Metacognitive Diagnostic Engine.',
    buttonLabel: 'Manage Anti-Concept Diagnostic',
    href: '/cms/anti-concept-diagnostic',
  },
  {
    title: 'Legal Documents',
    description: 'Review and manage the text content for the legal policies on the site.',
    buttonLabel: 'Manage Legal Documents',
    href: '/cms/legal-documents',
  },
  {
    title: 'Sitemap',
    description: 'View all the publicly accessible URLs that are indexed by search engines.',
    buttonLabel: 'Manage Sitemap',
    href: '/cms/sitemap',
  },
];

export default function CMSPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      <div className="pt-32 pb-16 px-6">
        {/* Page Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1
            className="font-bold mb-4"
            style={{
              fontSize: '40px',
              lineHeight: '1.15',
              color: '#14358A',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Content Management System
          </h1>
          <p
            className="text-gray-600"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Welcome to the PMG content hub. From here, you can manage your website&apos;s case
            studies, blog posts, testimonials, AI assistant prompts, and legal pages.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid gap-6 mx-auto"
          style={{
            maxWidth: '960px',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {cmsCards.map((card) => (
            <div
              key={card.href}
              className="flex flex-col rounded-lg bg-white p-6"
              style={{ border: '1px solid #E5E7EB' }}
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex items-center justify-center rounded flex-shrink-0"
                  style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: '#1e2d6b',
                  }}
                >
                  <DocumentIcon />
                </div>
                <h2
                  className="font-bold leading-tight"
                  style={{
                    fontSize: '18px',
                    color: '#111827',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {card.title}
                </h2>
              </div>

              {/* Description */}
              <p
                className="text-gray-500 flex-1 mb-5"
                style={{ fontSize: '13.5px', lineHeight: '1.55' }}
              >
                {card.description}
              </p>

              {/* Button */}
              <Link
                href={card.href}
                className="block w-full text-center text-white font-medium rounded py-2 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: '#3730a3',
                  fontSize: '13.5px',
                }}
              >
                {card.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
