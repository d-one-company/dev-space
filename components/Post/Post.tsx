'use server';

import bookmarkPost from '@/lib/actions/bookmarkPost';
import { didUserBookmarkedPost } from '@/lib/actions/didUserBookmarkedPost';
import removeBookmark from '@/lib/actions/removeBookmark';
import type { Post as TPost } from '@/types/posts';
import BookmarkButton from './PostActions/BookmarkButton';
import PostActions from './PostActions/PostActions';
import PostContent from './PostContent';
import PostInfo from './PostInfo';

type PostProps = {
  post: TPost;
};

async function handleBookmarkPost(postId: string) {
  'use server';
  return await bookmarkPost(postId);
}

async function handleRemoveBookmark(postId: string) {
  'use server';
  return await removeBookmark(postId);
}

const Post = async ({ post }: PostProps) => {
  const isBookmarked = await didUserBookmarkedPost(post.id);

  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-lg border border-davy-gray p-4">
      <div className="flex w-full items-center justify-between">
        <PostInfo author={post.author} createdAt={post.createdAt} />
        <BookmarkButton isBookmarked={isBookmarked} id={post.id} bookmarPost={isBookmarked ? handleRemoveBookmark : handleBookmarkPost} />
      </div>
      <PostContent post={post} />
      <PostActions post={post} />
    </div>
  );
};

export default Post;
