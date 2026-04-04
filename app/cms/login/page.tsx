'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/components/AuthContext';
import Image from 'next/image';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function CMSLoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // If already logged in, redirect to CMS
  useEffect(() => {
    if (!loading && user) {
      router.replace('/cms');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/cms');
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
        setError('Incorrect email or password.');
      } else if (code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Show nothing while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#14358A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // If user is already authenticated, render nothing (redirect happens via useEffect)
  if (user) return null;

  return (
    <main className="min-h-screen bg-[#F5F7FC] flex items-center justify-center px-4">
      <div className="w-full" style={{ maxWidth: 440 }}>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="PMG Logo" width={52} height={52} />
        </div>

        {/* Card */}
        <div className="bg-white rounded-[14px] shadow-lg border border-[#E4E8F1]" style={{ padding: 'clamp(28px, 5vw, 44px)' }}>

          {/* Heading */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center rounded-[10px] mb-4"
              style={{ width: 52, height: 52, background: '#14358A' }}
            >
              <Lock size={22} color="white" strokeWidth={1.8} />
            </div>
            <h1
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
              style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', lineHeight: '110%' }}
            >
              CMS Login
            </h1>
            <p
              className="font-dm-sans text-[#68718B] mt-2"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
            >
              Sign in to access the PMG content hub
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-dm-sans font-medium text-[#1A1A2E] mb-1.5"
                style={{ fontSize: 14 }}
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68718B] pointer-events-none"
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@portersmanagementgroup.com"
                  required
                  autoComplete="email"
                  className="w-full font-dm-sans text-[#1A1A2E] bg-[#F5F7FC] border border-[#D1D9EC] rounded-[8px] outline-none transition-colors focus:border-[#14358A] focus:ring-2 focus:ring-[#14358A]/10 placeholder:text-[#A0A8BC]"
                  style={{ fontSize: 14, padding: '10px 12px 10px 38px' }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block font-dm-sans font-medium text-[#1A1A2E] mb-1.5"
                style={{ fontSize: 14 }}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68718B] pointer-events-none"
                />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full font-dm-sans text-[#1A1A2E] bg-[#F5F7FC] border border-[#D1D9EC] rounded-[8px] outline-none transition-colors focus:border-[#14358A] focus:ring-2 focus:ring-[#14358A]/10 placeholder:text-[#A0A8BC]"
                  style={{ fontSize: 14, padding: '10px 40px 10px 38px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#68718B] hover:text-[#14358A] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div
                className="mb-5 rounded-[8px] border border-red-200 bg-red-50 text-red-700 font-dm-sans text-center"
                style={{ fontSize: 13, padding: '10px 14px' }}
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full text-white font-dm-sans font-semibold rounded-[8px] transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
              style={{
                backgroundColor: '#14358A',
                fontSize: 'clamp(13px, 1.1vw, 15px)',
                padding: '12px 20px',
              }}
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>
        </div>

        {/* Footer note */}
        <p
          className="text-center font-dm-sans text-[#A0A8BC] mt-6"
          style={{ fontSize: 12 }}
        >
          Restricted access — PMG staff only
        </p>
      </div>
    </main>
  );
}
