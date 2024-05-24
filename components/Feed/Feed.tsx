import type { Post as TPost } from '@/types/posts';
import { Flame, Heart, Rocket } from 'lucide-react';
import Editor from '../Composer/Composer';
import Post from '../Post/Post';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';

type FeedProps = {
  posts: TPost[];
};

const Feed = ({ posts }: FeedProps) => {
  return (
    <div className="flex w-full flex-col items-start px-10 py-10">
      <div className="relative w-full">
        <Editor />
      </div>
      <Tabs defaultValue="account" className="mt-5 w-full">
        <TabsList className="gap-5">
          <TabsTrigger className="flex items-center gap-2 rounded-lg bg-gondola px-4 py-2" value="account">
            <Heart size={18} fill="#F43F41" stroke="#F43F41" />
            Following
          </TabsTrigger>
          <TabsTrigger className="pointer-events-none flex items-center gap-2 rounded-lg p-2 text-oslo-gray" value="account">
            <Flame size={18} fill="#848484" stroke="#848484" />
            Featured
          </TabsTrigger>
          <TabsTrigger className="pointer-events-none flex items-center gap-2 rounded-lg p-2 text-oslo-gray" value="account">
            <Rocket size={18} fill="#848484" stroke="#848484" />
            Rising
          </TabsTrigger>
        </TabsList>
        <TabsContent className="mt-10 flex w-full flex-col items-start gap-4" value="account">
          {posts?.map(post => <Post key={post.id} post={post} />)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Feed;
