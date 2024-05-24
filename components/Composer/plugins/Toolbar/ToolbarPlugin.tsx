import { Button } from '@/components/Button';
import createPost from '@/lib/actions/createPost';
import { EMPTY_STATE } from '@/lib/consts/editorEmptyState';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
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
    <div className="bg-secondary-bg flex w-full items-center justify-between rounded-b-xl px-2 py-2" ref={toolbarRef}>
      <CodeInput editor={editor} />
      <Button
        onClick={() => {
          const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON());
          editor.setEditorState(editor.parseEditorState(EMPTY_STATE));
          mutation.mutate(stringifiedEditorState);
        }}
        className="bg-transparent text-white transition-colors duration-200 hover:bg-oslo-gray/20"
      >
        <ArrowBigRight />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
