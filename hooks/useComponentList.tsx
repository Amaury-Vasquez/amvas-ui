import { FC } from 'react';

export interface ComponentSection {
  classification: string;
  components: ComponentInfo[];
}

export interface ComponentInfo {
  name: string;
  path: string;
  Component?: FC<any>;
}

export const useComponentList = () => {
  const generalSection: ComponentSection = {
    classification: 'general',
    components: [
      {
        name: 'button',
        path: 'button',
      },
      {
        name: 'icon button',
        path: 'icon-button',
      },
      {
        name: 'separator',
        path: 'separator',
      },
    ],
  };

  const layoutSection: ComponentSection = {
    classification: 'layout',
    components: [
      {
        name: 'divider',
        path: 'divider',
      },
      {
        name: 'grid',
        path: 'grid',
      },
      {
        name: 'layout (header)',
        path: 'header-layout',
      },
      {
        name: 'layout (sider)',
        path: 'sider-layout',
      },
      {
        name: 'sider',
        path: 'sider',
      },
    ],
  };

  const navigationSection: ComponentSection = {
    classification: 'navigation',
    components: [
      {
        name: 'anchor',
        path: 'anchor',
      },
      {
        name: 'breadcrumb',
        path: 'breadcrumb',
      },
      {
        name: 'navigation link',
        path: 'navigation-link',
      },
      {
        name: 'navigation menu',
        path: 'navigation-menu',
      },
    ],
  };

  const dataInputSection: ComponentSection = {
    classification: 'data input',
    components: [
      {
        name: 'auth form',
        path: 'auth-form',
      },
      {
        name: 'checkbox',
        path: 'checkbox',
      },
      {
        name: 'date picker',
        path: 'date-picker',
      },
      {
        name: 'form',
        path: 'form',
      },
      {
        name: 'radio',
        path: 'radio',
      },
      {
        name: 'rate',
        path: 'rate',
      },
      {
        name: 'text input',
        path: 'text-input',
      },
      {
        name: 'select',
        path: 'select',
      },
      {
        name: 'slider',
        path: 'slider',
      },
      {
        name: 'switch',
        path: 'switch',
      },
      {
        name: 'upload',
        path: 'upload',
      },
    ],
  };

  const dataDisplaySection: ComponentSection = {
    classification: 'data display',
    components: [
      {
        name: 'accordion',
        path: 'accordion',
      },
      {
        name: 'article',
        path: 'article',
      },
      {
        name: 'avatar',
        path: 'avatar',
      },
      {
        name: 'card',
        path: 'card',
      },
      {
        name: 'carousel',
        path: 'carousel',
      },
      {
        name: 'tab',
        path: 'tab',
      },
      {
        name: 'tab menu',
        path: 'tab-menu',
      },
      {
        name: 'tag',
        path: 'tag',
      },
    ],
  };

  const feedbackSection: ComponentSection = {
    classification: 'feedback',
    components: [
      {
        name: 'alert',
        path: 'alert',
      },
      {
        name: 'modal',
        path: 'modal',
      },
      {
        name: 'notification',
        path: 'notification',
      },
      {
        name: 'result',
        path: 'result',
      },
    ],
  };

  const loadersSection: ComponentSection = {
    classification: 'loaders',
    components: [
      {
        name: 'bounce',
        path: 'bounce',
      },
      {
        name: 'skeleton',
        path: 'skeleton',
      },
      {
        name: 'spin',
        path: 'spin',
      },
    ],
  };

  const componentList: ComponentSection[] = [
    generalSection,
    layoutSection,
    navigationSection,
    dataInputSection,
    dataDisplaySection,
    feedbackSection,
    loadersSection,
  ];

  return componentList;
};
