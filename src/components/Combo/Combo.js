import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import { Edit } from 'react-feather';

const Combo = (props) => {
  const notation = props.notation;
  const listSteps = notation.map((step, index) => (
    <div key={index}>{step}</div>
  ));

  return (
    <Wrapper>
      <Header>
        <Name>{props.character}</Name>
        <Location>Location: {props.location}</Location>
      </Header>
      <Info>
        <Difficulty>({props.difficulty})</Difficulty>
        <Dmg>Damage: {props.damage}%</Dmg>
      </Info>
      <p>{props.description}</p>
      <StepsWrapper>
        {listSteps}
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

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  box-shadow: 3px 3px 9px -1px hsl(52, 100%, 49%);
  padding: 2em;
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Name = styled.h2`
  font-size: ${44 / 16}rem;
`;

const Location = styled.span`
  font-size: ${24 / 16}rem;
`;

const Dmg = styled.span`
  font-size: ${24 / 16}rem;
`;

const Difficulty = styled.span`
  font-size: ${18 / 16}rem;
`;

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
`;

export default Combo;
