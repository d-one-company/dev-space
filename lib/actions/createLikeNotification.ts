import { notifications, posts, users } from '@/db/schema';
import pusherServer from '../pusher/pusherServer';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { Notification } from '@/types/notifications';

export default async function createLikeNotification(postId: string, creatorId: string) {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, postId),
    columns: {
      userId: true,
    },
  });

  if (!post) {
    console.error('Failed to create notification: post not found');
    return;
  }

  const [notificationData] = await db
    .insert(notifications)
    .values({
      postId,
      createdBy: creatorId,
      userId: post.userId,
      type: 'like',
    })
    .returning({ id: notifications.id, type: notifications.type, createdAt: notifications.createdAt, postId: notifications.postId, isRead: notifications.isRead });

  const creatorData = await db.query.users.findFirst({
    where: eq(users.id, creatorId),
  });

  const notification = {
    ...notificationData,
    creator: creatorData,
  };

  await pusherServer.trigger(post.userId, 'notification:new', notification);

  return notification as Notification;
}
