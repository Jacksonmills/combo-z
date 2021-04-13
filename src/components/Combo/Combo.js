import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import { Edit } from 'react-feather';

import ComboStep from '../ComboStep';

const Combo = (props) => {
  const steps = props.notation.map((step, idx) => {
    return <ComboStep key={idx} inputs={step} />;
  });

  const tagUrl = `https://twitter.com/search?q=%23DBFZ_${props.character}&src=typed_query`;

  return (
    <Wrapper>
      <Tag href={tagUrl} target='_blank'>
        #DBFZ_{props.character}
      </Tag>
      <Row>
        <p>{props.notes}</p>
        <Location>{props.worksOn}</Location>
      </Row>
      <Row>
        <Difficulty>({props.difficulty})</Difficulty>
        <Dmg>Damage: {props.damage}%</Dmg>
      </Row>
      <StepsWrapper>
        {steps}
        <AddStep
          type='button'
          onClick={() => notation.push(<ComboStep>TEST</ComboStep>)}
        >
          <Edit />
        </AddStep>
      </StepsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Tag = styled.a``;

const Location = styled.span``;

const Dmg = styled.span``;

const Difficulty = styled.span``;

const AddStep = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${36 / 16}rem;
  height: ${36 / 16}rem;
  align-self: center;
  background-color: ${COLORS.gray[300]};
  color: ${COLORS.gray[900]};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: background-color 100ms ease;

  &:hover {
    background-color: ${COLORS.gray[400]};
  }

  svg {
    width: ${24 / 16}rem;
    height: auto;
    stroke: currentColor;
  }
`;

const StepsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
  margin-top: 10px;

  background-color: ${COLORS.white};
  box-shadow: -8px 8px 0px 0px black;
  padding: 2em 3em;
  border: 4px solid black;
`;

export default Combo;
