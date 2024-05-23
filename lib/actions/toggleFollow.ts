'use server';

import { authOptions } from '@/auth';
import { db } from '@/db';
import { follows, feed, posts } from '@/db/schema';
import { and, eq, sql } from 'drizzle-orm';
import { getServerSession } from 'next-auth';

export default async function toggleFollow(userId: string) {
  const session = await getServerSession(authOptions);
  const followerId = session?.user?.id;
  if (!followerId) throw new Error('Unauthorized');

  try {
    const follow = await db.query.follows.findFirst({
      where: and(eq(follows.followerId, followerId), eq(follows.followeeId, userId)),
    });

    return follow
      ? (await db.delete(follows).where(eq(follows.id, follow.id)), await db.delete(feed).where(and(eq(feed.userId, followerId), eq(feed.postAuthorId, userId))))
      : (await db.insert(follows).values({ followeeId: userId, followerId }),
        (await db.select({ id: posts.id }).from(posts).where(eq(posts.userId, userId))).map(async post => {
          await db.insert(feed).values({ postAuthorId: userId, postId: post.id, userId: followerId });
        }));
  } catch (error) {
    console.error(error);
    throw new Error('Failed to follow user');
  }
}
