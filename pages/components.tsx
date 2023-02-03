import { NextPage } from 'next';
import { useComponentList } from '@/hooks';
import Overview from '@/overview';

const Components: NextPage = () => {
  const sections = useComponentList();
  return <Overview sections={sections} />;
};

export default Components;
