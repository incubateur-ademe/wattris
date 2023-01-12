import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import ModalContext from 'components/providers/ModalProvider'
import Button from 'components/base/Button'

export default function ExportSimulation() {
  const { setContact } = useContext(ModalContext)

  return (
    <Button.Wrapper>
      <Button
        onClick={() => {
          setContact(true)
        }}
      >
        Je donne mon avis
      </Button>
    </Button.Wrapper>
  )
}
