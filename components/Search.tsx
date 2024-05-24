import { SearchIcon } from 'lucide-react';
import { Input } from './Input';

export const Search = () => {
  return <Input type="search" placeholder="Search..." icon={<SearchIcon className="text-oslo-gray" size={20} />} className="bg-night placeholder:text-oslo-gray" />;
};

export default Search;
