import { authOptions } from '@/auth';
import { db } from '@/db';
import { posts, likes } from '@/db/schema';
import { getServerSession } from 'next-auth';

export default async function likePost(postId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  try {
    const [like] = await db
      .insert(likes)
      .values({
        postId,
        userId,
      })
      .returning();

    // Create a notification for the post

    return like;
  } catch (error) {}
}
