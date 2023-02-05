import { ComponentSection } from '@/overview';
import { ButtonOverview } from './Button';
import { IconButtonOverview } from './IconButton';
import { SeparatorOverview } from './Separator';

export const generalSection: ComponentSection = {
  classification: 'general',
  components: [
    {
      name: 'button',
      path: 'button',
      Component: ButtonOverview,
    },
    {
      name: 'icon button',
      path: 'icon-button',
      Component: IconButtonOverview,
    },
    {
      name: 'separator',
      path: 'separator',
      Component: SeparatorOverview,
    },
  ],
};
