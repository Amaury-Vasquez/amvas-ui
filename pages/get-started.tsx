import Head from 'next/head';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import {
  Anchor,
  commonTextStyle,
  DocsArticle,
  CopyableText,
  IconButtonLink,
  IconButtonLinkProps,
  Separator,
  renderSubtitle,
  renderTitle,
} from '@/components';

export default function GetStarted() {
  const socialMediaLinks: IconButtonLinkProps[] = [
    {
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/amaury-vasquez-9a1b3a240/',
      target: '_blank',
      iconColor: '#0a66c2',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/Amaury-Vasquez/facile-ui',
      target: '_blank',
      iconColor: '#333',
    },
    {
      Icon: FaMailBulk,
      href: 'mailto:amaury.vasquezenriquez@gmail.com',
      iconColor: '#cb3a2f',
    },
  ];

  return (
    <>
      <Head>
        <title> Facile UI - Get started </title>
        <meta
          name="description"
          content="How to start using Facile UI, find a quick explanation of how to use the components in your current project"
        />
      </Head>
      <DocsArticle>
        {renderTitle('Get started')}
        <Separator />
        <p className={commonTextStyle}>
          Facile UI main purpose is to create components that can be easily used
          and customized, in any project that uses React and Typescript. In
          order to achieve this, the easiest way of using Facile UI is by
          copying the github repository and choosing which components you want
          to use, adding them inside your project. By doing this you can also
          view the source code of the components and delete, add or modify
          anything you want. You can view Facile UI as a boilerplate to write
          less code when creating projects.
        </p>
        <Separator />
        {renderSubtitle('1. Download repository')}
        <p className={commonTextStyle}>
          You can go directly to the project repository page on{' '}
          <Anchor
            href="https://github.com/Amaury-Vasquez/facile-ui"
            target="_blank"
          >
            Github.
          </Anchor>
          <br />
          You can also paste the following command on your terminal to clone the
          repository:
        </p>
        <CopyableText
          className="shadow-sm rounded-md mt-2 w-full bg-transparent-white border border-violet-100 border-solid"
          text="git clone https://github.com/Amaury-Vasquez/facile-ui.git"
        />
        {renderSubtitle('2. Install dependencies (optional)')}
        <p className={commonTextStyle}>
          Once you have the repository on your computer, you can install the
          dependencies and run the project to overview the components and try
          them on the browser.
        </p>
        {renderSubtitle('3. Use the components')}
        <p className={commonTextStyle}>
          If you just want to use a single component, you can paste the
          corresponding folder inside your project, or if you want to use all of
          them, I advice you to copy the components folder inside your project.
          All of them are already exported on the index file.
        </p>
        <Separator className="mt-2 mb-2" />
        {renderTitle('Additional steps')}
        <p className={commonTextStyle}>
          If you are interested on using Facile UI components, please give a
          star to the project on{' '}
          <Anchor
            href="https://github.com/Amaury-Vasquez/facile-ui"
            target="_blank"
          >
            Github.
          </Anchor>{' '}
          <br />
          Also if you want to collaborate or to make suggestions on how to
          improve the project, feel free to make a pull request or to
          communicate with me, {" I'm"} in constant desire to improve and
          feedback is always welcome. <br />
          You can reach out to me on linkedin, github or via email.
        </p>
        <div className="w-full h-auto flex mt-4 items-center justify-center gap-4">
          {socialMediaLinks.map((atrributes, i) => (
            <IconButtonLink
              className="w-12 h-12"
              key={'contact-social-media-link' + i}
              {...atrributes}
            />
          ))}
        </div>
      </DocsArticle>
    </>
  );
}
