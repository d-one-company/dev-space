import type { PropsWithChildren } from 'react';
import NotificationsList from './NotificationsList';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full flex-col lg:grid lg:grid-cols-[380px_auto]">
      <div className="flex h-full flex-col">
        <div className="flex h-[48px] items-center border-b border-l border-r border-oslo-gray px-4 text-sm">Notifications</div>
        <div className="hidden max-h-[calc(100vh-60px)] overflow-y-auto lg:flex">
          <NotificationsList />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
