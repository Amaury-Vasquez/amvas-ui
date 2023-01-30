import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useToggle } from 'hooks';
import clsx from 'clsx';

interface AccordionProps {
  className?: string;
  toggleableContent: JSX.Element;
  text: string;
  ActiveIcon?: IconType;
  InactiveIcon?: IconType;
}

const Accordion: FC<AccordionProps> = ({
  className,
  toggleableContent,
  text,
  ActiveIcon = FaAngleUp,
  InactiveIcon = FaAngleDown,
}) => {
  const { isActive, willClose, handleClick } = useToggle();

  return (
    <div className={clsx('w-full h-auto flex flex-col relative', className)}>
      <button
        className={clsx(
          'bg-violet-800 flex items-center justify-center gap-x-1 capitalize text-white font-semibold px-4 py-2 w-full'
        )}
        disabled={willClose}
        onClick={handleClick}
      >
        {text}
        {isActive ? <ActiveIcon /> : <InactiveIcon />}
      </button>
      {isActive && (
        <div
          className={clsx(
            'w-full h-auto origin-top',
            isActive && 'animate-to-bottom',
            willClose && 'animate-to-top'
          )}
        >
          {toggleableContent}
        </div>
      )}
    </div>
  );
};

export default Accordion;
