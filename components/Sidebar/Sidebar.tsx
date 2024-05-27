import getOfficialChannels from '@/lib/queries/users/getOfficialChannels';
import TrendingChannels from './OfficialChannels/OfficialChannels';

const Sidebar = async () => {
  const officialChannels = await getOfficialChannels();

  return (
    <div className="flex max-h-screen w-[600px] flex-col items-start gap-10 overflow-y-auto px-10 py-10">
      <TrendingChannels officialChannels={officialChannels} />
    </div>
  );
};

export default Sidebar;
