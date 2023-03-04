import { FC } from 'react';
import clsx from 'clsx';
import { Accordion } from '@/components';

export const AccordionOverview: FC = () => {
  const commonClasses =
    'border-solid border-neutral-300 text-slate-800 cursor-pointer';
  const spanClasses = 'w-full flex items-center justify-center py-1.5';
  const content = (
    <div className={clsx(commonClasses, 'border-t flex flex-col')}>
      <button disabled className={clsx(commonClasses, spanClasses, 'border-b')}>
        Option 1
      </button>
      <button disabled className={clsx(commonClasses, spanClasses)}>
        Option 2
      </button>
    </div>
  );
  return (
    <div className="w-48 h-fit flex items-center justify-center">
      <Accordion
        active
        disabled
        className={clsx(commonClasses, 'border rounded-md')}
        text="Accordion"
        toggleableContent={content}
        filled={false}
      />
    </div>
  );
};
