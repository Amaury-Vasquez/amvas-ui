import dynamic from 'next/dynamic';
import { FC } from 'react';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Skeleton } from '../Loaders';
import { concatStringLines } from '@/utils';

interface CodeBlockProps {
  code: string[];
}

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-48" />,
});

const CodeBlock: FC<CodeBlockProps> = ({ code }) => (
  <SyntaxHighlighter
    customStyle={{
      borderRadius: '2px',
      padding: '16px',
      position: 'relative',
      animation: 'fade-in 1s ease-in-out',
    }}
    language="tsx"
    style={atomOneLight}
  >
    {concatStringLines(code)}
  </SyntaxHighlighter>
);
export default CodeBlock;
