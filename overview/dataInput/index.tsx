import { ComponentOverviewList } from '@/hooks';
import InputOverview from './Input';
import UploadOverview from './Upload';
import SliderOverview from './Slider';
import SwitchOverview from './Switch';
import RateOverview from './Rate';
import SelectOverview from './Select';

export const dataInputSection: ComponentOverviewList = {
  classification: 'data input',
  components: [
    //   {
    //     name: 'checkbox',
    //     path: 'checkbox',
    //   },
    //   {
    //     name: 'date picker',
    //     path: 'date-picker',
    //   },
    //   {
    //     name: 'radio',
    //     path: 'radio',
    //   },
    {
      name: 'rate',
      path: 'rate',
      Component: <RateOverview />,
    },
    {
      name: 'input',
      path: 'input',
      Component: <InputOverview />,
    },
    {
      name: 'select',
      path: 'select',
      Component: <SelectOverview />,
    },
    {
      name: 'slider',
      path: 'slider',
      Component: <SliderOverview />,
    },
    {
      name: 'switch',
      path: 'switch',
      Component: <SwitchOverview />,
    },
    {
      name: 'upload',
      path: 'upload',
      Component: <UploadOverview />,
    },
  ],
};
