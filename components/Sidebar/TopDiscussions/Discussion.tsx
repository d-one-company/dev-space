import Divider from '@/components/Divider';

type Props = { text: string; numberOfComments?: number };

const Discussion = ({ text, numberOfComments }: Props) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-2 flex size-1.5 rounded-full bg-davy-gray" />
      <div className="flex flex-col items-start gap-3">
        <p className="text-base text-davy-gray">{text}</p>
        <Divider />
        <p className="text-sm text-davy-gray">{numberOfComments} comments</p>
      </div>
    </div>
  );
};

export default Discussion;
