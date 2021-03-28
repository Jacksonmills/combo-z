import styled from 'styled-components/macro';
import { ATTACKS } from '../../constants';

const Heavy = () => {
  return (
    <Wrapper>
      <StyledText>H</StyledText>
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
  background: #d68108;
  background: linear-gradient(345deg, #d68108 20%, #ffff20 70%);
  box-shadow: 0px 0.5px 2px 0.5px #d68108, 0px -0.5px 2px 0.5px #ffff20,
    0px 0px 0px 1px black;
  border: 1px solid white;
  border-radius: 50px;
`;

const StyledText = styled.span`
  position: relative;
  top: -3px;
  display: inline-block;
  -webkit-text-stroke: 1px #d68108;
`;

export default Heavy;
