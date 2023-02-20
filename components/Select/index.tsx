import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  className?: string;
  defaultValue?: string;
  options: string[];
}

const Select: FC<SelectProps> = ({
  className,
  defaultValue,
  options,
  value,
  ...props
}) => (
  <select
    className={clsx(
      'bg-slate-100 py-2 px-4 capitalize flex justify-center items-center rounded-sm overflow-x-hidden appearance-none',
      'outline-none focus-visible:border focus-visible:border-solid focus-visible:border-primary-light',
      className
    )}
    defaultValue={defaultValue ? defaultValue : options[0]}
    {...props}
  >
    {options.map((option, i) => (
      <option
        className="appearance-none flex items-center justify-center h-10 w-full"
        key={`select${option + i}`}
        value={option}
      >
        {option}
        {value === option && 'sl'}
      </option>
    ))}
  </select>
);

export default Select;
