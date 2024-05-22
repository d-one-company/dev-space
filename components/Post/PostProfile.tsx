import { Avatar, AvatarImage } from '../Avatar';
import type { Post } from '@/types/posts';

type PostProfileProps = {
  author: Post['author'];
};

const PostProfile = ({ author }: PostProfileProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-9">
        <AvatarImage src={author?.image || 'https://github.com/shadcn.png'} />
      </Avatar>
      <div className="flex flex-col items-start justify-between">
        <p className="text-base">{author?.name}</p>
        <p className="text-davy-gray text-sm">2 hours ago</p>
      </div>
    </div>
  );
};

export default PostProfile;
