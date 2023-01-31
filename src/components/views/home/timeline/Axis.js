import React, { useState } from 'react'
import styled from 'styled-components'

import Ticks from './axis/Ticks'
import Hours from './axis/Hours'
import Peaks from './axis/Peaks'

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
  top: 35%;
  left: 0.125rem;
  width: 4rem;
  font-size: 0.75rem;
  font-weight: 300;
  transform-origin: left;
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: opacity 300ms ease-out;
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
export default function Axis(props) {
  const [hover, setHover] = useState(false)
  return (
    <Wrapper>
      <Ticks
        hover={hover}
        setHover={setHover}
        visiblePowerOnGraph={props.visiblePowerOnGraph}
      />
      <Yaxis hover={hover} />
      <Ylegend hover={hover}>Puissance appelée</Ylegend>
      <Xlegend hover={hover}>Heure de la journée</Xlegend>
      <Hours hover={hover} setHover={setHover} />
      <Peaks hover={hover} setHover={setHover} />
    </Wrapper>
  )
}
