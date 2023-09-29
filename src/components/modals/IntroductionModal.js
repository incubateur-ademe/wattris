import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'components/providers/ModalProvider'
import Modal from 'components/base/Modal'
import Logo from 'components/base/Logo'
import Button from 'components/base/Button'

const StyledLogo = styled(Logo)`
  display: block;
  width: 20rem;
  max-width: 100%;
  margin: 0.5rem auto 1.5rem;
`
const Text = styled.p`
  text-align: center;
`

export default function IntroductionModal() {
  const {
    introduction: introductionOpen,
    setIntroduction: setIntroductionOpen,
    setProfils: setProfilsOpen,
  } = useContext(ModalContext)

  return (
    <Modal open={introductionOpen} setOpen={setIntroductionOpen}>
      <StyledLogo permanent />
      <Text>
        Il fait froid dehors et nos besoins d’électricité sont trop importants
        surtout <strong>entre 8h et 13h</strong> puis{' '}
        <strong>entre 18h et 20h</strong>.
      </Text>
      <Text>
        Pour éviter les coupures, il faut changer ses habitudes et décaler le
        fonctionnement de quelques appareils.
      </Text>
      <Text>
        Grâce à ce simulateur, évaluez les gestes qui vous correspondent le
        mieux et qui auront le plus d’impacts.
      </Text>
      <Button.Wrapper vertical>
        <Button onClick={() => setIntroductionOpen(false)}>
          Je sélectionne mes appareils
        </Button>
        <Button
          hollow
          onClick={() => {
            setIntroductionOpen(false)
            setProfilsOpen(true)
          }}
        >
          Je pars d'un profil-type
        </Button>
      </Button.Wrapper>
    </Modal>
  )
}
