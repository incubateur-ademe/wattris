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

  const remToPower = 100 // 1rem = 100W -> 2500W
  const graphHeight = 2500 / remToPower
  const blocHeight = props.powerByBlocInKW / remToPower
  const maxBlocsInHeight = graphHeight / blocHeight

  return (
    <Wrapper width={props.width} peak={peak}>
      {props.step.map((bloc, index) => {
        return (
          index <= maxBlocsInHeight && (
            <Bloc bloc={bloc} peak={peak} blocHeight={blocHeight} />
          )
        )
      })}
      {props.step.length > maxBlocsInHeight ? (
      ) : null}
    </Wrapper>
  )
}
