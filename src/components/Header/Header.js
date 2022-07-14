import styled from 'styled-components';
import Link from 'next/link';

import CharacterSelect from '../CharacterSelect';

const Header = ({ characters }) => {
  return (
    <Wrapper>
      <Link href='/'>
        <Logo><span>Combo</span>Z</Logo>
      </Link>
      <CharacterSelect characters={characters} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 4px solid black;
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 99;
`;

const Logo = styled.a`
  font-size: ${55 / 16}rem;
  letter-spacing: 2px;
  font-family: 'Sayian Sans';
  color: black;
  margin-right: auto;
  cursor: pointer;

  span {
    font-family: 'Sayian Sans';
    display: none;
    @media (min-width: 768px) {
      display: inline-block;
    }
  }
`;

export default Header;
