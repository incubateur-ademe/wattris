import React, { useRef } from 'react'
import styled from 'styled-components'
import { Range, getTrackBackground, useThumbOverlap } from 'react-range'

import { getRealHoursFromDecimalHours } from 'utils/formatters'
import useMounted from 'hooks/useMounted'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 1.25rem;
`

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  margin: 0 1.75rem;
  pointer-events: none;

  &:before {
    content: '';
    height: 0.1rem;
    position: absolute;
    top: 0.5rem;
    bottom: 0;
    left: 0;
    right: 0;
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
  pointer-events: auto;
`
const SmallThumb = styled.div`
  width: 0.5rem;
  height: 1rem;
  border-radius: 0.25rem;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  background-color: ${(props) => props.theme.colors.background};
  pointer-events: auto;
`
const NumberLabel = styled.div`
  position: absolute;
  top: ${(props) => (props.large ? -1.5 : 1.5)}em;
  left: ${(props) => props.labelStyle.left || '-0.75rem'};
  transform: ${(props) => props.labelStyle.transform};
  visibility: ${(props) => props.labelStyle.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.25rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: ${(props) => (props.large ? -0.05 : 0)}em;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;
  white-space: nowrap;
`

const ThumbLabel = (props) => {
  const [labelValue, labelStyle] = useThumbOverlap(
    props.rangeRef,
    props.values,
    props.index,
    0.5,
    ' - ',
    (value) => `${getRealHoursFromDecimalHours(value)}`
  )
  return (
    props.smallDuration && (
      <NumberLabel
        data-label={props.index}
        labelStyle={labelStyle}
        color={props.color}
        large={props.large}
        aria-label={props.ariaLabel}
        peak={props.peak}
      >
        {labelValue}
      </NumberLabel>
    )
  )
}

export default function Slider(props) {
  const mounted = useMounted()

  const endThumb =
    props.start + props.duration === 24
      ? 24
      : (props.start + props.duration) % 24
  const thumbs = [props.start, endThumb]
  const rangeRef = useRef()

  return (
    <Wrapper className={props.className} onClick={(e) => e.stopPropagation()}>
      <Range
        allowOverlap
        step={0.5}
        min={0}
        max={24}
        values={mounted ? thumbs : [0, 0]}
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
        renderThumb={({ index, props: anotherProps }) =>
          !props.smallDuration ? (
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
          ) : (
            <SmallThumb
              {...anotherProps}
              color={props.color}
              aria-label={props.ariaLabel}
              peak={props.peak}
              large={props.large}
            >
              <ThumbLabel
                rangeRef={rangeRef.current}
                values={thumbs}
                index={index}
                color={props.color}
                large={props.large}
                aria-label={props.ariaLabel}
                peak={props.peak}
                smallDuration={props.smallDuration}
              />
            </SmallThumb>
          )
        }
      />
    </Wrapper>
  )
}
