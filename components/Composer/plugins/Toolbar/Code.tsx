import { Button } from '@/components/Button';
import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { $createTextNode, $getSelection, $isRangeSelection, LexicalEditor } from 'lexical';
import { FileCode } from 'lucide-react';

type Props = { editor: LexicalEditor };

const CodeInput = ({ editor }: Props) => {
  function toggleCodeBlock() {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection) && !selection.isCollapsed()) {
        const nodes = selection.getNodes();

        for (const node of nodes) {
          const textContent = node.getTextContent();

          node.remove();

          if (!$isCodeNode(node)) {
            const codeNode = $createCodeNode();
            codeNode.append($createTextNode(textContent));
            selection.insertNodes([codeNode]);
          }
        }
      }
    });
  }
  return (
    <Button className="hover:bg-battleship-gray/20 bg-transparent text-white transition-colors duration-200" onClick={toggleCodeBlock}>
      <FileCode />
    </Button>
  );
};

export default CodeInput;
