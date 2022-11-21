import React from 'react'
import styled from 'styled-components'

import { useAllPowerOfPeaks } from 'hooks/useAppliances'

const Wrapper = styled.h2`
  text-align: right;
`
export default function Score() {
  const power = useAllPowerOfPeaks()
  return <Wrapper>Score : {power}</Wrapper>
}
