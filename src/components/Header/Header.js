import styled from 'styled-components/macro';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/characters/[id]' as='/characters/BLK'>
            <a>Goku Black</a>
          </Link>
        </li>
        <li>
          <Link href='/characters/[id]' as='/characters/CLR'>
            <a>Cooler</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
