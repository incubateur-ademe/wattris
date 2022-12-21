import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'

const Wrapper = styled.div`
  display: inline-flex;
  border: ${(props) => (props.large ? 0.1 : 0.0625)}rem solid
    ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
`

const InputSelector = styled.select`
  text-align: center;
  padding: 0 0.5rem;
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

const ChangeButton = styled.div`
  padding-right: ${(props) => props.right && 0.5}rem;
  padding-left: ${(props) => props.left && 0.5}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => (props.large ? 1 : 0.75)}rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.background};
`

export default function DurationSelector(props) {
  return (
    <Wrapper large={props.large}>
      <ChangeButton
        onClick={() =>
          props.value > 0.25 && props.onChange(Number(props.value) - 0.25)
        }
        title={'Diminuer ' + props.slug + props.index}
        large={props.large}
        left
        disabled={props.value === 0.25}
        hollow
      >
        -
      </ChangeButton>
      <InputSelector
        id={props.slug + props.index}
        name={props.slug + props.index}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.currentTarget.value))}
        large={props.large}
      >
        <option value={props.value}>
          {getRealHoursFromDecimalHours(props.value)}
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
          props.value < 24 && props.onChange(Number(props.value) + 0.25)
        }
        title={'Ajouter ' + props.slug + props.index}
        large={props.large}
        right
        disabled={props.value === 24}
        hollow
      >
        +
      </ChangeButton>
    </Wrapper>
  )
}
