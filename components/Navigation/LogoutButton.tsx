'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../Button';

const LogoutButton = () => {
  return (
    <Button className="bg-red-500/80 text-white hover:bg-red-500/60" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default LogoutButton;
