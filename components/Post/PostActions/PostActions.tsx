import likePost from '@/lib/actions/likePost';
import { Post } from '@/types/posts';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';

type Props = { post: Post };

const PostActions = ({ post }: Props) => {
  const handleLike = () => {
    likePost(post.id);
  };

  return (
    <div className="flex items-center gap-3">
      <LikeButton isLiked />
      <CommentButton />
      <ShareButton />
    </div>
  );
};

export default PostActions;
