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
  background-color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  opacity: ${(props) => (props.hover ? 1 : 0.3)};
  transition: opacity 300ms ease-out;

  span {
    position: absolute;
    bottom: 0.125rem;
    left: 0.125rem;
    font-size: 0.75rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.text};
  }
`
const Yaxis = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  width: 0.0625rem;
  background-color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => (props.hover ? 1 : 0)};
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
      ></Tick>
      <Tick
        hover={hover}
        position={500}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>500&nbsp;W</span>
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
        position={1500}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>1500&nbsp;W</span>
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
    </Wrapper>
  )
}
