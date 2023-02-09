import { ReactNode } from 'react';
import {
  dataDisplaySection,
  generalSection,
  dataInputSection,
} from '@/overview';

interface ComponentInfo {
  name: string;
  path: string;
}

interface ComponentOverview extends ComponentInfo {
  name: string;
  path: string;
  Component: ReactNode;
}

export interface ComponentTemplate {
  name: string;
  path: string;
  Component?: ReactNode;
}

export interface ComponentNavigationList {
  classification: string;
  components: ComponentInfo[];
}

export interface ComponentOverviewList {
  classification: string;
  components: ComponentOverview[];
}

export const useComponentList = () => {
  const overviewList: ComponentOverviewList[] = [
    generalSection,
    dataDisplaySection,
    dataInputSection,
  ];
  const navigationList: ComponentNavigationList[] = overviewList.map(
    ({ classification, components }) => ({
      classification,
      components: components.map(({ name, path }) => ({ name, path })),
    })
  );

  return { navigationList, overviewList };
};
