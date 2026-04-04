'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FirestoreDoc, getCollection } from '@/lib/firestore';

interface BlogPostDoc extends FirestoreDoc {
  title?: string;
  slug?: string;
  author?: string;
  category?: string;
  summary?: string;
  content?: string;
  imageUrl?: string;
  createdAt?: { seconds: number };
}

function formatDate(ts: BlogPostDoc['createdAt']) {
  if (!ts?.seconds) return '';
  return new Date(ts.seconds * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = decodeURIComponent(params.slug);
  const [post, setPost] = useState<BlogPostDoc | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        setLoading(true);
        const posts = (await getCollection('blogPosts', 'createdAt', 'desc')) as BlogPostDoc[];
        const current = posts.find((item) => item.slug === slug || item.id === slug) ?? null;
        if (active) setPost(current);
      } finally {
        if (active) setLoading(false);
      }
    };

    void load();
    return () => {
      active = false;
    };
  }, [slug]);

  const dateLabel = useMemo(() => formatDate(post?.createdAt), [post?.createdAt]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-32">
        <Link href="/insights-innovations" className="text-sm font-medium text-[#14358A] hover:underline">
          &larr; Back to Insights
        </Link>

        {loading ? (
          <p className="mt-8 text-gray-500">Loading article...</p>
        ) : !post ? (
          <p className="mt-8 text-gray-700">Article not found.</p>
        ) : (
          <article className="mt-8">
            <h1 className="mb-3 text-4xl font-bold text-[#14358A]">{String(post.title || 'Untitled')}</h1>
            <p className="mb-8 text-sm text-gray-500">
              {dateLabel}
              {post.author ? ` • ${String(post.author)}` : ''}
              {post.category ? ` • ${String(post.category)}` : ''}
            </p>
            {post.imageUrl ? (
              <img src={String(post.imageUrl)} alt={String(post.title || 'Article image')} className="mb-8 w-full rounded-lg" />
            ) : null}
            {post.summary ? <p className="mb-6 text-lg text-gray-700">{String(post.summary)}</p> : null}
            <div className="prose max-w-none whitespace-pre-wrap text-gray-800">
              {String(post.content || '')}
            </div>
          </article>
        )}
      </div>
      <Footer />
    </main>
  );
}
