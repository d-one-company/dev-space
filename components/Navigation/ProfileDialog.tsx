'use client';

import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogPortal, DialogFooter, DialogTitle } from '../Dialog';
import Image from 'next/image';
import { Input } from '../Input';
import { useState } from 'react';
import type { User } from '@/types/users';
import { Button } from '../Button';

type ProfileDialogProps = {
  user: User;
  updateUser: (userId: string, username: string) => void;
};

const ProfileDialog = ({ user, updateUser }: ProfileDialogProps) => {
  const [username, setUsername] = useState(user?.username || '');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2">
          <Image className="rounded-full" src={user?.image || ''} width={18} height={18} alt="profile_photo" />
          <span className="line-clamp-1">{user.username}</span>
        </button>
      </DialogTrigger>
      <DialogOverlay>
        <DialogPortal>
          <DialogContent>
            <DialogTitle>Edit Profile</DialogTitle>
            <form className="flex flex-col gap-4">
              <Input name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
              <Button
                onClick={async () => {
                  updateUser(user.id, username);
                }}
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
