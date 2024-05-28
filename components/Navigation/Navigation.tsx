import updateUserProfile from '@/lib/actions/updateUserProfile';
import getCurrentUser from '@/lib/queries/users/getCurrentUser';
import { redirect } from 'next/navigation';
import Bookmark from '../icons/Bookmark';
import Home from '../icons/Home';
import LogoutButton from './LogoutButton';
import NavItem from './NavItem';
import NotificationItem from './NotificationItem';
import ProfileDialog from './ProfileDialog';

async function updateUser(userId: string, username: string) {
  'use server';
  return await updateUserProfile(userId, username);
}

const Navigation = async () => {
  const user = await getCurrentUser();
  if (!user) redirect('/signin');

  return (
    <aside className="sticky top-0 col-span-1 hidden h-screen max-h-screen flex-col justify-between px-6 py-8 sm:flex">
      <div className="flex flex-col items-center gap-2">
        <NavItem icon={<Home />} label="My feed" href="/" />
        <NavItem icon={<Bookmark />} label="Bookmarks" href="/bookmarks" />
        <div className="bg-secondary-bg h-[1px] w-full" />
        <NotificationItem />
        <ProfileDialog updateUser={updateUser} user={user} />
      </div>
      <div className="flex flex-col items-start gap-4">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Navigation;
