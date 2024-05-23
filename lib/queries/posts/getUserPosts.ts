import { db } from '@/db';
import { eq, sql } from 'drizzle-orm';
import { posts, users } from '@/db/schema';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { redirect } from 'next/navigation';

export default async function getUserPosts(username: string) {
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;
  if (!currentUserId) redirect('/signin');

  const user = await db.query.users.findFirst({ where: eq(users.username, username) });

  return user?.id
    ? await db.query.posts.findMany({
        where: eq(posts.userId, user.id),
        with: {
          author: {
            columns: {
              id: true,
              name: true,
              image: true,
              username: true,
            },
          },
        },
      })
    : [];
}
