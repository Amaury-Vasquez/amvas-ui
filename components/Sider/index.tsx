import { FC } from 'react';
import clsx from 'clsx';

interface SiderProps {
  className?: string;
  content: JSX.Element;
  title?: JSX.Element;
}

const Sider: FC<SiderProps> = ({ className, content, title }) => {
  return (
    <div
      className={clsx(
        'flex flex-col pt-2 h-screen w-[250px] bg-violet-600 overflow-y-hidden fixed top-0 left-0',
        'scrollbar-thin scrollbar-thumb-violet-300 scrollbar-track-violet-200 hover:overflow-y-auto',
        className
      )}
    >
      {title}
      {content}
    </div>
  );
};

export default Sider;
