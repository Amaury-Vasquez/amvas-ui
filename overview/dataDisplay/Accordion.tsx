import { FC } from 'react';
import Image from 'next/image';

export const AccordionOverview: FC = () => (
  <div className="w-48 h-32 relative rounded-md">
    <Image
      className="rounded-md"
      src="https://i.imgur.com/rwLtgHS.png"
      fill
      alt="Accordion image"
    />
  </div>
);
