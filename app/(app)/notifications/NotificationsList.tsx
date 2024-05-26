'use client';

import { Observer } from 'mobx-react-lite';
import NotificationExcerpt from './NotificationExcerpt';
import { useNotificationsStoreContext } from '@/providers/sockets';

const NotificationsList = () => {
  const {
    store: { notifications },
  } = useNotificationsStoreContext();

  return (
    <Observer>
      {() => (
        <div className="flex h-full min-h-[calc(100vh-108px)] flex-col border-l border-r border-rangoon-green">
          {notifications.notificationsList?.map(notification => <NotificationExcerpt key={notification.id} notification={notification} />)}
        </div>
      )}
    </Observer>
  );
};

export default NotificationsList;
