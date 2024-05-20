import { Button } from '@/components/Button';
import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { $createParagraphNode, $createTextNode, $getSelection, $isRangeSelection, LexicalEditor } from 'lexical';
import { Code } from 'lucide-react';

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
    <Button className="hover:bg-battleship-gray/20 bg-transparent text-white transition-colors duration-200" onClick={toggleCodeBlock}>
      <Code />
    </Button>
  );
};

export default CodeInput;
