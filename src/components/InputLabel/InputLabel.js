import styled from 'styled-components/macro';

export default styled.span`
  position: relative;
  top: -6.5px;
  font-size: ${22 / 16}rem;
  font-weight: 400;
  filter: drop-shadow(1px 1px 0.5px var(--darker-color));
  pointer-events: none;
  user-select: none;
`;
