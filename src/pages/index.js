import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { connectToDatabase } from '@/util/mongodb';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';
import VisuallyHidden from '@/components/VisuallyHidden';

export default function Home({ characters, combos }) {
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated";
  const [randomCharacter, setRandomCharacter] = useState('');

  useEffect(() => {
    setRandomCharacter(
      characters[Math.floor(Math.random() * characters.length)].tag
    );
  }, []);

  return (
    <>
      <Header characters={characters} status={status} session={session} />
      <Layout>
        <MaxWidthWrapper>
          <VisuallyHidden as="h1">ComboZ</VisuallyHidden>
          <WelcomeMessage>
            Welcome{' '}
            {loggedIn
              ? `${session.user.name}, lets build a combo!`
              : 'to ComboZ'}
          </WelcomeMessage>
          <p>Build and share combos!</p>
          <Combos character={randomCharacter} combos={combos} />
        </MaxWidthWrapper>
      </Layout>
    </>
  );
}

const WelcomeMessage = styled.h2`
  font-size: ${32 / 16}rem;
`;

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const characterData = await db.collection('characters').find({}).toArray();
  const comboData = await db.collection('combos').find({}).limit(20).toArray();

  const characters = JSON.parse(JSON.stringify(characterData));
  const combos = JSON.parse(JSON.stringify(comboData));

  const filteredCharacters = characters.map((character) => {
    return {
      _id: character._id,
      character: character.character,
      tag: character.tag,
      icon: character.icon,
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
    props: {
      characters: filteredCharacters,
      combos: filteredCombos,
    },
  };
}
