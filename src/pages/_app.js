import GlobalStyles from '@/components/GlobalStyles';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
      <div id='character-select'></div>
    </>
  );
}

export default MyApp;
