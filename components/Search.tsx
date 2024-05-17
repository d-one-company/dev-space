import { SearchIcon } from 'lucide-react';
import { Input } from './Input';

export const Search = () => {
  return <Input type="search" placeholder="Search..." icon={<SearchIcon className="text-liver" size={20} />} className="placeholder:text-liver" />;
};

export default Search;
