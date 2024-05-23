import { authOptions } from '@/auth';
import { db } from '@/db';
import { bookmarks } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import clearCachesByServerAction from '../utils/revalidatePath';

export default async function removeBookmark(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  try {
    await db.delete(bookmarks).where(and(eq(bookmarks.userId, userId), eq(bookmarks.postId, postId)));
    clearCachesByServerAction('/');

    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to remove bookmark post');
  }
}
