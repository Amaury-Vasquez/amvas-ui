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
    const componentList = useComponentList();
    return (
      <>
        {componentList.map((section, i) => (
          <Accordion
            active={true}
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
      </>
    );
  };

  return (
    <div
      className={clsx(
        'w-screen flex min-h-screen h-auto overflow-y-auto bg-violet-100 animate-fade-in-05',
        font.className
      )}
    >
      <Sider
        Content={<SiderContent />}
        Title={
          <NavigationLink
            text="Facile UI"
            Icon={FaReact}
            className="text-xl font-semibold mb-2"
          />
        }
      />
      {children}
    </div>
  );
};

export default Layout;
