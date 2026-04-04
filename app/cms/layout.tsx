'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/components/AuthContext';

function CMSRouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const isLoginPage = pathname === '/cms/login';

  useEffect(() => {
    if (loading) return;
    if (!isLoginPage && !user) {
      router.replace('/cms/login');
    }
    if (isLoginPage && user) {
      router.replace('/cms');
    }
  }, [isLoginPage, loading, router, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#14358A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isLoginPage && !user) {
    return null;
  }

  return (
    <>
      {!isLoginPage && user ? (
        <div className="fixed right-4 top-4 z-[300]">
          <button
            onClick={() => void logout()}
            className="rounded border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            Sign Out
          </button>
        </div>
      ) : null}
      {children}
    </>
  );
}

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CMSRouteGuard>{children}</CMSRouteGuard>
    </AuthProvider>
  );
}
