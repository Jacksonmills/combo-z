import styled from 'styled-components/macro';

const Attack = ({ button }) => {
  const src = `/img/button/${button}.png`;

  return (
    <Wrapper>
      <Image src={src} />
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
  user-select: none;
`;

export default Attack;
