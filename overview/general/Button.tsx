import { FC } from 'react';
import { Button } from '@/components';

export const ButtonOverview: FC = () => (
  <div className="p-4 grid grid-cols-2 gap-4 w-full h-full items-center justify-center">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="base">Base</Button>
    <Button variant="base" underlined>
      Underlined
    </Button>
  </div>
);
