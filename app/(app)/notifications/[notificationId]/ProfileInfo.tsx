import Image from 'next/image';
import Link from 'next/link';
import FollowButton from '../../[username]/FollowButton';
import { Notification } from '@/types/notifications';
import { UserProfile } from '@/types/users';

type ProfileInfoProps = {
  notification: Notification & { creator: UserProfile };
};

const ProfileInfo = ({ notification }: ProfileInfoProps) => {
  return (
    <div className="flex h-fit w-full flex-col">
      <div className="flex items-center gap-5">
        {notification.creator.image && <Image src={notification.creator.image} width={100} height={100} className="flex flex-shrink-0 rounded-full" alt="Profile" />}

        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="flex flex-col text-sm">
              <span>{notification.creator.name}</span>
              <span className="text-gainsboro/80">@{notification.creator.username}</span>
            </div>
            <FollowButton user={notification.creator} />
          </div>
          <div className="following followers flex gap-4">
            <div className="flex gap-2">
              <span>Followers: </span>
              <span>{notification.creator.followers_count}</span>
            </div>
            <div className="flex gap-2">
              <span>Following</span>
              <span>{notification.creator.following_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
