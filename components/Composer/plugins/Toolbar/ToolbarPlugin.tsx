import { Button } from '@/components/Button';
import createPost from '@/lib/actions/createPost';
import clearCachesByServerAction from '@/lib/utils/revalidatePath';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useMutation } from '@tanstack/react-query';
import { ArrowBigRight } from 'lucide-react';
import { useRef } from 'react';
import CodeInput from './Code';
import ImageUpload from './ImageUpload';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      clearCachesByServerAction('/');
    },
  });

  return (
    <div className="flex w-full items-center justify-between rounded-b-xl bg-rangoon-green px-5 py-2" ref={toolbarRef}>
      <div className="flex items-center gap-2">
        <CodeInput editor={editor} />
        <ImageUpload editor={editor} />
      </div>
      <Button
        onClick={() => {
          const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON());
          mutation.mutate(stringifiedEditorState);
        }}
        className="bg-transparent text-white transition-colors duration-200 hover:bg-battleship-gray/20"
      >
        <ArrowBigRight />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
