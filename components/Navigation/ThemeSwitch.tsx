import { Switch } from '../Switch';

const ThemeSwitch = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <p>Dark theme</p>
      <Switch checked={true} />
    </div>
  );
};

export default ThemeSwitch;
