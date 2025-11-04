import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Hindi Dubbed Movie Apps Guide',
  description:
    'Interactive guide to discover streaming apps that offer free Hindi dubbed and English movies with filters, feature comparisons, and regional availability insights.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} min-h-screen bg-slate-950`}>{children}</body>
    </html>
  );
}
