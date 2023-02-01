import { FC } from 'react';
import { IconType } from 'react-icons';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

export interface NavigationLinkProps extends LinkProps {
  text: string;
  className?: string;
  Icon?: IconType;
  iconRight?: boolean;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  text,
  href,
  Icon,
  iconRight,
  className,
}) => {
  const textStyle = clsx(
    'flex items-center justify-center gap-2 text-white text-center',
    className
  );

  if (Icon) {
    return iconRight ? (
      <Link href={href} className={textStyle}>
        {text}
        <Icon />
      </Link>
    ) : (
      <Link href={href} className={textStyle}>
        <Icon />
        {text}
      </Link>
    );
  }
  return (
    <Link href={href} className={textStyle}>
      {text}
    </Link>
  );
};

export default NavigationLink;
