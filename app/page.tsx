import { authOptions } from '@/auth';
import SignIn from './SignIn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <section>
      <h1>Home</h1>
      <div>
        {user ? (
          <div className="flex flex-col gap-2">
            <span>Email: {user.email}</span>
            <span>Name: {user.name}</span>
            {user.image && <Image src={user.image} width={100} height={100} alt="ProfilePicture" />}
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </section>
  );
}
