import { FC } from 'react';
import { NextFont } from '@next/font';
import { Sider } from 'components';
import clsx from 'clsx';
import { FaReact } from 'react-icons/fa';
import { NavigationLink, NavigationMenu, Accordion } from 'components';

interface LayoutProps {
  children: React.ReactNode;
  font: NextFont;
}

const Layout: FC<LayoutProps> = ({ children, font }) => {
  return (
    <div
      className={clsx(
        'w-screen flex min-h-screen h-auto overflow-y-auto bg-violet-100 animate-fade-in-05',
        font.className
      )}
    >
      <Sider
        Content={
          <Accordion
            text="components"
            toggleableContent={
              <NavigationMenu
                links={[
                  { text: 'components', href: '/components' },
                  { text: 'components', href: '/components' },
                ]}
              />
            }
          />
        }
        Title={
          <NavigationLink
            text="Facile UI"
            Icon={FaReact}
            className="text-xl font-semibold"
          />
        }
      />
      {children}
    </div>
  );
};

export default Layout;
