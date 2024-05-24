import { ArrowUp, X } from 'lucide-react';
import { Button } from '../Button';

const IntroducingPro = () => {
  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-lg bg-onyx p-4">
      <div className="text-primary-foreground flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-foreground flex items-center rounded-md p-0.5 text-black">
            <ArrowUp size={15} />
          </div>
          <p>Introducing Pro</p>
        </div>
        <Button className="pointer-events-none bg-transparent hover:bg-transparent">
          <X size={18} className="text-white" />
        </Button>
      </div>
      <p className="text-oslo-gray">Boost your publishing with our new premium features.</p>
      <div className="flex w-full items-center justify-between gap-4">
        <Button className="w-full">Upgrade now</Button>
        <Button className="w-full" variant="secondary">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default IntroducingPro;
