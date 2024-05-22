import { authOptions } from '@/auth';
import { db } from '@/db';
import { posts, likes, notifications } from '@/db/schema';
import { getServerSession } from 'next-auth';
import { eq, and } from 'drizzle-orm';

export default async function unlikePost(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  try {
    await db.delete(likes).where(and(eq(posts.userId, userId), eq(posts.id, postId)));
    await db.delete(notifications).where(and(eq(notifications.postId, postId), eq(notifications.userId, userId), eq(notifications.type, 'like')));

    // Trigger websocket event here

    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to unlike post');
  }
}
