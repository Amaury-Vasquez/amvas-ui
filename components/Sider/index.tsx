import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { useClickOutside } from '@/hooks/useClickOutside';

interface SiderProps {
  className?: string;
  content: ReactNode;
  title?: ReactNode;
  handleClose?: () => void;
}

const Sider: FC<SiderProps> = ({
  className,
  content,
  title,
  handleClose = () => {},
}) => {
  const ref = useClickOutside(handleClose);

  return (
    <div
      className={clsx(
        'flex flex-col pt-2 h-screen w-[250px] bg-violet-600 overflow-y-hidden fixed top-0 left-0 z-50',
        'scrollbar-thin scrollbar-thumb-violet-300 scrollbar-track-violet-200 hover:overflow-y-auto',
        className
      )}
      ref={ref}
    >
      {title}
      {content}
    </div>
  );
};

export default Sider;
