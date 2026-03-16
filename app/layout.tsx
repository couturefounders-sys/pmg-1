import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PMG - Strategy is Intention. Execution is Reality.",
  description: "PMG bridges the gap between high-level blueprints and verifiable enterprise value.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preload" href="/hero-background.png" as="image" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} no-overflow`}>{children}</body>
    </html>
  );
}
