import { FC } from 'react';
import clsx from 'clsx';
import styles from '@/styles/loaders.module.css';

interface BounceProps {
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const Bounce: FC<BounceProps> = ({
  backgroundColor = 'blue-500',
  size = 'sm',
}) => (
  <div
    className={clsx(
      styles.bounceLoader,
      size === 'full'
        ? 'h-full w-full'
        : size === 'sm'
        ? 'h-6 w-6'
        : size === 'md'
        ? 'h-8 w-8'
        : 'h-10 w-10'
    )}
  >
    <div className={`bg-${backgroundColor}`} />
    <div className={`bg-${backgroundColor}`} />
  </div>
);

export default Bounce;
