import { authOptions } from '@/auth';
import { db } from '@/db';
import { notifications } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import type { Notification } from '@/types/notifications';
import { redirect } from 'next/navigation';

export default async function getNotifications() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) redirect('/signin');

  return (await db.query.notifications.findMany({
    where: eq(notifications.userId, userId),
    orderBy: (notifications, { desc }) => [desc(notifications.createdAt)],
    columns: {
      id: true,
      postId: true,
      type: true,
      isRead: true,
      createdAt: true,
    },
    with: {
      creator: {
        columns: {
          id: true,
          name: true,
          image: true,
          username: true,
        },
      },
    },
  })) as Notification[];
}
