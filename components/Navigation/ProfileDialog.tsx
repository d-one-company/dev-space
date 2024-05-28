'use client';

import { cn } from '@/lib/utils';
import type { User } from '@/types/users';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '../Dialog';
import { Input } from '../Input';

type ProfileDialogProps = {
  user: User;
  updateUser: (userId: string, username: string) => void;
};

const ProfileDialog = ({ user, updateUser }: ProfileDialogProps) => {
  const [username, setUsername] = useState(user?.username || '');
  const [currTheme, setCurrTheme] = useState<string>('dark');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrTheme(theme);
  }, [theme]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex w-full items-center gap-2 px-5 py-2">
          <Image className="rounded-full" src={user?.image || ''} width={18} height={18} alt="profile_photo" />
          <span className="text-primary-foreground line-clamp-1">{user.username}</span>
        </button>
      </DialogTrigger>
      <DialogOverlay className="bg-black">
        <DialogPortal>
          <DialogContent className="border-foreground bg-night">
            <DialogTitle className="text-primary-foreground">Edit Profile</DialogTitle>
            <form className="flex flex-col gap-4">
              <Input
                className={cn('focus-within:ring-foreground/50 bg-night placeholder:text-oslo-gray', currTheme === 'dark' ? 'text-white/70' : 'text-black/70')}
                name="username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Button
                onClick={async () => {
                  updateUser(user.id, username);
                }}
                disabled={!username}
                type="submit"
              >
                Save changes
              </Button>
            </form>
          </DialogContent>
        </DialogPortal>
      </DialogOverlay>
    </Dialog>
  );
};

export default ProfileDialog;
