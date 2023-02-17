import { FC } from 'react';
import { Rate } from '@/components';

const RateOverview: FC = () => (
  <div className="flex items-center justify-center w-full h-full">
    <Rate onRateChange={(value) => {}} rate={4} />
  </div>
);

export default RateOverview;
