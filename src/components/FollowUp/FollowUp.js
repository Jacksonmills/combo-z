import styled from 'styled-components/macro';

import Image from 'next/image';

const FollowUp = () => {
  return (
    <Wrapper>
      <Image
        src='/img/misc/follow_up.png'
        width={36}
        height={26}
        layout='fixed'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  type: 'button',
  tabIndex: '0',
}))`
  display: flex;
  padding: 5px;
`;

export default FollowUp;
