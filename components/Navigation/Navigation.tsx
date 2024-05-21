'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../Button';
import Bell from '../icons/Bell';
import Bookmark from '../icons/Bookmark';
import Group from '../icons/Group';
import Home from '../icons/Home';
import Message from '../icons/Message';
import More from '../icons/More';
import NavItem from './NavItem';
import ProfileItem from './ProfileItem';
import ThemeSwitch from './ThemeSwitch';

const Navigation = () => {
  return (
    <aside className="sticky top-0 col-span-1 hidden h-screen max-h-screen flex-col justify-between px-6 py-8 sm:flex">
      <div className="flex flex-col items-center gap-2">
        <NavItem icon={<Home />} label="My feed" href="/" />
        <NavItem icon={<Group />} label="Groups" href="/groups" disabled />
        <NavItem icon={<Message />} label="Messages" href="/messages" disabled />
        <NavItem icon={<Bookmark />} label="Bookmarks" href="/bookmarks" />
        <NavItem icon={<More />} label="More" href="/more" disabled />
        <div className="h-[1px] w-full bg-rangoon-green" />
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
