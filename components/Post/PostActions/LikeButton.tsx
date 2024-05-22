'use client';

import { cn } from '@/lib/utils/cn';
import { ThumbsUp } from 'lucide-react';

type Props = { isLiked: boolean; onClick?: () => void };

const LikeButton = ({ isLiked, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-fit items-center gap-1 rounded-lg bg-onyx px-3 py-2 transition-colors duration-200 hover:bg-gold-drop/10',
        isLiked ? 'bg-gold-drop/10 text-gold-drop' : 'text-oslo-gray'
      )}
    >
      <ThumbsUp className="size-5" />
      <span>Like</span>
    </button>
  );
};

export default LikeButton;
