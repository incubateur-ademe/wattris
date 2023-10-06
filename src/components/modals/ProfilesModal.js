import React, { useContext } from 'react'
import styled from 'styled-components'

import profils from 'data/profiles.json'
import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'
import Modal from 'components/base/Modal'
import Button from 'components/base/Button'

const Title = styled.h2`
  text-align: center;
`
const Text = styled.p`
  text-align: center;
`
const ProfilesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  height: 8rem;

  ${(props) => props.theme.mq.small} {
    gap: 0.75rem;
  }
`
const Profile = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 4.5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.background};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 100ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }

  &:hover {
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.main};
  }
`
const ProfileTitle = styled.div``

const ProfileEmoji = styled.div`
  font-size: 150%;
`

export default function ProfilesModal() {
  const { occurences, setOccurences } = useContext(DataContext)

  const { profils: profilsOpen, setProfils: setProfilsOpen } =
    useContext(ModalContext)

  return (
    <Modal open={profilsOpen} setOpen={setProfilsOpen}>
      <Title>Je choisis un foyer-type</Title>
      <Text>Sélectionnez le profil qui vous correspond</Text>
      {occurences.length > 0 && (
        <Text>
          <strong>
            ⚠️ Vous avez déjà une simulation en cours, vous perdrez les
            appareils déjà sélectionnés.
          </strong>
        </Text>
      )}
      <ProfilesList>
        {Object.entries(profils).map(([key, profil]) => (
          <Profile
            key={key}
            onClick={() => {
              setOccurences(profil.data)
              setProfilsOpen(false)
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Sélectionner un profil',
                key,
              ])
            }}
          >
            <ProfileTitle>{profil.titre}</ProfileTitle>
            <ProfileEmoji>{profil.emoji}</ProfileEmoji>
          </Profile>
        ))}
      </ProfilesList>
    </Modal>
  )
}
