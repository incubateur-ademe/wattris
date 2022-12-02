import React from 'react'
import styled from 'styled-components'

import { useAllPowerOfPeaks } from 'hooks/useAppliances'

const Wrapper = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
`
export default function Score() {
  const power = useAllPowerOfPeaks()

  return (
    <Wrapper>
      Score
      <br />
      {power} kWh {power < 1000 ? ':)' : power > 2500 ? ':(' : ':/'}
    </Wrapper>
  )
}
