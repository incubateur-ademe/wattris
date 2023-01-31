import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  bottom: ${(props) => (props.position / props.visiblePowerOnGraph) * 100}%;
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
export default function Ticks(props) {
  return (
    <>
      <Wrapper
        hover={props.hover}
        position={0}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
        visiblePowerOnGraph={props.visiblePowerOnGraph}
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
      </Wrapper>
      {Array.from(Array(Math.floor(props.visiblePowerOnGraph / 1000))).map(
        (kW, index) => (
          <Wrapper
            hover={props.hover}
            position={(index + 1) * 1000}
            onMouseEnter={() => props.setHover(true)}
            onMouseLeave={() => props.setHover(false)}
            visiblePowerOnGraph={props.visiblePowerOnGraph}
          >
            <span>{(index + 1) * 1000}&nbsp;W</span>
          </Wrapper>
        )
      )}
    </>
  )
}
