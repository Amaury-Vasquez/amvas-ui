import { ComponentOverviewList } from '@/hooks';
import SpinOverview from './Spin';
import BounceOverview from './Bounce';

export const loadersSection: ComponentOverviewList = {
  classification: 'loaders',
  components: [
    {
      name: 'bounce',
      path: 'bounce',
      Component: <BounceOverview />,
    },
    // {
    //   name: 'skeleton',
    //   path: 'skeleton',
    // },
    {
      name: 'spin',
      path: 'spin',
      Component: <SpinOverview />,
    },
  ],
};
