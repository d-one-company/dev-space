'use client';

import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-xl">Not found</h1>
      <button className="underline" onClick={() => router.push('/')}>
        {'<'} Back to feed
      </button>
    </div>
  );
};

export default NotFound;
