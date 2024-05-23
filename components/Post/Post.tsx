import type { Post as TPost } from '@/types/posts';
import { Bookmark } from 'lucide-react';
import { Button } from '../Button';
import PostActions from './PostActions/PostActions';
import PostContent from './PostContent';
import PostInfo from './PostInfo';

type PostProps = {
  post: TPost;
};

const Post = ({ post }: PostProps) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-davy-gray p-4">
      <div className="flex w-full items-center justify-between">
        <PostInfo author={post.author} createdAt={post.createdAt} />
        <Button className="bg-transparent text-davy-gray transition-colors duration-200 hover:bg-transparent hover:text-white">
          <Bookmark fill="currentColor" />
        </Button>
      </div>
      <PostContent post={post} />
      <PostActions post={post} />
    </div>
  );
};

export default Post;
