import { cn } from '@/lib/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

type Props = { currTheme: string };

const ComposerPlaceholder = ({ currTheme }: Props) => {
  const [editor] = useLexicalComposerContext();

  const handleFocus = () => {
    editor.focus();
  };

  return (
    <div onClick={handleFocus} role="presentation" className={cn('absolute left-4 top-[18px]', currTheme === 'dark' ? 'text-white/70' : 'text-black/40')}>
      New Post
    </div>
  );
};

export default ComposerPlaceholder;
