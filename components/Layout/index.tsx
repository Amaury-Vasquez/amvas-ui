import { FC } from "react";
import { NextFont } from "@next/font";
import { Sider } from "components";
import clsx from "clsx";
import { FaReact } from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
  font: NextFont;
}

const Layout: FC<LayoutProps> = ({ children, font }) => {
  return (
    <div
      className={clsx(
        "w-screen flex min-h-screen h-auto overflow-y-auto bg-violet-100",
        font.className
      )}
    >
      <Sider
        content={() => <h1>hola</h1>}
        title={{ text: "Facile UI", Icon: FaReact }}
      />
      {children}
    </div>
  );
};

export default Layout;
