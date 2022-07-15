import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { connectToDatabase } from '@/util/mongodb';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';
import VisuallyHidden from '@/components/VisuallyHidden';
import { Character, _Combo } from '@/util/types';
import Footer from '@/components/Footer';

export default function Home({ characters, combos }: { characters: Character[]; combos: _Combo[]; }) {
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated";

  const [randomCharacter, setRandomCharacter] = useState<string>('');

  let isMountedRef = useRef<boolean>(true);
  useEffect(() => {
    if (!isMountedRef.current) return;
    const randomTag = characters[Math.floor(Math.random() * characters.length)].tag;
    isMountedRef.current = true;
    setRandomCharacter(randomTag);
    console.log(randomCharacter);
    return () => { isMountedRef.current = false; };
  }, []);

  async function handleRandomCharacterCombos() {
    const response = await
      fetch("/api/combos", {
        method: "GET",
        headers:
        {
          "Content-Type": "application/json",
        },
      });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Header characters={characters} />
      <Layout>
        <MaxWidthWrapper>
          <VisuallyHidden as="h1">ComboZ</VisuallyHidden>
          <WelcomeMessage>
            Welcome{' '}
            {loggedIn
              ? `${session?.user?.name}, lets build a combo!`
              : 'to ComboZ'}
          </WelcomeMessage>
          <p>Build and share combos!</p>
          <Combos combos={combos} />
        </MaxWidthWrapper>
      </Layout>
      <Footer />
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

  const filteredCharacters = characters.map((character: Character) => {
    return {
      _id: character._id,
      character: character.character,
      tag: character.tag,
      icon: character.icon,
    };
  });
  const filteredCombos = combos.map((combo: _Combo) => {
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
