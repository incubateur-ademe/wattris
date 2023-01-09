import React, { useContext } from 'react'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'

export default function ShareSimulation() {
  const { occurences } = useContext(DataContext)
  return (
    <Button
      onClick={() => {
        console.log(occurences)
      }}
    >
      Télécharger ma simulation
    </Button>
  )
}
