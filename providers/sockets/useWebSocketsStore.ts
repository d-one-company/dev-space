import { useLocalObservable } from 'mobx-react-lite';
import { observable, IObservableArray } from 'mobx';
import pusherClient from '@/lib/pusher/pusherClient';
import type { Post } from '@/types/posts';

export type Notification = {
  id: string;
  type: 'like' | 'follow' | 'newPost';
  createdAt: Date;
  isRead: boolean;
  from: {
    id: string;
    name: string;
    image: string;
  };
};

type NotificationStore = {
  unreadCount: number;
  notificationsList: Notification[];
};

export type Store = {
  notifications: NotificationStore;
  posts: IObservableArray<Post>;
  setInitialData: ({ posts, notifications }: { posts: Post[]; notifications: Notification[] }) => void;
  markAsRead?: (notificationId: string) => void;
  startSocket: (userId: string) => void;
  readSocket: () => void;
  addPost: (posts: Post) => void;
  addNotification: (notifications: Notification) => void;
  updateUnreadCount: (change: number) => void;
};

const useWebSocketsStore = () => {
  const store = useLocalObservable<Store>(() => ({
    notifications: {
      unreadCount: 0,
      notificationsList: [],
    },

    posts: observable.array([], { autoBind: true }),

    setInitialData({ posts, notifications }) {
      for (let i = 0; i < posts.length; i++) {
        const index = store.posts.findIndex(p => p.id === posts[i].id);
        if (index === -1) {
          store.posts.push(posts[i]);
        }
      }
      for (const notification of notifications) {
        notifications.push(notification);
        if (notification.isRead === false) store.notifications.unreadCount++;
      }
    },

    markAsRead(notificationId: string) {
      for (const notification of store.notifications.notificationsList) {
        if (notification.id === notificationId) {
          notification.isRead = true;
          store.notifications.unreadCount--;
          break;
        }
      }
    },

    startSocket(userId: string) {
      console.info('Starting socket for user: ', store.posts);
      pusherClient.subscribe(userId);
    },

    readSocket() {
      pusherClient.bind('notification:new', (data: Notification) => {
        store.addNotification(data);
        store.updateUnreadCount(1);
      });

      pusherClient.bind('notification:delete', (data: Notification) => {
        const index = store.notifications.notificationsList.findIndex(n => n.id === data.id);
        if (index !== -1) {
          store.notifications.notificationsList.splice(index, 1);
          if (data.isRead === false) store.updateUnreadCount(-1);
        }
      });

      pusherClient.bind('post:new', (data: Post) => {
        console.log('new post websocket trigger: ', data);
        store.addPost(data);
      });

      pusherClient.bind('post:delete', (data: Post) => {
        const index = store.posts.findIndex(p => p.id === data.id);
        if (index !== -1) {
          store.posts.splice(index, 1);
        }
      });
    },

    addPost(post) {
      const index = store.posts.findIndex(p => p.id === post.id);
      if (index === -1) {
        store.posts.replace([post, ...store.posts]);
      }
    },

    addNotification(notification) {
      store.notifications.notificationsList.push(notification);
    },

    updateUnreadCount(change: number) {
      store.notifications.unreadCount += change;
    },
  }));

  return store;
};

export default useWebSocketsStore;
