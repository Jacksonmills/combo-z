import styled from 'styled-components';

import { ComboZCombo } from '@/types';

import { COLORS } from '@/constants';
import { Play, Edit, Twitter } from 'react-feather';

import ComboStep from '../ComboStep';
import Image from 'next/image';

const Combo = (props: ComboZCombo) => {
  const steps = props.notation.map((step, idx) => {
    return (
      <ComboStepWrapper key={idx}>
        <ComboStep inputs={step} sparking={false} />
        {idx !== props.notation.length - 1 && (<Image src='/images/misc/arcade_arrow_keep.png' width={36} height={36} layout='fixed' />)}
      </ComboStepWrapper>
    );
  });

  const tagUrl = `https://twitter.com/search?q=%23DBFZ_${props.character}&src=typed_query`;

  const handlePlayCombo = () => {
    console.log('Playing Combo...');
  };

  return (
    <Wrapper>
      <Controls>
        <Social>
          <ControlButton as='a' href={tagUrl} target='_blank'>
            <Twitter />
          </ControlButton>
        </Social>
        <ComboMenu>
          <ControlButton onClick={handlePlayCombo}>
            <Play />
          </ControlButton>
        </ComboMenu>
      </Controls>
      <StepsWrapper>
        {steps}
        <AddStep
          type='button'
          onClick={() => console.log('Adding step')}
        >
          <Edit />
        </AddStep>
      </StepsWrapper>
      <Information>
        <Info>
          {props.worksOn && <Location>Works on: {props.worksOn}</Location>}
          <Difficulty>({props.difficulty})</Difficulty>
          <Dmg>{`Damage: ${props.damage}%`}</Dmg>
        </Info>
        {props.notes}
      </Information>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ComboStepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  {ComboStep} {
    margin-right: -4px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border: 4px solid black;
  background-color: black;
  color: white;
  padding: 0.5em 1em;
  margin: 1em;
  margin-bottom: -4px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Social = styled.div``;
const ComboMenu = styled.div``;

const Info = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  font-size: ${20 / 16}rem;
  font-weight: 500;
`;

const ControlButton = styled.button`
  display: inline-flex;
  color: white;
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  border: none;
  background-color: none;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray[900]};
  }
`;

const Location = styled.span``;

const Dmg = styled.span``;

const Difficulty = styled.span``;
const Information = styled.div`
  background-color: white;
  color: black;
  padding: 0.5em 1em;
  margin: 1em;
  margin-top: -4px;
  border: 4px solid black;
  /* border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  font-size: ${16 / 16}rem;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-top: 4px;
  }
`;

const AddStep = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${36 / 16}rem;
  height: ${36 / 16}rem;
  align-self: center;
  background-color: transparent;
  color: ${COLORS.gray[900]};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: all 50ms ease;
  transition-property: background-color, color;

  &:hover {
    background-color: hsl(0, 0%, 90%);
    color: ${COLORS.black};
  }

  svg {
    width: ${20 / 16}rem;
    height: auto;
    stroke: currentColor;
  }
`;

const StepsWrapper = styled.ul`
  display: flex;
  align-items: center;
  grid-gap: 8px;
  /* margin-top: 10px; */
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${COLORS.white};
  padding: 1em 1.5em;
  border: 4px solid black;

  @media (min-width: 768px) {
    padding: 2em 3em;
    box-shadow: -8px 8px 0px 0px black;
  }
`;

export default Combo;
