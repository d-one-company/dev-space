import { Button } from '@/components/Button';
import createPost from '@/lib/actions/createPost';
import { EMPTY_STATE } from '@/lib/consts/editorEmptyState';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isRootTextContentEmpty } from '@lexical/text';
import { useMutation } from '@tanstack/react-query';
import { ArrowBigRight } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'sonner';
import CodeInput from './Code';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast(<p className="text-red-500">Post created!</p>);
    },
  });

  return (
    <div className="border-post-border flex w-full items-center justify-between rounded-b-xl border-x-2 border-b-2 bg-onyx px-2 py-2" ref={toolbarRef}>
      <CodeInput editor={editor} />
      <Button
        onClick={() => {
          editor.update(() => {
            const empty = $isRootTextContentEmpty(false);
            if (empty) return;

            const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON());
            editor.setEditorState(editor.parseEditorState(EMPTY_STATE));
            mutation.mutate(stringifiedEditorState);
          });
        }}
        className="hover:text-primary-foreground bg-transparent text-oslo-gray transition-colors duration-200 hover:bg-transparent"
      >
        <ArrowBigRight />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
