'use client';

import { cn } from '@/lib/utils/cn';
import { Bookmark } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = { bookmarPost: (id: string) => void; id: string; isBookmarked?: boolean };

const BookmarkButton = ({ bookmarPost, id, isBookmarked }: Props) => {
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <button
      onClick={async () => {
        bookmarPost(id);
      }}
      className={cn(
        'bg-transparent transition-colors duration-200 hover:bg-transparent',
        currTheme === 'dark' && (!isBookmarked ? 'text-oslo-gray hover:text-gray-300' : 'text-foreground'),
        currTheme === 'light' && (!isBookmarked ? 'text-post-border hover:text-gray-300' : 'text-foreground')
      )}
    >
      <Bookmark fill="currentColor" />
    </button>
  );
};

export default BookmarkButton;
