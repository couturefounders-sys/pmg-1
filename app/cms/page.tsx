'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import {
  Newspaper,
  Megaphone,
  Briefcase,
  Star,
  BookOpen,
  Brain,
  BrainCircuit,
  Gavel,
  Map,
} from 'lucide-react';

const cmsCards = [
  {
    icon: Newspaper,
    title: 'Blog Posts',
    description: 'Create, edit, and delete articles for the Insights & Innovations page.',
    buttonLabel: 'Manage Blog Posts',
    href: '/cms/blog-posts',
  },
  {
    icon: Megaphone,
    title: 'Announcements',
    description: 'Manage the upcoming article announcement banner on the Insights page.',
    buttonLabel: 'Manage Announcements',
    href: '/cms/announcements',
  },
  {
    icon: Briefcase,
    title: 'Projects / Case Studies',
    description: "Manage the case studies that appear on the 'Our Projects' page.",
    buttonLabel: 'Manage Projects / Case Studies',
    href: '/cms/projects',
  },
  {
    icon: Star,
    title: 'Testimonials',
    description: 'Add, update, or remove client testimonials displayed on the homepage.',
    buttonLabel: 'Manage Testimonials',
    href: '/cms/testimonials',
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Manage the PMG Dictionary and Metacognitive Anti-Concepts.',
    buttonLabel: 'Manage Resources',
    href: '/cms/resources',
  },
  {
    icon: Brain,
    title: 'AI Prompts',
    description: 'Edit the system prompts that guide the AI assistants on the site.',
    buttonLabel: 'Manage AI Prompts',
    href: '/cms/ai-prompts',
  },
  {
    icon: BrainCircuit,
    title: 'Anti-Concept Diagnostic',
    description: 'Review and test the scoring logic for the Metacognitive Diagnostic Engine.',
    buttonLabel: 'Manage Anti-Concept Diagnostic',
    href: '/cms/anti-concept-diagnostic',
  },
  {
    icon: Gavel,
    title: 'Legal Documents',
    description: 'Review and manage the text content for the legal policies on the site.',
    buttonLabel: 'Manage Legal Documents',
    href: '/cms/legal-documents',
  },
  {
    icon: Map,
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

      {/* Page Header */}
      <div
        className="w-full px-6"
        style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)', paddingBottom: '48px' }}
      >
        <FadeInSection direction="up" animateOnInitialView>
          <div className="text-center mx-auto" style={{ maxWidth: 'min(760px, 90%)' }}>
            <h1
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                marginBottom: '20px',
              }}
            >
              Content Management System
            </h1>
            <p
              className="font-dm-sans font-normal text-[#333333] mx-auto"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Welcome to the PMG content hub. From here, you can manage your website&apos;s case
              studies, blog posts, testimonials, AI assistant prompts, and legal pages.
            </p>
          </div>
        </FadeInSection>
      </div>

      {/* Cards Grid */}
      <div
        className="mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          maxWidth: 'min(1300px, 92%)',
          gap: 'clamp(16px, 2vw, 28px)',
        }}
      >
        {cmsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <FadeInSection key={card.href} delay={index * 0.07} direction="up">
              <div
                className="border-[3px] border-[#14358A] rounded-[10px] bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                style={{ padding: 'clamp(20px, 1.67vw, 28px)' }}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-[10px]"
                    style={{ width: 56, height: 56, background: '#14358A' }}
                  >
                    <Icon size={24} color="white" strokeWidth={1.6} />
                  </div>
                  <h2
                    className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
                    style={{
                      fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                      lineHeight: '120%',
                    }}
                  >
                    {card.title}
                  </h2>
                </div>

                {/* Description */}
                <p
                  className="font-dm-sans font-normal text-[#68718B] flex-1 mb-6"
                  style={{
                    fontSize: 'clamp(13px, 1.11vw, 16px)',
                    lineHeight: '140%',
                  }}
                >
                  {card.description}
                </p>

                {/* Button */}
                <Link
                  href={card.href}
                  className="block w-full text-center text-white font-dm-sans font-medium rounded-[8px] transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#14358A',
                    fontSize: 'clamp(13px, 1.11vw, 15px)',
                    padding: '10px 16px',
                  }}
                >
                  {card.buttonLabel}
                </Link>
              </div>
            </FadeInSection>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
