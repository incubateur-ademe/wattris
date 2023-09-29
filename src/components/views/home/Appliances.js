import React, { useContext, useMemo } from 'react'
import styled, { keyframes } from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'
import Occurence from 'components/views/home/appliances/Occurence'

const blink = keyframes`
  from,
  25%,
  50% {
    opacity: 1;
  }
  12.5%,
  37.5% {
    opacity: 0;
  }

`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 2rem;

  ${(props) => props.theme.mq.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${(props) => props.theme.mq.small} {
    grid-template-columns: repeat(2, 1fr);
  }
`
const AddOccurenceWrapper = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
`

const AddOccurenceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  padding: 0.75rem 0.75rem;
  text-align: left;
  color: ${(props) => props.theme.colors[props.blink ? 'background' : 'main']};
  background-color: ${(props) =>
    props.theme.colors[props.blink ? 'main' : 'background']};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.75rem;
  box-shadow: none;
  transition: all 300ms ease-out;
  cursor: pointer
  transition: opacity 500ms 300ms;
  animation: ${(props) => (props.blink && props.visible ? blink : '')} 2000ms
    infinite 3000ms;

  svg {
    width: 1.5rem;
    height: auto;
    path {
      fill: ${(props) =>
        props.theme.colors[props.blink ? 'background' : 'main']};
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.main};

    path {
      fill: ${(props) => props.theme.colors.background};
    }
  }
`

const ProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0;
  margin-left: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.main};
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  path {
    fill: ${(props) => props.theme.colors.background};
  }
`

export default function Appliances() {
  const { occurences, appliancesListOpen, setAppliancesListOpen } =
    useContext(DataContext)
  const {
    introduction,
    profils,
    setProfils: setProfilsOpen,
  } = useContext(ModalContext)

  const occurencesByAppliance =
    occurences.length &&
    occurences
      .map((occurence, index) => ({ ...occurence, index }))
      .reduce(
        (acc, cur) =>
          acc[cur.slug]
            ? { ...acc, [cur.slug]: [...acc[cur.slug], cur] }
            : { ...acc, [cur.slug]: [cur] },
        {}
      )

  return (
    <Wrapper>
      {Object.entries(occurencesByAppliance).map((key) =>
        key[1].map((occurence, index) => (
          <Occurence
            key={key[0] + index}
            index={occurence.index}
            indexInAppliance={key[1].length > 1 ? index + 1 : null}
            occurence={occurence}
            small
          />
        ))
      )}
      <AddOccurenceWrapper
        visible={
          (!introduction && !profils) || (profils && occurences.length > 0)
        }
      >
        <AddOccurenceButton
          onClick={() => setAppliancesListOpen(true)}
          blink={!occurences.length && !appliancesListOpen}
        >
          <svg width='14' height='15' viewBox='0 0 14 15'>
            <path d='M14 6.16472V8.83528C14 9.03631 13.8371 9.19945 13.6358 9.19945H8.69947V14.1358C8.69947 14.3371 8.53634 14.5 8.3353 14.5H5.66474C5.46382 14.5 5.30057 14.3371 5.30057 14.1358V9.19945H0.364169C0.162972 9.19945 0 9.03631 0 8.83528V6.16472C0 5.96364 0.162972 5.80055 0.364169 5.80055H5.30057V0.864146C5.30057 0.662869 5.46378 0.499977 5.66474 0.499977H8.3353C8.53634 0.499977 8.69947 0.662869 8.69947 0.864146V5.80055H13.6358C13.8371 5.80055 14 5.96364 14 6.16472Z' />
          </svg>
          Ajouter
          <br />
          un appareil
        </AddOccurenceButton>
        <ProfileButton
          onClick={() => {
            setProfilsOpen(true)
          }}
        >
          Voir les profils-type
        </ProfileButton>
      </AddOccurenceWrapper>
    </Wrapper>
  )
}
