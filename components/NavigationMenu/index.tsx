import { FC } from 'react';
import clsx from 'clsx';
import { NavigationLink, NavigationLinkProps } from 'components';

interface NavigationMenuProps {
  className?: string;
  links: NavigationLinkProps[];
  animation?: string;
  column?: boolean;
}

const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  links,
  animation,
  column = true,
}) => {
  return (
    <div
      className={clsx(
        'w-full h-auto capitalize flex items-center justify-start',
        column ? 'flex-col' : 'flex-row',
        animation,
        className
      )}
    >
      {links.map((link, i) => (
        <NavigationLink
          className={clsx(
            'h-full w-full px-4 py-2 bg-violet-700 text-base font-semibold',
            i < links.length - 1 && 'border-b border-violet-600'
          )}
          key={i}
          {...link}
        />
      ))}
    </div>
  );
};

export default NavigationMenu;
