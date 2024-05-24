export type NotificationType = 'like' | 'follow' | 'newPost' | 'bookmark';

export type Notification = {
  id: string;
  postId: string | null;
  type: NotificationType;
  isRead: boolean;
  createdAt: Date;
  creator: {
    id: string;
    name: string | null;
    image: string | null;
    username: string | null;
  };
};
