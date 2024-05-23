import { Toaster } from '@/components/Toast';
import { cn } from '@/lib/utils/cn';
import AuthProvider from '@/providers/AuthProvider';
import { ReactQueryProvider } from '@/providers/QueryClientProvider';
import SessionProvider from '@/providers/SessionProvider';
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
        <SessionProvider>
          <ReactQueryProvider>
            <AuthProvider>{children}</AuthProvider>
            <Toaster />
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
