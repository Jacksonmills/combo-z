import styled from 'styled-components';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

import { COLORS } from '@/constants';

import { Character } from '@/types';

import CharacterSelect from '../CharacterSelect';
import Button from '../Button';
import { isDev } from '@/config';

const Header = ({ characters }: { characters: Character[]; }) => {
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated";
  const dev = isDev;
  const userImage = session?.user?.image!;

  const charactersData: Character[] = [
    {
      character: '',
      tag: '',
      icon: '',
      render: ''
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
        {dev && (<Button tabIndex={0} onClick={handleSubmit}>Add Characters</Button>)}
        <CharacterSelect characters={characters} />
        {!loggedIn && (
          <UserAuth tabIndex={0} aria-label='user dropdown, opens dialog' aria-live='polite'>
            <Image src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' width={42} height={42} layout='fixed' />
            <DropDown >
              <Button onClick={() => signIn('twitter')}>
                Login with Twitter
              </Button>
            </DropDown>
          </UserAuth>
        )}
        {loggedIn && (
          <UserAuth tabIndex={0} aria-label='user dropdown, opens dialog' aria-live='polite'>
            <Image src={userImage} width={42} height={42} layout='fixed' />
            <DropDown>
              <h2>{session?.user?.name}</h2>
              {session?.user?.email && (<p>{session.user.email}</p>)}
              <br />
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
  --color: ${COLORS.white};

  position: absolute;
  top: 100%;
  right: 8px;
  display: block;
  min-width: 300px;
  padding: 1em;
  color: var(--color);
  background-color: var(--background-color);
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-12px);
  transition: transform 200ms ease, opacity 200ms ease;

  &:focus-within {
    pointer-events: initial;
    opacity: 1;
    transform: translateY(0px);
  }

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 8px;
    width: 10px;
    height: 10px;
    background-color: var(--background-color);
    border-radius: 2px;
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
  

  &:hover, &:focus {
    ${DropDown} {
      pointer-events: initial;
      opacity: 1;
      transform: translateY(0px);
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
