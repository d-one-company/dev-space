export type Post = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount?: number;
  userId?: string;
  author: {
    id: string;
    name: string | null;
    image: string | null;
    username: string | null;
  };
};
