import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { useAllBlocsByStep } from 'hooks/useAppliances'
import DataContext from 'components/providers/DataProvider'
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
  const { occurences } = useContext(DataContext)
  const { steps, stepDurationInMinute } = useAllBlocsByStep()

  const visiblePowerOnGraph = useMemo(() => {
    const numRadiateur = occurences.filter(
      (occurence) => occurence.slug === 'radiateur'
    ).length
    return 2500 + numRadiateur * 1000
  }, [occurences])

  return (
    <Wrapper>
      <Axis visiblePowerOnGraph={visiblePowerOnGraph} />
      <Steps>
        {steps.map((step, index) => (
          <Step
            key={index}
            step={step}
            hour={(index / 60) * stepDurationInMinute}
            visiblePowerOnGraph={visiblePowerOnGraph}
          />
        ))}
      </Steps>
    </Wrapper>
  )
}
