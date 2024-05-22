import Search from './Search';

const TopBar = () => {
  return (
    <div className="flex w-full items-center border-b border-rangoon-green py-3 pl-10 pr-5">
      <p className="min-w-[250px] whitespace-nowrap">dev-space</p>
      <Search />
      <div className="flex min-w-[300px] items-center justify-between gap-3 px-3">
        <p className="text-davy-gray">Discuss</p>
        <p className="text-davy-gray">Discover</p>
        <p className="text-davy-gray">Hackathons</p>
      </div>
    </div>
  );
};

export default TopBar;
