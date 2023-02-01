import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

interface SeparatorProps extends HTMLProps<HTMLHRElement> {
  className?: string;
  color?: string;
}

const Separator: FC<SeparatorProps> = ({
  className,
  color = 'bg-slate-300',
}) => {
  return <hr className={clsx('p-0 w-full h-[2px] my-2', color, className)} />;
};

export default Separator;
