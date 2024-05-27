'use client';

import { useNotificationsStoreContext } from '@/providers/sockets';
import { Observer } from 'mobx-react-lite';
import Bell from '../icons/Bell';
import NavItem from './NavItem';

const NotificationItem = () => {
  const {
    store: { notifications },
  } = useNotificationsStoreContext();
  return <Observer>{() => <NavItem icon={<Bell />} label="Notifications" href="/notifications" badgeNumber={notifications.unreadCount} />}</Observer>;
};

export default NotificationItem;
