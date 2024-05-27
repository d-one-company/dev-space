import { cn } from '@/lib/utils';
import { UserProfile } from '@/types/users';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = { user: UserProfile; onClick: () => void };

const SearchResult = ({ user, onClick }: Props) => {
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <Link
      onClick={onClick}
      href={`${user.username}`}
      className={cn(
        'text flex w-full cursor-pointer items-center gap-3 bg-night px-3 py-2 text-oslo-gray transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg',
        currTheme === 'dark' ? 'text-white hover:bg-oslo-gray hover:text-white/70' : 'text-black/70 hover:bg-gray-200 hover:text-black/90'
      )}
    >
      {user.image && <img src={user.image} alt={user.name} className="h-10 w-10 rounded-full" />}
      <p>{user.name}</p>
    </Link>
  );
};

export default SearchResult;
