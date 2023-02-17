import { FC } from 'react';
import { Select } from '@/components';

const SelectOverview: FC = () => {
  const options = ['option1', 'option2', 'option3'];
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Select value="" options={options} onChange={(value) => {}} />
    </div>
  );
};

export default SelectOverview;
