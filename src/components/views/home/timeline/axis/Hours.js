import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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

  ${(props) => props.theme.mq.small} {
    transform: translateX(${(props) => (props.last ? '0' : '-50%')});
    right: ${(props) => (props.last ? '-0.25rem' : 'auto')};
  }
`
export default function Hours(props) {
  return (
    <Wrapper>
      <Hour
        hover={props.hover}
        position={1}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        1h
      </Hour>
      <Hour
        hover={props.hover}
        position={4}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        4h
      </Hour>
      <Hour
        hover={props.hover}
        position={7}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        7h
      </Hour>
      <Hour
        hover={props.hover}
        position={11}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        11h
      </Hour>
      <Hour
        hover={props.hover}
        position={18}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        18h
      </Hour>
      <Hour
        hover={props.hover}
        position={20}
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        20h
      </Hour>
      <Hour
        hover={props.hover}
        last
        onMouseEnter={() => props.setHover(true)}
        onMouseLeave={() => props.setHover(false)}
      >
        Minuit
      </Hour>
    </Wrapper>
  )
}
