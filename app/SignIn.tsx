'use client';
import { signIn } from 'next-auth/react';

function SignIn() {
  return <button onClick={async () => await signIn('google')}>SignIn</button>;
}

export default SignIn;
