'use client';

import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { useState } from 'react';
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
  const [currentContent, setCurrentContent] = useState('');

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="flex max-h-screen min-h-60 w-full flex-col overflow-y-scroll rounded-t-xl border border-transparent bg-onyx/60 px-4 pt-4 text-battleship-gray outline-none" />
        }
        placeholder={<div className="absolute left-4 top-4 text-carbon-gray">New Post</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <CodeHighlightPlugin />
      <ImagesPlugin />
      <ToolbarPlugin />
      <OnChangePlugin
        onChange={content => {
          console.log('content', content);
        }}
      />
    </LexicalComposer>
  );
}
