'use client';

import React from 'react';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import type { PropsWithChildren } from 'react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const segment = useSelectedLayoutSegment();
  const { status } = useSession();
  const router = useRouter();
  if (status === 'unauthenticated' && segment === '(app)') {
    router.push('/signin');
  }

  return children;
};

export default AuthProvider;
