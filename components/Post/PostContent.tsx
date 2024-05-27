'use client';

import { cn } from '@/lib/utils';
import { Post } from '@/types/posts';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { $getEditor } from 'lexical';
import { useTheme } from 'next-themes';
import { ComponentProps, useEffect, useState } from 'react';
import editorTheme from '../Composer/EditorTheme';
import { ImageNode } from '../Composer/nodes/ImageNode';
import CodeHighlightPlugin from '../Composer/plugins/CodeHighlightPlugin';

type EditorConfig = ComponentProps<typeof LexicalComposer>['initialConfig'];

type Props = { post: Post };

const PostContent = ({ post }: Props) => {
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  const prepopulateValue = () => {
    try {
      const editor = $getEditor();
      editor.setEditorState(editor.parseEditorState(post.content));
    } catch (error) {
      console.error(error);
    }
  };

  const editorConfig: EditorConfig = {
    namespace: 'post',
    editorState: prepopulateValue,
    editable: false,
    theme: editorTheme,
    onError(error: Error) {
      throw error;
    },
    nodes: [ImageNode, CodeNode, CodeHighlightNode],
  };

  return (
    <div>
      <LexicalComposer key={post.id} initialConfig={editorConfig}>
        <CodeHighlightPlugin />
        <RichTextPlugin
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
          contentEditable={
            <ContentEditable
              className={cn(
                'flex max-h-screen min-h-60 w-full flex-col overflow-y-scroll rounded-t-xl border border-transparent bg-onyx px-4 pt-4 text-oslo-gray outline-none',
                currTheme === 'dark' ? 'text-white/70' : 'text-black/70'
              )}
            />
          }
        />
      </LexicalComposer>
    </div>
  );
};

export default PostContent;
