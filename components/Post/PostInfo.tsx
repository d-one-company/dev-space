import { getTimePassed } from '@/lib/utils/getTimePassed';
import { Avatar, AvatarImage } from '../Avatar';
import type { Post } from '@/types/posts';

type PostInfo = {
  author: Post['author'];
  createdAt: Date;
};

const PostInfo = ({ author, createdAt }: PostInfo) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-9">
        <AvatarImage src={author?.image || 'https://github.com/shadcn.png'} />
      </Avatar>
      <div className="flex flex-col items-start justify-between">
        <p className="text-base">{author?.name}</p>
        <p className="text-davy-gray text-sm">{getTimePassed(createdAt)}</p>
      </div>
    </div>
  );
};

export default PostInfo;
