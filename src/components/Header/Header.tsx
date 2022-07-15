import styled from 'styled-components';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Twitter } from 'react-feather';
import Image from 'next/image';

import { COLORS } from '@/constants';

import { Character } from '@/util/types';

import CharacterSelect from '../CharacterSelect';
import Button from '../Button';

const Header = ({ characters }: { characters: Character[]; }) => {
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated";
  const isDev = process && process.env.NODE_ENV === 'development';
  const userImage = session?.user?.image!;

  const charactersData: Character[] = [
    {
      character: 'Gogeta (SSGSS)',
      tag: 'GTA',
      icon: 'https://www.dustloop.com/wiki/images/1/1a/DBFZ_SSB_Gogeta_Icon.png',
      render: 'https://www.dustloop.com/wiki/images/0/01/DBFZ_SSB_Gogeta_Portrait.png'
    },
    {
      character: 'Roshi',
      tag: 'RSH',
      icon: 'https://www.dustloop.com/wiki/images/8/8d/DBFZ_Master_Roshi_Icon.png',
      render: 'https://www.dustloop.com/wiki/images/5/58/DBFZ_Master_Roshi_Portrait.png'
    }
  ];


  async function handleSubmit() {
    const response = await
      fetch("/api/characters", {
        method: "POST",
        body: JSON.stringify(charactersData),
        headers:
        {
          "Content-Type": "application/json",
        },
      });
    const data = await response.json();
    console.log(data);
  }

  return (
    <Wrapper>
      <Link href='/'>
        <Logo><span>Combo</span>Z</Logo>
      </Link>
      <NavControls>
        {isDev && (<Button onClick={handleSubmit}>Add Characters</Button>)}
        <CharacterSelect characters={characters} />
        {!loggedIn && (
          <UserAuth>
            <Image src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' width={42} height={42} layout='fixed' />
            <DropDown>
              <Button onClick={() => signIn('twitter')}>
                Login with Twitter
              </Button>
            </DropDown>
          </UserAuth>
        )}
        {loggedIn && (
          <UserAuth>
            <Image src={userImage} width={42} height={42} layout='fixed' />
            <DropDown>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </DropDown>
          </UserAuth>
        )}
      </NavControls>
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

const DropDown = styled.div`
  --background-color: ${COLORS.black};

  position: absolute;
  top: 100%;
  right: 8px;
  display: none;
  min-width: 300px;
  padding: 1em;
  background-color: var(--background-color);
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 8px;
    width: 10px;
    height: 10px;
    background-color: var(--background-color);
    transform: rotate(45deg);
  }

  button {
    width: 100%;
  }
`;

const NavControls = styled.nav`
  display: flex;
  gap: 10px;
`;


const UserAuth = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px;
  padding-right: 0;
  

  &:hover {
    ${DropDown} {
      display: block;
    }
  }

  img {
    border-radius: 50px;
    border: 1px solid black;
    cursor: pointer;
  }
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
