'use client';

import { cn } from '@/lib/utils/cn';
import { Notification } from '@/types/notifications';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type NotificationExcerptProps = {
  notification: Notification;
};

const NotificationExcerpt = ({ notification }: NotificationExcerptProps) => {
  const { notificationId } = useParams() as { notificationId?: string };

  return (
    <Link
      href={`/notifications/${notification.id}`}
      className={cn(
        'relative flex h-[58px] w-full items-center justify-between border-b border-b-rangoon-green px-4 text-sm',
        notificationId === notification.id && 'bg-onyx',
        !notification.isRead && "after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:bg-white after:content-['']"
      )}
    >
      <div className="flex items-center gap-2">
        {notification.creator.image && <Image src={notification.creator.image} width={24} height={24} className="flex flex-shrink-0 rounded-full " alt="Profile" />}
        {generateNotificationMessage(notification)}
      </div>
    </Link>
  );
};

export default NotificationExcerpt;

// prettier-ignore
function generateNotificationMessage(notification: Notification) {

  switch (notification.type) {
    case "like":
      return <p className='text-gainsboro/80'><Link href={"/" + notification.creator.username} className='text-white'>{notification.creator.username}</Link> liked your post. See which one caught their eye!</p>
    case "follow":
      return <p className='text-gainsboro/80'><Link href={"/" + notification.creator.username} className='text-white'>{notification.creator.username}</Link> is now following you! Discover their profile.</p>
    case "newPost":
      return <p className='text-gainsboro/80'><Link href={"/" + notification.creator.username} className='text-white'>{notification.creator.username}</Link> just shared a new post! Tap here to check it out.</p>
    default:
      return <></>
  }

}
