import React, { useRef } from 'react'
import styled from 'styled-components'
import { Range, getTrackBackground, useThumbOverlap } from 'react-range'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1.25rem;
  margin-bottom: 2rem;
`
const Tick = styled.div`
  font-size: 0.75rem;
`
const Track = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  margin: 0 rem;
  &:before {
    content: '';
    height: 0.15rem;
    position: absolute;
    top: 0.5rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    background: ${(props) => props.background};
  }
`
const NumberThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.large ? 2.75 : 2.75)}rem;
  height: 1.5rem;
  padding: 0.5rem;
  font-size: ${(props) => (props.large ? 0.75 : 0.25)}rem;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;
  outline: solid ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
`

const NumberLabel = styled.div`
  position: absolute;
  top: 1.5rem;
  left: ${(props) => props.labelStyle.left || '-0.75rem'};
  transform: ${(props) => props.labelStyle.transform};
  visibility: ${(props) => props.labelStyle.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  padding: 0.5rem;
  font-size: ${(props) => (props.large ? 0.75 : 0.25)}rem;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;
  white-space: nowrap;
`

const Thumb = styled.div`
  width: 0.75rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  background-color: ${(props) => props.theme.colors.background};
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
}

export default function Slider(props) {
  const thumbs = [props.start, props.start + props.duration]
  const rangeRef = useRef()
  return (
    <Wrapper className={props.className} large={props.large}>
      <Tick>0h</Tick>
      <Range
        draggableTrack
        step={0.5}
        min={0}
        max={24}
        values={thumbs}
        ref={rangeRef}
        onChange={props.onChange}
        renderTrack={({ props, children }) => (
          <Track
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            background={getTrackBackground({
              values: thumbs,
              colors: [
                'rgba(255, 255, 255, 0.5)',
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255, 0.5)',
              ],
              min: 0,
              max: 24,
            })}
            {...props}
          >
            {children}
          </Track>
        )}
        renderThumb={({ index, props: anotherProps }) => (
          <Thumb {...anotherProps}>
            <ThumbLabel
              rangeRef={rangeRef.current}
              values={thumbs}
              index={index}
              color={props.color}
              large={props.large}
              aria-label={props.ariaLabel}
              peak={props.peak}
            />
            {/* {getRealHoursFromDecimalHours(thumbs[index])} */}
          </Thumb>
        )}
      />
      <Tick>{props.large ? 'Minuit' : '24h'}</Tick>
    </Wrapper>
  )
}
