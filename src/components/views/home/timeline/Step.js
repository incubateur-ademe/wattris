import React, { useMemo } from 'react'
import styled from 'styled-components'

import Bloc from './step/Bloc'

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  height: 26.25rem;
  margin-top: -1.25rem;
`
export default function Step(props) {
  const peak = useMemo(
    () =>
      (props.hour >= 8 && props.hour < 13) ||
      (props.hour >= 18 && props.hour < 20),
    [props.hour]
  )

  return (
    <Wrapper peak={peak}>
      {props.step.map((bloc, index) => {
        return (
          <Bloc
            key={index}
            bloc={bloc}
            peak={peak}
            visiblePowerOnGraph={props.visiblePowerOnGraph}
          />
        )
      })}
    </Wrapper>
  )
}
