import getPostById from '@/lib/queries/posts/getPostById';
import Post from '@/components/Post/Post';
import { notFound } from 'next/navigation';

type Props = { params: { postId: string } };

const Page = async ({ params: { postId } }: Props) => {
  const post = await getPostById(postId);
  if (!post) return notFound();

  return <Post post={post} />;
};

export default Page;
