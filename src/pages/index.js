import styled from 'styled-components/macro';
import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';

import Header from '../components/Header';
import Layout from '../components/Layout';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

export default function Home({ characters, combos }) {
  return (
    <Layout>
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
      <Header characters={characters} />
      <MaxWidthWrapper>
        <h1>Welcome!</h1>
        {combos &&
          combos.map((combo, _id) => {
            'test';
          })}
      </MaxWidthWrapper>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const characterData = await db
    .collection('characters')
    .find({})
    .limit(20)
    .toArray();
  const comboData = await db.collection('combos').find({}).limit(1).toArray();

  const characters = JSON.parse(JSON.stringify(characterData));
  const combos = JSON.parse(JSON.stringify(comboData));

  const filteredCharacters = characters.map((character) => {
    return {
      _id: character._id,
      character: character.character,
      tag: character.tag,
    };
  });
  const filteredCombos = combos.map((combo) => {
    return {
      _id: combo._id,
      character: combo.character,
      notation: combo.notation,
      damage: combo.damage,
      meterGain: combo.meterGain,
      worksOn: combo.worksOn,
      difficulty: combo.difficulty,
      notes: combo.notes,
    };
  });

  return {
    props: { characters: filteredCharacters, combos: filteredCombos },
  };
}
