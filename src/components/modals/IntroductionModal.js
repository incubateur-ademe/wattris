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
        Consommer de l’électricité au bon moment, c’est utiliser ses appareils
        quand les centrales produisent de l’électricité en émettant le moins de
        CO<sub>2</sub>.
      </Text>
      <Text>
        En évitant de mettre en fonctionnement certains appareils{' '}
        <strong>entre 7h et 11h</strong> puis <strong>entre 18h et 20h</strong>,
        on évite de consommer de l'énergie tous en même temps. Produire et
        consommer de l’électricité zéro CO₂ devient alors plus facile !
      </Text>
      <Text>
        Grâce à ce simulateur, découvrez les appareils qui consomment le plus
        chez vous et ceux dont vous pouvez décaler l'utilisation pour participer
        à limiter le changement climatique.
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
