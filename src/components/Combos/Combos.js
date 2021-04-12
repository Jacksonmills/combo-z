import styled from 'styled-components/macro';

import Combo from '../Combo';

const Combos = ({ character, combos }) => {
  console.log(combos);
  return (
    <ComboWrapper>
      {combos &&
        combos.map((combo, _id) => {
          return combo.character === character ? (
            <Combo
              key={_id}
              character={combo.character}
              notation={combo.notation}
              damage={combo.damage}
              meterGain={combo.meterGain}
              worksOn={combo.worksOn}
              difficulty={combo.difficulty}
              notes={combo.notes}
            />
          ) : null;
        })}
    </ComboWrapper>
  );
};

const ComboWrapper = styled.div.attrs((props) => ({
  tabindex: '1',
}))`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-gap: 24px;
  place-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default Combos;
