import { FC } from 'react';
import { NextFont } from '@next/font';
import { NavigationLink, NavigationMenu, Accordion, Sider } from '@/components';
import { useComponentList } from '@/hooks';
import clsx from 'clsx';
import { FaReact } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
  font: NextFont;
}

const Layout: FC<LayoutProps> = ({ children, font }) => {
  const SiderContent = () => {
    const { navigationList } = useComponentList();
    return (
      <div className="transition-[height] duration-1000 ease h-auto w-auto p-0 m-0">
        {navigationList.map((section, i) => (
          <Accordion
            text={section.classification}
            key={`nav-accordion-${section.classification}${i}`}
            toggleableContent={
              <NavigationMenu
                links={section.components.map((component) => ({
                  text: component.name,
                  href: component.path,
                }))}
              />
            }
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        'w-screen flex min-h-screen h-auto overflow-y-auto bg-slate-100 animate-fade-in-05',
        font.className
      )}
    >
      <Sider
        content={<SiderContent />}
        title={
          <NavigationLink
            href={'/'}
            text="Facile UI"
            Icon={FaReact}
            className="text-xl font-semibold mb-2"
          />
        }
      />
      <div className="ml-[250px] p-4 w-full">{children}</div>
    </div>
  );
};

export default Layout;
