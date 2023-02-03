import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import IconButton from './IconButton';
import { IconCommonProps } from '.';

interface IconButtonLinkProps extends LinkProps, IconCommonProps {
  target?: string;
}

const IconButtonLink: FC<IconButtonLinkProps> = ({
  Icon,
  iconColor,
  className,
  target = '_blank',
  ...props
}) => {
  return (
    <Link target={target} {...props}>
      <IconButton Icon={Icon} iconColor={iconColor} className={className} />
    </Link>
  );
};

export default IconButtonLink;
