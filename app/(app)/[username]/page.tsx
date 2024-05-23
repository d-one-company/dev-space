import getUserProfile from '@/lib/queries/users/getUserProfile';
import Image from 'next/image';
import FollowButton from './FollowButton';
import getUserPosts from '@/lib/queries/posts/getUserPosts';
import Post from '@/components/Post/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { notFound, redirect } from 'next/navigation';
type PageProps = {
  params: {
    username: string;
  };
};

const Page = async ({ params: { username } }: PageProps) => {
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;
  if (!currentUserId) redirect('/signin');

  const user = await getUserProfile(username);
  if (!user) notFound();
  const posts = await getUserPosts(username);

  return (
    <div className="flex flex-col gap-4">
      {user.image && <Image src={user.image} alt="ProfilePhoto" width={100} height={100} />}
      <span>Username: {username}</span>
      <span>Name: {user.username}</span>
      <span>Followers: {user.followers_count}</span>
      <span>Following: {user.following_count}</span>
      <span>Email: {user.email}</span>
      {currentUserId !== user.id && <FollowButton user={user} />}
      <div className="flex flex-col gap-4">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;
