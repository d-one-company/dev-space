import { Button } from '@/components/Button';
import { LexicalEditor } from 'lexical';
import { Camera } from 'lucide-react';
import { ChangeEvent, useRef } from 'react';
import { INSERT_IMAGE_COMMAND } from '../ImagePlugin';

type Props = { editor: LexicalEditor };

const ImageUpload = ({ editor }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file && file.type.startsWith('image/')) {
      const src = URL.createObjectURL(file);

      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        altText: file.name,
        src: src,
      });
    }
  };

  return (
    <>
      <input ref={fileInputRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} />
      <Button className="hover:bg-battleship-gray/20 bg-transparent text-white transition-colors duration-200" onClick={() => fileInputRef.current?.click()}>
        <Camera />
      </Button>
    </>
  );
};

export default ImageUpload;
