import styled from 'styled-components/macro';
import { ATTACKS } from '../../constants';

const Special = () => {
  return (
    <Wrapper>
      <StyledText>S</StyledText>
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
  background: #c91818;
  background: linear-gradient(345deg, #c91818 20%, #f97777 70%);
  box-shadow: 0px 0.5px 2px 0.5px #c91818, 0px -0.5px 2px 0.5px #f97777,
    0px 0px 0px 1px black;
  border: 1px solid white;
  border-radius: 50px;
`;

const StyledText = styled.span`
  position: relative;
  top: -3px;
  display: inline-block;
  -webkit-text-stroke: 1px #c91818;
`;

export default Special;
