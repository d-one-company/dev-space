import { Flame, Heart, Rocket } from 'lucide-react';
import Editor from '../Composer/Composer';
import Post from '../Post/Post';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';

const Feed = () => {
  return (
    <div className="flex w-full flex-col items-start px-10 py-10">
      <div className="relative w-full">
        <Editor />
      </div>
      <Tabs defaultValue="account" className="mt-5 w-full">
        <TabsList className="gap-5">
          <TabsTrigger className="bg-gondola flex items-center gap-2 rounded-lg px-4 py-2" value="account">
            <Heart size={18} fill="#F43F41" stroke="#F43F41" />
            Following
          </TabsTrigger>
          <TabsTrigger className="text-davy-gray pointer-events-none flex items-center gap-2 rounded-lg p-2" value="account">
            <Flame size={18} fill="#848484" stroke="#848484" />
            Featured
          </TabsTrigger>
          <TabsTrigger className="text-davy-gray pointer-events-none flex items-center gap-2 rounded-lg p-2" value="account">
            <Rocket size={18} fill="#848484" stroke="#848484" />
            Rising
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Post />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Feed;
