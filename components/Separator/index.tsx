import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

interface SeparatorProps extends HTMLProps<HTMLHRElement> {
  className?: string;
  color?: string;
}

const Separator: FC<SeparatorProps> = ({
  className,
  color = 'bg-neutral-100',
}) => {
  return <hr className={clsx('p-0 w-full h-[2px]', color, className)} />;
};

export default Separator;
