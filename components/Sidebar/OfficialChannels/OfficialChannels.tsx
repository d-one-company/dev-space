import OfficialChannel from './OfficialChannel';
import type { UserProfile } from '@/types/users';

const OfficialChannels = ({ officialChannels }: { officialChannels: UserProfile[] }) => {
  return (
    <div className="flex w-full flex-col items-start gap-4 px-4 text-primary-foreground">
      <p> Official Channels</p>
      <div className="flex w-full flex-col items-start gap-3">{officialChannels?.map(channel => <OfficialChannel key={channel.id} channel={channel} />)}</div>
    </div>
  );
};

export default OfficialChannels;
