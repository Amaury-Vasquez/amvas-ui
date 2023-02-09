import { FC, HTMLProps } from 'react';
import { IconType } from 'react-icons';
import clsx from 'clsx';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  Icon?: IconType;
  iconColor?: string;
  fill?: boolean;
  type?: 'text' | 'password' | 'email';
}

const TextInput: FC<TextInputProps> = ({
  className,
  Icon,
  iconColor = 'rgb(50, 50, 50)',
  fill,
  type = 'text',
  ...props
}) => {
  return (
    <span
      className={clsx(
        'w-full flex items-center',
        fill ? 'h-full' : 'h-10',
        Icon && 'border-solid border border-neutral-300 rounded-sm'
      )}
    >
      {Icon && (
        <span className="h-full flex w-auto items-center justify-center p-2 border-r border-solid border-neutral-300">
          <Icon className="w-full h-full" color={iconColor} />
        </span>
      )}
      <input
        className={clsx(
          'w-full h-full py-3 px-2',
          'outline-none focus-visible:bg-neutral-50',
          !Icon
            ? 'border-solid border border-neutral-300 rounded-sm'
            : 'focus-visible:border-neutral-400',
          className
        )}
        type={type}
        {...props}
      />
    </span>
  );
};

export default TextInput;
