import { FC } from 'react';
import clsx from 'clsx';
import { PlacementTypes, PositionTypes, ShadowTypes } from '@/interfaces';

interface TooltipProps {
  text: string;
  placement?: PlacementTypes;
  bgColor?: string;
  textColor?: string;
  className?: string;
  shadow?: ShadowTypes;
  position?: PositionTypes;
  willClose: boolean;
}

const Tooltip: FC<TooltipProps> = ({ text, className, willClose }) => (
  <div
    className={clsx(
      'w-fit h-auto flex flex-col absolute bottom-full right-1',
      willClose
        ? 'animate-to-top origin-top'
        : 'animate-to-bottom origin-bottom',
      className
    )}
  >
    <span className="bg-violet-100 p-2 rounded-md text-slate-600 relative z-30">
      {text}
    </span>
    <span className="w-4 h-4 bg-violet-100 self-end rotate-45 z-20 mr-3 mt-[-12px]" />
  </div>
);

export default Tooltip;
