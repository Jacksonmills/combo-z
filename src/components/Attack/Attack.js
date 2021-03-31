import styled from 'styled-components/macro';

import InputImg from '../InputImg';

const Attack = ({ button }) => {
  const src = `/img/button/${button}.png`;

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
  z-index: 2;
`;

export default Attack;
