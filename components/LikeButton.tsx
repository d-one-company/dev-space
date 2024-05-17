'use client';

import { cn } from '@/lib/utils';
import { ThumbsUp } from 'lucide-react';

type Props = { isLiked: boolean; onClick?: () => void };

const LikeButton = ({ isLiked, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-onyx hover:bg-gold-drop/10 flex w-fit items-center gap-1 rounded-lg px-3 py-2 transition-colors duration-200',
        isLiked ? 'text-gold-drop bg-gold-drop/10' : 'text-oslo-gray'
      )}
    >
      <ThumbsUp className="size-5" />
      <span>Like</span>
    </button>
  );
};

export default LikeButton;
