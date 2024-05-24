import Feed from '@/components/Feed/Feed';
import Sidebar from '@/components/Sidebar/Sidebar';
import getBookarkedPosts from '@/lib/queries/posts/getBookmarkedPosts';

const Page = async () => {
  const bookmakredPosts = await getBookarkedPosts();

  return (
    <section className="flex items-start">
      {bookmakredPosts?.length > 0 ? (
        <Feed isBookmarkPage posts={bookmakredPosts} />
      ) : (
        <div className="flex w-full px-10 py-8 text-davy-gray">You haven&apos;t bookmarked any posts yet.</div>
      )}
      <Sidebar />
    </section>
  );
};

export default Page;
