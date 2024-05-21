import { authOptions } from '@/auth';
import Editor from '@/components/Composer/Composer';
import { getServerSession } from 'next-auth';
import SignIn from './SignIn';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <section>
      <div>
        {user ? (
          <div className="flex flex-col gap-2">
            <div className="relative">
              <Editor />
            </div>
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </section>
  );
}
