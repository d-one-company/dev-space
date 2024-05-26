import getNotification from '@/lib/queries/notifications/getNotification';
import { notFound } from 'next/navigation';
import ProfileInfo from './ProfileInfo';
import Post from '@/components/Post/Post';

type Props = {
  params: {
    notificationId: string;
  };
};

const Page = async ({ params: { notificationId } }: Props) => {
  const notification = await getNotification(notificationId);
  if (!notification) return notFound();

  return (
    <div className="flex flex-col">
      <div className="min-h-[48px] border-b border-b-rangoon-green" />
      <div className="flex h-full w-full justify-center p-10">{notification.post ? <Post post={notification.post} /> : <ProfileInfo notification={notification} />}</div>
    </div>
  );
};

export default Page;
