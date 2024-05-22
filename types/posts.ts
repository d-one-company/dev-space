export type Post = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount?: number;
  author: {
    id: string;
    name: string | null;
    image: string | null;
  };
};
