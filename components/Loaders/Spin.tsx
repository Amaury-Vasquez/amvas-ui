import { FC } from 'react';
import clsx from 'clsx';

interface SpinProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
  speed?: 'avg' | 'fast';
  className?: string;
}

const Spin: FC<SpinProps> = ({
  size = 'md',
  color = '#7a44e8',
  speed = 'avg',
  className,
}) => (
  <div
    className={clsx(
      size === 'xs' && 'w-6 h-6',
      size === 'sm' && 'w-8 h-8',
      size === 'md' && 'w-10 h-10',
      size === 'lg' && 'w-12 h-12',
      `bg-[${color}] animate-spin-${speed} rounded-full`,
      className
    )}
  ></div>
);

export default Spin;
