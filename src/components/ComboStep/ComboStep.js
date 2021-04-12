import styled from 'styled-components/macro';

import Image from 'next/image';

import Input from '../Input';

const ComboStep = ({ inputs, sparking }) => {
  return (
    <Wrapper
      sparking={sparking}
      style={{
        '--background-color': `${sparking ? '#ff9dad' : 'hsl(0, 0%, 80%)'}`,
      }}
    >
      {inputs.map((input, idx) => {
        return <Input key={idx} input={input} />;
      })}
      {sparking ? (
        <Image src='/img/effect/sparking_active.png' layout='fill' />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 56px;
  background: var(--background-color);
  background: linear-gradient(
    -90deg,
    var(--background-color) 0%,
    ${(props) =>
        props.sparking ? 'var(--background-color)' : 'hsl(0, 0%, 100%)'}
      100%
  );
  ${(props) => (props.sparking ? 'box-shadow: 0 0 0 2px #ff0037;' : null)}
  border-radius: 6px;
  border-top-left-radius: ${(props) => (props.sparking ? '6px' : '0')};
  border-bottom-left-radius: ${(props) => (props.sparking ? '6px' : '0')};
  padding: 5px;

  img {
    object-fit: cover;
  }
`;

export default ComboStep;
