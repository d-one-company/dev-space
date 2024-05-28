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

export type User = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  username: string | null;
  emailVerified: Date | null;
  createdAt: Date;
};
