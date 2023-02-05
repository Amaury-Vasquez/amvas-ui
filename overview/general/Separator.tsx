import { FC } from 'react';
import { Separator } from '@/components';

export const SeparatorOverview: FC = () => (
  <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
    <Separator />
    <Separator color="bg-neutral-500" />
    <Separator color="bg-violet-500" />
    <Separator color="bg-red-500" />
    <Separator color="bg-purple-500" />
    <Separator color="bg-slate-500" />
  </div>
);
