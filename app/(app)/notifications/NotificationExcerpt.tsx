'use client';

import { cn } from '@/lib/utils/cn';
import { useNotificationsStoreContext } from '@/providers/sockets';
import { Notification } from '@/types/notifications';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NotificationExcerptProps = {
  notification: Notification;
};

const NotificationExcerpt = ({ notification }: NotificationExcerptProps) => {
  const {
    store: { markAsRead },
  } = useNotificationsStoreContext();
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <Link
      onClick={() => markAsRead(notification.id)}
      href={notification.postId ? `/posts/${notification.postId}?notificationId=${notification.id}` : `/${notification.creator.username}?notificationId=${notification.id}`}
      className={cn(
        'relative flex h-[58px] w-full items-center justify-between border-b border-b-oslo-gray px-4 text-sm',
        !notification.isRead && "after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:bg-white after:content-['']"
      )}
    >
      <div className="flex items-center gap-2">
        {notification.creator.image && <Image src={notification.creator.image} width={24} height={24} className="flex flex-shrink-0 rounded-full " alt="Profile" />}
        {generateNotificationMessage(notification, currTheme)}
      </div>
    </Link>
  );
};

export default NotificationExcerpt;

// prettier-ignore
function generateNotificationMessage(notification: Notification, theme: string) {

  switch (notification.type) {
    case "like":
      return <p className='text-oslo-gray'><Link href={"/" + notification.creator.username} className={cn(theme === 'dark' ? "text-white/70" : "text-black/70")}>{notification.creator.username}</Link> liked your post. See which one caught their eye!</p>
    case "follow":
      return <p className='text-oslo-gray'><Link href={"/" + notification.creator.username} className={cn(theme === 'dark' ? "text-white/70" : "text-black/70")}>{notification.creator.username}</Link> is now following you! Discover their profile.</p>
    case "newPost":
      return <p className='text-oslo-gray'><Link href={"/" + notification.creator.username} className={cn(theme === 'dark' ? "text-white/70" : "text-black/70")}>{notification.creator.username}</Link> just shared a new post! Tap here to check it out.</p>
    default:
      return <></>
  }

}
