import { FC } from 'react';
import { Accordion } from '@/components';

export const AccordionOverview: FC = () => (
  <Accordion
    active
    text="Accordion"
    bordered
    toggleableContent={
      <div className="flex flex-col text-center gap-1 text-violet-800">
        <span className="text-base italic border-b border-solid border-violet-600 py-1">
          Section 1
        </span>
        <span className="text-base italic border-b border-solid border-violet-600 py-1">
          Section 2
        </span>
        <span className="text-base italic py-1"> Section 3 </span>
      </div>
    }
  />
);
