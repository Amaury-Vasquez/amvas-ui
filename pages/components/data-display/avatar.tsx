import Head from 'next/head';
import {
  ApiTable,
  Avatar,
  CodeBlock,
  commonTextStyle,
  DocsArticle,
  renderTitle,
  renderSubtitle,
} from '@/components';
import { ComponentApi } from '@/interfaces';

const AvatarPage = () => {
  const simpleUsage = [
    "import { Avatar } from '@/components'",
    '',
    'const Component = () => (',
    '\t<Avatar src="img.url.com" alt="alt text" />',
    ')',
  ];
  const api: ComponentApi[] = [
    {
      property: 'className',
      description: 'Optional css class names to be added to the avatar',
      type: 'string',
      required: false,
      default: 'undefined',
    },
    {
      property: 'src',
      description: 'The url of the image to be displayed',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'alt',
      description: 'Alternative text for the image',
      type: 'string',
      required: true,
      default: '-',
    },
    {
      property: 'size',
      description: 'The size of the avatar',
      type: 'string',
      required: false,
      default: 'md',
    },
    {
      property: 'handleClick',
      description: 'Function to be executed when the avatar is clicked',
      type: 'function',
      required: false,
      default: '() => {}',
    },
    {
      property: 'width',
      description: 'The width of the image',
      required: false,
      type: 'number',
      default: 'undefined',
    },
    {
      property: 'height',
      description: 'The height of the image',
      required: false,
      type: 'number',
      default: 'undefined',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Avatar </title>
        <meta
          name="description"
          content="Avatar component documentation, Facile UI"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Avatar')}
        <p className={commonTextStyle}>
          The avatar component is used for showing an image or a placeholder for
          site users.
        </p>
        {renderSubtitle('Examples')}
        <div className="flex justify-center items-center gap-2">
          <Avatar
            size="xs"
            src="https://i.imgur.com/39jqiyC.jpg?1"
            alt="avatar-example-1"
          />
          <Avatar
            size="sm"
            src="https://i.imgur.com/bM4humM.jpg?3"
            alt="avatar-example-2"
          />
          <Avatar
            size="md"
            src="https://i.imgur.com/UYQhEzt.jpg"
            alt="avatar-example-3"
          />
          <Avatar
            size="lg"
            src="https://i.imgur.com/7q8sc4h.jpg"
            alt="avatar-example-4"
          />
        </div>
        {renderSubtitle('Usage')}
        <p className={commonTextStyle}>
          In order to use the article component, you need to import it and use
          it where you think is needed, required props are src for the image and
          alt for the image alt text.
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

export default AvatarPage;
