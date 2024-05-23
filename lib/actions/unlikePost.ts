import { authOptions } from '@/auth';
import { db } from '@/db';
import { likes } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import clearCachesByServerAction from '../utils/revalidatePath';

export default async function unlikePost(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  try {
    await db.delete(likes).where(and(eq(likes.postId, postId), eq(likes.userId, userId)));

    // Trigger websocket event here

    clearCachesByServerAction('/');

    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to unlike post');
  }
}
