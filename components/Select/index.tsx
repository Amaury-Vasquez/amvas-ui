import { FC } from 'react';

export interface SelectProps {
  className?: string;
  options: string[];
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ className, options, onChange }) => (
  <select className={className}>
    {options.map((option, i) => (
      <option key={`select${option + i}`} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
