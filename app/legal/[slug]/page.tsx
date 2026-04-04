'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FirestoreDoc, getCollection } from '@/lib/firestore';

interface LegalDoc extends FirestoreDoc {
  title?: string;
  slug?: string;
  content?: string;
  effectiveDate?: string;
  lastReviewed?: string;
  published?: boolean;
}

export default function LegalDocPage() {
  const params = useParams<{ slug: string }>();
  const slug = decodeURIComponent(params.slug);
  const [doc, setDoc] = useState<LegalDoc | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const docs = (await getCollection('legalDocuments', 'updatedAt', 'desc')) as LegalDoc[];
        const found = docs.find((item) => item.slug === slug || item.id === slug) ?? null;
        if (!active) return;
        setDoc(found?.published === false ? null : found);
      } finally {
        if (active) setLoading(false);
      }
    };
    void load();
    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-32">
        <Link href="/legal" className="text-sm font-medium text-[#14358A] hover:underline">
          &larr; Back to legal
        </Link>
        {loading ? (
          <p className="mt-6 text-gray-500">Loading document...</p>
        ) : !doc ? (
          <p className="mt-6 text-gray-700">Document not found.</p>
        ) : (
          <article className="mt-6">
            <h1 className="mb-2 text-4xl font-bold text-[#14358A]">{String(doc.title || 'Legal Document')}</h1>
            <p className="mb-8 text-sm text-gray-500">
              {doc.effectiveDate ? `Effective: ${doc.effectiveDate}` : ''}
              {doc.lastReviewed ? ` • Reviewed: ${doc.lastReviewed}` : ''}
            </p>
            <div className="whitespace-pre-wrap leading-7 text-gray-800">{String(doc.content || '')}</div>
          </article>
        )}
      </div>
      <Footer />
    </main>
  );
}
