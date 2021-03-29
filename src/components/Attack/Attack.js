import styled from 'styled-components/macro';

import Light from '../Light';
import Medium from '../Medium';
import Heavy from './Heavy';
import Special from '../Special';
import Assist from '../Assist';

const Attack = ({ button, ...delegated }) => {
  let Component;
  if (button === 'L') {
    Component = <Light />;
  } else if (button === 'M') {
    Component = <Medium />;
  } else if (button === 'H') {
    Component = <Heavy />;
  } else if (button === 'S') {
    Component = <Special />;
  } else if (button === 'A') {
    Component = <Assist {...delegated} />;
  }

  return <Wrapper>{Component}</Wrapper>;
};

const Wrapper = styled.div.attrs((props) => ({
  type: 'button',
  tabIndex: '0',
}))`
  display: inline-block;
  padding: 5px;
`;

export default Attack;
