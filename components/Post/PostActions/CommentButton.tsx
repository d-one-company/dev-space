import { MessageSquare } from 'lucide-react';

const CommentButton = () => {
  return (
    <button className="hover:bg-foreground/10 pointer-events-none flex w-fit items-center gap-1 rounded-lg bg-onyx px-3 py-2 text-oslo-gray transition-colors duration-200">
      <MessageSquare className="size-5" />
      <span>Comment</span>
    </button>
  );
};

export default CommentButton;
