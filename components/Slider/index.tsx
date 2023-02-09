import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

export interface SliderProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  type?: 'range';
  barColor?: string;
  thumbColor?: string;
}

const Slider: FC<SliderProps> = ({ className, type = 'range', ...props }) => {
  return (
    <input className={clsx('bg-black', className)} type={type} {...props} />
  );
};

export default Slider;
