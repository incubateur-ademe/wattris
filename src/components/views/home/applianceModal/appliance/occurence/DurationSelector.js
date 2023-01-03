import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const options = [
  0.0833333333333339,
  0.16666666666666669,
  0.25,
  0.75,
  1.25,
  ...Array.from(Array(48)).map((hour, index) => index / 2),
].sort((a, b) => (a > b ? 1 : -1))

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
  font-size: 0.875rem;
  white-space: nowrap;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.color || props.theme.colors.background};
  border-radius: 0.5rem;

  path {
    fill: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: none;
  border: none;
  padding: 0 0.375rem;
  cursor: pointer;
`
const Value = styled.div`
  width: 2.75rem;
  text-align: center;
`
export default function DurationSelector(props) {
  return (
    <Wrapper
      id={props.slug}
      name={props.slug}
      value={props.value}
      peak={props.peak}
    >
      <Button
        onClick={() => {
          const curIndex = options.indexOf(props.value)
          props.onChange(
            options[curIndex - 1] ? options[curIndex - 1] : options[curIndex]
          )
        }}
      >
        <svg
          width='9'
          height='2'
          viewBox='0 0 9 2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.5 2V0H5.57356H3.44235H0.5V2H3.44235H5.57356H8.5Z'
            fill='#476C9B'
          />
        </svg>
      </Button>
      <Value>{getRealHoursFromDecimalHours(props.value)}</Value>
      <Button
        onClick={() => {
          const curIndex = options.indexOf(props.value)
          props.onChange(
            options[curIndex + 1] ? options[curIndex + 1] : options[curIndex]
          )
        }}
      >
        <svg
          width='9'
          height='8'
          viewBox='0 0 9 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.5 5.06349V2.93651H5.57356V0H3.44235V2.93651H0.5V5.06349H3.44235V8H5.57356V5.06349H8.5Z'
            fill='#476C9B'
          />
        </svg>
      </Button>
    </Wrapper>
  )
}
