'use client';

import { ReactNode, createContext, useContext, useEffect } from 'react';
import type { Store } from './useNotificationsStore';
import useNotificationsStore from './useNotificationsStore';
import { Notification } from '@/types/notifications';

const NotificationsContext = createContext<{ store: Store }>({ store: undefined as any });
export const useNotificationsStoreContext = () => useContext(NotificationsContext);

type NotificationsProviderProps = {
  children: ReactNode;
  notifications: Notification[];
  userId: string;
};

const NotificationsProvider = ({ children, notifications, userId }: NotificationsProviderProps) => {
  const store = useNotificationsStore();
  const { setInitialData, readSocket, startSocket, socketDisconnect } = store;

  useEffect(() => {
    setInitialData(notifications);
    startSocket(userId);
    readSocket();

    return () => socketDisconnect(userId);
  }, []); // eslint-disable-line

  return <NotificationsContext.Provider value={{ store }}>{children}</NotificationsContext.Provider>;
};

export default NotificationsProvider;
