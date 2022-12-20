import React from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'
import Button from 'components/base/Button'

const Wrapper = styled.div`
  display: inline-flex;
`

const InputSelector = styled.select`
  padding: 0 0.5rem;
  margin: 0 0.25rem;
  font-size: ${(props) => (props.large ? 0.875 : 0.75)}rem;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => (props.large ? 0.125 : 0.0625)}rem solid
    ${(props) => props.theme.colors.background};
  appearance: none;
  cursor: pointer;
  ${(props) => props.theme.mq.small} {
    font-size: ${(props) => (props.large ? 0.75 : 0.625)}rem;
  }
`

const ChangeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => (props.large ? 1 : 0.75)}rem;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
`

export default function DurationSelector(props) {
  return (
    <Wrapper>
      <ChangeButton
        onClick={() =>
          props.value > 0.25 && props.onChange(Number(props.value) - 0.25)
        }
        title={'Diminuer ' + props.slug + props.index}
        large={props.large}
        left={true}
        disabled={props.value === 0.25}
        peak={props.peak}
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
        right={true}
        disabled={props.value === 24}
        peak={props.peak}
        hollow
      >
        +
      </ChangeButton>
    </Wrapper>
  )
}
