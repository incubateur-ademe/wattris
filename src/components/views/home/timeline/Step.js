import React, { useMemo } from 'react'
import styled from 'styled-components'

import { getRealHoursFromDecimalHours } from 'utils/formatters'
import Bloc from './step/Bloc'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: calc(${(props) => props.width}%);
  background-color: ${(props) =>
    props.peak ? props.theme.colors.errorLight : 'transparent'};
`
const Time = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  font-size: 0.5rem;
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
    () => props.hour === 12.5 || props.hour === 19.5,
    [props.hour]
  )
  return (
    <Wrapper width={props.width} peak={peak} first={first} last={last}>
      {props.hour % 1 === 0 && (
        <Time>{getRealHoursFromDecimalHours(props.hour)}</Time>
      )}
      {props.step.map((bloc) => (
        <Bloc bloc={bloc} peak={peak} />
      ))}
    </Wrapper>
  )
}
