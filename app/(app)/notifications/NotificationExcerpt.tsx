'use client';

import { Notification } from '@/types/notifications';
import Image from 'next/image';

type NotificationExcerptProps = {
  notification: Notification;
};

const NotificationExcerpt = ({ notification }: NotificationExcerptProps) => {
  return (
    <div className="flex w-full justify-between">
      {notification.creator.image && <Image src={notification.creator.image} alt="ProfilePicture" width={100} height={100} />}
      <div>
        <p>{notification?.postId}</p>
        <p>{notification?.type}</p>
        <p>By: {notification.creator.username}</p>
      </div>
    </div>
  );
};

export default NotificationExcerpt;
