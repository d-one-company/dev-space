import Feed from '@/components/Feed/Feed';
import getFeed from '@/lib/queries/getFeed';
import { getServerSession } from 'next-auth';

const Page = async () => {
  const session = await getServerSession();

  const posts = await getFeed();

  return (
    <section>
      <Feed posts={posts} />
    </section>
  );
};

export default Page;
