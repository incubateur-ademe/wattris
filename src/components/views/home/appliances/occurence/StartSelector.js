import React from 'react'
import styled from 'styled-components'
import { Range } from 'react-range'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1.25rem;
  margin-bottom: ${(props) => (props.large ? '0.5rem' : 0)};
`
const Tick = styled.div`
  font-size: 0.75rem;
`
const Track = styled.div`
  position: relative;
  width: 100%;
  height: 0.0625rem;
  margin: 0 1.75rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1.75rem;
    right: -1.75rem;
    background-color: ${(props) => props.theme.colors.background};
  }
`
const NumberThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;
`
const Thumb = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 1rem;
`

export default function Slider(props) {
  return (
    <Wrapper className={props.className} large={props.large}>
      {props.large && <Tick>0h</Tick>}
      <Range
        step={0.5}
        min={0}
        max={24}
        values={[props.start]}
        onChange={props.onChange}
        renderTrack={({ props, children }) => (
          <Track {...props}>{children}</Track>
        )}
        renderThumb={({ props: anotherProps }) =>
          props.large ? (
            <NumberThumb
              {...anotherProps}
              color={props.color}
              aria-label={props.ariaLabel}
              peak={props.peak}
            >
              {getRealHoursFromDecimalHours(props.start)}
            </NumberThumb>
          ) : (
            <Thumb
              {...anotherProps}
              color={props.color}
              aria-label={props.ariaLabel}
            />
          )
        }
      />
      {props.large && <Tick>Minuit</Tick>}
    </Wrapper>
  )
}
