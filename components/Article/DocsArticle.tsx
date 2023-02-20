import { FC } from 'react';
import Article, { ArticleProps } from './Article';

export const renderTitle = (text: string) => (
  <h1 className="text-2xl mb-2 font-semibold"> {text} </h1>
);

export const renderSubtitle = (text: string) => (
  <h2 className="text-xl mt-4 mb-2 font-semibold"> {text}</h2>
);

export const commonTextStyle = 'my-2 text-lg text-justify';

const DocsArticle: FC<ArticleProps> = (props) => (
  <main className="w-full h-auto p-0 m-0 flex justify-center">
    <Article className="laptop:w-[60%] text-justify" {...props} />
  </main>
);

export default DocsArticle;
