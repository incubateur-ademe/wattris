import React, { useRef } from 'react'
import styled from 'styled-components'
import { Range, getTrackBackground } from 'react-range'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1.25rem;
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
    background: ${(props) => props.background};
  }
`
const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.large ? 3.75 : 3)}rem;
  height: 1.25rem;
  font-size: 0.75rem;
  letter-spacing: ${(props) => (props.large ? -0.05 : 0)}em;
  font-weight: 300;
  white-space: nowrap;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;
`

export default function Slider(props) {
  const thumbs = [props.start, props.start + props.duration]
  const rangeRef = useRef()

  return (
    <Wrapper className={props.className}>
      <Range
        allowOverlap
        step={0.5}
        min={0}
        max={24}
        values={thumbs}
        ref={rangeRef}
        onChange={props.onChange}
        renderTrack={({ props, children }) => (
          <Track
            {...props}
            background={getTrackBackground({
              values: thumbs,
              colors:
                thumbs[0] > thumbs[1]
                  ? ['#fff', 'rgba(255, 255, 255, 0.3)', '#fff']
                  : [
                      'rgba(255, 255, 255, 0.3)',
                      '#fff',
                      'rgba(255, 255, 255, 0.3)',
                    ],
              min: 0,
              max: 24,
            })}
          >
            {children}
          </Track>
        )}
        renderThumb={({ index, props: anotherProps }) => (
          <Thumb
            {...anotherProps}
            color={props.color}
            aria-label={props.ariaLabel}
            peak={props.peak}
            large={props.large}
          >
            <span>
              {props.large ? <>{index === 0 ? 'de' : 'à'} </> : ''}
              <strong>{getRealHoursFromDecimalHours(thumbs[index])}</strong>
            </span>
          </Thumb>
        )}
      />
    </Wrapper>
  )
}
