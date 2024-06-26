'use client';

import { cn } from '@/lib/utils/cn';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement, useEffect, useState } from 'react';
import { Badge } from '../Badge';

type Props = {
  icon: JSX.Element;
  label: string;
  href?: string;
  badgeNumber?: number;
};

const NavItem = ({ icon, label, badgeNumber, href = '#' }: Props) => {
  const pathname = usePathname();
  const selected = pathname === href;

  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <Link
      href={href}
      className={cn(
        'flex w-full items-center justify-between gap-4 rounded-lg px-4 py-2',
        'transition-colors duration-200',
        currTheme === 'dark' ? 'text-white hover:text-white/70' : 'text-black/70 hover:text-black/90',
        selected && (currTheme === 'dark' ? 'text-foreground-primary hover:text-foreground-primary' : 'text-foreground hover:text-foreground')
      )}
    >
      <div className="flex items-center gap-4">
        {cloneElement(icon, { className: 'size-5' })}
        {label}
      </div>
      {!!badgeNumber && <Badge variant={currTheme === 'dark' ? 'secondary' : 'default'}> {badgeNumber} </Badge>}
    </Link>
  );
};

export default NavItem;
