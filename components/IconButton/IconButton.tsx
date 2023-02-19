import { FC, HTMLProps } from 'react';
import clsx from 'clsx';
import { IconCommonProps } from '.';

export interface IconButtonProps
  extends HTMLProps<HTMLButtonElement>,
    IconCommonProps {
  hoverColor?: string;
}

const IconButton: FC<IconButtonProps> = ({
  Icon,
  iconColor,
  className,
  children,
  hoverColor = 'bg-gray-200',
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={clsx(
        'p-2 rounded-full transition-colors',
        `hover:${hoverColor}`,
        className
      )}
      type="button"
      {...props}
    >
      <Icon color={iconColor} className="w-full h-full" />
      {children && children}
    </button>
  );
};

export default IconButton;
