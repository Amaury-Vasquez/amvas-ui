import { FC } from 'react';
import { Spin } from '@/components/Loaders';

export const SpinOverview: FC = () => (
  <div className="flex flex-col w-full h-full gap-4">
    <Spin />
  </div>
);
