import { FC } from 'react';
import clsx from 'clsx';

interface SiderProps {
  className?: string;
  Content: JSX.Element;
  Title?: JSX.Element;
}

const Sider: FC<SiderProps> = ({ className, Content, Title }) => {
  return (
    <div
      className={clsx(
        'flex flex-col py-2 h-screen w-[250px] bg-violet-600 ',
        className
      )}
    >
      {Title}
      {Content}
    </div>
  );
};

export default Sider;
