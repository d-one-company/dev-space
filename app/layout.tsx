import Navigation from '@/components/Navigation/Navigation';
import TopBar from '@/components/TopBar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { title: 'dev-space' };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-night')}>
        <TopBar />
        <div className="flex md:grid md:grid-cols-[280px_auto]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
