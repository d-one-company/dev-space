import { authOptions } from '@/auth';
import { db } from '@/db';
import { bookmarks } from '@/db/schema';
import { getServerSession } from 'next-auth';
import clearCachesByServerAction from '../utils/revalidatePath';

export default async function bookmarkPost(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  try {
    const [bookmark] = await db
      .insert(bookmarks)
      .values({
        postId,
        userId,
      })
      .returning();

    // Create a notification for the post

    clearCachesByServerAction('/');

    return bookmark;
  } catch (error) {
    console.error(error);
  }
}
