import React, { useContext, useLayoutContext, useState } from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

const Combo = (props) => {
  const notation = props.notation;
  const listSteps = notation.map((step, index) => (
    <Step key={index}>{step}</Step>
  ));

  return (
    <Wrapper>
      <Title>
        {props.location} — {props.damage}% <small>({props.difficulty})</small>
      </Title>
      <p>{props.description}</p>
      <StepsWrapper>{listSteps}</StepsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  padding: 2em;
  border-radius: 20px;
`;
const Title = styled.h1`
  font-size: ${36 / 16}rem;

  small {
    font-size: 60%;
    color: #368543;
  }
`;

const StepsWrapper = styled.ul`
  display: grid;
  grid-row-gap: 8px;
  margin-top: 10px;
`;

const Step = styled.li`
  display: flex;
  grid-column-gap: 8px;
  background-color: rgba(0, 0, 0, 0.527);
  border-radius: 8px;
  padding: 1em 2em;
`;

export default Combo;
