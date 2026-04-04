'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CommunityProgramsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/community-involvement');
  }, [router]);

  return null;
}
