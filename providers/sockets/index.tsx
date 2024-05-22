'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import type { Store, Notification } from './useWebSocketsStore';
import type { Post } from '@/types/posts';
import useWebSocketsStore from './useWebSocketsStore';

const WebSocketsContext = createContext<{ store: Store }>({ store: undefined as any });
export const useWebSocketsStoreContext = () => useContext(WebSocketsContext);

type WebSocketsProviderProps = {
  children: ReactNode;
  initialData: { posts: Post[]; notifications: Notification[] };
  userId: string;
};

const WebSocketsProvider = ({ children, initialData, userId }: WebSocketsProviderProps) => {
  const store = useWebSocketsStore();
  const { setInitialData, readSocket, startSocket } = store;

  useEffect(() => {
    setInitialData(initialData);
    startSocket(userId);
    readSocket();
  }, [initialData, setInitialData, readSocket, startSocket]); // eslint-disable-line

  return <WebSocketsContext.Provider value={{ store }}>{children}</WebSocketsContext.Provider>;
};

export default WebSocketsProvider;
