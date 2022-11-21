import React from 'react'
import styled from 'styled-components'

import { useAllBlocsByStep } from 'hooks/useAppliances'
import Step from './timeline/Step'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 0.0625rem;
`
export default function Timeline() {
  const { steps, stepDurationInMinute } = useAllBlocsByStep()

  return (
    <Wrapper>
      {steps.map((step, index) => (
        <Step
          step={step}
          hour={(index / 60) * stepDurationInMinute}
          width={(100 / 24) * (60 / stepDurationInMinute)}
        />
      ))}
    </Wrapper>
  )
}
