import { FC } from "react";
import SiderTitle, { SiderTitleProps } from "./SiderTitle";
import clsx from "clsx";

interface SiderProps {
  className?: string;
  content: FC | FC[];
  title?: SiderTitleProps;
}

const Sider: FC<SiderProps> = ({ className, content, title }) => {
  const genSiderContent = () => {
    if (!Array.isArray(content)) {
      const Component = content;
      return <Component />;
    } else
      return content.map((Component, i) => (
        <Component key={`sider-content-${i}`} />
      ));
  };

  return (
    <div className={clsx("py-2 h-screen w-[250px] bg-violet-500", className)}>
      {title && <SiderTitle {...title} />}
      {genSiderContent()}
    </div>
  );
};

export default Sider;
