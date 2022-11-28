import React from 'react'
import styled from 'styled-components'

import { useAllBlocsByStep } from 'hooks/useAppliances'
import Step from './timeline/Step'
import Score from './timeline/Score'
import NewOccurence from './timeline/NewOccurence'

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  margin-bottom: 1.5rem;
  padding-top: 3rem;
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
      <Score />
      <NewOccurence />
    </Wrapper>
  )
}
