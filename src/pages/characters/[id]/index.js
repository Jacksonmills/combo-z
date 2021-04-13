import styled from 'styled-components/macro';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { connectToDatabase } from '@/util/mongodb';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Combos from '@/components/Combos';
import VisuallyHidden from '@/components/VisuallyHidden';

const Characters = ({ allCharacters, character, combos }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header characters={allCharacters} />
      <Layout>
        <MaxWidthWrapper>
          {character &&
            character.map((character, _id) => {
              return (
                <Wrapper key={_id}>
                  <ImageWrapper>
                    <Image src={character.icon} layout='fill' preload='true' />
                  </ImageWrapper>
                  <VisuallyHidden>
                    <h1>{character.character}</h1>
                  </VisuallyHidden>
                </Wrapper>
              );
            })}

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
  width: 141px;

  img {
    object-fit: fit;
    /* opacity: 0.3; */
  }
`;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { db } = await connectToDatabase();

  const allCharacterData = await db.collection('characters').find({}).toArray();
  const characterData = await db
    .collection('characters')
    .find({ tag: id })
    .toArray();
  const comboData = await db
    .collection('combos')
    .find({ character: id })
    .toArray();

  const allCharacters = JSON.parse(JSON.stringify(allCharacterData));
  const character = JSON.parse(JSON.stringify(characterData));
  const combos = JSON.parse(JSON.stringify(comboData));

  const filteredCharacter = character.map((character) => {
    return {
      _id: character._id,
      character: character.character,
      tag: character.tag,
      icon: character.icon,
      render: character.render,
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
      allCharacters,
      character: filteredCharacter,
      combos: filteredCombos,
    },
  };
}

export default Characters;
