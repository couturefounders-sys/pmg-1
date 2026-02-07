import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMG - Strategy is Intention. Execution is Reality.",
  description: "PMG bridges the gap between high-level blueprints and verifiable enterprise value.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
