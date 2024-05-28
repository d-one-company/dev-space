import getPostById from '@/lib/queries/posts/getPostById';
import Post from '@/components/Post/Post';
import { notFound } from 'next/navigation';
import markNotificationAsRead from '@/lib/actions/markNotificationAsRead';

type Props = { params: { postId: string }; searchParams: { notificationId?: string } };

const Page = async ({ params: { postId }, searchParams: { notificationId } }: Props) => {
  const post = await getPostById(postId);
  if (!post) return notFound();

  if (notificationId) {
    await markNotificationAsRead(notificationId);
  }

  return <Post post={post} />;
};

export default Page;
