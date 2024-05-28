import { authOptions } from '@/auth';
import Post from '@/components/Post/Post';
import getUserPosts from '@/lib/queries/posts/getUserPosts';
import getUserProfile from '@/lib/queries/users/getUserProfile';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import FollowButton from './FollowButton';
import markNotificationAsRead from '@/lib/actions/markNotificationAsRead';

type PageProps = {
  params: {
    username: string;
  };
  searchParams: {
    notificationId?: string;
  };
};

const Page = async ({ params: { username }, searchParams: { notificationId } }: PageProps) => {
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;
  if (!currentUserId) redirect('/signin');

  const user = await getUserProfile(username);
  if (!user) notFound();
  const posts = await getUserPosts(username);
  if (notificationId) {
    markNotificationAsRead(notificationId);
  }

  return (
    <div className="flex w-full flex-col items-center gap-10 p-10">
      <div className="flex w-full items-center gap-10">
        {user.image && <Image className="size-20 rounded-full" src={user.image} alt="ProfilePhoto" width={100} height={100} />}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-primary-foreground">{username}</span>
            {currentUserId !== user.id && <FollowButton user={user} />}
          </div>
          <div className="flex w-full items-center gap-10 text-sm text-primary-foreground">
            <span>
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
            <span>
              {user.followers_count} {user.followers_count === 1 ? 'follower' : 'followers'}
            </span>
            <span>{user.following_count} following</span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;
