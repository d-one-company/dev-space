import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createParagraphNode, $createTextNode, $getSelection, $isRangeSelection } from 'lexical';
import { Camera, Code } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../../Button';
import { INSERT_IMAGE_COMMAND } from './ImagePlugin';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function toggleCodeBlock() {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection) && !selection.isCollapsed()) {
        const nodes = selection.getNodes();

        for (const node of nodes) {
          const textContent = node.getTextContent();
          node.remove();

          if ($isCodeNode(node)) {
            const paragraphNode = $createParagraphNode();
            paragraphNode.append($createTextNode(textContent));
            selection.insertNodes([paragraphNode]);
          } else {
            const codeNode = $createCodeNode();
            codeNode.append($createTextNode(textContent));
            selection.insertNodes([codeNode]);
          }
        }
      }
    });
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file && file.type.startsWith('image/')) {
      const src = URL.createObjectURL(file);

      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        altText: file.name,
        src: src,
      });
    }
  };

  return (
    <div className="bg-rangoon-green flex w-full items-center gap-5 rounded-b-xl px-5 py-2" ref={toolbarRef}>
      <Button className="hover:bg-battleship-gray/20 bg-transparent text-white" onClick={toggleCodeBlock}>
        <Code />
      </Button>
      <input ref={fileInputRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} />
      <Button className="hover:bg-battleship-gray/20 bg-transparent text-white" onClick={() => fileInputRef.current?.click()}>
        <Camera />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
