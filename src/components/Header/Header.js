import styled from 'styled-components/macro';
import Link from 'next/link';

const Header = ({ characters }) => {
  return (
    <Wrapper>
      <Link href='/'>
        <Logo>ComboZ</Logo>
      </Link>
      <Links>
        {characters &&
          characters.map((character, _id) => {
            const url = `/characters/${character.tag}`;
            return (
              <li key={_id}>
                <Link href='/characters/[id]' as={url}>
                  {character.tag}
                </Link>
              </li>
            );
          })}
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: white;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const Logo = styled.a`
  font-size: ${55 / 16}rem;
  letter-spacing: 2px;
  font-family: 'Sayian Sans';
  color: yellow;
  text-shadow: 0px 0px 5px red;
  margin-right: auto;
  cursor: pointer;
`;

const Links = styled.ul`
  display: flex;
  gap: 16px;

  a {
    font-size: ${24 / 16}rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`;

export default Header;
