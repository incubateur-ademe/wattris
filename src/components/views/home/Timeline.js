import React from 'react'
import styled from 'styled-components'

import { useAllBlocsByStep } from 'hooks/useAppliances'
import Axis from './timeline/Axis'
import Step from './timeline/Step'

const Wrapper = styled.div`
  position: relative;
  flex: 1;
`
const Steps = styled.div`
  display: flex;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0)),
    color-stop(0.3, rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 1))
  );
`
export default function Timeline() {
  const { steps, stepDurationInMinute, powerByBlocInKW } = useAllBlocsByStep()

  return (
    <Wrapper>
      <Axis />
      <Steps>
        {steps.map((step, index) => (
          <Step
            key={index}
            step={step}
            hour={(index / 60) * stepDurationInMinute}
            width={(100 / 24) * (60 / stepDurationInMinute)}
            powerByBlocInKW={powerByBlocInKW}
          />
        ))}
      </Steps>
    </Wrapper>
  )
}
