import React from 'react'

import { useAllPowerOfPeaks } from 'hooks/useAppliances'

export default function Score() {
  const power = useAllPowerOfPeaks()
  console.log(power)
  return <div>Score : {power}kW</div>
}
