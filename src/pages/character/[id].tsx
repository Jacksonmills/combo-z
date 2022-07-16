import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import clientPromise from '@/lib/mongodb';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';
import { Character, _Combo } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';

const Characters = (
  {
    character,
    characters,
    combos
  }: {
    character: Character;
    characters: Character[];
    combos: _Combo[];
  }) => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <Header characters={characters} />
      <Layout>
        <MaxWidthWrapper>
          <Wrapper>
            <ImageWrapper>
              <Image src={character.render} layout='fill' priority />
            </ImageWrapper>
          </Wrapper>
          {combos.length > 0 && (<Heading>{character.character} Combos</Heading>)}
          <Combos combos={combos} />
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.div``;

const Heading = styled.h1`
  font-size: ${44 / 16}rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: block;
  aspect-ratio: 141 / 84;
  width: 100%;
  border-radius: 100px;

  @supports not (aspect-ratio: 141 / 84) {
    &::before {
      float: left;
      padding-top: 100%;
      content: '';
    }

    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }

  img {
    object-fit: none;
    object-position: top;
    opacity: 0.5;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const client = await clientPromise;
    const db = await client.db('comboz');

    const charactersData = await db.collection('characters').find({}).toArray();
    const characters: Character[] = JSON.parse(JSON.stringify(charactersData));

    const paths = characters.map((character) => ({
      params: { id: character.tag }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (err) {
    console.error(err);
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const client = await clientPromise;
    const db = await client.db('comboz');

    const charactersData = await db.collection('characters').find({}).toArray();
    const characterData = await db.collection('characters').findOne(
      { tag: params?.id },
      {
        projection: {
          _id: 1,
          character: 1,
          tag: 1,
          icon: 1,
          render: 1,
        },
      }
    );
    const combosData = await db
      .collection('combos')
      .find({ character: params?.id })
      .toArray();

    const characters = JSON.parse(JSON.stringify(charactersData));
    const character = JSON.parse(JSON.stringify(characterData));
    const combos = JSON.parse(JSON.stringify(combosData));

    return {
      props: {
        isConnected: true,
        characters,
        character,
        combos
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: { isConnected: false },
    };
  }
};

export default Characters;
