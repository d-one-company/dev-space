import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createParagraphNode, $createTextNode, $getSelection, $isRangeSelection } from 'lexical';
import { Code } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../Button';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="bg-rangoon-green flex w-full items-center gap-5 rounded-b-xl px-5 py-2" ref={toolbarRef}>
      <Button className="hover:bg-battleship-gray/20 bg-transparent text-white" onClick={toggleCodeBlock}>
        <Code />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
