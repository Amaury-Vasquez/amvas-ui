import { ComponentSection } from '@/overview';
import { AccordionOverview } from './Accordion';
import { ArticleOverview } from './Article';

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
    },
    {
      name: 'card',
      path: 'card',
    },
    {
      name: 'carousel',
      path: 'carousel',
    },
    {
      name: 'tab',
      path: 'tab',
    },
    {
      name: 'tab menu',
      path: 'tab-menu',
    },
    {
      name: 'tag',
      path: 'tag',
    },
  ],
};
