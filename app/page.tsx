import { Button } from '@/components/Button';
import LikeButton from '@/components/LikeButton';

export default function Home() {
  return (
    <div className="flex gap-10 p-10">
      <Button>Upgrade now</Button>
      <LikeButton isLiked={false} />
    </div>
  );
}
