'use client';

import { useNotificationsStoreContext } from '@/providers/sockets';
import Bell from '@/components/icons/Bell';
import { Observer } from 'mobx-react-lite';

const UnreadCount = () => {
  const {
    store: { notifications },
  } = useNotificationsStoreContext();

  return (
    <div className="hidden h-full w-full items-center justify-center lg:flex">
      <Observer>
        {() => (
          <div className="flex flex-col items-center gap-4">
            <Bell />
            {notifications.unreadCount < 1 ? (
              <span>No unread notifications</span>
            ) : (
              <p>
                <span>{notifications.unreadCount}</span> unread notifications
              </p>
            )}
          </div>
        )}
      </Observer>
    </div>
  );
};

export default UnreadCount;
