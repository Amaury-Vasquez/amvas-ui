import Head from 'next/head';
import {
  ApiTable,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
  Separator,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const SeparatorPage = () => {
  const simpleUsage = [
    "import { Separator } from '@/components'",
    '',
    'const Component = () => {',
    '\treturn <Separator />',
    '}',
  ];
  const api: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the separator',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'color',
      description: 'Optional hex color of the separator',
      type: 'string',
      required: false,
      default: 'bg-neutral-100',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Separator </title>
        <meta
          name="description"
          content="Separator component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Separator')}
        <p className={commonTextStyle}>
          The separator component is used to separate and organize content in a
          page.
        </p>
        {renderSubtitle('Examples')}
        <div className="flex flex-col gap-4">
          Hello
          <Separator color="bg-red-100" />
          I am
          <Separator />
          An
          <Separator color="bg-blue-100" />
          Example
          <Separator color="bg-violet-100" />
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          All you need to do to use the separator component is to import it and
          use it where you think is needed.
        </p>
        <CodeBlock code={simpleUsage} />
        {renderSubtitle('API')}
        <p className={commonTextStyle}>
          Separator is a simple component, it has just two optional props.
        </p>
        <ApiTable api={api} />
      </DocsArticle>
    </>
  );
};

export default SeparatorPage;
