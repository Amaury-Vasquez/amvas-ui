import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ArticleProps {
  className?: string;
  children: ReactNode;
  textSize?: string;
}

const Article: FC<ArticleProps> = ({
  className,
  children,
  textSize = 'base',
}) => (
  <article
    className={clsx(
      'w-full h-full p-1 whitespace-normal text-slate-800',
      `text-${textSize}`,
      className
    )}
  >
    {children}
  </article>
);

export default Article;
