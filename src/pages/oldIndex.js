import styled from 'styled-components/macro';
import Head from 'next/head';

import { COLORS } from '../constants';

import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Combo from '../components/Combo';
import Dpad from '../components/Dpad';
import Attack from '../components/Attack';
import FollowUp from '../components/FollowUp';
import SuperDash from '../components/SuperDash';
import DragonRush from '../components/DragonRush';
import Modifier from '../components/Modifier';
import Loop from '../components/Loop';
import ComboStep from '../components/ComboStep';

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
        <link rel='icon' href='/images/2h.png' />
      </Head>
      <MaxWidthWrapper>
        <ComboWrapper>
          <Combo
            character='Goku Black'
            worksOn='Midscreen'
            damage={42}
            difficulty='Very easy'
            notes='Standard Sayian BnB, the combo you will be using most often.'
            notation={[
              <ComboStep sparking={true}>
                <Modifier>IAD</Modifier>
                <Attack button='H' />
              </ComboStep>,
              <ComboStep sparking={true}>
                <Attack button='L' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep sparking={true}>
                <Dpad direction={2} />
                <Attack button='M' />
                <Attack button='M' />
              </ComboStep>,
              <ComboStep>
                <Modifier>jc.</Modifier>
                <Attack button='L' />
                <Attack button='M' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={2} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <SuperDash />
              </ComboStep>,
              <ComboStep>
                <Attack button='L' />
                <Attack button='M' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={2} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Modifier>jc.</Modifier>
                <Attack button='L' />
                <Attack button='M' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Attack button='S' />
                <Dpad direction={236} />
                <Attack button='M' />
              </ComboStep>,
              <ComboStep>
                <Attack button='A1' />
              </ComboStep>,
              <ComboStep>
                <Modifier>delay</Modifier>
                <DragonRush />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={214} />
                <Attack button='H' />
                <Attack button='S' />
              </ComboStep>,
            ]}
          />
          <Combo
            character='Hit'
            worksOn='All'
            damage={55}
            difficulty='Hard'
            notes="Stance cancel loops. Easily Hit's best option in corner if you have the resources to spend, and does massive damage. The 236L~M at the end can be replaced with any ideal follow up. If scaled, do only two loops."
            // 5M > 2H > 236M~5LLL > (5LLL > 236H~S)x3 5LLL > 236L~M
            notation={[
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='M' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={2} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={236} />
                <Attack button='M' />
                <FollowUp />
                <Dpad direction={5} />
                <Attack button='L' />
                <Attack button='L' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep sparking={true}>
                <Dpad direction={5} />
                <Attack button='L' />
                <Attack button='L' />
                <Attack button='L' />
                <Dpad direction={236} />
                <Attack button='H' />
                <FollowUp />
                <Attack button='S' />
                <Loop repeat={3} />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='L' />
                <Attack button='L' />
                <Modifier reverse={true}>(3)</Modifier>
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={236} />
                <Attack button='L' />
                <FollowUp />
                <Attack button='M' />
              </ComboStep>,
            ]}
          />
          <Combo
            character='Cooler'
            worksOn='All'
            damage={48}
            difficulty='Medium'
            notes='Corner Bnb #3'
            // 5M > 2M > 6H > 5S > SD > j.2H ▷ 6H > 5H > 5S > SD > j.ML > jc > j.LL2HS > j.214M~M
            notation={[
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='M' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={2} />
                <Attack button='M' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={6} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='S' />
              </ComboStep>,
              <ComboStep>
                <Attack button='S' />
                <SuperDash />
                <DragonRush />
                <Dpad direction={5} />
              </ComboStep>,
              <ComboStep>
                <Modifier>j.</Modifier>
                <Dpad direction={2} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Modifier>land</Modifier>
                <Dpad direction={6} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='S' />
              </ComboStep>,
              <ComboStep>
                <SuperDash />
              </ComboStep>,
              <ComboStep>
                <Modifier>j.</Modifier>
                <Attack button='M' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Modifier>jc.</Modifier>
                <Attack button='L' />
                <Modifier>delay</Modifier>
                <Attack button='L' />
                <Dpad direction={2} />
                <Modifier>vanish</Modifier>
                <Attack button='H' />
                <Attack button='S' />
              </ComboStep>,
              <ComboStep>
                <Modifier>j.</Modifier>
                <Dpad direction={214} />
                <Attack button='M' />
                <FollowUp />
                <Attack button='M' />
              </ComboStep>,
            ]}
          />
          <Combo
            character='Goku Black'
            worksOn='Midscreen'
            damage={42}
            difficulty='Very easy'
            notes='Standard Sayian BnB, the combo you will be using most often.'
            notation={[
              <ComboStep>
                <Attack button='L' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={2} />
                <Attack button='M' />
                <Attack button='M' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={5} />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Attack button='L' />
                <Attack button='L' />
              </ComboStep>,
              <ComboStep>
                <Attack button='S' />
                <Attack button='H' />
              </ComboStep>,
              <ComboStep>
                <Dpad direction={236} />
                <Attack button='H' />
                <Attack button='S' />
              </ComboStep>,
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
