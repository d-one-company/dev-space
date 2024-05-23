'use client';

import { Post } from '@/types/posts';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { $getEditor } from 'lexical';
import { ComponentProps } from 'react';
import editorTheme from '../Composer/EditorTheme';
import { ImageNode } from '../Composer/nodes/ImageNode';
import CodeHighlightPlugin from '../Composer/plugins/CodeHighlightPlugin';

type EditorConfig = ComponentProps<typeof LexicalComposer>['initialConfig'];

type Props = { post: Post };

const PostContent = ({ post }: Props) => {
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
            <ContentEditable className="flex max-h-screen min-h-60 w-full flex-col overflow-y-scroll rounded-t-xl border border-transparent bg-onyx/60 px-4 pt-4 text-battleship-gray outline-none" />
          }
        />
      </LexicalComposer>
    </div>
  );
};

export default PostContent;
