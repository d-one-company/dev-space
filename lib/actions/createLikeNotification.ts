import { notifications, users } from '@/db/schema';
import pusherServer from '../pusher/pusherServer';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { Notification } from '@/types/notifications';

export default async function createLikeNotification(postId: string, creatorId: string, receiverId: string) {
  const [notificationData] = await db
    .insert(notifications)
    .values({
      postId,
      createdBy: creatorId,
      userId: receiverId,
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

  await pusherServer.trigger(receiverId, 'notification:new', notification);

  return notification as Notification;
}
