import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { TargetTypes } from '@/interfaces';
import IconButton from './IconButton';
import { IconCommonProps } from '.';

interface IconButtonLinkProps extends LinkProps, IconCommonProps {
  target?: TargetTypes;
}

const IconButtonLink: FC<IconButtonLinkProps> = ({
  Icon,
  iconColor,
  className,
  target = '_blank',
  ...props
}) => {
  return (
    <Link className="cursor-pointer rounded-full" target={target} {...props}>
      <IconButton
        tabIndex={-1}
        Icon={Icon}
        iconColor={iconColor}
        className={className}
      />
    </Link>
  );
};

export default IconButtonLink;
