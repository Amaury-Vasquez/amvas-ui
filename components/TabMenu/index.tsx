import { FC } from 'react';
import { IconType } from 'react-icons';
import clsx from 'clsx';
import TextTab from './TextTab';
import IconTab from './IconTab';

export { TextTab, IconTab };

export interface TabCommonProps {
  isActive?: boolean;
  handleClick?: () => void;
}

export interface IconTabProps extends TabCommonProps {
  Icon: IconType;
  color?: string;
  name?: null;
}

export interface TextTabProps extends TabCommonProps {
  name: string;
  Icon?: null;
}

export interface TabMenuProps {
  className?: string;
  rounded?: boolean;
  items: IconTabProps[] | TextTabProps[];
}

const TabMenu: FC<TabMenuProps> = ({ className, items, rounded = false }) => {
  return (
    <ul
      className={clsx(
        'p-0 m-0 flex gap-3 w-fit h-12 py-1 bg-neutral-100',
        rounded ? 'rounded-full px-6' : 'px-4 rounded-md',
        className
      )}
    >
      {items.map((tab, i) =>
        tab.Icon ? (
          <IconTab key={'icontab' + i + tab.Icon.toString()} {...tab} />
        ) : (
          <TextTab key={'texttab' + i + tab.name} {...tab} />
        )
      )}
    </ul>
  );
};

export default TabMenu;
