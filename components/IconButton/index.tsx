import { IconType } from 'react-icons';

export interface IconCommonProps {
  className?: string;
  Icon: IconType;
  iconColor?: string;
}

export { default as IconButton } from './IconButton';
export { default as IconButtonLink } from './IconButtonLink';
