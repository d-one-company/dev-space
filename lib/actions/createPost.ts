'use server';

import { authOptions } from '@/auth';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { posts, notifications, follows, feed } from '@/db/schema';
import { getServerSession } from 'next-auth';
import pusherServer from '../pusher/pusherServer';

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

    // Update the feed for the user and their followers
    const followers = await db.query.follows.findMany({
      where: eq(follows.followeeId, userId),
      columns: {
        followerId: true,
      },
    });

    if (followers.length > 0) {
      for (const follower of followers) {
        // Create notifications, update feed
        await db.insert(notifications).values({
          userId: follower.followerId,
          createdBy: userId,
          type: 'newPost',
          postId: post.id,
        });

        await db.insert(feed).values({
          userId: follower.followerId,
          postId: post.id,
        });

        await pusherServer.trigger(follower.followerId, 'post:new', {
          type: 'newPost',
          postId: post.id,
          content: post.content,
          createdBy: userId,
        });
      }
    }
    // Update the user's feed
    await db.insert(feed).values({
      userId,
      postId: post.id,
    });

    return post;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create post');
  }
}
