'use client';

import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement } from 'react';
import { Badge } from '../Badge';

type Props = {
  className?: string;
  icon: JSX.Element;
  label: string;
  href?: string;
  badgeNumber?: number;
  disabled?: boolean;
};

const NavItem = ({ className, icon, label, badgeNumber, disabled, href = '#' }: Props) => {
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-primary-foreground flex w-full items-center justify-between gap-4 rounded-lg px-4 py-2',
        'hover:text-primary-foreground/80 transition-colors duration-200',
        selected && 'text-foreground hover:text-foreground',
        disabled && 'text-disabled-button pointer-events-none cursor-not-allowed',
        className
      )}
    >
      <div className="flex items-center gap-4">
        {cloneElement(icon, { className: 'size-5' })}
        {label}
      </div>
      {badgeNumber && <Badge variant="secondary"> {badgeNumber} </Badge>}
    </Link>
  );
};

export default NavItem;
