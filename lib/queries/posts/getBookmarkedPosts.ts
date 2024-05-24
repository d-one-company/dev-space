import { authOptions } from '@/auth';
import { db } from '@/db';
import { bookmarks } from '@/db/schema';
import { Post } from '@/types/posts';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function getBookmarkedPosts() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) redirect('/signin');

  try {
    const bookmarkedPosts = await db.query.bookmarks.findMany({
      where: eq(bookmarks.userId, userId),
      with: {
        bookmarkedPost: {
          columns: {
            id: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            userId: true,
          },
        },
      },
    });

    return bookmarkedPosts.map(post => post.bookmarkedPost) as unknown as Post[];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get feed');
  }
}
