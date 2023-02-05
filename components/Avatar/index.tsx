import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  handleClick?: () => void;
}

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  className,
  height,
  width,
  size = 'md',
  handleClick = () => {},
}) => (
  <button
    className={clsx(
      'object-cover relative rounded-full border border-solid border-neutral-200',
      size === 'xs' && 'h-8 w-8',
      size === 'sm' && 'h-10 w-10',
      size === 'md' && 'h-12 w-12',
      size === 'lg' && 'h-14 w-14',
      className
    )}
    onClick={handleClick}
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill
      className="rounded-full hover:opacity-80"
    />
  </button>
);

export default Avatar;
