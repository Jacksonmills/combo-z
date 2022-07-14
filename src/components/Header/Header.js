import styled from 'styled-components';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Twitter } from 'react-feather';
import Image from 'next/image';

import { COLORS } from '@/constants';

import CharacterSelect from '../CharacterSelect';
import Button from '../Button';

const Header = ({ characters }) => {
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated";

  const fakeCharacterData = {
    character: 'Android 16',
    tag: 'A16',
    icon: 'http://dustloop.com/wiki/images/thumb/6/6e/DBFZ_Android_16_Icon.png/98px-DBFZ_Android_16_Icon.png',
    render: 'http://dustloop.com/wiki/images/thumb/a/a6/DBFZ_Android_16_Portrait.png/352px-DBFZ_Android_16_Portrait.png'
  };


  async function handleSubmit() {
    const response = await
      fetch("/api/characters", {
        method: "POST",
        body: JSON.stringify(fakeCharacterData),
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
        <Button onClick={handleSubmit}>Add Character</Button>
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
            <Image src={session.user.image} width={42} height={42} layout='fixed' />
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
