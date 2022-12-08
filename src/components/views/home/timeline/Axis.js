import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Xlegend = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0;
  width: 4rem;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  transform-origin: left;
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: opacity 300ms ease-out;
`
const Ylegend = styled.div`
  position: absolute;
  top: -0.25rem;
  left: 0.5rem;
  width: 4rem;
  font-size: 0.75rem;
  font-weight: 300;
  transform-origin: left;
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: opacity 300ms ease-out;
`
const Tick = styled.div`
  position: absolute;
  z-index: 10;
  bottom: ${(props) => (props.position / 2500) * 100}%;
  left: 0;
  width: 100%;
  height: 0.0625rem;
  transform: translateY(50%);
  background-color: ${(props) => props.theme.colors.textLighter};
  cursor: pointer;
  opacity: ${(props) => (props.hover ? 1 : 0.5)};
  transition: opacity 300ms ease-out;

  span {
    position: absolute;
    bottom: 0.125rem;
    left: 0.125rem;
    font-size: 0.75rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.text};
  }

  svg {
    position: absolute;
    right: 0;
    transform: translateY(-50%);

    path {
      fill: ${(props) => props.theme.colors.textLighter};
    }
  }
`
const Yaxis = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  width: 0.0625rem;
  background-color: ${(props) => props.theme.colors.textLighter};
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: opacity 300ms ease-out;
`
const Hours = styled.div`
  position: absolute;
  top: calc(100% + 0.125rem);
  left: 0;
  right: 0;
`
const Hour = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.position / 24) * 100}%;
  right: ${(props) => (props.last ? '0.75rem' : 'auto')};
  font-size: 0.75rem;
  font-weight: 300;
  cursor: pointer;
  opacity: ${(props) => (props.hover ? 1 : 0.5)};
  transition: opacity 300ms ease-out;
`
export default function Axis() {
  const [hover, setHover] = useState(false)
  return (
    <Wrapper>
      <Tick
        hover={hover}
        position={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>0</span>
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.16973 7L0.219727 2.05L1.63973 0.639999L7.99973 7L1.63973 13.36L0.219727 11.95L5.16973 7Z' />
        </svg>
      </Tick>

      <Tick
        hover={hover}
        position={1000}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>1000&nbsp;W</span>
      </Tick>

      <Tick
        hover={hover}
        position={2000}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>2000&nbsp;W</span>
      </Tick>
      <Yaxis hover={hover} />
      <Ylegend hover={hover}>Puissance appelée</Ylegend>
      <Xlegend hover={hover}>Heure de la journée</Xlegend>
      <Hours>
        <Hour
          hover={hover}
          position={1}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          1h
        </Hour>
        <Hour
          hover={hover}
          position={4}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          4h
        </Hour>
        <Hour
          hover={hover}
          position={8}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          8h
        </Hour>
        <Hour
          hover={hover}
          position={13}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          13h
        </Hour>
        <Hour
          hover={hover}
          position={18}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          18h
        </Hour>
        <Hour
          hover={hover}
          position={20}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          20h
        </Hour>
        <Hour
          hover={hover}
          last
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Minuit
        </Hour>
      </Hours>
    </Wrapper>
  )
}
