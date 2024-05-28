import getUserById from '@/lib/queries/users/getUserById';
import { getTimePassed } from '@/lib/utils/getTimePassed';
import { Post } from '@/types/posts';
import Link from 'next/link';
import { Avatar, AvatarImage } from '../Avatar';

type PostInfo = {
  author: Post['author'];
  authorId: string;
  createdAt: Date;
};

const PostInfo = async ({ author, authorId, createdAt }: PostInfo) => {
  const postCreator = await getUserById(authorId);

  return (
    <div className="flex items-center gap-2">
      <Link href={'/' + author?.username}>
        <Avatar className="size-9">
          <AvatarImage src={author?.image || postCreator?.image || 'https://github.com/shadcn.png'} />
        </Avatar>
      </Link>
      <div className="text-primary-foreground flex flex-col items-start justify-between">
        <Link href={author?.username ? '/' + author?.username : '/' + postCreator?.username} className="text-base">
          {author?.name || postCreator?.name}
        </Link>
        <p className="text-sm text-oslo-gray">{getTimePassed(createdAt)}</p>
      </div>
    </div>
  );
};

export default PostInfo;
