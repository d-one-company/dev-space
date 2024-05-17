'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../Button';
import Bell from '../icons/Bell';
import Bookmark from '../icons/Bookmark';
import Home from '../icons/Home';
import NavItem from './NavItem';
import ProfileItem from './ProfileItem';
import ThemeSwitch from './ThemeSwitch';

const Navigation = () => {
  return (
    <aside className="sticky top-0 col-span-1 hidden h-screen max-h-screen flex-col justify-between px-6 py-8 sm:flex">
      <div className="flex flex-col items-center gap-4">
        <NavItem icon={<Home />} label="My feed" href="/" />
        <NavItem icon={<Bookmark />} label="Bookmarks" href="/bookmarks" />
        <NavItem icon={<Bell />} label="Notifications" href="/notifications" badgeNumber={3} />
        <ProfileItem label="Profile" href="/profile" />
      </div>
      <div className="flex flex-col items-start gap-4">
        {/* todo: figure out design for this */}
        <Button className="bg-red-500/80 text-white hover:bg-red-500/60" onClick={() => signOut()}>
          Logout
        </Button>
        <ThemeSwitch />
      </div>
    </aside>
  );
};

export default Navigation;
