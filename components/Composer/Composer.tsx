'use client';

import { cn } from '@/lib/utils';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ComposerPlaceholder from './ComposerPlaceholder';
import editorTheme from './EditorTheme';
import './composer.css';
import { ImageNode } from './nodes/ImageNode';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import ImagesPlugin from './plugins/ImagePlugin';
import ToolbarPlugin from './plugins/Toolbar/ToolbarPlugin';

const editorConfig = {
  namespace: 'text-editor',
  theme: editorTheme,
  onError(error: Error) {
    throw error;
  },
  nodes: [ImageNode, CodeNode, CodeHighlightNode],
};

export default function Editor() {
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className={cn(
              'border-post-border flex max-h-screen min-h-60 w-full flex-col overflow-y-scroll rounded-t-xl border-2 px-4 pt-4 outline-none',
              currTheme === 'dark' ? 'bg-onyx text-white/70' : 'text-black/70'
            )}
          />
        }
        placeholder={<ComposerPlaceholder currTheme={currTheme} />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <CodeHighlightPlugin />
      <ImagesPlugin />
      <ToolbarPlugin />
    </LexicalComposer>
  );
}
