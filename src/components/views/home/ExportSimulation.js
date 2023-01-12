import React, { useContext } from 'react'

import ModalContext from 'components/providers/ModalProvider'
import Button from 'components/base/Button'

export default function ExportSimulation() {
  const { setContact } = useContext(ModalContext)

  return (
    <Button.Wrapper>
      <Button
        hollow
        onClick={() => {
          setContact(true)
        }}
      >
        Je donne mon avis
      </Button>
    </Button.Wrapper>
  )
}
