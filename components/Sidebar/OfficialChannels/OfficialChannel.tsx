import { Plus } from 'lucide-react';
import { ReactNode } from 'react';

type Props = { name: string; icon: ReactNode };

const OfficialChannel = ({ name, icon }: Props) => {
  return (
    <div className="group flex w-full cursor-pointer items-center justify-between gap-4 text-oslo-gray transition-colors duration-200 hover:text-oslo-gray/80">
      <div className="flex items-center gap-4">
        <div className="bg-thunder group-hover:bg-secondary-bg flex rounded-lg p-2">{icon}</div>
        <p>{name}</p>
      </div>
      <div className="hidden items-center gap-2 text-oslo-gray transition-all duration-200 group-hover:flex">
        <div className="bg-thunder rounded-full p-1.5 transition-all duration-200">
          <Plus className="text-black" size={14} />
        </div>
        <p>Follow</p>
      </div>
    </div>
  );
};

export default OfficialChannel;
