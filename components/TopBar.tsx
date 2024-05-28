import getUsers from '@/lib/queries/users/getUsers';
import { UserProfile } from '@/types/users';
import { ThemeSwitch } from './Navigation/ThemeSwitch';
import Search from './Search';

export const TopBar = async () => {
  const users = await getUsers();

  return (
    <div className="border-secondary-bg sticky top-0 z-[1000] flex h-[60px] w-full items-start border-b bg-night py-3 pl-10 pr-5">
      <p className="mt-1.5 min-w-[290px] whitespace-nowrap text-oslo-gray">dev-space</p>
      <Search users={users as unknown as UserProfile[]} />
      <div className="flex min-w-[475px] items-end justify-end">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default TopBar;
