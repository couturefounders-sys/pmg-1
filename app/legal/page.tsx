'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FirestoreDoc, getCollection } from '@/lib/firestore';

interface LegalDoc extends FirestoreDoc {
  title?: string;
  slug?: string;
  published?: boolean;
}

export default function LegalIndexPage() {
  const [docs, setDocs] = useState<LegalDoc[]>([]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const all = (await getCollection('legalDocuments', 'updatedAt', 'desc')) as LegalDoc[];
        const published = all.filter((item) => item.published === true);
        if (active) setDocs(published.length > 0 ? published : all);
      } catch {
        if (active) setDocs([]);
      }
    };
    void load();
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="mb-6 text-4xl font-bold text-[#14358A]">Legal Documents</h1>
        <div className="space-y-3">
          {docs.map((doc) => (
            <Link key={doc.id} href={`/legal/${String(doc.slug || doc.id)}`} className="block rounded-md border border-gray-200 px-4 py-3 hover:bg-gray-50">
              {String(doc.title || 'Untitled')}
            </Link>
          ))}
          {docs.length === 0 ? <p className="text-gray-600">No legal documents available.</p> : null}
        </div>
      </div>
      <Footer />
    </main>
  );
}
