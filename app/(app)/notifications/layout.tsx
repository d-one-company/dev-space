import type { PropsWithChildren } from 'react';
import NotificationsList from './NotificationsList';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[380px_auto]">
      <div>
        <div className="flex h-[48px] items-center border-b border-l border-r border-rangoon-green px-4 text-sm">Notifications</div>
        <div className="hidden max-h-[calc(100vh-60px)] overflow-y-auto lg:flex">
          <NotificationsList />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
