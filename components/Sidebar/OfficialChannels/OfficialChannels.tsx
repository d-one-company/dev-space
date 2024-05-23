import ChatGPT from '@/components/icons/ChatGPT';
import ReactIcon from '@/components/icons/ReactIcon';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon';
import VSCode from '@/components/icons/VSCode';
import VueJS from '@/components/icons/VueJS';
import OfficialChannel from './OfficialChannel';
const OfficianlChannels = (props: Props) => {
  const data = [
    {
      name: 'VS Code',
      icon: <VSCode />,
    },
    {
      name: 'React',
      icon: <ReactIcon />,
    },
    {
      name: 'TypeScript',
      icon: <TypeScriptIcon />,
    },
    {
      name: 'ChatGPT',
      icon: <ChatGPT />,
    },
    {
      name: 'VueJS',
      icon: <VueJS />,
    },
  ];

  return (
    <div className="flex w-full flex-col items-start gap-4 px-4">
      <p> Official Channels</p>
      <div className="flex w-full flex-col items-start gap-3">
        {data.map(channel => (
          <OfficialChannel key={channel.name} name={channel.name} icon={channel.icon} />
        ))}
      </div>
    </div>
  );
};

export default OfficianlChannels;
