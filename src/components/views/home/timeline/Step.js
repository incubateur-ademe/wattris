import React, { useMemo } from 'react'
import styled from 'styled-components'

import Bloc from './step/Bloc'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: calc(${(props) => props.width}%);
  height: 26.25rem;
  margin-top: -1.25rem;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0)),
    color-stop(0.3, rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 1))
  );
`

const Indicator = styled.div`
  position: absolute;
  bottom: calc(100% - 0.25rem);
  font-size: 0.75rem;
`
export default function Step(props) {
  const peak = useMemo(
    () =>
      (props.hour >= 8 && props.hour < 13) ||
      (props.hour >= 18 && props.hour < 20),
    [props.hour]
  )

  const totalPower = useMemo(
    () => props.step.reduce((acc, cur) => acc + cur.power, 0),
    [props.step]
  )

  return (
    <Wrapper width={props.width} peak={peak}>
      {props.step.map((bloc, index) => {
        return <Bloc key={index} bloc={bloc} peak={peak} />
      })}
      {totalPower > 2500 ? <Indicator>More</Indicator> : null}
    </Wrapper>
  )
}
