import styled from 'styled-components/macro';
import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';

import { COLORS } from '../constants';

// import { COMBOS } from '../BLK';

import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Combo from '../components/Combo';

export default function GokuBlack({ characters }) {
  console.log(characters);
  const character = 'Goku Black';
  return (
    <Wrapper>
      <Head>
        <title>ComboZ | Goku Black</title>
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
          {characters &&
            characters.map((character, _id) => (
              <Combo
                key={_id}
                character={character.character}
                notation={character.notation}
                damage={character.damage}
                meterGain={character.meterGain}
                worksOn={character.worksOn}
                difficulty={character.difficulty}
                notes={character.notes}
              />
            ))}
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

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('gokuBlack').find({}).limit(20).toArray();

  // const data = await db.collection('characters').find({ characterID: _id })

  const characters = JSON.parse(JSON.stringify(data));

  const filtered = characters.map((property) => {
    return {
      _id: property._id,
      character: property.character,
      notation: property.notation,
      damage: property.damage,
      meterGain: property.meterGain,
      worksOn: property.worksOn,
      difficulty: property.difficulty,
      notes: property.notes,
    };
  });

  return {
    props: { characters: filtered },
  };
}
