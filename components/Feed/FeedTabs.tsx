import { Flame, Heart, Rocket } from 'lucide-react';
import { TabsList, TabsTrigger } from '../Tabs';

const FeedTabs = () => {
  return (
    <TabsList className="gap-5">
      <TabsTrigger className="flex items-center gap-2 rounded-lg bg-gondola px-4 py-2" value="account">
        <Heart size={18} fill="#F43F41" stroke="#F43F41" />
        Following
      </TabsTrigger>
      <TabsTrigger className="pointer-events-none flex items-center gap-2 rounded-lg p-2 text-davy-gray" value="account">
        <Flame size={18} fill="#848484" stroke="#848484" />
        Featured
      </TabsTrigger>
      <TabsTrigger className="pointer-events-none flex items-center gap-2 rounded-lg p-2 text-davy-gray" value="account">
        <Rocket size={18} fill="#848484" stroke="#848484" />
        Rising
      </TabsTrigger>
    </TabsList>
  );
};

export default FeedTabs;
