import { Bookmark } from 'lucide-react';
import { Button } from '../Button';
import PostActions from './PostActions/PostActions';
import PostContent from './PostContent';
import PostProfile from './PostProfile';

const Post = () => {
  return (
    <div className="border-davy-gray flex w-full flex-col gap-4 rounded-lg border p-4">
      <div className="flex w-full items-center justify-between">
        <PostProfile />
        <Button className="text-davy-gray bg-transparent transition-colors duration-200 hover:bg-transparent hover:text-white">
          <Bookmark fill="currentColor" />
        </Button>
      </div>
      <PostContent />
      <PostActions />
    </div>
  );
};

export default Post;
