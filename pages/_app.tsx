import type { AppProps } from 'next/app';
import { Source_Sans_Pro } from '@next/font/google';
import { Layout } from 'components';
import 'tailwindcss/tailwind.css';
import 'styles/globals.css';

const sans = Source_Sans_Pro({
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['italic', 'normal'],
  preload: true,
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout font={sans}>
      <Component {...pageProps} />
    </Layout>
  );
}
