'use client';

import { cn } from '@/lib/utils/cn';
import { Bookmark } from 'lucide-react';

type Props = { bookmarPost: (id: string) => void; id: string; isBookmarked?: boolean };

const BookmarkButton = ({ bookmarPost, id, isBookmarked }: Props) => {
  return (
    <button
      onClick={async () => {
        bookmarPost(id);
      }}
      className={cn('bg-transparent transition-colors duration-200 hover:bg-transparent hover:text-white', isBookmarked ? 'text-foreground' : 'text-oslo-gray')}
    >
      <Bookmark fill="currentColor" />
    </button>
  );
};

export default BookmarkButton;
