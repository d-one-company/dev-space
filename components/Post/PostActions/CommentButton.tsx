import { MessageSquare } from 'lucide-react';

const CommentButton = () => {
  return (
    <button className="text-davy-gray pointer-events-none flex w-fit items-center gap-1 rounded-lg bg-onyx px-3 py-2 transition-colors duration-200 hover:bg-gold-drop/10">
      <MessageSquare className="size-5" />
      <span>Comment</span>
    </button>
  );
};

export default CommentButton;
