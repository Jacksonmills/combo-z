import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Link from 'next/link';
import Image from 'next/image';
import { connectToDatabase } from '@/util/mongodb';
import { server } from '@/config';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';

export default function Home({ characters, combos }) {
  const [randomCharacter, setRandomCharacter] = useState('');

  useEffect(() => {
    setRandomCharacter(
      characters[Math.floor(Math.random() * characters.length)].tag
    );
  }, []);

  return (
    <>
      <Header characters={characters} />
      <Layout>
        <MaxWidthWrapper>
          <h1>Welcome!</h1>
          <Links>
            {characters &&
              characters.map((character, _id) => {
                const url = `/characters/${character.tag}`;
                return (
                  <li key={_id}>
                    <Link href='/characters/[id]' as={url} passHref>
                      <ImageWrapper>
                        <Image src={character.icon} layout='fill' priority />
                      </ImageWrapper>
                    </Link>
                  </li>
                );
              })}
          </Links>
          <h2>Build and share combos!</h2>
          <Combos character={randomCharacter} combos={combos} />
        </MaxWidthWrapper>
      </Layout>
    </>
  );
}

const Links = styled.ul`
  display: flex;
  row-gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: default;
  cursor: url(/images/misc/dragon_ball_cursor.png) 32 64, default;
  cursor: url(/images/misc/dragon_ball_cursor.png) 32 64, auto;
`;

const ImageWrapper = styled.a`
  position: relative;
  display: block;
  aspect-ratio: 141 / 84;
  width: 141px;
  cursor: inherit;
  overflow: visible;
  will-change: transform;
  transition: transform 400ms ease;

  &:hover {
    transform: translate(-2px, -2px) translateZ(0);
    will-change: transform;
    transition: transform 100ms ease;
  }

  img {
    object-fit: fit;
  }
`;

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const characterData = await db
    .collection('characters')
    .find({})
    .limit(20)
    .toArray();
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
    props: { characters: filteredCharacters, combos: filteredCombos },
  };
}
