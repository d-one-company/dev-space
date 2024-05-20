'use client';

import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TRANSFORMERS } from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import exampleTheme from './ExampleTheme';
import ToolbarPlugin from './Toolbar';
import './composer.css';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';

const editorConfig = {
  // The editor theme
  namespace: 'rich-text-editor',
  theme: exampleTheme,
  onError(error: Error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="">
        <RichTextPlugin
          contentEditable={<ContentEditable className="border-gold-drop text-battleship-gray flex min-h-80 w-full flex-col rounded-t-xl border p-4 outline-none" />}
          placeholder={<div className="text-carbon-gray absolute left-4 top-4">New Post</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <CodeHighlightPlugin />
        <ListPlugin />
        <LinkPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        <ToolbarPlugin />
      </div>
    </LexicalComposer>
  );
}
