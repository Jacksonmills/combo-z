import styled from 'styled-components/macro';

import InputImg from '../InputImg';

const Dpad = ({ direction }) => {
  const src = `/img/dpad/${direction}.png`;
  return (
    <Wrapper>
      <InputImg src={src} />
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  type: 'button',
  tabIndex: '0',
}))`
  display: inline-block;
  padding: 5px;
`;

export default Dpad;
