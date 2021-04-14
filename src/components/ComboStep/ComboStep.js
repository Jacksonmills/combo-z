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
        <Image src='/images/effect/sparking_active.png' layout='fill' />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  justify-content: center;
  background: var(--background-color);
  background: linear-gradient(
    0deg,
    var(--background-color) 0%,
    ${(props) =>
        props.sparking ? 'var(--background-color)' : 'hsl(0, 0%, 100%)'}
      100%
  );
  ${(props) => (props.sparking ? 'box-shadow: 0 0 0 2px #ff0037;' : null)}
  border-radius: 6px;
  padding: 5px;

  img {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 0 0 56px;
    border-top-left-radius: ${(props) => (props.sparking ? '6px' : '0')};
    border-bottom-left-radius: ${(props) => (props.sparking ? '6px' : '0')};
    background: linear-gradient(
      -90deg,
      var(--background-color) 0%,
      ${(props) =>
          props.sparking ? 'var(--background-color)' : 'hsl(0, 0%, 100%)'}
        100%
    );
    ${(props) => (props.sparking ? 'box-shadow: 0 0 0 2px #ff0037;' : null)}
  }
`;

export default ComboStep;
