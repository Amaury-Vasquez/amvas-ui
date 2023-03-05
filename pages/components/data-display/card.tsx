import Head from 'next/head';
import {
  ApiTable,
  Card,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const CardPage = () => {
  const simpleUsage = [
    "import { Card } from '@/components'",
    '',
    'const Component = () => (',
    '\t<Card',
    '\t\ttitle="Card example"',
    '\t\thref=""',
    '\t\tcontent={',
    '\t\t\t<p className={commonTextStyle}>',
    '\t\t\t\tYou can add any content you want inside the card!',
    '\t\t\t</p>',
    '\t\t}',
    '\t/>',
    ')',
  ];
  const api: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the Card',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'title',
      description: 'Card title',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'content',
      description: 'Content of the card',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'href',
      description: 'Link to be redirected when the card is clicked',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'height',
      description: 'Custom height of the card',
      type: 'string',
      required: false,
      default: 'h-64 (256px)',
    },
    {
      property: 'target',
      description: 'The target of the link',
      required: false,
      type: ["'_self'", "'_blank'", "'_parent'", "'_top'"],
      default: '_self',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Card </title>
        <meta
          name="description"
          content="Card component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Card')}
        <p className={commonTextStyle}>
          The Card component is used for showing organized content, it can be
          products on a shop, articles or any other type of content.
        </p>
        {renderSubtitle('Examples')}
        <div className="w-full mobile:w-1/2 m-auto">
          <Card
            title="Card example"
            href=""
            content={
              <p className={commonTextStyle}>
                You can add any content you want inside the card!
              </p>
            }
          />
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          In order to use the card component, you need to import it and use it
          where you think is needed, required props are title, content and href.
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

export default CardPage;
