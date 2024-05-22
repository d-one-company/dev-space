import { authOptions } from '@/auth';
import { db } from '@/db';
import { feed } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';

export default async function getFeed() {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (!userId) throw new Error('Unauthorized');

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
