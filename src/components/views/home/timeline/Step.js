import React, { useMemo } from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'
import Bloc from './step/Bloc'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: calc(${(props) => props.width}%);
  height: 25rem;
  background-color: ${(props) =>
    props.peak ? props.theme.colors.errorLight : 'transparent'};
`
const Time = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  font-size: 0.75rem;
`
const Indicator = styled.div`
  position: absolute;
  bottom: calc(100% + 0.25rem);
  font-size: 0.75rem;
`
export default function Step(props) {
  const peak = useMemo(
    () =>
      (props.hour >= 8 && props.hour < 13) ||
      (props.hour >= 18 && props.hour < 20),
    [props.hour]
  )
  const first = useMemo(
    () => props.hour === 8 || props.hour === 18,
    [props.hour]
  )
  const last = useMemo(
    () => props.hour === 13 || props.hour === 20,
    [props.hour]
  )

  return (
    <Wrapper width={props.width} peak={peak} first={first} last={last}>
      {first || last ? <Time>{props.hour}h</Time> : null}
      {props.step.map(
        (bloc, index) => index < 28 && <Bloc bloc={bloc} peak={peak} />
      )}
      {props.step.length > 28 ? (
        <Indicator>+ {props.step.length - 28}</Indicator>
      ) : null}
    </Wrapper>
  )
}
