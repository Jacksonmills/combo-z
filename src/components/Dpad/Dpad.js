import styled from 'styled-components/macro';

import Image from 'next/image';

const Dpad = ({ direction }) => {
  const src = `/images/dpad/${direction}.png`;
  return (
    <Wrapper>
      <Image src={src} width={36} height={36} layout='fixed' />
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  type: 'button',
  tabIndex: '0',
}))`
  display: flex;
  padding: 5px;
  z-index: 2;
`;

export default Dpad;
