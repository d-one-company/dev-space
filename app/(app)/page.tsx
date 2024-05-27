import Feed from '@/components/Feed/Feed';
import Sidebar from '@/components/Sidebar/Sidebar';
import getFeed from '@/lib/queries/posts/getFeed';

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
