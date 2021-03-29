import styled from 'styled-components/macro';

const FollowUp = () => {
  return (
    <Wrapper>
      <Image src='/img/misc/follow_up.png' />
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

export default FollowUp;
