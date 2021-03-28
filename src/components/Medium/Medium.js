import styled from 'styled-components/macro';
import { ATTACKS } from '../../constants';

const Medium = () => {
  return (
    <Wrapper>
      <StyledText>M</StyledText>
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
  background: #00642a;
  background: linear-gradient(345deg, #00642a 20%, #05fe0b 70%);
  box-shadow: 0px 0.5px 2px 0.5px #00642a, 0px -0.5px 2px 0.5px #05fe0b,
    0px 0px 0px 1px black;
  border: 1px solid white;
  border-radius: 50px;
`;

const StyledText = styled.span`
  position: relative;
  top: -3px;
  display: inline-block;
  -webkit-text-stroke: 1px #00642a;
`;

export default Medium;
