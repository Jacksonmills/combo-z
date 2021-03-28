import styled from 'styled-components/macro';
import Head from 'next/head';

import { COLORS } from '../constants';

import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Combo from '../components/Combo';
import Dpad from '../components/Dpad';
import Attack from '../components/Attack';

export default function Home() {
  return (
    <>
      <Head>
        <title>Combo Z</title>
        <link rel='icon' href='/img/2h.png' />
      </Head>
      <MaxWidthWrapper>
        <ComboWrapper>
          <Combo
            location='Midscreen'
            damage={42}
            difficulty='Very easy'
            description='Standard Sayian BnB, the combo you will be using most often.'
            notation={[
              <>
                <Attack button='light' />
                <Attack button='light' />
              </>,
              <>
                <Dpad direction='down' />
                <Attack button='medium' />
                <Attack button='medium' />
              </>,
              <>
                <Dpad direction='down' />
                <Attack button='heavy' />
              </>,
              <>
                <Attack button='light' />
                <Attack button='light' />
              </>,
              <>
                <Attack button='special' />
                <Attack button='heavy' />
              </>,
            ]}
          />
        </ComboWrapper>
      </MaxWidthWrapper>
    </>
  );
}

const ComboWrapper = styled.div.attrs((props) => ({
  tabindex: '1',
}))`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-gap: 24px;
  place-content: center;
  height: 100vh;
`;
