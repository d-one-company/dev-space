import { authOptions } from '@/auth';
import Navigation from '@/components/Navigation/Navigation';
import WebSocketsProvider from '@/providers/sockets';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import getFeed from '@/lib/queries/posts/getFeed';
import TopBar from '@/components/TopBar';
import type { PropsWithChildren } from 'react';

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return redirect('/signin');
  }

  const posts = await getFeed();

  return (
    <WebSocketsProvider initialData={{ notifications: [], posts }} userId={userId}>
      <TopBar />
      <div className="flex md:grid md:grid-cols-[280px_auto]">
        <Navigation />
        {children}
      </div>
    </WebSocketsProvider>
  );
};

export default Layout;
