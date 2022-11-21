import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.select`
  padding: 0 0.75rem 0 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  border-bottom: 0.125rem solid ${(props) => props.theme.colors.background};
  appearance: none;
  background-repeat: no-repeat;
  background-position: calc(100%) 50%;
  background-size: 0.75rem 0.75rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 24' ><path fill='%23${(
    props
  ) =>
    props.theme.colors.background.replace(
      '#',
      ''
    )}' d='M12,13.1l5-4.9l1.4,1.4L12,15.9L5.6,9.5l1.4-1.4L12,13.1z'/></svg>");
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
      {Array.from(Array(48)).map((hour, index) => (
        <option value={index / 2}>
          {getRealHoursFromDecimalHours(index / 2)}
        </option>
      ))}
    </Wrapper>
  )
}
