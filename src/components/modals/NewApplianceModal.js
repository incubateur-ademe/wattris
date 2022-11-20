import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'components/providers/ModalProvider'
import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function NewApplianceModal() {
  const { newAppliance: open, setNewAppliance: setOpen } =
    useContext(ModalContext)

  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>Ajouter un appareil</Title>
      <Text>test</Text>
    </Modal>
  )
}
