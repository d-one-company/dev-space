import { Redo2 } from 'lucide-react';

const ShareButton = () => {
  return (
    <button className="text-davy-gray pointer-events-none flex w-fit items-center gap-1 rounded-lg bg-onyx px-3 py-2 transition-colors duration-200 hover:bg-gold-drop/10">
      <Redo2 className="size-5" />
      <span>Share</span>
    </button>
  );
};

export default ShareButton;
