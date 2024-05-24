'use server';

import { authOptions } from '@/auth';
import { db } from '@/db';
import { feed, follows, notifications, posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import pusherServer from '../pusher/pusherServer';
import clearCachesByServerAction from '../utils/revalidatePath';
import createNewPostNotification from './createNewPostNotification';

export default async function createPost(content: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) throw new Error('Unauthorized');

  try {
    const [post] = await db
      .insert(posts)
      .values({
        userId,
        content,
      })
      .returning();

    const followers = await db.query.follows.findMany({
      where: eq(follows.followeeId, userId),
      columns: {
        followerId: true,
      },
    });

    if (followers.length > 0) {
      for (const follower of followers) {
        await db.insert(feed).values({
          postAuthorId: userId,
          userId: follower.followerId,
          postId: post.id,
        });

        await createNewPostNotification(post.id, userId, follower.followerId);
      }
    }

    await db.insert(feed).values({
      postAuthorId: userId,
      userId,
      postId: post.id,
    });

    clearCachesByServerAction('/');

    return post;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create post');
  }
}
