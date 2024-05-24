import { authOptions } from '@/auth';
import { db } from '@/db';
import { likes } from '@/db/schema';
import { getServerSession } from 'next-auth';
import clearCachesByServerAction from '../utils/revalidatePath';
import createLikeNotification from './createLikeNotification';

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

    await createLikeNotification(postId, userId);
    clearCachesByServerAction('/');

    return like;
  } catch (error) {}
}
