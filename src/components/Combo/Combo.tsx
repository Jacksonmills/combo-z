import styled from 'styled-components';

import { _Combo } from '@/types';

import { COLORS } from '@/constants';
import { Edit } from 'react-feather';

import ComboStep from '../ComboStep';
import Image from 'next/image';

const Combo = (props: _Combo) => {
  const steps = props.notation.map((step, idx) => {
    return (
      <ComboStepWrapper key={idx}>
        <ComboStep inputs={step} sparking={false} />
        {idx !== props.notation.length - 1 && (<Image src='/images/misc/arcade_arrow_keep.png' width={36} height={36} layout='fixed' />)}
      </ComboStepWrapper>
    );
  });

  const tagUrl = `https://twitter.com/search?q=%23DBFZ_${props.character}&src=typed_query`;

  return (
    <Wrapper>
      <Content>
        <Tag href={tagUrl} target='_blank'>
          #DBFZ_{props.character}
        </Tag>
        <Info>
          {props.worksOn && <Location>Works on: {props.worksOn}</Location>}
          <Difficulty>({props.difficulty})</Difficulty>
          <Dmg>{`Damage: ${props.damage}%`}</Dmg>
        </Info>
      </Content>
      <StepsWrapper>
        {steps}
        <AddStep
          type='button'
          onClick={() => console.log('Adding step')}
        >
          <Edit />
        </AddStep>
      </StepsWrapper>
      <Notes>{props.notes}</Notes>
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

const Content = styled.div`
  border: 4px solid black;
  background-color: white;
  color: black;
  padding: 0.5em 1em;
  margin: 1em;
  margin-bottom: -4px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  font-size: ${20 / 16}rem;
  font-weight: 500;
`;

const Tag = styled.a``;

const Location = styled.span``;

const Dmg = styled.span``;

const Difficulty = styled.span``;
const Notes = styled.div`
  background-color: white;
  color: black;
  padding: 0.5em 1em;
  margin: 1em;
  margin-top: -4px;
  border: 4px solid black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
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
