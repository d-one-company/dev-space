import { db } from '@/db';
import { notifications, users } from '@/db/schema';
import type { Notification } from '@/types/notifications';
import { eq } from 'drizzle-orm';
import pusherServer from '../pusher/pusherServer';

export default async function createFollowNotification(creatorId: string, receiverId: string) {
  const [notificationData] = await db
    .insert(notifications)
    .values({
      type: 'follow',
      userId: receiverId,
      createdBy: creatorId,
    })
    .returning({
      id: notifications.id,
      type: notifications.type,
      createdAt: notifications.createdAt,
      postId: notifications.postId,
      isRead: notifications.isRead,
    });

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
