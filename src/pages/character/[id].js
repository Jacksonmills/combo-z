import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { connectToDatabase } from '@/util/mongodb';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';
import VisuallyHidden from '@/components/VisuallyHidden';

const Characters = ({ character, characters, combos }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header characters={characters} />
      <Layout>
        <MaxWidthWrapper>
          <Wrapper key={character._id}>
            <ImageWrapper>
              <Image src={character.render} layout='fill' priority />
            </ImageWrapper>
            <VisuallyHidden>
              <h1>{character.character}</h1>
            </VisuallyHidden>
          </Wrapper>
          <h2>Combos</h2>
          <Combos character={id} combos={combos} />
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.div``;
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

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { db } = await connectToDatabase();

  const charactersData = await db.collection('characters').find({}).toArray();
  const characterData = await db.collection('characters').findOne(
    { tag: id },
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
    .find({ character: id })
    .toArray();

  const characters = JSON.parse(JSON.stringify(charactersData));
  const character = JSON.parse(JSON.stringify(characterData));
  const combos = JSON.parse(JSON.stringify(combosData));

  return {
    props: {
      characters,
      character,
      combos,
    },
  };
}

export default Characters;
