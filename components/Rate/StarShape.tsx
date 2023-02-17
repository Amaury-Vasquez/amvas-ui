import { FC } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import clsx from 'clsx';

interface StarShapeProps {
  background: 'none' | 'full';
  backgroundColor?: string;
  noBackgroundColor?: string;
  onClick: (value: number) => void;
  value: number;
}

const StarShape: FC<StarShapeProps> = ({
  background,
  backgroundColor,
  noBackgroundColor,
  onClick,
  value,
}) => {
  const Icon = background === 'none' ? BsStar : BsStarFill;
  return (
    <Icon
      className={clsx('w-6 h-6')}
      fill={clsx(
        background === 'none'
          ? noBackgroundColor
            ? noBackgroundColor
            : '#d5d5d5'
          : backgroundColor
          ? backgroundColor
          : '#ffcc00'
      )}
      onClick={() => onClick(value)}
    />
  );
};

export default StarShape;
