import Head from 'next/head';
import {
  Button,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
  Separator,
} from '@/components';

const ButtonPage = () => {
  return (
    <>
      <Head>
        <title> Facile UI - Button </title>
        <meta
          name="description"
          content="Button component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Button')}
        <Separator />
        <p className={commonTextStyle}>
          The button component is used for actions in the application, it is not
          different from the native button element, except for the fact that it
          has some extra features that make it faste to implement on the app
          flow, including a great default style.
        </p>
        {renderSubtitle('Variants')}
        <div className="flex w-full h-auto items-center justify-center gap-4">
          <Button> Base </Button>
          <Button variant="primary"> Primary </Button>
          <Button variant="primary-dark"> primary-dark </Button>
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          For you to use the button component, all you need to do is to import
          the component and use it like this:
        </p>
      </DocsArticle>
    </>
  );
};

export default ButtonPage;
