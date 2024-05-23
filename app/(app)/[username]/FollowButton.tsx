import { Toggle } from '@/components/Toggle';
import { Heart } from 'lucide-react';
import toggleFollow from '@/lib/actions/toggleFollow';
import { UserProfile } from '@/types/users';
import { revalidatePath } from 'next/cache';

type Props = {
  user: UserProfile;
};

const FollowButton = ({ user: { id, username, is_following: isFollowing } }: Props) => {
  return (
    <form
      action={async () => {
        'use server';
        await toggleFollow(id);
        revalidatePath('/' + username);
      }}
    >
      <Toggle variant="follow" className="gap-2" pressed={isFollowing} type="submit">
        <Heart size={18} />
        {isFollowing ? 'Following' : 'Follow'}
      </Toggle>
    </form>
  );
};

export default FollowButton;
