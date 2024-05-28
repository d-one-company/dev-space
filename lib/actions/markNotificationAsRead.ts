'use server';

import { db } from '@/db';
import { notifications } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function markNotificationAsRead(notificationId: string) {
  return await db.update(notifications).set({ isRead: true }).where(eq(notifications.id, notificationId));
}
