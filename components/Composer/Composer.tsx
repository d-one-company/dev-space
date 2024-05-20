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
        <ToolbarPlugin />
        <div className="">
          <RichTextPlugin
            contentEditable={<ContentEditable className="border-gold-drop flex min-h-80 w-full flex-col rounded-xl border p-2 outline-none" />}
            placeholder={<div className="absolute left-[9px] top-[54px]">Enter some text...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
