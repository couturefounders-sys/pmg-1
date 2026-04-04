# CMS + Firebase Setup

## 1. Environment

Set these values in `.env.local`:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## 2. Seed initial CMS data

```bash
npm run seed:firestore
```

This writes starter content to:

- `blogPosts`
- `announcements`
- `projects`
- `testimonials`
- `resources`
- `aiPrompts`
- `legalDocuments`
- `sitemapEntries`
- `antiConceptDiagnostic`

## 3. Deploy Firebase security rules

```bash
npm run deploy:firebase:rules
```

This uses:

- `firestore.rules`
- `storage.rules`

## 4. Create CMS user accounts

CMS pages under `/cms` require Firebase Auth sign-in.  
Create admin/editor users in Firebase Authentication (email/password).

## 5. Verify end-to-end

1. Go to `/cms`, sign in, create/update content.
2. Check public pages:
   - `/our-projects`
   - `/insights-innovations`
   - `/insights-innovations/[slug]`
   - `/resources`
   - `/legal`
   - `/legal/[slug]`
   - `/` (testimonials section)
