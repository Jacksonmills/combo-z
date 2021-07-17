import { Provider } from 'next-auth/client';

import GlobalStyles from '@/components/GlobalStyles';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
      <div id='character-select'></div>
    </Provider>
  );
}

export default MyApp;
