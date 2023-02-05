import { FC } from 'react';
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineHeart,
  AiOutlineCode,
} from 'react-icons/ai';
import { TabMenu, IconTabProps, TextTabProps } from '@/components';

const IconTabs: IconTabProps[] = [
  { Icon: AiOutlineHome, isActive: true, color: '#f84d64' },
  { Icon: AiOutlineNotification, isActive: false },
  { Icon: AiOutlineHeart, isActive: false },
  { Icon: AiOutlineCode, isActive: false },
];

const TextTabs: TextTabProps[] = [
  { name: 'Tab 1', isActive: true },
  { name: 'Tab 2', isActive: false },
  { name: 'Tab 3', isActive: false },
];

export const TabMenuOverview: FC = () => (
  <div className="flex flex-col w-full h-full items-center justify-center gap-4">
    <TabMenu rounded items={IconTabs} />
    <TabMenu items={IconTabs} />
    <TabMenu items={TextTabs} />
  </div>
);
