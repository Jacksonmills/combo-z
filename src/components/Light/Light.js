import styled from 'styled-components/macro';

import { ATTACKS } from '../../constants';

const Light = () => {
  return (
    <Wrapper>
      <StyledText>L</StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: ${26 / 16}rem;
  font-weight: 700;
  text-align: center;
  color: white;
  width: ${ATTACKS.size};
  height: ${ATTACKS.size};
  background: rgb(17, 64, 117);
  background: linear-gradient(
    345deg,
    rgba(17, 64, 117, 1) 20%,
    rgba(55, 255, 255, 1) 70%
  );
  box-shadow: 0px 0.5px 2px 0.5px rgb(17, 64, 117),
    0px -0.5px 2px 0.5px rgb(55, 255, 255), 0px 0px 0px 1px black;
  border: 1px solid white;
  border-radius: 50px;
`;

const StyledText = styled.span`
  position: relative;
  top: -3px;
  display: inline-block;
  -webkit-text-stroke: 1px rgb(17, 64, 117);
`;

export default Light;
