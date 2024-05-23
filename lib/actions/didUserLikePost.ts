import { authOptions } from '@/auth';
import { db } from '@/db';
import { likes } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';

export async function didUserLikePost(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  const like = await db.query.likes.findFirst({
    where: and(eq(likes.userId, userId), eq(likes.postId, postId)),
  });

  if (like) return true;

  return false;
}
