import { authOptions } from '@/auth';
import { db } from '@/db';
import { feed } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function getFeed() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    redirect('/signin');
  }

  try {
    const userFeed = await db.query.feed.findMany({
      where: eq(feed.userId, userId),
      with: {
        relatedPost: {
          columns: {
            id: true,
            content: true,
            createdAt: true,
          },
          with: {
            author: {
              columns: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: (feed, { desc }) => [desc(feed.createdAt)],
    });

    return userFeed.map(f => f.relatedPost);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get feed');
  }
}
