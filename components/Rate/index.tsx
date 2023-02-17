import { FC, useEffect, useRef } from 'react';
import StarShape from './StarShape';

interface RateProps {
  onRateChange: (value: number) => void;
  rate: number;
  parentKey?: string;
  maxRate?: number;
}

const Rate: FC<RateProps> = ({
  maxRate = 5,
  rate,
  onRateChange,
  parentKey = 'star-rate',
}) => {
  return (
    <button className="p-2 flex items-center justify-center gap-2">
      {Array.from({ length: maxRate }, (_, i) => (
        <StarShape
          background={rate < i + 1 ? 'none' : 'full'}
          key={parentKey + maxRate + i}
          value={i + 1}
          onClick={onRateChange}
        />
      ))}
    </button>
  );
};

export default Rate;
