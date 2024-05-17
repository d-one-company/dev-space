'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement } from 'react';

type Props = {
  className?: string;
  icon: JSX.Element;
  label: string;
  href?: string;
};

const NavItem = ({ className, icon, label, href = '#' }: Props) => {
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-gainsboro flex w-full items-center gap-4 rounded-lg px-4 py-2',
        'hover:text-gainsboro/80 transition-colors duration-200',
        selected && 'text-gold-drop hover:text-gold-drop',
        className
      )}
    >
      {cloneElement(icon, { className: 'size-5' })}
      {label}
    </Link>
  );
};

export default NavItem;
