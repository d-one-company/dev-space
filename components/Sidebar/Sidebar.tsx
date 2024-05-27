import Divider from '../Divider';
import IntroducingPro from './IntroducingPro';
import TrendingChannels from './OfficialChannels/OfficialChannels';
import TopDiscussions from './TopDiscussions/TopDiscussions';
import TrendingTopics from './TrendingTopics/TrendingTopics';

const Sidebar = () => {
  return (
    <div className="flex max-h-screen flex-col items-start gap-10 overflow-y-auto px-10 py-10 md:min-w-[200px] md:max-w-[450px]">
      <IntroducingPro />
      <TrendingTopics />
      <Divider />
      <TrendingChannels />
      <TopDiscussions />
    </div>
  );
};

export default Sidebar;
