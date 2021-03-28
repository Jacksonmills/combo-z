import styled from 'styled-components/macro';

const Dpad = ({ direction }) => {
  return (
    <Wrapper>
      {direction === 'down' ? <Image src='/img/dpad/down.webp' /> : 'up'}
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

const Image = styled.img`
  display: block;
  width: ${36 / 16}rem;
  height: auto;
`;

export default Dpad;
