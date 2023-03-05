import Head from 'next/head';
import {
  ApiTable,
  Button,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
  Separator,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const ButtonPage = () => {
  const simpleUsage = [
    "import { Button } from '@/components'",
    '',
    'const Component = () => {',
    '\treturn <Button variant="primary"> Primary </Button>',
    '};',
  ];
  const api: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the button',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'children',
      description: 'The content of the button',
      type: 'ReactNode',
      required: true,
      default: '-',
    },
    {
      property: 'variant',
      description: 'Style variant of the button',
      type: ["'primary'", "'secondary'", "'base'"],
      required: false,
      default: 'base',
    },
    {
      property: 'underlined',
      description: 'If true, the button text will be underlined',
      type: 'boolean',
      required: false,
      default: 'false',
    },
    {
      property: 'type',
      description: 'Defines the button type',
      type: ["'button'", "'submit'", "'reset'"],
      required: false,
      default: 'button',
    },
  ];

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
        <p className={commonTextStyle}>
          The button component is used for actions in the application, it is not
          different from the native button element, except for the fact that it
          has some extra features that make it faster to implement on the app
          flow, including a great default style.
        </p>
        {renderSubtitle('Variants')}
        <div className="flex w-full h-auto items-center justify-center gap-4">
          <Button> Base </Button>
          <Button variant="primary"> Primary </Button>
          <Button variant="secondary"> secondary </Button>
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          For you to use the button component, all you need to do is to import
          the component and use it like this:
        </p>
        <CodeBlock code={simpleUsage} />
        {renderSubtitle('API')}
        <p className={commonTextStyle}>
          The button component extends the props given by HtmlButtonElement in
          React, so you can use all the props that are available by default on a
          normal <strong>button</strong> html tag. Also, there are some extra
          props included for optional button styling.
        </p>
        <ApiTable api={api} />
      </DocsArticle>
    </>
  );
};

export default ButtonPage;
