import { getTimePassed } from '@/lib/utils/getTimePassed';
import { Avatar, AvatarImage } from '../Avatar';
import type { Post } from '@/types/posts';
import Link from 'next/link';

type PostInfo = {
  author: Post['author'];
  createdAt: Date;
};

const PostInfo = ({ author, createdAt }: PostInfo) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={'/' + author.username}>
        <Avatar className="size-9">
          <AvatarImage src={author?.image || 'https://github.com/shadcn.png'} />
        </Avatar>
      </Link>
      <div className="flex flex-col items-start justify-between">
        <Link href={'/' + author.username} className="text-base">
          {author?.name}
        </Link>
        <p className="text-sm text-davy-gray">{getTimePassed(createdAt)}</p>
      </div>
    </div>
  );
};

export default PostInfo;
