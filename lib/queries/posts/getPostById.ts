import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function getPostById(id: string) {
  return await db.query.posts.findFirst({
    where: eq(posts.id, id),
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
          username: true,
        },
      },
    },
  });
}
