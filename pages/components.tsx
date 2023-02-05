import { NextPage } from 'next';
import Head from 'next/head';
import Overview from '@/overview';

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title> Facile UI - Components overview </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Facile UI components overview, general, data display, data input, feedback, navigation, loaders"
        />
      </Head>
      <Overview />
    </>
  );
};

export default Components;
