'use client';

import { Post } from '@/types/posts';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { ImageNode } from '../Composer/nodes/ImageNode';

type Props = { post: Post };

const PostContent = ({ post }: Props) => {
  const editorConfig = {
    namespace: 'text-editor',
    theme: {},
    onError(error: Error) {
      throw error;
    },
    nodes: [ImageNode, CodeNode, CodeHighlightNode],
  };

  return (
    <div>
      <LexicalComposer initialConfig={editorConfig}>
        <ContentEditable
          contentEditable={false}
          className="flex max-h-screen min-h-60 w-full flex-col overflow-y-scroll rounded-t-xl border border-transparent bg-onyx/60 px-4 pt-4 text-battleship-gray outline-none"
        />
      </LexicalComposer>
    </div>
  );
};

export default PostContent;
