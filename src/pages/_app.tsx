import { SessionProvider } from 'next-auth/react';
import GlobalStyles from '@/components/GlobalStyles';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyles />
      <div id='character-select'></div>
      <div id='character-add'></div>
      <div id='combo-add'></div>
    </SessionProvider >
  );
}

export default MyApp;
