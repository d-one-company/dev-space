import { authOptions } from '@/auth';
import { db } from '@/db';
import { bookmarks } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';

export async function didUserBookmarkedPost(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  const bookmark = await db.query.bookmarks.findFirst({
    where: and(eq(bookmarks.userId, userId), eq(bookmarks.postId, postId)),
  });

  if (bookmark) return true;

  return false;
}
