import { SessionProvider } from 'next-auth/react';
import GlobalStyles from '@/components/GlobalStyles';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyles />
      <div id='modal'></div>
    </SessionProvider >
  );
}

export default MyApp;
