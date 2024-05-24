'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../Button';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-oslo-gray">Change theme</p>

      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-transparent hover:bg-transparent">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-white transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
export default ThemeSwitch;
