import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.div`
  display: inline-flex;
  border: ${(props) => (props.large ? 0.1 : 0.0625)}rem solid
    ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  padding: 0.25rem 0;
`

const InputSelector = styled.select`
  text-align: center;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  font-size: ${(props) => (props.large ? 0.875 : 0.75)}rem;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  appearance: none;
  cursor: pointer;
  ${(props) => props.theme.mq.small} {
    font-size: ${(props) => (props.large ? 0.75 : 0.625)}rem;
  }
`

const ChangeButton = styled.button`
  padding-right: ${(props) => props.right && 0.5}rem;
  padding-left: ${(props) => props.left && 0.5}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  font-size: ${(props) => (props.large ? 1 : 0.75)}rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const Svg = styled.svg`
  display: inline-block;
  width: 0.75em;
  height: auto;

  path {
    fill: ${(props) => props.theme.colors.background};
  }
`

const roundHourValue = (value) => Math.round(Number(value) * 100) / 100

export default function DurationSelector(props) {
  console.log(props.value)
  return (
    <Wrapper large={props.large}>
      <ChangeButton
        onClick={() =>
          props.value > 0.5
            ? props.onChange(roundHourValue(props.value - 0.5))
            : props.value === 0.5
            ? props.onChange(roundHourValue(props.value - 0.25))
            : props.value <= 0.25
            ? props.onChange(roundHourValue(props.value - 5 / 60))
            : null
        }
        title={'Diminuer ' + props.slug + props.index}
        large={props.large}
        left
        disabled={props.value <= 0.09}
        hollow
      >
        <Svg x='0px' y='0px' viewBox='0 0 42 42'>
          <path
            d='M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21
	S39.776,16,37.059,16z'
          />
        </Svg>
      </ChangeButton>
      <InputSelector
        id={props.slug + props.index}
        name={props.slug + props.index}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.currentTarget.value))}
        large={props.large}
      >
        <option value={roundHourValue(5 / 60)}>
          {getRealHoursFromDecimalHours(5 / 60)}
        </option>
        <option value={roundHourValue(10 / 60)}>
          {getRealHoursFromDecimalHours(10 / 60)}
        </option>
        <option value={0.25}>{getRealHoursFromDecimalHours(0.25)}</option>
        {Array.from(Array(47)).map((hour, index) => {
          index += 1
          return (
            <option key={index / 2} value={index / 2}>
              {getRealHoursFromDecimalHours(index / 2)}
            </option>
          )
        })}
      </InputSelector>
      <ChangeButton
        onClick={() =>
          props.value >= 0.5 && props.value < 24
            ? props.onChange(roundHourValue(props.value + 0.5))
            : props.value === 0.25
            ? props.onChange(roundHourValue(props.value + 0.25))
            : props.value < 0.25
            ? props.onChange(roundHourValue(props.value + 5 / 60))
            : null
        }
        title={'Ajouter ' + props.slug + props.index}
        large={props.large}
        right
        disabled={props.value === 23.5}
        hollow
      >
        <Svg x='0px' y='0px' viewBox='0 0 45 45'>
          <path
            d='M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z'
          />
        </Svg>
      </ChangeButton>
    </Wrapper>
  )
}
