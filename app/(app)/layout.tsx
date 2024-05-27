import { authOptions } from '@/auth';
import Navigation from '@/components/Navigation/Navigation';
import TopBar from '@/components/TopBar';
import getNotifications from '@/lib/queries/notifications/getNotifications';
import WebSocketsProvider from '@/providers/sockets';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return redirect('/signin');
  }

  const notifications = await getNotifications();

  return (
    <WebSocketsProvider notifications={notifications} userId={userId}>
      <TopBar />
      <div className="flex md:grid md:grid-cols-[280px_auto]">
        <Navigation />
        {children}
      </div>
    </WebSocketsProvider>
  );
};

export default Layout;
