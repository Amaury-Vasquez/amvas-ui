import { FC, HTMLProps } from 'react';
import clsx from 'clsx';
import { IconCommonProps } from '.';

interface IconButtonProps
  extends HTMLProps<HTMLButtonElement>,
    IconCommonProps {}

const IconButton: FC<IconButtonProps> = ({
  Icon,
  iconColor,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={clsx('p-1 rounded-full hover:bg-gray-200', className)}
      type="button"
      {...props}
    >
      <Icon
        className={clsx(
          'w-full h-full',
          `text-[${iconColor}] fill-[${iconColor}]`
        )}
      />
    </button>
  );
};

export default IconButton;
