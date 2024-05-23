export type UserProfile = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  username: string | null;
  followers_count: number;
  following_count: number;
  is_following: boolean;
};
