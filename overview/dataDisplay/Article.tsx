import { FC } from 'react';
import { Article, Separator } from '@/components';

export const ArticleOverview: FC = () => (
  <Article>
    <h1 className="text-2xl font-semibold text-neutral-900"> Info </h1>
    <Separator />
    <p className="text-base text-neutral-700">
      The Article component is used to display a block of structured content,
      normally text.
    </p>
  </Article>
);
