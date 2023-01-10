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
  margin-top: ${(props) => (props.large ? 0 : 0.5)}rem;
`

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 0.1rem;
  margin: 0 1.75rem;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => (props.large ? -1.75 : -1.5)}rem;
    right: ${(props) => (props.large ? -1.75 : -1.5)}rem;
    background-color: ${(props) => props.theme.colors.background};
  }
`
const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.large ? 4.25 : 3)}rem;
  height: 1.25rem;
  font-size: ${(props) => (props.large ? 0.875 : 0.75)}rem;
  font-weight: 300;
  white-space: nowrap;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;
  pointer-events: auto;
`
export default function Slider(props) {
  return (
    <Wrapper className={props.className} onClick={(e) => e.stopPropagation()}>
      <Range
        step={0.5}
        min={0}
        max={24}
        values={[props.start]}
        onChange={props.onChange}
        renderTrack={({ props, children }) => (
          <Track {...props}>{children}</Track>
        )}
        renderThumb={({ props: anotherProps }) => (
          <Thumb
            {...anotherProps}
            color={props.color}
            aria-label={props.ariaLabel}
            peak={props.peak}
            large={props.large}
          >
            <span>
              {props.large ? 'à ' : ''}
              <strong>{getRealHoursFromDecimalHours(props.start)}</strong>
            </span>
          </Thumb>
        )}
      />
    </Wrapper>
  )
}
