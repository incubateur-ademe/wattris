import React, { useContext } from 'react'

import ModalContext from 'components/providers/ModalProvider'
import Button from 'components/base/Button'

export default function OpenProfilesButton() {
  const { setProfils } = useContext(ModalContext)

  return (
    <Button.Wrapper>
      <Button
        hollow
        onClick={() => {
          setProfils(true)
        }}
      >
        Voir les profils-type
      </Button>
    </Button.Wrapper>
  )
}
