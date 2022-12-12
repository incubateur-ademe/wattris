import React from 'react'
import styled from 'styled-components'

import { useAllBlocsByStep } from 'hooks/useAppliances'
import Axis from './timeline/Axis'
import Step from './timeline/Step'

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
`
export default function Timeline() {
  const { steps, stepDurationInMinute, powerByBlocInKW } = useAllBlocsByStep()

  return (
    <Wrapper>
      <Axis />
      {steps.map((step, index) => (
        <Step
          key={index}
          step={step}
          hour={(index / 60) * stepDurationInMinute}
          width={(100 / 24) * (60 / stepDurationInMinute)}
          powerByBlocInKW={powerByBlocInKW}
        />
      ))}
    </Wrapper>
  )
}
