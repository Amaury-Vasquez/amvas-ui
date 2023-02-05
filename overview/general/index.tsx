import { ButtonOverview } from './Button';
import { IconButtonOverview } from './IconButton';
import { SeparatorOverview } from './Separator';
import { ComponentOverviewList } from '@/hooks';

export const generalSection: ComponentOverviewList = {
  classification: 'general',
  components: [
    {
      name: 'button',
      path: 'button',
      Component: <ButtonOverview />,
    },
    {
      name: 'icon button',
      path: 'icon-button',
      Component: <IconButtonOverview />,
    },
    {
      name: 'separator',
      path: 'separator',
      Component: <SeparatorOverview />,
    },
  ],
};
