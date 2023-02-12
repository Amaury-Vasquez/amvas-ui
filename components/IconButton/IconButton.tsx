import { FC, HTMLProps } from 'react';
import clsx from 'clsx';
import { IconCommonProps } from '.';

interface IconButtonProps
  extends HTMLProps<HTMLButtonElement>,
    IconCommonProps {
  hoverColor?: string;
}

const IconButton: FC<IconButtonProps> = ({
  Icon,
  iconColor,
  className,
  hoverColor = 'bg-gray-200',
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={clsx('p-1 rounded-full', `hover:${hoverColor}`, className)}
      type="button"
      {...props}
    >
      <Icon color={iconColor} className="w-full h-full" />
    </button>
  );
};

export default IconButton;
