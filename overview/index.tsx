import { FC } from 'react';
import Overview from './Overview';
import { generalSection } from './general';
import { layoutSection } from './layout';
import { dataDisplaySection } from './dataDisplay';
import { dataInputSection } from './dataInput';
import { feedbackSection } from './feedback';
import { navigationSection } from './navigation';
import { loadersSection } from './loaders';

interface ComponentInfo {
  name: string;
  path: string;
  Component?: FC<any>;
}

export interface ComponentSection {
  classification: string;
  components: ComponentInfo[];
}

export const componentList: ComponentSection[] = [
  generalSection,
  layoutSection,
  dataDisplaySection,
  dataInputSection,
  feedbackSection,
  navigationSection,
  loadersSection,
];

export default Overview;
