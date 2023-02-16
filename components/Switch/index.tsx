import { FC } from 'react';
import clsx from 'clsx';

interface SwitchProps {
  checked: boolean;
  onToggle: () => void;
  label?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
}

const Switch: FC<SwitchProps> = ({
  checked,
  onToggle,
  activeBgColor,
  inactiveBgColor,
}) => (
  <button
    className={clsx(
      'w-12 h-6 flex rounded-full border border-solid border-neutral-200 py-[2px] px-[1px] items-center relative',
      checked
        ? activeBgColor
          ? activeBgColor
          : 'bg-blue-500'
        : inactiveBgColor
        ? inactiveBgColor
        : 'bg-slate-300'
    )}
    onClick={onToggle}
  >
    <span
      className={clsx(
        'aspect-square h-full bg-white rounded-full absolute',
        checked
          ? 'animate-toggle-right right-0 origin-right'
          : 'animate-toggle-left left-0 origin-right'
      )}
    />
  </button>
);

export default Switch;
