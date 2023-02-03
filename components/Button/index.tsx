import { FC, HTMLProps, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary' | 'base';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: ButtonVariants;
  underlined?: boolean;
  type?: 'button' | 'submit' | 'reset';
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
        return 'p-2 w-auto text-white bg-violet-600 rounded';
      case 'secondary':
        return 'p-2 w-auto border border-violet-500 text-violet-500 rounded';
      case 'base':
        return 'text-violet-500';
    }
  };

  return (
    <button
      className={clsx(
        'text-base text-center',
        underlined && 'underline underline-offset-2',
        getVariantStyle(variant),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
