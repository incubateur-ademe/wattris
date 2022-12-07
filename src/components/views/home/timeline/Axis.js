import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Xaxis = styled.div`
  position: absolute;
  top: 100%;
  left: -0.125rem;
  right: 0;
  height: 0.125rem;
  background-color: ${(props) => props.theme.colors.textLighter};
`
const Ylegend = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-100%);
  width: 4rem;
  font-size: 0.75rem;
  font-weight: 300;
  transform-origin: left;
`
const Tick = styled.div`
  position: absolute;
  bottom: ${(props) => (props.position / 2500) * 100}%;
  right: calc(100% + 0.5rem);
  transform: translateY(50%);
  font-size: 0.75rem;
  font-weight: 300;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 0.125rem);
    transform: translateY(-50%);
    width: 0.625rem;
    height: 0.125rem;
    background-color: ${(props) => props.theme.colors.textLighter};
  }
`
const Yaxis = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  width: 0.125rem;
  background-color: ${(props) => props.theme.colors.textLighter};
`
export default function Axis() {
  return (
    <Wrapper>
      <Xaxis />
      <Tick position={1000}>1000&nbsp;W</Tick>
      <Tick position={2000}>2000&nbsp;W</Tick>
      <Ylegend>Puissance appelée (en Watt)</Ylegend>
      <Yaxis />
    </Wrapper>
  )
}
