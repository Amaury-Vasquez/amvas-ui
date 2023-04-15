import Head from 'next/head';
import {
  ApiTable,
  TabMenu,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
  TextTabProps,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const TabMenuPage = () => {
  const tabItems: TextTabProps[] = [
    { name: 'Tab 1', isActive: true },
    { name: 'Tab 2' },
    { name: 'Tab 3' },
    { name: 'Tab 4' },
    { name: 'Tab 5' },
  ];
  const simpleUsage = [
    "import { TabMenu } from '@/components'",
    '',
    'const Component = () => (',
    '\t<TabMenu',
    '\t\ttitle="TabMenu example"',
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
      description: 'Optional css class names to be added to the TabMenu',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'title',
      description: 'TabMenu title',
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
        <title> Facile UI - Tab Menu </title>
        <meta
          name="description"
          content="TabMenu component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('TabMenu')}
        <p className={commonTextStyle}>
          The Tab Menu component is used for showing a way to navigate throught
          sections or pages. It is an organized way to show the user different
          content.
        </p>
        <div className="w-full mobile:w-1/2 m-auto">
          <TabMenu items={tabItems} />
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

export default TabMenuPage;
