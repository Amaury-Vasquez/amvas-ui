import { FC, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { TargetTypes } from '@/interfaces';

type LinkVariants = 'primary' | 'primary-dark' | 'base';

export interface AnchorProps extends LinkProps {
  isNextLink?: boolean;
  className?: string;
  children: ReactNode;
  href: string;
  variant?: LinkVariants;
  underlined?: boolean;
  target?: TargetTypes;
}

const Anchor: FC<AnchorProps> = ({
  className,
  children,
  isNextLink = true,
  href,
  variant = 'base',
  underlined = false,
  ...props
}) => {
  const getVariantStyle = (variant: LinkVariants) => {
    switch (variant) {
      case 'primary':
        return 'p-2 w-auto text-white bg-primary rounded';
      case 'primary-dark':
        return 'p-2 w-auto border border-primary-light text-primary-light rounded';
      case 'base':
        return 'text-primary-light';
    }
  };

  return (
    <Link
      href={href}
      className={clsx(
        'text-center',
        underlined && 'underline underline-offset-2',
        getVariantStyle(variant),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Anchor;
