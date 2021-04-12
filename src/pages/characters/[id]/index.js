import styled from 'styled-components/macro';
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../../util/mongodb';

import Header from '../../../components/Header';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import Combos from '../../../components/Combos';

const Characters = ({ characters, combos }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Wrapper>
      <Header />
      <MaxWidthWrapper>
        {characters &&
          characters.map((character, _id) => {
            return character.tag === id ? (
              <h1 key={_id}>{character.character}</h1>
            ) : null;
          })}

        <Combos character={id} combos={combos} />
      </MaxWidthWrapper>
    </Wrapper>
  );
};

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
