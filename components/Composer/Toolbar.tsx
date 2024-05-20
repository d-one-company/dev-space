import { getCodeLanguages, getDefaultCodeLanguage } from '@lexical/code';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Code } from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Button } from '../Button';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [codeLanguage, setCodeLanguage] = useState<string>(getDefaultCodeLanguage());

  const codeLanguages = useMemo(() => getCodeLanguages(), []);

  const onCodeLanguageSelect = useCallback(
    (e: string) => {
      setCodeLanguage(e);
    },
    [editor]
  );

  return (
    <div className="bg-rangoon-green flex w-full items-center gap-5 rounded-b-xl px-5 py-2" ref={toolbarRef}>
      <Button className="hover:bg-battleship-gray/20 bg-transparent text-white">
        <Code />
      </Button>
    </div>
  );
}

export default ToolbarPlugin;
