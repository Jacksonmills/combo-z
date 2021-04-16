import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';
import Link from 'next/link';
import Image from 'next/image';
import { Minimize2 } from 'react-feather';

import UnstyledButton from '../UnstyledButton';

const CharacterSelect = ({ characters }) => {
  const [showCharacters, setShowCharacters] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const style = useSpring({
    position: 'absolute',
    top: '26px',
    right: '26px',
    willChange: 'transform',
    transform: isHovered ? `scale(1.2)` : `scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const Characters = () => {
    return createPortal(
      <CharacterPortal>
        <animated.div
          style={style}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CloseButton onClick={() => setShowCharacters(false)}>
            <Minimize2 />
          </CloseButton>
        </animated.div>
        <Links>
          {characters &&
            characters.map((character, _id) => {
              const url = `/character/${character.tag}`;
              return (
                <li key={_id}>
                  <Link href='/character/[id]' as={url} passHref>
                    <ImageWrapper onClick={() => setShowCharacters(false)}>
                      <Image
                        src={character.icon}
                        width={133}
                        height={79}
                        priority
                      />
                    </ImageWrapper>
                  </Link>
                </li>
              );
            })}
        </Links>
      </CharacterPortal>,
      document.getElementById('character-select')
    );
  };

  return (
    <>
      <UnstyledButton onClick={() => setShowCharacters(true)}>
        Character Select
      </UnstyledButton>
      {showCharacters && <Characters showCharacters={showCharacters} />}
    </>
  );
};

const Links = styled.ul`
  display: flex;
  row-gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CharacterPortal = styled.div`
  background-color: hsl(0, 0%, 100%);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  display: grid;
  place-content: center;

  cursor: default;
  cursor: url(/images/misc/dragon_ball_cursor.png) 32 64, default;
  cursor: url(/images/misc/dragon_ball_cursor.png) 32 64, auto;
`;

const CloseButton = styled(UnstyledButton)`
  display: flex;
  padding: 1em;
  cursor: pointer;
`;

const ImageWrapper = styled.a`
  position: relative;
  display: block;
  aspect-ratio: 133 / 79;
  cursor: inherit;
  overflow: visible;
  will-change: transform, filter;
  transition: all 400ms ease;
  transition-property: transform, filter;

  &:hover {
    transform: translate(-2px, -2px) translateZ(0);
    filter: brightness(1.1);
    will-change: transform, filter;
    transition: all 100ms ease;
    transition-property: transform, filter;
  }
`;

export default CharacterSelect;
