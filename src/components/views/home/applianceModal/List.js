import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import DeleteButton from 'components/misc/DeleteButton'

const Title = styled.p`
  margin-bottom: 0.75rem;
  font-weight: bold;
  text-align: center;
`
const AppliancesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${(props) => props.theme.mq.small} {
    gap: 0.75rem;
  }
`
const Appliance = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 4.5rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.background};
  border: 0.125rem solid ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  transition: all 200ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.main};
    border: 0.125rem solid ${(props) => props.theme.colors.background};
  }
`
export default function List() {
  const { setAppliancesListOpen, appliances, occurences, addOccurence } =
    useContext(DataContext)

  return (
    <>
      <DeleteButton onClick={() => setAppliancesListOpen(false)} />
      <Title>Choisissez l'appareil à ajouter</Title>
      <AppliancesList>
        {appliances.map((appliance) => (
          <Appliance
            key={appliance.slug}
            disabled={occurences.find(
              (occurence) => occurence.slug === appliance.slug
            )}
            onClick={() => {
              addOccurence({
                slug: appliance.slug,
                start: appliance.defaultOccurence.start,
                duration: appliance.defaultOccurence.duration,
              })
              setAppliancesListOpen(false)
            }}
          >
            {appliance.name}
          </Appliance>
        ))}
      </AppliancesList>
    </>
  )
}
