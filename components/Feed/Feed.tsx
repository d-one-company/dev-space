import { cn } from '@/lib/utils/cn';
import type { Post as TPost } from '@/types/posts';
import { Bookmark } from 'lucide-react';
import Editor from '../Composer/Composer';
import Post from '../Post/Post';

type FeedProps = {
  posts: TPost[];
  isBookmarkPage?: boolean;
};

const Feed = ({ posts, isBookmarkPage }: FeedProps) => {
  return (
    <div className={cn('z-1 flex max-h-screen w-full flex-col items-start gap-8 overflow-y-auto px-10', isBookmarkPage ? 'py-5' : 'py-10')}>
      {!isBookmarkPage && (
        <div className="relative w-full">
          <Editor />
        </div>
      )}

      {isBookmarkPage && (
        <div className="flex w-fit items-center gap-2 rounded-lg bg-gondola px-4 py-2 text-sm">
          <Bookmark size={18} fill="#F1840A" stroke="#F1840A" />
          Bookmarks
        </div>
      )}
      {posts?.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Feed;
