import Divider from '../Divider';
import IntroducingPro from './IntroducingPro';
import TrendingChannels from './OfficialChannels/OfficialChannels';
import TopDiscussions from './TopDiscussions/TopDiscussions';
import TrendingTopics from './TrendingTopics/TrendingTopics';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start gap-10 px-10 py-10 md:min-w-[200px]">
      <IntroducingPro />
      <TrendingTopics />
      <Divider />
      <TrendingChannels />
      <TopDiscussions />
    </div>
  );
};

export default Sidebar;
