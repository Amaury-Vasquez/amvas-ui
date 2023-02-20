import { FC } from 'react';
import { Bounce } from '@/components';

const BounceOverview: FC = () => (
  <div className="flex w-full h-full flex-col items-center justify-center gap-8">
    <div className="flex gap-1 items-center justify-center">
      <Bounce />
      <Bounce size="md" />
      <Bounce size="lg" />
    </div>
    <Bounce size="lg" backgroundColor="primary-light" />
  </div>
);

export default BounceOverview;
