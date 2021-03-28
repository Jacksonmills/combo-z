import styled from 'styled-components/macro';

import Light from '../Light';
import Medium from '../Medium';
import Heavy from '../Heavy';
import Special from '../Special';

const Attack = ({ button }) => {
  let Component;
  if (button === 'light') {
    Component = <Light />;
  } else if (button === 'medium') {
    Component = <Medium />;
  } else if (button === 'heavy') {
    Component = <Heavy />;
  } else if (button === 'special') {
    Component = <Special />;
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
