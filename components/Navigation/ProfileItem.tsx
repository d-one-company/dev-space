'use client';

import { cn } from '@/lib/utils/cn';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement, useEffect, useState } from 'react';
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

  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <div className={cn('flex w-full items-center justify-between rounded-lg px-4 py-2 text-oslo-gray')}>
      <Link
        className={cn(
          'flex w-full items-center justify-between gap-4 rounded-lg py-2',
          'transition-colors duration-200',
          currTheme === 'dark' ? 'text-white hover:text-white/70' : 'text-black/70 hover:text-black/90',
          selected && (currTheme === 'dark' ? 'text-foreground-primary hover:text-foreground-primary' : 'text-foreground hover:text-foreground'),
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
