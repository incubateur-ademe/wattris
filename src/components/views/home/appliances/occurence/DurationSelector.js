import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.select`
  padding: 0;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  border-bottom: 0.0625rem solid ${(props) => props.theme.colors.background};
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
    >
      {Array.from(Array(49)).map((hour, index) => (
        <option value={index / 2}>
          {getRealHoursFromDecimalHours(index / 2)}
        </option>
      ))}
    </Wrapper>
  )
}
