import Feed from '@/components/Feed/Feed';
import getFeed from '@/lib/queries/posts/getFeed';
import Sidebar from '@/components/Sidebar/Sidebar';

const Page = async () => {
  const posts = await getFeed();

  return (
    <section className="flex items-start">
      <Feed posts={posts} />
      <Sidebar />
    </section>
  );
};

export default Page;
