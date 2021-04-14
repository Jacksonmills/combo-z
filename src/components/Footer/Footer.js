import styled from 'styled-components/macro';
import Link from 'next/link';
import { GitHub, Flag } from 'react-feather';

import Tooltip from '../Tooltip';

const Footer = () => {
  const disclaimerContent = `Disclaimer: Content is available under CC  BY-NC-SA 3.0 unless otherwise noted. Game content and materials are trademarks and copyrights of their respective publisher and its licensors. All rights reserved.`;

  return (
    <Wrapper>
      <Links>
        <Link href='https://github.com/Jacksonmills/combo-z'>
          <a>
            <GitHub />
          </a>
        </Link>
      </Links>
      <Link href='/'>
        <Logo>ComboZ</Logo>
      </Link>
      <Tooltip
        content={disclaimerContent}
        distance={18}
        duration={48}
        placement='top'
        delay={[248, 0]}
        followCursor={true}
        href='https://creativecommons.org/licenses/by-nc-sa/3.0/'
      >
        <Disclaimer>
          <Flag />
        </Disclaimer>
      </Tooltip>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  background: black;
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  z-index: 99;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.a`
  font-size: ${36 / 16}rem;
  letter-spacing: 2px;
  font-family: 'Sayian Sans';
  color: #d36601;
  cursor: pointer;
  transition: filter 200ms ease;
  margin: 0 auto;

  &:hover {
    filter: brightness(1.2);
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    color: #c29500;
    font-size: ${24 / 16}rem;
    font-weight: bold;
    text-decoration: none;
    transition: filter 200ms ease;

    &:hover {
      filter: brightness(0.75);
    }
  }
`;

const Disclaimer = styled.p`
  color: #c27400;
  display: flex;
  align-items: center;
`;

export default Footer;