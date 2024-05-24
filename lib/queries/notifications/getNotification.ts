import { db } from '@/db';
import { follows, notifications, posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import getUserProfile from '../users/getUserProfile';
import { authOptions } from '@/auth';
import getUserPosts from '../posts/getUserPosts';

export default async function getNotification(id: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) redirect('/signin');

  const notification = await db.query.notifications.findFirst({
    where: eq(notifications.id, id),
    columns: {
      id: true,
      type: true,
      createdAt: true,
      postId: true,
      isRead: true,
    },
    with: {
      creator: {
        columns: {
          id: true,
          username: true,
        },
      },
    },
  });

  if (!notification?.creator?.username) {
    console.error('Notification not found');
    return;
  }

  const creatorData = await getUserProfile(notification.creator.username);

  return {
    ...notification,
    creator: creatorData,
    post: notification.postId
      ? await db.query.posts.findFirst({ where: eq(posts.id, notification.postId), with: { author: { columns: { id: true, name: true, image: true, username: true } } } })
      : null,
  };
}
