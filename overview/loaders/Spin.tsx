import { FC } from 'react';
import { Spin } from '@/components/Loaders';

const SpinOverview: FC = () => (
  <div className="flex w-full h-full gap-4 items-center justify-center">
    <Spin />
  </div>
);

export default SpinOverview;
