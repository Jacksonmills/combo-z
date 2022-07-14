import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import { connectToDatabase } from '@/util/mongodb';
import { server } from '@/config';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';

export default function Home({ characters, combos, session }) {
  console.log('session: ', session);
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
          <h1>
            Welcome{' '}
            {session
              ? `${session.user.name}, lets build a combo!`
              : 'to ComboZ'}
          </h1>
          {!session && (
            <>
              <h2>NOT SIGNED IN</h2>
              <button onClick={() => signIn()}>Sign In</button>
            </>
          )}
          {session && (
            <>
              <h2>Welcome {session.user.email}</h2>
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          )}
          <Links>
            {characters &&
              characters.map((character, _id) => {
                const url = `/character/${character.tag}`;
                return (
                  <li key={_id}>
                    <Link href='/character/[id]' as={url} passHref>
                      <ImageWrapper>
                        <Image
                          src={character.icon}
                          width={133}
                          height={79}
                          priority
                        />
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
  aspect-ratio: 133 / 79;
  cursor: inherit;
  overflow: visible;
  will-change: transform, filter;
  transition: all 400ms ease;
  transition-property: transform, filter;

  &:hover {
    transform: translate(-2px, -2px) translateZ(0);
    filter: brightness(1.1);
    will-change: transform, filter;
    transition: all 100ms ease;
    transition-property: transform, filter;
  }
`;

export async function getServerSideProps(context) {
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

  const session = await getSession(context);

  return {
    props: {
      characters: filteredCharacters,
      combos: filteredCombos,
      session,
    },
  };
}
