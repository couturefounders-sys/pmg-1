import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp, writeBatch } from 'firebase/firestore';

const requiredEnvKeys = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

function isPlaceholder(value) {
  if (!value) return true;
  return (
    value.includes('your-api-key') ||
    value.includes('your-project') ||
    value.includes('your-sender-id') ||
    value.includes('your-app-id')
  );
}

function validateEnv() {
  const missing = requiredEnvKeys.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing Firebase env vars: ${missing.join(', ')}. Set them in .env.local first.`
    );
  }

  const placeholders = requiredEnvKeys.filter((key) => isPlaceholder(process.env[key]));
  if (placeholders.length > 0) {
    throw new Error(
      `Placeholder Firebase env vars detected: ${placeholders.join(
        ', '
      )}. Replace with real Firebase values in .env.local before seeding.`
    );
  }
}

const seedData = {
  blogPosts: [
    {
      id: 'hidden-risks-of-ai-expansion',
      title: 'The Hidden Risks of AI Expansion',
      slug: 'hidden-risks-of-ai-expansion',
      author: 'PMG Editorial',
      category: 'Technology',
      summary: 'Key organizational and governance risks that appear when AI adoption scales.',
      content:
        'Scaling AI without governance introduces operational, legal, and trust risks. This article outlines practical controls and rollout sequencing.',
      imageUrl: '',
      published: true,
    },
    {
      id: 'the-unseen-edge',
      title: 'The Unseen Edge',
      slug: 'the-unseen-edge',
      author: 'PMG Strategy Team',
      category: 'Strategy',
      summary: 'Why non-obvious competitive advantages drive durable performance.',
      content:
        'The strongest strategic advantages are usually hidden in plain sight: process quality, timing discipline, and signal clarity.',
      imageUrl: '',
      published: true,
    },
  ],
  announcements: [
    {
      id: 'upcoming-article-silent-roi',
      title: 'Upcoming Article',
      message: 'The Silent ROI: Quantifying the Value of Trust & Psychological Safety',
      linkUrl: '/insights-innovations',
      linkText: 'Read on Insights',
      startDate: '2026-04-01',
      endDate: '2026-06-30',
      active: true,
    },
  ],
  projects: [
    {
      id: 'trilogy-software-case-study',
      title: 'Trilogy Software',
      client: 'Trilogy Software',
      industry: 'SaaS & Enterprise Technology',
      summary: 'Operational redesign and support cost optimization.',
      challenge: 'Escalating support costs and inconsistent customer outcomes.',
      solution: 'Rebuilt support workflow, triage model, and issue ownership.',
      results: '$8M annual support costs saved and 16% higher customer satisfaction.',
      imageUrl: '',
      published: true,
    },
    {
      id: 'kraken-case-study',
      title: 'Kraken',
      client: 'Kraken',
      industry: 'Financial Services & Fintech',
      summary: 'Service desk stabilization and response-time improvements.',
      challenge: 'Large unresolved backlog and slow first response times.',
      solution: 'Structured queue governance and specialized response pods.',
      results: '3,500-ticket backlog eliminated and 65% faster first response time.',
      imageUrl: '',
      published: true,
    },
  ],
  testimonials: [
    {
      id: 'jill-kramer-accenture',
      name: 'Jill Kramer',
      role: 'Chief Marketing and Communications Officer',
      company: 'Accenture',
      quote:
        'Generative AI tools can drive greater creativity and productivity across marketing operations.',
      imageUrl: '',
      rating: 5,
      featured: true,
    },
    {
      id: 'nitin-tandon-vanguard',
      name: 'Nitin Tandon',
      role: 'Chief Information Officer',
      company: 'Vanguard',
      quote:
        'The right AI platform combines team expertise with modern capability to improve execution speed.',
      imageUrl: '',
      rating: 5,
      featured: true,
    },
  ],
  resources: [
    {
      id: 'sector-convergence-model',
      title: 'Sector Convergence Model',
      type: 'Framework',
      definition:
        'A strategic method for solving sector-specific challenges using principles proven in divergent industries.',
      example: 'Apply hospitality retention systems to SaaS customer lifecycle optimization.',
      category: 'Strategy',
      published: true,
    },
    {
      id: 'most-important-problems',
      title: 'Most Important Problems (MIPs)',
      type: 'Dictionary Term',
      definition: 'The smallest set of root problems that most strongly constrain desired outcomes.',
      example: 'Prioritize two bottlenecks driving majority of delivery delays.',
      category: 'Operations',
      published: true,
    },
  ],
  aiPrompts: [
    {
      id: 'solution-assessment-assistant',
      name: 'Solution Assessment Assistant',
      description: 'Guides users through structured solution assessment questions.',
      systemPrompt:
        'You are a strategic assessment assistant. Ask concise questions and extract operational constraints, objectives, and risks.',
      model: 'gpt-4o-mini',
      temperature: 0.2,
      active: true,
    },
    {
      id: 'resource-guide-assistant',
      name: 'Resource Guide Assistant',
      description: 'Helps users navigate PMG resources and frameworks.',
      systemPrompt:
        'You are a PMG knowledge guide. Recommend relevant resources with brief rationale and practical next steps.',
      model: 'gpt-4o-mini',
      temperature: 0.3,
      active: true,
    },
  ],
  legalDocuments: [
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content:
        'This policy explains what data we collect, why we collect it, and how users can request updates or deletion.',
      effectiveDate: '2026-01-01',
      lastReviewed: '2026-03-01',
      published: true,
    },
    {
      id: 'terms-of-use',
      title: 'Terms of Use',
      slug: 'terms-of-use',
      content:
        'These terms define acceptable use, intellectual property boundaries, and limitations of liability.',
      effectiveDate: '2026-01-01',
      lastReviewed: '2026-03-01',
      published: true,
    },
  ],
  sitemapEntries: [
    {
      id: 'home',
      url: '/',
      title: 'PMG',
      description: 'Functional consulting for strategic execution and measurable outcomes.',
      priority: '1.0',
      changeFrequency: 'weekly',
      indexed: true,
    },
    {
      id: 'our-projects',
      url: '/our-projects',
      title: 'Our Projects',
      description: 'Explore PMG project outcomes and case studies.',
      priority: '0.9',
      changeFrequency: 'weekly',
      indexed: true,
    },
    {
      id: 'insights-innovations',
      url: '/insights-innovations',
      title: 'Insights & Innovations',
      description: 'PMG thought leadership and practical operating insights.',
      priority: '0.8',
      changeFrequency: 'weekly',
      indexed: true,
    },
  ],
  antiConceptDiagnostic: [
    {
      id: 'ac-question-1',
      question: 'How often are decisions delayed because ownership is unclear?',
      category: 'Execution',
      antiConcept: 'Ambiguity Debt',
      weight: 2,
      order: 1,
      active: true,
    },
    {
      id: 'ac-question-2',
      question: 'How frequently do teams optimize activity over outcomes?',
      category: 'Strategy',
      antiConcept: 'Output Illusion',
      weight: 2,
      order: 2,
      active: true,
    },
    {
      id: 'ac-question-3',
      question: 'How often are recurring incidents treated as isolated exceptions?',
      category: 'Operations',
      antiConcept: 'Recurrence Blindness',
      weight: 1,
      order: 3,
      active: true,
    },
  ],
};

async function seedCollection(db, collectionName, items) {
  const batch = writeBatch(db);
  const now = serverTimestamp();

  items.forEach((item) => {
    const ref = doc(db, collectionName, item.id);
    const { id, ...data } = item;
    batch.set(
      ref,
      {
        ...data,
        createdAt: now,
        updatedAt: now,
      },
      { merge: true }
    );
  });

  await batch.commit();
  return items.length;
}

async function run() {
  validateEnv();

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  let total = 0;
  for (const [collectionName, items] of Object.entries(seedData)) {
    const count = await seedCollection(db, collectionName, items);
    total += count;
    console.log(`Seeded ${collectionName}: ${count} documents`);
  }

  console.log(`Done. Seeded ${total} documents across ${Object.keys(seedData).length} collections.`);
}

run().catch((error) => {
  console.error('Firestore seed failed:');
  console.error(error.message || error);
  process.exit(1);
});
