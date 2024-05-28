'use client';

import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../Button';

const LogoutButton = () => {
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <Button className={cn('bg-post-border text-oslo-gray hover:bg-red-500/60', currTheme === 'dark' ? 'text-white' : 'text-black')} onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default LogoutButton;
