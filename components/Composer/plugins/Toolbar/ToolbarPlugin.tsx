import { Button } from '@/components/Button';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ArrowBigRight } from 'lucide-react';
import { useRef } from 'react';
import CodeInput from './Code';
import ImageUpload from './ImageUpload';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const toolbarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-rangoon-green flex w-full items-center justify-between rounded-b-xl px-5 py-2" ref={toolbarRef}>
      <div className="flex items-center gap-2">
        <CodeInput editor={editor} />
        <ImageUpload editor={editor} />
      </div>
      <Button className="hover:bg-battleship-gray/20 bg-transparent text-white transition-colors duration-200">
        <ArrowBigRight />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
