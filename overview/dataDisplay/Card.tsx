import { FC } from 'react';
import Image from 'next/image';

export const CardOverview: FC = () => (
  <div className="w-full h-full flex rounded-sm relative">
    <Image src={'https://i.imgur.com/Q4MHTQT.png'} fill alt="Card image" />
  </div>
);
