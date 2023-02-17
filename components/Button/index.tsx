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
        return 'w-auto text-white bg-violet-600 rounded';
      case 'secondary':
        return 'w-auto border border-violet-500 text-violet-500 rounded';
      case 'base':
        return 'text-violet-500';
    }
  };

  return (
    <button
      className={clsx(
        'text-base text-center overflow-x-hidden',
        underlined && 'underline underline-offset-2',
        variant !== 'base' && 'py-2 px-4',
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
