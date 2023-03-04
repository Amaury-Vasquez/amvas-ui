import { FC, HTMLProps, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary' | 'base';
export type ButtonTypes = 'button' | 'submit' | 'reset';
export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: ButtonVariants;
  underlined?: boolean;
  type?: ButtonTypes;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'base',
  underlined = false,
  type = 'button',
  ...props
}) => {
  const getVariantStyle = (variant: ButtonVariants) => {
    switch (variant) {
      case 'primary':
        return 'w-auto text-white bg-primary rounded';
      case 'secondary':
        return 'w-auto border border-primary-light text-primary-dark rounded';
      case 'base':
        return 'text-primary-dark';
    }
  };

  return (
    <button
      className={clsx(
        'text-base text-center overflow-x-hidden flex items-center justify-center gap-1',
        underlined && 'underline underline-offset-2',
        variant !== 'base' && 'py-2 px-4',
        getVariantStyle(variant),
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
