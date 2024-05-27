'use client';

import { UserProfile } from '@/types/users';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Input } from './Input';
import SearchResult from './SearchResult';

type Props = { users: UserProfile[] };

export const Search = ({ users }: Props) => {
  const [input, setInput] = useState('');
  const filteredUsers = users
    .filter(user => user.username?.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || user.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    .filter(user => !!user.username)
    .slice(0, 3);

  return (
    <div className="z-max flex w-full flex-col">
      <Input
        type="search"
        value={input}
        placeholder="Search users..."
        onChange={e => setInput(e.target.value)}
        icon={<SearchIcon className="text-oslo-gray" size={20} />}
        className="bg-night placeholder:text-oslo-gray"
      />

      {input && (
        <div className="mt-2 flex w-full flex-col items-start gap-1.5 rounded-lg border border-black/50 bg-night">
          {filteredUsers.map(user => (
            <SearchResult onClick={() => setInput('')} key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
