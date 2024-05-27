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
        <div className="border-rangoon-green flex h-full min-h-[calc(100vh-108px)] w-full flex-col border-l border-r">
          {notifications.notificationsList?.map(notification => <NotificationExcerpt key={notification.id} notification={notification} />)}
        </div>
      )}
    </Observer>
  );
};

export default NotificationsList;
