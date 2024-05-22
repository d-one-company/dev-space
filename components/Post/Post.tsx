import { Bookmark } from 'lucide-react';
import { Button } from '../Button';
import PostActions from './PostActions/PostActions';
import PostContent from './PostContent';
import { getTimePassed } from '@/lib/utils/getTimePassed';
import type { Post as TPost } from '@/types/posts';
import { Avatar, AvatarImage } from '../Avatar';

type PostProps = {
  post: TPost;
};

const Post = ({ post }: PostProps) => {
  return (
    <div className="border-davy-gray flex w-full flex-col gap-4 rounded-lg border p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="size-9">
            <AvatarImage src={post.author?.image || 'https://github.com/shadcn.png'} />
          </Avatar>
          <div className="flex flex-col items-start justify-between">
            <p className="text-base">{post.author?.name}</p>
            <p className="text-davy-gray text-sm">{getTimePassed(post.createdAt)}</p>
          </div>
        </div>
        <Button className="text-davy-gray bg-transparent transition-colors duration-200 hover:bg-transparent hover:text-white">
          <Bookmark fill="currentColor" />
        </Button>
      </div>
      <PostContent />
      <PostActions />
    </div>
  );
};

export default Post;
