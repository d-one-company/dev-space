'use client';

import { cn } from '@/lib/utils/cn';
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
    <div className={cn('flex w-full items-center justify-between rounded-lg px-4 py-2 text-oslo-gray')}>
      <Link
        className={cn(
          'text-primary-foreground/80 flex w-full items-center justify-between gap-4 rounded-lg py-2',
          'hover:text-primary-foreground/50 transition-colors duration-200',
          selected && 'text-foreground hover:text-foreground',
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
