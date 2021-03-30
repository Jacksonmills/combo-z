import { Copy } from 'react-feather';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

const Modifier = ({ type }) => {
  let color = '#ffffff';
  if (type === 'delay') {
    color = '#d196b4';
  } else if (type === 'vanish') {
    color = '#dae7af';
  } else if (type === 'j') {
    color = '#e7c8af';
  } else if (type === 'jc') {
    color = '#afcee7';
  }
  return (
    <Wrapper>
      <Text
        style={{
          '--background-color': color,
        }}
      >
        {type}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  padding: 0 5px;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${COLORS.black};
  background: var(--background-color);
  border: 2px solid ${COLORS.offblack};
  border-radius: 8px;
  padding: 0 4px 1px 4px;
  min-width: 20px;
`;

export default Modifier;
