import { SessionProvider } from 'next-auth/react';
import GlobalStyles from '@/components/GlobalStyles';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
      <div id='character-select'></div>
    </SessionProvider >
  );
}

export default MyApp;
