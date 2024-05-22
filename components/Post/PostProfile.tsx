import { Avatar, AvatarImage } from '../Avatar';

const PostProfile = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-9">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <div className="flex flex-col items-start justify-between">
        <p className="text-base">tmhao2005</p>
        <p className="text-davy-gray text-sm">2 hours ago</p>
      </div>
    </div>
  );
};

export default PostProfile;
