import Head from 'next/head';
import {
  Accordion,
  ApiTable,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const AccordionPage = () => {
  const simpleUsage = [
    "import { Accordion } from '@/components'",
    '',
    'const Component = () => {',
    '\treturn <Accordion',
    '\t\tclassName="rounded-md w-full mobile:w-52"',
    '\t\ttext="Example"',
    '\t\ttoggleableContent={',
    '\t\t\t<div className="flex flex-col">',
    '\t\t\t\t<span className="justify-center items-center flex border-t border-solid border-primary w-full h-full">',
    '\t\t\t\t\tHello',
    '\t\t\t\t</span>',
    '\t\t\t</div>',
    '\t\t}',
    '\t\tfilled={false}',
    '\t\tbordered',
    '\t/>',
    '}',
  ];
  const api: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the accordion',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'disabled',
      description: 'Prop to disable the accordion',
      type: 'boolean',
      required: false,
      default: 'false',
    },
    {
      property: 'text',
      description: 'Text to be displayed as title of the accordion',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'toggleableContent',
      description: 'Content to be displayed when the accordion is toggled',
      type: 'ReactNode',
      required: true,
      default: '-',
    },
    {
      property: 'filled',
      description: 'Prop to fill the accordion with the primary color',
      type: 'boolean',
      required: false,
      default: 'false',
    },
    {
      property: 'bordered',
      description: 'Prop to add a border to the accordion',
      type: 'boolean',
      required: false,
      default: 'false',
    },
    {
      property: 'active',
      description: 'Prop to set the initial state of the accordion',
      type: 'boolean',
      required: false,
      default: 'false',
    },
    {
      property: 'Icon',
      description: 'Icon to be displayed in the accordion',
      type: 'IconType',
      required: false,
      default: 'FaAngleRight',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Accordion </title>
        <meta
          name="description"
          content="Accordion component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Accordion')}
        <p className={commonTextStyle}>
          The accordion component is used for toggling the visibility of items
          in a list.
        </p>
        {renderSubtitle('Examples')}
        <div className="flex gap-4 items-center justify-center">
          <Accordion
            className="rounded-md w-full mobile:w-52"
            text="Example"
            toggleableContent={
              <div className="flex flex-col">
                <span className="justify-center items-center flex border-t border-solid border-primary w-full h-full">
                  Hello
                </span>
                <span className="justify-center items-center flex border-t border-solid border-primary w-full h-full">
                  I am
                </span>
                <span className="justify-center items-center flex border-t border-solid border-primary w-full h-full">
                  An
                </span>
                <span className="justify-center items-center flex border-t border-solid border-primary w-full h-full">
                  Example
                </span>
              </div>
            }
            filled={false}
            bordered
          />
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          In order to use the accordion component, you need to import it and use
          it where you think is needed, the toggleable content is passed as a
          prop, in that way, you can control what is rendered when the accordion
          is toggled.
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

export default AccordionPage;
