import { FC } from 'react';
import { capitalize } from '@/utils/string';
import { Card, Separator } from '@/components';
import { ComponentSection } from '@/hooks/useComponentList';

interface OverviewProps {
  sections: ComponentSection[];
}

const Overview: FC<OverviewProps> = ({ sections }) => {
  const renderSections = () =>
    sections.map((section, i) => {
      const { classification } = section;
      return (
        <>
          <span className="text-2xl font-semibold text-neutral-900">
            {capitalize(classification)}
          </span>
          <Separator />
          <div className="w-full h-auto grid grid-cols-5 items-center justify-center gap-2">
            {section.components.map((component, j) =>
              component.Component ? (
                <Card
                  title={component.name}
                  href={`/components/${classification}/${component.path}`}
                  key={classification + component.name + i + j}
                  content={<component.Component />}
                />
              ) : null
            )}
          </div>
        </>
      );
    });

  return (
    <div className="w-full h-auto flex flex-col gap-2">{renderSections()}</div>
  );
};

export default Overview;
