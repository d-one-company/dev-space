import { SerializedEditorState, SerializedLexicalNode, SerializedParagraphNode, SerializedTextNode } from 'lexical';

export const EMPTY_TEXT: SerializedTextNode = {
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text: '',
  type: 'text',
  version: 1,
};

export const EMPTY_PARAGRAPH: SerializedParagraphNode = {
  type: 'paragraph',
  version: 1,
  children: [EMPTY_TEXT],
  direction: null,
  format: '',
  indent: 0,
  textFormat: 0,
};

export const EMPTY_STATE: SerializedEditorState<SerializedLexicalNode> = {
  root: {
    children: [EMPTY_PARAGRAPH],
    direction: null,
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
};
