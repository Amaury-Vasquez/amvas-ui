import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ModalProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

const Modal: FC<ModalProps> = ({
  children,
  className,
  color = 'bg-transparent-black',
}) => (
  <div
    className={clsx(
      'fixed w-screen min-h-screen h-fit inset-0 z-20',
      color,
      className
    )}
  >
    {children}
  </div>
);

export default Modal;
