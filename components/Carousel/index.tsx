import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface CarouselProps {
  images: string[];
  columns?: number;
  Left?: IconType;
  Right?: IconType;
}

const Carousel: FC<CarouselProps> = ({
  images,
  columns,
  Left = AiOutlineLeft,
  Right = AiOutlineRight,
}) => {
  return (
    <div className="h-full flex gap-4">
      <div className="w-52 h-full bg-red-200"></div>
      <div className="w-52 h-full bg-red-200"></div>
      <div className="w-52 h-full bg-red-200"></div>
      <div className="w-52 h-full bg-red-200"></div>
      <div className="w-52 h-full bg-red-200"></div>
      <div className="w-52 h-full bg-red-200"></div>
    </div>
  );
};

export default Carousel;
