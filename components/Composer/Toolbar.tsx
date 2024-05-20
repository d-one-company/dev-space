import { getCodeLanguages, getDefaultCodeLanguage } from '@lexical/code';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useCallback, useMemo, useRef, useState } from 'react';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [codeLanguage, setCodeLanguage] = useState<string>(getDefaultCodeLanguage());

  const codeLanguages = useMemo(() => getCodeLanguages(), []);

  const onCodeLanguageSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCodeLanguage(e.target.value);
    },
    [editor]
  );

  return (
    <div className="toolbar" ref={toolbarRef}>
      <select className="code-language-selector text-black" value={codeLanguage} onChange={onCodeLanguageSelect}>
        {codeLanguages.map(lang => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ToolbarPlugin;
