import styled from 'styled-components/macro';
import Head from 'next/head';

import { COLORS } from '../constants';

import Header from '../components/Header';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Combo Z</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Alef:wght@400;700&family=Hind+Guntur:wght@400;500;600&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='icon' href='/img/2h.png' />
      </Head>
      <Header />
      <MaxWidthWrapper></MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  background: hsl(0, 55%, 47%);
  background: linear-gradient(
    335deg,
    hsl(0, 55%, 47%) 0%,
    hsl(52, 100%, 49%) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
`;
