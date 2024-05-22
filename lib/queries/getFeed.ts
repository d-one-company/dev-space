import { db } from '@/db';
import { feed } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function getFeed(userId: string) {
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
