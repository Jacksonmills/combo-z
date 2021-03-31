import { Copy } from 'react-feather';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

const Loop = ({ children }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>{children}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  padding: 0 5px;
  z-index: 1;
  margin-right: -20px;
`;

const TextWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${14 / 16}rem;
  font-weight: 700;
  color: ${COLORS.black};
  background: #63ffc0;
  background: linear-gradient(0deg, #63ffc0 0%, white 80%);
  border: 0.5px solid ${COLORS.white};
  box-shadow: 0 0 2px 1.6px black;
  min-width: 20px;

  padding: 0px 5px 1px;

  border-radius: 1px;
`;

const Text = styled.span`
  filter: drop-shadow(0 0 1px white);
`;

export default Loop;
