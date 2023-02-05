import { FC } from 'react';
import { Card } from '@/components';

export const CardOverview: FC = () => (
  <div className="w-full h-full flex items-start py-4 justify-center">
    <Card
      className="!shadow-xl"
      height="100%"
      href="/overview/data-display/card"
      title="Card example"
      content={<span> card example </span>}
    />
  </div>
);
