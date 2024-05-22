import type { PropsWithChildren } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import WebSocketsProvider from '@/providers/sockets';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { redirect } from 'next/navigation';
import getFeed from '@/lib/queries/getFeed';

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return redirect('/signin');
  }

  const posts = await getFeed(userId);

  return (
    <WebSocketsProvider initialData={{ notifications: [], posts }} userId={userId}>
      <div className="flex md:grid md:grid-cols-[280px_auto]">
        <Navigation />
        {children}
      </div>
    </WebSocketsProvider>
  );
};

export default Layout;
