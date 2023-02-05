import { componentList } from '@/overview';

export const useComponentList = () => {
  const list = componentList.map((section) => ({
    classification: section.classification,
    components: section.components.map((component) => ({
      name: component.name,
      path: component.path,
    })),
  }));
  return list;
};
