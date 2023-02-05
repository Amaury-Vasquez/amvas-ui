import { ComponentOverviewList } from '@/hooks';
import { AccordionOverview } from './Accordion';
import { ArticleOverview } from './Article';
import { AvatarOverview } from './Avatar';
import { CardOverview } from './Card';
import { TabMenuOverview } from './TabMenu';

export const dataDisplaySection: ComponentOverviewList = {
  classification: 'data display',
  components: [
    {
      name: 'accordion',
      path: 'accordion',
      Component: <AccordionOverview />,
    },
    {
      name: 'article',
      path: 'article',
      Component: <ArticleOverview />,
    },
    {
      name: 'avatar',
      path: 'avatar',
      Component: <AvatarOverview />,
    },
    {
      name: 'card',
      path: 'card',
      Component: <CardOverview />,
    },
    {
      name: 'tab menu',
      path: 'tab-menu',
      Component: <TabMenuOverview />,
    },
  ],
};
