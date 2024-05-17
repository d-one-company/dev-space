'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement } from 'react';
import { Avatar, AvatarImage } from '../Avatar';
import Cog from '../icons/Cog';

type Props = {
  className?: string;
  label: string;
  href?: string;
};

const ProfileItem = ({ className, label, href = '#' }: Props) => {
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div className={cn('text-gainsboro flex w-full items-center justify-between rounded-lg px-4 py-2')}>
      <Link
        className={cn(
          'text-gainsboro flex w-full items-center justify-between rounded-lg',
          'hover:text-gainsboro/80 transition-colors duration-200',
          selected && 'text-gold-drop hover:text-gold-drop',
          className
        )}
        href={href}
      >
        <div className="flex items-center gap-4">
          <Avatar className="size-7">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          {label}
        </div>
      </Link>
      <Link href={'/settings'}>{cloneElement(<Cog />, { className: 'size-10' })}</Link>
    </div>
  );
};

export default ProfileItem;
