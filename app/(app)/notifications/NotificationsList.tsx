'use client';

import { useNotificationsStoreContext } from '@/providers/sockets';
import { Observer } from 'mobx-react-lite';
import NotificationExcerpt from './NotificationExcerpt';

const NotificationsList = () => {
  const {
    store: { notifications },
  } = useNotificationsStoreContext();

  return (
    <Observer>
      {() => (
        <div className="flex h-full min-h-[calc(100vh-108px)] w-full flex-col border-l border-r border-oslo-gray">
          {notifications.notificationsList?.map(notification => <NotificationExcerpt key={notification.id} notification={notification} />)}
        </div>
      )}
    </Observer>
  );
};

export default NotificationsList;
