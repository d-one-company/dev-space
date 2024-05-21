import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';

const PostActions = () => {
  return (
    <div className="flex items-center gap-3">
      <LikeButton isLiked />
      <CommentButton />
      <ShareButton />
    </div>
  );
};

export default PostActions;
