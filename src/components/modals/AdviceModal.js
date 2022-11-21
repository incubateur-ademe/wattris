import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'components/providers/ModalProvider'
import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function NewApplianceModal() {
  const { advice: open, setAdvice: setOpen } = useContext(ModalContext)

  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>{open}</Title>
      <Text>Ici des conseils spécifique à l'appareil</Text>
    </Modal>
  )
}
