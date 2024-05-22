'use server';

import { authOptions } from '@/auth';
import { db } from '@/db';
import { users, follows } from '@/db/schema';
import { getServerSession } from 'next-auth';

export default async function followUser(userId: string) {
  const session = await getServerSession(authOptions);
  const followerId = session?.user?.id;
  if (!followerId) throw new Error('Unauthorized');

  try {
    const [follow] = await db
      .insert(follows)
      .values({
        followerId,
        followeeId: userId,
      })
      .returning();

    // Create a notification for the follow

    return follow;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to follow user');
  }
}
