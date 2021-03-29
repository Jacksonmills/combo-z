import styled from 'styled-components/macro';
import { COLORS, ATTACKS } from '../../constants';

import AttackLabel from '../AttackLabel';

const Heavy = () => {
  return (
    <Wrapper
      style={{
        '--darker-color': '#633b04',
        '--dark-color': '#d68108',
        '--light-color': '#ffff20',
      }}
    >
      <AttackLabel>H</AttackLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: ${26 / 16}rem;
  font-weight: 500;
  text-align: center;
  color: ${COLORS.white};
  width: ${ATTACKS.size};
  height: ${ATTACKS.size};
  background: var(--dark-color);
  background: linear-gradient(
    345deg,
    var(--dark-color) 20%,
    var(--light-color) 70%
  );
  box-shadow: 0px 0.5px 2px 0.5px var(--dark-color),
    0px -0.5px 2px 0.5px var(--light-color), 0px 0px 0px 1px ${COLORS.black};
  border: 1px solid ${COLORS.white};
  border-radius: 50px;
`;

export default Heavy;
