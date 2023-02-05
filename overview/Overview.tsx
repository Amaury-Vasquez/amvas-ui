import { FC } from 'react';
import { capitalize } from '@/utils/string';
import { Card, Separator } from '@/components';
import { componentList } from '.';

const Overview: FC = () => {
  const sections = componentList.map((section) => ({
    classification: section.classification,
    components: section.components.filter(
      (component) => component.Component !== undefined
    ),
  }));
  const renderSections = () =>
    sections.map((section, i) => {
      const { classification } = section;
      return (
        <div
          className="w-full h-auto flex flex-col gap-2"
          key={`parentsection${classification}`}
        >
          <span className="text-xl font-semibold text-neutral-900">
            {capitalize(classification)}
          </span>
          <Separator />
          <div className="w-full h-auto grid grid-cols-5 items-center justify-center gap-2">
            {section.components.map((component, j) =>
              component.Component ? (
                <Card
                  title={capitalize(component.name)}
                  href={`/components/${classification.replace(' ', '-')}/${
                    component.path
                  }`}
                  key={classification + component.name + i + j}
                  content={<component.Component />}
                />
              ) : null
            )}
          </div>
        </div>
      );
    });

  return <div className="flex flex-col gap-4">{renderSections()}</div>;
};

export default Overview;
