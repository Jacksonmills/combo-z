import styled from 'styled-components/macro';

export default styled.span`
  position: relative;
  top: -3px;
  display: inline-block;
  -webkit-text-stroke: 1px var(--dark-color);
  filter: drop-shadow(0 0 2px var(--light-color));
  pointer-events: none;
  user-select: none;
`;
