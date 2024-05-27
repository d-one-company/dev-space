import { Heart } from 'lucide-react';
import { TabsList, TabsTrigger } from '../Tabs';

const FeedTabs = () => {
  return (
    <TabsList className="gap-5">
      <TabsTrigger className="flex items-center gap-2 rounded-lg bg-gondola px-4 py-2" value="account">
        <Heart size={18} fill="#F43F41" stroke="#F43F41" />
        Following
      </TabsTrigger>
    </TabsList>
  );
};

export default FeedTabs;
