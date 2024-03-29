import styled from 'styled-components';

import { ComboZCombo } from '@/types';

import Combo from '../Combo';

const Combos = ({ randomCharacter, combos }: { randomCharacter?: string; combos: ComboZCombo[]; }) => {
  return (
    <ComboWrapper>
      {combos &&
        combos.map((combo) => (
          <Combo
            key={`${combo._id}`}
            character={combo.character}
            notation={combo.notation}
            damage={combo.damage}
            meterGain={combo.meterGain}
            worksOn={combo.worksOn}
            difficulty={combo.difficulty}
            notes={combo.notes}
          />
        ))}
    </ComboWrapper>
  );
};

const ComboWrapper = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-gap: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default Combos;
