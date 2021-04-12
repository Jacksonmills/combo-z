import styled from 'styled-components/macro';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { connectToDatabase } from '../../../util/mongodb';

import Header from '../../../components/Header';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import Combos from '../../../components/Combos';
import Layout from '@/components/Layout';

const Characters = ({ characters, combos }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Header characters={characters} />
      <MaxWidthWrapper>
        {characters &&
          characters.map((character, _id) => {
            return character.tag === id ? (
              <Wrapper key={_id}>
                <Image src={character.imageUrl} layout='fill' />
                <h1>{character.character}</h1>
              </Wrapper>
            ) : null;
          })}

        <Combos character={id} combos={combos} />
      </MaxWidthWrapper>
    </Layout>
  );
};

const Wrapper = styled.div``;

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
      imageUrl: character.imageUrl,
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

export default Characters;
