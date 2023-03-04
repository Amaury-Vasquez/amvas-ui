import { FC } from 'react';
import SyntaxHiglighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { concatStringLines } from '@/utils';

interface CodeBlockProps {
  code: string[];
}

const CodeBlock: FC<CodeBlockProps> = ({ code }) => (
  <SyntaxHiglighter
    customStyle={{
      borderRadius: '2px',
      padding: '16px',
      position: 'relative',
    }}
    language="tsx"
    style={atomOneLight}
  >
    {concatStringLines(code)}
  </SyntaxHiglighter>
);
export default CodeBlock;
