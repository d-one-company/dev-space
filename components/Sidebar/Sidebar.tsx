import TrendingChannels from './OfficialChannels/OfficialChannels';

const Sidebar = () => {
  return (
    <div className="flex max-h-screen w-[600px] flex-col items-start gap-10 overflow-y-auto px-10 py-10">
      <TrendingChannels />
    </div>
  );
};

export default Sidebar;
