import { authOptions } from '@/auth';
import Feed from '@/components/Feed/Feed';
import { getServerSession } from 'next-auth';
import SignIn from './SignIn';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <section>
      <div>{user ? <Feed /> : <SignIn />}</div>
    </section>
  );
}
