'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { FirestoreDoc, getCollection } from '@/lib/firestore';

interface BlogPostDoc extends FirestoreDoc {
  title?: string;
  slug?: string;
  category?: string;
  summary?: string;
  published?: boolean;
  createdAt?: { seconds: number };
}

interface AnnouncementDoc extends FirestoreDoc {
  title?: string;
  message?: string;
  linkUrl?: string;
  linkText?: string;
  active?: boolean;
  startDate?: string;
  endDate?: string;
}

function formatDate(ts: BlogPostDoc['createdAt']) {
  if (!ts?.seconds) return 'Recently updated';
  return new Date(ts.seconds * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function InsightsInnovationsPage() {
  const [posts, setPosts] = useState<BlogPostDoc[]>([]);
  const [announcement, setAnnouncement] = useState<AnnouncementDoc | null>(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const [postDocs, announcementDocs] = await Promise.all([
          getCollection('blogPosts', 'createdAt', 'desc'),
          getCollection('announcements', 'createdAt', 'desc'),
        ]);

        const publishedPosts = (postDocs as BlogPostDoc[]).filter((post) => post.published === true);
        const allAnnouncements = announcementDocs as AnnouncementDoc[];
        const today = new Date().toISOString().slice(0, 10);
        const activeAnnouncement = allAnnouncements.find((item) => {
          if (!item.active) return false;
          if (item.startDate && item.startDate > today) return false;
          if (item.endDate && item.endDate < today) return false;
          return true;
        });

        if (!active) return;
        setPosts(publishedPosts.length > 0 ? publishedPosts : (postDocs as BlogPostDoc[]));
        setAnnouncement(activeAnnouncement ?? null);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : 'Failed to load insights content');
      } finally {
        if (active) setLoading(false);
      }
    };

    void load();
    return () => {
      active = false;
    };
  }, []);

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((post) =>
      [post.title, post.category, post.summary].some((v) => String(v ?? '').toLowerCase().includes(q))
    );
  }, [posts, search]);

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      <section className="w-full pt-36 pb-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <FadeInSection direction="up">
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 1.07vw, 15.4px)', lineHeight: '105%', color: '#000000', marginBottom: '12px' }}>
              Thinking in Public
            </p>
            <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', color: '#14358A', marginBottom: '20px' }}>
              Insights &amp; Innovations
            </h1>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', color: '#333333', marginBottom: '36px' }}>
              Unfiltered thoughts on whatever matters right now. Each piece represents where our curiosity has taken us.
            </p>
          </FadeInSection>

          {announcement ? (
            <FadeInSection delay={0.1} className="w-full">
              <div style={{ border: '3px solid #14358A', borderRadius: '10px', padding: '24px 28px', background: '#FFFFFF', textAlign: 'center', width: '100%', maxWidth: '1067px', margin: '0 auto' }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 1.39vw, 22px)', color: '#14358A', marginBottom: '10px' }}>
                  {String(announcement.title || 'Announcement')}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(14px, 1.22vw, 17.6px)', lineHeight: '26.4px', color: '#5F6D7E' }}>
                  {String(announcement.message || '')}
                </p>
                {announcement.linkUrl ? (
                  <Link href={String(announcement.linkUrl)} className="mt-3 inline-block font-semibold text-[#14358A] hover:underline">
                    {String(announcement.linkText || 'Read more')}
                  </Link>
                ) : null}
              </div>
            </FadeInSection>
          ) : null}
        </div>
      </section>

      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 items-stretch">
          <div style={{ border: '3px solid #14358A', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', background: '#FFFFFF', width: '100%', maxWidth: '1067px', margin: '0 auto' }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="#9AA6B4" strokeWidth="2" />
              <path d="M14.5 14.5L18 18" stroke="#9AA6B4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles"
              style={{ border: 'none', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', color: '#333333', background: 'transparent', width: '100%' }}
            />
          </div>

          {loading ? <p className="text-center text-gray-500">Loading articles...</p> : null}
          {error ? <p className="text-center text-red-600">{error}</p> : null}
          {!loading && !error && filteredPosts.length === 0 ? (
            <p className="text-center text-gray-600">No articles found.</p>
          ) : null}

          {filteredPosts.map((article, i) => (
            <FadeInSection key={article.id} delay={i * 0.08} motionProfile="card" className="w-full">
              <div style={{ border: '3px solid #14358A', borderRadius: '10px', background: '#FFFFFF', width: '100%', maxWidth: '1067px', margin: '0 auto', minHeight: '220px', display: 'flex', alignItems: 'center', padding: '32px 28px 30px 28px' }}>
                <div style={{ width: '100%', maxWidth: '620px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.01vw, 29px)', lineHeight: '1.1', color: '#14358A' }}>
                    {String(article.title || 'Untitled')}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(15px, 1.11vw, 16px)', lineHeight: '1.4', color: '#68718B' }}>
                    {formatDate(article.createdAt)}{article.category ? ` • ${String(article.category)}` : ''}
                  </p>
                  {article.summary ? (
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.07vw, 15.4px)', lineHeight: '1.7', color: '#5F6D7E' }}>
                      {String(article.summary)}
                    </p>
                  ) : null}
                  <Link href={`/insights-innovations/${String(article.slug || article.id)}`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(17px, 1.46vw, 21px)', lineHeight: '1.35', color: '#14358A', textDecoration: 'none', marginTop: '8px' }}>
                    Read More &rsaquo;
                  </Link>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="w-full py-20 px-6 relative overflow-hidden" style={{ background: '#EBF7FF' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
          <FadeInSection direction="up">
            <h2 style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 'clamp(24px, 2.75vw, 39.6px)', lineHeight: '44px', textAlign: 'center', color: '#14358A', marginBottom: '16px' }}>
              Leadership Isn&apos;t Just What You Do. It&apos;s How You Think.
            </h2>
            <p style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '140%', textAlign: 'center', color: '#333333', marginBottom: '32px' }}>
              The executives who read widely, think laterally, and connect unrelated ideas build durable advantage.
            </p>
          </FadeInSection>
          <Link
            href="/contact-us"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6A36FF 0%, #AC5FE6 100%)', border: 'none', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 1.07vw, 15.4px)', padding: '13px 32px', borderRadius: '8px', textDecoration: 'none' }}
          >
            Elevate Our Thinking
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
