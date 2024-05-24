import { authOptions } from '@/auth';
import { db } from '@/db';
import { bookmarks, posts } from '@/db/schema';
import { Post } from '@/types/posts';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function getBookarkedPosts() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) redirect('/signin');

  try {
    const bookmarkedPosts = await db.query.bookmarks.findMany({
      where: eq(bookmarks.userId, userId),
      orderBy: (bookmarks, { desc }) => [desc(bookmarks.createdAt)],
    });

    const relatedPosts = [];

    for (const bookmark of bookmarkedPosts) {
      const post = await db.query.posts.findFirst({
        where: eq(posts.id, bookmark.postId),
      });

      if (post) relatedPosts.push(post);
    }

    return relatedPosts as unknown as Post[];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get feed');
  }
}
