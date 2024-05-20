'use client';

import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
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
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="bg-onyx/60 text-battleship-gray flex max-h-screen min-h-60 w-full flex-col overflow-y-scroll rounded-t-xl border border-transparent px-4 pt-4 outline-none" />
        }
        placeholder={<div className="text-carbon-gray absolute left-4 top-4">New Post</div>}
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
