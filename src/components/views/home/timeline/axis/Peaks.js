import React from 'react'
import styled from 'styled-components'

const Peak = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.position / 24) * 100}%;
  width: ${(props) => (props.duration / 24) * 100}%;
  background: ${(props) => props.theme.colors.error};
  background: linear-gradient(
    0deg,
    rgba(250, 30, 67, 1) 0%,
    rgba(250, 30, 67, 1) 80%,
    rgba(250, 30, 67, 0) 100%
  );
  opacity: ${(props) => (props.hover ? 0.4 : 0.1)};
  transition: opacity 300ms ease-out;
`
const PeakIndicator = styled.div`
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: ${(props) => (13 / 24) * 100}%;
  right: ${(props) => (5.75 / 24) * 100}%;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  opacity: ${(props) => (props.hover ? 1 : 0.5)};
  transition: opacity 300ms ease-out;
`
const Arrow = styled.div`
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: ${(props) => ((props.right ? 17.25 : 12.5) / 24) * 100}%;
  right: ${(props) => ((props.right ? 5.25 : 10.1) / 24) * 100}%;
  height: 0.05rem;
  transform: rotate(${(props) => (props.right ? 37.5 : -35)}deg);
  transform-origin: ${(props) => (props.right ? 'left' : 'right')};
  background: ${(props) => props.theme.colors.textLighter};

  svg {
    position: absolute;
    left: ${(props) => (props.right ? 'auto' : 0)};
    right: ${(props) => (props.right ? 0 : 'auto')};
    transform: translateY(-50%)
      ${(props) => (!props.right ? 'rotate(180deg)' : '')};

    path {
      fill: ${(props) => props.theme.colors.textLighter};
    }
  }
`
export default function Peaks(props) {
  return (
    <>
      <Peak position={8} duration={5} hover={props.hover} />
      <Peak position={18} duration={2} hover={props.hover} />
      <PeakIndicator
        hover={props.hover}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        Période de tension
      </PeakIndicator>
      <Arrow
        hover={props.hover}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.16973 7L0.219727 2.05L1.63973 0.639999L7.99973 7L1.63973 13.36L0.219727 11.95L5.16973 7Z' />
        </svg>
      </Arrow>
      <Arrow
        hover={props.hover}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
        right
      >
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.16973 7L0.219727 2.05L1.63973 0.639999L7.99973 7L1.63973 13.36L0.219727 11.95L5.16973 7Z' />
        </svg>
      </Arrow>
    </>
  )
}
