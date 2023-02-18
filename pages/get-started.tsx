import Head from 'next/head';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import {
  Anchor,
  Article,
  CopyableText,
  IconButtonLink,
  Separator,
} from '@/components';

export default function GetStarted() {
  return (
    <>
      <Head>
        <title> Facile UI - Get started </title>
        <meta
          name="description"
          content="How to start using Facile UI, find a quick explanation of how to use the components in your current project"
        />
      </Head>
      <main className="w-full h-auto p-0 m-0 flex justify-center">
        <Article className="laptop:w-[60%] ">
          <h1 className="text-2xl mb-2 font-semibold"> Getting started </h1>
          <Separator />
          <p className="my-2 text-lg text-justify">
            Facile UI main purpose is to create components that can be easily
            used and customized, in any project that uses React and Typescript.
            In order to achieve this, the easiest way of using Facile UI is by
            copying the github repository and choosing which components you want
            to use, adding them inside your project. By doing this you can also
            view the source code of the components and delete, add or modify
            anything you want. You can view Facile UI as a boilerplate to write
            less code when creating projects.
          </p>
          <Separator />
          <h2 className="text-xl mt-4 mb-2 font-semibold">
            1. Download repository
          </h2>
          <p className="my-2 text-lg text-justify">
            You can go directly to the project repository page on{' '}
            <Anchor
              href="https://github.com/Amaury-Vasquez/facile-ui"
              target="_blank"
            >
              Github.
            </Anchor>
            <br />
            You can also paste the following command on your terminal to clone
            the repository:
          </p>
          <CopyableText
            className="shadow-sm rounded-md mt-2 w-full bg-transparent-white border border-violet-100 border-solid"
            text="git clone https://github.com/Amaury-Vasquez/facile-ui.git"
          />
          <h2 className="text-xl mt-4 mb-2 font-semibold">
            2. Install dependencies {'(optional)'}.
          </h2>
          <p className="my-2 text-lg text-justify">
            Once you have the repository on your computer, you can install the
            dependencies and run the project to overview the components and try
            them on the browser.
          </p>
          <h2 className="text-xl mt-4 mb-2 font-semibold">
            3. Use the components
          </h2>
          <p className="my-2 text-lg text-justify">
            If you just want to use a single component, you can paste the
            corresponding folder inside your project, or if you want to use all
            of them, I advice you to copy the components folder inside your
            project. All of them are already exported on the index file.
          </p>
          <Separator className="mt-2" />
          <h1 className="text-2xl mt-4 mb-2 font-semibold">Additional steps</h1>
          <p className="my-2 text-lg text-justify">
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
            <IconButtonLink
              target="_blank"
              href="https://www.linkedin.com/in/amaury-vasquez-9a1b3a240/"
              className="w-12 h-12"
              Icon={FaLinkedin}
              iconColor="#0a66c2"
            />

            <IconButtonLink
              target="_blank"
              href="https://github.com/Amaury-Vasquez/facile-ui"
              className="w-12 h-12"
              Icon={FaGithub}
              iconColor="#000"
            />
            <IconButtonLink
              href="mailto:amaury.vasquezenriquez@gmail.com"
              className="w-12 h-12"
              Icon={FaMailBulk}
              iconColor="#cb3a2f"
            />
          </div>
        </Article>
      </main>
    </>
  );
}
