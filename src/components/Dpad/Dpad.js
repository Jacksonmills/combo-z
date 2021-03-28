import styled from 'styled-components/macro';

const Dpad = ({ direction }) => {
  return (
    <Wrapper>
      {direction === 'down' ? <Image src='/img/dpad/down.webp' /> : 'up'}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
`;

const Image = styled.img`
  display: block;
  width: ${36 / 16}rem;
  height: auto;
`;

export default Dpad;
