import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.select`
  padding: 0;
  font-size: ${(props) => (props.large ? 0.875 : 0.75)}rem;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => (props.large ? 0.125 : 0.0625)}rem solid
    ${(props) => props.theme.colors.background};
  appearance: none;
  cursor: pointer;
`
export default function DurationSelector(props) {
  return (
    <Wrapper
      id={props.slug + props.index}
      name={props.slug + props.index}
      value={props.value}
      onChange={(e) => props.onChange(Number(e.currentTarget.value))}
      large={props.large}
    >
      {Array.from(Array(49)).map((hour, index) => (
        <option key={index / 2} value={index / 2}>
          {getRealHoursFromDecimalHours(index / 2)}
        </option>
      ))}
    </Wrapper>
  )
}
