import Search from './Search';

const TopBar = () => {
  return (
    <div className="border-secondary-bg sticky top-0 flex h-[60px] w-full items-center border-b py-3 pl-10 pr-5">
      <p className="min-w-[290px] whitespace-nowrap text-oslo-gray">dev-space</p>
      <Search />
      <div className="flex min-w-[475px] items-center justify-between gap-3 pl-[90px] pr-3">
        <p className="text-oslo-gray">Discuss</p>
        <p className="text-oslo-gray">Discover</p>
        <p className="text-oslo-gray">Hackathons</p>
      </div>
    </div>
  );
};

export default TopBar;
