import { authOptions } from '@/auth';
import { db } from '@/db';
import { sql } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import type { UserProfile } from '@/types/users';

export default async function getUserProfile(username: string) {
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;
  if (!currentUserId) redirect('/signin');

  const user = await db.execute<UserProfile>(
    sql`SELECT  u.*,
    COUNT("f1"."userId") AS followers_count,
    COUNT("f2"."followerId") AS following_count,
    (CASE WHEN EXISTS (
        SELECT 1 FROM dev_space_follow f3
        WHERE "f3"."followerId" = ${currentUserId}
          AND "f3"."userId" = u.id
    ) THEN TRUE ELSE FALSE END) AS is_following
    FROM dev_space_user u
    LEFT JOIN dev_space_follow f1 ON u.id = "f1"."userId"
    LEFT JOIN dev_space_follow f2 ON u.id = "f2"."followerId"
    WHERE u.username = ${username}
    GROUP BY u.id;`
  );

  return user.rows[0];
}
