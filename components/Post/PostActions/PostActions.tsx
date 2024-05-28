import { didUserLikePost } from '@/lib/actions/didUserLikePost';
import likePost from '@/lib/actions/likePost';
import unlikePost from '@/lib/actions/unlikePost';
import { Post } from '@/types/posts';
import LikeButton from './LikeButton';

type Props = { post: Post };

async function handleLikePost(postId: string) {
  'use server';
  return await likePost(postId);
}

async function handleUnlikePost(postId: string) {
  'use server';
  return await unlikePost(postId);
}

const PostActions = async ({ post }: Props) => {
  const isLiked = await didUserLikePost(post.id);

  return (
    <div className="flex items-center gap-3">
      <LikeButton likePost={isLiked ? handleUnlikePost : handleLikePost} id={post.id} isLiked={isLiked} />
    </div>
  );
};

export default PostActions;
