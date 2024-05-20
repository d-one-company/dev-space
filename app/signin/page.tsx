import GoogleButton from './GoogleButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (user) return redirect('/');

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <GoogleButton />
    </div>
  );
};

export default Page;
