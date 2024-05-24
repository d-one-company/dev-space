import NotificationsList from './NotificationsList';
import UnreadCount from './UnreadCount';

const Page = () => {
  return (
    <div className="flex h-full w-full flex-grow">
      <UnreadCount />
      <div className="flex w-full lg:hidden">
        <NotificationsList />
      </div>
    </div>
  );
};

export default Page;
