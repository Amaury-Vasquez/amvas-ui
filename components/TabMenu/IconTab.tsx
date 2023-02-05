import { FC } from 'react';
import clsx from 'clsx';
import { IconTabProps } from '.';
import { IconButton } from '../IconButton';

const IconTab: FC<IconTabProps> = ({
  Icon,
  isActive,
  color,
  handleClick = () => {},
}) => (
  <IconButton
    color={color}
    Icon={Icon}
    onClick={handleClick}
    className={clsx('h-full w-fit py-2 px-3', isActive && 'bg-neutral-200')}
  />
);

export default IconTab;
