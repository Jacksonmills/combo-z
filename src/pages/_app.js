import GlobalStyles from '@/components/GlobalStyles';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
