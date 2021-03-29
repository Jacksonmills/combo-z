import React, { useContext, useLayoutContext, useState } from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import { PlusCircle } from 'react-feather';

const Combo = (props) => {
  const notation = props.notation;
  const listSteps = notation.map((step, index) => (
    <>
      <Step key={index}>{step}</Step>
      {/* {notation.length - 1 === index ? <button>+</button> : null} */}
    </>
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
        <AddStep type='button' onClick={() => notation.push(<Step>TEST</Step>)}>
          <PlusCircle />
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
  width: ${48 / 16}rem;
  height: ${48 / 16}rem;
  align-self: center;
  color: ${COLORS.gray[700]};
  cursor: pointer;
  border: none;
  border-radius: 50px;
  transition: color 100ms ease;

  &:hover {
    color: ${COLORS.black};
  }

  svg {
    width: ${32 / 16}rem;
    height: ${32 / 16}rem;
    stroke: currentColor;
  }
`;

const StepsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
  margin-top: 10px;
`;

const Step = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0;
  background: hsl(0, 0%, 80%);
  background: linear-gradient(315deg, hsl(0, 0%, 80%) 0%, hsl(0, 0%, 90%) 100%);
  border-radius: 50px;
  padding: 5px;
`;

export default Combo;
