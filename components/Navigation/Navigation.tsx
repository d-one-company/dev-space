import getCurrentUser from '@/lib/queries/users/getCurrentUser';
import Bookmark from '../icons/Bookmark';
import Home from '../icons/Home';
import LogoutButton from './LogoutButton';
import NavItem from './NavItem';
import NotificationItem from './NotificationItem';
import ProfileItem from './ProfileItem';
import { ThemeSwitch } from './ThemeSwitch';

const Navigation = async () => {
  const user = await getCurrentUser();

  return (
    <aside className="sticky top-0 col-span-1 hidden h-screen max-h-screen flex-col justify-between px-6 py-8 sm:flex">
      <div className="flex flex-col items-center gap-2">
        <NavItem icon={<Home />} label="My feed" href="/" />
        <NavItem icon={<Bookmark />} label="Bookmarks" href="/bookmarks" />
        <div className="bg-secondary-bg h-[1px] w-full" />
        <NotificationItem />
        <ProfileItem name={user?.username || user?.name || ''} label="Profile" href="/profile" />
      </div>
      <div className="flex flex-col items-start gap-4">
        {/* todo: figure out design for this */}
        <LogoutButton />
        <ThemeSwitch />
      </div>
    </aside>
  );
};

export default Navigation;
