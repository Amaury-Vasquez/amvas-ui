import Head from 'next/head';
import {
  ApiTable,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const ArticlePage = () => {
  const simpleUsage = [
    "import { Article } from '@/components'",
    '',
    'const Component = () => {',
    '\treturn <Article>',
    '\t\t<p className="common-text-style"> Here you will show the content! </p>',
    '\t</Article>',
  ];
  const api: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the article',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'children',
      description: 'The content of the article (is not a real prop)',
      type: 'ReactNode',
      required: true,
      default: '-',
    },
    {
      property: 'textSize',
      description: 'Default text size for the article text',
      type: 'string',
      required: false,
      default: 'base',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Article </title>
        <meta
          name="description"
          content="Article component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Article')}
        <p className={commonTextStyle}>
          The article component is used for showing structured content in a page
          section.
        </p>
        {renderSubtitle('Examples')}
        <p className={commonTextStyle}>
          The page you are seeing right now uses a minor variation of the
          article component.
        </p>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          In order to use the article component, you need to import it and use
          it where you think is needed, passing the content to show as children
          of the component.
        </p>
        <CodeBlock code={simpleUsage} />
        {renderSubtitle('API')}
        <p className={commonTextStyle}>
          Accordion component has the following props:
        </p>
        <ApiTable api={api} />
      </DocsArticle>
    </>
  );
};

export default ArticlePage;
