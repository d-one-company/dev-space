import { authOptions } from '@/auth';
import { db } from '@/db';
import { UserProfile } from '@/types/users';
import { sql } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function getOfficialChannels() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) redirect('/signin');

  const officialChannels = await db.execute(
    sql`SELECT  u.*,
    COUNT("f1"."userId") AS followers_count,
    COUNT("f2"."followerId") AS following_count,
    (CASE WHEN EXISTS (
        SELECT 1 FROM dev_space_follow f3
        WHERE "f3"."followerId" = ${userId}
          AND "f3"."userId" = u.id
    ) THEN TRUE ELSE FALSE END) AS is_following
    FROM dev_space_user u
    LEFT JOIN dev_space_follow f1 ON u.id = "f1"."userId"
    LEFT JOIN dev_space_follow f2 ON u.id = "f2"."followerId"
    WHERE u.username ILIKE ANY (ARRAY['react','vuejs','chatgpt','vscode','typescript'])
    GROUP BY u.id;`
  );

  return officialChannels.rows as UserProfile[];
}
