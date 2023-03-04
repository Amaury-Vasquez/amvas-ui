import { FC } from 'react';
import { useRouter } from 'next/router';
import { useComponentList } from '@/hooks';
import { Accordion, NavigationLink, NavigationMenu } from '@/components';

const SiderContent: FC = () => {
  const { navigationList } = useComponentList();
  const linkClass =
    'w-full px-4 py-2 bg-primary-darker text-base font-semibold';
  return (
    <div className="transition-[height] duration-1000 ease h-auto w-auto p-0 m-0">
      <NavigationLink
        className={linkClass}
        text="Get started"
        href="/get-started"
      />
      <NavigationLink
        className={linkClass}
        text="Components"
        href="/components"
      />
      {navigationList.map((section, i) => (
        <Accordion
          text={section.classification}
          key={`nav-accordion-${section.classification}${i}`}
          toggleableContent={
            <NavigationMenu
              links={section.components.map((component) => ({
                text: component.name,
                href: `/components/${section.classification
                  .toLowerCase()
                  .replace(' ', '-')}/${component.path}`,
              }))}
            />
          }
        />
      ))}
    </div>
  );
};

export default SiderContent;
