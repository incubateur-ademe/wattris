import React, { useContext } from 'react'
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
const AddOccurenceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  padding: 0.75rem 0.75rem;
  text-align: left;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.background};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.75rem;
  box-shadow: none;
  transition: all 300ms ease-out;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 500ms 300ms;
  animation: ${(props) => (props.blink && props.visible ? blink : '')} 2000ms
    infinite 3000ms;

  svg {
    width: 1.5rem;
    height: auto;
    path {
      fill: ${(props) => props.theme.colors.main};
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
export default function Appliances() {
  const { occurences, appliancesListOpen, setAppliancesListOpen } =
    useContext(DataContext)
  const { introduction } = useContext(ModalContext)

  return (
    <Wrapper>
      {occurences.map((occurence, index) => (
        <Occurence key={index} index={index} occurence={occurence} small />
      ))}
      <AddOccurenceButton
        onClick={() => setAppliancesListOpen(true)}
        blink={!occurences.length && !appliancesListOpen}
        visible={!introduction}
      >
        <svg width='14' height='15' viewBox='0 0 14 15'>
          <path d='M14 6.16472V8.83528C14 9.03631 13.8371 9.19945 13.6358 9.19945H8.69947V14.1358C8.69947 14.3371 8.53634 14.5 8.3353 14.5H5.66474C5.46382 14.5 5.30057 14.3371 5.30057 14.1358V9.19945H0.364169C0.162972 9.19945 0 9.03631 0 8.83528V6.16472C0 5.96364 0.162972 5.80055 0.364169 5.80055H5.30057V0.864146C5.30057 0.662869 5.46378 0.499977 5.66474 0.499977H8.3353C8.53634 0.499977 8.69947 0.662869 8.69947 0.864146V5.80055H13.6358C13.8371 5.80055 14 5.96364 14 6.16472Z' />
        </svg>
        Ajouter
        <br />
        un appareil
      </AddOccurenceButton>
    </Wrapper>
  )
}
