import { FC } from 'react';
import clsx from 'clsx';
import { TextTabProps } from '.';

const TextTab: FC<TextTabProps> = ({ name, isActive, handleClick }) => (
  <button
    className={clsx(
      'text-sm font-semibold focus:outline-none focus-visible:border-primary-darker focus-visible:border-2 h-full w-fit px-3 py-2 hover:bg-neutral-200',
      isActive
        ? 'border-b-2 border-solid border-primary-darker rounded-t-md'
        : 'border-b-2 border-solid border-transparent rounded-md'
    )}
    onClick={handleClick}
  >
    {name}
  </button>
);

export default TextTab;
