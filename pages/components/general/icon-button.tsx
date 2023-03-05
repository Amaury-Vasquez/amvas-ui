import Head from 'next/head';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineMenuFold,
} from 'react-icons/ai';
import {
  Anchor,
  ApiTable,
  IconButton,
  CodeBlock,
  commonTextStyle,
  CopyableText,
  DocsArticle,
  renderTitle,
  renderSubtitle,
  Separator,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const IconButtonPage = () => {
  const examples = [
    { icon: AiOutlineInstagram, fill: '#ca4070' },
    { icon: AiFillFacebook, fill: '#0f90f3' },
    { icon: AiFillYoutube, fill: '#ff0000' },
    { icon: AiOutlineMenuFold, fill: '#2f2f2f' },
  ];

  const simpleUsage = [
    "import { AiFillFacebook } from 'react-icons/ai'",
    "import { IconButton } from '@/components'",
    '',
    'const Component = () => {',
    '\tconst onClick = () => {}',
    '\treturn (<IconButton',
    '\t\tclassName="w-12 h-12"',
    '\t\tIcon="AiOutlineFacebook"',
    '\t\ticonColor="#0f90f3"',
    '\t\tonClick={onClick}',
    '\t/>)',
    '}',
  ];

  const buttonApi: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the icon button',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'Icon',
      description: 'The icon to be displayed',
      type: 'IconType',
      required: true,
      default: '-',
    },
    {
      property: 'iconColor',
      description: 'The fill color of the icon',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'hoverColor',
      description: 'The color of the icon when hovered',
      type: 'string',
      required: false,
      default: 'bg-gray-200',
    },
    {
      property: 'type',
      description: 'Defines the button type',
      type: ["'button'", "'submit'", "'reset'"],
      required: false,
      default: 'button',
    },
  ];

  const linkApi: ComponentApi[] = [
    {
      property: 'href',
      description: 'The url to navigate to',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'target',
      description: 'The target attribute of the anchor tag',
      type: ["'_blank'", "'_self'", "'_parent'", "'_top'"],
      required: false,
      default: '_self',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Icon Button </title>
        <meta
          name="description"
          content="Icon Button component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Icon Button')}
        <p className={commonTextStyle}>
          Icon button component is used like a regular button, but instead of
          using text as content, it shows an icon. It is used for actions or
          even as a link for navigation, common use cases include showing social
          media links, open/close buttons, etc. <br />
        </p>
        {renderSubtitle('Examples')}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {examples.map(({ icon, fill }, i) => (
            <IconButton
              className="w-12 h-12"
              key={'iconbuttonexample' + i}
              Icon={icon}
              iconColor={fill}
            />
          ))}
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          For you to use the icon button component, first of all, you need to
          know is that it uses the icons provided by{' '}
          <Anchor
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            underlined
          >
            react-icons library
          </Anchor>
          , so you need to install the library first. You can do it by copying
          the following command and then pasting it in your terminal:
        </p>
        <CopyableText
          className="shadow-sm rounded-md mt-2 w-full bg-transparent-white border border-blue-100 border-solid"
          text="npm install react-icons --save"
        />
        <p className={commonTextStyle}>
          Then you can import the icon button component and use it like this:
        </p>
        <CodeBlock code={simpleUsage} />
        {renderSubtitle('API (IconButton)')}
        <p className={commonTextStyle}>
          The IconButton extends the props given by HTMLButtonElement in react,
          so you can use all the props that are available by default on a normal
          <strong> button </strong> html tag. In addition to that, these are the
          custom props for this component:
        </p>
        <ApiTable api={buttonApi} />
        <br />
        {renderSubtitle('API (IconButtonLink)')}
        <p className={commonTextStyle}>
          If you want the icon to be a link to another page, you can use the
          IconButtonLink component instead, it wrapps the IconButton component
          on a <strong>NextJS</strong> link component. It works almost
          indentically, the only difference is that it has a required{' '}
          <strong>href</strong> prop, an optional <strong>target</strong> prop
          and it {"doesn't"} have the <strong>type</strong> prop.
        </p>
        <ApiTable api={linkApi} />
      </DocsArticle>
    </>
  );
};

export default IconButtonPage;
