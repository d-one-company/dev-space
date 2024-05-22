import Feed from '@/components/Feed/Feed';
import getFeed from '@/lib/queries/getFeed';

const Page = async () => {
  const posts = await getFeed();

  return (
    <section>
      <Feed posts={posts} />
    </section>
  );
};

export default Page;
