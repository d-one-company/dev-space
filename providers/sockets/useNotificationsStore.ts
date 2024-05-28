import createPusherClient from '@/lib/pusher/pusherClient';
import { useLocalObservable } from 'mobx-react-lite';
import type { Notification } from '@/types/notifications';

export type Store = {
  notifications: {
    unreadCount: number;
    notificationsList: Notification[];
  };
  pusherClient: ReturnType<typeof createPusherClient> | null;
  setInitialData: (data?: Notification[]) => void;
  startSocket: (userId: string) => void;
  readSocket: () => void;
  markAsRead: (notificationId: string) => void;
  addNotification: (notification: Notification) => void;
  socketDisconnect: (userId: string) => void;
};

const useNotificationsStore = () => {
  const store = useLocalObservable<Store>(() => ({
    notifications: {
      unreadCount: 0,
      notificationsList: [],
    },
    pusherClient: null,

    setInitialData: data => {
      if (!data) return;
      for (let i = 0; i < data.length; i++) {
        const index = store.notifications.notificationsList.findIndex(n => n.id === data[i].id);
        if (index === -1) {
          store.notifications.notificationsList.push(data[i]);
          if (data[i].isRead === false) store.notifications.unreadCount++;
        }
      }
    },

    startSocket: userID => {
      store.pusherClient = createPusherClient();
      store.pusherClient.subscribe(userID);
    },

    readSocket: () => {
      if (!store.pusherClient) {
        console.error('Pusher client not initialized');
        return;
      }
      store.pusherClient.bind('notification:new', (data: Notification) => {
        store.addNotification(data);
      });

      store.pusherClient.bind('notification:delete', (data: Notification) => {
        const index = store.notifications.notificationsList.findIndex(n => n.id === data.id);
        if (index !== -1) {
          store.notifications.notificationsList.splice(index, 1);
          if (data.isRead === false) store.notifications.unreadCount--;
        }
      });
    },

    markAsRead: notificationId => {
      for (const notification of store.notifications.notificationsList) {
        if (notification.id === notificationId && notification.isRead === false) {
          notification.isRead = true;
          store.notifications.unreadCount--;
          break;
        }
      }
    },

    addNotification: notification => {
      const index = store.notifications.notificationsList.findIndex(n => n.id === notification.id);
      if (index === -1) {
        store.notifications.notificationsList.unshift(notification);
        if (notification.isRead === false) store.notifications.unreadCount++;
      }
    },

    socketDisconnect: userId => {
      if (!store.pusherClient) {
        console.error('Pusher client not initialized');
        return;
      }
      store.pusherClient.unbind_global();
      store.pusherClient.unsubscribe(userId);
      store.pusherClient.disconnect();
    },
  }));

  return store;
};

export default useNotificationsStore;
