export interface ComponentSection {
  classification: string;
  components: ComponentInfo[];
}

export interface ComponentInfo {
  name: string;
  path: string;
}

export const useComponentList = () => {
  const generalSection: ComponentSection = {
    classification: 'general',
    components: [
      {
        name: 'Button',
        path: 'button',
      },
    ],
  };
  const navigationSection: ComponentSection = {
    classification: 'navigation',
    components: [
      {
        name: 'Navigation link',
        path: 'navigation-link',
      },
      {
        name: 'Navigation menu',
        path: 'navigation-menu',
      },
    ],
  };
  const LayoutSection: ComponentSection = {
    classification: 'layout',
    components: [
      {
        name: 'Layout (with sider)',
        path: 'sider-layout',
      },
      {
        name: 'Sider',
        path: 'sider',
      },
    ],
  };
  const componentList: ComponentSection[] = [
    generalSection,
    navigationSection,
    LayoutSection,
  ];

  return componentList;
};
