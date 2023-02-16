import { FC, useEffect, useState } from 'react';
import { Switch } from '@/components';

const SwitchOverview = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setChecked(!checked);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [checked]);

  return (
    <div className="flex flex-col gap-4">
      <Switch checked={checked} onToggle={() => {}} />
      <Switch checked={!checked} onToggle={() => {}} />
    </div>
  );
};

export default SwitchOverview;
