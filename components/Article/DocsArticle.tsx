import { FC } from 'react';
import Article, { ArticleProps } from './Article';

const DocsArticle: FC<ArticleProps> = (props) => (
  <Article className="laptop:w-[60%]" {...props} />
);

export default DocsArticle;
