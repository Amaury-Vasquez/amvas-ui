import { ComponentSection } from '@/overview';
import { AccordionOverview } from './Accordion';
import { ArticleOverview } from './Article';
import { AvatarOverview } from './Avatar';
import { CardOverview } from './Card';
import { TabMenuOverview } from './TabMenu';

export const dataDisplaySection: ComponentSection = {
  classification: 'data display',
  components: [
    {
      name: 'accordion',
      path: 'accordion',
      Component: AccordionOverview,
    },
    {
      name: 'article',
      path: 'article',
      Component: ArticleOverview,
    },
    {
      name: 'avatar',
      path: 'avatar',
      Component: AvatarOverview,
    },
    {
      name: 'card',
      path: 'card',
      Component: CardOverview,
    },
    // {
    //   name: 'carousel',
    //   path: 'carousel',
    //   Component: CarouselOverview,
    // },
    {
      name: 'tab menu',
      path: 'tab-menu',
      Component: TabMenuOverview,
    },
    // {
    //   name: 'tag',
    //   path: 'tag',
    // },
  ],
};
