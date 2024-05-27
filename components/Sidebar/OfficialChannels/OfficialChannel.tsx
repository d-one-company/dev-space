import FollowButton from '@/app/(app)/[username]/FollowButton';
import { UserProfile } from '@/types/users';
import Image from 'next/image';
import Link from 'next/link';

type Props = { channel: UserProfile };

const OfficialChannel = ({ channel }: Props) => {
  return (
    <div className="group flex w-full cursor-pointer items-center justify-between gap-4 text-oslo-gray transition-colors duration-200 hover:text-oslo-gray/80">
      <Link href={'/' + channel.username} className="flex items-center gap-4">
        <div className="flex rounded-lg bg-thunder p-2 transition-colors duration-200 group-hover:bg-secondary-bg">
          <Image width={35} height={35} src={channel?.image || ''} alt="ProfilePhoto" />
        </div>
        <p>{channel?.name}</p>
      </Link>
      <div className="hidden items-center gap-2 text-oslo-gray transition-all duration-200 group-hover:flex">
        <FollowButton user={channel} />
      </div>
    </div>
  );
};

export default OfficialChannel;
