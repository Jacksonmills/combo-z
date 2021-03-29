import styled from 'styled-components/macro';
import Head from 'next/head';

import { COLORS } from '../constants';

import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Combo from '../components/Combo';
import Dpad from '../components/Dpad';
import Attack from '../components/Attack';
import FollowUp from '../components/FollowUp';

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
      <MaxWidthWrapper>
        <ComboWrapper>
          <Combo
            character='Goku Black'
            location='Midscreen'
            damage={42}
            difficulty='Very easy'
            description='Standard Sayian BnB, the combo you will be using most often.'
            notation={[
              <>
                <Attack button='L' />
                <Attack button='L' />
              </>,
              <>
                <Dpad direction={2} />
                <Attack button='M' />
                <Attack button='M' />
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='H' />
              </>,
              <>
                <Attack button='L' />
                <Attack button='L' />
              </>,
              <>
                <Attack button='S' />
                <Attack button='H' />
              </>,
              <>
                <Dpad direction={236} />
                <Attack button='H' />
                <Attack button='S' />
              </>,
            ]}
          />
          <Combo
            character='Hit'
            location='All'
            damage={55}
            difficulty='Hard'
            description="Stance cancel loops. Easily Hit's best option in corner if you have the resources to spend, and does massive damage. The 236L~M at the end can be replaced with any ideal follow up. If scaled, do only two loops."
            // 5M > 2H > 236M~5LLL > (5LLL > 236H~S)x3 5LLL > 236L~M
            notation={[
              <>
                <Dpad direction={5} />
                <Attack button='M' />
              </>,
              <>
                <Dpad direction={2} />
                <Attack button='H' />
              </>,
              <>
                <Dpad direction={236} />
                <Attack button='M' />
                <FollowUp />
                <Dpad direction={5} />
                <Attack button='L' />
                <Attack button='L' />
                <Attack button='L' />
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='L' />
                <Attack button='L' />
                <Attack button='L' />
                <Dpad direction={236} />
                <Attack button='H' />
                <FollowUp />
                <Attack button='S' />
                x3
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='L' />
                <Attack button='L' />
                <Attack button='L' />
              </>,
              <>
                <Dpad direction={236} />
                <Attack button='L' />
                <FollowUp />
                <Attack button='M' />
              </>,
            ]}
          />
          <Combo
            character='Cooler'
            location='All'
            damage={48}
            difficulty='Medium'
            description='Corner Bnb #3'
            // 5M > 2M > 6H > 5S > SD > j.2H ▷ 6H > 5H > 5S > SD > j.ML > jc > j.LL2HS > j.214M~M
            notation={[
              <>
                <Dpad direction={5} />
                <Attack button='M' />
              </>,
              <>
                <Dpad direction={2} />
                <Attack button='M' />
              </>,
              <>
                <Dpad direction={6} />
                <Attack button='H' />
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='S' />
              </>,
              <>
                <p>SD</p>
              </>,
              <>
                <p>j.</p>
                <Dpad direction={2} />
                <Attack button='H' />
              </>,
              <>
                <p>land</p>
                <Dpad direction={6} />
                <Attack button='H' />
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='H' />
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='S' />
              </>,
              <>
                <p>SD</p>
              </>,
              <>
                <p>j.</p>
                <Attack button='M' />
                <Attack button='L' />
              </>,
              <>
                <p>jc.</p>
                <Attack button='L' />
                <Attack button='L' />
                <Dpad direction={2} />
                <Attack button='H' />
                <Attack button='S' />
              </>,
              <>
                <p>j.</p>
                <Dpad direction={214} />
                <Attack button='M' />
                <FollowUp />
                <Attack button='M' />
              </>,
            ]}
          />
          <Combo
            character='Goku Black'
            location='Midscreen'
            damage={42}
            difficulty='Very easy'
            description='Standard Sayian BnB, the combo you will be using most often.'
            notation={[
              <>
                <Attack button='L' />
                <Attack button='L' />
              </>,
              <>
                <Dpad direction={2} />
                <Attack button='M' />
                <Attack button='M' />
              </>,
              <>
                <Dpad direction={5} />
                <Attack button='H' />
              </>,
              <>
                <Attack button='L' />
                <Attack button='L' />
              </>,
              <>
                <Attack button='S' />
                <Attack button='H' />
              </>,
              <>
                <Dpad direction={236} />
                <Attack button='H' />
                <Attack button='S' />
              </>,
            ]}
          />
        </ComboWrapper>
      </MaxWidthWrapper>
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

const ComboWrapper = styled.div.attrs((props) => ({
  tabindex: '1',
}))`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-gap: 24px;
  place-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Delay = styled.span`
  color: #ffffff;
  background: rgb(49, 21, 41);
  border-radius: 8px;
  padding: 2px 6px 4px;
`;
