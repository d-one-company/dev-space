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
    <Button className="hover:text-primary-foreground bg-transparent text-oslo-gray transition-colors duration-200 hover:bg-transparent" onClick={toggleCodeBlock}>
      <FileCode />
    </Button>
  );
};

export default CodeInput;
